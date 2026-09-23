/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Wrenfield Vets: Veterinary Practice in Bristol",
    "metaDescription": "Same-day appointments for sick pets, a monthly health plan and our own vets on call through the night. Veterinary practice in Bristol for dogs, cats and rabbits."
  },
  "business": {
    "name": "Wrenfield Vets",
    "shortName": "Wrenfield Vets",
    "town": "Bristol",
    "country": "GB",
    "phone": "0117 496 0582",
    "description": "Wrenfield Vets, a veterinary practice in Bristol for dogs, cats and rabbits, with same-day appointments, a monthly health plan and its own out of hours vets.",
    "services": [
      "Sick pet appointment",
      "Vaccinations",
      "Health plan",
      "Neutering",
      "Dental care",
      "New puppy or kitten"
    ],
    "areasServed": [
      "Bristol",
      "Bishopston",
      "Redland",
      "Clifton",
      "Southville",
      "Cotham",
      "Horfield",
      "Montpelier"
    ]
  },
  "form": {
    "heading": "Book an appointment",
    "sub": "Tell us about your pet. Poorly pets are seen the same day.",
    "services": [
      "Sick pet appointment",
      "Vaccinations",
      "Health plan",
      "Neutering",
      "Dental care",
      "New puppy or kitten"
    ],
    "questions": [
      {
        "label": "What kind of pet?",
        "options": [
          "Dog",
          "Cat",
          "Rabbit",
          "Other"
        ]
      },
      {
        "label": "How soon?",
        "options": [
          "Today",
          "This week",
          "Not urgent"
        ]
      }
    ],
    "button": "Book",
    "thanks": "Thanks. The front desk will call you back within the hour."
  },
  "chat": {
    "assistantName": "Tess",
    "greeting": "Hi, Wrenfield Vets here. Is your pet unwell, or are you booking routine care?",
    "answers": [
      {
        "ask": "My pet is unwell, can we come in today?",
        "match": [
          "unwell",
          "sick",
          "poorly",
          "today",
          "urgent"
        ],
        "answer": "Yes. We keep appointments free every day for poorly pets. Call 0117 496 0582 and we will fit you in."
      },
      {
        "ask": "Is it an emergency?",
        "match": [
          "emergency",
          "breathing",
          "collapse",
          "poison",
          "ate",
          "bleeding"
        ],
        "answer": "If they are struggling to breathe, have collapsed, ate something toxic or are bleeding heavily, call us now on 0117 496 0582, day or night."
      },
      {
        "ask": "How much is the health plan?",
        "match": [
          "plan",
          "monthly",
          "price",
          "cost"
        ],
        "answer": "From 11 pounds a month for rabbits, 14.50 for cats and 16.50 to 21.50 for dogs by size. It covers vaccinations, health checks, flea and worm treatment and nail clips."
      },
      {
        "ask": "When should my puppy have jabs?",
        "match": [
          "puppy",
          "kitten",
          "vaccination",
          "jab",
          "jabs"
        ],
        "answer": "Puppies have their first vaccination at 8 weeks and the second at 10 to 12 weeks. Kittens at 9 and 12 weeks."
      },
      {
        "ask": "What are your opening hours?",
        "match": [
          "hours",
          "open",
          "opening",
          "weekend"
        ],
        "answer": "8am to 7pm on weekdays and 9am to 1pm on Saturdays, with our own vets on call at every other time."
      }
    ]
  },
  "reviews": {}
};
