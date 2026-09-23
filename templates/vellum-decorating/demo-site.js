/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Vellum Decorating: Painters and Decorators in Liverpool",
    "metaDescription": "Painters and decorators across Liverpool and the Wirral. A full day of filling, sanding and priming before a tin is opened, trade paint only, and a fixed price that holds even when the job overruns."
  },
  "business": {
    "name": "Vellum Decorating",
    "shortName": "Vellum",
    "town": "Liverpool",
    "country": "GB",
    "phone": "0151 496 0121",
    "description": "Vellum Decorating, painting and decorating across Liverpool and the Wirral.",
    "services": [
      "Rooms and hallways",
      "Whole house",
      "Exterior and masonry",
      "Spray finish on doors or units",
      "Wallpaper hanging",
      "Commercial or landlord"
    ],
    "areasServed": [
      "Liverpool",
      "Allerton",
      "Woolton",
      "Crosby",
      "Wirral",
      "Formby",
      "St Helens"
    ]
  },
  "form": {
    "heading": "Get a fixed price",
    "sub": "A photo of the room and the rough size is usually enough. We come out in the evening if it needs a look.",
    "services": [
      "Rooms and hallways",
      "Whole house",
      "Exterior and masonry",
      "Spray finish on doors or units",
      "Wallpaper hanging",
      "Commercial or landlord"
    ],
    "questions": [
      {
        "label": "How many rooms?",
        "options": [
          "One room",
          "Two or three",
          "Whole house",
          "Outside only"
        ]
      },
      {
        "label": "What state is it in?",
        "options": [
          "Sound, just tired",
          "Some filling needed",
          "Cracks or damp patches",
          "Bare plaster or new build"
        ]
      }
    ],
    "button": "Get my fixed price",
    "thanks": "Thanks. We will come back with a fixed price and a start week."
  },
  "chat": {
    "assistantName": "Danny",
    "greeting": "Hi, Vellum Decorating here. What needs painting?",
    "answers": [
      {
        "ask": "How much to paint a room?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "room",
          "fee"
        ],
        "answer": "A standard Liverpool bedroom starts at 340 pounds including the preparation and two coats of trade paint. Hallways and stairs cost more because of the access, not because of the paint."
      },
      {
        "ask": "How long will it take?",
        "match": [
          "how long",
          "time",
          "days",
          "quick",
          "when",
          "finish",
          "start"
        ],
        "answer": "Most single rooms are three days: one on prep, one on ceilings and walls, one on woodwork and putting the room back. We tell you the finish day before we start and we do not bill you for running over it."
      },
      {
        "ask": "Will you cover my furniture?",
        "match": [
          "furniture",
          "cover",
          "mess",
          "dust",
          "protect",
          "carpet",
          "sheet"
        ],
        "answer": "Sheets go down and furniture comes to the middle before a tin is opened. Sockets and switch plates come off rather than get cut around, and the room goes back together on the last afternoon."
      },
      {
        "ask": "What paint do you use?",
        "match": [
          "paint",
          "brand",
          "dulux",
          "trade",
          "emulsion",
          "tin",
          "which"
        ],
        "answer": "Trade only: Tikkurila, Little Greene or Dulux Trade depending on the room. It covers in two coats instead of three and it does not flash when light moves across the wall."
      },
      {
        "ask": "Do you do outside work?",
        "match": [
          "outside",
          "exterior",
          "render",
          "masonry",
          "fascia",
          "weather",
          "wood"
        ],
        "answer": "Yes, render, masonry and woodwork from 950 pounds. We watch the forecast rather than the calendar, so an exterior job can shift a few days. The price does not."
      }
    ]
  },
  "reviews": {}
};
