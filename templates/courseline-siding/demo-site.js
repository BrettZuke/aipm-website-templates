/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Courseline Siding: Vinyl, Fiber Cement and Engineered Wood Siding in Minneapolis",
    "metaDescription": "Siding contractor for Minneapolis, St. Paul and the Twin Cities. Vinyl, engineered wood and fiber cement, full re-sides and storm repairs, with a free estimate and real sample boards."
  },
  "business": {
    "name": "Courseline Siding",
    "shortName": "Courseline",
    "town": "Minneapolis",
    "country": "US",
    "phone": "(612) 555-0156",
    "description": "Courseline Siding, siding contractors in Minneapolis and St. Paul fitting vinyl, engineered wood and fiber cement siding, with storm damage repairs.",
    "services": [
      "Full re-side",
      "Storm damage repair",
      "Siding repair",
      "Soffit and fascia",
      "Not sure yet"
    ],
    "areasServed": [
      "Minneapolis",
      "St. Paul",
      "Edina",
      "Bloomington",
      "Plymouth",
      "Maple Grove",
      "Woodbury",
      "Eden Prairie"
    ]
  },
  "form": {
    "heading": "Get a free siding estimate",
    "sub": "Tell us about the house. We measure every wall and bring real sample boards.",
    "services": [
      "Full re-side",
      "Storm damage repair",
      "Siding repair",
      "Soffit and fascia",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How many stories?",
        "options": [
          "One",
          "Two",
          "Split level",
          "Three"
        ]
      },
      {
        "label": "What is on the house now?",
        "options": [
          "Vinyl",
          "Wood",
          "Fiber cement",
          "Not sure"
        ]
      }
    ],
    "button": "Book my estimate",
    "thanks": "Thanks. We will call you to set up your free estimate."
  },
  "chat": {
    "assistantName": "Nick",
    "greeting": "Hi, Courseline here. Is it a full re-side, a repair, or storm damage?",
    "answers": [
      {
        "ask": "How much does new siding cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "estimate",
          "quote"
        ],
        "answer": "Siding is priced by the square, 100 square feet of wall. Vinyl starts at about 520 dollars a square, engineered wood 760 and fiber cement 940. A typical two story home is 22 to 28 squares, and the designer on the page prices yours."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "days",
          "time",
          "when"
        ],
        "answer": "Most homes take four to seven days. We do one wall at a time, so the house is never left open overnight."
      },
      {
        "ask": "Do you fix hail damage?",
        "match": [
          "hail",
          "storm",
          "wind",
          "insurance",
          "damage"
        ],
        "answer": "Yes. We inspect for free and give you photos and a written report for your insurer. We do not negotiate claims, we do the work."
      },
      {
        "ask": "Which material is best?",
        "match": [
          "best",
          "vinyl",
          "fiber",
          "cement",
          "wood",
          "material"
        ],
        "answer": "Vinyl is the most chosen here for low upkeep. Engineered wood looks closest to cedar, and fiber cement is the heaviest and longest lasting."
      },
      {
        "ask": "Can I see colors in person?",
        "match": [
          "color",
          "colour",
          "sample",
          "samples",
          "board"
        ],
        "answer": "Yes. We bring real sample boards to your house and hold them up in daylight, because colors on a screen lie."
      }
    ]
  },
  "reviews": {}
};
