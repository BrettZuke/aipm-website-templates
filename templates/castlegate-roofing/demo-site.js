/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. */
window.SITE = {
  "business": {
    "name": "Castlegate Roofing",
    "town": "Sheffield",
    "country": "GB",
    "phone": "0114 496 0173",
    "description": "Castlegate Roofing, roof repairs and re-roofing in Sheffield.",
    "services": [
      "Roof repair or leak",
      "Re-roof",
      "Flat roof",
      "Guttering and fascias",
      "Chimney and leadwork",
      "Storm damage"
    ],
    "areasServed": [
      "Sheffield",
      "Rotherham",
      "Dronfield",
      "Chesterfield",
      "Barnsley"
    ]
  },
  "form": {
    "heading": "Get a free quote",
    "sub": "Tell us what the roof is doing and we will come straight back to you.",
    "services": [
      "Roof repair or leak",
      "Re-roof",
      "Flat roof",
      "Guttering and fascias",
      "Chimney and leadwork",
      "Storm damage"
    ],
    "questions": [
      {
        "label": "How urgent is it?",
        "options": [
          "Leaking right now",
          "This week",
          "This month",
          "Just planning"
        ]
      },
      {
        "label": "Best time to call you",
        "options": [
          "Morning",
          "Afternoon",
          "Evening",
          "Any time"
        ]
      }
    ],
    "button": "Get my free quote",
    "thanks": "Thanks. One of our roofers will be in touch shortly."
  },
  "chat": {
    "greeting": "Hi, you have reached Castlegate Roofing. What can I help with?",
    "answers": [
      {
        "ask": "My roof is leaking, can you help?",
        "match": [
          "leak",
          "leaking",
          "water",
          "emergency",
          "storm",
          "urgent"
        ],
        "answer": "Yes. Ring 0114 496 0173 any time, day or night, and we will get someone out to make it safe as quickly as we can."
      },
      {
        "ask": "How much does a repair cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee"
        ],
        "answer": "Most repairs start from around 180 pounds. We give you a fixed written price after a free survey, so there are no surprises."
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
        "answer": "Sheffield and South Yorkshire, including Rotherham, Dronfield, Chesterfield and Barnsley."
      },
      {
        "ask": "Do you guarantee your work?",
        "match": [
          "guarantee",
          "warranty",
          "insured",
          "insurance"
        ],
        "answer": "Every job comes with a 10 year written guarantee, and we are fully insured."
      }
    ]
  },
  "reviews": {}
};
