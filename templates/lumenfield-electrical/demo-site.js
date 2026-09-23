/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Lumenfield Electrical: Electricians in Manchester",
    "metaDescription": "NICEIC approved electricians across Manchester. Consumer units, rewires, lighting, EV chargers and landlord certificates, priced before we start and certified the same day."
  },
  "business": {
    "name": "Lumenfield Electrical",
    "shortName": "Lumenfield",
    "town": "Manchester",
    "country": "GB",
    "phone": "0161 496 0152",
    "description": "Lumenfield Electrical, NICEIC approved domestic electricians across Manchester.",
    "services": [
      "Consumer unit upgrade",
      "Full or part rewire",
      "Lighting",
      "Sockets or a new circuit",
      "EV charger",
      "EICR or landlord certificate",
      "Fault finding"
    ],
    "areasServed": [
      "Manchester",
      "Didsbury",
      "Chorlton",
      "Salford",
      "Stockport",
      "Sale",
      "Altrincham"
    ]
  },
  "form": {
    "heading": "Book an electrician",
    "sub": "What needs doing and roughly when. Faults get seen the same day where we can.",
    "services": [
      "Consumer unit upgrade",
      "Full or part rewire",
      "Lighting",
      "Sockets or a new circuit",
      "EV charger",
      "EICR or landlord certificate",
      "Fault finding"
    ],
    "questions": [
      {
        "label": "What sort of property?",
        "options": [
          "Flat",
          "Terraced or semi",
          "Detached",
          "Rental or HMO"
        ]
      },
      {
        "label": "How soon?",
        "options": [
          "Today, it is a fault",
          "This week",
          "This month",
          "Just getting a price"
        ]
      }
    ],
    "button": "Send it over",
    "thanks": "Thanks. We will ring you back today with a price or a time, and sooner if the power is off."
  },
  "chat": {
    "assistantName": "Dan",
    "greeting": "Hi, Lumenfield Electrical here. Is this a fault, or something you are planning?",
    "answers": [
      {
        "ask": "How much is a consumer unit?",
        "match": [
          "consumer unit",
          "fuse box",
          "fuse board",
          "board",
          "price",
          "cost",
          "how much"
        ],
        "answer": "Most Manchester houses come in between 650 and 850 pounds, fitted, tested and certified. It depends on how many circuits there are and whether the earthing needs upgrading, which we check at the free survey."
      },
      {
        "ask": "Can you come today?",
        "match": [
          "today",
          "urgent",
          "emergency",
          "no power",
          "tripping",
          "trip",
          "fault",
          "now"
        ],
        "answer": "Usually, yes. Ring before midday and we will try to get to you that afternoon. If the house has no power at all it becomes the first job of the day."
      },
      {
        "ask": "Do I need a full rewire?",
        "match": [
          "rewire",
          "old wiring",
          "rubber",
          "fabric",
          "wiring"
        ],
        "answer": "Often not. If the wiring is PVC and tests well, a new board and a few extra circuits is usually enough. Rubber or fabric insulated cable, or no earth on the lighting, means it is time."
      },
      {
        "ask": "Do you do landlord certificates?",
        "match": [
          "landlord",
          "eicr",
          "certificate",
          "inspection",
          "rental",
          "letting"
        ],
        "answer": "Yes, and we can do a whole portfolio in one week. Each EICR is emailed the same day, and anything coded C1 or C2 is priced separately so you can decide."
      },
      {
        "ask": "Are you NICEIC approved?",
        "match": [
          "niceic",
          "approved",
          "registered",
          "qualified",
          "insured",
          "building control",
          "part p"
        ],
        "answer": "Yes. Every notifiable job goes through the scheme to building control, and you get the certificate and the notification letter for your records."
      },
      {
        "ask": "Do you fit EV chargers?",
        "match": [
          "ev",
          "charger",
          "electric car",
          "car charger",
          "tesla",
          "charging"
        ],
        "answer": "Yes. A 7kW charger on the house is from 895 pounds, fitted on its own protected circuit and notified, and most are done in half a day so the car charges that evening."
      }
    ]
  },
  "reviews": {}
};
