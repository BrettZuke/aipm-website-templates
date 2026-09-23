/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Stoneway Driveways: Driveways and Patios in Sheffield",
    "metaDescription": "Block paving, resin and natural stone driveways and patios across Sheffield, laid on a proper sub base with a fixed written price and a ten year guarantee."
  },
  "business": {
    "name": "Stoneway Driveways",
    "shortName": "Stoneway",
    "town": "Sheffield",
    "country": "GB",
    "phone": "0114 496 0168",
    "description": "Stoneway Driveways, block paving, resin and natural stone driveways and patios across Sheffield.",
    "services": [
      "Block paving driveway",
      "Resin bound driveway",
      "Patio",
      "Steps or edging",
      "Drainage or dropped kerb",
      "Not sure yet"
    ],
    "areasServed": [
      "Sheffield",
      "Crookes",
      "Ecclesall",
      "Dore",
      "Nether Edge",
      "Hillsborough",
      "Rotherham"
    ]
  },
  "form": {
    "heading": "Book a site visit",
    "sub": "What you are after and roughly how big. We bring samples of every surface to your house.",
    "services": [
      "Block paving driveway",
      "Resin bound driveway",
      "Patio",
      "Steps or edging",
      "Drainage or dropped kerb",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Roughly how big?",
        "options": [
          "One car",
          "Two cars",
          "Three cars or more",
          "A patio or path"
        ]
      },
      {
        "label": "When are you hoping to start?",
        "options": [
          "As soon as possible",
          "Within three months",
          "Later this year",
          "Just getting prices"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thanks. We will call to book the site visit and send a fixed written price within three working days of it."
  },
  "chat": {
    "assistantName": "Paul",
    "greeting": "Hi, Stoneway Driveways here. Is it a driveway, a patio, or both?",
    "answers": [
      {
        "ask": "How much is a new driveway?",
        "match": [
          "price",
          "cost",
          "how much",
          "driveway",
          "per square",
          "metre",
          "quote"
        ],
        "answer": "Block paving starts at 95 pounds a square metre, resin bound at 85 and porcelain patios at 120, all including the dig out and sub base. A typical two car drive in Sheffield lands between 6,000 and 11,000 pounds."
      },
      {
        "ask": "Why do driveways sink?",
        "match": [
          "sink",
          "sunk",
          "rut",
          "dip",
          "puddle",
          "uneven",
          "moving",
          "base"
        ],
        "answer": "Almost always a thin sub base. We dig down 200mm, lay and compact the stone in layers, and only then put the surface on, which is why ours stay level."
      },
      {
        "ask": "Do I need planning permission?",
        "match": [
          "planning",
          "permission",
          "council",
          "permeable",
          "front garden",
          "dropped kerb"
        ],
        "answer": "Usually not if the surface is permeable, like resin bound or permeable block, or if the water drains onto your own garden. A dropped kerb needs a council application, and we handle that for you."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "days",
          "weeks",
          "time",
          "start"
        ],
        "answer": "Most driveways take five to seven working days, and you can drive on it the day we leave. A patio is usually three to five days."
      },
      {
        "ask": "Is there a guarantee?",
        "match": [
          "guarantee",
          "warranty",
          "insured",
          "sink again",
          "come back"
        ],
        "answer": "Ten years on everything we lay, sub base included. If anything sinks or moves in that time, we come back and put it right."
      }
    ]
  },
  "reviews": {}
};
