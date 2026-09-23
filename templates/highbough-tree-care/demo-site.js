/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Highbough Tree Care: Tree Surgeons in Manchester",
    "metaDescription": "Crown reductions, thinning, felling and stump grinding across Greater Manchester by qualified climbers working to BS 3998. Free written quotes."
  },
  "business": {
    "name": "Highbough Tree Care",
    "shortName": "Highbough",
    "town": "Manchester",
    "country": "GB",
    "phone": "0161 496 0418",
    "description": "Highbough Tree Care, tree surgeons for crown reduction, thinning, felling and stump grinding across Greater Manchester.",
    "services": [
      "Crown reduction",
      "Crown thinning",
      "Crown lift",
      "Deadwood removal",
      "Tree felling",
      "Stump grinding",
      "Not sure yet"
    ],
    "areasServed": [
      "Manchester",
      "Didsbury",
      "Chorlton",
      "Prestwich",
      "Sale",
      "Stockport",
      "Salford",
      "Altrincham"
    ]
  },
  "form": {
    "heading": "Get a free tree quote",
    "sub": "Tell us about the tree. A climber visits and sends a written quote within two days.",
    "services": [
      "Crown reduction",
      "Crown thinning",
      "Crown lift",
      "Deadwood removal",
      "Tree felling",
      "Stump grinding",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How tall is the tree?",
        "options": [
          "Under 5 m",
          "5 to 10 m",
          "10 to 20 m",
          "Over 20 m"
        ]
      },
      {
        "label": "Can we get a chipper to it?",
        "options": [
          "Yes, from the drive",
          "Only through the house",
          "Not sure"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. We will ring you to arrange a visit to the tree."
  },
  "chat": {
    "assistantName": "Megan",
    "greeting": "Hi, Highbough here. What is the tree doing that you would like fixed?",
    "answers": [
      {
        "ask": "How much is a crown reduction?",
        "match": [
          "cost",
          "price",
          "how much",
          "reduce",
          "reduction"
        ],
        "answer": "Crown reductions start at 450 pounds for a garden tree, thinning at 380 and a crown lift at 280. We give a written quote after seeing the tree."
      },
      {
        "ask": "How much to fell a tree?",
        "match": [
          "fell",
          "remove",
          "take down",
          "cut down"
        ],
        "answer": "Felling starts at 650 pounds, taken down in sections where needed, and stump grinding from 120."
      },
      {
        "ask": "Do I need permission?",
        "match": [
          "permission",
          "tpo",
          "conservation",
          "council",
          "protected"
        ],
        "answer": "Only with a Tree Preservation Order or in a conservation area. We check the council map and do the paperwork for you."
      },
      {
        "ask": "Can you work in spring?",
        "match": [
          "nest",
          "bird",
          "spring",
          "summer",
          "season"
        ],
        "answer": "Yes. From March to August we check for active nests first, and wait if we find one."
      },
      {
        "ask": "Are you insured?",
        "match": [
          "insured",
          "insurance",
          "qualified",
          "nptc"
        ],
        "answer": "Yes, with 5 million pounds of public liability cover, and every climber holds NPTC certificates."
      }
    ]
  },
  "reviews": {}
};
