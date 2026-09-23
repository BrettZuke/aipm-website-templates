/*
 * WHAT THE CHAT KNOWS
 *
 * The AI chat on this website answers only from the text between the two
 * backticks below. Replace every [bracketed] part with the real details,
 * delete any line that does not apply, then redeploy the site.
 *
 * Put in: the business name, the town and every area it covers, the phone
 * number and email, opening hours, each service and what it includes, any
 * prices the owner is happy to publish, how to get a quote or book, the
 * questions customers ask most with the owner's answers, and anything the
 * chat must never say or promise.
 *
 * Keep it to about one page. All of it is sent with every chat message, and
 * the free Groq plan limits how much text it takes each minute.
 *
 * Do not type a backtick (`) or the pair ${ anywhere in the text: either one
 * breaks this file. Quotes, apostrophes and pound or dollar signs are fine.
 */

export const KNOWLEDGE = `
Business name: [Business name]
Town: [Town or city]
Areas covered: [Every town and district the business covers]
Phone: [Phone number]
Email: [Email address]
Opening hours: [For example: Monday to Friday 8am to 6pm, Saturday 9am to 1pm, closed Sunday]

Services:
[Service]: [What it includes, in one or two sentences]
[Service]: [What it includes, in one or two sentences]
[Service]: [What it includes, in one or two sentences]

Prices:
[Only prices the owner is happy to publish. If there are none, write: Every job is priced after a free quote.]

Quotes and bookings:
[How someone gets a quote or books, for example: fill in the quote form on this page or call the number above, and we reply the same working day.]

Common questions:
Q: [A question customers often ask]
A: [The answer, in the owner's own words]
Q: [Another question]
A: [Its answer]

Never say:
[Anything the chat must not promise or mention, for example: never promise a same day visit, never price a job without seeing it.]
`;
