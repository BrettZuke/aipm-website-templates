# On-page rules

The formulas below are the ones already proven on Brett's website factory,
with the changes the AI assistants need on top.

## Titles

Under 60 characters or Google cuts it off. If it is too long, drop the trust
signal first, then the business name.

| Page | Formula |
|---|---|
| Home | `<Main service> <Town>, <trust signal> \| <Business>` |
| Service | `<Service> in <Town>, <benefit> \| <Business>` |
| Town | `<Main service> <Town>, <differentiator> \| <Business>` |
| FAQ | `<Main service> questions, answered \| <Business>` |

## Meta descriptions

120 to 155 characters. Primary keyword, the benefit, then the phone number.

```
Need <service> in <town>? <Business> does <benefit>. <Trust signal>. Call <phone>.
```

## Headings

- One H1 per page, carrying the service and the town in normal words.
- H2s for the sections a customer actually wants: what it costs, how fast you
  come out, the areas you cover, what is included, the questions they ask.
- Never skip a level, never use a heading for decoration.

## The AEO rule that is different from old SEO

**Answer the question in the first two sentences under the heading, in full
sentences, with the specifics in them.** An assistant quotes a passage that
answers the question on its own. "Boiler repairs in Leeds start at 60 pounds
call-out, and we are usually there the same day" can be quoted. "We pride
ourselves on unrivalled service" cannot, and never gets picked.

Concretely, on every page:

- Put the price, the response time and the area in text, not only in an image
  or a graphic.
- Write the FAQs from the onboarding form out as real text with the question as
  a heading and the answer below. The accordion is fine, as long as the answer
  is in the HTML rather than fetched on click.
- Say the town names in sentences, the way a person would.

## Where the pages live

Beside `index.html`, never in a subfolder: the templates use relative paths for
CSS, scripts and images, and a folder breaks all three. File names read like the
search, service first and town second, because `seo_bake.py` uses the name to
work out what the page is:

```
index.html                    the home page
rewiring-sheffield.html       a service page (gets a Service node and a breadcrumb)
electrician-rotherham.html    a town page (gets a breadcrumb and that town)
faq.html                      optional
```

Copy `index.html` to make each one. Keep the nav, the footer and the contact
section, replace the middle with that page's own content, and change in-page
links to point home (`href="#contact"` becomes `href="./#contact"`) so they do
not look for a section that is not there.

## Page structures

### Service page
```
H1: <Service> in <Town>
Intro: what it is, what it costs, how fast, who it is for (4 to 6 lines)
H2: What it costs            price or honest range, or why you quote per job
H2: What is included         the actual steps
H2: How fast can you come out
H2: Areas we cover for <service>   links to the town pages
H2: Questions about <service>      three to five real FAQs
Reviews, two or three, real ones
CTA with the phone number written out and the quote form
```

### Town page
```
H1: <Main service> in <Town>
Intro: unique to this town, names a road, an area or a landmark (not a swap)
H2: Our <service> work in <Town>
H2: Why <Town> customers call us      local proof, jobs done there, a local review
H2: Areas near <Town>                 links to three to five neighbouring pages
CTA, phone and form
```

At least 400 words of genuinely different content per town page. Mention the
town three to five times in normal sentences. **Never build town pages by
find and replace.** Google detects it immediately and treats the lot as thin.
If you cannot write something true about a town, do not make a page for it.

## Images

- File names in kebab case, saying what they are: `boiler-repair-leeds.webp`.
- Alt text a person would write, location included naturally, never stuffed.
- WebP, under 150KB, `loading="lazy"` below the fold, explicit width and height
  so the page does not jump.

## Internal linking

- Home links to every money service and every town page.
- Each service page links to the towns; each town page links to the services.
- Every page links home from the logo.
- Use the words people search as the link text ("boiler repair in Bradford"),
  never "click here".

## The contact details

Exactly the same name, phone and address everywhere: the header, the footer,
the schema, the Google listing, and every directory. Not "Ltd" in one place and
nothing in another, not 0113 on the site and a mobile on Google. This
consistency is a real part of how both Google and the assistants decide two
mentions are the same business.
