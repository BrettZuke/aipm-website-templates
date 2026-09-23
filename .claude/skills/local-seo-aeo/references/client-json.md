# client.json

One file per client, written once from their onboarding form answers, read by
every script in this skill. The business details then match on the website, in
the schema, on the Google listing and in the chatbot, which is the consistency
Google and the AI assistants are checking for.

Anything you do not know is left out, never guessed. The scripts skip what is
missing and `seo_check.py` tells you what it cost you.

```json
{
  "business": {
    "name": "Leeds Boiler Co",
    "legal_name": "Leeds Boiler Company Ltd",
    "type": "Plumber",
    "owner": "Dave Whitfield",
    "one_line": "We fix boilers and bathrooms for homeowners in Leeds",
    "founded": "2011",
    "phone": "+44 113 496 0000",
    "email": "hello@leedsboiler.co.uk",
    "site": "https://leedsboiler.co.uk",
    "price_range": "££",
    "currency": "GBP"
  },
  "address": {
    "show": true,
    "street": "Unit 4, Kirkstall Road",
    "town": "Leeds",
    "region": "West Yorkshire",
    "postcode": "LS4 2AZ",
    "country": "GB",
    "lat": 53.8102,
    "lng": -1.5762
  },
  "areas": ["Leeds", "Bradford", "Wakefield", "Pudsey", "Morley"],
  "hours": [
    { "days": ["Mo", "Tu", "We", "Th", "Fr"], "open": "08:00", "close": "18:00" },
    { "days": ["Sa"], "open": "09:00", "close": "13:00" }
  ],
  "emergency": "Out of hours call-outs until 10pm, 95 pounds",
  "services": [
    {
      "name": "Boiler repair",
      "slug": "boiler-repair",
      "money": true,
      "blurb": "Same day repairs on every major make, with parts on the van.",
      "price_from": "60",
      "price_note": "call-out, taken off the bill if we do the work"
    },
    { "name": "Boiler installation", "slug": "boiler-installation", "money": true },
    { "name": "Bathroom fitting", "slug": "bathroom-fitting", "money": true },
    { "name": "Radiators and leaks", "slug": "radiators-and-leaks" }
  ],
  "not_services": ["Commercial plant rooms", "Oil boilers"],
  "why_us": [
    "Gas Safe registered engineers, no subcontractors",
    "Fixed price before we start",
    "Two year guarantee on every repair"
  ],
  "credentials": ["Gas Safe 123456", "Which Trusted Trader", "2 million public liability"],
  "reviews": {
    "google_url": "https://g.page/r/xxxx",
    "rating": 4.9,
    "count": 137,
    "quotes": [
      { "text": "Came out the same morning and fixed it in an hour.", "author": "Sarah H", "town": "Leeds" }
    ]
  },
  "faqs": [
    { "q": "Do you charge to quote?", "a": "No. Quotes are free and fixed before we start." },
    { "q": "How quickly can you come out?", "a": "Usually the same day for a breakdown." }
  ],
  "profiles": {
    "google_business": "https://maps.google.com/?cid=1234567890",
    "facebook": "https://facebook.com/leedsboilerco",
    "instagram": "",
    "checkatrade": "",
    "trustpilot": ""
  },
  "competitors": ["https://example-plumbing.co.uk"]
}
```

## Where each field comes from on the onboarding form

| client.json | Form question |
|---|---|
| `business.name`, `owner` | What is the business called, And your name. The owner's name becomes a `Person` in the schema, which is what answers "who actually runs it" when an assistant is asked |
| `business.one_line`, `business.type` | In one line, what does the business do |
| `business.phone`, `business.email` | The best number, The best email |
| `address.*`, `address.show` | Your full address, written the way it should appear |
| `areas` | Which towns, cities or postcodes do you cover |
| `hours`, `emergency` | Your opening hours |
| `services`, `money` flags | List everything you do, Which three do you want more of |
| `not_services` | What do you not do |
| `services[].price_from`, `price_note` | Prices you are happy to show publicly |
| `why_us` | Why do customers pick you |
| `credentials` | Licences, insurance, accreditations |
| `reviews.google_url`, `quotes` | A link to your Google reviews, Paste three things customers said |
| `faqs` | The questions customers ask again and again |
| `profiles.*` | Your Facebook, Instagram, Any directories you are listed on |
| `competitors` | Who are your main local competitors |

`reviews.rating` and `reviews.count` are not on the form on purpose: read them
off the live Google listing the day you build, because they are the two numbers
most likely to be wrong from memory. They do NOT go into the schema (Google
ignores a business rating itself, see `schema.md`); they are there for the
visible page, the proposal and for tracking whether the review work is landing.

`address.lat` and `address.lng`: take them from the Google Business Profile or
by right clicking the pin in Google Maps. Without them the LocalBusiness node
still works, it is just weaker.

`address.show: false` for a business that works from home: the town, region and
country still go in the schema, the street does not, which is what Google asks
for on a service area business.
