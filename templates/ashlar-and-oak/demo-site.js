/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Ashlar and Oak: Fitted Wardrobes and Joinery in Edinburgh",
    "metaDescription": "Fitted wardrobes, alcove units and built in shelving across Edinburgh, drawn to the millimetre, made in our Leith workshop and scribed to your walls."
  },
  "business": {
    "name": "Ashlar and Oak",
    "shortName": "Ashlar and Oak",
    "town": "Edinburgh",
    "country": "GB",
    "phone": "0131 496 0182",
    "description": "Ashlar and Oak, fitted wardrobes, alcove units and bespoke joinery made in Leith, Edinburgh.",
    "services": [
      "Fitted wardrobes",
      "Alcove units",
      "Built in shelving",
      "Dressing room",
      "Under stairs storage",
      "Not sure yet"
    ],
    "areasServed": [
      "Edinburgh",
      "Leith",
      "Marchmont",
      "Bruntsfield",
      "Stockbridge",
      "Morningside",
      "Portobello"
    ]
  },
  "form": {
    "heading": "Book a design visit",
    "sub": "Which room and what you would like built. We measure up and bring finish samples.",
    "services": [
      "Fitted wardrobes",
      "Alcove units",
      "Built in shelving",
      "Dressing room",
      "Under stairs storage",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What kind of home?",
        "options": [
          "Tenement flat",
          "Georgian or Victorian",
          "Newer house",
          "New build flat"
        ]
      },
      {
        "label": "Painted or wood?",
        "options": [
          "Painted",
          "Oak",
          "Walnut",
          "Not sure yet"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thanks. We will ring to book your design visit, usually within two working days."
  },
  "chat": {
    "assistantName": "Alasdair",
    "greeting": "Hi, Ashlar and Oak here. Is it wardrobes, alcove units, or something else you are thinking about?",
    "answers": [
      {
        "ask": "How much are fitted wardrobes?",
        "match": [
          "cost",
          "price",
          "how much",
          "wardrobe",
          "quote"
        ],
        "answer": "Fitted wardrobes start from 1,450 pounds a bay painted, 1,750 in oak and 1,990 in walnut, with drawers adding 260 a bay. The design visit and drawing are free."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "weeks",
          "time",
          "when"
        ],
        "answer": "About four weeks from the agreed drawing: three weeks making in our Leith workshop and one or two days fitting."
      },
      {
        "ask": "My walls are not straight",
        "match": [
          "wall",
          "straight",
          "wonky",
          "tenement",
          "slope",
          "ceiling"
        ],
        "answer": "That is normal in Edinburgh. Every piece has a scribe edge, cut on site to follow your wall exactly, so there are no gaps and no filler."
      },
      {
        "ask": "Painted or wood?",
        "match": [
          "paint",
          "painted",
          "oak",
          "walnut",
          "wood",
          "colour"
        ],
        "answer": "Painted MDF can be any colour and is sprayed in our workshop. Oak and walnut give a warmer, natural finish. We bring samples of all of them."
      },
      {
        "ask": "Do you do alcove units?",
        "match": [
          "alcove",
          "shelves",
          "shelving",
          "fireplace",
          "bookcase"
        ],
        "answer": "Yes, they are one of our most asked for jobs, from 1,450 pounds a side with cupboards below and shelves above, scribed to the chimney breast."
      }
    ]
  },
  "reviews": {}
};
