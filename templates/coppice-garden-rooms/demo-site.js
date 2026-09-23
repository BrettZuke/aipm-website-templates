/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Coppice Garden Rooms: Garden Offices and Studios in Nottingham",
    "metaDescription": "Insulated garden offices, studios and log cabins across Nottingham, designed around your garden and built by our own joiners in about ten days."
  },
  "business": {
    "name": "Coppice Garden Rooms",
    "shortName": "Coppice",
    "town": "Nottingham",
    "country": "GB",
    "phone": "0115 496 0128",
    "description": "Coppice Garden Rooms, insulated garden offices, studios and cabins across Nottingham.",
    "services": [
      "Garden office",
      "Studio or gym",
      "Garden room",
      "Log cabin",
      "Summer house",
      "Not sure yet"
    ],
    "areasServed": [
      "Nottingham",
      "West Bridgford",
      "Beeston",
      "Wollaton",
      "Mapperley",
      "Arnold",
      "Radcliffe on Trent"
    ]
  },
  "form": {
    "heading": "Book a garden survey",
    "sub": "What you would use it for. We measure up and check the planning rules for your house.",
    "services": [
      "Garden office",
      "Studio or gym",
      "Garden room",
      "Log cabin",
      "Summer house",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What size are you thinking?",
        "options": [
          "Up to 3 by 3 m",
          "About 4 by 3 m",
          "About 5 by 3 m",
          "Bigger"
        ]
      },
      {
        "label": "What will you use it for?",
        "options": [
          "Working from home",
          "Gym or studio",
          "Guest space",
          "Hobby or storage"
        ]
      }
    ],
    "button": "Book my survey",
    "thanks": "Thanks. We will ring to book your garden survey, usually within two working days."
  },
  "chat": {
    "assistantName": "Beth",
    "greeting": "Hi, Coppice here. Are you after a garden office, a studio, or something else?",
    "answers": [
      {
        "ask": "How much is a garden room?",
        "match": [
          "cost",
          "price",
          "how much",
          "quote"
        ],
        "answer": "Our Studio at 3 by 2.5 metres starts from 16,500 pounds fitted, the Office at 4 by 3 from 21,500 and the Garden Room at 5 by 3 from 26,500, insulated, wired and finished inside."
      },
      {
        "ask": "Do I need planning permission?",
        "match": [
          "planning",
          "permission",
          "council",
          "permitted"
        ],
        "answer": "Usually not. Up to 2.5 metres tall within 2 metres of a boundary, behind the house and covering less than half the garden, it falls under permitted development. We check your house before quoting."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "days",
          "weeks",
          "time"
        ],
        "answer": "About ten days from the base going in to handing you the keys, weather permitting, and usually six to eight weeks from order to start."
      },
      {
        "ask": "Is it warm in winter?",
        "match": [
          "warm",
          "winter",
          "cold",
          "insulated",
          "insulation",
          "heater"
        ],
        "answer": "Yes. 100 mm of PIR insulation in the walls, floor and roof, with double glazed doors, so a small panel heater keeps it warm all year."
      },
      {
        "ask": "Do you need concrete?",
        "match": [
          "base",
          "concrete",
          "foundation",
          "screws"
        ],
        "answer": "No. We use ground screws twisted into the soil in a morning, so there is no concrete, no lorry and nothing to dig out later."
      }
    ]
  },
  "reviews": {}
};
