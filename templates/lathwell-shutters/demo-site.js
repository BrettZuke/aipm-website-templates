/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Lathwell Shutters: Plantation Shutters and Blinds in Liverpool",
    "metaDescription": "Made to measure plantation shutters and blinds across Liverpool and Merseyside. Free home visit with samples, measured and fitted by our own team."
  },
  "business": {
    "name": "Lathwell Shutters",
    "shortName": "Lathwell",
    "town": "Liverpool",
    "country": "GB",
    "phone": "0151 496 0734",
    "description": "Lathwell Shutters, made to measure plantation shutters and blinds for homes across Liverpool and Merseyside.",
    "services": [
      "Plantation shutters",
      "Roman blinds",
      "Wooden venetian blinds",
      "Blackout blinds",
      "Day and night blinds",
      "Not sure yet"
    ],
    "areasServed": [
      "Liverpool",
      "Woolton",
      "Allerton",
      "Crosby",
      "West Derby",
      "Childwall",
      "Formby",
      "Wirral"
    ]
  },
  "form": {
    "heading": "Book a free home visit",
    "sub": "Tell us about the rooms. We bring samples, measure and leave a written price.",
    "services": [
      "Plantation shutters",
      "Roman blinds",
      "Wooden venetian blinds",
      "Blackout blinds",
      "Day and night blinds",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How many windows?",
        "options": [
          "1 or 2",
          "3 to 5",
          "6 or more",
          "A whole house"
        ]
      },
      {
        "label": "Any tricky shapes?",
        "options": [
          "No",
          "A bay",
          "Arched or angled",
          "Not sure"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thanks. We will ring you to arrange a home visit."
  },
  "chat": {
    "assistantName": "Karen",
    "greeting": "Hi, Lathwell here. Is it shutters, blinds, or you are not sure yet?",
    "answers": [
      {
        "ask": "How much are shutters?",
        "match": [
          "cost",
          "price",
          "how much",
          "shutter",
          "shutters"
        ],
        "answer": "Painted shutters are about 290 pounds a square metre fitted, and stained wood about 365, with a minimum of 395 a window. The designer on the page prices your window."
      },
      {
        "ask": "How long do they take?",
        "match": [
          "long",
          "weeks",
          "when",
          "time"
        ],
        "answer": "Shutters take six to eight weeks from measuring to fitting. Blinds are usually ready in about two."
      },
      {
        "ask": "Can you do bay windows?",
        "match": [
          "bay",
          "shape",
          "arch",
          "triangle",
          "angled"
        ],
        "answer": "Yes. Bays, arches and angled windows are all measured and made to suit."
      },
      {
        "ask": "Are blinds safe for children?",
        "match": [
          "child",
          "children",
          "safe",
          "cord",
          "cords"
        ],
        "answer": "Yes. Every blind meets the child safety standard, with cords tensioned or hidden, and shutters have no cords at all."
      },
      {
        "ask": "Is the home visit free?",
        "match": [
          "visit",
          "free",
          "quote",
          "samples"
        ],
        "answer": "Yes. We bring real samples, measure every window and leave a written price, with no pressure."
      }
    ]
  },
  "reviews": {}
};
