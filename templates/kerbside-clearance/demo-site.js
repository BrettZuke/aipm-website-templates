/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. */
window.SITE = {
  "business": {
    "name": "Kerbside Clearance",
    "town": "Manchester",
    "country": "GB",
    "phone": "0161 496 0188",
    "description": "Kerbside Clearance, same day junk removal and house clearance in Manchester.",
    "services": [
      "House clearance",
      "Garage or shed clearance",
      "Furniture or white goods",
      "Garden waste",
      "Office clearance",
      "Single item"
    ],
    "areasServed": [
      "Manchester",
      "Salford",
      "Stockport",
      "Trafford",
      "Oldham",
      "Bolton",
      "Bury"
    ]
  },
  "form": {
    "heading": "Get a free quote",
    "sub": "Tell us what needs clearing and we will come back to you within the hour.",
    "services": [
      "House clearance",
      "Garage or shed clearance",
      "Furniture or white goods",
      "Garden waste",
      "Office clearance",
      "Single item"
    ],
    "questions": [
      {
        "label": "How much is there?",
        "options": [
          "A few items",
          "Quarter of a van",
          "Half a van",
          "A full van or more"
        ]
      },
      {
        "label": "When do you need it gone?",
        "options": [
          "Today",
          "This week",
          "Next week",
          "Just getting prices"
        ]
      }
    ],
    "button": "Get my free quote",
    "thanks": "Thanks. We will be in touch within the hour."
  },
  "chat": {
    "greeting": "Hi, you have reached Kerbside Clearance. What needs clearing?",
    "answers": [
      {
        "ask": "How much does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee"
        ],
        "answer": "You only pay for the space your junk takes up in the van. A single item starts from 45 pounds and a full van is around 280 pounds. We confirm a fixed price before we lift anything."
      },
      {
        "ask": "Can you come today?",
        "match": [
          "today",
          "same day",
          "tomorrow",
          "urgent",
          "soon",
          "when"
        ],
        "answer": "Often, yes. Ring 0161 496 0188 before noon and we can usually be with you the same afternoon."
      },
      {
        "ask": "What areas do you cover?",
        "match": [
          "where",
          "area",
          "cover",
          "near",
          "local"
        ],
        "answer": "All of Greater Manchester, including Salford, Stockport, Trafford, Oldham, Bolton and Bury."
      },
      {
        "ask": "What happens to my stuff?",
        "match": [
          "recycle",
          "recycling",
          "donate",
          "charity",
          "landfill",
          "dump"
        ],
        "answer": "We sort everything. Good furniture goes to local charities and the rest is recycled wherever possible. Over 80 percent never goes to landfill."
      }
    ]
  },
  "reviews": {}
};
