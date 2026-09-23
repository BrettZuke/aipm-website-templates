# Turning on the AI chat

The chat bubble on this website answers from a short list of scripted replies. It can answer with AI instead, using the business's own details, in one of two ways: through the business's AIPM CRM, or on a free Groq key.

Until one of them is set up, nothing changes: the chat keeps using its scripted answers.

## If your client has the AIPM CRM (recommended)

The CRM answers the chat for the website, and every conversation and every lead the chat catches shows up in the CRM.

1. In the CRM, open Website, then AI chatbot, then the Connect your website card. Copy the CRM address and the chat key from that card. Treat the chat key like a password.
2. On vercel.com, open the website's project and go to Settings, then Environment Variables. Add two variables, with Production selected for each: `CRM_URL` with the CRM address as the value (it starts with `https://`), and `CRM_CHAT_KEY` with the chat key as the value. Press Save.
3. Redeploy: open Deployments, press the three dots next to the latest deployment, choose Redeploy, then press Redeploy again. The two values only start working after a redeploy.
4. Open `yoursite.com/api/chat` in a browser. It shows `{"configured":true}` once the website is connected. If it shows `{"configured":false}`, check that both values were copied exactly and that the chatbot is switched on in the CRM, then redeploy and look again.

From then on, what the chat knows is edited inside the CRM, and `api/_knowledge.js` is not used, so you can skip the Groq steps below. If a site has both the CRM values and a Groq key, the CRM answers.

## Without the CRM: a free Groq key

After these three steps the chat answers with AI from the business's details in `api/_knowledge.js`, on a free Groq key.

### Step 1: Get a free Groq key

1. Go to console.groq.com and sign in, or create an account.
2. Open console.groq.com/keys and create a new API key.
3. Copy the key. It starts with `gsk_`. Treat it like a password.

### Step 2: Add the key in Vercel

1. On vercel.com, open the website's project.
2. Go to Settings, then Environment Variables.
3. Type `GROQ_API_KEY` as the name and paste the key as the value. Make sure Production is selected, then press Save.
4. Redeploy: open Deployments, press the three dots next to the latest deployment, choose Redeploy, then press Redeploy again. The key only starts working after a redeploy.

### Step 3: Tell it about the business

Open `api/_knowledge.js` and replace every [bracketed] part with the real details: name, town and areas covered, phone, email, hours, services, any prices the owner is happy to publish, common questions, and anything the chat must never say. Keep it to about one page. Save, then put the site live again from its folder the way you first deployed it, for example with `vercel deploy --prod`. The Redeploy button in step 2 reuses the files Vercel already has, so it does not pick up a changed file.

The chat answers only from this file. When a visitor asks something that is not in it, the chat says it is not sure and points them to the quote form or the phone number.

## Good to know

- **Never paste a key into `demo-site.js`, an HTML page or any other file in the site.** Those files are public: anyone can open them in a browser and copy the key. The CRM chat key and the Groq key belong only in Vercel's Environment Variables.
- **Nothing set, no change.** Without the CRM values or `GROQ_API_KEY` the chat uses its scripted answers, exactly as before. If the CRM or Groq is ever slow or unreachable, that one message gets a scripted answer, so the chat never looks broken.
- **To check it is switched on,** open `yoursite.com/api/chat` in a browser. It shows `{"configured":true}` when the chat is connected and `{"configured":false}` when it is not.
- **Optional:** to use a different Groq model, add a second variable named `GROQ_MODEL` with a model name from console.groq.com/docs/models, then redeploy. Without it the chat uses `openai/gpt-oss-120b`.
- **Use a free Groq account, not a paid one.** The chat endpoint is public, like any contact form, so someone could send it a lot of messages. On the free plan the worst that happens is the chat runs out for the minute and falls back to its scripted answers. On a paid plan those messages would cost money.
- **The "Demo assistant" note in the chat disappears by itself** once the chat is connected, because the visitor is then talking to the real thing.
- **Free plan limits:** Groq's free plan caps how many messages and how much text it takes each minute and each day. A message that goes over gets a scripted answer instead.

## Google Analytics (optional)

The website can also report its visitors to the owner's Google Analytics. It stays off until you add the measurement ID, and nothing goes to Google before then.

**If the business is in the UK or the EU, the site needs a cookie notice before Google Analytics runs.** The site does not come with one, so put one in place first, or leave the ID out.

1. In Google Analytics, open Admin, then Data streams, and open the website's web stream. If there is none yet, add a web stream for the site's address. Copy the Measurement ID. It starts with `G-`.
2. Open `demo-site.js` and add this line straight after `window.SITE = {`, with your own ID in place of the example: `"ga4": "G-1A2B3C4D5E",` The ID is not a secret, so unlike the keys above it is fine in this file.
3. Put the site live again from its folder the way you first deployed it, for example with `vercel deploy --prod`.

Google Analytics then counts visits and page views, plus three things that matter to a local business:

- `click_to_call`: a visitor tapped a phone number anywhere on the site.
- `generate_lead`: a visitor sent the quote form or the contact form and saw the thank you message.
- `chat_start`: a visitor sent their first message in the chat.
