/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Briarwood Pest Control: Pest Control in Houston",
    "metaDescription": "Quarterly pest plans, termite protection and mosquito treatments across Houston. Safe for pets and kids once dry, with free re-treats between visits."
  },
  "business": {
    "name": "Briarwood Pest Control",
    "shortName": "Briarwood",
    "town": "Houston",
    "country": "US",
    "phone": "(713) 555-0137",
    "description": "Briarwood Pest Control, pet safe pest, termite and mosquito treatments across Houston.",
    "services": [
      "General pest plan",
      "Termite inspection or treatment",
      "Mosquito and yard treatment",
      "Rodents",
      "Bed bugs",
      "One-off treatment"
    ],
    "areasServed": [
      "Houston",
      "The Heights",
      "Katy",
      "Sugar Land",
      "The Woodlands",
      "Pearland",
      "Cypress"
    ]
  },
  "form": {
    "heading": "Book a free inspection",
    "sub": "What you are seeing and where. Most inspections are booked within two days.",
    "services": [
      "General pest plan",
      "Termite inspection or treatment",
      "Mosquito and yard treatment",
      "Rodents",
      "Bed bugs",
      "One-off treatment"
    ],
    "questions": [
      {
        "label": "What are you seeing?",
        "options": [
          "Roaches",
          "Ants",
          "Termites or wood damage",
          "Rodents",
          "Something else"
        ]
      },
      {
        "label": "Any pets or small children?",
        "options": [
          "Pets",
          "Children",
          "Both",
          "Neither"
        ]
      }
    ],
    "button": "Book my inspection",
    "thanks": "Thanks. We will call you today to book the inspection, and you get the price at the door before anything is sprayed."
  },
  "chat": {
    "assistantName": "Luis",
    "greeting": "Hi, Briarwood Pest Control here. What have you been seeing, and where?",
    "answers": [
      {
        "ask": "Is it safe for my dog and kids?",
        "match": [
          "safe",
          "dog",
          "cat",
          "pet",
          "kids",
          "children",
          "baby",
          "toxic",
          "chemical"
        ],
        "answer": "Yes, once it is dry, which is usually inside the hour. We use targeted, low toxicity products where pests travel rather than spraying across rooms, and we tell you exactly what was used and which rooms to keep them out of."
      },
      {
        "ask": "How much is a pest plan?",
        "match": [
          "price",
          "cost",
          "how much",
          "plan",
          "monthly",
          "quote",
          "charge"
        ],
        "answer": "The general pest plan starts at 49 dollars a month for a typical Houston house, with a visit every quarter and free re-treats in between. Termite protection starts at 395 dollars and mosquito visits at 65."
      },
      {
        "ask": "What if they come back?",
        "match": [
          "come back",
          "return",
          "again",
          "guarantee",
          "re-treat",
          "retreat",
          "still seeing"
        ],
        "answer": "Then so do we, free. If you see activity between quarterly visits, call and we come back out at no charge. That is the point of the plan."
      },
      {
        "ask": "Do you do termites?",
        "match": [
          "termite",
          "wood",
          "swarm",
          "mud tube",
          "damage",
          "frame"
        ],
        "answer": "Yes. The inspection is free, we show you what we find, and treatment comes with a warranty and an annual check. Mud tubes on the foundation or swarming wings indoors are both worth a call this week."
      },
      {
        "ask": "How fast can you come?",
        "match": [
          "today",
          "tomorrow",
          "soon",
          "urgent",
          "fast",
          "when",
          "available"
        ],
        "answer": "Most inspections are booked within two days, and same day where we can for anything urgent like rodents inside or a wasp nest by a door."
      }
    ]
  },
  "reviews": {}
};
