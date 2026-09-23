# Client onboarding form

The one form you send a local business the day they pay you. Their answers are
everything you need to build the lot: the website, their Google listing, the
chatbot, the follow-up and the proposal. About twelve minutes for them, and it
saves you a fortnight of chasing details one text at a time.

## Make your own copy (two minutes, once)

The form has to be yours, because the answers have to come to you.

1. Open [script.google.com](https://script.google.com) and press **New project**.
2. Delete whatever is in the editor and paste in the whole of
   `build-onboarding-form.gs` from this folder.
3. Press **Run**. Google asks for permission the first time: it is your own
   account making your own form, so allow it.
4. The link to your new form is printed in the log at the bottom. The form is in
   your Google Drive and the answers only ever come to you.

Google Forms is free and does not cap how many people fill it in. If you would
rather use Typeform, note that their free plan now allows ten responses a month
across your whole account, so you would be paying by your second client.

`questions.md` is the same questions as a page you can read, change, or hand to
Claude if you want to build the form somewhere else.

## Sending it

Send it the day they pay, while they are still excited, with a line like:

```
Thanks [name], welcome aboard.

One form and then I get to work: [your form link]

It takes about twelve minutes and it is the only thing I will ask you for.
Everything on it goes into your new site, your Google listing and the chatbot,
so the more real detail you give me the better the whole thing comes out.

There are no passwords on it. Anything I need access to, you will invite me
and I will show you exactly where to click.
```

Chase it once after two days. Businesses that fill it in properly get a better
site, and it is worth telling them that.

## What to do with the answers

1. Download the responses (Google Forms, Responses, the sheet icon).
2. Give them to Claude and ask it to write `client.json`, the shape in
   `.claude/skills/local-seo-aeo/references/client-json.md`.
3. From there:
   - **The website**: pick the closest template, build it, then
     `seo_bake.py` and `seo_check.py` (see the main README).
   - **The Google listing, reviews and directories**: `seo_offsite.py` writes
     that pack from the same file.
   - **Their chatbot**: the answers to "the questions customers ask again and
     again" go straight into the CRM, Website, AI chatbot, in the box marked
     What your chatbot knows.

## Two things the form does on purpose

**It never asks for a password.** Access is granted by invite: they add your
email as a Manager on their Google listing, and you show them where. Anybody
who asks a client to type a password into a form is teaching them a habit that
will cost them one day.

**It gives them permission not to know.** Four questions say outright that "I
do not know" is a better answer than a guess. A business that invents an answer
about its own customers gets a website built on that invention.
