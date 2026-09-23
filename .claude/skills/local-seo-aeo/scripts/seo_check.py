#!/usr/bin/env python3
"""Check a site the way an AI crawler sees it: raw HTML, no JavaScript.

    python3 seo_check.py https://theirdomain.co.uk [--client client.json]
    python3 seo_check.py ./their-site [--client client.json]

Given a URL it fetches the pages with a GPTBot style user agent and never runs
a line of JavaScript, which is the whole point: your browser runs the growth
kit, ChatGPT's crawler does not. Given a folder it reads the files instead.

Prints a PASS or FAIL line per check, a numbered list of what to fix, and the
one sentence you can honestly tell the client. Exits non-zero if anything
failed, so it can sit in a build step.

Standard library only. The only network calls it makes are to the site you
point it at.
"""

import argparse
import difflib
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ElementTree

USER_AGENT = "Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)"
TIMEOUT = 15
MAX_PAGES = 50

TITLE_MAX = 60
DESC_MIN = 120
DESC_MAX = 155

AI_CRAWLERS = [
    # The assistants people actually ask about local businesses, plus the two
    # search crawlers everything else follows. Applebot matters more than its
    # name suggests: it feeds Siri and Spotlight, which is half the phones in
    # the country, and it is the same data Apple Business Connect serves.
    "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User",
    "ClaudeBot", "Claude-User", "Claude-SearchBot", "Google-Extended", "Googlebot",
    "GoogleOther", "Bingbot", "Applebot", "Applebot-Extended", "Amazonbot",
    "meta-externalagent", "FacebookBot",
]

# A trade specific type counts as the LocalBusiness node, because every one of
# these is a LocalBusiness in schema.org. The list is the one in schema.md.
LOCAL_BUSINESS_TYPES = {
    "LocalBusiness", "Plumber", "Electrician", "RoofingContractor", "HVACBusiness",
    "HousePainter", "Locksmith", "MovingCompany", "HairSalon", "BeautySalon", "Dentist",
    "Veterinary", "VeterinaryCare", "AutoRepair", "CleaningService", "ProfessionalService",
    "Restaurant", "Cafe", "HomeAndConstructionBusiness", "GeneralContractor", "Store",
}

LDJSON_RE = re.compile(
    r"<script\b[^>]*type\s*=\s*[\"']application/ld\+json[\"'][^>]*>(.*?)</script\s*>", re.I | re.S)
TITLE_RE = re.compile(r"<title\b[^>]*>(.*?)</title\s*>", re.I | re.S)
META_RE = re.compile(r"<meta\b[^>]*>", re.I)
LINK_RE = re.compile(r"<link\b[^>]*>", re.I)
H1_RE = re.compile(r"<h1[\s>]", re.I)
ATTR_RE = re.compile(r"""([:@a-zA-Z_][-:.\w]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>`]+))""")
DIGIT_JOIN_RE = re.compile(r"(?<=\d)[\s\-.()\u00a0/]+(?=\d)")
PLACEHOLDER_RE = re.compile(r"\[[A-Za-z][^\]\"]{0,60}\]")
TODO_RE = re.compile(r"\b(todo|lorem|tbc|xxx)\b", re.I)


def attrs_of(tag_text):
    found = {}
    for match in ATTR_RE.finditer(tag_text):
        value = match.group(2)
        if value is None:
            value = match.group(3)
        if value is None:
            value = match.group(4)
        found[match.group(1).lower()] = value or ""
    return found


def phone_variants(phone):
    digits = re.sub(r"\D", "", str(phone))
    out = {digits}
    if digits.startswith("44"):
        out.add("0" + digits[2:])
    if digits.startswith("0"):
        out.add("44" + digits[1:])
    if digits.startswith("1") and len(digits) == 11:
        out.add(digits[1:])
    return {item for item in out if len(item) >= 7}


def squashed_digits(text):
    return DIGIT_JOIN_RE.sub("", text)


def meta_content(page_html, name):
    for tag in META_RE.finditer(page_html):
        found = attrs_of(tag.group(0))
        if found.get("name", "").lower() == name or found.get("property", "").lower() == name:
            return found.get("content", "").strip()
    return ""


def canonical_of(page_html):
    for tag in LINK_RE.finditer(page_html):
        found = attrs_of(tag.group(0))
        if found.get("rel", "").lower() == "canonical":
            return found.get("href", "").strip()
    return ""


def type_list(node):
    kind = node.get("@type", "")
    return [kind] if isinstance(kind, str) else [str(item) for item in kind or []]


def schema_nodes(page_html):
    """Every JSON-LD node on the page, flattened out of any @graph."""
    nodes, raw_blocks, broken = [], [], []
    for block in LDJSON_RE.finditer(page_html):
        text = block.group(1).strip()
        raw_blocks.append(text)
        try:
            data = json.loads(text.replace("<\\/", "</"))
        except ValueError as error:
            broken.append(str(error))
            continue
        for item in (data if isinstance(data, list) else [data]):
            if isinstance(item, dict) and isinstance(item.get("@graph"), list):
                nodes.extend(node for node in item["@graph"] if isinstance(node, dict))
            elif isinstance(item, dict):
                nodes.append(item)
    return nodes, raw_blocks, broken


def empty_strings_in(value, path="schema"):
    if isinstance(value, dict):
        for key, item in value.items():
            found = empty_strings_in(item, "%s.%s" % (path, key))
            if found:
                return found
    elif isinstance(value, list):
        for index, item in enumerate(value):
            found = empty_strings_in(item, "%s[%d]" % (path, index))
            if found:
                return found
    elif isinstance(value, str) and not value.strip():
        return path
    return None


# ------------------------------------------------------------------- fetching

def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "*/*"})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            return response.status, response.read().decode(charset, "replace")
    except urllib.error.HTTPError as error:
        return error.code, ""
    except (urllib.error.URLError, OSError, ValueError) as error:
        return 0, "%s" % error


def sitemap_urls(xml_text):
    try:
        root = ElementTree.fromstring(xml_text)
    except ElementTree.ParseError as error:
        return None, str(error)
    found = [node.text.strip() for node in root.iter()
             if node.tag.rsplit("}", 1)[-1] == "loc" and node.text]
    return found, ""


def robots_groups(text):
    groups, sitemaps, pending, last_was_rule = {}, [], [], False
    for line in text.splitlines():
        line = line.split("#", 1)[0].strip()
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key, value = key.strip().lower(), value.strip()
        if key == "user-agent":
            if last_was_rule:
                pending = []
            pending.append(value.lower())
            groups.setdefault(value.lower(), [])
            last_was_rule = False
        elif key in ("allow", "disallow"):
            for agent in pending:
                groups[agent].append((key, value))
            last_was_rule = True
        elif key == "sitemap":
            sitemaps.append(value)
    return groups, sitemaps


def crawler_blocked(groups, bot):
    rules = groups.get(bot.lower())
    if rules is None:
        rules = groups.get("*")
    if rules is None:
        return False  # nothing addresses this bot, so nothing blocks it
    if any(key == "allow" and value == "/" for key, value in rules):
        return False
    return any(key == "disallow" and value == "/" for key, value in rules)


# -------------------------------------------------------------- page gathering

def local_pages(site_dir):
    pages = []
    for name in sorted(os.listdir(site_dir)):
        if name.lower().endswith(".html") and os.path.isfile(os.path.join(site_dir, name)):
            pages.append(name)
    for folder in ("services", "areas"):
        sub = os.path.join(site_dir, folder)
        if os.path.isdir(sub):
            for name in sorted(os.listdir(sub)):
                if name.lower().endswith(".html") and os.path.isfile(os.path.join(sub, name)):
                    pages.append("%s/%s" % (folder, name))
    return pages


def local_url(base, rel):
    if rel == "index.html":
        return base + "/"
    if rel.endswith("/index.html"):
        return base + "/" + rel[: -len("index.html")]
    return base + "/" + rel


def gather_local(site_dir, client):
    pages, notes = [], []
    files = local_pages(site_dir)
    if not files:
        sys.exit("no .html files in %s (looked at the top level, services/ and areas/)" % site_dir)
    base = ((client.get("business") or {}).get("site") or "").strip().rstrip("/")
    if not base:
        with open(os.path.join(site_dir, files[0]), "r", encoding="utf-8") as handle:
            found = canonical_of(handle.read())
        if found:
            parts = urllib.parse.urlsplit(found)
            base = "%s://%s" % (parts.scheme, parts.netloc)
            notes.append("no --client, so the site URL was read off the first canonical: %s" % base)
        else:
            notes.append("no --client and no canonical on the first page, so canonical URLs cannot be checked")
    for rel in files:
        with open(os.path.join(site_dir, rel), "r", encoding="utf-8") as handle:
            pages.append({"label": rel, "url": local_url(base, rel) if base else "", "html": handle.read(),
                          "dir": os.path.dirname(os.path.join(site_dir, rel))})
    site_files = {}
    for name in ("robots.txt", "sitemap.xml"):
        path = os.path.join(site_dir, name)
        if os.path.isfile(path):
            with open(path, "r", encoding="utf-8") as handle:
                site_files[name] = handle.read()
    return pages, site_files, base, notes


def gather_live(url):
    parts = urllib.parse.urlsplit(url)
    base = "%s://%s" % (parts.scheme, parts.netloc)
    notes, site_files = [], {}
    for name in ("robots.txt", "sitemap.xml"):
        status, body = fetch(base + "/" + name)
        if status == 200:
            site_files[name] = body

    wanted = [url]
    if "sitemap.xml" in site_files:
        found, _ = sitemap_urls(site_files["sitemap.xml"])
        for item in found or []:
            if item not in wanted:
                wanted.append(item)
    if len(wanted) > MAX_PAGES:
        notes.append("sitemap lists %d URLs, only the first %d were checked" % (len(wanted), MAX_PAGES))
        wanted = wanted[:MAX_PAGES]

    pages = []
    for item in wanted:
        status, body = fetch(item)
        pages.append({"label": item, "url": item, "html": body if status == 200 else "",
                      "status": status})
    return pages, site_files, base, notes


# --------------------------------------------------------------------- checks

class Report(object):
    def __init__(self):
        self.rows = []
        self.fixes = []

    def add(self, section, ok, message, fix=""):
        self.rows.append((section, ok, message))
        if not ok:
            self.fixes.append(fix or message)

    @property
    def failed(self):
        return sum(1 for _, ok, _ in self.rows if not ok)

    @property
    def passed(self):
        return sum(1 for _, ok, _ in self.rows if ok)


def check_page(report, page, reference):
    label = page["label"]
    page_html = page["html"]
    if page.get("status") not in (None, 200):
        how = "could not be fetched at all" if page["status"] == 0 else "returned HTTP %s" % page["status"]
        report.add(label, False, "page %s" % how,
                   "%s %s, so no crawler can read it" % (label, how))
        return None
    if not page_html.strip():
        report.add(label, False, "page is empty", "%s came back empty" % label)
        return None

    squashed = squashed_digits(page_html)
    nodes, raw_blocks, broken = schema_nodes(page_html)
    local = next((node for node in nodes
                   if LOCAL_BUSINESS_TYPES.intersection(type_list(node))), None)

    name = reference.get("name") or (local or {}).get("name", "")
    phone = reference.get("phone") or (local or {}).get("telephone", "")
    services = reference.get("services") or schema_service_names(nodes)

    report.add(label, bool(name) and name.lower() in page_html.lower(),
               "business name in the raw HTML",
               "%s: the business name is not in the HTML an AI crawler reads" % label)
    report.add(label, bool(phone) and any(item in squashed for item in phone_variants(phone)),
               "phone number in the raw HTML",
               "%s: the phone number is not in the HTML an AI crawler reads" % label)
    hit = next((item for item in services if item.lower() in page_html.lower()), "")
    report.add(label, bool(hit), "at least one service name in the raw HTML (%s)" % (hit or "none found"),
               "%s: no service name in the HTML, so an assistant cannot say what they sell" % label)

    report.add(label, bool(raw_blocks) and not broken,
               "JSON-LD present and parses" if raw_blocks else "JSON-LD present",
               "%s: %s" % (label, broken[0] if broken else "no JSON-LD in the HTML, only script written schema counts for nothing"))
    report.add(label, local is not None, "LocalBusiness node in the JSON-LD",
               "%s: no LocalBusiness node in the JSON-LD (use LocalBusiness or the trade type, "
               "for example RoofingContractor)" % label)
    if local is not None:
        address = local.get("address") or {}
        complete = bool(str(local.get("name", "")).strip()) and bool(str(local.get("telephone", "")).strip()) \
            and isinstance(address, dict) and any(str(value).strip() for key, value in address.items() if key != "@type")
        report.add(label, complete, "LocalBusiness has name, phone and address",
                   "%s: the LocalBusiness node is missing a name, phone or address" % label)
    placeholder = None
    for text in raw_blocks:
        placeholder = PLACEHOLDER_RE.search(text) or TODO_RE.search(text)
        if placeholder:
            break
    report.add(label, placeholder is None, "no placeholder text in the JSON-LD",
               "%s: the JSON-LD still contains %s" % (label, placeholder.group(0) if placeholder else ""))
    blank = empty_strings_in([node for node in nodes]) if nodes else None
    report.add(label, blank is None, "no empty values in the JSON-LD",
               "%s: the JSON-LD has an empty value at %s, leave the field out instead" % (label, blank))

    heads = len(H1_RE.findall(page_html))
    report.add(label, heads == 1, "exactly one h1 (found %d)" % heads,
               "%s: %d h1 headings, there must be exactly one" % (label, heads))

    title_match = TITLE_RE.search(page_html)
    title = re.sub(r"\s+", " ", title_match.group(1)).strip() if title_match else ""
    report.add(label, bool(title) and len(title) <= TITLE_MAX,
               "title present and %d characters" % len(title),
               "%s: title is %s" % (label, "missing" if not title else "%d characters, trim it to %d" % (len(title), TITLE_MAX)))

    description = meta_content(page_html, "description")
    report.add(label, DESC_MIN <= len(description) <= DESC_MAX,
               "meta description %d characters" % len(description),
               "%s: meta description is %d characters, it must be %d to %d"
               % (label, len(description), DESC_MIN, DESC_MAX))

    canonical = canonical_of(page_html)
    if page["url"]:
        matches = canonical.rstrip("/") == page["url"].rstrip("/")
        report.add(label, bool(canonical) and matches, "canonical present and matches the page URL",
                   "%s: canonical is %s, expected %s"
                   % (label, canonical or "missing", page["url"]))
    else:
        report.add(label, bool(canonical), "canonical present",
                   "%s: no canonical link" % label)

    if local is None:
        return None
    address = local.get("address") or {}
    return (
        str(local.get("name", "")),
        ",".join(sorted(phone_variants(local.get("telephone", "")))) or "none",
        json.dumps({key: value for key, value in address.items() if key != "@type"}, sort_keys=True),
    )


def schema_service_names(nodes):
    names = []
    for node in nodes:
        if "Service" in type_list(node) and node.get("name"):
            names.append(node["name"])
        catalog = node.get("hasOfferCatalog") or {}
        for offer in catalog.get("itemListElement") or []:
            offered = (offer or {}).get("itemOffered") or {}
            if offered.get("name"):
                names.append(offered["name"])
    return names


IMG_RE = re.compile(r"<img\b[^>]*>", re.I)
HEAVY_IMAGE = 300 * 1024


def check_ranking_basics(report, page, reference):
    """The things that decide whether a page that IS readable also ranks and
    converts: it must be indexable, tappable on a phone, quick, and counted."""
    label, page_html = page["label"], page["html"]

    robots_meta = (meta_content(page_html, "robots") or "").lower()
    report.add(label, "noindex" not in robots_meta,
               "page is not marked noindex",
               "%s carries <meta name=\"robots\" content=\"noindex\">, which tells Google to leave it out "
               "of the index entirely. Nothing else on this list matters until that is gone." % label)

    phone = reference.get("phone", "")
    if phone:
        wanted = re.sub(r"[^0-9+]", "", phone)[-9:]
        tels = re.findall(r'href="tel:([^"]+)"', page_html, re.I)
        tapable = any(re.sub(r"[^0-9+]", "", t).endswith(wanted) for t in tels)
        # Three different problems, and telling them apart matters. A page with
        # no tel: link at all is a phone that cannot be tapped. A page whose
        # tel: links point somewhere else is the template's demo number still
        # sitting on a client's site, which sends their customers to a stranger
        # and puts a second phone number on the web for a business whose map
        # ranking depends on one consistent number everywhere. That one is the
        # worst thing in this whole checklist, so it gets said plainly.
        if tels and not tapable:
            wrong = ", ".join(sorted(set(tels))[:3])
            why = ("%s still calls %s, which is not the client's number. That is the template's demo "
                   "number going out on a real business's site: their customers ring a stranger, and "
                   "Google sees two different numbers for one business, which is the fastest way to lose "
                   "the map pack. Replace every one of them." % (label, wrong))
        else:
            why = ("%s shows the number but not as a tel: link, so on a phone it cannot be tapped, and the "
                   "CRM's Calls tapped figure stays at zero" % label)
        report.add(label, tapable, "the phone number is a tap to call link", why)

    imgs = IMG_RE.findall(page_html)
    if imgs:
        no_alt = [i for i in imgs if not re.search(r'\balt\s*=', i, re.I)]
        report.add(label, not no_alt, "every image has alt text",
                   "%s has %d image(s) with no alt text: Google reads alt text, and a screen reader has "
                   "nothing else to say" % (label, len(no_alt)))
        no_size = [i for i in imgs if not (re.search(r'\bwidth\s*=', i, re.I) and re.search(r'\bheight\s*=', i, re.I))]
        report.add(label, len(no_size) <= len(imgs) // 4, "images carry width and height",
                   "%s has %d image(s) with no width and height, so the page jumps as it loads, which Google "
                   "measures and people hate" % (label, len(no_size)))

    page_dir = page.get("dir")
    if page_dir:
        heavy = []
        for tag in imgs:
            src = re.search(r'src="([^"]+)"', tag, re.I)
            if not src or src.group(1).startswith(("http", "data:", "//")):
                continue
            # Not lstrip("./"): that eats the dots in ../../shared/logo.webp
            # and makes a real file look like a missing one.
            rel = src.group(1).split("?")[0]
            path = os.path.normpath(os.path.join(page_dir, rel[2:] if rel.startswith("./") else rel))
            if os.path.isfile(path) and os.path.getsize(path) > HEAVY_IMAGE:
                heavy.append((os.path.basename(path), os.path.getsize(path) // 1024))
        report.add(label, not heavy, "no image over %dKB" % (HEAVY_IMAGE // 1024),
                   "%s loads %s. A slow page loses the customer before the phone number does any work; "
                   "save them as WebP under 300KB" % (label, ", ".join("%s at %dKB" % h for h in heavy)))

    if page["label"] in ("index.html", "/"):
        has_ga = bool(re.search(r"gtag/js\?id=G-|G-[A-Z0-9]{6,}", page_html))
        report.add(label, has_ga, "Google Analytics tag on the site",
                   "no Google Analytics tag found, so the CRM's Analytics page has nothing to show. Put the "
                   "measurement ID (it starts G-) in the site's settings")

    if page.get("url", "").startswith("https://"):
        mixed = re.findall(r'(?:src|href)="http://[^"]+"', page_html)
        report.add(label, not mixed, "no http assets on an https page",
                   "%s loads %d thing(s) over plain http, which browsers block and Google counts against the "
                   "page" % (label, len(mixed)))


def visible_text(page_html):
    body = re.sub(r"<(script|style|svg)\b.*?</\1>", " ", page_html, flags=re.S | re.I)
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", body)).strip().lower()


def check_thin(report, pages):
    """Two pages that are the same page with the town swapped.

    This is the one mistake that takes a whole site down rather than one page:
    Google calls them doorway pages, and our own on-page rules tell you never
    to build them, which until now nothing checked. The test the rule gives is
    the test here: if you can swap the town name and the page still reads true,
    it should not be its own page."""
    texts = [(page["label"], visible_text(page["html"])) for page in pages]
    texts = [(label, text) for label, text in texts if len(text) > 400]
    flagged = []
    for i in range(len(texts)):
        for j in range(i + 1, len(texts)):
            a, b = texts[i][1][:4000], texts[j][1][:4000]
            ratio = difflib.SequenceMatcher(None, a, b).quick_ratio()
            if ratio > 0.9:
                ratio = difflib.SequenceMatcher(None, a, b).ratio()
            if ratio >= 0.85:
                flagged.append((texts[i][0], texts[j][0], int(ratio * 100)))
    report.add("site", not flagged, "every page says something different",
               "%s. That is the same page with the words swapped, which Google treats as a doorway "
               "page and counts against the whole site. Write what is actually true of that town or "
               "that job, or do not give it a page"
               % "; ".join("%s and %s are %d%% the same" % f for f in flagged[:3]))


def check_unique(report, seen):
    """Two pages with the same title are two pages competing with each other."""
    for what, values in seen.items():
        real = [v for v in values if v]
        dupes = {v for v in real if real.count(v) > 1}
        report.add("site", not dupes, "every page has its own %s" % what,
                   "more than one page shares the same %s (%s), so Google has to choose between them"
                   % (what, "; ".join(sorted(dupes))[:120]))


def check_site(report, site_files, base, pages, live):
    robots = site_files.get("robots.txt")
    report.add("site", robots is not None, "robots.txt exists",
               "there is no robots.txt at the site root")
    if robots is not None:
        groups, sitemaps = robots_groups(robots)
        report.add("site", bool(sitemaps), "robots.txt names a sitemap",
                   "robots.txt has no Sitemap: line")
        blocked = [bot for bot in AI_CRAWLERS if crawler_blocked(groups, bot)]
        report.add("site", not blocked, "robots.txt lets every AI crawler in",
                   "robots.txt blocks %s" % ", ".join(blocked))

    sitemap = site_files.get("sitemap.xml")
    report.add("site", sitemap is not None, "sitemap.xml exists",
               "there is no sitemap.xml at the site root")
    if sitemap is not None:
        urls, error = sitemap_urls(sitemap)
        report.add("site", urls is not None, "sitemap.xml is valid XML",
                   "sitemap.xml will not parse: %s" % error)
        if urls:
            report.add("site", len(urls) > 0, "sitemap lists %d URL(s)" % len(urls), "sitemap is empty")
            if live:
                statuses = {page["url"]: page.get("status") for page in pages}
                bad = []
                for url in urls:
                    status = statuses.get(url)
                    if status is None:
                        status, _ = fetch(url)
                    if status != 200:
                        bad.append("%s (HTTP %s)" % (url, status))
                report.add("site", not bad, "every sitemap URL returns 200",
                           "these sitemap URLs do not return 200: %s" % ", ".join(bad))


def check_consistency(report, fingerprints):
    real = [item for item in fingerprints if item]
    if len(real) < 2:
        return
    same = len(set(real)) == 1
    report.add("site", same, "name, address and phone identical on every page",
               "the business name, address or phone differs between pages, which Google counts against you")


# ------------------------------------------------------------------------ main

def main(argv=None):
    parser = argparse.ArgumentParser(description="Check a site the way an AI crawler sees it.")
    parser.add_argument("target", help="https URL or a local site folder")
    parser.add_argument("--client", default="", help="path to client.json, for checking against the real details")
    args = parser.parse_args(argv)

    client = {}
    if args.client:
        with open(args.client, "r", encoding="utf-8") as handle:
            client = json.load(handle)

    live = args.target.startswith(("http://", "https://"))
    if live:
        pages, site_files, base, notes = gather_live(args.target)
    else:
        site_dir = os.path.abspath(args.target)
        if not os.path.isdir(site_dir):
            sys.exit("no such URL or folder: %s" % args.target)
        pages, site_files, base, notes = gather_local(site_dir, client)

    business = client.get("business") or {}
    reference = {
        "name": business.get("name", ""),
        "phone": business.get("phone", ""),
        "services": [service["name"] for service in client.get("services") or [] if service.get("name")],
    }

    print("Checking %d page(s) with no JavaScript, as GPTBot would: %s" % (len(pages), base or args.target))
    for note in notes:
        print("  note: %s" % note)
    print("")

    report = Report()
    fingerprints = []
    seen = {"title": [], "meta description": []}
    for page in pages:
        fingerprints.append(check_page(report, page, reference))
        check_ranking_basics(report, page, reference)
        title = re.search(r"<title[^>]*>(.*?)</title>", page["html"], re.S | re.I)
        seen["title"].append(title.group(1).strip() if title else "")
        seen["meta description"].append(meta_content(page["html"], "description"))
    check_consistency(report, fingerprints)
    check_unique(report, seen)
    check_thin(report, pages)
    check_site(report, site_files, base, pages, live)

    section = None
    for row_section, ok, message in report.rows:
        if row_section != section:
            section = row_section
            print(section)
        print("  %s  %s" % ("PASS" if ok else "FAIL", message))

    print("")
    print("%d passed, %d failed." % (report.passed, report.failed))
    if report.failed:
        print("")
        print("Fix these, then run it again:")
        for index, fix in enumerate(report.fixes, 1):
            print("  %d. %s" % (index, fix))
        print("")
        print("Do not tell the client the site is ready for AI search yet. %d check(s) failed."
              % report.failed)
        return 1

    print("")
    print("Tell the client: every page carries your name, phone, address and services in the HTML "
          "itself, so ChatGPT, Claude, Perplexity and Google can all read them without running any "
          "JavaScript, and the sitemap and robots file let them in.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
