/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Grain and Tile Flooring: Hardwood, LVP and Tile in Nashville",
    "metaDescription": "Hardwood, luxury vinyl plank and tile supplied and installed across Nashville. Free in home measure, one written price, most rooms finished in a day."
  },
  "business": {
    "name": "Grain and Tile Flooring",
    "shortName": "Grain and Tile",
    "town": "Nashville",
    "country": "US",
    "phone": "(615) 555-0126",
    "description": "Grain and Tile Flooring, hardwood, luxury vinyl plank and tile installed across Nashville.",
    "services": [
      "Hardwood",
      "Luxury vinyl plank",
      "Tile",
      "Refinishing",
      "Stairs",
      "Not sure yet"
    ],
    "areasServed": [
      "Nashville",
      "East Nashville",
      "Brentwood",
      "Franklin",
      "Hendersonville",
      "Mount Juliet",
      "Belle Meade"
    ]
  },
  "form": {
    "heading": "Book a free measure",
    "sub": "Which rooms and which floor you are thinking about. We bring samples to your house.",
    "services": [
      "Hardwood",
      "Luxury vinyl plank",
      "Tile",
      "Refinishing",
      "Stairs",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How much floor?",
        "options": [
          "One room",
          "Two or three rooms",
          "A whole floor",
          "The whole house"
        ]
      },
      {
        "label": "What is down now?",
        "options": [
          "Carpet",
          "Old vinyl or laminate",
          "Tile",
          "Wood"
        ]
      }
    ],
    "button": "Book my measure",
    "thanks": "Thanks. We will call to book your free measure and send a written price within two days of it."
  },
  "chat": {
    "assistantName": "Nora",
    "greeting": "Hi, Grain and Tile here. Which rooms are you thinking about, and what is down now?",
    "answers": [
      {
        "ask": "How much does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "per square",
          "sq ft",
          "quote"
        ],
        "answer": "Supply and fit starts at 5.50 dollars a square foot for luxury vinyl plank, 8.90 for hardwood and 12 for tile, including underlayment, trims and taking the old floor away. The measure is free, and we bring the samples to you."
      },
      {
        "ask": "Hardwood or LVP?",
        "match": [
          "hardwood",
          "lvp",
          "vinyl",
          "which",
          "better",
          "waterproof",
          "pets",
          "dog"
        ],
        "answer": "Hardwood can be refinished for decades and adds value when you sell. LVP is waterproof, tougher on pet claws and cheaper, so it is the better pick for kitchens, basements and busy houses."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "days",
          "time",
          "schedule",
          "one day"
        ],
        "answer": "Most single rooms are done in a day and a whole floor of a house in two to three. Tile takes a little longer because the adhesive and grout need time to cure."
      },
      {
        "ask": "Do you take up the old floor?",
        "match": [
          "old floor",
          "remove",
          "carpet",
          "haul",
          "rip up",
          "furniture"
        ],
        "answer": "Yes. Taking up carpet, vinyl or old tile and hauling it away is included, along with moving the furniture out and putting it back."
      },
      {
        "ask": "Is there a warranty?",
        "match": [
          "warranty",
          "guarantee",
          "squeak",
          "lift",
          "crack"
        ],
        "answer": "Ten years on our installation, plus the manufacturer's warranty on the floor itself, which runs up to a lifetime on some LVP ranges."
      }
    ]
  },
  "reviews": {}
};
