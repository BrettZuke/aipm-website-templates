/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Crestline Restoration: Water Damage and Mold Restoration in Atlanta",
    "metaDescription": "Water damage and mold restoration across metro Atlanta, 24 hours a day. On site within the hour, IICRC certified, and we bill your insurer directly."
  },
  "business": {
    "name": "Crestline Restoration",
    "shortName": "Crestline",
    "town": "Atlanta",
    "country": "US",
    "phone": "(404) 555-0172",
    "description": "Crestline Restoration, 24 hour water damage, drying, mold remediation and rebuild across metro Atlanta.",
    "services": [
      "Water in the house now",
      "Burst pipe or leak",
      "Mold",
      "Flooded basement",
      "Ceiling or drywall repair",
      "Insurance claim help"
    ],
    "areasServed": [
      "Atlanta",
      "Decatur",
      "Marietta",
      "Smyrna",
      "Sandy Springs",
      "Buckhead",
      "Kirkwood"
    ]
  },
  "form": {
    "heading": "Report water damage",
    "sub": "Where the water is and whether it is still coming in. We answer 24 hours a day.",
    "services": [
      "Water in the house now",
      "Burst pipe or leak",
      "Mold",
      "Flooded basement",
      "Ceiling or drywall repair",
      "Insurance claim help"
    ],
    "questions": [
      {
        "label": "Is water still coming in?",
        "options": [
          "Yes, right now",
          "No, it has stopped",
          "Not sure"
        ]
      },
      {
        "label": "Are you claiming on insurance?",
        "options": [
          "Yes",
          "Maybe",
          "No",
          "Not sure yet"
        ]
      }
    ],
    "button": "Send a crew",
    "thanks": "Thanks. A technician will call you back within ten minutes. If water is still coming in, turn off the main stopcock and the power to the wet rooms if it is safe to do so."
  },
  "chat": {
    "assistantName": "Kim",
    "greeting": "Hi, Crestline Restoration here. Is water still coming in right now?",
    "answers": [
      {
        "ask": "How fast can you get here?",
        "match": [
          "fast",
          "now",
          "today",
          "tonight",
          "emergency",
          "urgent",
          "how soon",
          "night"
        ],
        "answer": "Most homes in the metro have a truck outside within the hour, day or night. While you wait, turn off the water at the main stopcock and switch off power to any wet rooms if it is safe to reach."
      },
      {
        "ask": "Does insurance cover water damage?",
        "match": [
          "insurance",
          "insurer",
          "claim",
          "covered",
          "cover",
          "deductible",
          "policy"
        ],
        "answer": "Sudden damage, like a burst pipe or a failed hose, usually is. Slow leaks and outside flood water often are not. We go through your policy with you on the first visit and bill the insurer directly for whatever they cover."
      },
      {
        "ask": "How long does drying take?",
        "match": [
          "how long",
          "drying",
          "dry",
          "days",
          "fans",
          "dehumidifier",
          "equipment"
        ],
        "answer": "Three to five days for most rooms. We log moisture readings every day and the equipment stays until the numbers say the structure is dry, not until it feels dry."
      },
      {
        "ask": "I think there is mold",
        "match": [
          "mold",
          "mould",
          "smell",
          "musty",
          "black",
          "spots",
          "allergy"
        ],
        "answer": "We map moisture with meters and thermal imaging to find where it is, remove what is affected under containment, and air test before we leave so you know it is actually gone."
      },
      {
        "ask": "What does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee",
          "uninsured"
        ],
        "answer": "Most insured claims cost you only your deductible. Uninsured emergency extraction starts at 350 dollars and a typical room dry out is 1,200 to 2,500 dollars, priced in writing before the equipment goes in."
      }
    ]
  },
  "reviews": {}
};
