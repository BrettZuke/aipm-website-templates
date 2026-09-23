---
name: local-seo-aeo
description: Use when building or fixing a local business website so it can be found in Google search, in the Google Maps pack, and by AI assistants like ChatGPT, Perplexity, Gemini and Copilot. Covers the on-page work a site needs (static schema, titles, service and town pages, robots, sitemap), the off-site work that actually moves Maps rankings (Google Business Profile, reviews, listings), and how to check any of it worked. Trigger on "SEO", "AEO", "GEO", "rank on Google", "Google Maps", "map pack", "get found", "show up in ChatGPT", "schema", "local search".
---

# Local SEO and AEO for a local business site

## Read this before you promise anything

The website is about a sixth of what decides whether a business shows up in the
Google Maps pack. Reviews, the Google Business Profile and what people do when
they see the listing are more than half of it.

Whitespark's Local Search Ranking Factors survey (published November 2025 for
2026, 47 local search experts) weighs the groups roughly: review signals 19
percent, behavioural signals 17, Google Business Profile signals 16, on-page 15,
links 14, citations 11. The single highest-ranked factor of all is the primary
Google Business Profile category, and the survey's own headline for 2026 is that
reviews and behavioural signals went up.

So a perfect website alone does not win Maps. The work splits in two and you
need both:

- **On-site.** Everything in steps 1 to 5. You can do all of it yourself today.
- **Off-site.** Step 6. The client has to grant access and keep asking for
  reviews. Get this started on day one or the site will sit there outranked by
  a worse site with a better profile.

**The one fact that changes how you build.** Googlebot and Bingbot render
JavaScript. The AI crawlers do not. Vercel measured this across their network
and found that none of the major AI crawlers render JavaScript: OpenAI's and
Anthropic's fetch JavaScript files but never execute them, and the same holds
for Perplexity, Meta and ByteDance, while AppleBot and Google do render
(vercel.com/blog/the-rise-of-the-ai-crawler). OpenAI, Anthropic and Perplexity
do not document it either way in their own crawler pages, so treat the
measurement as the best evidence there is.

What that means here: the AIPM templates inject their LocalBusiness schema, the
quote form and the chat bubble at runtime through `core/growth-kit.js`, so an AI
assistant looking at an untreated site sees the words on the page and no
business data at all. **Everything a crawler needs goes in the HTML file
itself.** That is the single highest-value change in this skill, and it costs
nothing even in the case where a crawler does start rendering later.

## What you need before you start

The answers from the client onboarding form: name, address, phone, email,
service areas, hours, services, prices they will publish, credentials, reviews
link, FAQs, competitors. Put them in a `client.json` (see
`references/client-json.md`). Every step below reads from it, so the business
details are written once and stay identical everywhere, which is itself a
ranking factor.

If a fact is missing, ask. Never invent an address, an opening time, a price, a
rating or a review count: a wrong one in schema is worse than none, and Google
can suspend a profile for it.

## Step 1: decide the pages

- Home page: the main service plus the main town.
- One page per money service (the three from the form, not all twelve).
- One page per town they actually want work from (start with three to five).
- Optional: one FAQ page if there are more than eight questions.

**Put them beside index.html, not in a folder.** These templates load
`./core/core.js`, `theme.css` and `./assets/...` with relative paths, so a page
one folder down loses its stylesheet, its scripts and its images. Name the file
the way somebody searches, service first, town second:
`rewiring-sheffield.html`, `electrician-rotherham.html`. `seo_bake.py` reads
those names, so a page named that way gets its Service node and breadcrumb by
itself. Build each page by copying index.html, keeping the nav and footer,
replacing the middle with that page's own content, and pointing the in-page
links back at the home page (`href="./#contact"`).

Rules in `references/on-page.md`. The short version: one H1 per page carrying
the service and the town, a unique title and meta description per page, and at
least 400 words of genuinely different content on every town page. Never
generate town pages by swapping the name in one template. Google spots it, and
a page it treats as thin drags the rest down.

## Step 2: write the content from what the owner told you

Their words, their prices, their guarantee, their real reviews. Answer the
questions the form says customers keep asking, in full sentences, near the top
of the page. That is the same content that makes an AI assistant able to quote
you, so write it once and it works for both.

## Step 3: bake the technical layer into the HTML

Run `scripts/seo_bake.py` (see `references/scripts.md`). For every page it
writes, into the file, not at runtime:

- `<title>` and `<meta name="description">` on the formulas in
  `references/on-page.md`.
- `<link rel="canonical">`, Open Graph and Twitter tags.
- A JSON-LD `@graph`: Organization, WebSite, LocalBusiness (with the exact NAP,
  geo, openingHours, areaServed, sameAs, priceRange), Service per service page,
  FAQPage where there are real FAQs (the Search rich result was retired for
  everyone on 7 May 2026, but the markup is still the cleanest thing an
  assistant can quote, so keep it and never promise a client dropdowns),
  BreadcrumbList. Shapes in
  `references/schema.md`.
- No star rating in the schema, deliberately. Google: "If the entity that's
  being reviewed controls the reviews about itself, their pages that use
  LocalBusiness or any other type of Organization structured data are
  ineligible for star review feature." A business rating itself earns nothing
  and is the one thing the guidance names. Their rating does its work on the
  Google Business Profile, and in plain words on the page.

Keep the growth kit. It still runs the form and the chat for the humans. This
step is about what the crawler sees before any script runs.

## Step 4: robots.txt, sitemap.xml and the submissions

`scripts/seo_bake.py` writes both. robots.txt explicitly allows GPTBot,
OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot,
Claude-User, Claude-SearchBot, Google-Extended, Googlebot and Bingbot, and
points at the sitemap. Then, by hand, once:

- Google Search Console: add the property, submit the sitemap.
- Bing Webmaster Tools: add the site and submit the sitemap. ChatGPT's web
  results lean on Bing's index, so this is the cheapest thing you can do for AI
  visibility.
- IndexNow: `seo_bake.py` already wrote the key file at the site root and
  printed the one line that tells Bing the site changed. Run it after every
  deploy and new pages are seen in minutes rather than weeks. Google ignores
  IndexNow, so Search Console still wants the sitemap.

`llms.txt` is written too, but treat it as optional. Google says plainly of
llms.txt and files like it: "Google Search ignores them." No major engine has
committed to reading one, and measured traffic from them is near zero. It costs
nothing to publish and it is a useful page to paste at an assistant yourself,
but never trade a real page for it.

## Step 5: check it the way a crawler sees it

Run `scripts/seo_check.py <url>`. It fetches the pages with no JavaScript, as
GPTBot would, and fails on anything a crawler cannot see: missing business name,
phone, services or schema in the raw HTML, a broken or padded JSON-LD graph, a
missing canonical, a title over 60 characters, a meta description outside 120 to
155, a missing robots.txt or sitemap, or a name, address or phone number that
differs between pages.

Fix what it reports before you show the client. "It looks fine in my browser" is
not the test: your browser runs JavaScript and ChatGPT's crawler does not.

## Step 6: the off-site work, in the order that pays

Run this first, because it writes the whole thing out for this client:

```
python3 scripts/seo_offsite.py --client client.json --out offsite
```

It reads client.json and writes six files you work through with the owner:

- `offsite/google-business-profile.md`: the category to pick, the name, address
  and phone to paste, the hours, the 750 character description, every service
  with its own description, the website link with the tracking tag on it, the
  photo shot list, and the questions to seed. Written out, not described.
- `offsite/reviews.md`: the review link, the text of the ask by phone and by
  email, how to reply to a good one and a bad one, and how often to ask.
- `offsite/citations.md`: the same details formatted once, and the listings
  that matter for this trade in the order to do them.
- `offsite/posts.md`: eight Google posts, one a week, built from their own
  services, towns and questions.
- `offsite/links.md`: the trade bodies this specific trade has, starting with
  the ones the client already pays for and has never claimed, plus the
  manufacturer installer pages, the searches that find where they are already
  mentioned without a link, and a sponsorship email with their name in it.
  Other sites linking to them is about a seventh of local ranking and it is the
  half of it a competitor cannot copy in an afternoon.
- `offsite/tracking.md`: what to check every month and where to write it down.

Nobody can do this part without the client's Google login, and this skill never
asks for a password. What the pack removes is all the thinking and typing, so
the student is left with the clicking. **Read it with the owner and change
anything that is not true before it goes near their listing.**

Then, in this order:

1. **Google Business Profile.** Claim it, pick the right primary category (the
   heaviest single factor), fill every field, add real photos, list the services
   with the same wording as the site, set the hours, and put the website link in
   with `?utm_campaign=gbp` on the end so the CRM's Analytics page can tell you
   how much work the listing brings.
2. **Reviews, forever.** Ten or more, arriving steadily, no three week gaps.
   The CRM asks for one by itself the moment a lead is marked Won, once
   `THANKYOU_URL` and the Resend keys are set on it, so wire that up instead of
   relying on the owner remembering.
3. **Bing Places.** Ten minutes, and it feeds Bing, Copilot and ChatGPT's web
   results.
4. **Apple Business Connect.** Free, and it is what Apple Maps and Siri read.
5. **The listings AI assistants actually quote**: Yelp, Foursquare, the trade
   directories for that job (Checkatrade, Which Trusted Traders, Angi, Houzz,
   Bark), Trustpilot, the local chamber. Identical name, address and phone on
   every one.
6. **Local press and best-of lists.** A mention in a local paper or a "best
   plumbers in Leeds" list is the strongest AI citation signal there is, because
   that is the page the assistant reads when somebody asks.

## Step 7: the pages that answer questions, one a fortnight

Everything before this gets the business found. This gets it chosen, and it is
the half of AEO nothing else here covers. When somebody asks an assistant "how
much does a rewire cost in Sheffield", the answer comes from pages that answer
that question. A site of service pages and a contact form has nothing to quote.

```
python3 scripts/seo_content.py --client client.json --out content
```

It writes a brief per page, ordered by what earns most: what things cost
first, then the owner's own FAQs, then **every question that trade gets asked**
from the bank in `scripts/questions.py`, then the honest pages nobody writes.
Twenty-odd pages for a normal trade, each one a question somebody actually asks
Google or an assistant out loud. Briefs, never finished pages.

Publish the first six with the site, then one a week or a fortnight down the
list. The bank de-duplicates against the owner's own answers, so their wording
wins where they have already answered something.

**Why briefs.** Google's spam policy names the shortcut directly: "scaled
content abuse is when many pages are generated for the primary purpose of
manipulating search rankings and not helping users", with "using generative AI
tools or other similar tools to generate many pages without adding value for
users" given as the example. Generating forty articles overnight is that, and
it can take the whole site down rather than just those pages.

**The rule that keeps you the right side of it: every page contains something
only this business knows.** Their price, their process, what they found on a
job last week. If you cannot get that from the owner, ring them; do not write
the page yet. Ten minutes on the phone is the whole difference.

Write one at a time, in the owner's voice, answering in the first forty words.
Then run `seo_bake.py` (an advice page gets an `Article` node authored by the
owner) and `seo_check.py` (it fails two pages that have come out too similar).
Rules and the writing brief in `references/content.md`.

## Step 8: measure, and tell the client the truth

- Maps position: check from the customer's location, not the office. Details in
  `references/measure.md`.
- AI visibility: ask ChatGPT, Perplexity, Gemini and Copilot the questions a
  customer would ("best boiler repair in Leeds") once a month and write down
  whether the client is named and what the answer cites.
- Traffic: the CRM's Analytics page separates Google search, Google Maps and AI
  assistants, so the client can see it themselves.
- Timing, said out loud on day one: the technical work lands in days, the
  profile and reviews move things over weeks, and search positions usually take
  one to three months. Anybody promising page one in a fortnight is guessing.

## What this skill will not do

It will not fake reviews, invent a rating, spin near-identical town pages, or
promise a position. Those are the four ways local SEO gets a business
penalised, and the profile is the client's livelihood.
