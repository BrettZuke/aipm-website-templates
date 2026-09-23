/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Cantor Garage Doors: Garage Door Repair in Dallas",
    "metaDescription": "Garage door spring and opener repairs the same day across Dallas, and new doors fitted in a morning. Priced before we start, lifetime spring warranty."
  },
  "business": {
    "name": "Cantor Garage Doors",
    "shortName": "Cantor",
    "town": "Dallas",
    "country": "US",
    "phone": "(214) 555-0164",
    "description": "Cantor Garage Doors, same day garage door repairs and new doors across Dallas.",
    "services": [
      "Broken spring",
      "Opener repair or replacement",
      "Door off track",
      "New garage door",
      "Tune up",
      "Commercial door"
    ],
    "areasServed": [
      "Dallas",
      "Plano",
      "Frisco",
      "Richardson",
      "Irving",
      "Garland",
      "Arlington"
    ]
  },
  "form": {
    "heading": "Book a repair",
    "sub": "What the door is doing and whether the car is stuck inside. Springs and openers are usually fixed the same day.",
    "services": [
      "Broken spring",
      "Opener repair or replacement",
      "Door off track",
      "New garage door",
      "Tune up",
      "Commercial door"
    ],
    "questions": [
      {
        "label": "Is the car stuck inside?",
        "options": [
          "Yes",
          "No",
          "Not sure"
        ]
      },
      {
        "label": "Single or double door?",
        "options": [
          "Single",
          "Double",
          "Two doors",
          "Commercial"
        ]
      }
    ],
    "button": "Book my repair",
    "thanks": "Thanks. We will call you in the next few minutes with a time, and the price before we start."
  },
  "chat": {
    "assistantName": "Lupe",
    "greeting": "Hi, Cantor Garage Doors here. What is the door doing, and is your car stuck inside?",
    "answers": [
      {
        "ask": "How much to fix a broken spring?",
        "match": [
          "spring",
          "snapped",
          "broke",
          "broken",
          "bang",
          "price",
          "cost",
          "how much"
        ],
        "answer": "Most double doors are 289 dollars for both torsion springs, fitted, with the tune up included and a lifetime warranty on the springs. We replace both because the second one is never far behind."
      },
      {
        "ask": "Can you come today?",
        "match": [
          "today",
          "now",
          "urgent",
          "stuck",
          "emergency",
          "asap",
          "car inside"
        ],
        "answer": "Usually, yes. Our average arrival for a stuck door is around ninety minutes across Dallas, and every truck carries springs and opener parts so most repairs are done on the first visit."
      },
      {
        "ask": "Is there a trip fee?",
        "match": [
          "trip",
          "call out",
          "callout",
          "fee",
          "charge to come",
          "estimate",
          "quote"
        ],
        "answer": "No. Coming out to look is free. You get the price before we lift a tool, and you pay for the repair or you pay nothing."
      },
      {
        "ask": "How much is a new door?",
        "match": [
          "new door",
          "replace",
          "replacement",
          "install",
          "carriage",
          "style",
          "insulated"
        ],
        "answer": "Fitted prices for a standard sixteen by seven double door start at 1,190 dollars for classic raised panel, 1,450 for modern flush and 1,890 for carriage house, with the old door hauled away."
      },
      {
        "ask": "Should I replace my opener?",
        "match": [
          "opener",
          "remote",
          "motor",
          "noisy",
          "keypad",
          "liftmaster",
          "chamberlain"
        ],
        "answer": "Often not. A worn gear, a sensor out of line or a dead remote are cheap fixes, and we will tell you if the motor still has years in it before selling you a new one."
      }
    ]
  },
  "reviews": {}
};
