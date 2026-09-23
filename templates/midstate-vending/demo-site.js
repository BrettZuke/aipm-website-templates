/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Midstate Vending: Vending Machines for Ohio Workplaces",
    "metaDescription": "Vending machines placed, stocked and serviced across Columbus and central Ohio at no cost to your site. Restocked before they empty, refunds from the app, and jams cleared within a day."
  },
  "business": {
    "name": "Midstate Vending",
    "shortName": "Midstate",
    "town": "Columbus",
    "country": "US",
    "phone": "(614) 555-0176",
    "description": "Midstate Vending, placed and serviced vending machines across Columbus and central Ohio.",
    "services": [
      "Chilled drinks",
      "Snack and confectionery",
      "Warehouse combo",
      "Micro market",
      "Coffee",
      "Replace an existing supplier"
    ],
    "areasServed": [
      "Columbus",
      "Dublin",
      "Grove City",
      "Westerville",
      "Hilliard",
      "Gahanna",
      "Reynoldsburg"
    ]
  },
  "form": {
    "heading": "Get a machine",
    "sub": "Headcount, shift pattern and where it would stand. We come and look, and say no if the site is too small.",
    "services": [
      "Chilled drinks",
      "Snack and confectionery",
      "Warehouse combo",
      "Micro market",
      "Coffee",
      "Replace an existing supplier"
    ],
    "questions": [
      {
        "label": "How many people on site?",
        "options": [
          "Under 25",
          "25 to 75",
          "75 to 200",
          "Over 200"
        ]
      },
      {
        "label": "What sort of site?",
        "options": [
          "Office",
          "Warehouse or plant",
          "Gym or leisure",
          "Other"
        ]
      }
    ],
    "button": "Get a machine",
    "thanks": "Thanks. We will come and look at the space and tell you straight whether it is worth a machine."
  },
  "chat": {
    "assistantName": "Renee",
    "greeting": "Hi, Midstate Vending. How many people are on your site?",
    "answers": [
      {
        "ask": "What does it cost us?",
        "match": [
          "cost",
          "price",
          "charge",
          "rent",
          "fee",
          "free",
          "how much"
        ],
        "answer": "Nothing. We own the machine, install it, stock it and service it. You provide an outlet and about a metre of wall. No rental, no minimum spend, and no charge if we take it out again."
      },
      {
        "ask": "How small is too small?",
        "match": [
          "small",
          "headcount",
          "staff",
          "people",
          "minimum",
          "enough",
          "size"
        ],
        "answer": "Under about twenty five people a machine sits half empty and you end up with stale stock and a bad experience. We will tell you that on the phone rather than install one and quietly stop visiting."
      },
      {
        "ask": "How often do you restock?",
        "match": [
          "restock",
          "refill",
          "often",
          "visit",
          "empty",
          "schedule",
          "service"
        ],
        "answer": "Twice a week on most sites and daily on warehouses running shifts. The machines report their own stock, so a fast seller triggers an extra visit instead of waiting for the scheduled one."
      },
      {
        "ask": "What if it takes someone money?",
        "match": [
          "refund",
          "money",
          "jam",
          "stuck",
          "broken",
          "fault",
          "card"
        ],
        "answer": "They tap refund in the app and it is back on the card the same day without needing to find you. Card jams are cleared within one working day and the site gets credited for the inconvenience too."
      },
      {
        "ask": "Can we choose the stock?",
        "match": [
          "choose",
          "stock",
          "products",
          "healthy",
          "snack",
          "drinks",
          "planogram"
        ],
        "answer": "Yes, and you should. We start from a standard planogram, drop anything that has not sold in three weeks, and add whatever your staff keep asking for. A zero sugar row and healthier lines are standard now."
      }
    ]
  },
  "reviews": {}
};
