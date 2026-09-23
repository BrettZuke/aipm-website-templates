/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Northwind Snow: Snow Removal and Salting in Minneapolis",
    "metaDescription": "Snow removal across the Twin Cities. Seasonal contracts that trigger at two inches, the same route order every storm, salt before the refreeze, and timestamped photos on every push."
  },
  "business": {
    "name": "Northwind Snow",
    "shortName": "Northwind",
    "town": "Minneapolis",
    "country": "US",
    "phone": "(612) 555-0119",
    "description": "Northwind Snow, residential and commercial snow removal and salting across the Twin Cities.",
    "services": [
      "Residential driveway",
      "Walks and entries",
      "Salting and anti-icing",
      "Commercial lot",
      "Roof and egress",
      "Relocation and hauling"
    ],
    "areasServed": [
      "Minneapolis",
      "St Paul",
      "Edina",
      "Bloomington",
      "Plymouth",
      "Maple Grove",
      "Eagan"
    ]
  },
  "form": {
    "heading": "Get on the route",
    "sub": "Address, and whether it is a driveway or a lot. Residential routes fill by the first week of November.",
    "services": [
      "Residential driveway",
      "Walks and entries",
      "Salting and anti-icing",
      "Commercial lot",
      "Roof and egress",
      "Relocation and hauling"
    ],
    "questions": [
      {
        "label": "What are we clearing?",
        "options": [
          "Single driveway",
          "Driveway and walks",
          "Small commercial lot",
          "Multi site"
        ]
      },
      {
        "label": "Seasonal or per push?",
        "options": [
          "Seasonal contract",
          "Per push",
          "Not sure yet",
          "Just pricing it"
        ]
      }
    ],
    "button": "Get on the route",
    "thanks": "Thanks. We will confirm whether your street still has room on the route and send a number."
  },
  "chat": {
    "assistantName": "Hollis",
    "greeting": "Hi, Northwind Snow. Driveway or a commercial lot?",
    "answers": [
      {
        "ask": "What triggers a push?",
        "match": [
          "trigger",
          "inch",
          "when",
          "start",
          "snow",
          "push",
          "come"
        ],
        "answer": "Two inches on a seasonal contract, measured at our gauge, and the route starts without anyone calling. Commercial lots are often set at one inch where there is heavy foot traffic."
      },
      {
        "ask": "Seasonal or per push?",
        "match": [
          "seasonal",
          "contract",
          "per push",
          "price",
          "cost",
          "how much",
          "cheaper"
        ],
        "answer": "Seasonal if you want one fixed number and no decisions at four in the morning. Per push if you only really need us for the big ones. Tell us the address and we will say honestly which fits."
      },
      {
        "ask": "How soon after it stops?",
        "match": [
          "how soon",
          "fast",
          "quick",
          "finish",
          "done",
          "hours",
          "late"
        ],
        "answer": "Residential routes finish within six hours of the snow stopping and commercial lots before you open. In a named storm we run continuously and come back, because clearing once in the middle of twelve inches is not clearing."
      },
      {
        "ask": "Do you salt too?",
        "match": [
          "salt",
          "ice",
          "brine",
          "slip",
          "refreeze",
          "grit",
          "treat"
        ],
        "answer": "Yes, and it matters more than the plowing. The refreeze after a sunny afternoon is what puts people on the ground. Salt is included on commercial contracts and optional residentially."
      },
      {
        "ask": "What about the plow ridge?",
        "match": [
          "ridge",
          "city plow",
          "end of drive",
          "berm",
          "apron",
          "blocked"
        ],
        "answer": "Part of the job, never an extra. The ridge the city plow throws back across the end of your drive gets cleared on the same visit, which is the difference between a usable driveway and a blocked one."
      }
    ]
  },
  "reviews": {}
};
