/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Cactus Pool Co: Weekly Pool Service in Phoenix and Scottsdale",
    "metaDescription": "Weekly pool service across Phoenix, Scottsdale and the East Valley. Seven readings logged and emailed every visit, chemicals included, equipment serviced before it fails, and no contract."
  },
  "business": {
    "name": "Cactus Pool Co",
    "shortName": "Cactus",
    "town": "Phoenix",
    "country": "US",
    "phone": "(602) 555-0142",
    "description": "Cactus Pool Co, weekly pool service and water chemistry across the Phoenix valley.",
    "services": [
      "Full service weekly",
      "Chemicals only",
      "Green pool recovery",
      "Filter clean",
      "Salt cell service",
      "Equipment repair"
    ],
    "areasServed": [
      "Phoenix",
      "Scottsdale",
      "Tempe",
      "Mesa",
      "Chandler",
      "Gilbert",
      "Paradise Valley"
    ]
  },
  "form": {
    "heading": "Get a quote",
    "sub": "A photo of the water and the rough size is enough. Same day answer with the day your street runs.",
    "services": [
      "Full service weekly",
      "Chemicals only",
      "Green pool recovery",
      "Filter clean",
      "Salt cell service",
      "Equipment repair"
    ],
    "questions": [
      {
        "label": "How big is the pool?",
        "options": [
          "Under 10,000 gallons",
          "10 to 20,000",
          "Over 20,000",
          "No idea"
        ]
      },
      {
        "label": "What state is the water in?",
        "options": [
          "Clear and balanced",
          "Cloudy",
          "Green",
          "Just moved in"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. We will come back today with a price and the day of the week your street runs."
  },
  "chat": {
    "assistantName": "Dave",
    "greeting": "Hi, Cactus Pool Co. Whereabouts in the valley are you?",
    "answers": [
      {
        "ask": "How much is weekly service?",
        "match": [
          "price",
          "cost",
          "how much",
          "weekly",
          "month",
          "charge",
          "rate"
        ],
        "answer": "Full service is 165 a month for a standard residential pool under twenty thousand gallons, chemicals included. Chemicals only is 95 and Full Service Plus with the heater and salt cell is 245."
      },
      {
        "ask": "Are chemicals included?",
        "match": [
          "chemical",
          "chlorine",
          "acid",
          "salt",
          "included",
          "extra",
          "bill"
        ],
        "answer": "Yes, in every plan. Chlorine, acid, stabiliser, salt and phosphate remover are all in the price. That is the line most quotes leave out and then bill you for in July."
      },
      {
        "ask": "My pool is green, can you help?",
        "match": [
          "green",
          "algae",
          "cloudy",
          "murky",
          "swamp",
          "clear it",
          "recovery"
        ],
        "answer": "Yes, but as a separate green pool recovery first, quoted on its own. Putting a green pool straight onto a weekly route is how a service ends up blamed for something it inherited."
      },
      {
        "ask": "Do you do salt pools?",
        "match": [
          "salt",
          "cell",
          "chlorinator",
          "generator",
          "saltwater"
        ],
        "answer": "Most of the route is salt. A salt system makes chlorine rather than replacing it, so the same seven readings still matter, and the cell is serviced as part of Full Service Plus."
      },
      {
        "ask": "Am I locked into a contract?",
        "match": [
          "contract",
          "cancel",
          "lock",
          "commit",
          "term",
          "quit",
          "notice"
        ],
        "answer": "Nothing to sign and nothing to cancel. Tell us to stop and we stop at the end of that month. We would rather earn the next visit than trap you into it."
      }
    ]
  },
  "reviews": {}
};
