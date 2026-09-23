/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Tyne and Needle: Custom Tattoo Studio in Newcastle",
    "metaDescription": "A custom tattoo studio on the Ouseburn in Newcastle. Fine line, traditional and blackwork, drawn for you. Free consultations, 50 pound deposits, over 18s only."
  },
  "business": {
    "name": "Tyne and Needle Tattoo",
    "shortName": "Tyne and Needle",
    "town": "Newcastle",
    "country": "GB",
    "phone": "0191 498 0246",
    "description": "Tyne and Needle, a custom tattoo studio on the Ouseburn in Newcastle, for fine line, traditional and blackwork tattoos. Over 18s only.",
    "services": [
      "Custom tattoo",
      "Fine line",
      "Traditional",
      "Blackwork",
      "Cover up",
      "Not sure yet"
    ],
    "areasServed": [
      "Newcastle",
      "Ouseburn",
      "Heaton",
      "Jesmond",
      "Gosforth",
      "Byker",
      "Gateshead",
      "Tynemouth"
    ]
  },
  "form": {
    "heading": "Tell us the idea",
    "sub": "The idea, the spot and a rough size. We reply with a plan, a price and dates.",
    "services": [
      "Custom tattoo",
      "Fine line",
      "Traditional",
      "Blackwork",
      "Cover up",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Is this your first tattoo?",
        "options": [
          "Yes, my first",
          "I have a few",
          "I have plenty"
        ]
      },
      {
        "label": "How soon?",
        "options": [
          "As soon as possible",
          "In the next month or two",
          "No rush"
        ]
      }
    ],
    "button": "Send my idea",
    "thanks": "Thanks. An artist will come back to you with a plan and some dates."
  },
  "chat": {
    "assistantName": "Sol",
    "greeting": "Hi, Tyne and Needle here. What is the idea, and where on the body?",
    "answers": [
      {
        "ask": "How much will it cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "rate",
          "hour"
        ],
        "answer": "Our rate is 110 pounds an hour, with a 90 pound minimum for a small piece. The tool on the page gives a guide from the size and style."
      },
      {
        "ask": "How old do I need to be?",
        "match": [
          "age",
          "old",
          "18",
          "id",
          "young"
        ],
        "answer": "Eighteen, with photo ID every time. We cannot make exceptions, it is the law."
      },
      {
        "ask": "Do you take a deposit?",
        "match": [
          "deposit",
          "booking",
          "hold",
          "cancel"
        ],
        "answer": "Yes, 50 pounds holds the day and comes off the price. It moves with you if you give 48 hours notice."
      },
      {
        "ask": "Can you cover an old tattoo?",
        "match": [
          "cover",
          "cover up",
          "old tattoo",
          "fix",
          "rework"
        ],
        "answer": "Often, yes. Send a clear photo in daylight and we will tell you honestly what is possible."
      },
      {
        "ask": "Does it hurt?",
        "match": [
          "hurt",
          "pain",
          "painful",
          "sore"
        ],
        "answer": "Some spots more than others. Ribs, hands and the inner arm are the sharpest. You can take a break whenever you want."
      }
    ]
  },
  "reviews": {}
};
