/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Clearcoat and Co: Car Body Repair, Wraps and Paint Protection in Birmingham",
    "metaDescription": "Dent and scratch repair, resprays, vinyl wraps and paint protection film from our Digbeth workshop. Insurance work welcome, and you choose the repairer."
  },
  "business": {
    "name": "Clearcoat and Co",
    "shortName": "Clearcoat and Co",
    "town": "Birmingham",
    "country": "GB",
    "phone": "0121 496 0561",
    "description": "Clearcoat and Co, car body repair, resprays, vinyl wraps and paint protection film from a workshop in Digbeth, Birmingham.",
    "services": [
      "Dent or scratch repair",
      "Insurance repair",
      "Vinyl wrap",
      "Paint protection film",
      "Paint correction",
      "Not sure yet"
    ],
    "areasServed": [
      "Birmingham",
      "Digbeth",
      "Edgbaston",
      "Harborne",
      "Moseley",
      "Solihull",
      "Sutton Coldfield",
      "Kings Heath"
    ]
  },
  "form": {
    "heading": "Get a free estimate",
    "sub": "Tell us about the car. A photo of the damage is usually enough for a firm price.",
    "services": [
      "Dent or scratch repair",
      "Insurance repair",
      "Vinyl wrap",
      "Paint protection film",
      "Paint correction",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Is it an insurance claim?",
        "options": [
          "Yes",
          "No",
          "Not decided"
        ]
      },
      {
        "label": "When do you need it back?",
        "options": [
          "This week",
          "This month",
          "No rush"
        ]
      }
    ],
    "button": "Get my estimate",
    "thanks": "Thanks. The workshop will be in touch with your estimate."
  },
  "chat": {
    "assistantName": "Jas",
    "greeting": "Hiya, Clearcoat here. Is it a repair, a wrap, or paint protection you are after?",
    "answers": [
      {
        "ask": "How much is a scratch repair?",
        "match": [
          "scratch",
          "scuff",
          "dent",
          "repair",
          "cost",
          "price"
        ],
        "answer": "Bumper scuffs from 180 pounds, a door from 320, and paintless dent removal from 90. Tap your panels on the page for an estimate."
      },
      {
        "ask": "Can you do my insurance repair?",
        "match": [
          "insurance",
          "insurer",
          "claim",
          "excess"
        ],
        "answer": "Yes. You can choose your repairer, so tell your insurer you want us. We deal with them and lend you a courtesy car."
      },
      {
        "ask": "How much is a full wrap?",
        "match": [
          "wrap",
          "vinyl",
          "colour change",
          "color"
        ],
        "answer": "A full wrap is 2,450 pounds and takes three days. A roof only is 350."
      },
      {
        "ask": "What is paint protection film?",
        "match": [
          "ppf",
          "film",
          "protection",
          "stone chip",
          "chips"
        ],
        "answer": "A clear film that takes stone chips instead of your paint. Front end packages start at 995 pounds, with a 10 year warranty."
      },
      {
        "ask": "Where is the workshop?",
        "match": [
          "where",
          "address",
          "location",
          "workshop",
          "open"
        ],
        "answer": "In Digbeth, Birmingham. We are open Monday to Saturday, 8am to 6pm."
      }
    ]
  },
  "reviews": {}
};
