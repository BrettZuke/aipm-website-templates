/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Shadewright Tint: Window Tinting in Las Vegas",
    "metaDescription": "Ceramic window tint for cars, homes and offices across Las Vegas. Nevada legal, fitted in a dust controlled bay, with a lifetime warranty."
  },
  "business": {
    "name": "Shadewright Tint",
    "shortName": "Shadewright",
    "town": "Las Vegas",
    "country": "US",
    "phone": "(702) 555-0139",
    "description": "Shadewright Tint, ceramic window tinting for cars, homes and offices across Las Vegas.",
    "services": [
      "Car window tint",
      "Windshield strip",
      "Tint removal",
      "Home window film",
      "Office or commercial film",
      "Paint protection film"
    ],
    "areasServed": [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "North Las Vegas",
      "Spring Valley",
      "Enterprise",
      "Paradise"
    ]
  },
  "form": {
    "heading": "Book a tint",
    "sub": "Make, model and year, and which film you are after. We send the exact price and the next free slot.",
    "services": [
      "Car window tint",
      "Windshield strip",
      "Tint removal",
      "Home window film",
      "Office or commercial film",
      "Paint protection film"
    ],
    "questions": [
      {
        "label": "Which film?",
        "options": [
          "Carbon",
          "Ceramic",
          "Ceramic IR",
          "Not sure, advise me"
        ]
      },
      {
        "label": "What is it going on?",
        "options": [
          "Car or truck",
          "SUV",
          "Home",
          "Office"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will text you the exact price and the next free slot, usually this week."
  },
  "chat": {
    "assistantName": "Marcus",
    "greeting": "Hi, Shadewright Tint here. What are we tinting, a car, a home or an office?",
    "answers": [
      {
        "ask": "How much is car tint?",
        "match": [
          "price",
          "cost",
          "how much",
          "car",
          "sedan",
          "truck",
          "suv",
          "quote"
        ],
        "answer": "For a standard sedan, all side and rear windows: carbon is 249 dollars, ceramic 399 and ceramic IR 549, fitted with a lifetime warranty. Trucks and SUVs are priced on the phone."
      },
      {
        "ask": "How dark can I legally go?",
        "match": [
          "legal",
          "law",
          "dark",
          "percent",
          "limit",
          "ticket",
          "front windows"
        ],
        "answer": "In Nevada the front side windows must let in more than 35 percent of light, and the rear side and back windows can be as dark as you like. We only fit fronts that pass and give you a certificate for the glovebox."
      },
      {
        "ask": "Why ceramic?",
        "match": [
          "ceramic",
          "carbon",
          "difference",
          "heat",
          "ir",
          "infrared",
          "hot"
        ],
        "answer": "Ceramic blocks far more of the infrared heat you actually feel without having to be darker, and it will not interfere with your phone, GPS or key fob. In a Las Vegas summer that difference is the whole point."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "time",
          "wait",
          "hours",
          "today"
        ],
        "answer": "About two hours for most cars and three for a large SUV. Wait in the lounge or drop the car and we will text you when it is ready."
      },
      {
        "ask": "Do you do homes and offices?",
        "match": [
          "home",
          "house",
          "office",
          "commercial",
          "building",
          "glass",
          "privacy"
        ],
        "answer": "Yes. Heat and glare film cuts cooling bills on west and south facing glass, and privacy film for offices and bathrooms. We measure on site and most homes are done in a day."
      }
    ]
  },
  "reviews": {}
};
