# The two scripts

Both are plain Python 3 files. There is nothing to install, no account, no API
key and no cost. They only need the `client.json` you filled in from the
onboarding form (see `client-json.md`) and the folder the website lives in.

- `scripts/seo_bake.py` writes the SEO and AEO layer into the HTML files.
- `scripts/seo_check.py` reads the site back the way an AI crawler does and
  tells you what is wrong.
- `scripts/seo_offsite.py` writes the off-site pack: the Google Business
  Profile filled in, the review asks, the listings, eight posts and the monthly
  check. That is the half of ranking that is not on the website, written out
  for this client so the job is clicking rather than thinking.

Run bake first, check second, offsite third (or first, if the client's Google
listing is a mess, because that is worth more than anything on the site). Never show a client the site before check passes.

## seo_bake.py

```
python3 scripts/seo_bake.py --client client.json --site ./their-site
```

Point `--site` at the folder holding `index.html`. It works on every `.html`
file at the top level and in the `services/` and `areas/` folders.

### What it puts in every page

Inside `<head>`, written into the file so it is there before any JavaScript
runs:

- the `<title>` and the `<meta name="description">`, on the formulas in
  `on-page.md`
- `<link rel="canonical">`, so two addresses for the same page do not compete
- Open Graph and Twitter tags, which is what WhatsApp, Facebook and LinkedIn
  read when somebody shares the link
- one JSON-LD block holding the whole business: Organization, WebSite,
  LocalBusiness with the phone, email, address, map pin, opening hours, areas
  covered, social links, price range and services, a Service block on a service
  page, the FAQs where they apply, and a breadcrumb on every page below the home
  page

### What it puts at the site root

- `robots.txt`, naming GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
  Perplexity-User, ClaudeBot, Claude-User, Claude-SearchBot, Google-Extended,
  Googlebot and Bingbot one by one and letting each of them in, with the sitemap
  address at the bottom
- `sitemap.xml`, every page with today's date
- `llms.txt`, the whole business written out as plain text: contact details,
  hours, services, areas, what they do not do, credentials and the FAQs

### The flags

| Flag | What it does |
|---|---|
| `--client` | Path to the client.json. Required. |
| `--site` | Path to the website folder. Required. |
| `--base` | The live address, for example `https://theirdomain.co.uk`. If you leave it out the script uses `business.site` from the client.json. Without either it stops, because it cannot write a canonical or a sitemap without knowing the address. |
| `--keep-titles` | Leave any title somebody wrote by hand exactly as it is. Without this the script writes its own. |
| `--dry-run` | Print what it would do and change nothing on disk. Run this first if you are nervous. |

### Things worth knowing

**It never touches the body of the page.** No text, no images, no buttons, and
none of the growth kit script tags. The form and the chat bubble carry on
working exactly as before. Everything the script writes sits between two
comments that say `seo-bake:start` and `seo-bake:end`.

**Running it twice changes nothing.** The second run replaces its own block
rather than adding a second one, so the file comes out byte for byte identical.
Run it again every time the client corrects a detail.

**Do not hand edit anything between the two markers.** The next run will
overwrite it. Change the `client.json` and run the script again instead.

**It never invents a value.** If the client.json has no map pin, there is no
map pin in the schema. If there is no real Google rating and review count,
there is no star rating in the schema, which is the one that gets sites
penalised. Everything that was missing is listed in the summary line at the
end, so read that line. It is the list of things to go back and ask for.

**A page it cannot use is left alone.** A file with no `<head>` is skipped,
named in the summary, and left out of the sitemap.

## seo_check.py

```
python3 scripts/seo_check.py https://theirdomain.co.uk --client client.json
python3 scripts/seo_check.py ./their-site --client client.json
```

Give it the live address once the site is up, or the folder while you are still
building. With the live address it also follows the sitemap and checks every
page listed in it.

It fetches the pages the way GPTBot does, which means it never runs a line of
JavaScript. That is the entire point. Your browser runs the growth kit and
shows you a perfect page. ChatGPT's crawler does not, and sees only what is in
the file.

It prints PASS or FAIL for each check, a numbered list of what to fix, and the
one sentence you can honestly say to the client. It exits with an error code if
anything failed, so it can sit in a build step.

### What each check means

**Business name, phone number and at least one service in the raw HTML.** The
main one. If these three fail, an AI assistant asked "who cleans roofs in
Leicester" cannot name this business, because as far as it is concerned the page
does not contain one.

**JSON-LD present and parses.** The business details in machine readable form.
Schema added by a script after the page loads does not count here and never
will, because nothing ran the script.

**LocalBusiness with a name, phone and address.** The block Google reads for
the Maps side. Either `LocalBusiness` or the trade type for that business, for
example `RoofingContractor` or `Plumber`, counts.

**No placeholder text and no empty values.** Catches `[Business Name]`, "TODO",
"lorem" and fields left as `""`. An empty field is worse than a missing one:
leave it out of the client.json instead.

**Exactly one h1.** One main heading per page, carrying the service and the
town. Two h1s means neither is the subject of the page.

**Title 60 characters or fewer.** Longer and Google cuts it off mid word in the
results.

**Meta description 120 to 155 characters.** Shorter wastes the space, longer
gets truncated. If this fails after a bake, the client.json is thin: add
another real sentence about the business and run bake again.

**Canonical present and matching the page address.** Stops the same page
competing with itself at two addresses.

**Name, address and phone identical on every page.** Google and the assistants
use this to decide that two mentions are the same business. One page saying
Ltd and another not is a real cost.

**robots.txt exists, names the sitemap and lets the AI crawlers in.** A single
`Disallow: /` under `User-agent: *` hides the site from every assistant, and it
is a default in a lot of hosting setups.

**sitemap.xml exists, is valid, and every address in it works.** A sitemap full
of 404s slows down the indexing of everything else.

### When it fails

Fix the cause, not the symptom. Almost every failure comes from a gap in the
`client.json`, so fill that in and run `seo_bake.py` again, then check again.
Do not hand edit the baked block: the next bake will wipe it.

## The order to work in

1. Fill in `client.json` from the onboarding form. Ask about anything missing.
2. Write the page content properly, in the client's own words.
3. `python3 scripts/seo_bake.py --client client.json --site ./their-site --dry-run`
   and read the summary of what is missing.
4. Go back to the client with that list, then run it again without `--dry-run`.
5. `python3 scripts/seo_check.py ./their-site --client client.json` until it
   passes.
6. Put the site live, then run the check once more against the live address, so
   you are testing what the crawler will really get.
7. Submit the sitemap in Google Search Console and Bing Webmaster Tools, then
   start on the off-site work in `off-site.md`, which is the half that actually
   moves the Maps ranking.


### The IndexNow key

`seo_bake.py` also writes a file at the site root whose name is a long string
of letters and numbers, and whose only content is that same string. That is an
IndexNow key: it proves to Bing that a ping about this site came from whoever
controls the site. Leave it alone, deploy it with everything else, and run the
curl line the bake prints after each deploy. Bing, and through it Copilot and
ChatGPT's web results, then see the change in minutes. The key is kept between
runs, because changing it would stop the old pings working.

## seo_offsite.py

```
python3 scripts/seo_offsite.py --client client.json --out offsite
```

Writes five files into `offsite/`. Nothing is sent anywhere, nothing needs a
login, and no password is ever asked for: the client grants you access to their
Google listing by adding your email as a Manager.

| File | What it is for |
|---|---|
| `google-business-profile.md` | Work top to bottom with the listing open. Every field is written out. |
| `reviews.md` | The link, the ask by text and email, the replies, the cadence. |
| `citations.md` | The details to paste, and which listings to do in which order. |
| `posts.md` | Eight posts, one a week. Each wants one real photo. |
| `content-plan.md` (from `seo_content.py`) | A brief per page: cost pages, the owner's own FAQs, then every question that trade gets asked (`scripts/questions.py`), then the honest pages. Briefs, never finished pages. |
| `links.md` | The trade bodies for this trade, the unlinked mentions to chase, the sponsorship ask. Never finished; it is a list they keep working. |
| `tracking.md` | The monthly check, with a table for the positions. |

At the end it prints the gaps: no review link, no FAQs, a trade it has no
category suggestion for. Fill those in client.json and run it again.

Everything it writes is a draft in the owner's words. Read it with them. A
description that says something untrue is worse than no description, and a
category that is wrong is the single most expensive mistake on the list.
