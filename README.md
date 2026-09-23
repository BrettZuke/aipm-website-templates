# AIPM Template Library

Ninety-one premium website sites. Ninety are built on one shared design system:
plain HTML, CSS, and JavaScript, no build step, no framework, no npm install. Open a file
and start editing.

The first group, **Finished client sites**, is different in kind. Those are seventy-one
complete branded builds for a named business, one per local niche, rather than blank
templates, so a student can reskin one and hand it over. Sixty-eight carry the full growth
kit (the floating quote form and the chat). Bean Scene carries the chat and its own table
booking form, with no pop-up. Wensley and Hart, the funeral director, carries the chat and its
own contact form with no pop-up, on purpose: a sales form that jumps out at a grieving family
would lose the client. Summit Roofing is the one exception to everything above: a compiled
React app with its own chat, covered below.

## Start here

0. Send the client the onboarding form the day they pay: see `onboarding/`. Two minutes to
   make your own copy, twelve for them to fill in, and every step below is built from their
   answers.
1. Browse the live gallery at https://aipm-templates.vercel.app and pick the site closest to
   your client's trade.
2. Copy that site's folder out of `templates/`. Every finished site is self-contained: it has
   its own `core/`, `assets/`, `api/` and `demo-site.js`, so the folder is the whole website.
3. Make it the client's business: the name, phone, email, town, services and chat answers in
   `demo-site.js`, the words on the page in `index.html`, the colours and fonts in `theme.css`,
   and the photos in `assets/` (keep the same file names and nothing else needs to change).
4. Give it its SEO and AEO layer, which is the part that gets the client found. See
   "Getting the site found" below. It is two commands.
5. Deploy the folder to Vercel: run `vercel deploy --prod` from inside it.
6. Optional: switch the chat to AI with a free Groq key. The three steps are in that folder's
   `AI-CHAT-SETUP.md`.

## Before a site goes live

The demo businesses are fictional. Every business name, phone number, address, review, price
and accreditation on these pages was written for the demo. Before a client's site goes live:

- Replace every review with the client's real ones, or remove the section. Never publish the
  demo reviews under a real business.
- Use the client's real prices, or take the prices out.
- Keep a claim such as NICEIC, Gas Safe, fully insured or a guarantee only if the client can
  back it up.
- Swap stock photos of people for the client's own team wherever you can.
- Set `form.endpoint` in `demo-site.js` to the address that should receive leads. Both the
  floating quote form and the contact form post there. With no endpoint the visitor still sees
  a thank you message, but the lead goes nowhere.
- Point the Privacy and Terms links in the footer at real pages.
- Run `seo_check.py` against the live address and fix anything it reports. A site that looks
  right in your browser can still be invisible to ChatGPT and Perplexity.

## Getting the site found (SEO and AEO)

The off-site half, which is the bigger half of ranking in Google Maps, is written out for
each client by `scripts/seo_offsite.py`: their Google listing field by field, the review
asks, the directories for their trade, eight posts and the monthly check.


Open this repo's folder in Claude Code and the `local-seo-aeo` skill loads by itself. Ask it
to set the site up for search, or run the two scripts yourself:

```
python3 .claude/skills/local-seo-aeo/scripts/seo_bake.py --client client.json --site <site folder> --base https://theirdomain.co.uk
python3 .claude/skills/local-seo-aeo/scripts/seo_check.py https://theirdomain.co.uk
```

`client.json` is the client's details in one file, filled in from their onboarding form.
Copy `.claude/skills/local-seo-aeo/example-client.json` and work through it.

**Why this step exists.** Googlebot and Bingbot run JavaScript. GPTBot, ClaudeBot and
PerplexityBot do not: they read the raw HTML file. The growth kit adds the schema, the quote
form and the chat after the page loads, so without this step an AI assistant looking at the
site sees the words on the page and no business details at all. `seo_bake.py` writes the
title, description, canonical and a full JSON-LD graph into the file itself, plus a
`robots.txt` that names every AI crawler, a `sitemap.xml` and an `llms.txt`. The growth kit
notices a baked page and leaves its head alone, so the two never disagree.

`seo_check.py` then reads the site back the way those crawlers do, with no JavaScript, and
fails on anything they cannot see. Do not hand a site over until it passes.

The skill also covers the half of local ranking that is not on the website at all: the
Google Business Profile, reviews, Bing Places, Apple Business Connect and the directories AI
assistants quote. Read `.claude/skills/local-seo-aeo/references/off-site.md` with the client
on the kickoff call.

## Turning the chat into AI

Every finished site folder has an `api/` folder and an `AI-CHAT-SETUP.md`. Out of the box
the chat answers from its scripted list. Add a free Groq key to the Vercel project as
`GROQ_API_KEY`, fill in `api/_knowledge.js` with the business's details, redeploy, and it
answers with AI from that knowledge instead. The key lives only in Vercel, never in the
page. The same three steps are in each folder's `AI-CHAT-SETUP.md`, and the shared source
for new sites is in `core/ai-chat/`.

Every one is verified at 1440px and 390px with a clean console, no failed requests, no
horizontal overflow, and every in-page link resolving.

Live gallery: https://aipm-templates.vercel.app

## Why it is built this way

Every template shares one core. A template is not a separate website, it is a set of token
values plus its own layout. That means:

- Reskinning a template to a client's brand is ten CSS variables, not a rewrite.
- A component built for one template is available to all of them.
- Students learn one system, not eighteen.

## Structure

```
core/
  tokens.css     the ten-variable contract and the fluid type scale
  core.css       reset, layout, and every shared component
  core.js        shared behaviours, all opt-in via data attributes
shared/
  avatars/       stock people used across templates
  thumbs/        gallery screenshots
templates/
  <slug>/
    index.html   the page
    theme.css    token overrides plus anything unique to this template
    assets/      this template's images and video
index.html       the gallery
```

## Reskinning a template for a client

Open the template's `theme.css` and change the `:root` block. That is the whole job for
colour. Everything reads from these:

| Variable | What it controls |
|---|---|
| `--background` | Page background |
| `--card` | Card fill and border |
| `--foreground` | Body text and headings |
| `--primary-cta` | Primary button fill |
| `--primary-cta-text` | Primary button label |
| `--secondary-cta` | Secondary button fill |
| `--secondary-cta-text` | Secondary button label |
| `--accent` | Highlights, stars, small accents |
| `--background-accent` | The soft ambient glow behind the page |
| `--radius` | Every rounded corner on the site |

Two more worth knowing: `--font-heading` swaps the display face, and `--section-head-size`
sets how big section headings run.

The phone menu opens as a full-screen panel in `--primary-cta`, with its text in
`--primary-cta-text`. If a client's brand colour is pale and that text becomes hard to read,
set `--panel-ink` (for example `--panel-ink: var(--foreground);`) and the brand and close
button in the open menu switch to it.

Type never needs per-breakpoint sizes. The scale (`--text-sm` through `--text-9xl`) is
fluid and switches to viewport units below 768px so headlines stay proportional on phones.

## Behaviours

`core.js` wires everything from data attributes, so a template only gets what its markup
asks for.

| Attribute | Effect |
|---|---|
| `data-letters` | Splits a button label so each glyph rolls up on hover |
| `data-fit` | Sizes display text to span its container exactly |
| `data-trail` | Cursor image trail across a section |
| `data-accordion` | Click-to-open panels (`data-accordion="multi"` allows several open) |
| `data-filter` + `data-cat` | Filter chips paired with filterable items |
| `data-carousel` | Horizontal scroller with prev/next buttons |
| `data-marquee` | Duplicates a track so it scrolls seamlessly |
| `.reveal` | Fades up on scroll |
| `.reveal-stagger` | Fades up children in sequence |

## Three things that will bite you

1. **`aspect-ratio` loses to the `width`/`height` HTML attributes** unless `height: auto`
   is also set. The core reset handles it; do not remove that line.
2. **`scrollWidth` clamps to the element's box.** Measuring text to fit it to a container
   needs a `Range`, which is what `data-fit` uses.
3. **The nine-stop button shadow is the thing that makes buttons look expensive.** It is
   not decoration you can flatten to a single shadow without the whole page looking cheap.

## Regenerating the gallery

The index page is generated from `shared/templates.json`. A template counts as live as soon
as `templates/<slug>/index.html` exists, so after adding one:

```
python3 shared/build-gallery.py
```

Templates without a screenshot in `shared/thumbs/` fall back to a swatch of their palette.

An item may also carry an `"href"`. The card then links there instead of to
`templates/<slug>/`, and opens in a new tab. That exists for a site whose files belong in
this repo but which cannot run from a subfolder. `summit-roofing` is the only one: it is a
compiled React Router app that resolves its routes from `/`, so it renders blank under
`/templates/...` and has to be deployed at its own root. Its folder is a byte-faithful copy
of the live deployment and `templates/summit-roofing/DEPLOY.md` explains how to ship it.

## Forms

Every template ships with no backend. Rather than silently swallowing a lead, an unwired
form says so when submitted. To start collecting, add an endpoint to the form tag:

```html
<form class="form" data-form data-endpoint="https://your-endpoint">
```

The fields POST as JSON. A silent form that looks like it worked is worse than no form.

## Deploying

The whole folder is static. Point any host at it. For Vercel:

```
vercel deploy --prod
```

Individual templates can also be lifted out and deployed alone. Copy the template folder
plus `core/` and `shared/`, then fix the two relative paths at the top of its `index.html`.

## Swapping the imagery

Every template ships with placeholder photography. Replace the files in the template's
`assets/` folder, keeping the same filenames, and the site updates with no code changes.
Free sources that do not require attribution: Pexels, Unsplash, Pixabay. For video:
Coverr and Mixkit are built for website hero clips.
