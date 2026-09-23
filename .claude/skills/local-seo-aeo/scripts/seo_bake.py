#!/usr/bin/env python3
"""Bake the SEO and AEO layer into a static site, in the HTML, not at runtime.

    python3 seo_bake.py --client client.json --site ./their-site \
        [--base https://theirdomain.co.uk] [--keep-titles] [--dry-run]

For every page it writes title, meta description, canonical, Open Graph,
Twitter card and one JSON-LD graph inside <head>, then writes robots.txt,
sitemap.xml and llms.txt at the site root. Nothing in the body is touched, the
growth kit keeps working, and a value that is missing from client.json is left
out and reported at the end rather than invented.

Standard library only. No network calls. Safe to run again: everything it
writes sits between two marker comments and is replaced, not duplicated.
"""

import argparse
import datetime
import html
import json
import os
import re
import sys

MARKER_START = "<!-- seo-bake:start (written by seo_bake.py, do not edit by hand) -->"
MARKER_END = "<!-- seo-bake:end -->"

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

DAY_NAMES = {
    "mo": "Monday", "monday": "Monday",
    "tu": "Tuesday", "tue": "Tuesday", "tuesday": "Tuesday",
    "we": "Wednesday", "wed": "Wednesday", "wednesday": "Wednesday",
    "th": "Thursday", "thu": "Thursday", "thursday": "Thursday",
    "fr": "Friday", "fri": "Friday", "friday": "Friday",
    "sa": "Saturday", "sat": "Saturday", "saturday": "Saturday",
    "su": "Sunday", "sun": "Sunday", "sunday": "Sunday",
}

CURRENCY_SIGNS = {"GBP": "£", "USD": "$", "EUR": "€", "AUD": "$", "CAD": "$"}

HEAD_RE = re.compile(r"(<head\b[^>]*>)(.*?)(</head\s*>)", re.I | re.S)
FENCE_RE = re.compile(
    r"[ \t]*" + re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END) + r"[ \t]*\n?",
    re.S,
)
TITLE_RE = re.compile(r"[ \t]*<title\b[^>]*>.*?</title\s*>[ \t]*\n?", re.I | re.S)
META_RE = re.compile(r"[ \t]*<meta\b[^>]*>[ \t]*\n?", re.I)
LINK_RE = re.compile(r"[ \t]*<link\b[^>]*>[ \t]*\n?", re.I)
LDJSON_RE = re.compile(
    r"[ \t]*<script\b[^>]*type\s*=\s*[\"']application/ld\+json[\"'][^>]*>.*?</script\s*>[ \t]*\n?",
    re.I | re.S,
)
ATTR_RE = re.compile(
    r"""([:@a-zA-Z_][-:.\w]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>`]+))"""
)
IMG_RE = re.compile(r"<img\b[^>]*>", re.I)
H1_RE = re.compile(r"<h1\b[^>]*>(.*?)</h1\s*>", re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")


# --------------------------------------------------------------- small helpers

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


def host_of(url):
    match = re.match(r"https?://([^/]+)", str(url).strip(), re.I)
    return match.group(1).lower().lstrip("www.") if match else ""


def slugify(text):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", str(text).lower())).strip("-")


def clean_text(fragment):
    return re.sub(r"\s+", " ", html.unescape(TAG_RE.sub(" ", fragment))).strip()


def sentence(text):
    text = str(text).strip().rstrip(";,")
    if not text:
        return ""
    return text if text[-1] in ".!?" else text + "."


def trim_words(text, limit):
    if len(text) <= limit:
        return text
    cut = text[:limit]
    if " " in cut:
        cut = cut[: cut.rindex(" ")]
    return cut.rstrip(" ,;:.")


def esc_attr(value):
    return html.escape(str(value), quote=True)


def money(amount, currency):
    sign = CURRENCY_SIGNS.get(str(currency or "").upper(), "")
    return (sign + str(amount)) if sign else "%s %s" % (amount, currency or "")


# ------------------------------------------------------------- reading the job

def load_client(path):
    try:
        with open(path, "r", encoding="utf-8") as handle:
            client = json.load(handle)
    except OSError as error:
        sys.exit("cannot read %s: %s" % (path, error))
    except ValueError as error:
        sys.exit("%s is not valid JSON: %s" % (path, error))
    business = client.get("business") or {}
    for field in ("name", "phone"):
        if not str(business.get(field) or "").strip():
            sys.exit("client.json needs business.%s before anything can be baked" % field)
    return client


def find_pages(site_dir):
    pages = []
    for name in sorted(os.listdir(site_dir)):
        if name.lower().endswith(".html") and os.path.isfile(os.path.join(site_dir, name)):
            pages.append(name)
    for folder in ("services", "areas"):
        sub = os.path.join(site_dir, folder)
        if not os.path.isdir(sub):
            continue
        for name in sorted(os.listdir(sub)):
            if name.lower().endswith(".html") and os.path.isfile(os.path.join(sub, name)):
                pages.append("%s/%s" % (folder, name))
    return pages


def page_url(base, rel):
    if rel == "index.html":
        return base + "/"
    if rel.endswith("/index.html"):
        return base + "/" + rel[: -len("index.html")]
    return base + "/" + rel


def _words(stem):
    return [w for w in str(stem).split("-") if w]


def _named_by(stem, candidates):
    """Which candidate a file name is about.

    The file names that rank are the ones that read like the search:
    rewiring-sheffield.html, boiler-repair-leeds.html, electrician-rotherham.html.
    So a candidate counts when its words sit at the start or the end of the
    name, and the longest match wins, because "boiler repair" must beat
    "repair". Exact names still match, as do pages in services/ and areas/."""
    words = _words(stem)
    best = None
    for slug, value in candidates:
        want = _words(slug)
        if not want or len(want) > len(words):
            continue
        if words[:len(want)] == want or words[-len(want):] == want:
            if best is None or len(want) > best[0]:
                best = (len(want), value)
    return best[1] if best else None


def match_service(stem, client):
    candidates = []
    for service in client.get("services") or []:
        for slug in (service.get("slug"), slugify(service.get("name", ""))):
            if slug:
                candidates.append((slug, service))
    return _named_by(stem, candidates)


def match_area(stem, client):
    return _named_by(stem, [(slugify(area), area) for area in client.get("areas") or []])


def classify(rel, client):
    stem = os.path.splitext(os.path.basename(rel))[0].lower()
    if rel == "index.html":
        return "home", None
    if rel.startswith("services/"):
        service = match_service(stem, client)
        return ("service", service) if service else ("page", None)
    if rel.startswith("areas/"):
        area = match_area(stem, client)
        return ("area", area) if area else ("page", None)
    service = match_service(stem, client)
    if service:
        return "service", service
    area = match_area(stem, client)
    if area:
        return "area", area
    return "page", None


def main_service(client):
    services = client.get("services") or []
    for service in services:
        if service.get("money"):
            return service
    return services[0] if services else None


# ------------------------------------------------------------ title and description

def own_heading(page_html, about):
    """The page's own h1, when it names what the page is about.

    A page written for "electricians in Rotherham" should not be titled
    "Rewiring Rotherham" just because rewiring is the main service: the title
    and the h1 disagreeing is the thing Google rewrites. The template hero
    headings are slogans ("Safe circuits. Tidy walls."), so a heading only
    wins when it actually names the service or the town, and is short enough
    to leave room for the business name."""
    heading = first_h1(page_html)
    if not heading or len(heading) > 45:
        return ""
    low = heading.lower()
    for word in about:
        word = str(word or "").strip().lower()
        if word and word in low:
            return heading
    return ""


def pick_title(kind, client, subject, page_html):
    business = client.get("business") or {}
    name = business.get("name", "")
    town = (client.get("address") or {}).get("town", "")
    why = client.get("why_us") or []
    service = main_service(client)
    service_name = service.get("name") if service else (business.get("type") or "")

    if kind == "home":
        head = " ".join(part for part in [service_name, town] if part)
        middle = why[0] if why else ""
    elif kind == "service":
        head = own_heading(page_html, [subject.get("name", "")]) or (
            "%s in %s" % (subject.get("name", ""), town) if town else subject.get("name", ""))
        blurb = subject.get("blurb") or ""
        middle = blurb.split(",")[0].split(".")[0].strip() if blurb else (why[0] if why else "")
    elif kind == "area":
        head = own_heading(page_html, [subject]) or " ".join(part for part in [service_name, subject] if part)
        middle = why[1] if len(why) > 1 else (why[0] if why else "")
    elif str(subject or "").lower().startswith(("faq", "questions")) or \
            os.path.splitext(os.path.basename(str(subject or "")))[0].lower() in ("faq", "faqs", "questions"):
        head = "%s questions, answered" % service_name
        middle = ""
    else:
        heading = first_h1(page_html)
        head = heading or os.path.splitext(os.path.basename(subject or "page"))[0].replace("-", " ").title()
        middle = ""

    candidates = []
    if middle:
        candidates.append("%s, %s | %s" % (head, middle, name))
    candidates.append("%s | %s" % (head, name))
    candidates.append(head)
    for candidate in candidates:
        if len(candidate) <= TITLE_MAX:
            return candidate
    return trim_words(candidates[-1], TITLE_MAX)


def first_h1(page_html):
    match = H1_RE.search(page_html)
    return clean_text(match.group(1)) if match else ""


def first_lede(page_html):
    """The opening line under the page's heading, if the page has one."""
    match = re.search(r'<p[^>]*class="[^"]*lede[^"]*"[^>]*>(.*?)</p>', page_html, re.S | re.I)
    if not match:
        match = re.search(r"<h1[^>]*>.*?</h1>\s*(?:<[^p][^>]*>\s*)*<p[^>]*>(.*?)</p>", page_html, re.S | re.I)
    return clean_text(match.group(1)) if match else ""


def compose_description(lead, extras, phone):
    tail = "Call " + phone
    parts = [sentence(lead)] if lead else []
    for extra in extras:
        text = sentence(extra)
        if not text:
            continue
        current = " ".join(parts + [text])
        if len(current) + 1 + len(tail) > DESC_MAX:
            continue
        parts.append(text)
        if len(" ".join(parts)) + 1 + len(tail) >= DESC_MIN:
            break
    body = " ".join(parts)
    if len(body) + 1 + len(tail) > DESC_MAX:
        body = sentence(trim_words(body, DESC_MAX - len(tail) - 2))
    return (body + " " + tail).strip()


def pick_description(kind, client, subject, page_html=""):
    business = client.get("business") or {}
    address = client.get("address") or {}
    town = address.get("town", "")
    areas = client.get("areas") or []
    why = client.get("why_us") or []
    service = main_service(client)
    covering = ("Covering " + ", ".join(areas[:4])) if areas else ""

    if kind == "service":
        price = ""
        if subject.get("price_from"):
            price = "From %s%s" % (
                money(subject["price_from"], business.get("currency")),
                (" " + subject["price_note"]) if subject.get("price_note") else "",
            )
        lead = "%s in %s" % (subject.get("name", ""), town) if town else subject.get("name", "")
        extras = [subject.get("blurb", ""), price] + why + [covering]
    elif kind == "area":
        heading = own_heading(page_html, [subject])
        lead = ("%s from %s" % (heading, business.get("name", ""))) if heading else "%s in %s from %s" % (
            service.get("name") if service else business.get("type", ""),
            subject,
            business.get("name", ""),
        )
        # The page's own opening line first: it was written about this town.
        extras = [first_lede(page_html)] + why + [business.get("one_line", ""), covering]
    elif kind == "page":
        # a page that is not the home page, a service or a town: lead on its own
        # heading so two pages never share a description
        lead = first_h1(page_html) or business.get("one_line", "")
        extras = [business.get("one_line", ""), covering] + why
    else:
        lead = business.get("one_line") or "%s in %s" % (
            service.get("name") if service else business.get("type", ""), town)
        extras = [covering] + why + [client.get("emergency", "")]

    return compose_description(lead, extras, business.get("phone", ""))


# -------------------------------------------------------------------- the graph

def business_types(client):
    kind = str((client.get("business") or {}).get("type") or "").strip()
    if not kind or kind == "LocalBusiness":
        return "LocalBusiness"
    return ["LocalBusiness", kind]


def address_node(client, notes):
    address = client.get("address") or {}
    node = {"@type": "PostalAddress"}
    if address.get("show") is False:
        notes.add("address.show is false, so the street is left out of the schema")
    elif address.get("street"):
        node["streetAddress"] = address["street"]
    for key, field in (("town", "addressLocality"), ("region", "addressRegion"),
                       ("postcode", "postalCode"), ("country", "addressCountry")):
        if address.get(key) and not (key == "postcode" and address.get("show") is False):
            node[field] = address[key]
    return node if len(node) > 1 else None


def hours_nodes(client, notes):
    nodes = []
    for block in client.get("hours") or []:
        days = [DAY_NAMES.get(str(day).strip().lower()) for day in block.get("days") or []]
        days = [day for day in days if day]
        if not days or not block.get("open") or not block.get("close"):
            notes.add("an entry in hours is incomplete, so it is not in openingHoursSpecification")
            continue
        nodes.append({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": days,
            "opens": block["open"],
            "closes": block["close"],
        })
    if not nodes:
        notes.add("no usable hours, so no openingHoursSpecification")
    return nodes


def local_business_node(client, base, site_image, notes):
    business = client.get("business") or {}
    address = client.get("address") or {}
    node = {
        "@type": business_types(client),
        "@id": base + "/#local",
        "name": business["name"],
        "url": base + "/",
        "telephone": business["phone"],
    }
    if business.get("one_line"):
        node["description"] = business["one_line"]
    if business.get("email"):
        node["email"] = business["email"]
    else:
        notes.add("no business.email, so no email in the schema")
    if site_image:
        node["image"] = site_image
    else:
        notes.add("no image found on the home page, so no image in the schema")
    if business.get("price_range"):
        node["priceRange"] = business["price_range"]
    else:
        notes.add("no business.price_range, so no priceRange")

    postal = address_node(client, notes)
    if postal:
        node["address"] = postal
    else:
        notes.add("no address fields, so no address in the schema")

    if address.get("lat") is not None and address.get("lng") is not None:
        node["geo"] = {
            "@type": "GeoCoordinates",
            "latitude": address["lat"],
            "longitude": address["lng"],
        }
    else:
        notes.add("no lat/lng, so no geo node")

    hours = hours_nodes(client, notes)
    if hours:
        node["openingHoursSpecification"] = hours

    areas = client.get("areas") or []
    if areas:
        node["areaServed"] = [{"@type": "Place", "name": area} for area in areas]
    else:
        notes.add("no areas, so no areaServed")

    same_as = [url for url in (client.get("profiles") or {}).values() if str(url).strip()]
    if same_as:
        node["sameAs"] = same_as
    else:
        notes.add("no profiles filled in, so no sameAs links")

    services = client.get("services") or []
    if services:
        node["hasOfferCatalog"] = {
            "@type": "OfferCatalog",
            "name": "Services",
            "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": service["name"]}}
                for service in services if service.get("name")
            ],
        }

    # No aggregateRating, on purpose, even when the client has a real one.
    # Google: "If the entity that's being reviewed controls the reviews about
    # itself, their pages that use LocalBusiness or any other type of
    # Organization structured data are ineligible for star review feature."
    # (developers.google.com/search/docs/appearance/structured-data/review-snippet)
    # A business marking up its own rating earns no stars and is doing the one
    # thing the guidance names. The rating belongs on the Google Business
    # Profile, where it counts for the map pack, and in plain words on the page.
    if (client.get("reviews") or {}).get("rating"):
        notes.add("the rating is not in the schema on purpose: Google ignores a business rating itself, "
                  "and it belongs on the Google Business Profile")
    return node


ADVICE_NAMED = re.compile(r"(^|[-_/])(cost|price|prices|guide|how|what|why|when|advice|explained|"
                          r"checklist|compare|vs|faq|questions|do-i-need|worth-it)([-_/.]|$)", re.I)


def advice_node(client, base, url, title, site_image, rel, site_dir):
    """An advice page is an Article, written by the owner, not a shop window.

    It matters for the AEO half specifically: an assistant deciding whose
    answer to quote leans on content that has an author and a date, and a bare
    WebPage has neither. The author is the Person node, so the business, the
    owner and the answer are one connected thing rather than three."""
    name = os.path.basename(rel)
    if not ADVICE_NAMED.search(name) or name in ("index.html",):
        return None
    if rel.startswith(("services/", "areas/")):
        return None
    owner = str((client.get("business") or {}).get("owner") or "").strip()
    node = {
        "@type": "Article",
        "@id": url + "#article",
        "headline": title,
        "mainEntityOfPage": {"@id": url},
        "isPartOf": {"@id": base + "/#site"},
        "publisher": {"@id": base + "/#org"},
        "about": {"@id": base + "/#local"},
    }
    node["author"] = {"@id": base + "/#owner"} if owner else {"@id": base + "/#org"}
    if site_image:
        node["image"] = site_image
    stamp = file_date(os.path.join(site_dir, rel))
    if stamp:
        node["datePublished"] = stamp
        node["dateModified"] = stamp
    return node


def file_date(path):
    """The page's own last-modified date, so nothing invents a publish date."""
    try:
        return datetime.date.fromtimestamp(os.path.getmtime(path)).isoformat()
    except OSError:
        return None


def person_node(client, base):
    """The owner as a named entity, when the form gave a name.

    Assistants get asked "who runs it" and "is it a real person or a call
    centre", and this is the only structured place that answer exists. On a
    one-man trade it is also what separates a real business from a template."""
    owner = str((client.get("business") or {}).get("owner") or "").strip()
    if not owner:
        return None
    return {
        "@type": "Person",
        "@id": base + "/#owner",
        "name": owner,
        "worksFor": {"@id": base + "/#org"},
    }


def organization_node(client, base, site_image, notes):
    business = client.get("business") or {}
    node = {
        "@type": "Organization",
        "@id": base + "/#org",
        "name": business["name"],
        "url": base + "/",
        "telephone": business["phone"],
    }
    if business.get("legal_name"):
        node["legalName"] = business["legal_name"]
    if business.get("email"):
        node["email"] = business["email"]
    if site_image:
        node["logo"] = site_image
        node["image"] = site_image
    if business.get("founded"):
        node["foundingDate"] = str(business["founded"])
    if str(business.get("owner") or "").strip():
        node["founder"] = {"@id": base + "/#owner"}
    same_as = [url for url in (client.get("profiles") or {}).values() if str(url).strip()]
    if same_as:
        node["sameAs"] = same_as
    return node


def faq_nodes(faqs, page_id):
    return {
        "@type": "FAQPage",
        "@id": page_id + "#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": faq["q"],
                "acceptedAnswer": {"@type": "Answer", "text": faq["a"]},
            }
            for faq in faqs
        ],
    }


def faqs_for(kind, client, subject):
    faqs = [faq for faq in client.get("faqs") or [] if faq.get("q") and faq.get("a")]
    if not faqs:
        return []
    if kind in ("home", "page"):
        return faqs
    target = subject.get("name") if kind == "service" else subject
    words = [word for word in re.split(r"\W+", str(target).lower()) if len(word) > 3]
    if not words:
        return []
    matched = []
    for faq in faqs:
        haystack = (faq["q"] + " " + faq["a"]).lower()
        if any(word in haystack for word in words):
            matched.append(faq)
    return matched


def breadcrumb_node(base, rel, page_title, site_dir):
    crumbs = [{"@type": "ListItem", "position": 1, "name": "Home", "item": base + "/"}]
    folder = rel.split("/")[0] if "/" in rel else ""
    if folder in ("services", "areas") and os.path.isfile(os.path.join(site_dir, folder, "index.html")):
        crumbs.append({
            "@type": "ListItem",
            "position": 2,
            "name": folder.capitalize(),
            "item": "%s/%s/" % (base, folder),
        })
    crumbs.append({
        "@type": "ListItem",
        "position": len(crumbs) + 1,
        "name": page_title.split(" | ")[0],
        "item": page_url(base, rel),
    })
    return {"@type": "BreadcrumbList", "@id": page_url(base, rel) + "#breadcrumb", "itemListElement": crumbs}


def service_node(client, base, service, url):
    business = client.get("business") or {}
    node = {
        "@type": "Service",
        "@id": url + "#service",
        "name": service["name"],
        "serviceType": service["name"],
        "provider": {"@id": base + "/#local"},
        "url": url,
    }
    if service.get("blurb"):
        node["description"] = service["blurb"]
    areas = client.get("areas") or []
    if areas:
        node["areaServed"] = [{"@type": "Place", "name": area} for area in areas]
    if service.get("price_from"):
        offer = {
            "@type": "Offer",
            "priceCurrency": business.get("currency") or "GBP",
            "price": str(service["price_from"]),
            "url": url,
        }
        if service.get("price_note"):
            offer["description"] = service["price_note"]
        node["offers"] = offer
    return node


def build_graph(kind, client, subject, base, rel, title, site_dir, site_image, notes):
    url = page_url(base, rel)
    advice = advice_node(client, base, url, title, site_image, rel, site_dir)
    owner = person_node(client, base)
    graph = ([owner] if owner else []) + [
        organization_node(client, base, site_image, notes),
        {
            "@type": "WebSite",
            "@id": base + "/#site",
            "url": base + "/",
            "name": client["business"]["name"],
            "publisher": {"@id": base + "/#org"},
            "inLanguage": "en-GB",
        },
        local_business_node(client, base, site_image, notes),
    ]
    if kind == "service" and subject:
        graph.append(service_node(client, base, subject, url))
    faqs = faqs_for(kind, client, subject)
    if faqs:
        graph.append(faq_nodes(faqs, url))
    elif not (client.get("faqs") or []):
        notes.add("no faqs in client.json, so no FAQPage anywhere")
    if rel != "index.html":
        graph.append(breadcrumb_node(base, rel, title, site_dir))
    if advice:
        graph.append(advice)
    return {"@context": "https://schema.org", "@graph": graph}


# ------------------------------------------------------------------ head surgery

def page_image(page_html, site_dir, rel, base):
    folder = os.path.dirname(os.path.join(site_dir, rel))
    for tag in IMG_RE.finditer(page_html):
        src = attrs_of(tag.group(0)).get("src", "")
        if not src or src.startswith(("http://", "https://", "data:", "//")):
            continue
        on_disk = os.path.normpath(os.path.join(folder, src.lstrip("./")))
        if os.path.isfile(on_disk):
            relative = os.path.relpath(on_disk, site_dir).replace(os.sep, "/")
            return base + "/" + relative
    return ""


def existing_title(head_inner):
    match = re.search(r"<title\b[^>]*>(.*?)</title\s*>", head_inner, re.I | re.S)
    return clean_text(match.group(1)) if match else ""


def strip_owned(head_inner, keep_titles):
    head_inner = LDJSON_RE.sub("", head_inner)
    if not keep_titles:
        head_inner = TITLE_RE.sub("", head_inner)

    def meta_filter(match):
        found = attrs_of(match.group(0))
        name = found.get("name", "").lower()
        prop = found.get("property", "").lower()
        owned = (
            name == "description"
            or name.startswith(("og:", "twitter:"))
            or prop.startswith(("og:", "twitter:"))
        )
        return "" if owned else match.group(0)

    def link_filter(match):
        return "" if attrs_of(match.group(0)).get("rel", "").lower() == "canonical" else match.group(0)

    return LINK_RE.sub(link_filter, META_RE.sub(meta_filter, head_inner))


def render_block(title, description, canonical, image, graph, write_title=True):
    """write_title is False when --keep-titles left a hand written <title> in place:
    the page keeps its own title element, and the social tags reuse its words."""
    lines = [MARKER_START]
    if write_title:
        lines.append("<title>%s</title>" % html.escape(title))
    lines += [
        '<meta name="description" content="%s">' % esc_attr(description),
        '<link rel="canonical" href="%s">' % esc_attr(canonical),
        '<meta property="og:title" content="%s">' % esc_attr(title),
        '<meta property="og:description" content="%s">' % esc_attr(description),
        '<meta property="og:url" content="%s">' % esc_attr(canonical),
        '<meta property="og:type" content="website">',
    ]
    if image:
        lines.append('<meta property="og:image" content="%s">' % esc_attr(image))
    lines += [
        '<meta name="twitter:card" content="%s">' % ("summary_large_image" if image else "summary"),
        '<meta name="twitter:title" content="%s">' % esc_attr(title),
        '<meta name="twitter:description" content="%s">' % esc_attr(description),
    ]
    if image:
        lines.append('<meta name="twitter:image" content="%s">' % esc_attr(image))
    payload = json.dumps(graph, ensure_ascii=False, indent=2).replace("</", "<\\/")
    lines += ['<script type="application/ld+json">', payload, "</script>", MARKER_END]
    return "\n".join(lines)


def bake_page(page_html, block, keep_titles):
    match = HEAD_RE.search(page_html)
    if not match:
        return None
    inner = strip_owned(FENCE_RE.sub("", match.group(2)), keep_titles)
    rebuilt = match.group(1) + inner.rstrip() + "\n" + block + "\n" + match.group(3)
    return page_html[: match.start()] + rebuilt + page_html[match.end():]


# ------------------------------------------------------------------ site files

def indexnow_key(site_dir):
    """The key Bing uses to believe a ping about this site came from the site.

    It lives in a text file at the root whose name is the key. A site that
    already has one keeps it, because changing the key means the old one stops
    working and nothing is gained."""
    for name in sorted(os.listdir(site_dir)):
        if not name.endswith(".txt") or name in ("robots.txt", "llms.txt"):
            continue
        stem = name[:-4]
        if re.fullmatch(r"[0-9a-f]{32,128}", stem):
            try:
                with open(os.path.join(site_dir, name), "r", encoding="utf-8") as handle:
                    if handle.read().strip() == stem:
                        return stem
            except OSError:
                pass
    return os.urandom(16).hex()


def render_robots(base):
    lines = ["# Written by seo_bake.py. AI assistants read raw HTML, so they are named here.", ""]
    for bot in AI_CRAWLERS:
        lines += ["User-agent: %s" % bot, "Allow: /", ""]
    lines += ["User-agent: *", "Allow: /", "", "Sitemap: %s/sitemap.xml" % base, ""]
    return "\n".join(lines)


def render_sitemap(base, pages, today):
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for rel in pages:
        lines += ["  <url>",
                  "    <loc>%s</loc>" % html.escape(page_url(base, rel)),
                  "    <lastmod>%s</lastmod>" % today,
                  "  </url>"]
    lines += ["</urlset>", ""]
    return "\n".join(lines)


def render_llms(client, base, page_titles):
    business = client.get("business") or {}
    address = client.get("address") or {}
    lines = ["# %s" % business["name"]]
    if business.get("one_line"):
        lines += ["", "> %s" % business["one_line"]]
    lines += ["", "## Contact", "", "- Phone: %s" % business["phone"]]
    if business.get("email"):
        lines.append("- Email: %s" % business["email"])
    lines.append("- Website: %s/" % base)
    where = [address.get(key) for key in ("street", "town", "region", "postcode")
             if address.get(key) and not (key == "street" and address.get("show") is False)]
    if where:
        lines.append("- Address: %s" % ", ".join(str(part) for part in where))
    for block in client.get("hours") or []:
        if block.get("days") and block.get("open") and block.get("close"):
            days = ", ".join(DAY_NAMES.get(str(day).lower(), str(day)) for day in block["days"])
            lines.append("- Open: %s, %s to %s" % (days, block["open"], block["close"]))
    if client.get("emergency"):
        lines.append("- Out of hours: %s" % client["emergency"])

    services = client.get("services") or []
    if services:
        lines += ["", "## Services", ""]
        for service in services:
            blurb = (": " + service["blurb"]) if service.get("blurb") else ""
            lines.append("- %s%s" % (service["name"], blurb))
    if client.get("not_services"):
        lines += ["", "## Not offered", "", "- " + "\n- ".join(client["not_services"])]
    if client.get("areas"):
        lines += ["", "## Areas served", "", "- " + "\n- ".join(client["areas"])]
    if client.get("why_us"):
        lines += ["", "## Why customers pick them", "", "- " + "\n- ".join(client["why_us"])]
    if client.get("credentials"):
        lines += ["", "## Credentials", "", "- " + "\n- ".join(client["credentials"])]
    faqs = [faq for faq in client.get("faqs") or [] if faq.get("q") and faq.get("a")]
    if faqs:
        lines += ["", "## Questions customers ask", ""]
        for faq in faqs:
            lines += ["### %s" % faq["q"], "", faq["a"], ""]
    lines += ["", "## Pages", ""]
    for rel, title in page_titles:
        lines.append("- %s: %s" % (page_url(base, rel), title))
    lines.append("")
    return "\n".join(lines)


# ------------------------------------------------------------------------ main

def parse_args(argv):
    parser = argparse.ArgumentParser(description="Bake SEO and AEO tags into static HTML.")
    parser.add_argument("--client", required=True, help="path to client.json")
    parser.add_argument("--site", required=True, help="path to the site folder")
    parser.add_argument("--base", default="", help="live site URL, e.g. https://theirdomain.co.uk")
    parser.add_argument("--keep-titles", action="store_true",
                        help="leave any hand written <title> alone")
    parser.add_argument("--dry-run", action="store_true", help="say what would change, write nothing")
    return parser.parse_args(argv)


def main(argv=None):
    args = parse_args(argv)
    client = load_client(args.client)
    site_dir = os.path.abspath(args.site)
    if not os.path.isdir(site_dir):
        sys.exit("no such site folder: %s" % site_dir)

    site_in_client = ((client.get("business") or {}).get("site") or "").strip().rstrip("/")
    base = (args.base or site_in_client).strip().rstrip("/")
    if not base.startswith(("http://", "https://")):
        sys.exit("no base URL: pass --base https://theirdomain.co.uk or set business.site in client.json")
    # Two different addresses means one of them is wrong, and a canonical
    # pointing at the wrong domain is the worst thing on this page.
    if site_in_client and args.base and host_of(args.base) != host_of(site_in_client):
        sys.exit("--base says %s but client.json business.site says %s. One is wrong: fix it and run again,\n"
                 "because every canonical, the sitemap and the schema will carry whichever you pass."
                 % (host_of(args.base), host_of(site_in_client)))

    pages = find_pages(site_dir)
    if not pages:
        sys.exit("no .html files found in %s (looked at the top level, services/ and areas/)" % site_dir)

    notes = set()
    today = datetime.date.today().isoformat()
    site_image = ""
    if os.path.isfile(os.path.join(site_dir, "index.html")):
        with open(os.path.join(site_dir, "index.html"), "r", encoding="utf-8") as handle:
            site_image = page_image(handle.read(), site_dir, "index.html", base)

    written, unchanged, skipped, page_titles = 0, 0, [], []

    for rel in pages:
        path = os.path.join(site_dir, rel)
        with open(path, "r", encoding="utf-8") as handle:
            original = handle.read()

        kind, subject = classify(rel, client)
        if rel.startswith(("services/", "areas/")) and kind == "page":
            notes.add("%s does not match a service or area in client.json, treated as a plain page" % rel)

        head = HEAD_RE.search(original)
        if not head:
            skipped.append(rel)
            notes.add("%s has no <head>, so nothing was written to it" % rel)
            continue

        kept_title = existing_title(FENCE_RE.sub("", head.group(2)))
        title = kept_title if (args.keep_titles and kept_title) else pick_title(
            kind, client, subject if subject is not None else rel, original)
        description = pick_description(kind, client, subject, original)
        if len(description) < DESC_MIN:
            notes.add("meta description is under %d characters on %s, add another real sentence to client.json"
                      % (DESC_MIN, rel))

        canonical = page_url(base, rel)
        image = page_image(original, site_dir, rel, base) or site_image
        graph = build_graph(kind, client, subject, base, rel, title, site_dir, site_image, notes)
        keeping = bool(args.keep_titles and kept_title)
        block = render_block(title, description, canonical, image, graph, write_title=not keeping)
        page_titles.append((rel, title))

        baked = bake_page(original, block, keeping)
        if baked == original:
            unchanged += 1
        else:
            written += 1
            if not args.dry_run:
                with open(path, "w", encoding="utf-8") as handle:
                    handle.write(baked)
        print("%-7s %-34s %s" % (kind, rel, title))

    robots = render_robots(base)
    sitemap = render_sitemap(base, [rel for rel in pages if rel not in skipped], today)
    llms = render_llms(client, base, page_titles)
    key = indexnow_key(site_dir)
    if not args.dry_run:
        for name, body in (("robots.txt", robots), ("sitemap.xml", sitemap), ("llms.txt", llms),
                           (key + ".txt", key)):
            with open(os.path.join(site_dir, name), "w", encoding="utf-8") as handle:
                handle.write(body)

    print("")
    print("%d page(s) updated, %d already correct, %d skipped. robots.txt, sitemap.xml and llms.txt %s."
          % (written, unchanged, len(skipped), "would be written" if args.dry_run else "written"))
    if notes:
        print("Summary of what was missing: " + "; ".join(sorted(notes)) + ".")
    else:
        print("Summary: nothing was missing from client.json.")
    if args.dry_run:
        print("Dry run, so no file on disk was changed.")
    else:
        print("")
        print("After the site is live, tell Bing about it (this is the cheapest thing you can do")
        print("for ChatGPT visibility, because its web results lean on Bing's index):")
        print("")
        print("  curl \"https://api.indexnow.org/indexnow?url=%s/&key=%s&keyLocation=%s/%s.txt\""
              % (base, key, base, key))
        print("")
        print("Google ignores IndexNow, so submit the sitemap in Search Console as well.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
