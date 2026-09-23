/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Cedarline Fence and Deck: Fences, Decks and Pergolas in Denver",
    "metaDescription": "Cedar fences, composite and hardwood decks, and pergolas across Denver. Built by our own carpenters, permits handled, and checked after the first winter."
  },
  "business": {
    "name": "Cedarline Fence and Deck",
    "shortName": "Cedarline",
    "town": "Denver",
    "country": "US",
    "phone": "(720) 555-0143",
    "description": "Cedarline Fence and Deck, fences, decks and pergolas across the Denver metro.",
    "services": [
      "New fence",
      "New deck",
      "Pergola or covered patio",
      "Gate or fence repair",
      "Stain and seal",
      "Not sure yet"
    ],
    "areasServed": [
      "Denver",
      "Aurora",
      "Lakewood",
      "Littleton",
      "Highlands Ranch",
      "Arvada",
      "Westminster"
    ]
  },
  "form": {
    "heading": "Get a free quote",
    "sub": "What you are planning and roughly how big. We come out to measure and send a written price within the week.",
    "services": [
      "New fence",
      "New deck",
      "Pergola or covered patio",
      "Gate or fence repair",
      "Stain and seal",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Roughly how big?",
        "options": [
          "Under 100 feet of fence",
          "100 to 250 feet",
          "Small deck",
          "Large deck or full yard"
        ]
      },
      {
        "label": "Are you in an HOA?",
        "options": [
          "Yes",
          "No",
          "Not sure"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. We will call to book a time to measure, usually this week, and send the written price after."
  },
  "chat": {
    "assistantName": "Dana",
    "greeting": "Hi, Cedarline here. Are you thinking about a fence, a deck, or both?",
    "answers": [
      {
        "ask": "How much is a new fence?",
        "match": [
          "fence",
          "price",
          "cost",
          "how much",
          "per foot",
          "quote",
          "cedar"
        ],
        "answer": "A six foot cedar privacy fence runs 42 to 58 dollars a foot installed, depending on the posts, the gates and how much old fence comes out. The written price includes the permit and haul away."
      },
      {
        "ask": "How much is a deck?",
        "match": [
          "deck",
          "composite",
          "trex",
          "timbertech",
          "ipe",
          "wood deck"
        ],
        "answer": "It depends on the size, the height and the boards. Most composite decks we build land between 18,000 and 45,000 dollars. We price composite and hardwood side by side so you can compare."
      },
      {
        "ask": "Do you handle permits?",
        "match": [
          "permit",
          "city",
          "code",
          "inspection",
          "plans",
          "drawings"
        ],
        "answer": "Yes. We draw the plans, pull the permit and book the inspections. Denver permits usually take two to four weeks, and the cost is included in your written price."
      },
      {
        "ask": "Do you work with HOAs?",
        "match": [
          "hoa",
          "homeowners association",
          "approval",
          "association",
          "covenant"
        ],
        "answer": "All the time. We prepare the drawings and the materials list your HOA asks for and wait for their approval before we start."
      },
      {
        "ask": "Is there a warranty?",
        "match": [
          "warranty",
          "guarantee",
          "winter",
          "frost",
          "heave",
          "lean"
        ],
        "answer": "Five years on our workmanship, the manufacturer's warranty on composite, and a free check after the first winter on every fence and deck we build."
      }
    ]
  },
  "reviews": {}
};
