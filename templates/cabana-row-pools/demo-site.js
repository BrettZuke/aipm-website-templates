/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Cabana Row Pools: Custom Pools, Spas and Screen Enclosures in Sarasota",
    "metaDescription": "Custom concrete pools, spas and screen enclosures across Sarasota and Manatee counties. Designed around your yard, permitted by us, built by our own crews in 12 weeks."
  },
  "business": {
    "name": "Cabana Row Pools",
    "shortName": "Cabana Row",
    "town": "Sarasota",
    "country": "US",
    "phone": "(941) 555-0147",
    "description": "Cabana Row Pools, custom concrete pools, spas and screen enclosures across Sarasota and Manatee counties.",
    "services": [
      "New pool",
      "Pool and spa",
      "Screen enclosure",
      "Hot tub",
      "Pool remodel",
      "Not sure yet"
    ],
    "areasServed": [
      "Sarasota",
      "Lakewood Ranch",
      "Siesta Key",
      "Venice",
      "Osprey",
      "Longboat Key",
      "Bradenton",
      "North Port"
    ]
  },
  "form": {
    "heading": "Get a free pool design",
    "sub": "Tell us about your yard. A designer measures up and sends a drawing with a fixed price within a week.",
    "services": [
      "New pool",
      "Pool and spa",
      "Screen enclosure",
      "Hot tub",
      "Pool remodel",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "When would you like to swim?",
        "options": [
          "This summer",
          "This year",
          "Next year",
          "Just exploring"
        ]
      },
      {
        "label": "What is the yard like?",
        "options": [
          "Small lot",
          "Average yard",
          "Large yard",
          "Waterfront"
        ]
      }
    ],
    "button": "Get my design",
    "thanks": "Thanks. A designer will call to set up your free design visit."
  },
  "chat": {
    "assistantName": "Marisol",
    "greeting": "Hi, Cabana Row here. Are you dreaming about a new pool, or a spa or cage for the one you have?",
    "answers": [
      {
        "ask": "How much is a new pool?",
        "match": [
          "cost",
          "price",
          "how much",
          "pool"
        ],
        "answer": "Most of our pools with a paver deck land between 65,000 and 120,000 dollars. A freeform 16 x 32 starts at 79,000, and the designer on the page prices your options."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "weeks",
          "time",
          "when",
          "build"
        ],
        "answer": "Twelve weeks from dig to swim for most pools, including the county permit and the screen enclosure."
      },
      {
        "ask": "Do I need a screen enclosure?",
        "match": [
          "screen",
          "cage",
          "enclosure",
          "barrier"
        ],
        "answer": "Florida requires a pool barrier, and a screen enclosure with self latching doors covers it. Ours start at 21,000 dollars."
      },
      {
        "ask": "Can you add a spa?",
        "match": [
          "spa",
          "hot tub",
          "jacuzzi"
        ],
        "answer": "Yes. A spillover spa built into the pool is 14,500 dollars, and hot tubs on the lanai start at 9,800."
      },
      {
        "ask": "Can the pool be heated?",
        "match": [
          "heat",
          "warm",
          "winter",
          "cold"
        ],
        "answer": "A heat pump keeps most pools around 84 degrees from November to March, for about 5,800 dollars."
      }
    ]
  },
  "reviews": {}
};
