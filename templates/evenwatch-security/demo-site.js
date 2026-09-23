/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Evenwatch Security: Home Security Cameras and Alarms in Indianapolis",
    "metaDescription": "Security cameras, video doorbells and alarms across Indianapolis, installed in a morning and monitored 24/7 from our local center. No long contracts."
  },
  "business": {
    "name": "Evenwatch Security",
    "shortName": "Evenwatch",
    "town": "Indianapolis",
    "country": "US",
    "phone": "(317) 555-0134",
    "description": "Evenwatch Security, home security cameras, doorbells, alarms and 24/7 monitoring across Indianapolis.",
    "services": [
      "Video doorbell",
      "Security cameras",
      "Alarm system",
      "24/7 monitoring",
      "Smart locks",
      "Not sure yet"
    ],
    "areasServed": [
      "Indianapolis",
      "Carmel",
      "Fishers",
      "Broad Ripple",
      "Irvington",
      "Zionsville",
      "Greenwood"
    ]
  },
  "form": {
    "heading": "Get a free security plan",
    "sub": "Tell us about your home. We mark every entry point and send a plan and price the same day.",
    "services": [
      "Video doorbell",
      "Security cameras",
      "Alarm system",
      "24/7 monitoring",
      "Smart locks",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "What kind of home?",
        "options": [
          "Single story",
          "Two story",
          "Townhome",
          "Apartment"
        ]
      },
      {
        "label": "Do you have anything now?",
        "options": [
          "Nothing yet",
          "An old alarm",
          "A few cameras",
          "Just a doorbell"
        ]
      }
    ],
    "button": "Get my plan",
    "thanks": "Thanks. A specialist will call today to set up your free security plan."
  },
  "chat": {
    "assistantName": "Dana",
    "greeting": "Hi, Evenwatch here. Are you after cameras, an alarm, or both?",
    "answers": [
      {
        "ask": "How much does it cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "package"
        ],
        "answer": "Doorbell and two cameras is 499 dollars installed, Front and back with door sensors is 899, and Whole home is 1,499. Monitoring is optional at 24.99 a month."
      },
      {
        "ask": "Is there a contract?",
        "match": [
          "contract",
          "cancel",
          "commitment",
          "monthly"
        ],
        "answer": "No contract. Monitoring is month to month and you own the equipment outright from day one."
      },
      {
        "ask": "How long is the install?",
        "match": [
          "install",
          "long",
          "hours",
          "time"
        ],
        "answer": "Most homes take about four hours. The tech hides every cable and sets the app up on your phones before leaving."
      },
      {
        "ask": "What if the internet goes out?",
        "match": [
          "internet",
          "wifi",
          "wi-fi",
          "power",
          "outage"
        ],
        "answer": "The hub has a backup battery and a cellular connection, so the alarm and monitoring keep working during an outage."
      },
      {
        "ask": "Do cameras work at night?",
        "match": [
          "night",
          "dark",
          "vision"
        ],
        "answer": "Yes. Color night vision with the porch lights and a built in spotlight, and infrared in full darkness."
      }
    ]
  },
  "reviews": {}
};
