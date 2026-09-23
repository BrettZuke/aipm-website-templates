/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Bramble Paws: Dog Grooming in Sheffield",
    "metaDescription": "A one dog at a time grooming salon on Abbeydale Road. No cages, no waiting around, and the same groomer every visit."
  },
  "business": {
    "name": "Bramble Paws",
    "shortName": "Bramble Paws",
    "town": "Sheffield",
    "country": "GB",
    "phone": "0114 496 0173",
    "description": "Bramble Paws, a one dog at a time grooming salon on Abbeydale Road, Sheffield.",
    "services": [
      "Full groom",
      "Bath and blow dry",
      "Puppy first groom",
      "Deshedding treatment",
      "Nails, ears and teeth",
      "Hand strip"
    ],
    "areasServed": [
      "Sheffield",
      "Nether Edge",
      "Ecclesall",
      "Crookes",
      "Heeley",
      "Dore",
      "Hillsborough"
    ]
  },
  "form": {
    "heading": "Book a groom",
    "sub": "Breed, rough size and when the last groom was. We will come back with a slot and a price.",
    "services": [
      "Full groom",
      "Bath and blow dry",
      "Puppy first groom",
      "Deshedding treatment",
      "Nails, ears and teeth",
      "Hand strip"
    ],
    "questions": [
      {
        "label": "What size is your dog?",
        "options": [
          "Small, under 10kg",
          "Medium, 10 to 25kg",
          "Large, 25kg plus",
          "Giant breed"
        ]
      },
      {
        "label": "When was the last groom?",
        "options": [
          "Within 8 weeks",
          "3 to 6 months",
          "Over 6 months",
          "Never, first time"
        ]
      }
    ],
    "button": "Ask for a slot",
    "thanks": "Thanks. We will text you a slot and a price today, and tell you if the coat needs more time than a standard groom."
  },
  "chat": {
    "assistantName": "Hannah",
    "greeting": "Hi, Bramble Paws here. What breed is yours, and when were they last done?",
    "answers": [
      {
        "ask": "How much is a full groom?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee",
          "pound"
        ],
        "answer": "A small breed full groom is 42 pounds, medium 52, large 65 and up. That is bath, dry, clip or scissor, nails, ears and a tidy. A first puppy groom is 25 because it is mostly getting them used to the table."
      },
      {
        "ask": "My dog is matted, will you shave it?",
        "match": [
          "mat",
          "matted",
          "knot",
          "tangle",
          "shave",
          "clip off",
          "dread"
        ],
        "answer": "Only if the coat leaves us no choice, and we will ring you before the clippers go on rather than after. Brushing out a badly matted coat hurts, and the law here treats that as causing unnecessary suffering. We show you the coat, explain what it will take and let you decide."
      },
      {
        "ask": "How long does it take?",
        "match": [
          "how long",
          "time",
          "wait",
          "hours",
          "quick",
          "stay",
          "collect"
        ],
        "answer": "Ninety minutes to two hours for most dogs, three for a big double coat. You drop off and come back. Nothing sits in a cage waiting for a dryer to come free because there is only ever one dog in the salon."
      },
      {
        "ask": "Is my dog too anxious?",
        "match": [
          "anxious",
          "nervous",
          "scared",
          "aggressive",
          "bite",
          "rescue",
          "old",
          "senior"
        ],
        "answer": "Bring them in for a free ten minute meet first. Plenty of our regulars started as dogs that had a bad time somewhere noisy. Quiet room, one dog, no cage dryer, and we stop when they say stop."
      },
      {
        "ask": "Do you need vaccination records?",
        "match": [
          "vaccin",
          "jab",
          "injection",
          "flea",
          "record",
          "paperwork",
          "insurance"
        ],
        "answer": "Yes, please bring the card or a photo of it on the first visit. If they have fleas we will still groom them, we just use a flea shampoo and add it to the bill, and we treat the room afterwards so nobody passes it on."
      }
    ]
  },
  "reviews": {}
};
