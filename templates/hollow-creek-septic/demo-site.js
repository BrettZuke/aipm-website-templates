/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Hollow Creek Septic: Septic Pumping, Inspections and Repair in Knoxville",
    "metaDescription": "Septic tank pumping, inspections, risers and drain field repair across Knox, Blount and Anderson counties. Sludge measured on every visit. 24/7 for backups."
  },
  "business": {
    "name": "Hollow Creek Septic",
    "shortName": "Hollow Creek",
    "town": "Knoxville",
    "country": "US",
    "phone": "(865) 555-0126",
    "description": "Hollow Creek Septic, septic tank pumping, inspections, risers and drain field repair across Knox, Blount and Anderson counties.",
    "services": [
      "Septic pumping",
      "Septic inspection",
      "Risers",
      "Drain field repair",
      "Emergency backup",
      "Not sure yet"
    ],
    "areasServed": [
      "Knoxville",
      "Powell",
      "Halls",
      "Karns",
      "Farragut",
      "Maryville",
      "Seymour",
      "Clinton"
    ]
  },
  "form": {
    "heading": "Book a pump-out",
    "sub": "Tell us about the tank. We can usually come this week, and we measure the sludge every time.",
    "services": [
      "Septic pumping",
      "Septic inspection",
      "Risers",
      "Drain field repair",
      "Emergency backup",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "When was it last pumped?",
        "options": [
          "Under 2 years",
          "2 to 5 years",
          "Over 5 years",
          "No idea"
        ]
      },
      {
        "label": "Anything going wrong?",
        "options": [
          "No, just due",
          "Slow drains",
          "Smells",
          "Backing up"
        ]
      }
    ],
    "button": "Book my pump-out",
    "thanks": "Thanks. We will call to book a day that suits you."
  },
  "chat": {
    "assistantName": "Jolene",
    "greeting": "Hey, this is Hollow Creek Septic. Is it a routine pump-out, or is something backing up?",
    "answers": [
      {
        "ask": "How much is a pump-out?",
        "match": [
          "cost",
          "price",
          "how much",
          "pump"
        ],
        "answer": "A standard pump-out is 375 dollars for up to 1,000 gallons, with the filter cleaned and the sludge measured."
      },
      {
        "ask": "How often should I pump?",
        "match": [
          "often",
          "how long",
          "years",
          "due"
        ],
        "answer": "Most families every 3 to 5 years. The calculator on the page gives a closer number for your house."
      },
      {
        "ask": "It is backing up, can you come?",
        "match": [
          "backing",
          "backup",
          "emergency",
          "overflow",
          "now"
        ],
        "answer": "Yes, we answer 24/7 for backups. Call us and we will tell you how soon the truck can be there."
      },
      {
        "ask": "Do you do inspections?",
        "match": [
          "inspect",
          "inspection",
          "sale",
          "lender",
          "buying"
        ],
        "answer": "Yes. 450 dollars, with sludge readings, a camera look at the lines and a written report lenders accept."
      },
      {
        "ask": "Do additives help?",
        "match": [
          "additive",
          "bacteria",
          "treatment",
          "enzyme"
        ],
        "answer": "No. A healthy tank has the bacteria it needs, and additives never replace pumping."
      }
    ]
  },
  "reviews": {}
};
