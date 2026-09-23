/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Latchwell Lettings: Letting Agents and Property Management in Leeds",
    "metaDescription": "Fully managed lettings across Leeds. Tenants found and referenced, certificates booked, repairs sorted and a clear statement every month. 13% plus VAT, no setup fee."
  },
  "business": {
    "name": "Latchwell Lettings",
    "shortName": "Latchwell",
    "town": "Leeds",
    "country": "GB",
    "phone": "0113 496 0634",
    "description": "Latchwell Lettings, letting agents and property managers in Leeds offering fully managed lettings, rent collection and let only services for landlords.",
    "services": [
      "Fully managed",
      "Rent collection",
      "Let only",
      "Rental valuation",
      "Not sure yet"
    ],
    "areasServed": [
      "Leeds",
      "Headingley",
      "Chapel Allerton",
      "Roundhay",
      "Horsforth",
      "Meanwood",
      "Kirkstall",
      "Leeds city centre"
    ]
  },
  "form": {
    "heading": "Book a free rental valuation",
    "sub": "Tell us about the property. We visit, value it and explain the options.",
    "services": [
      "Fully managed",
      "Rent collection",
      "Let only",
      "Rental valuation",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How many properties?",
        "options": [
          "One",
          "2 to 4",
          "5 or more"
        ]
      },
      {
        "label": "Is it let right now?",
        "options": [
          "Empty now",
          "Tenant leaving soon",
          "Tenant in place",
          "Not bought yet"
        ]
      }
    ],
    "button": "Book my valuation",
    "thanks": "Thanks. We will ring you to book your valuation."
  },
  "chat": {
    "assistantName": "Nadia",
    "greeting": "Hi, Latchwell here. Are you a landlord looking for a manager, or wanting a valuation first?",
    "answers": [
      {
        "ask": "What are your fees?",
        "match": [
          "fee",
          "fees",
          "cost",
          "price",
          "how much",
          "percent"
        ],
        "answer": "Fully managed is 13 percent of the rent plus VAT, rent collection is 9 percent plus VAT, and let only is a one off fee of 75 percent of a month's rent plus VAT, from 500 pounds. The calculator on the page shows what you keep."
      },
      {
        "ask": "How fast can you let it?",
        "match": [
          "fast",
          "quick",
          "how long",
          "tenant",
          "let it"
        ],
        "answer": "Most homes are let within three weeks, and every tenant is fully referenced."
      },
      {
        "ask": "Do you handle certificates?",
        "match": [
          "certificate",
          "gas",
          "eicr",
          "epc",
          "safety",
          "compliance"
        ],
        "answer": "Yes. On fully managed we book the gas safety, electrical and energy certificates, and send you the paperwork."
      },
      {
        "ask": "What if rent is late?",
        "match": [
          "late",
          "arrears",
          "not paying",
          "stop paying",
          "guarantee"
        ],
        "answer": "We chase from the first day it is late, and can add rent guarantee insurance for the rent and legal costs."
      },
      {
        "ask": "Can you take over my tenancy?",
        "match": [
          "take over",
          "switch",
          "change agent",
          "current"
        ],
        "answer": "Yes. We check the paperwork, fix anything missing, and take over from the next rent date."
      }
    ]
  },
  "reviews": {}
};
