/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Latchkey Locksmiths: 24 Hour Locksmith in Birmingham",
    "metaDescription": "24 hour locksmith across Birmingham. Emergency lockouts, anti snap lock changes and uPVC door repairs, with no call out charge and the price given on the phone."
  },
  "business": {
    "name": "Latchkey Locksmiths",
    "shortName": "Latchkey",
    "town": "Birmingham",
    "country": "GB",
    "phone": "0121 496 0151",
    "description": "Latchkey Locksmiths, a 24 hour locksmith across Birmingham and the Black Country.",
    "services": [
      "Locked out",
      "Lock change or upgrade",
      "uPVC door or window repair",
      "Burglary repair",
      "Smart lock",
      "Keys cut"
    ],
    "areasServed": [
      "Birmingham",
      "Harborne",
      "Edgbaston",
      "Moseley",
      "Solihull",
      "Sutton Coldfield",
      "West Bromwich"
    ]
  },
  "form": {
    "heading": "Get a locksmith",
    "sub": "What has happened and where. For a lockout right now, calling is quickest.",
    "services": [
      "Locked out",
      "Lock change or upgrade",
      "uPVC door or window repair",
      "Burglary repair",
      "Smart lock",
      "Keys cut"
    ],
    "questions": [
      {
        "label": "How urgent is it?",
        "options": [
          "Locked out now",
          "Today",
          "This week",
          "Just a price"
        ]
      },
      {
        "label": "What kind of door?",
        "options": [
          "uPVC",
          "Wooden",
          "Composite",
          "Not sure"
        ]
      }
    ],
    "button": "Send it",
    "thanks": "Thanks. We will call you straight back with a price and an arrival time. If you are locked out right now, calling is quickest."
  },
  "chat": {
    "assistantName": "Ryan",
    "greeting": "Hi, Latchkey here. Are you locked out right now, or is it something that can wait?",
    "answers": [
      {
        "ask": "How much is a lockout?",
        "match": [
          "price",
          "cost",
          "how much",
          "lockout",
          "locked out",
          "charge",
          "fee"
        ],
        "answer": "79 pounds for most lockouts, day or night, with no call out charge. If the lock needs replacing we price that on the phone before we set off."
      },
      {
        "ask": "How fast can you get here?",
        "match": [
          "how fast",
          "how long",
          "now",
          "tonight",
          "urgent",
          "emergency",
          "arrive"
        ],
        "answer": "About thirty minutes across most of Birmingham, any hour. We give you an honest arrival time on the phone and text you when we set off."
      },
      {
        "ask": "Will you damage the door?",
        "match": [
          "damage",
          "drill",
          "break",
          "door",
          "mark",
          "scratch"
        ],
        "answer": "Almost never. Around nine in ten doors open by picking or bypassing without a mark. If drilling is the only way in, we tell you why first and fit a new cylinder the same visit."
      },
      {
        "ask": "Can you fix my uPVC door?",
        "match": [
          "upvc",
          "handle",
          "won't lock",
          "wont lock",
          "mechanism",
          "gearbox",
          "multipoint"
        ],
        "answer": "Usually on the same visit. We carry the common gearboxes, multipoint mechanisms and handles in the van, and price the repair on the phone first."
      },
      {
        "ask": "Are your locks insurance approved?",
        "match": [
          "insurance",
          "approved",
          "british standard",
          "ts007",
          "anti snap",
          "snap"
        ],
        "answer": "Yes. Every cylinder we fit is British Standard and TS007 rated, which is what most home insurers require for a claim to be valid after a break in."
      },
      {
        "ask": "How much is a lock change?",
        "match": [
          "lock change",
          "new lock",
          "change the lock",
          "change locks",
          "cylinder",
          "anti snap",
          "snap"
        ],
        "answer": "A lock change is 85 pounds fitted with three keys, and an anti snap cylinder is 65 pounds per door, British Standard and TS007 3 star. Keyed alike on request, so one key opens every door."
      }
    ]
  },
  "reviews": {}
};
