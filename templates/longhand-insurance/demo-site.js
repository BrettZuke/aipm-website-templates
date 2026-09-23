/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Longhand Insurance Brokers: Business Insurance in Manchester",
    "metaDescription": "Independent business insurance brokers in Manchester for shops, cafes, trades and small firms. We compare insurers, explain your cover on one page, and handle your claims."
  },
  "business": {
    "name": "Longhand Insurance Brokers",
    "shortName": "Longhand",
    "town": "Manchester",
    "country": "GB",
    "phone": "0161 496 0293",
    "description": "Longhand Insurance Brokers, independent business insurance brokers in Manchester for shops, cafes, trades and small firms.",
    "services": [
      "Public liability",
      "Employers' liability",
      "Shop or cafe insurance",
      "Trades insurance",
      "Professional indemnity",
      "Not sure yet"
    ],
    "areasServed": [
      "Manchester",
      "Salford",
      "Stockport",
      "Chorlton",
      "Didsbury",
      "Altrincham",
      "Bury",
      "Oldham"
    ]
  },
  "form": {
    "heading": "Get a business insurance quote",
    "sub": "Tell us about the business. We compare insurers and explain the options in plain English.",
    "services": [
      "Public liability",
      "Employers' liability",
      "Shop or cafe insurance",
      "Trades insurance",
      "Professional indemnity",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "How many staff?",
        "options": [
          "Just me",
          "1 to 5",
          "6 to 20",
          "More than 20"
        ]
      },
      {
        "label": "When does it renew?",
        "options": [
          "This month",
          "In 1 to 3 months",
          "Later",
          "New business"
        ]
      }
    ],
    "button": "Get my quote",
    "thanks": "Thanks. A broker will come back to you within one working day."
  },
  "chat": {
    "assistantName": "Joel",
    "greeting": "Hi, Longhand here. What kind of business is it, and is it a new policy or a renewal?",
    "answers": [
      {
        "ask": "How much will it cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "premium",
          "quote"
        ],
        "answer": "It depends on the business, staff and stock. A small cafe with a few staff is often around 1,000 to 1,500 pounds a year. The cover builder on the page gives a guide, and we get real quotes within a working day."
      },
      {
        "ask": "Do I need employers' liability?",
        "match": [
          "employers",
          "staff",
          "employee",
          "law",
          "legal"
        ],
        "answer": "Yes, in most cases, as soon as you employ anyone, even part time. The legal minimum is 5 million pounds, and most policies give 10 million."
      },
      {
        "ask": "Why not a comparison site?",
        "match": [
          "comparison",
          "compare",
          "cheaper",
          "direct",
          "broker"
        ],
        "answer": "We compare insurers that are not on comparison sites, read the wording as well as the price, and help you when you claim."
      },
      {
        "ask": "How do claims work?",
        "match": [
          "claim",
          "claims",
          "damage",
          "flood",
          "fire",
          "theft"
        ],
        "answer": "You call us first. We tell you what the policy covers, help with the forms and chase the insurer until it is settled."
      },
      {
        "ask": "Do you charge a fee?",
        "match": [
          "fee",
          "fees",
          "commission",
          "charge"
        ],
        "answer": "We are paid a commission by the insurer, included in your premium. If we ever charge a fee, we tell you before you buy."
      }
    ]
  },
  "reviews": {}
};
