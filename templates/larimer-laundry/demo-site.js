/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Larimer Laundry: Laundromat and Wash and Fold in Denver",
    "metaDescription": "A Denver laundromat with fifty serviced machines, change that never runs out and an attendant until nine. Self service, wash and fold, and pickup across Five Points, RiNo and Cole."
  },
  "business": {
    "name": "Larimer Laundry",
    "shortName": "Larimer",
    "town": "Denver",
    "country": "US",
    "phone": "(303) 555-0188",
    "description": "Larimer Laundry, a 24 hour laundromat with wash and fold and pickup across Denver.",
    "services": [
      "Self service wash",
      "Wash and fold",
      "Pickup and delivery",
      "Commercial account",
      "Comforters and bedding",
      "Dry clean drop off"
    ],
    "areasServed": [
      "Denver",
      "Five Points",
      "RiNo",
      "Cole",
      "Curtis Park",
      "Whittier",
      "City Park"
    ]
  },
  "form": {
    "heading": "Book a pickup",
    "sub": "Tuesday and Friday across Five Points, RiNo and Cole. Bagged by nine, back to you by five the next day.",
    "services": [
      "Self service wash",
      "Wash and fold",
      "Pickup and delivery",
      "Commercial account",
      "Comforters and bedding",
      "Dry clean drop off"
    ],
    "questions": [
      {
        "label": "Roughly how much?",
        "options": [
          "One bag",
          "Two or three bags",
          "A whole household",
          "Commercial volume"
        ]
      },
      {
        "label": "When suits?",
        "options": [
          "This Tuesday",
          "This Friday",
          "Next week",
          "Recurring weekly"
        ]
      }
    ],
    "button": "Book a pickup",
    "thanks": "Thanks. We will confirm the pickup window and what it will weigh in at."
  },
  "chat": {
    "assistantName": "Teresa",
    "greeting": "Hi, Larimer Laundry. Dropping off or using the machines?",
    "answers": [
      {
        "ask": "How much is wash and fold?",
        "match": [
          "price",
          "cost",
          "how much",
          "fold",
          "pound",
          "lb",
          "charge"
        ],
        "answer": "One sixty five a pound with a ten pound minimum, and one ninety five a pound if we pick it up and bring it back. Everything is washed separately from other customers."
      },
      {
        "ask": "Are you open now?",
        "match": [
          "open",
          "hours",
          "late",
          "night",
          "time",
          "close",
          "24"
        ],
        "answer": "The machines are available twenty four hours with a card entry after nine. There is an attendant on the floor from seven in the morning until nine at night, and the counter takes drop offs until eight."
      },
      {
        "ask": "Do you take cards?",
        "match": [
          "card",
          "cash",
          "coin",
          "change",
          "tap",
          "pay",
          "quarters"
        ],
        "answer": "Every machine takes tap, card or coin, and the change machine is filled twice a day. If a machine takes your money the attendant refunds it on the spot rather than handing you a form."
      },
      {
        "ask": "When is it quiet?",
        "match": [
          "quiet",
          "busy",
          "when",
          "wait",
          "queue",
          "best time",
          "peak"
        ],
        "answer": "Before ten in the morning or after eight at night on any day. Sunday afternoon is the busiest three hours of the week and Monday evening is a close second."
      },
      {
        "ask": "Can you do a comforter?",
        "match": [
          "comforter",
          "duvet",
          "bedding",
          "big",
          "large",
          "blanket",
          "quilt"
        ],
        "answer": "Yes, the 60 pound machines take a king comforter easily and it is the one thing genuinely worth coming in for rather than fighting a home machine. Same price per pound on wash and fold."
      }
    ]
  },
  "reviews": {}
};
