# Checking it worked

Three things get measured, and they move on different clocks.

## 1. Google Maps position

Maps results change with where the searcher is standing, so checking from the
office tells you nothing useful.

- Free way: open a private window, search `<service> <town>`, and note where
  the client sits in the map pack. Repeat from two or three postcodes across
  their area (Chrome devtools, Sensors, Location lets you set a postcode's
  coordinates). Write down the positions with the date.
- Do it monthly, not weekly. Local results wobble day to day and you will chase
  noise.
- What good looks like: top three for the money service in the home town within
  one to three months of the profile being fixed and reviews arriving. Outer
  towns take longer and may never reach the pack if the client is far from the
  centre. Distance is a factor you cannot optimise.

## 2. Are the assistants naming them

Once a month, ask each of these the question a customer would ask, in a fresh
chat with no memory of the business:

- ChatGPT: "best boiler repair in Leeds" and "who can fix a boiler in Leeds
  today"
- Perplexity: the same
- Google AI Mode or AI Overviews: the same
- Copilot: the same

Before the manual asking, read the numbers Google now gives you. Search
Console, Performance, Search results, then the Search Appearance tab: "AI
Overviews" and "AI Mode" are listed there since 3 June 2026, with the
impressions and clicks the site got inside Google's own AI answers. It is the
only first-party AI visibility data that exists, it is free, and it is the line
worth screenshotting for the client. Everything else on this list is you
asking an assistant by hand.

Record: is the client named, what did the answer cite, and who was named
instead. The citations tell you where to work next: if every answer cites the
same directory, get the client listed there properly.

Expect this to take longer than search. The assistants lean on established
listings and review sites, which is exactly why the off-site steps matter.

## 3. What the site itself is doing

The CRM's Analytics page (Website, Analytics) already separates it:

- **Found you on Google** is search plus Maps traffic.
- **From AI assistants** is visits arriving from a link inside a ChatGPT,
  Perplexity, Gemini, Copilot or Claude answer. This is AEO working, in
  numbers, and it is the line to show the client.
- **Calls tapped** and **Enquiries** are what the traffic actually produced,
  which is the only number that pays anybody.

Google Maps traffic only separates out once the Business Profile website link
carries `?utm_campaign=gbp`. Without it, Google reports those visits as
ordinary search.

## 4. The technical check, any time

`python3 scripts/seo_check.py https://theirsite.co.uk`

Run it after every change and after every redeploy. It reads the site the way
an assistant's crawler does, with no JavaScript, so it catches the failure that
looks fine in a browser.

## What to tell the client, on day one

- Days: the site, the schema and the listings are done and submitted.
- Weeks: the profile and the first reviews start moving the map pack.
- One to three months: search positions settle for the main town.
- Longer, and never guaranteed: being named by the assistants, which follows
  reviews, directories and local mentions rather than anything on the site.

Anybody promising page one in a fortnight is guessing, and the client has
probably already been promised it by somebody else.
