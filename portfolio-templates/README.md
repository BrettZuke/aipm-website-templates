# AIPM Portfolio Templates

Your portfolio site is the link at the bottom of your outreach emails ("If you want to check I'm a real person, my site is yourname.com"). When a business owner clicks it, they should see three things straight away: a real person, sites you've built, and a way to book a call with you.

There are three styles in this folder. Every one has:

- **Book a call** buttons throughout the page
- **An about me section** with your photo in a frame
- **Your past work**, shown as live previews of real websites
- **Your phone number and email**

| Folder | Style |
|---|---|
| `studio/` | Clean and white. Your work sits next to the headline, then six live previews, services and an FAQ. |
| `personal/` | Warm and friendly. A big framed photo of you with your sites scattered round it. |
| `editorial/` | High end. A full-screen photo of your town with giant type, then your sites lettered A to E. |

Open `index.html` in this folder to see all three side by side.

## 1. Pick one and make it yours

Open the style's folder in Claude Code (for example the `studio` folder) and paste this, with your details filled in:

```
Make this portfolio site mine. Keep the design exactly as it is and only change the content.

My name: 
My business name (or just my name): 
Where I'm based and the area I cover: 
My booking link (replace every cal.com/your-name): 
My phone number: 
My email: 
My photo: [drag your photo into the chat]
My domain (where this site will live): 

My sites (name, type of business, town, live link):
1. 
2. 
3. 

Use my sites everywhere the demo sites appear: the work section, plus the
hero screenshots (Studio) or the small snapshots round my photo and in the
closing band (Personal). No demo site pictures or links should be left.
Rewrite the about section in a friendly, plain way using this about me: [two or three lines about you]
Change the page title, the description and the favicon initials to match.
Set og:image to the full address of my photo on my domain, so my photo shows when the link is shared.
```

Things to know while you do it:

- **Your photo.** Use a real photo of you, smiling, looking at the camera. Never an AI-generated one. It replaces `assets/me.webp`. Studio also uses a small round copy (`assets/me-avatar.webp`) and Personal a square one for the About section (`assets/me-pin.webp`).
- **Your booking link.** Every "Book a call" button uses the same placeholder, `cal.com/your-name`. Until you change it, clicking a button shows a note telling you to. After changing it, click one to check it opens your booking page.
- **The demo people are made up.** Elliot, Alfie and Tayo, their phone numbers and emails are placeholders. Make sure none of them are left on your site.

## 2. Your past work

The work section shows **live** previews: the real site, shrunk down, inside a browser window. A visitor can tap any of them to open the site.

- **Use sites you've built.** Each preview needs only the site's link. Sites built from the AIPM website templates work straight away.
- **Put them on your own Vercel.** If you're showing sites from the template gallery, deploy your own copy of each one first and use your copy's link. That way the site is yours and it's hosted on your account.
- **If a preview stays blank**, that website blocks being shown inside another page (some website builders do). Show a screenshot for that one instead: save it in `assets` and ask Claude to "add data-poster with my screenshot to that preview" (in Editorial it goes on that site's letter button). The link still opens the live site.
- **The pictures of sites outside the work section are screenshots, not live.** Studio has three fanned out next to the headline (`assets/work-1.webp` to `work-3.webp`, with an address label on each). Personal has eight small snapshots round your photo and two in the closing band (`assets/snap-*.webp`), and each one links to a site. Swap all of them for screenshots of your own sites and point the links at those sites. A screenshot of the top of each site, full width, works best.

## 3. Put it live

1. Create a free account at vercel.com.
2. In Claude Code, in your style's folder, say: "Deploy this folder to Vercel and give me the live link."
3. In Vercel, open the project, go to **Settings, Domains**, and add your domain. Vercel shows you the DNS records to add where you bought the domain.

**Use your main domain for this site.** The link in your emails (yourname.com) should open your portfolio, not your CRM. If your CRM is on your main domain right now, move it to a subdomain such as `crm.yourname.com` and put this site on the main one.

## Before you send anyone the link

- Your name, photo, phone and email are on the page, and none of the demo details are left.
- Every "Book a call" button opens your booking page.
- Every preview, screenshot and snapshot shows a site you built, and tapping it opens that site. No demo site pictures or links are left.
- Paste your link into a WhatsApp chat with yourself and check your photo shows in the preview.
- You've looked at it on your phone, top to bottom.

Photo credits for the demo photos are in each style's `assets/CREDITS.md`. You'll be replacing those photos anyway.
