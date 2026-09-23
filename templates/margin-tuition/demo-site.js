/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Margin Tuition: GCSE, 11 Plus and KS3 Tutoring in Leicester",
    "metaDescription": "Small group and one to one tuition in maths, English and science for Years 5 to 11 in Leicester. A free assessment, a written plan and a report after every mock."
  },
  "business": {
    "name": "Margin Tuition",
    "shortName": "Margin",
    "town": "Leicester",
    "country": "GB",
    "phone": "0116 496 0457",
    "description": "Margin Tuition, a tutoring centre in Leicester for maths, English and science from Year 5 to GCSE, in small groups and one to one.",
    "services": [
      "GCSE maths",
      "GCSE English",
      "GCSE science",
      "11 plus preparation",
      "KS3 support",
      "Not sure yet"
    ],
    "areasServed": [
      "Leicester",
      "Oadby",
      "Wigston",
      "Knighton",
      "Stoneygate",
      "Evington",
      "Glenfield",
      "Birstall"
    ]
  },
  "form": {
    "heading": "Book a free assessment",
    "sub": "Tell us about your child. We assess, then send a written plan.",
    "services": [
      "GCSE maths",
      "GCSE English",
      "GCSE science",
      "11 plus preparation",
      "KS3 support",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Which year is your child in?",
        "options": [
          "Year 5 or 6",
          "Year 7 to 9",
          "Year 10",
          "Year 11"
        ]
      },
      {
        "label": "Group or one to one?",
        "options": [
          "Small group",
          "One to one",
          "Not sure yet"
        ]
      }
    ],
    "button": "Book the assessment",
    "thanks": "Thank you. We will ring you to book the free assessment."
  },
  "chat": {
    "assistantName": "Leah",
    "greeting": "Hi, Margin Tuition here. Which year is your child in, and which subject?",
    "answers": [
      {
        "ask": "How much does it cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "fee",
          "per session"
        ],
        "answer": "Small groups are 28 pounds a session, and one to one is 45 pounds an hour. The first assessment is free."
      },
      {
        "ask": "How big are the groups?",
        "match": [
          "group",
          "groups",
          "how many",
          "size",
          "students"
        ],
        "answer": "Never more than four students, grouped by year and by set."
      },
      {
        "ask": "What is the assessment?",
        "match": [
          "assessment",
          "test",
          "first",
          "trial"
        ],
        "answer": "45 minutes in the subject, a chat with you, and a written plan with the grades we would aim for. It is free."
      },
      {
        "ask": "Do you do the 11 plus?",
        "match": [
          "11 plus",
          "eleven plus",
          "grammar",
          "year 5",
          "year 6"
        ],
        "answer": "Yes, from Year 5, with practice papers in the formats your chosen schools use."
      },
      {
        "ask": "Can it be online?",
        "match": [
          "online",
          "zoom",
          "remote",
          "home"
        ],
        "answer": "Yes. One to one sessions can be at the centre or online, and so can some groups."
      }
    ]
  },
  "reviews": {}
};
