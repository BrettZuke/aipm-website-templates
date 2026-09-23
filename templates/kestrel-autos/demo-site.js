/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Kestrel Autos: Independent Garage in Bristol",
    "metaDescription": "Independent garage in Bristol for servicing, MOT, diagnostics and repairs on every make. Dealer level equipment, fixed prices, the car back the same day."
  },
  "business": {
    "name": "Kestrel Autos",
    "shortName": "Kestrel",
    "town": "Bristol",
    "country": "GB",
    "phone": "0117 496 0145",
    "description": "Kestrel Autos, an independent garage in Bristol for servicing, MOT, diagnostics and repairs.",
    "services": [
      "Service",
      "MOT",
      "Warning light or diagnostics",
      "Brakes",
      "Clutch or gearbox",
      "EV or hybrid"
    ],
    "areasServed": [
      "Bristol",
      "Bedminster",
      "Clifton",
      "Southville",
      "Ashton",
      "Long Ashton",
      "Nailsea"
    ]
  },
  "form": {
    "heading": "Book the car in",
    "sub": "Reg and what it needs. We ring back with a fixed price and the earliest slot.",
    "services": [
      "Service",
      "MOT",
      "Warning light or diagnostics",
      "Brakes",
      "Clutch or gearbox",
      "EV or hybrid"
    ],
    "questions": [
      {
        "label": "Your reg number"
      },
      {
        "label": "Is the car drivable?",
        "options": [
          "Yes",
          "Yes, but a warning light is on",
          "No, it needs collecting",
          "Not sure"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will call you back today with a fixed price and the earliest slot, usually the same week."
  },
  "chat": {
    "assistantName": "Jon",
    "greeting": "Hi, Kestrel Autos here. What is the car doing, and what make is it?",
    "answers": [
      {
        "ask": "How much is a service?",
        "match": [
          "service",
          "price",
          "cost",
          "how much",
          "interim",
          "full service",
          "quote"
        ],
        "answer": "An interim service starts at 129 pounds and a full service at 219, depending on the engine. It follows the manufacturer schedule, gets logged on your digital service record, and the price is confirmed before we start."
      },
      {
        "ask": "Will it affect my warranty?",
        "match": [
          "warranty",
          "dealer",
          "main dealer",
          "void",
          "book",
          "stamp"
        ],
        "answer": "No. UK law lets you service a car under warranty at any garage, as long as the manufacturer schedule is followed and the right parts are used. We do both and stamp the book."
      },
      {
        "ask": "My engine light is on",
        "match": [
          "light",
          "warning",
          "engine light",
          "diagnostic",
          "fault",
          "code",
          "dash"
        ],
        "answer": "Bring it in for diagnostics. We read it with dealer level equipment, trace it to the cause and send you the codes and a video. It is 60 pounds, taken off the bill if we do the repair."
      },
      {
        "ask": "How much is an MOT?",
        "match": [
          "mot",
          "test",
          "due",
          "retest",
          "fail"
        ],
        "answer": "An MOT is 45 pounds, done in our own bay. If anything fails we show you why and price the fix, and the retest is free if the work is done here within ten working days."
      },
      {
        "ask": "Do you do electric cars?",
        "match": [
          "electric",
          "ev",
          "hybrid",
          "tesla",
          "battery",
          "high voltage"
        ],
        "answer": "Yes. Two of us are qualified for high voltage systems, and we service, diagnose and repair hybrids and electric cars from most makers."
      }
    ]
  },
  "reviews": {}
};
