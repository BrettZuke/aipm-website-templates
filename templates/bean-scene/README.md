# Bean Scene

A coffee roastery and espresso bar site, built on the AIPM template core and given its
own identity. Plain HTML, CSS and JavaScript. No build step, no framework, no install.

Concept site: Bean Scene is a fictional Leeds coffee shop. Every detail on the page
(address, phone, prices, roast list) is invented to demonstrate the design.

## What it is built from

It starts from the `coffee-shop` template in `aipm-templates` and keeps that system's
engine: `core/tokens.css`, `core/core.css` and `core/core.js` are copied in unchanged, so
every shared behaviour still works from its data attribute. Everything else is new.

| | Template | Bean Scene |
|---|---|---|
| Ground | Cream `#f5f0e8` | Espresso `#100C0A` |
| Display face | Messy Handwritten | Gambarino, warm vintage serif, sentence case |
| Body face | Inter | Satoshi |
| Corners | 1.75rem pills | 6px |
| Hero | Video in a rounded panel, copy above | Full bleed footage, wordmark over it |
| Menu | Picture with a floating name pill | Menu board: picture, dotted leader, price |
| Sections | Menu, events, contact | Roasts, menu, story, hire, visit |
| Motion | Scrolling marquee strip | None: nothing auto-moves or auto-advances |
| Photography | Template placeholders | Fresh set from Pexels, one warm grade |

## Files

```
index.html     the page
theme.css      the identity: token overrides, then every section
site.js        opening hours readout, reservation form
core/          copied from aipm-templates, do not edit
assets/        photography and the hero clip, credits in CREDITS.md
```

## Rebranding it for a real shop

Change the `:root` block at the top of `theme.css`. Colour is ten variables, and
`--font-heading` and `--font-body` swap the type. Nothing else needs touching.

Gambarino ships a single weight, so display elements state `font-weight: 400` rather than
inheriting the core's 600 and getting a faked bold. Caps are reserved for small Satoshi
labels (eyebrows, buttons, nav, table headers); every display heading is sentence case,
because a serif set in caps reads like a law firm rather than a coffee shop.

Business details live in two places: the copy in `index.html`, and the `HOURS` table at
the top of `site.js`, which drives both the "open now" line in the hero and the
highlighted row in the opening hours panel. It reads the clock in `Europe/London`, so a
visitor in another timezone still sees the shop's real state.

## Wiring the booking form

The form is deliberately honest. With no endpoint it validates, then says the request was
not sent anywhere rather than flashing a thank you that means nothing. To start collecting:

```html
<form class="form" data-endpoint="https://your-endpoint">
```

The fields then POST as JSON: `name`, `email`, `people`, `when`, `note`.

## Verified

Checked in a real browser at 1440px and 390px: clean console, no failed requests, no
horizontal overflow, every in-page link resolving, menu filters returning 12/6/3/3,
cursor trail, mobile menu overlay, form validation, and the reduced motion path where the
hero video is replaced by its still frame.
