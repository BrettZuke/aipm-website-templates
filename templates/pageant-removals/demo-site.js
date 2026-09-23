/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Pageant Removals: House and Office Removals in London",
    "metaDescription": "House and office removals across London. Every quote comes from a survey rather than a guess, the price is fixed in writing, and the crew who surveyed the job is the crew who does it."
  },
  "business": {
    "name": "Pageant Removals",
    "shortName": "Pageant",
    "town": "London",
    "country": "GB",
    "phone": "020 7946 0155",
    "description": "Pageant Removals, surveyed and fixed price house and office removals across London.",
    "services": [
      "Full house move",
      "Flat move",
      "Packing service",
      "Storage",
      "Office or commercial",
      "Single item or part load"
    ],
    "areasServed": [
      "London",
      "Islington",
      "Hackney",
      "Clerkenwell",
      "Camden",
      "Wandsworth",
      "Greenwich"
    ]
  },
  "form": {
    "heading": "Book a survey",
    "sub": "Twenty minutes, in person or over video, and you get a written fixed price the same day.",
    "services": [
      "Full house move",
      "Flat move",
      "Packing service",
      "Storage",
      "Office or commercial",
      "Single item or part load"
    ],
    "questions": [
      {
        "label": "How big is the move?",
        "options": [
          "Studio or one bed",
          "Two or three bed",
          "Four bed or more",
          "Office"
        ]
      },
      {
        "label": "When is it?",
        "options": [
          "Within two weeks",
          "This month",
          "Next month",
          "Date not fixed yet"
        ]
      }
    ],
    "button": "Book my survey",
    "thanks": "Thanks. We will come back today to book the survey, in person or over video, whichever suits."
  },
  "chat": {
    "assistantName": "Marcus",
    "greeting": "Hi, Pageant Removals. Where are you moving from and to?",
    "answers": [
      {
        "ask": "How much does a move cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "estimate"
        ],
        "answer": "We do not give a number without a survey, because a guess is how quotes change on the day. The survey takes twenty minutes in person or over video and you get a written fixed price the same day."
      },
      {
        "ask": "Do you pack as well?",
        "match": [
          "pack",
          "packing",
          "boxes",
          "materials",
          "wrap",
          "crate"
        ],
        "answer": "Either way. We drop crates, blankets and tape a week ahead if you want to do it yourself, or a team packs the whole house in a day. Fragile items are wrapped by us regardless."
      },
      {
        "ask": "What if the chain collapses?",
        "match": [
          "chain",
          "delay",
          "date",
          "postpone",
          "move date",
          "fall through",
          "collapse"
        ],
        "answer": "It happens most weeks, so we hold two vans back for exactly that. Storage is containerised and the first fortnight is free when a chain moves the date on you."
      },
      {
        "ask": "Third floor with no lift?",
        "match": [
          "stairs",
          "lift",
          "floor",
          "flat",
          "access",
          "narrow",
          "parking"
        ],
        "answer": "Surveyed before we quote, including stair width and the turn on the landing, then crewed for it. That is the difference between a fixed price and a surcharge on the day."
      },
      {
        "ask": "Do you do offices?",
        "match": [
          "office",
          "commercial",
          "business",
          "desk",
          "weekend",
          "company"
        ],
        "answer": "Yes, and almost always over a weekend or overnight so nobody loses a working day. Everything is labelled to a desk plan you sign off first, so people arrive to their own kit."
      }
    ]
  },
  "reviews": {}
};
