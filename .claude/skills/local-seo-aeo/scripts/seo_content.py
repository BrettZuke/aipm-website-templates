#!/usr/bin/env python3
"""Plan the pages that answer what customers actually ask.

    python3 scripts/seo_content.py --client client.json --out content

Writes `content/content-plan.md`: a brief per page, ordered by what earns the
most, built from this client's own services, prices, towns and questions.

Why briefs and not finished posts. Google's spam policy names this exact
mistake: "Scaled content abuse is when many pages are generated for the primary
purpose of manipulating search rankings and not helping users", with "using
generative AI tools or other similar tools to generate many pages without
adding value for users" listed as an example. A script that writes fifty
articles is that. So this script does the deterministic half (which questions,
in what order, what each one has to contain, what it links to) and Claude
writes each one from the owner's real answers, one at a time.

The test every page here has to pass: it contains something only this business
knows. Their price, their process, what they found last week. Strip that out
and it is the same page as every competitor's, which is worth nothing to a
reader and nothing to an assistant deciding who to name.
"""

import argparse
import difflib
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import questions


SYMBOLS = {"GBP": "\u00a3", "USD": "$", "EUR": "\u20ac", "AUD": "$", "CAD": "$", "NZD": "$"}


def as_money(amount, client):
    """A price the way a customer reads it, not the way it sits in JSON.

    The owner types 2400 on the form and the page has to say \u00a32,400. Without
    this every price in the pack shipped as a bare number, which reads like a
    reference code rather than a price."""
    digits = re.sub(r"[^0-9.]", "", str(amount or ""))
    if not digits:
        return str(amount or "")
    symbol = SYMBOLS.get(str((client.get("business") or {}).get("currency") or "GBP").upper(), "")
    try:
        value = float(digits)
    except ValueError:
        return str(amount)
    whole = "{:,.0f}".format(value) if value == int(value) else "{:,.2f}".format(value)
    return symbol + whole


def load(path):
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def write(out_dir, name, body):
    path = os.path.join(out_dir, name)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(body)
    return path


def slug(text):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", str(text).lower())).strip("-")


def lower_first(text):
    """Lowercase the first letter, unless it is an acronym.

    "EICR testing" must not become "eICR testing", which is what a naive
    lowercase does and what shipped in the first draft of this script."""
    if not text:
        return text
    first = text.split()[0]
    if first.isupper() and len(first) > 1:
        return text
    return text[0].lower() + text[1:]


def verb_for(name):
    """"What does rewiring cost" but "what do fuse box upgrades cost".

    A plural service name with a singular verb is the kind of thing a client
    notices immediately and an agency never does."""
    last = str(name).split()[-1].lower() if str(name).strip() else ""
    plural = last.endswith("s") and not last.endswith(("ss", "us", "is"))
    return "do" if plural else "does"


def phrase_for(name):
    """The service name with the article it needs, or none if it needs none.

    "a gas safety certificate" but not "a rewiring". The -ing words are gerunds
    and take no article; a singular countable noun does. Getting this wrong
    reads as machine-written, which is the one thing these pages cannot be."""
    text = lower_first(name)
    last = str(text).split()[-1].lower() if str(text).strip() else ""
    if last.endswith("ing") or verb_for(name) == "do":
        return text
    article = "an" if text[:1].lower() in "aeiou" else "a"
    return "%s %s" % (article, text)


def money_services(client):
    services = client.get("services") or []
    return [s for s in services if s.get("money")] or services[:3]


def price_line(service, client):
    """What the owner said the job costs, in the words the page has to use."""
    if not service.get("price_from"):
        return None
    note = (" " + service["price_note"]) if service.get("price_note") else ""
    return "from %s%s" % (as_money(service["price_from"], client), note)


def cost_briefs(client, town):
    """The highest-earning page a local business can have.

    "How much does X cost" is the question people ask before they ask anything
    else, it is the one they ask an assistant out loud, and almost every
    competitor refuses to answer it. A real number, even a range with the
    reasons it moves, wins the job before the call."""
    briefs = []
    for service in money_services(client):
        name = service.get("name")
        if not name:
            continue
        price = price_line(service, client)
        briefs.append({
            "title": "What %s %s cost in %s?" % (verb_for(name), phrase_for(name), town),
            "file": "%s-cost-%s.html" % (slug(name), slug(town)),
            "asked": "Everyone asks it first, and most competitors dodge it.",
            "must": [
                ("The number, in the first two sentences. %s"
                 % ("The owner gave: %s. Use it." % price if price else
                    "The owner gave no price for this. Get one before writing the page, even as "
                    "a range. A page about cost with no cost in it is worse than no page.")),
                "What moves the price up or down, in their words: three or four real reasons.",
                "What is included and what is not, so nobody feels caught out.",
                "One real job as an example, with what it came to and why.",
            ],
            "links": ["the %s service page" % lower_first(name), "the contact or quote page"],
            "value": 3,
        })
    return briefs


def faq_briefs(client):
    """Their own FAQs, promoted to pages where the answer deserves one.

    A question the owner is asked every week is proven demand: they have heard
    it from real people, unlike a keyword tool's guess. The short ones stay as
    FAQs on the service page; the ones with a real answer behind them become a
    page an assistant can quote whole."""
    briefs = []
    for faq in client.get("faqs") or []:
        question, answer = faq.get("q"), faq.get("a")
        if not question or not answer or len(answer) < 120:
            continue
        briefs.append({
            "title": question,
            "file": "%s.html" % slug(question)[:60],
            "asked": "They put it on the onboarding form, so they are asked it often enough to remember.",
            "must": [
                "The answer in the first forty words, before any preamble. This is the part an "
                "assistant lifts, and it will not read past a warm-up paragraph.",
                "Then the detail underneath: why, the exceptions, what to do next.",
                "What they already answered: \"%s\" Expand it, do not replace it."
                % (answer[:180] + ("..." if len(answer) > 180 else "")),
            ],
            "links": ["the most relevant service page"],
            "value": 2,
        })
    return briefs


def honest_briefs(client, town):
    """The two pages nobody writes, which is exactly why they work."""
    briefs = []
    nots = client.get("not_services") or []
    if nots:
        briefs.append({
            "title": "What we do not do, and who to call instead",
            "file": "what-we-dont-do.html",
            "asked": "Nobody writes this, so it stands out, and it stops the calls that waste their day.",
            "must": [
                "The list they gave: %s." % ", ".join(nots),
                "For each, who does do it locally. Name real firms. Ask the owner who they "
                "already refer to, because they will have someone.",
                "This earns links: the firms named will often link back, and it is the most "
                "honest reason to ask.",
            ],
            "links": ["the services page"],
            "value": 1,
        })
    creds = client.get("credentials") or []
    if creds:
        trade = lower_first((client.get("business") or {}).get("type") or "installer")
        briefs.append({
            "title": "How to check an %s is qualified before you let them in" % trade,
            "file": "how-to-check-qualified.html",
            "asked": "It is what a careful customer wants and what an assistant is asked to advise on.",
            "must": [
                "How to check the register, with the link, for each body: %s." % ", ".join(creds),
                "Their own number on each register, so the reader can check them while they read.",
                "What a rogue trader does that a qualified one does not.",
                "No fear-mongering. Useful and calm, or it reads as a sales page.",
            ],
            "links": ["the about page", "the %s pages" % town],
            "covers": [
                "How do I check you are qualified?",
                "How do I check a %s is actually registered?" % trade,
                "How do I know you are qualified and registered?",
            ],
            "value": 1,
        })
    return briefs


def trade_words(client):
    business = client.get("business") or {}
    words = [business.get("type", ""), business.get("one_line", "")]
    words += [s.get("name", "") for s in client.get("services") or []]
    return " ".join(words).lower()


def same_question(a, b):
    """Near enough that two pages would be the same page.

    Compared on words, not characters, so "Do I need an EICR?" and "What is an
    EICR and do I need one?" are caught as one question rather than shipped as
    two thin pages."""
    clean = lambda t: sorted(re.findall(r"[a-z]{3,}", str(t).lower()))
    return difflib.SequenceMatcher(None, clean(a), clean(b)).ratio() >= 0.7


def niche_briefs(client, town, taken):
    """The questions the whole trade gets asked, minus the ones already covered.

    The owner writes three or four on the form. Their customers ask thirty, and
    every one of those is a page that can be the answer an assistant reads out.
    This is the difference between a site with a contact form and a site that
    gets quoted."""
    briefs = []
    trade = questions.for_trade(trade_words(client))
    # A trade question outranks a general one, so they carry different weights
    # and the general set drops to the bottom of the plan where it belongs.
    for question, value in [(q, 2) for q in trade] + [(q, 1) for q in questions.GENERIC]:
        if any(same_question(question, t) for t in taken):
            continue
        taken.append(question)
        briefs.append({
            "title": question,
            "file": "%s.html" % slug(question)[:60],
            "asked": "A question this trade is asked constantly, and one people ask an assistant out loud.",
            "must": [
                "The answer in the first forty words, before any introduction. That is the part "
                "an assistant quotes, and the part a person reads before deciding to ring.",
                "Then what only this business can say: their price, how they actually do it, "
                "what they see on jobs around %s. Without that it is the same page as every "
                "competitor and it is not worth publishing." % town,
                "Ask the owner this question on the phone and write down how they answer it. "
                "Their answer is the page.",
            ],
            "links": ["the service page it belongs under", "the contact or quote page"],
            "value": value,
        })
    return briefs


def plan_doc(client, briefs, town):
    business = client.get("business") or {}
    name = business.get("name", "the business")
    owner = business.get("owner")
    rows = []
    for i, brief in enumerate(briefs, 1):
        musts = "\n".join("   - %s" % m for m in brief["must"])
        links = ", ".join(brief["links"])
        rows.append("""### %d. %s

`%s`

Why this one: %s

What it has to contain:
%s

Link from it to: %s
""" % (i, brief["title"], brief["file"], brief["asked"], musts, links))

    every_other_week = max(1, len(briefs))
    return """# What to write for %(name)s

%(count)d pages, in this order. These are the questions this trade is asked
over and over, so each one is a page that can be the answer Google shows and
the answer an assistant reads out when somebody asks.

**Publish the first %(launch)d with the site.** That is enough for the site to
have something to say on day one. Then one a week or a fortnight, working down
the list, which is about %(months)d months of material. Not all at once: see
below for why that matters.

Google's spam policy is explicit about the shortcut here: "Scaled content abuse
is when many pages are generated for the primary purpose of manipulating search
rankings and not helping users", and it names "using generative AI tools or
other similar tools to generate many pages without adding value for users" as
an example. Twelve real pages over six months beats fifty in a weekend, and the
fifty can take the whole site down.

## The rule for every page below

It has to contain something only %(name)s knows. A price they actually charge,
how they actually do the job, something they found on a job last week,
%(owner_line)s what they tell people on the phone. Take that out and it is the
same page as every competitor, which is worth nothing to a reader and nothing
to an assistant choosing who to name.

If you cannot get that from the owner, do not write the page yet. Ring them and
ask. Ten minutes on the phone is the whole difference.

## How to write one so an assistant will quote it

- **Answer in the first forty words.** Before the intro, before the history of
  the trade. An assistant reads the top of the page and stops. So does a person.
- **Use real numbers.** "From £2,400, and here is what moves it" beats "prices
  vary depending on your requirements", which says nothing and is what everyone
  else wrote.
- **One question per page.** A page trying to answer four gets quoted for none.
- **Short sentences, no padding.** Cut every sentence that would survive being
  deleted.
- **Write it as the owner speaking.** First person, their words. Read it back
  and ask whether they would actually say that.
- **No stock photos of other people's work.** One real photo of their own job
  is worth more than ten from a library.

## The pages

%(rows)s
## After each one is written

1. Save it as an HTML page in the site, using the same template as the rest so
   it carries the same header, footer and growth kit.
2. Run `seo_bake.py` again. It writes the title, description, canonical and
   schema for the new page and adds it to the sitemap.
3. Run `seo_check.py`. It fails if two pages have ended up too similar, which is
   the trap this whole document is written to avoid.
4. Link to it from the service page it belongs under. A page nothing links to
   is a page Google takes its time finding.
5. Put it on the Google Business Profile as a post, and send it to the
   customers who asked that question.

## What never to do

- Do not publish the same page with the town swapped. That is a doorway page,
  `seo_check.py` now fails it, and Google counts it against the whole site.
- Do not put these on somebody else's site to get a link. Google's policy calls
  that site reputation abuse, and the link is worth less than the risk.
- Do not write about the trade in general. "The history of electrical safety"
  helps nobody and ranks for nothing. Every page here answers a question a
  customer actually asked.
- Do not let it go stale halfway. %(count)d pages at one a fortnight is about
  %(months)d months. Put it in the calendar on day one. This is the part that
  quietly stops after month two, and it is the part that compounds.
- Do not publish all %(count)d in a week. A site that goes from six pages to
  thirty overnight, all written the same day, is the pattern the spam policy
  above describes, and it is the one thing here that can undo the rest.
""" % {
        "name": name,
        "count": len(briefs),
        "owner_line": ("what %s says on a first visit," % owner) if owner else "",
        "rows": "\n".join(rows),
        "launch": min(6, len(briefs)),
        "months": max(1, round(every_other_week / 2)),
    }


def main():
    parser = argparse.ArgumentParser(description="Plan the content pages for one client.")
    parser.add_argument("--client", required=True)
    parser.add_argument("--out", default="content")
    args = parser.parse_args()

    if not os.path.isfile(args.client):
        sys.exit("no such client file: %s" % args.client)
    client = load(args.client)
    os.makedirs(args.out, exist_ok=True)

    town = (client.get("address") or {}).get("town") or (client.get("areas") or ["their town"])[0]
    costs = cost_briefs(client, town)
    faqs = faq_briefs(client)
    honest = honest_briefs(client, town)
    # The owner's own questions and the cost pages come first and block anything
    # the bank would duplicate, because a question they raised themselves is
    # proven demand and their wording is the wording their customers use.
    taken = [f.get("q", "") for f in client.get("faqs") or []]
    for brief in costs + faqs + honest:
        taken.append(brief["title"])
        taken += brief.get("covers") or []
    # A cost page for each service already answers "what does it cost", so the
    # general version of that question would be a second page saying the same.
    if costs:
        taken.append("What does it cost, and what makes the price go up or down?")
    briefs = costs + faqs + honest + niche_briefs(client, town, taken)
    briefs.sort(key=lambda b: -b["value"])

    if not briefs:
        sys.exit("nothing to plan from: client.json has no services, no faqs and no credentials. "
                 "Fill those in from the onboarding form and run it again.")

    print("wrote %s" % write(args.out, "content-plan.md", plan_doc(client, briefs, town)))
    print("\n%d page(s) planned, one every week or two. Get the owner on the phone for the "
          "prices and the real examples before writing any of them." % len(briefs))

    thin = [b["title"] for b in briefs if b["value"] >= 3 and "no price" in " ".join(b["must"])]
    if thin:
        print("\nMissing prices, which these pages need:")
        for title in thin:
            print("  - " + title)


if __name__ == "__main__":
    main()
