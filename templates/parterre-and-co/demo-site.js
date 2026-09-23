/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Parterre and Co: Garden Design, Build and Artificial Grass in London",
    "metaDescription": "London garden designers who draw every garden first, then build it with our own team. Terraces, planting, garden rooms and artificial grass."
  },
  "business": {
    "name": "Parterre and Co",
    "shortName": "Parterre and Co",
    "town": "London",
    "country": "GB",
    "phone": "020 7946 0283",
    "description": "Parterre and Co, garden design and build, planting plans and artificial grass across London.",
    "services": [
      "Garden design",
      "Design and build",
      "Artificial grass",
      "Planting plan",
      "Garden room",
      "Not sure yet"
    ],
    "areasServed": [
      "Clapham",
      "Battersea",
      "Wandsworth",
      "Islington",
      "Highgate",
      "Crouch End",
      "Hackney",
      "Walthamstow"
    ]
  },
  "form": {
    "heading": "Book a design visit",
    "sub": "Tell us about your garden. A designer visits for an hour, free, and sends a fee proposal the same week.",
    "services": [
      "Garden design",
      "Design and build",
      "Artificial grass",
      "Planting plan",
      "Garden room",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How big is the garden?",
        "options": [
          "Courtyard",
          "Up to 10 m long",
          "10 to 20 m long",
          "Bigger"
        ]
      },
      {
        "label": "When would you like it done?",
        "options": [
          "This spring",
          "This year",
          "Just planning",
          "Not sure"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thank you. The studio will ring you to book your design visit."
  },
  "chat": {
    "assistantName": "Imogen",
    "greeting": "Hello, this is Parterre and Co. Is it a whole new garden, or artificial grass you are thinking about?",
    "answers": [
      {
        "ask": "How much is a garden design?",
        "match": [
          "design",
          "fee",
          "plan",
          "designer"
        ],
        "answer": "Our design fee is 1,450 pounds for most London gardens, taken off the build if we build it for you."
      },
      {
        "ask": "How much does a whole garden cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "build",
          "budget"
        ],
        "answer": "Most of our London builds land between 25,000 and 60,000 pounds. The garden on our plan came to about 46,500."
      },
      {
        "ask": "How much is artificial grass?",
        "match": [
          "artificial",
          "fake",
          "grass",
          "turf",
          "lawn"
        ],
        "answer": "Fitted on our drained base, from 65 pounds a square metre for Mayfair up to 79 for Hampstead. We bring samples to the visit."
      },
      {
        "ask": "How long does a build take?",
        "match": [
          "long",
          "weeks",
          "time",
          "when"
        ],
        "answer": "Six to ten weeks for most gardens, run by one project manager you can call."
      },
      {
        "ask": "Do we need planning permission?",
        "match": [
          "planning",
          "permission",
          "council",
          "garden room",
          "studio"
        ],
        "answer": "Rarely. A garden room under 2.5 m tall near a boundary is normally permitted development, and we check conservation areas first."
      }
    ]
  },
  "reviews": {}
};
