# The off-site work

About half of what decides Maps position lives outside the website. This is the
part clients skip, so walk them through it on the kickoff call and do as much of
it as they will let you.

**Do not work from this file by hand.** Run
`python3 scripts/seo_offsite.py --client client.json --out offsite` and it
writes all of this out for the client in front of you: their category, their
description, their review ask, their listings, their posts. This file is the
reasoning behind what that pack contains, and the place to look when something
in it needs judgement.

## 1. Google Business Profile (the biggest single lever)

The client grants access by invite: they open their listing, Settings, Managers,
and add your email as a Manager. Never ask for their password.

Then, in order of weight:

- **Primary category.** The heaviest single ranking factor there is. Pick the
  most specific one that matches the money service ("Boiler repair service",
  not "Plumber", if it exists). Add the secondary categories for the other
  money services.
- **Every field filled.** Name exactly as on the site (no keyword stuffing, it
  is a suspension risk), address or service area, phone, hours including
  holidays, opening date, description, attributes.
- **Services.** List them with the same wording as the website, with the short
  descriptions and prices where the client publishes them.
- **Photos.** Ten or more real ones: the team, the van, the work, before and
  after. Fresh photos monthly beat a batch once.
- **The website link** with `?utm_campaign=gbp` on the end, so the CRM's
  Analytics page can separate Maps traffic from search traffic.
- **Products, posts and Q and A.** Post something monthly. Seed the Q and A
  with the real FAQs from the onboarding form and answer them from the account.
- **Messaging off** unless the client will actually answer it. An unanswered
  message is worse than none.

## 2. Reviews, and never stopping

- Ten or more to be competitive, then a steady trickle. Gaps of three weeks
  read as a business that has gone quiet.
- Wire up the CRM's review engine: marking a customer Won sends the thank you
  with the review link by itself, once `THANKYOU_URL`, `RESEND_API_KEY` and
  `RESEND_FROM` are set on their CRM. Until those are set it quietly does
  nothing, so check it with a test customer.
- Reply to every review, good and bad, in the owner's voice. A calm reply under
  a bad review sells better than a wall of five stars.
- Ask customers to say what the job was and where ("new boiler in Headingley").
  Those words are what the assistants quote.
- Never buy reviews or write them. It is the fastest way to lose the listing.

## 3. Bing Places

Ten minutes, free. Bing's index is what Copilot uses and what ChatGPT's web
results lean on, so this is the cheapest AI visibility you can buy. Same name,
address, phone, hours and categories as Google.

## 4. Apple Business Connect

Free. It is what Apple Maps and Siri read, and iPhone owners are half the
customers in most trades.

## 5. The listings assistants quote

Same name, address and phone on every one, character for character:

- Yelp and Foursquare (both feed assistant answers about local places).
- The trade directories for that job: Checkatrade, Which Trusted Traders,
  Trustatrader, Rated People, Bark in the UK; Angi, Houzz, Thumbtack, BBB in
  the US.
- Trustpilot if the client will keep it fed.
- The local chamber of commerce, the town's business directory, the trade body
  they are already a member of (Gas Safe, NICEIC, FMB pages all rank).

## 6. Local press and best-of lists

The strongest signal for being named by an AI assistant, because a "best
plumbers in Leeds" article is exactly the page the assistant reads when someone
asks. Pitch the local paper a real story: a job for a local school, a charity
day, a long-standing business anniversary. Ask to be considered for the
roundups that already rank for "best <trade> in <town>".

## 7. What not to bother with

- Buying backlinks. It is the one thing that can take a small business site down
  for good. Earn them instead: `links.md` in the generated pack lists this
  trade's own bodies, the manufacturer installer pages, and the places the
  business is already mentioned with the web address missing. Links are about a
  seventh of local ranking, and the trade body listing the client already pays
  for is the single best one, sitting unclaimed on nearly every business.
- Directory blasts to 200 sites. A handful of relevant ones beats a list.
- `llms.txt`. Write it because it costs nothing, but Google's own answer on
  llms.txt and AI-specific files is "Google Search ignores them", and no other
  major engine has committed to reading one. Never spend time on it that a real
  page deserved.
- Keyword-stuffed business names on Google. Competitors report them, and the
  listing gets suspended.
