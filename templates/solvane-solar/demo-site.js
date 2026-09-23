/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Solvane Solar: Solar Panels and Batteries in Phoenix",
    "metaDescription": "Rooftop solar and batteries across Phoenix, designed from a drone survey and installed by our own crews. Cut your bill by seventy to ninety percent, with a twenty five year warranty."
  },
  "business": {
    "name": "Solvane Solar",
    "shortName": "Solvane",
    "town": "Phoenix",
    "country": "US",
    "phone": "(602) 555-0167",
    "description": "Solvane Solar, rooftop solar panels and batteries across the Phoenix metro.",
    "services": [
      "Solar panels",
      "Solar and battery",
      "Battery only",
      "EV charger",
      "Panel cleaning or repair",
      "Not sure yet"
    ],
    "areasServed": [
      "Phoenix",
      "Scottsdale",
      "Tempe",
      "Mesa",
      "Chandler",
      "Gilbert",
      "Glendale"
    ]
  },
  "form": {
    "heading": "Get a free design",
    "sub": "Your address and roughly your monthly bill. We fly the roof and send your own savings figures.",
    "services": [
      "Solar panels",
      "Solar and battery",
      "Battery only",
      "EV charger",
      "Panel cleaning or repair",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Your average monthly bill?",
        "options": [
          "Under $150",
          "$150 to $250",
          "$250 to $400",
          "Over $400"
        ]
      },
      {
        "label": "Who is your utility?",
        "options": [
          "APS",
          "SRP",
          "TEP",
          "Not sure"
        ]
      }
    ],
    "button": "Get my design",
    "thanks": "Thanks. We will fly your roof and send a design and a written price with your savings figures, usually within three days."
  },
  "chat": {
    "assistantName": "Maya",
    "greeting": "Hi, Solvane Solar here. Roughly how much is your monthly power bill?",
    "answers": [
      {
        "ask": "How much does solar cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "system",
          "kw"
        ],
        "answer": "A 6 kW starter system is 15,900 dollars, an 8 kW family system 19,800, and a 10 kW system with a 13.5 kWh battery 34,500, all installed. Your design shows the exact figure for your roof and bill."
      },
      {
        "ask": "How much will I save?",
        "match": [
          "save",
          "savings",
          "bill",
          "aps",
          "srp",
          "payback",
          "return"
        ],
        "answer": "Most of our customers cut their APS or SRP bill by seventy to ninety percent. We work it out from your last twelve bills, not a national average, and show it before you sign."
      },
      {
        "ask": "Is a battery worth it?",
        "match": [
          "battery",
          "powerwall",
          "storage",
          "outage",
          "backup",
          "monsoon"
        ],
        "answer": "It pays off when you use most of your power in the evening or want backup through monsoon outages. If you are home all day and never lose power, it often does not, and we will tell you so."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "install",
          "weeks",
          "days",
          "permit",
          "timeline"
        ],
        "answer": "The crew is on your roof for one or two days. The whole process, including the design, the permit and the utility switching you on, takes about four to six weeks."
      },
      {
        "ask": "What warranty do I get?",
        "match": [
          "warranty",
          "guarantee",
          "panels last",
          "degrade",
          "25 year"
        ],
        "answer": "Twenty five years on the panels, twenty five years on our workmanship, and panel level monitoring so we usually spot a problem before you do."
      }
    ]
  },
  "reviews": {}
};
