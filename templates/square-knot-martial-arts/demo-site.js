/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Square Knot Martial Arts: Karate for Kids and Adults in Austin",
    "metaDescription": "Family martial arts in East Austin. Little Dragons from age four, juniors, teens and adults. A free first class, uniform included, and belts earned by testing."
  },
  "business": {
    "name": "Square Knot Martial Arts",
    "shortName": "Square Knot",
    "town": "Austin",
    "country": "US",
    "phone": "(512) 555-0129",
    "description": "Square Knot Martial Arts, a family karate school in East Austin for children from age four, teens and adults.",
    "services": [
      "Little Dragons, 4 to 6",
      "Juniors, 7 to 12",
      "Teens and adults",
      "Sparring",
      "Not sure yet"
    ],
    "areasServed": [
      "Austin",
      "East Austin",
      "Mueller",
      "Crestview",
      "Hyde Park",
      "Cherrywood",
      "Windsor Park",
      "Manor"
    ]
  },
  "form": {
    "heading": "Book a free class",
    "sub": "Tell us who it is for and when suits. We will hold a spot.",
    "services": [
      "Little Dragons, 4 to 6",
      "Juniors, 7 to 12",
      "Teens and adults",
      "Sparring",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Who is it for?",
        "options": [
          "My child",
          "Me",
          "The whole family"
        ]
      },
      {
        "label": "Any experience?",
        "options": [
          "None at all",
          "A little",
          "Already has belts"
        ]
      }
    ],
    "button": "Book my free class",
    "thanks": "Thanks. We will call to confirm your free class."
  },
  "chat": {
    "assistantName": "Ray",
    "greeting": "Hi, Square Knot here. Is it for a child, for you, or the whole family?",
    "answers": [
      {
        "ask": "How much is it?",
        "match": [
          "cost",
          "price",
          "how much",
          "fee",
          "membership",
          "month"
        ],
        "answer": "139 dollars a month for two classes a week, or 179 unlimited, with 25 dollars off each extra family member. The uniform is included when you join."
      },
      {
        "ask": "Is the first class free?",
        "match": [
          "free",
          "trial",
          "try",
          "first class"
        ],
        "answer": "Yes. The first class is free, any day on the timetable. Wear comfortable clothes and bare feet."
      },
      {
        "ask": "How young do you take them?",
        "match": [
          "age",
          "young",
          "old",
          "four",
          "kids",
          "child"
        ],
        "answer": "Little Dragons start at four, juniors from seven, and teens and adults from thirteen. Plenty of our adults started in their forties and fifties."
      },
      {
        "ask": "How long to a black belt?",
        "match": [
          "black belt",
          "belt",
          "how long",
          "grade",
          "test"
        ],
        "answer": "Usually three to five years, depending on how often you train. Belts are earned by testing, never by time served."
      },
      {
        "ask": "Is sparring safe?",
        "match": [
          "sparring",
          "safe",
          "hurt",
          "contact",
          "fight"
        ],
        "answer": "Sparring starts at green belt, with full gear, and it is controlled. Nobody is pushed into it."
      }
    ]
  },
  "reviews": {}
};
