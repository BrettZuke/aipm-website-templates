# The schema graph

One `<script type="application/ld+json">` per page holding one `@graph`, written
into the HTML file by `scripts/seo_bake.py`. Not injected by JavaScript: the
assistants' crawlers never see that.

Every node is only as good as the facts behind it. A node with a guessed
address, a made-up rating or an empty string is worse than no node.

## Home page

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://site.co.uk/#org",
      "name": "Leeds Boiler Co", "legalName": "Leeds Boiler Company Ltd",
      "url": "https://site.co.uk/", "logo": "https://site.co.uk/assets/logo.png",
      "telephone": "+44 113 496 0000", "email": "hello@site.co.uk",
      "sameAs": ["facebook url", "instagram url", "google business url"] },

    { "@type": "WebSite", "@id": "https://site.co.uk/#site",
      "url": "https://site.co.uk/", "name": "Leeds Boiler Co",
      "publisher": { "@id": "https://site.co.uk/#org" } },

    { "@type": ["LocalBusiness", "Plumber"], "@id": "https://site.co.uk/#local",
      "name": "Leeds Boiler Co", "image": "https://site.co.uk/assets/hero.webp",
      "telephone": "+44 113 496 0000", "email": "hello@site.co.uk",
      "url": "https://site.co.uk/", "priceRange": "££",
      "address": { "@type": "PostalAddress", "streetAddress": "Unit 4, Kirkstall Road",
                   "addressLocality": "Leeds", "addressRegion": "West Yorkshire",
                   "postalCode": "LS4 2AZ", "addressCountry": "GB" },
      "geo": { "@type": "GeoCoordinates", "latitude": 53.8102, "longitude": -1.5762 },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00", "closes": "18:00" }],
      "areaServed": [{ "@type": "Place", "name": "Leeds" }, { "@type": "Place", "name": "Bradford" }],
      "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Services",
        "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler repair" } }] } },

    { "@type": "FAQPage", "@id": "https://site.co.uk/#faq",
      "mainEntity": [{ "@type": "Question", "name": "Do you charge to quote?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Quotes are free and fixed before we start." } }] }
  ]
}
```

## FAQPage: keep it, but know what it does now

Google retired the FAQ rich result for everybody on 7 May 2026, so the dropdown
questions under a listing are not coming back and nobody should be sold them.

The markup stays in this skill anyway, for one reason: a question with a marked
answer is the cleanest thing an assistant can lift, and ChatGPT, Perplexity and
AI Overviews all quote them. Judge it by whether the business gets named in an
answer, never by a rich result in Search, and never promise a client the
dropdowns.

The questions themselves have to be real ones customers ask. Invented FAQs read
as invented to a person and add nothing for an assistant.

## The `@type` for the business

Two types, not one: `["LocalBusiness", "<the trade>"]`. The trade type tells an
assistant what the business is without reading the page, and keeping
LocalBusiness alongside it means any checker can find the node. `seo_bake.py`
writes it this way and `seo_check.py` accepts either shape, so a hand-written
page with a bare trade type still passes.

`areaServed` uses `Place`, not `City`: half the areas a trade covers are
villages, suburbs or postcode districts, and this skill does not state things
that are not true.

The trade types worth knowing: `Plumber`, `Electrician`,
`RoofingContractor`, `HVACBusiness`, `HousePainter`, `Locksmith`,
`MovingCompany`, `HairSalon`, `BeautySalon`, `Dentist`, `Veterinary`,
`AutoRepair`, `CleaningService` (via `ProfessionalService`), `Restaurant`,
`Cafe`. If none fits, `LocalBusiness`.

## Service page

Add, alongside Organization, WebSite and the LocalBusiness node:

```json
{ "@type": "Service", "@id": "https://site.co.uk/services/boiler-repair#service",
  "name": "Boiler repair", "serviceType": "Boiler repair",
  "provider": { "@id": "https://site.co.uk/#local" },
  "areaServed": [{ "@type": "Place", "name": "Leeds" }],
  "description": "Same day repairs on every major make, with parts on the van.",
  "offers": { "@type": "Offer", "priceCurrency": "GBP", "price": "60",
              "description": "call-out, taken off the bill if we do the work" } }
```

Plus a `BreadcrumbList` (Home, Services, this service).

## Town page

The same LocalBusiness node with `areaServed` set to that town, plus a
`BreadcrumbList` (Home, Areas, this town). Do not create a second
LocalBusiness with a different `@id` per town: one business, one identity.

## Rules that stop schema doing harm

- **No `aggregateRating` and no `review` for the business's own rating.** Google:
  "If the entity that's being reviewed controls the reviews about itself, their
  pages that use LocalBusiness or any other type of Organization structured data
  are ineligible for star review feature."
  (developers.google.com/search/docs/appearance/structured-data/review-snippet)
  So it wins no stars, and it is exactly what the guidance warns about. Plenty of
  agencies still do it; that is not a reason to. Put the reviews on the page as
  words, and let the rating work where it counts, on the Google Business Profile.
  `aggregateRating` is for a site that reviews OTHER businesses, like a directory.
- Never mark up a review the business wrote itself.
- The `name`, `telephone` and `address` in schema must match the visible page,
  the Google listing and every directory, character for character.
- `geo` wants at least five decimal places of latitude and longitude, which is
  what you get by right clicking the pin in Google Maps.
- `openingHoursSpecification` uses 24 hour times. All day is `00:00` to `23:59`,
  and a day the business is shut is left out rather than set to zeros.
- No empty strings, no `[bracketed]` placeholders. The bake script drops a field
  rather than emitting an empty one.
- Validate after every build: `scripts/seo_check.py` parses the graph, and
  Google's Rich Results Test at https://search.google.com/test/rich-results is
  the final word before you show the client.
