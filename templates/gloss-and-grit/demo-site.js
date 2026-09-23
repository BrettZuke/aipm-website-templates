/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Gloss and Grit: Epoxy and Polyaspartic Garage Floors in San Antonio",
    "metaDescription": "Full flake polyaspartic garage floors across San Antonio, installed in one day. Diamond ground, UV stable, and warrantied against peeling and hot tire lift for 15 years."
  },
  "business": {
    "name": "Gloss and Grit",
    "shortName": "Gloss and Grit",
    "town": "San Antonio",
    "country": "US",
    "phone": "(210) 555-0163",
    "description": "Gloss and Grit, full flake polyaspartic and epoxy floors for garages, shops and patios across San Antonio.",
    "services": [
      "Garage floor",
      "Shop floor",
      "Patio",
      "Warehouse floor",
      "Floor repair",
      "Not sure yet"
    ],
    "areasServed": [
      "San Antonio",
      "Stone Oak",
      "Alamo Heights",
      "Helotes",
      "Boerne",
      "Schertz",
      "New Braunfels",
      "Converse"
    ]
  },
  "form": {
    "heading": "Get a free floor quote",
    "sub": "Tell us about the floor. We measure, check for moisture and cracks, and give a fixed price.",
    "services": [
      "Garage floor",
      "Shop floor",
      "Patio",
      "Warehouse floor",
      "Floor repair",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How big is it?",
        "options": [
          "1 car",
          "2 car",
          "3 car",
          "Bigger"
        ]
      },
      {
        "label": "What is on it now?",
        "options": [
          "Bare concrete",
          "Old paint or kit",
          "Tile",
          "Not sure"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. We will call to set up a quick measure and a fixed price."
  },
  "chat": {
    "assistantName": "Nico",
    "greeting": "Hey, Gloss and Grit here. Is it a garage floor, or a shop or patio?",
    "answers": [
      {
        "ask": "How much is a garage floor?",
        "match": [
          "cost",
          "price",
          "how much",
          "garage"
        ],
        "answer": "Full flake is 6.50 dollars a square foot, so about 2,925 for a typical 2 car garage, all in."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "day",
          "time",
          "when",
          "park"
        ],
        "answer": "One day. We arrive at 7:30 and finish by 4:30. Walk on it that evening and park on it after 48 hours."
      },
      {
        "ask": "Will it peel like my old kit?",
        "match": [
          "peel",
          "lift",
          "kit",
          "hot tire",
          "tires"
        ],
        "answer": "No. We diamond grind so it bonds into the concrete, and the 15 year warranty covers peeling and hot tire lift."
      },
      {
        "ask": "Is it slippery?",
        "match": [
          "slip",
          "slippery",
          "wet",
          "grip"
        ],
        "answer": "The flakes add texture, and for patios and ramps we add grit to the top coat."
      },
      {
        "ask": "What colors are there?",
        "match": [
          "color",
          "colour",
          "blend",
          "flake"
        ],
        "answer": "Five house blends, from light Limestone to Midnight Mesa. Try them in the floor lab at the top of the page."
      }
    ]
  },
  "reviews": {}
};
