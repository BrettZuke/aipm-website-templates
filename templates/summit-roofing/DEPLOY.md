# Summit Roofing Co.

Unlike the rest of the library, this one is a compiled React app (Vite + React Router),
not a plain HTML page on the shared core. That changes two things.

**It must be deployed at the root of its own domain or Vercel project.** The router
resolves routes from `/`, so serving it from a subfolder renders a blank page. This
folder is a byte-faithful copy of what is live, kept here so it can be lifted and
deployed as-is. The gallery card links to the live deployment rather than to this folder.

**Deploy it like this:**

```
vercel deploy --prod --cwd templates/summit-roofing
```

`vercel.json` is not included here; add one with an SPA rewrite so deep links
(`/services`, `/gallery`, `/contact`) survive a hard refresh:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**The chat widget needs a key.** `api/chat.mjs` becomes a serverless function when this
folder is the project root. Set exactly one of `GROQ_API_KEY` (free, no card),
`GEMINI_API_KEY` or `OPENAI_API_KEY` on the project. Business facts come from
`api/_business.json`, so the bot answers with this client's services, area and hours.

Live: https://summit-roofing-site.vercel.app
