/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Tollgate Motors: Used Cars in Birmingham",
    "metaDescription": "A small used car forecourt in Bordesley Green, Birmingham. Every car HPI checked, serviced, with twelve months MOT, six months warranty and fourteen days to change your mind."
  },
  "business": {
    "name": "Tollgate Motors",
    "shortName": "Tollgate Motors",
    "town": "Birmingham",
    "country": "GB",
    "phone": "0121 496 0284",
    "description": "Tollgate Motors, a used car dealer in Bordesley Green, Birmingham, selling checked and serviced cars with warranty and finance.",
    "services": [
      "Buying a car",
      "Part exchange",
      "Finance",
      "Test drive",
      "Not sure yet"
    ],
    "areasServed": [
      "Birmingham",
      "Bordesley Green",
      "Yardley",
      "Sparkhill",
      "Solihull",
      "Erdington",
      "Acocks Green",
      "Sutton Coldfield"
    ]
  },
  "form": {
    "heading": "Book a viewing",
    "sub": "Tell us which car and when suits. We will have it ready out front.",
    "services": [
      "Buying a car",
      "Part exchange",
      "Finance",
      "Test drive",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Part exchange?",
        "options": [
          "Yes",
          "No",
          "Maybe, depends on the price"
        ]
      },
      {
        "label": "Paying how?",
        "options": [
          "Cash or card",
          "Finance",
          "Not decided yet"
        ]
      }
    ],
    "button": "Book my viewing",
    "thanks": "Thanks. We will ring you to sort a time and have the car ready."
  },
  "chat": {
    "assistantName": "Dean",
    "greeting": "Hi, Tollgate Motors here. Which car are you interested in, or shall I ask what you are after?",
    "answers": [
      {
        "ask": "What is on the pitch?",
        "match": [
          "stock",
          "cars",
          "available",
          "pitch",
          "have you got"
        ],
        "answer": "About twenty cars at any time, from around 8,000 to 19,000 pounds. The list on this page is today's stock, and you can filter it by type and price."
      },
      {
        "ask": "Do you do finance?",
        "match": [
          "finance",
          "monthly",
          "credit",
          "hp",
          "pcp"
        ],
        "answer": "Yes, hire purchase from a panel of lenders at 12.9 percent APR representative. The calculator on the page shows the monthly payment, and we are a credit broker, not a lender."
      },
      {
        "ask": "Do you take part exchange?",
        "match": [
          "part exchange",
          "trade in",
          "px",
          "my car"
        ],
        "answer": "Yes. Send the registration and mileage and we will give you a figure before you come down."
      },
      {
        "ask": "What warranty do I get?",
        "match": [
          "warranty",
          "guarantee",
          "cover",
          "breaks"
        ],
        "answer": "Six months of parts and labour on the engine, gearbox, clutch, electrics and cooling, at our workshop or a garage you trust."
      },
      {
        "ask": "Can I test drive it?",
        "match": [
          "test drive",
          "drive",
          "try",
          "viewing"
        ],
        "answer": "Yes, with your licence and insurance. Tell me which car and when suits and I will have it out front."
      }
    ]
  },
  "reviews": {}
};
