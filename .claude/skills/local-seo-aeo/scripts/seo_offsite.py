#!/usr/bin/env python3
"""Write the off-site pack for one client: the half of local ranking that is
not on their website.

    python3 seo_offsite.py --client client.json [--out offsite]

Nobody can do this part for the client without their Google login, and this
skill never asks for a password. What it can do is remove every piece of
thinking and typing, so the student is left with clicking:

    offsite/google-business-profile.md   every field, written out, ready to paste
    offsite/reviews.md                   the ask, the replies, the cadence
    offsite/citations.md                 the same details for every listing that counts
    offsite/posts.md                     eight posts, one a week
    offsite/tracking.md                  what to check monthly, and where to write it

Everything here is a draft in the owner's own words from client.json. Read it
with them on the kickoff call and change what is not true. Python 3 standard
library only, no network, no keys.
"""

import argparse
import json
import os
import re
import sys

# Google Business Profile categories, by what the business calls itself. The
# picker holds a few thousand; these are the ones local trades actually need.
# The primary category is the heaviest single ranking factor there is, so this
# suggests and the student confirms in the picker, never the other way round.
CATEGORIES = [
    (r"boiler|heating|gas engineer", ["Heating contractor", "Boiler supplier", "Gas installation service"]),
    (r"plumb", ["Plumber", "Drainage service", "Bathroom remodeler"]),
    (r"electric|rewir|fuse|eicr", ["Electrician", "Electrical installation service", "Solar energy contractor"]),
    (r"roof|gutter|fascia", ["Roofing contractor", "Gutter cleaning service", "Roofing supply store"]),
    (r"window|glaz|conservatory", ["Window installation service", "Double glazing installer", "Window supplier"]),
    (r"paint|decorat", ["Painter", "Painting contractor", "Wallpaper installer"]),
    (r"carpent|joiner|kitchen fit", ["Carpenter", "Kitchen remodeler", "Cabinet maker"]),
    (r"build|extension|renovat|loft", ["General contractor", "Home builder", "Construction company"]),
    (r"garden|landscap|lawn|tree", ["Landscaper", "Lawn care service", "Tree service", "Gardener"]),
    (r"clean|domestic help", ["House cleaning service", "Cleaning service", "Commercial cleaning service"]),
    (r"carpet clean|upholster", ["Carpet cleaning service", "Upholstery cleaning service"]),
    (r"pressure wash|jet wash|driveway clean", ["Pressure washing service", "Driveway contractor"]),
    (r"drive|patio|paving|block pav", ["Paving contractor", "Driveway contractor", "Landscaper"]),
    (r"fenc|decking", ["Fence contractor", "Deck builder"]),
    (r"floor|tiling|tiler", ["Flooring contractor", "Tile contractor", "Floor refinishing service"]),
    (r"lock|security|alarm|cctv", ["Locksmith", "Security system installer", "Burglar alarm store"]),
    (r"pest|vermin|rodent", ["Pest control service"]),
    (r"remov|man and van|storage", ["Moving company", "Self-storage facility", "Moving and storage service"]),
    (r"skip|waste|clearance|rubbish", ["Waste management service", "Garbage collection service"]),
    (r"garage door|shutter", ["Garage door supplier", "Roller shutter supplier"]),
    (r"solar|renewab|heat pump|insulat", ["Solar energy contractor", "Insulation contractor", "Energy supplier"]),
    (r"septic|drain", ["Septic system service", "Drainage service"]),
    (r"sign|print", ["Sign shop", "Print shop"]),
    (r"valet|detail|car wash", ["Car detailing service", "Car wash"]),
    (r"mot|garage|mechanic|car repair", ["Auto repair shop", "Car inspection station", "Tyre shop"]),
    (r"tow|recovery", ["Towing service", "Vehicle recovery service"]),
    (r"hair|barber", ["Hairdresser", "Barber shop", "Hair salon"]),
    (r"beauty|nail|aesthetic|lash", ["Beauty salon", "Nail salon", "Skin care clinic"]),
    (r"dent", ["Dentist", "Dental clinic", "Cosmetic dentist"]),
    (r"vet", ["Veterinarian", "Animal hospital"]),
    (r"physio|chiro|osteo|massage", ["Physiotherapist", "Chiropractor", "Massage therapist"]),
    (r"dog|pet|groom|cattery|kennel", ["Pet groomer", "Pet boarding service", "Dog day care center"]),
    (r"laundr|dry clean", ["Laundry service", "Dry cleaner"]),
    (r"coffee|cafe|bakery", ["Coffee shop", "Cafe", "Bakery"]),
    (r"restaurant|takeaway|catering", ["Restaurant", "Caterer", "Takeout restaurant"]),
    (r"funeral", ["Funeral director", "Funeral home"]),
    (r"letting|estate agent|property manage", ["Real estate agency", "Property management company", "Letting agent"]),
    (r"account|bookkeep|tax", ["Accountant", "Bookkeeping service", "Tax preparation service"]),
    (r"solicit|legal|convey", ["Solicitor", "Law firm", "Conveyancer"]),
    (r"photograph|videograph", ["Photographer", "Videographer"]),
    (r"vend|atm", ["Vending machine supplier", "ATM supplier"]),
    (r"sign lang|translat", ["Translator", "Translation service"]),
]

DIRECTORIES = [
    ("Bing Places", "https://www.bingplaces.com", "Feeds Bing, Copilot and the web results ChatGPT leans on. Ten minutes."),
    ("Apple Business Connect", "https://businessconnect.apple.com", "What Apple Maps and Siri read. Half their customers are on iPhones."),
    ("Yelp", "https://biz.yelp.com", "Quoted by AI assistants far more than its UK traffic suggests."),
    ("Foursquare", "https://business.foursquare.com", "Feeds place data into several assistants and apps."),
    ("Trustpilot", "https://business.trustpilot.com", "Only if the client will keep asking for reviews there too."),
    ("Chamber of commerce", "", "Search for the town's chamber and the local business directory."),
]
TRADE_DIRECTORIES = {
    r"plumb|heat|boiler|gas": [("Checkatrade", "https://www.checkatrade.com/join"), ("Gas Safe Register", "https://www.gassaferegister.co.uk")],
    r"electric": [("Checkatrade", "https://www.checkatrade.com/join"), ("NICEIC or NAPIT listing", "https://www.niceic.com")],
    r"roof|build|extension|render": [("Checkatrade", "https://www.checkatrade.com/join"), ("Federation of Master Builders", "https://www.fmb.org.uk")],
    r"clean|garden|handy|paint|decorat": [("Checkatrade", "https://www.checkatrade.com/join"), ("Bark", "https://www.bark.com")],
    r"car|mot|garage|tyre": [("Who Can Fix My Car", "https://www.whocanfixmycar.com"), ("AutoTrader workshops", "https://www.autotrader.co.uk")],
    r"hair|beauty|nail|barber": [("Treatwell", "https://www.treatwell.co.uk/partners"), ("Fresha", "https://www.fresha.com/for-business")],
}


def load(path):
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def trade_words(client):
    business = client.get("business") or {}
    words = [business.get("type", ""), business.get("one_line", "")]
    words += [s.get("name", "") for s in client.get("services") or []]
    return " ".join(words).lower()


def categories_for(client):
    words = trade_words(client)
    for pattern, names in CATEGORIES:
        if re.search(pattern, words):
            return names
    return []


def directories_for(client):
    words = trade_words(client)
    out = list(DIRECTORIES)
    for pattern, extra in TRADE_DIRECTORIES.items():
        if re.search(pattern, words):
            out = [(name, url, "The directory this trade is checked on.") for name, url in extra] + out
            break
    return out


def nap(client):
    business = client.get("business") or {}
    address = client.get("address") or {}
    lines = [business.get("name", "")]
    if address.get("show") and address.get("street"):
        lines.append(address["street"])
    lines += [", ".join(p for p in [address.get("town", ""), address.get("postcode", "")] if p)]
    lines += [business.get("phone", ""), business.get("email", ""), business.get("site", "")]
    return "\n".join(line for line in lines if line)


def hours_text(client):
    rows = []
    days = {"Mo": "Monday", "Tu": "Tuesday", "We": "Wednesday", "Th": "Thursday",
            "Fr": "Friday", "Sa": "Saturday", "Su": "Sunday"}
    for block in client.get("hours") or []:
        names = [days.get(d, d) for d in block.get("days", [])]
        rows.append("%s: %s to %s" % (", ".join(names), block.get("open", ""), block.get("close", "")))
    listed = {d for block in client.get("hours") or [] for d in block.get("days", [])}
    shut = [days[d] for d in ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] if d not in listed]
    if shut:
        rows.append("%s: closed" % ", ".join(shut))
    return "\n".join(rows) or "Ask the client, then fill this in."


def description(client, limit=750):
    """The Google Business Profile description, in the owner's own words."""
    business = client.get("business") or {}
    areas = client.get("areas") or []
    why = client.get("why_us") or []
    services = [s.get("name", "") for s in client.get("services") or [] if s.get("money")]
    parts = []
    if business.get("one_line"):
        parts.append(business["one_line"].rstrip(".") + ".")
    if services:
        # "We do Rewiring, Fuse box upgrades" reads like a form. A list does not
        # need the service names bent into a sentence.
        parts.append("What we do: %s." % ", ".join(services))
    if areas:
        parts.append("We cover %s." % oxford(areas[:6]))
    if business.get("founded"):
        parts.append("We have been going since %s." % business["founded"])
    parts += [w.rstrip(".") + "." for w in why[:3]]
    if client.get("credentials"):
        # Credentials are registration numbers, not things a business "is".
        parts.append("Registered and insured: %s." % ", ".join(client["credentials"][:3]))
    if business.get("phone"):
        parts.append("Call %s for a free quote." % business["phone"])
    text = " ".join(parts)
    return text if len(text) <= limit else text[:limit].rsplit(".", 1)[0] + "."


def spoken(name):
    """A service name as it reads inside a sentence: "rewiring", but "EICR
    testing" keeps its initials."""
    words = str(name).split()
    if not words:
        return ""
    head = words[0]
    if head.isupper() and len(head) > 1:
        return name
    return " ".join([head.lower()] + words[1:])


def oxford(items):
    items = [str(i).strip() for i in items if str(i).strip()]
    if len(items) <= 1:
        return items[0] if items else ""
    return ", ".join(items[:-1]) + " and " + items[-1]


def write(out_dir, name, text):
    path = os.path.join(out_dir, name)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(text.rstrip() + "\n")
    return path


def gbp_doc(client):
    business = client.get("business") or {}
    address = client.get("address") or {}
    name = business.get("name", "the business")
    cats = categories_for(client)
    services = client.get("services") or []
    money = [s for s in services if s.get("money")] or services[:3]
    site = (business.get("site") or "").rstrip("/")
    tagged = (site + "/?utm_campaign=gbp") if site else "their website address with ?utm_campaign=gbp on the end"

    cat_block = ("Primary: **%s**\n\nSecondary, add all that genuinely apply:\n%s" % (
        cats[0], "\n".join("- %s" % c for c in cats[1:]))) if cats else (
        "This trade is not in the skill's list. In the picker, type what a customer would\n"
        "call them and choose the most specific match. Specific beats general every time.")

    service_rows = "\n\n".join(
        "**%s**%s\n%s" % (
            s.get("name", ""),
            ("  (from %s%s)" % (as_money(s.get("price_from"), client), (" " + s["price_note"]) if s.get("price_note") else "")) if s.get("price_from") else "",
            s.get("blurb") or "Write one line: what it is and who it is for. Same words as the website.",
        ) for s in services)

    faq_rows = "\n\n".join("**Q: %s**\nA: %s" % (f.get("q", ""), f.get("a", "")) for f in (client.get("faqs") or [])[:8])

    return """# Google Business Profile: %(name)s

This is the single biggest thing for showing up in the map pack, and the
primary category below is the heaviest factor in it. Everything here is
written out so the job is clicking, not thinking. Change anything that is not
true before you paste it.

## Before you start

The client adds you as a Manager: they open their listing, Settings, then
Managers, then Add, and enter your email. You never need their password. If
they cannot sign in to the listing, claim it first, and start that on day one
because verification is the slow part.

Google now usually asks for a video rather than a postcard, and unprepared
people fail it and wait weeks for another go. One unbroken recording, no cuts,
showing three things in order: the street sign or shopfront proving the
address, something branded that ties the business to the place (a van, tools, a
sign, headed paper), and then the client signing in to the listing or opening a
drawer of their own paperwork to prove they run it. Vans and tools count for a
trade with no shopfront. Film it with them on the phone, once, properly.

## 1. Categories

%(cat_block)s

Check in the picker: type the words a customer would use. If the specific one
exists, take it. Never pick a general category because it feels safer.

## 2. Name, address, phone

Paste exactly this, character for character, here and on every other listing:

```
%(nap)s
```

The name is the business name and nothing else. Adding "Leeds Plumber" to the
name is the most common way a listing gets suspended after a competitor
reports it.

%(address_note)s

## 3. Hours

```
%(hours)s
```

%(emergency)sAdd bank holidays as special hours before each one. A listing that
says open when the phone is off costs you a bad review and a lost job.

## 4. Description (750 characters)

```
%(description)s
```

## 5. Services

Add each one, with its description. Same wording as the website, because two
different descriptions of the same service is what makes Google unsure what
the business does.

%(service_rows)s

## 6. The website link

Put this exact address in the Website field:

```
%(tagged)s
```

The tag on the end is what lets the CRM's Analytics page separate the work
your Google listing brings from ordinary search. Without it Google reports
both as the same thing and you cannot show the client what the listing is
worth.

## 7. Photos, which is where most listings are lost

Upload at least ten real photos, then two or three a month forever. Phone
photos are fine, stock photos are not. The shot list:

- The van or shop front with the name visible
- The owner, face on, no sunglasses
- Two or three of the team working
- Three finished jobs, wide enough to see the whole thing
- Two before and after pairs of the same job
- The logo as the profile picture, a real photo as the cover

## 8. Questions and answers

Seed these from what customers actually ask, then answer them from the
business account so the answer is marked as the owner's.

%(faq_rows)s

## 9. Settings to get right

- Messaging: off, unless somebody will answer within the hour. An unanswered
  message is worse than no messaging.
- Booking link: on, if they have one.
- Opening date: set it, it is a small trust signal.
- Attributes: tick only what is true (free quotes, card payments, wheelchair
  access, women led, and so on).

## 10. The week after

- Post once, using `posts.md`.
- Ask three past customers for a review, using `reviews.md`.
- Check the listing on a phone, logged out, from the client's town.
""" % {
        "name": name,
        "cat_block": cat_block,
        "nap": nap(client),
        "address_note": (
            "The client works from home or visits customers, so hide the address and set the\n"
            "service areas instead: %s. A hidden address with service areas is normal and does\n"
            "not hurt the listing; a fake shopfront does.\n" % oxford(client.get("areas") or [])
        ) if not address.get("show") else (
            "Customers come to this address, so leave it visible and make sure the map pin\n"
            "sits on the door, not in the middle of the road.\n"),
        "hours": hours_text(client),
        "emergency": ("Out of hours: %s. Put this in the description, not in the hours, unless\nsomebody really answers.\n\n" % client["emergency"]) if client.get("emergency") else "",
        "description": description(client),
        "service_rows": service_rows,
        "tagged": tagged,
        "faq_rows": faq_rows or "Take the questions from their onboarding form answers.",
    }


def reviews_doc(client):
    business = client.get("business") or {}
    name = business.get("name", "the business")
    link = (client.get("reviews") or {}).get("google_url") or "their Google review link"
    first = "the owner"
    return """# Reviews: %(name)s

Reviews are the second heaviest thing in the map pack and the thing AI
assistants quote most. Ten or more, arriving steadily, beats forty that all
arrived in one week two years ago.

## The link

```
%(link)s
```

Get it from the listing: Read reviews, then Get more reviews. Shorten it if
you like, but test the short one before it goes anywhere.

## The ask, by text, the same day the job finishes

```
Hi [first name], thanks for having us today. If you were happy with the work,
would you mind leaving us a quick review? It genuinely helps a small business
like ours. Takes about thirty seconds: %(link)s
Thanks, [owner first name] at %(name)s
```

## The ask, by email

```
Subject: Thanks from %(name)s

Hi [first name],

Thanks for choosing us for [the job]. I hope you are pleased with it.

If you have two minutes, a review would mean a lot. It is the main way people
round here find us, and it helps the next person decide.

%(link)s

If anything is not right, reply to this email first and I will sort it.

[Owner first name]
%(name)s
```

That last line matters: it gives an unhappy customer somewhere to go that is
not the review box.

## Do not

- Buy reviews, write them, or ask staff and family. Google removes them and
  can suspend the listing.
- Offer a discount for a review. Against Google's rules, and reviewers say so
  in the review.
- Ask everybody at once. A spike looks bought. Three or four a week is plenty.

## Replying, which is half the value

Reply to every one within a couple of days, in the owner's voice, mentioning
the job and the place ("the new consumer unit in Headingley"), because that is
the wording assistants and searchers read.

A good review:
```
Thanks [first name], glad the [job] went well. Give us a shout any time.
```

A bad review, and this is the one people read:
```
Sorry, [first name]. That is not how we work and I would like to put it right.
I have tried to call, and my number is [phone] any time.
```

Never argue, never mention a refund in public, and never say the customer is
lying, even when they are.

## The cadence

- Every finished job gets an ask. The CRM sends it by itself once the lead is
  marked Won and the thank you page is set up.
- Once a month, count how many arrived. Fewer than two means the asking
  stopped, which is nearly always what happened.
""" % {"name": name, "link": link, "first": first}


def citations_doc(client):
    rows = []
    for item in directories_for(client):
        title, url, note = item if len(item) == 3 else (item[0], item[1], "")
        rows.append("- [ ] **%s**%s\n      %s" % (title, ("  %s" % url) if url else "", note))
    profiles = client.get("profiles") or {}
    existing = "\n".join("- %s: %s" % (k.replace("_", " ").title(), v) for k, v in profiles.items() if v)
    return """# Listings: %s

Every listing carries the same name, address and phone, character for
character. That sameness is how Google and the assistants decide two mentions
are the same business. One "Ltd" in the wrong place is a different business to
a machine.

## Paste this everywhere

```
%s
```

## In this order

%s

## Already listed

%s

## The rule that saves the most time

Do not blast two hundred directories. Six done properly, with identical
details and real photos, beats two hundred half filled in, and the two hundred
are what the cheap SEO packages sell.
""" % (
        (client.get("business") or {}).get("name", ""),
        nap(client),
        "\n".join(rows),
        existing or "Nothing listed in client.json. Ask what they are already on, so you claim rather than duplicate.",
    )


def posts_doc(client):
    business = client.get("business") or {}
    services = [s.get("name", "") for s in client.get("services") or []]
    areas = client.get("areas") or []
    faqs = client.get("faqs") or []
    town = (client.get("address") or {}).get("town", "your area")
    phone = business.get("phone", "")
    posts = []
    for i, service in enumerate(services[:3]):
        where = areas[i % len(areas)] if areas else town
        # "Finished a fuse box upgrades" is what putting an article in front of
        # a service name does. A job in a place never reads wrong.
        posts.append(("%s in %s" % (service, where),
                      "Finished a job in %s this week: %s. [One line about the job and what it solved, "
                      "in the owner's words.] If you need the same, ring %s for a free quote."
                      % (where, spoken(service), phone)))
    for faq in faqs[:3]:
        posts.append((faq.get("q", "A question we get a lot"),
                      "%s [Add a photo of a job where this came up.]" % faq.get("a", "")))
    posts.append(("Where we work",
                  "We cover %s. If you are not sure whether we come to you, ring %s and ask." % (oxford(areas[:6]) or town, phone)))
    posts.append(("Why we do it this way",
                  "[One thing the owner insists on, in their words: the tidy up, the fixed price, the same engineer every time.]"))
    body = "\n\n".join("### Week %d: %s\n\n```\n%s\n```" % (i + 1, title, text) for i, (title, text) in enumerate(posts))
    return """# Google posts: %s

One a week for two months. A posting listing gets more clicks than a silent
one, and the words here are the words people search. Each post wants one real
photo from the job.

%s

After eight weeks, repeat the pattern with that month's real jobs. A post
about a job you actually did beats anything written from nothing.
""" % (business.get("name", ""), body)


# Trade bodies with a public member directory. Every domain here was fetched
# and confirmed live before it shipped; the three that answer 403 to a script
# (Gas Safe, Checkatrade, BPCA) are bot walls, not dead sites, and open fine in
# a browser. CompetentRoofer was dropped because its own root now 404s.
#
# These matter more than any other link a local business can get: the client is
# usually already a paying member, the listing is free and included, it is the
# most relevant site on the internet to their trade, and most businesses never
# claim theirs. Free, ten minutes, and it is the exact thing Google and an
# assistant use to decide the business is real.
TRADE_BODIES = [
    (r"plumb|heat|boiler|gas|bathroom", [
        ("Gas Safe Register", "https://www.gassaferegister.co.uk", "legally required for gas work, and the public register is the first place people check"),
        ("CIPHE", "https://www.ciphe.org.uk", "the chartered body for plumbing and heating"),
        ("APHC", "https://www.aphc.co.uk", "Association of Plumbing and Heating Contractors"),
        ("OFTEC", "https://www.oftec.org", "only if they do oil heating"),
        ("HETAS", "https://www.hetas.co.uk", "only if they do stoves or solid fuel"),
    ]),
    (r"electric|rewir|fuse|eicr|pat test", [
        ("NICEIC", "https://www.niceic.com", "the best known electrical scheme with a public contractor search"),
        ("NAPIT", "https://www.napit.org.uk", "the other main scheme, if they are not NICEIC"),
        ("ECA", "https://www.eca.co.uk", "Electrical Contractors Association"),
        ("SELECT", "https://www.select.org.uk", "only in Scotland"),
    ]),
    (r"solar|heat pump|renewab|battery|ev charg", [
        ("MCS", "https://www.mcscertified.com", "required for the customer to claim grants, so the listing gets real traffic"),
        ("RECC", "https://www.recc.org.uk", "Renewable Energy Consumer Code"),
    ]),
    (r"roof|guttering|fascia", [
        ("NFRC", "https://www.nfrc.co.uk", "National Federation of Roofing Contractors"),
    ]),
    (r"build|extension|render|carpent|joiner|plaster|kitchen|loft|convers", [
        ("Federation of Master Builders", "https://www.fmb.org.uk", "Find a Builder is used by homeowners directly"),
        ("Guild of Master Craftsmen", "https://www.guildmc.com", "a general trades membership with a public directory"),
    ]),
    (r"locksmith", [
        ("Master Locksmiths Association", "https://www.locksmiths.co.uk", "the MLA find a locksmith search"),
    ]),
    (r"tree|arbor|stump", [
        ("Arboricultural Association", "https://www.trees.org.uk", "the approved contractor directory"),
    ]),
    (r"garden|landscap|lawn|fenc|patio|driveway", [
        ("BALI", "https://www.bali.org.uk", "British Association of Landscape Industries"),
    ]),
    (r"remov|moving|man and van|storage", [
        ("British Association of Removers", "https://www.bar.co.uk", "homeowners are told to check this before booking a mover"),
    ]),
    (r"pest|vermin|rodent", [
        ("BPCA", "https://www.bpca.org.uk", "British Pest Control Association"),
    ]),
    (r"clean|janitor|carpet", [
        ("BICSc", "https://www.bics.org.uk", "British Institute of Cleaning Science"),
    ]),
    (r"car|mot|garage|tyre|auto|vehicle|mechanic", [
        ("Good Garage Scheme", "https://www.goodgaragescheme.com", "a public garage search people actually use"),
        ("The Motor Ombudsman", "https://www.themotorombudsman.org", "the garage finder, and accreditation people trust"),
    ]),
    (r"hair|beauty|barber|nail|salon|spa", [
        ("NHBF", "https://www.nhbf.co.uk", "National Hair and Beauty Federation"),
    ]),
    (r"dent|orthodon", [
        ("General Dental Council", "https://www.gdc-uk.org", "the register is mandatory and is what patients are told to check"),
    ]),
    (r"vet|animal", [
        ("RCVS", "https://www.rcvs.org.uk", "Find a Vet is the official practice search"),
    ]),
]

# Open to any home-services trade, so they go on those lists as well as the
# trade's own body. Gated deliberately: Checkatrade and Which? Trusted Traders
# are for people who come to your house, and telling a hair salon or a dental
# practice to pay for one wastes the client's money and makes the student look
# like they are reading from a script.
HOME_TRADE = (r"plumb|heat|boiler|gas|bathroom|electric|rewir|fuse|eicr|roof|guttering|fascia|build|"
              r"extension|render|carpent|joiner|plaster|kitchen|loft|convers|locksmith|tree|arbor|"
              r"stump|garden|landscap|lawn|fenc|patio|driveway|remov|moving|storage|pest|vermin|"
              r"clean|carpet|solar|heat pump|renewab|battery|ev charg|window|door|paint|decorat|"
              r"handy|damp|drain|tiler|tiling|scaffold|aerial|alarm|security")

ANY_TRADE_BODIES = [
    ("TrustMark", "https://www.trustmark.org.uk", "government endorsed, and the only quality scheme with official backing"),
    ("Which? Trusted Traders", "https://trustedtraders.which.co.uk", "paid, but the Which? name carries weight with older customers"),
    ("Checkatrade", "https://www.checkatrade.com", "paid, and worth it only if the client answers the phone every time"),
]


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


def host_of(url):
    """The bare domain, for the searches that ask "who mentions them"."""
    return re.sub(r"^www\.", "", re.sub(r"^https?://", "", str(url or "")).split("/")[0])


def bodies_for(client):
    """The trade bodies that apply to this business, most relevant first."""
    words = trade_words(client)
    found = []
    for pattern, entries in TRADE_BODIES:
        if re.search(pattern, words):
            found += entries
    if re.search(HOME_TRADE, words):
        found += ANY_TRADE_BODIES
    seen, out = set(), []
    for entry in found:
        if entry[0] not in seen:
            seen.add(entry[0])
            out.append(entry)
    return out


def links_doc(client):
    """Links are about a seventh of local ranking and the one part of this pack
    that is never finished. Everything else is set up once; this is a list the
    client works through and adds to."""
    business = client.get("business") or {}
    name = business.get("name", "the business")
    town = (client.get("address") or {}).get("town") or (client.get("areas") or ["their town"])[0]
    site = (business.get("site") or "").rstrip("/")
    domain = host_of(site) if site else "theirdomain.co.uk"
    creds = client.get("credentials") or []
    services = [s.get("name", "") for s in client.get("services") or [] if s.get("name")]
    first = services[0] if services else (business.get("type") or "the work they do")

    bodies = bodies_for(client)
    body_rows = "\n".join(
        "- **%s**, %s\n  %s" % (n, u, why) for n, u, why in bodies) or (
        "This skill has no trade body on file for this trade, which does not mean there\n"
        "is none. Ask the client what they are a member of, and search\n"
        "`<their trade> association UK` and `<their trade> trade body members`. Nearly\n"
        "every trade has one, and its member directory is the best link they can get.")
    cred_note = ("\nOn the form they said they hold: %s.\nAny of those that appear below, do first: the "
                 "membership is already paid\nfor and the listing is sitting there empty.\n"
                 % ", ".join(creds)) if creds else ""

    return """# Links: %(name)s

A link is any other website mentioning %(name)s with their web address
attached. Google counts them as other people vouching for the business, and it
is roughly a seventh of why one business outranks another in the map pack. It
is the only part of this pack that is never finished.

Nobody is buying links here. Everything below is a real listing the business
has earned or can earn, and it is the safe kind. Buying links is the one thing
that can get a small business site removed from Google for good.

## 1. The memberships they already pay for

This is the best hour of work in this whole document, and almost nobody does
it. A trade body listing is free with the membership, it is the most relevant
site on the internet to their trade, and it proves to Google and to ChatGPT
that the business is real and qualified.
%(cred_note)s
%(body_rows)s

For each one: sign in as the member, find their own listing, and fill in every
field. The website address has to be there, spelled exactly as it is
everywhere else: `%(site_or_hint)s`. Add the phone and the description while
they are in there.

## 2. Manufacturers and suppliers

Anyone whose product they fit usually runs a "find an installer" or "where to
buy" page, and it is free to the trade accounts they already hold.

Ask the client one question: **which brands do you fit or stock most?** Then
for each brand, search `<brand> approved installer` or `<brand> find a
fitter`, and apply. The trade counter at their local merchant knows who to
speak to and will usually do it for them.

These are worth more than any directory because the customer arriving from one
is already buying.

## 3. Places they are already mentioned with no link

The quickest win in the whole document. Somebody has already written about
them and left the web address off.

Run these searches and note anything that mentions them without a link:

```
"%(name)s" -site:%(domain)s
"%(name)s" %(town)s
"%(phone)s"
```

Then email whoever wrote it: thanks for the mention, would you mind adding our
web address, here it is. Most say yes, because it costs them nothing.

## 4. Sponsorship, the honest local one

A junior football team, a school fair, a village hall, a charity run. Around a
hundred to two hundred pounds, and their sponsors page links to the sponsor.
It is a real link, it is local, and it also puts the name in front of exactly
the people who live in %(town)s.

The email that works:

```
Subject: Sponsoring the team this season

Hi,

I run %(name)s here in %(town)s, we do %(first)s.

I'd like to sponsor the team this season. Whatever the going rate is for a
shirt or a board, I'm in.

One ask: if you have a sponsors page on your site, please list us with our
web address (%(site_or_hint)s) so people can find us.

Thanks,
%(owner)s
```

Do one a year. It is not a campaign.

## 5. The local business groups

Search for these and join whichever exist in %(town)s:

- The chamber of commerce
- The town or high street business association, or the BID
- Any "made in" or "shop local" directory the council runs
- The local trade Facebook group, which does not give a link but does give
  work

## 6. Other trades they already work with

Every trade knows five others. A plumber who recommends an electrician can
swap a line on each other's site: "Electrical work by X" with a link. It is
honest, it is a real relationship, and it is two links for one conversation.

Do not turn this into a ring of twenty businesses all linking to each other.
Google has seen that since 2005.

## What never to do

- Buy links. Anyone selling "500 backlinks for £50" is selling the thing that
  gets a site removed.
- Blast 200 directories. A handful of relevant ones beats a list, and the junk
  ones actively hurt.
- Write the business name differently in different places. Every listing has
  to say exactly the same name, address and phone, or Google cannot tell it is
  one business.

## How to know it worked

Two things, once a month:

- Search `"%(name)s" -site:%(domain)s` and count the results. It should go up.
- In Search Console, Links, External links. New sites appearing there is the
  work landing.

One good link a month is a good year. This is slow and it compounds, which is
exactly why competitors give up on it.
""" % {
        "name": name,
        "town": town,
        "domain": domain,
        "phone": business.get("phone", "their phone number"),
        "first": (first[0].lower() + first[1:]) if first else "the work",
        "owner": business.get("owner") or "[your name]",
        "site_or_hint": site or "their web address",
        "body_rows": body_rows,
        "cred_note": cred_note,
    }


def tracking_doc(client):
    business = client.get("business") or {}
    areas = client.get("areas") or []
    services = [s.get("name", "") for s in client.get("services") or [] if s.get("money")]
    first = services[0] if services else (business.get("type") or "the main service")
    checks = "\n".join("| %s | | | |" % ("%s in %s" % (first, a)) for a in areas[:4])
    return """# Checking it worked: %s

Once a month, same day each month, takes fifteen minutes. Write the numbers
down: the client will ask, and a number you wrote three months ago is worth
more than an opinion today.

## Map pack position

Search in a private window, with the location set to the town (Chrome
devtools, Sensors, Location). Where does the listing sit in the map pack?

| Search | Month 1 | Month 2 | Month 3 |
|---|---|---|---|
%s

## Are the assistants naming them

Start in Search Console: Performance, Search results, Search Appearance tab.
"AI Overviews" and "AI Mode" are rows there, with impressions and clicks from
inside Google's own AI answers. Write both numbers down. This is the only AI
visibility data that comes from the source rather than from asking.

Then, fresh chat, no history, ask exactly what a customer would:

- ChatGPT: "best %s in %s"
- Perplexity: the same
- Google AI Mode: the same
- Copilot: the same

Write down whether the business is named, and what the answer cited. The
citations tell you where to work next: if every answer cites the same
directory, get them listed there properly.

## Reviews

Count this month's new reviews. Fewer than two means the asking stopped.

## What the website did

The CRM, Website, Analytics: visitors, calls tapped, enquiries, "found you on
Google" and "from AI assistants". That last line is the AEO work showing up in
numbers.

## What to tell the client

Days: the site and the listings are done. Weeks: the profile and the first
reviews move the map pack. One to three months: search positions settle for
the main town. Longer, and never promised: being named by the assistants.
""" % (business.get("name", ""), checks or "| | | | |", first.lower(), (client.get("address") or {}).get("town", "their town"))


def main():
    parser = argparse.ArgumentParser(description="Write the off-site pack for one client.")
    parser.add_argument("--client", required=True)
    parser.add_argument("--out", default="offsite")
    args = parser.parse_args()

    if not os.path.isfile(args.client):
        sys.exit("no such client file: %s" % args.client)
    client = load(args.client)
    os.makedirs(args.out, exist_ok=True)

    written = [
        write(args.out, "google-business-profile.md", gbp_doc(client)),
        write(args.out, "reviews.md", reviews_doc(client)),
        write(args.out, "citations.md", citations_doc(client)),
        write(args.out, "posts.md", posts_doc(client)),
        write(args.out, "links.md", links_doc(client)),
        write(args.out, "tracking.md", tracking_doc(client)),
    ]
    for path in written:
        print("wrote %s" % path)

    missing = []
    if not (client.get("reviews") or {}).get("google_url"):
        missing.append("reviews.google_url, so the review ask has no link in it")
    if not categories_for(client):
        missing.append("no category suggestion for this trade, pick it in the picker by hand")
    if not (client.get("faqs") or []):
        missing.append("no faqs, so the Q and A section and three of the posts are empty")
    if not (client.get("business") or {}).get("site"):
        missing.append("business.site, so the tagged website link is not written out")
    print("\nRead these with the client on the kickoff call and change what is not true.")
    if missing:
        print("Gaps to fill first:")
        for gap in missing:
            print("  - " + gap)


if __name__ == "__main__":
    main()
