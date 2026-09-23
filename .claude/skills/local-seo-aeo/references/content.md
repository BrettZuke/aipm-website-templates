# The pages that answer questions

The site, the listing, the reviews and the links get a business found. This is
the part that gets it **chosen**, and it is the half of AEO nothing else in
this skill covers.

When somebody asks ChatGPT "how much does a rewire cost in Sheffield", the
assistant answers from pages that answer that question. A site made only of
service pages and a contact form has nothing to quote. A site with eight pages
answering the eight questions that business is actually asked has eight chances
to be the source.

## The line you must not cross

Google's spam policy names this exact shortcut:

> Scaled content abuse is when many pages are generated for the primary purpose
> of manipulating search rankings and not helping users.

and lists as an example:

> Using generative AI tools or other similar tools to generate many pages
> without adding value for users.

So the thing that feels efficient, pointing Claude at a list of keywords and
generating forty articles overnight, is the thing the policy describes. It can
take the whole site down, not just those pages, and a local business cannot
afford that.

There is no clever way around it. The rule below is the whole defence.

## The rule

**Every page contains something only this business knows.** Their price. How
they actually do the job. What they found on a job last week. What the owner
says on the phone when somebody asks.

Take that out and you have the same page as every competitor, which is worth
nothing to a reader and nothing to an assistant choosing who to name. If you
cannot get it from the owner, do not write the page. Ring them. Ten minutes on
the phone is the entire difference between a page that works and a page that is
a liability.

## Getting the plan

```
python3 scripts/seo_content.py --client client.json --out content
```

It writes `content/content-plan.md` from their own services, prices, towns and
questions: which pages, in what order, what each one must contain, and what it
links to. It writes briefs, never the finished page, because a script that
writes the pages is the thing the policy above describes.

The order it picks is not arbitrary:

1. **What things cost.** The first question anybody asks, the one they ask an
   assistant out loud, and the one nearly every competitor refuses to answer.
   A real number wins the job before the phone rings.
2. **Their own FAQs**, where the answer has enough behind it to deserve a page.
   A question the owner is asked every week is proven demand, unlike a keyword
   tool's guess.
3. **Every question the trade gets asked**, from `scripts/questions.py`. The
   owner writes three or four on the form; their customers ask thirty. This is
   the rest of them, and it is what turns the site into the answer rather than
   a brochure. Anything the owner already covered is dropped, so their wording
   wins. Add to that file freely: if a client says "everyone asks me X", put X
   in their trade's list.
4. **The honest pages.** What they do not do and who to call instead. How to
   check somebody is qualified. Nobody writes these, which is exactly why they
   work, and the firms named in the first one often link back.

## Writing one so an assistant will quote it

- **Answer in the first forty words.** Before the introduction, before the
  history of the trade. An assistant reads the top and stops. So does a person
  standing in a cold kitchen.
- **Real numbers.** "From £2,400, and here is what moves it" beats "prices vary
  depending on your requirements", which says nothing and is what everybody
  else wrote.
- **One question per page.** A page answering four gets quoted for none.
- **The owner's voice, first person.** Read it back and ask whether they would
  actually say that sentence.
- **Their own photo**, not a stock image of somebody else's work.
- **Cut every sentence that would survive being deleted.**

## After writing each one

1. Save it into the site using the same template as the rest, so it keeps the
   header, footer and growth kit.
2. Run `seo_bake.py`. A page whose filename says cost, price, guide, how, what,
   why, advice, checklist or questions gets an `Article` node, authored by the
   owner's `Person` node and dated from the file. An assistant weighing whose
   answer to quote leans on content that has an author and a date.
3. Run `seo_check.py`. It fails if two pages have come out too similar, which is
   the trap this whole document exists to avoid.
4. Link to it from the service page it belongs under.
5. Post it to the Google Business Profile and send it to the customers who
   asked that question.

## Pace

Publish the first six with the site so it has something to say on day one,
then one a week or a fortnight down the list. Twelve real pages over six months
beats fifty in a weekend, and the fifty carry the risk. A site that jumps from
six pages to thirty overnight, all written the same day, is the exact pattern
the policy above describes. Put it in the calendar on day one,
because this is the part that quietly stops after month two and it is the part
that compounds.

## Never

- **Never publish the same page with the town swapped.** That is a doorway
  page, `seo_check.py` fails it, and it counts against the whole site.
- **Never put these on somebody else's site to get a link.** Google calls that
  site reputation abuse. The link is worth less than the risk.
- **Never write about the trade in general.** "The history of electrical
  safety" helps nobody and ranks for nothing.
- **Never publish a page the owner has not read.** Their name is on it, and
  they will be asked about it on the phone.
