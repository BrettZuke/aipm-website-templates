/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Fernhill Lawn Care: Lawn and Garden Maintenance in Reading",
    "metaDescription": "Lawn and garden maintenance across Reading and west Berkshire. Twelve visits a season on the same week each time, clippings taken away, and a price that holds from March to October."
  },
  "business": {
    "name": "Fernhill Lawn Care",
    "shortName": "Fernhill",
    "town": "Reading",
    "country": "GB",
    "phone": "0118 496 0159",
    "description": "Fernhill Lawn Care, season lawn and garden maintenance plans across Reading and west Berkshire.",
    "services": [
      "Fortnightly cut",
      "Weekly cut",
      "Lawn treatment year",
      "Hedges and borders",
      "Autumn clear",
      "One off rescue"
    ],
    "areasServed": [
      "Reading",
      "Caversham",
      "Tilehurst",
      "Woodley",
      "Earley",
      "Wokingham",
      "Pangbourne"
    ]
  },
  "form": {
    "heading": "Get a price",
    "sub": "Postcode and roughly how big the lawn is. The number holds for the whole season.",
    "services": [
      "Fortnightly cut",
      "Weekly cut",
      "Lawn treatment year",
      "Hedges and borders",
      "Autumn clear",
      "One off rescue"
    ],
    "questions": [
      {
        "label": "How big is the lawn?",
        "options": [
          "Small back garden",
          "Front and back",
          "Large garden",
          "Over half an acre"
        ]
      },
      {
        "label": "What state is it in?",
        "options": [
          "Kept, just need it taken on",
          "A bit behind",
          "Overgrown",
          "Mostly moss"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will come back with a price and the week your road runs."
  },
  "chat": {
    "assistantName": "Ellie",
    "greeting": "Hi, Fernhill Lawn Care. Whereabouts in Reading are you?",
    "answers": [
      {
        "ask": "How much is a cut?",
        "match": [
          "price",
          "cost",
          "how much",
          "cut",
          "quote",
          "charge",
          "fee"
        ],
        "answer": "A typical Reading back garden is 22 pounds a visit fortnightly or 18 weekly, both including the edges and taking the clippings away. Front and back together, or anything over half an acre, we price off the area first."
      },
      {
        "ask": "Do I have to sign up for the season?",
        "match": [
          "season",
          "contract",
          "sign",
          "commit",
          "tied",
          "cancel",
          "one off"
        ],
        "answer": "No. Most people take the season because it works out cheaper per visit and the week never moves, but a one off rescue cut is 160 pounds and there is nothing to cancel afterwards."
      },
      {
        "ask": "Do you take the clippings?",
        "match": [
          "clipping",
          "grass",
          "waste",
          "bag",
          "rubbish",
          "away",
          "tip"
        ],
        "answer": "Always. They go in the van and off site. No bags left by the bin and no pile building up behind the shed."
      },
      {
        "ask": "When do you scarify?",
        "match": [
          "scarify",
          "seed",
          "feed",
          "moss",
          "treatment",
          "thatch",
          "patch"
        ],
        "answer": "September, which is the most useful week of the year for a lawn. Thatch comes out, seed goes into the gaps, and it goes into winter thick rather than bare. Feed is April, once the grass is growing hard enough to use it."
      },
      {
        "ask": "What about when it is dry?",
        "match": [
          "dry",
          "drought",
          "summer",
          "brown",
          "hot",
          "water",
          "july"
        ],
        "answer": "We raise the blade and cut less often. A lawn going brown in July is doing exactly what it should, and scalping it in a dry spell is what actually kills it."
      }
    ]
  },
  "reviews": {}
};
