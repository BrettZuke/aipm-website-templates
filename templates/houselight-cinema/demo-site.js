/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Houselight: Home Cinema and Smart Home Installers in Glasgow",
    "metaDescription": "Home cinemas, media rooms, smart lighting and multi-room music across Glasgow and the west of Scotland. Designed, wired and calibrated by one team, with a free design visit."
  },
  "business": {
    "name": "Houselight",
    "shortName": "Houselight",
    "town": "Glasgow",
    "country": "GB",
    "phone": "0141 496 0627",
    "description": "Houselight, home cinema and smart home installers in Glasgow, designing, wiring and calibrating cinema rooms, media rooms, smart lighting and multi-room music.",
    "services": [
      "Home cinema",
      "Media room",
      "Smart home",
      "TV mounting",
      "Multi-room music",
      "Not sure yet"
    ],
    "areasServed": [
      "Glasgow",
      "Bearsden",
      "Milngavie",
      "Newton Mearns",
      "Giffnock",
      "Bothwell",
      "Kilmacolm",
      "Helensburgh"
    ]
  },
  "form": {
    "heading": "Book a free design visit",
    "sub": "Tell us about the room. We measure, listen to it, and send drawings with a fixed price.",
    "services": [
      "Home cinema",
      "Media room",
      "Smart home",
      "TV mounting",
      "Multi-room music",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Is it a new build or renovation?",
        "options": [
          "New build",
          "Renovation",
          "Neither, it is finished",
          "Not sure"
        ]
      },
      {
        "label": "When would you like it done?",
        "options": [
          "As soon as possible",
          "In the next 3 months",
          "Later this year",
          "Just looking"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thanks. We will ring you to arrange your design visit."
  },
  "chat": {
    "assistantName": "Ross",
    "greeting": "Hi, Houselight here. Is it a cinema room, a smart home, or something smaller like a TV on the wall?",
    "answers": [
      {
        "ask": "How much is a cinema room?",
        "match": [
          "cost",
          "price",
          "how much",
          "cinema",
          "budget"
        ],
        "answer": "Most dedicated cinema rooms land between 18,000 and 45,000 pounds, and media rooms in a lounge start at about 7,500. The designer on the page prices your room."
      },
      {
        "ask": "How much is a smart home?",
        "match": [
          "smart",
          "lighting",
          "lights",
          "heating",
          "blinds",
          "keypad"
        ],
        "answer": "Smart lighting and heating for a typical house starts at about 4,500 pounds, with keypads in each room and one app on your phone."
      },
      {
        "ask": "Can you just mount a TV?",
        "match": [
          "tv",
          "mount",
          "wall",
          "soundbar",
          "cables"
        ],
        "answer": "Yes. Wall mounting with every cable hidden starts at 450 pounds, and we can add a soundbar or speakers."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "long",
          "weeks",
          "time",
          "when"
        ],
        "answer": "A cinema room is usually two to four weeks on site, after the cables go in at first fix. A smart home fit is often a few days."
      },
      {
        "ask": "What if it breaks?",
        "match": [
          "warranty",
          "break",
          "broken",
          "support",
          "fix"
        ],
        "answer": "Everything we fit is covered for five years, and we fix most problems remotely the same day."
      }
    ]
  },
  "reviews": {}
};
