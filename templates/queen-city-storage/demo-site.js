/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Queen City Storage: Drive Up Self Storage in Charlotte",
    "metaDescription": "Drive up self storage in Charlotte off Independence Boulevard. Ground floor units, your own lock and gate code, month to month with no admin fee, and a free van on move in."
  },
  "business": {
    "name": "Queen City Storage",
    "shortName": "Queen City",
    "town": "Charlotte",
    "country": "US",
    "phone": "(704) 555-0151",
    "description": "Queen City Storage, drive up self storage units in Charlotte.",
    "services": [
      "5 by 10 unit",
      "10 by 15 unit",
      "10 by 20 unit",
      "Vehicle or trailer space",
      "Business storage",
      "Not sure what size"
    ],
    "areasServed": [
      "Charlotte",
      "Matthews",
      "Mint Hill",
      "Indian Trail",
      "Pineville",
      "Harrisburg",
      "Concord"
    ]
  },
  "form": {
    "heading": "Reserve a unit",
    "sub": "Tell us roughly what you are storing and we will tell you the smallest size that actually fits.",
    "services": [
      "5 by 10 unit",
      "10 by 15 unit",
      "10 by 20 unit",
      "Vehicle or trailer space",
      "Business storage",
      "Not sure what size"
    ],
    "questions": [
      {
        "label": "What are you storing?",
        "options": [
          "A room or two",
          "A whole house",
          "Business stock or tools",
          "A vehicle or trailer"
        ]
      },
      {
        "label": "How long for?",
        "options": [
          "A month or two",
          "Three to six months",
          "Over six months",
          "No idea yet"
        ]
      }
    ],
    "button": "Reserve a unit",
    "thanks": "Thanks. We will hold a unit for seven days at no charge while you decide."
  },
  "chat": {
    "assistantName": "Rochelle",
    "greeting": "Hi, Queen City Storage. What are you looking to put away?",
    "answers": [
      {
        "ask": "How much is a unit?",
        "match": [
          "price",
          "cost",
          "how much",
          "month",
          "rent",
          "rate",
          "cheap"
        ],
        "answer": "A 5 by 10 is 59 a month, a 10 by 15 is 129 and a 10 by 20 is 179. All month to month, all drive up, no admin fee and no exit fee."
      },
      {
        "ask": "What size do I need?",
        "match": [
          "size",
          "big",
          "fit",
          "small",
          "which",
          "house",
          "bedroom"
        ],
        "answer": "A 5 by 10 takes about a one bed flat, a 10 by 15 takes a two or three bed house, and a 10 by 20 takes a four bed or a work van. Tell us what you have and we will point you at the smallest one that genuinely fits."
      },
      {
        "ask": "When can I get in?",
        "match": [
          "access",
          "hours",
          "gate",
          "open",
          "time",
          "late",
          "24"
        ],
        "answer": "Six in the morning until ten at night, every day of the year, on your own gate code. Somebody is on site during office hours and the whole place is on camera the rest of the time."
      },
      {
        "ask": "Is there a contract?",
        "match": [
          "contract",
          "notice",
          "cancel",
          "commit",
          "term",
          "lock in",
          "leave"
        ],
        "answer": "Month to month, always. No admin fee to start and no exit fee to leave. The only ask is that you tell us before the month rolls rather than after it."
      },
      {
        "ask": "Do you really have a free van?",
        "match": [
          "van",
          "truck",
          "move",
          "free",
          "transport",
          "help",
          "load"
        ],
        "answer": "Our van and a driver for two hours, free, on any unit taken for three months or more. Terrence usually helps load it, which is not officially part of the deal but happens most weeks."
      }
    ]
  },
  "reviews": {}
};
