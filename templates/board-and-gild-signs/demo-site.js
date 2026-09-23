/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Board and Gild: Sign Makers in Sheffield",
    "metaDescription": "Shop signs, built up letters, hand painted and gilded signs, window graphics and vehicle livery, made and fitted in Sheffield. Free survey and drawings."
  },
  "business": {
    "name": "Board and Gild Signs",
    "shortName": "Board and Gild",
    "town": "Sheffield",
    "country": "GB",
    "phone": "0114 496 0392",
    "description": "Board and Gild Signs, sign makers in Sheffield making shop fascias, built up letters, hand painted and gilded signs, window graphics and vehicle livery.",
    "services": [
      "Shop sign",
      "Built up letters",
      "Hand painted sign",
      "Window graphics",
      "Vehicle livery",
      "Not sure yet"
    ],
    "areasServed": [
      "Sheffield",
      "Kelham Island",
      "Sharrow Vale",
      "Hillsborough",
      "Crookes",
      "Nether Edge",
      "Rotherham",
      "Chesterfield"
    ]
  },
  "form": {
    "heading": "Get a sign quote",
    "sub": "Tell us what it should say and where it goes. We measure, draw and quote for free.",
    "services": [
      "Shop sign",
      "Built up letters",
      "Hand painted sign",
      "Window graphics",
      "Vehicle livery",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "When do you need it?",
        "options": [
          "As soon as possible",
          "In the next month",
          "In a few months",
          "Just pricing"
        ]
      },
      {
        "label": "Do you have artwork?",
        "options": [
          "Yes, a logo file",
          "Only a photo",
          "Nothing yet"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. We will call to arrange the survey and drawings."
  },
  "chat": {
    "assistantName": "Marcus",
    "greeting": "Hi, Board and Gild here. What is the sign for, and what should it say?",
    "answers": [
      {
        "ask": "How much is a shop sign?",
        "match": [
          "cost",
          "price",
          "how much",
          "quote",
          "sign"
        ],
        "answer": "A flat panel starts at about 190 pounds a metre, built up letters 430, and hand painted 520, plus fitting. The shop front on this page prices your exact sign."
      },
      {
        "ask": "Do I need permission?",
        "match": [
          "permission",
          "consent",
          "council",
          "planning",
          "listed"
        ],
        "answer": "Most new shop signs need advertisement consent, and listed buildings need listed building consent. We draw the plans and apply for you."
      },
      {
        "ask": "How long will it take?",
        "match": [
          "long",
          "weeks",
          "lead",
          "when",
          "time"
        ],
        "answer": "Window vinyl about a week, flat panels two weeks, and built up or hand painted letters three to four weeks from approval."
      },
      {
        "ask": "Can you do my van?",
        "match": [
          "van",
          "vehicle",
          "wrap",
          "livery",
          "fleet"
        ],
        "answer": "Yes, cut vinyl or a full wrap, templated to your exact van. Most vans are done in a day."
      },
      {
        "ask": "Can you match my logo?",
        "match": [
          "logo",
          "artwork",
          "brand",
          "match",
          "file"
        ],
        "answer": "Send whatever you have, even a photo, and we redraw it properly for cutting and painting."
      }
    ]
  },
  "reviews": {}
};
