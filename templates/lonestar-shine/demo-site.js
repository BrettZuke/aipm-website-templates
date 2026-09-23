/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Lone Star Shine: Express Car Wash in Austin",
    "metaDescription": "Express car wash in South Austin. Closed cell foam instead of bristles, spot free reverse osmosis rinse, free vacuums, and unlimited plans from twenty four dollars a month."
  },
  "business": {
    "name": "Lone Star Shine",
    "shortName": "Lone Star",
    "town": "Austin",
    "country": "US",
    "phone": "(512) 555-0164",
    "description": "Lone Star Shine, express car wash and unlimited plans in South Austin.",
    "services": [
      "Express wash",
      "Shine",
      "Shine Plus",
      "Unlimited plan",
      "Fleet account",
      "Interior detail add on"
    ],
    "areasServed": [
      "Austin",
      "South Lamar",
      "Riverside",
      "Bouldin Creek",
      "Travis Heights",
      "Sunset Valley",
      "Oak Hill"
    ]
  },
  "form": {
    "heading": "Start unlimited",
    "sub": "Plate number and which plan. Active by the time you reach the entry lane.",
    "services": [
      "Express wash",
      "Shine",
      "Shine Plus",
      "Unlimited plan",
      "Fleet account",
      "Interior detail add on"
    ],
    "questions": [
      {
        "label": "Which plan?",
        "options": [
          "Express unlimited",
          "Shine unlimited",
          "Shine Plus unlimited",
          "Just pay per wash"
        ]
      },
      {
        "label": "How many vehicles?",
        "options": [
          "One",
          "Two",
          "Three or more",
          "Company fleet"
        ]
      }
    ],
    "button": "Start unlimited",
    "thanks": "Thanks. Your plate is on the plan and the gate will read it next time you pull in."
  },
  "chat": {
    "assistantName": "Cody",
    "greeting": "Hi, Lone Star Shine. Washing today or asking about unlimited?",
    "answers": [
      {
        "ask": "Will it scratch my paint?",
        "match": [
          "scratch",
          "swirl",
          "paint",
          "damage",
          "safe",
          "brush",
          "bristle"
        ],
        "answer": "Not with closed cell foam. The old bristle tunnels trapped grit between the fibres and dragged it across the panel, which is where the reputation came from. Foam sheds grit with the water."
      },
      {
        "ask": "How much is unlimited?",
        "match": [
          "price",
          "cost",
          "unlimited",
          "month",
          "plan",
          "how much",
          "subscription"
        ],
        "answer": "Twenty four a month for Express, thirty four for Shine and forty four for Shine Plus. A single Shine is eighteen, so past two washes a month the plan wins. Below that we would rather you paid per wash."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "time",
          "quick",
          "minutes",
          "wait",
          "queue",
          "busy"
        ],
        "answer": "Four minutes through the tunnel on Express and six on Shine Plus, plus as long as you want on the vacuums. Peak is four to six on weekdays and Sunday morning is the quietest hour of the week."
      },
      {
        "ask": "Can I bring a truck?",
        "match": [
          "truck",
          "lifted",
          "suv",
          "van",
          "big",
          "height",
          "rack",
          "dually"
        ],
        "answer": "Up to eighty four inches of height and any dually. Roof racks, ladder racks and aftermarket spoilers need the attendant to look first, which is a thirty second conversation at the entry lane."
      },
      {
        "ask": "Are the vacuums free?",
        "match": [
          "vacuum",
          "free",
          "interior",
          "clean inside",
          "hoover"
        ],
        "answer": "Free with every wash including Express, and free any time you pull in on an unlimited plan. There is no time limit on them either, which is the part other places quietly enforce."
      }
    ]
  },
  "reviews": {}
};
