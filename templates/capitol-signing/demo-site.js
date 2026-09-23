/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Capitol Signing: Mobile Notary and Loan Signing in Sacramento",
    "metaDescription": "Mobile notary and NNA certified loan signing agent covering Sacramento County. Printed, signed in order and scanned back the same day."
  },
  "business": {
    "name": "Capitol Signing",
    "shortName": "Capitol Signing",
    "town": "Sacramento",
    "country": "US",
    "phone": "(916) 555-0148",
    "description": "Capitol Signing, a mobile notary and NNA certified loan signing agent covering Sacramento County.",
    "services": [
      "Loan signing package",
      "General notary work",
      "Seller package",
      "Reverse mortgage",
      "Hospital or care home visit",
      "Apostille handling"
    ],
    "areasServed": [
      "Sacramento",
      "Roseville",
      "Rocklin",
      "Elk Grove",
      "Folsom",
      "West Sacramento",
      "Davis"
    ]
  },
  "form": {
    "heading": "Book a signing",
    "sub": "Where the signer is, what the package is, and when you need it back. We answer inside the hour.",
    "services": [
      "Loan signing package",
      "General notary work",
      "Seller package",
      "Reverse mortgage",
      "Hospital or care home visit",
      "Apostille handling"
    ],
    "questions": [
      {
        "label": "When do you need it?",
        "options": [
          "Today",
          "Tomorrow",
          "This week",
          "Flexible"
        ]
      },
      {
        "label": "Where is the signer?",
        "options": [
          "Their home",
          "An office",
          "Hospital or care home",
          "Somewhere else"
        ]
      }
    ],
    "button": "Check availability",
    "thanks": "Thanks. We will confirm the time and the flat fee inside the hour, and say straight away if we cannot make it."
  },
  "chat": {
    "assistantName": "Dana",
    "greeting": "Hi, Capitol Signing here. Is this a loan package or a single document?",
    "answers": [
      {
        "ask": "What does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "fee",
          "charge",
          "quote",
          "rate"
        ],
        "answer": "A full loan signing is 150 dollars flat, printed both sets, scanned back and shipped. Evenings, weekends and hospital visits are 200. A single document at your table is the state fee of 15 dollars per notarial act plus travel."
      },
      {
        "ask": "Can you come today?",
        "match": [
          "today",
          "tonight",
          "urgent",
          "asap",
          "now",
          "same day",
          "rush"
        ],
        "answer": "Usually yes. Most same day requests inside Sacramento County get booked within two hours, and we work evenings and weekends. Send the address and the package and we will tell you inside the hour, or tell you no so you can call someone else."
      },
      {
        "ask": "What ID does my signer need?",
        "match": [
          "id",
          "identification",
          "licence",
          "license",
          "passport",
          "expired",
          "witness",
          "proof"
        ],
        "answer": "A current government photo ID with a signature and physical description: California driver's licence, state ID, US passport or military ID. Expired is acceptable in California only if it was issued in the last five years. No ID at all means two credible witnesses who know the signer."
      },
      {
        "ask": "Can you tell me what the document means?",
        "match": [
          "advice",
          "explain",
          "mean",
          "legal",
          "lawyer",
          "attorney",
          "fill",
          "help me"
        ],
        "answer": "No, and that is the law rather than us being awkward. Explaining a document or filling it in for you is the unlicensed practice of law in California. We will point at the blanks that need completing before the seal goes on, and wait while the signer fills them."
      },
      {
        "ask": "Do you go to hospitals?",
        "match": [
          "hospital",
          "care home",
          "rehab",
          "bedside",
          "nursing",
          "elderly",
          "sick"
        ],
        "answer": "Yes, across the county, and we do a lot of it. The signer must be awake, aware of what they are signing and able to say so themselves. If they are not, we stop and tell you honestly rather than take the fee and leave you with a document that will not hold."
      }
    ]
  },
  "reviews": {}
};
