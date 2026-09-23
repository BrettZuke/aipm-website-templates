/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Lindfield Kitchens and Bathrooms: Kitchen and Bathroom Fitters in London",
    "metaDescription": "Kitchens and bathrooms across south and west London, designed, built and fitted by one firm. Fixed price once the drawings are signed, one project manager throughout."
  },
  "business": {
    "name": "Lindfield Kitchens and Bathrooms",
    "shortName": "Lindfield",
    "town": "London",
    "country": "GB",
    "phone": "020 7946 0183",
    "description": "Lindfield Kitchens and Bathrooms, kitchen and bathroom design and fitting across south and west London.",
    "services": [
      "New kitchen",
      "New bathroom",
      "En suite",
      "Shower room or cloakroom",
      "Kitchen and bathroom together",
      "Not sure yet"
    ],
    "areasServed": [
      "Wandsworth",
      "Clapham",
      "Putney",
      "Fulham",
      "Battersea",
      "Wimbledon",
      "Richmond"
    ]
  },
  "form": {
    "heading": "Book a free design visit",
    "sub": "Which room, and a rough idea of when. We come out to measure within the week.",
    "services": [
      "New kitchen",
      "New bathroom",
      "En suite",
      "Shower room or cloakroom",
      "Kitchen and bathroom together",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "When are you hoping to start?",
        "options": [
          "Within three months",
          "Three to six months",
          "Later this year",
          "Just planning"
        ]
      },
      {
        "label": "Rough budget?",
        "options": [
          "Under 10,000 pounds",
          "10,000 to 20,000",
          "20,000 to 40,000",
          "Over 40,000"
        ]
      }
    ],
    "button": "Book my design visit",
    "thanks": "Thanks. We will call to book the design visit, usually within the week, and bring samples so you can see the finishes in your own light."
  },
  "chat": {
    "assistantName": "Clare",
    "greeting": "Hi, Lindfield Kitchens here. Are you planning a kitchen, a bathroom, or both?",
    "answers": [
      {
        "ask": "How much does a new kitchen cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "budget",
          "kitchen",
          "quote"
        ],
        "answer": "Our kitchens start around 18,500 pounds fitted for a shaker kitchen and 22,000 for handleless, including the strip out and making good. The design visit is free and your price is fixed once the drawings are signed."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "weeks",
          "time",
          "duration",
          "start",
          "finish",
          "schedule"
        ],
        "answer": "Most kitchens take three weeks on site and most bathrooms two, from strip out to handover. You get the week by week plan before we start, so you know which days you will be without water or a cooker."
      },
      {
        "ask": "Do you use subcontractors?",
        "match": [
          "subcontract",
          "fitters",
          "own team",
          "trades",
          "plumber",
          "electrician",
          "who"
        ],
        "answer": "No. Our own fitters, plumbers, electricians and tilers do the work, and one project manager is your contact from the first measure to the final clean."
      },
      {
        "ask": "What does a bathroom cost?",
        "match": [
          "bathroom",
          "en suite",
          "ensuite",
          "shower",
          "toilet",
          "bath"
        ],
        "answer": "A family bathroom starts around 9,500 pounds fitted and a master en suite around 14,000. Shower rooms and cloakrooms start at 5,800. Tiles and fittings are chosen at the design stage so the price includes them."
      },
      {
        "ask": "Do you give a guarantee?",
        "match": [
          "guarantee",
          "warranty",
          "insured",
          "insurance",
          "trustmark",
          "snag"
        ],
        "answer": "Yes. Our workmanship is guaranteed for ten years, appliances and fittings carry their makers' warranties, and every guarantee and manual is handed over in one folder on the last day."
      }
    ]
  },
  "reviews": {}
};
