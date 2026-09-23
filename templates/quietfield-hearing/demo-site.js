/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Quietfield Hearing: Hearing Tests, Hearing Aids and Wax Removal in Nottingham",
    "metaDescription": "Free full hearing tests, hearing aids with a 60 day trial, and microsuction ear wax removal in Nottingham, from HCPC registered audiologists."
  },
  "business": {
    "name": "Quietfield Hearing",
    "shortName": "Quietfield Hearing",
    "town": "Nottingham",
    "country": "GB",
    "phone": "0115 496 0361",
    "description": "Quietfield Hearing, an independent hearing clinic in Nottingham for free hearing tests, hearing aids and microsuction ear wax removal.",
    "services": [
      "Free hearing test",
      "Hearing aids",
      "Ear wax removal",
      "Hearing aid repair",
      "Not sure yet"
    ],
    "areasServed": [
      "Nottingham",
      "West Bridgford",
      "Beeston",
      "Arnold",
      "Carlton",
      "Wollaton",
      "Mapperley",
      "Hucknall"
    ]
  },
  "form": {
    "heading": "Book a free hearing test",
    "sub": "Tell us what you have noticed. A full test with an audiologist is free.",
    "services": [
      "Free hearing test",
      "Hearing aids",
      "Ear wax removal",
      "Hearing aid repair",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Do you wear hearing aids now?",
        "options": [
          "No",
          "Yes, NHS",
          "Yes, private"
        ]
      },
      {
        "label": "When suits you?",
        "options": [
          "Weekday morning",
          "Weekday afternoon",
          "Saturday"
        ]
      }
    ],
    "button": "Book my test",
    "thanks": "Thank you. We will ring you to book your free hearing test."
  },
  "chat": {
    "assistantName": "Clare",
    "greeting": "Hello, Quietfield Hearing here. Is it a hearing test, hearing aids, or ear wax you are after?",
    "answers": [
      {
        "ask": "Is the hearing test free?",
        "match": [
          "free",
          "test",
          "hearing test",
          "cost of test"
        ],
        "answer": "Yes. A full hearing test with an audiologist is free, takes about 45 minutes, and there is no obligation."
      },
      {
        "ask": "How much are hearing aids?",
        "match": [
          "cost",
          "price",
          "how much",
          "aids",
          "hearing aid"
        ],
        "answer": "From 1,195 pounds a pair behind the ear, 1,495 for receiver in the canal, and 2,195 for invisible in the canal. Fitting, a 60 day trial and aftercare are included."
      },
      {
        "ask": "How much is wax removal?",
        "match": [
          "wax",
          "microsuction",
          "blocked",
          "syringe"
        ],
        "answer": "Microsuction wax removal is 65 pounds for both ears, usually with an appointment this week."
      },
      {
        "ask": "Can I get aids on the NHS?",
        "match": [
          "nhs",
          "free aids",
          "gp"
        ],
        "answer": "Yes, the NHS provides hearing aids free, though waits vary. We offer more choice of styles and faster appointments."
      },
      {
        "ask": "What if they do not suit me?",
        "match": [
          "trial",
          "refund",
          "return",
          "suit"
        ],
        "answer": "You have 60 days to try them. If they are not right, we adjust or change them, or refund you."
      }
    ]
  },
  "reviews": {}
};
