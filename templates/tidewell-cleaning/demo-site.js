/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Tidewell Cleaning: Regular Home Cleaning in Cardiff",
    "metaDescription": "Regular home cleaning across Cardiff and the Vale. The same two cleaners every visit, employed and DBS checked, products included, and a checklist you can change any week."
  },
  "business": {
    "name": "Tidewell Cleaning",
    "shortName": "Tidewell",
    "town": "Cardiff",
    "country": "GB",
    "phone": "029 2018 0144",
    "description": "Tidewell Cleaning, regular home cleaning across Cardiff and the Vale.",
    "services": [
      "Regular home clean",
      "One off deep clean",
      "End of tenancy",
      "After the builders",
      "Oven cleaning",
      "Ironing"
    ],
    "areasServed": [
      "Cardiff",
      "Penarth",
      "Llandaff",
      "Whitchurch",
      "Cyncoed",
      "Barry",
      "Cowbridge"
    ]
  },
  "form": {
    "heading": "Get a price",
    "sub": "Bedrooms, bathrooms and roughly how it is kept. Enough to price the hours honestly.",
    "services": [
      "Regular home clean",
      "One off deep clean",
      "End of tenancy",
      "After the builders",
      "Oven cleaning",
      "Ironing"
    ],
    "questions": [
      {
        "label": "How big is the house?",
        "options": [
          "One or two bed",
          "Three bed",
          "Four bed",
          "Five or more"
        ]
      },
      {
        "label": "How often?",
        "options": [
          "Weekly",
          "Fortnightly",
          "One off",
          "Not sure yet"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will come back with the hours, the price and which pair would be yours."
  },
  "chat": {
    "assistantName": "Bethan",
    "greeting": "Hi, Tidewell Cleaning. Whereabouts in Cardiff are you?",
    "answers": [
      {
        "ask": "What does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "hour",
          "rate",
          "charge",
          "fee"
        ],
        "answer": "Twenty two pounds an hour with a two hour minimum, products and machine included. A typical three bedroom house is three hours fortnightly, so sixty six pounds a visit. No booking fee and no card fee."
      },
      {
        "ask": "Do I need to be home?",
        "match": [
          "home",
          "in",
          "key",
          "access",
          "door",
          "out",
          "work"
        ],
        "answer": "Only for the first visit so the pair can walk the house with you and agree the checklist. After that it is a key safe or a doorstep handover and most of our customers are at work when we come."
      },
      {
        "ask": "Do you bring products?",
        "match": [
          "product",
          "supplies",
          "bring",
          "equipment",
          "hoover",
          "own",
          "chemical"
        ],
        "answer": "Everything, and fragrance free by default because a third of people turn out to prefer that. If you would rather we used your own, leave them out and we will use those instead."
      },
      {
        "ask": "Why is the first clean more?",
        "match": [
          "first",
          "initial",
          "deep",
          "more",
          "expensive",
          "longer",
          "why"
        ],
        "answer": "Because it takes longer. The first one gets the bits a regular clean then maintains: the oven, window tracks, tops of doors and behind the appliances. After that the same house takes about an hour less every time."
      },
      {
        "ask": "Will it be the same cleaners?",
        "match": [
          "same",
          "who",
          "cleaner",
          "team",
          "different",
          "change",
          "pair"
        ],
        "answer": "The same pair every visit, and you hear from us first if that ever has to change. They are employed by us rather than self employed, which is the whole reason it is possible to promise that."
      }
    ]
  },
  "reviews": {}
};
