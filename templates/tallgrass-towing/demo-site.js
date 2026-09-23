/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Tallgrass Towing: 24 Hour Towing in Oklahoma City",
    "metaDescription": "24 hour towing, roadside assistance and accident recovery across Oklahoma City. Flat rate quoted on the phone, live driver tracking, flatbeds for AWD and electric cars."
  },
  "business": {
    "name": "Tallgrass Towing",
    "shortName": "Tallgrass",
    "town": "Oklahoma City",
    "country": "US",
    "phone": "(405) 555-0118",
    "description": "Tallgrass Towing, 24 hour towing, roadside assistance and accident recovery across the Oklahoma City metro.",
    "services": [
      "Tow",
      "Flat tire",
      "Jump start",
      "Lockout",
      "Accident recovery",
      "Fuel delivery"
    ],
    "areasServed": [
      "Oklahoma City",
      "Edmond",
      "Norman",
      "Moore",
      "Yukon",
      "Midwest City",
      "Mustang"
    ]
  },
  "form": {
    "heading": "Request a tow",
    "sub": "Where the car is and where it needs to go. For anything urgent, calling is quickest.",
    "services": [
      "Tow",
      "Flat tire",
      "Jump start",
      "Lockout",
      "Accident recovery",
      "Fuel delivery"
    ],
    "questions": [
      {
        "label": "Is anyone in danger right now?",
        "options": [
          "No, we are safe",
          "On a highway shoulder",
          "Blocking traffic"
        ]
      },
      {
        "label": "What kind of vehicle?",
        "options": [
          "Car or SUV",
          "Pickup",
          "Electric or AWD",
          "Van or box truck"
        ]
      }
    ],
    "button": "Request my tow",
    "thanks": "Thanks. Dispatch will call you within five minutes with the price and an arrival time. If you are on a highway, stay in the car with your seatbelt on and your hazards flashing."
  },
  "chat": {
    "assistantName": "Danny",
    "greeting": "Hi, Tallgrass Towing here. Where is the car right now, and is everyone safe?",
    "answers": [
      {
        "ask": "How much is a tow?",
        "match": [
          "price",
          "cost",
          "how much",
          "tow",
          "mile",
          "rate",
          "charge"
        ],
        "answer": "Local tows inside the OKC metro start at 95 dollars for the hookup and the first five miles, then 4 dollars a mile. You get the exact figure on the phone before we dispatch."
      },
      {
        "ask": "How fast can you get here?",
        "match": [
          "how fast",
          "how long",
          "now",
          "tonight",
          "urgent",
          "arrive",
          "eta"
        ],
        "answer": "About thirty minutes across most of the metro, day or night. You get a text with a live map of the truck as soon as it leaves."
      },
      {
        "ask": "Do you take insurance or AAA?",
        "match": [
          "insurance",
          "aaa",
          "motor club",
          "roadside plan",
          "claim",
          "covered"
        ],
        "answer": "Yes. We work with most insurers and roadside plans. Give us your policy or membership number on the call and we bill them directly where they allow it."
      },
      {
        "ask": "Can you tow my electric car?",
        "match": [
          "electric",
          "ev",
          "tesla",
          "awd",
          "all wheel",
          "4x4",
          "lowered"
        ],
        "answer": "Yes, on a flatbed, which is the only safe way. Towing those on two wheels can damage the motors or the drivetrain, so we never do it."
      },
      {
        "ask": "I just need a jump or a tire change",
        "match": [
          "jump",
          "battery",
          "flat",
          "tire",
          "tyre",
          "fuel",
          "gas",
          "lockout",
          "keys"
        ],
        "answer": "Then we send a roadside truck instead of a tow truck. Jump starts, tire changes, fuel delivery and lockouts start at 65 dollars in the metro."
      }
    ]
  },
  "reviews": {}
};
