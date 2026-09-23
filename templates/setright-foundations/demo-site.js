/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Setright Foundation Repair: Piers, Wall Anchors and Waterproofing in Kansas City",
    "metaDescription": "Foundation repair and basement waterproofing across the Kansas City metro. Every job starts with a free floor elevation survey. Lifetime transferable warranty."
  },
  "business": {
    "name": "Setright Foundation Repair",
    "shortName": "Setright",
    "town": "Kansas City",
    "country": "US",
    "phone": "(816) 555-0138",
    "description": "Setright Foundation Repair, push piers, wall anchors and basement waterproofing across the Kansas City metro.",
    "services": [
      "Foundation repair",
      "Push piers",
      "Wall anchors",
      "Basement waterproofing",
      "Crack repair",
      "Not sure yet"
    ],
    "areasServed": [
      "Kansas City",
      "Overland Park",
      "Olathe",
      "Lee's Summit",
      "Prairie Village",
      "Liberty",
      "Waldo",
      "Brookside"
    ]
  },
  "form": {
    "heading": "Book a free inspection",
    "sub": "Tell us what you have noticed. An inspector runs a floor survey and leaves a written report.",
    "services": [
      "Foundation repair",
      "Push piers",
      "Wall anchors",
      "Basement waterproofing",
      "Crack repair",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What have you noticed?",
        "options": [
          "Cracks",
          "Sticking doors",
          "Water in the basement",
          "Sloping floors"
        ]
      },
      {
        "label": "What is under the house?",
        "options": [
          "Basement",
          "Crawl space",
          "Slab",
          "Not sure"
        ]
      }
    ],
    "button": "Book my inspection",
    "thanks": "Thanks. We will call to book your free inspection and floor survey."
  },
  "chat": {
    "assistantName": "Carla",
    "greeting": "Hi, Setright here. Is it cracks, doors that stick, or water in the basement?",
    "answers": [
      {
        "ask": "Is my crack serious?",
        "match": [
          "crack",
          "cracks",
          "serious",
          "normal"
        ],
        "answer": "Hairline vertical cracks are usually shrinkage. Horizontal cracks, stair step cracks and anything over a quarter inch deserve an inspection. Try the crack reader on the page."
      },
      {
        "ask": "How much do piers cost?",
        "match": [
          "pier",
          "piers",
          "cost",
          "price",
          "how much"
        ],
        "answer": "Push piers start at 1,950 dollars each, and most homes need six to ten. The inspection and floor survey are free."
      },
      {
        "ask": "Can you fix a wet basement?",
        "match": [
          "water",
          "wet",
          "leak",
          "flood",
          "basement",
          "sump"
        ],
        "answer": "Yes. Interior drain tile starts at 85 dollars a foot, and a sump pump with battery backup is 1,850."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "days",
          "time"
        ],
        "answer": "Most pier jobs take two to three days, and you can stay in the house throughout."
      },
      {
        "ask": "Is there a warranty?",
        "match": [
          "warranty",
          "guarantee",
          "transfer"
        ],
        "answer": "A lifetime warranty on piers and anchors, and it transfers to the next owner."
      }
    ]
  },
  "reviews": {}
};
