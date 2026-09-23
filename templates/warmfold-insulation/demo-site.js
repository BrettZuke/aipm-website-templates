/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Warmfold Insulation: Loft, Cavity Wall and Floor Insulation in Newcastle",
    "metaDescription": "Loft, cavity wall and underfloor insulation across Newcastle and Tyneside, fitted by our own team. Free thermal survey and a written quote."
  },
  "business": {
    "name": "Warmfold Insulation",
    "shortName": "Warmfold",
    "town": "Newcastle upon Tyne",
    "country": "GB",
    "phone": "0191 498 0327",
    "description": "Warmfold Insulation, loft, cavity wall and underfloor insulation and draught proofing across Newcastle and Tyneside.",
    "services": [
      "Loft insulation",
      "Cavity wall insulation",
      "Underfloor insulation",
      "Draught proofing",
      "Thermal survey",
      "Not sure yet"
    ],
    "areasServed": [
      "Newcastle",
      "Gateshead",
      "Gosforth",
      "Heaton",
      "Jesmond",
      "Whitley Bay",
      "Wallsend",
      "Tynemouth"
    ]
  },
  "form": {
    "heading": "Book a free thermal survey",
    "sub": "Tell us about your home. We bring a thermal camera and leave a written quote.",
    "services": [
      "Loft insulation",
      "Cavity wall insulation",
      "Underfloor insulation",
      "Draught proofing",
      "Thermal survey",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What kind of home?",
        "options": [
          "Terrace",
          "Semi",
          "Detached",
          "Bungalow",
          "Flat"
        ]
      },
      {
        "label": "When was it built?",
        "options": [
          "Before 1920",
          "1920 to 1980",
          "After 1980",
          "Not sure"
        ]
      }
    ],
    "button": "Book my survey",
    "thanks": "Thanks. We will ring you today to book your thermal survey."
  },
  "chat": {
    "assistantName": "Lindsay",
    "greeting": "Hi, Warmfold here. Is it the loft, the walls, or a room that will not warm up?",
    "answers": [
      {
        "ask": "How much is loft insulation?",
        "match": [
          "loft",
          "roof",
          "attic"
        ],
        "answer": "Topping a loft up to the recommended 270 mm starts at 395 pounds, or 495 if there is nothing there now. It takes half a day."
      },
      {
        "ask": "How much for cavity walls?",
        "match": [
          "cavity",
          "wall",
          "walls"
        ],
        "answer": "Cavity wall insulation starts at 1,450 pounds for a semi and takes a day. We check inside the wall with a camera first."
      },
      {
        "ask": "Is the thermal survey free?",
        "match": [
          "survey",
          "thermal",
          "camera",
          "free"
        ],
        "answer": "Yes. It takes about 45 minutes, we show you the thermal pictures on the spot, and you get a written quote."
      },
      {
        "ask": "Will it cause damp?",
        "match": [
          "damp",
          "mould",
          "mold",
          "wet"
        ],
        "answer": "Not when the wall suits it. We check the cavity, gutters and pointing first, and turn down about one house in ten."
      },
      {
        "ask": "Is there help with the cost?",
        "match": [
          "grant",
          "help",
          "scheme",
          "discount",
          "free insulation"
        ],
        "answer": "Some households qualify for free or discounted insulation. We check what you can get at the survey, before we quote."
      }
    ]
  },
  "reviews": {}
};
