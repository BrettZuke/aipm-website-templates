/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Flue and Fell: Wood Burning Stoves and Chimney Sweeps in Kendal",
    "metaDescription": "Wood burning and multi fuel stoves, flue liners and chimney sweeping across Kendal and South Lakeland, fitted by HETAS registered installers."
  },
  "business": {
    "name": "Flue and Fell",
    "shortName": "Flue and Fell",
    "town": "Kendal",
    "country": "GB",
    "phone": "01632 960315",
    "description": "Flue and Fell, wood burning and multi fuel stoves, flue liners and chimney sweeping across Kendal and South Lakeland.",
    "services": [
      "Wood burning stove",
      "Multi fuel stove",
      "Flue liner",
      "Chimney sweep",
      "Camera survey",
      "Not sure yet"
    ],
    "areasServed": [
      "Kendal",
      "Windermere",
      "Staveley",
      "Kirkby Lonsdale",
      "Sedbergh",
      "Grange-over-Sands",
      "Ambleside",
      "Milnthorpe"
    ]
  },
  "form": {
    "heading": "Book a free home visit",
    "sub": "Tell us about the room. An installer measures up, checks the chimney and leaves a written price.",
    "services": [
      "Wood burning stove",
      "Multi fuel stove",
      "Flue liner",
      "Chimney sweep",
      "Camera survey",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Is there a chimney?",
        "options": [
          "Yes, in use",
          "Yes, blocked up",
          "No chimney",
          "Not sure"
        ]
      },
      {
        "label": "What kind of home?",
        "options": [
          "Stone cottage",
          "Terrace",
          "Semi or detached",
          "New build"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thank you. We will ring you to arrange your home visit."
  },
  "chat": {
    "assistantName": "Ellie",
    "greeting": "Hello, Flue and Fell here. Is it a new stove, or a sweep for the chimney you have?",
    "answers": [
      {
        "ask": "How much is a new stove?",
        "match": [
          "cost",
          "price",
          "how much",
          "stove",
          "fitted"
        ],
        "answer": "Small stoves start at 2,950 pounds fitted, medium at 3,450 and large at 3,950, each with a new flue liner and a CO alarm."
      },
      {
        "ask": "What size stove do I need?",
        "match": [
          "size",
          "kw",
          "kilowatt",
          "big",
          "room"
        ],
        "answer": "Roughly the room volume divided by 14 for an average house, or by 10 for an old stone cottage. The calculator on the page does it for you."
      },
      {
        "ask": "How much is a chimney sweep?",
        "match": [
          "sweep",
          "sweeping",
          "clean"
        ],
        "answer": "A sweep is 75 pounds, with dust sheets down and a certificate for your insurer."
      },
      {
        "ask": "Do I need an air vent?",
        "match": [
          "vent",
          "air",
          "ventilation"
        ],
        "answer": "In most older homes, not for a stove of 5 kW or less. Bigger stoves and newer airtight homes need a permanent vent, which we fit for 180 pounds."
      },
      {
        "ask": "Do you sell logs?",
        "match": [
          "logs",
          "wood",
          "firewood",
          "kiln"
        ],
        "answer": "Yes. Kiln dried logs at about 15 percent moisture, 95 pounds a bulk bag, delivered and stacked around Kendal."
      }
    ]
  },
  "reviews": {}
};
