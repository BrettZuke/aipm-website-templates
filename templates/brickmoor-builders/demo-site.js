/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Brickmoor Builders: Extensions and Loft Conversions in Reading",
    "metaDescription": "Rear extensions, side returns, loft and garage conversions across Reading, built by our own team with drawings, a fixed itemised price and a week by week programme."
  },
  "business": {
    "name": "Brickmoor Builders",
    "shortName": "Brickmoor",
    "town": "Reading",
    "country": "GB",
    "phone": "0118 496 0173",
    "description": "Brickmoor Builders, extensions, loft conversions and garage conversions across Reading.",
    "services": [
      "Rear or side extension",
      "Loft conversion",
      "Garage conversion",
      "Wraparound extension",
      "Knock through",
      "Not sure yet"
    ],
    "areasServed": [
      "Reading",
      "Caversham",
      "Earley",
      "Woodley",
      "Tilehurst",
      "Emmer Green",
      "Wokingham"
    ]
  },
  "form": {
    "heading": "Book a free site visit",
    "sub": "What you want to build and roughly when. We come round and measure up for free.",
    "services": [
      "Rear or side extension",
      "Loft conversion",
      "Garage conversion",
      "Wraparound extension",
      "Knock through",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What kind of house?",
        "options": [
          "Terrace",
          "Semi detached",
          "Detached",
          "Bungalow"
        ]
      },
      {
        "label": "When would you like to start?",
        "options": [
          "Within 3 months",
          "3 to 6 months",
          "Next year",
          "Just exploring"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thanks. We will ring to book your site visit, usually within two working days."
  },
  "chat": {
    "assistantName": "Neil",
    "greeting": "Hi, Brickmoor here. Are you thinking about an extension, a loft, or something else?",
    "answers": [
      {
        "ask": "How much is an extension?",
        "match": [
          "cost",
          "price",
          "how much",
          "extension",
          "quote"
        ],
        "answer": "A single storey rear extension of about 6 by 4 metres starts from around 68,000 pounds, including drawings, structural calculations and building control. The fixed price comes after a free site visit."
      },
      {
        "ask": "Do I need planning permission?",
        "match": [
          "planning",
          "permission",
          "permitted",
          "council"
        ],
        "answer": "Often not. Most semis can extend 3 metres at the back, and detached houses 4, under permitted development. We check your house's rights before drawing anything and handle any application."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "weeks",
          "time",
          "how quickly"
        ],
        "answer": "A rear extension is usually 12 to 14 weeks on site, a loft conversion 8 to 10 and a garage conversion 4 to 6. You get a week by week programme before we start."
      },
      {
        "ask": "Do you do the drawings?",
        "match": [
          "drawing",
          "plans",
          "architect",
          "design"
        ],
        "answer": "Yes. Our architectural technician measures up, draws the plans and handles planning and building control. The drawing fee comes off the build if you go ahead."
      },
      {
        "ask": "How do payments work?",
        "match": [
          "pay",
          "payment",
          "deposit",
          "stage"
        ],
        "answer": "Stage payments tied to finished work, such as the foundations, the walls, the roof and completion. Never a big deposit up front."
      }
    ]
  },
  "reviews": {}
};
