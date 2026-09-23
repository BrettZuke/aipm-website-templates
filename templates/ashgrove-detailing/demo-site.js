/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Ashgrove Detailing: Mobile Car Detailing in Edinburgh",
    "metaDescription": "Mobile car detailing across Edinburgh and the Lothians. Our own water, power and lighting, paint correction done properly, and the car never leaves your driveway."
  },
  "business": {
    "name": "Ashgrove Detailing",
    "shortName": "Ashgrove",
    "town": "Edinburgh",
    "country": "GB",
    "phone": "07700 900318",
    "description": "Ashgrove Detailing, mobile car detailing across Edinburgh and the Lothians.",
    "services": [
      "Maintenance detail",
      "Interior deep clean",
      "Paint correction",
      "Protection or ceramic",
      "Pre sale detail",
      "Fleet or multiple cars"
    ],
    "areasServed": [
      "Edinburgh",
      "Morningside",
      "Leith",
      "Corstorphine",
      "Musselburgh",
      "Livingston",
      "Dalkeith"
    ]
  },
  "form": {
    "heading": "Get a price",
    "sub": "Make, model and a photo in daylight. Paint tells us more in one photo than any description.",
    "services": [
      "Maintenance detail",
      "Interior deep clean",
      "Paint correction",
      "Protection or ceramic",
      "Pre sale detail",
      "Fleet or multiple cars"
    ],
    "questions": [
      {
        "label": "What size is the car?",
        "options": [
          "Small hatch",
          "Saloon or estate",
          "SUV or 4x4",
          "Van or seven seater"
        ]
      },
      {
        "label": "What state is it in?",
        "options": [
          "Kept on top of",
          "Needs a proper clean",
          "Neglected for years",
          "Selling it"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will come back today with a fixed price and the next free slot."
  },
  "chat": {
    "assistantName": "Innes",
    "greeting": "Hi, Ashgrove Detailing. What are you driving?",
    "answers": [
      {
        "ask": "What does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee"
        ],
        "answer": "A maintenance detail starts at 85 pounds, a full interior at 160, and a single stage correction with protection from 380 depending on size and condition. You get a fixed number before we come out."
      },
      {
        "ask": "Do you need my water or power?",
        "match": [
          "water",
          "power",
          "electric",
          "tap",
          "plug",
          "hose",
          "supply"
        ],
        "answer": "Neither. The van carries its own tank, a generator and its own lighting, so a driveway, a street or an office car park all work without plugging into anything of yours."
      },
      {
        "ask": "Is a ceramic coating worth it?",
        "match": [
          "ceramic",
          "coating",
          "seal",
          "protection",
          "wax",
          "worth"
        ],
        "answer": "Only once the paint is corrected. A coating locks in whatever is underneath it, so putting one on swirled paint means paying to preserve the swirls for three years. If it is not ready we will say so."
      },
      {
        "ask": "What if it rains?",
        "match": [
          "rain",
          "weather",
          "wet",
          "cold",
          "winter",
          "forecast"
        ],
        "answer": "Light rain is fine for an interior and we work under a canopy. Heavy rain or under about four degrees stops paint correction because the products stop behaving, so we move you rather than rush it, and a move we made is never charged for."
      },
      {
        "ask": "How long will it take?",
        "match": [
          "how long",
          "time",
          "hours",
          "day",
          "wait",
          "quick"
        ],
        "answer": "A maintenance detail is two to three hours, a full interior and exterior is a day, and a two stage correction on neglected paint can be two. We tell you which one your car needs from the photo, not on arrival."
      }
    ]
  },
  "reviews": {}
};
