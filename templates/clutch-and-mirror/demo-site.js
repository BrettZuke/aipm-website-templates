/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Clutch and Mirror: Driving Lessons in Raleigh",
    "metaDescription": "Driving lessons for teens and adults across Raleigh, Cary and Durham. Calm instructors, dual control cars, home pickup, and the same instructor from first lesson to road test."
  },
  "business": {
    "name": "Clutch and Mirror",
    "shortName": "Clutch and Mirror",
    "town": "Raleigh",
    "country": "US",
    "phone": "(919) 555-0124",
    "description": "Clutch and Mirror, a driving school for teens and adults across Raleigh, Cary and Durham.",
    "services": [
      "Teen driver's ed",
      "Private lessons",
      "Road test package",
      "Complete beginner package",
      "Nervous driver lessons",
      "Highway and night driving"
    ],
    "areasServed": [
      "Raleigh",
      "Cary",
      "Durham",
      "Apex",
      "Wake Forest",
      "Garner",
      "Morrisville"
    ]
  },
  "form": {
    "heading": "Book a lesson",
    "sub": "Who is learning, where to pick them up and when suits. We reply the same day with the first available lesson.",
    "services": [
      "Teen driver's ed",
      "Private lessons",
      "Road test package",
      "Complete beginner package",
      "Nervous driver lessons",
      "Highway and night driving"
    ],
    "questions": [
      {
        "label": "Who is learning?",
        "options": [
          "A teen, 15 to 17",
          "An adult",
          "Not sure yet"
        ]
      },
      {
        "label": "How much driving so far?",
        "options": [
          "None at all",
          "A little with family",
          "Plenty, test is coming",
          "Had lessons before"
        ]
      }
    ],
    "button": "Book my lesson",
    "thanks": "Thanks. We will reply today with the first available lesson and your instructor's name."
  },
  "chat": {
    "assistantName": "Priya",
    "greeting": "Hi, Clutch and Mirror here. Is the lesson for a teen or an adult?",
    "answers": [
      {
        "ask": "How much are lessons?",
        "match": [
          "price",
          "cost",
          "how much",
          "lesson",
          "package",
          "fee"
        ],
        "answer": "A single two hour lesson is 75 dollars. The road test package, six lessons plus test day with our car, is 399, and the complete beginner package is 649. Pickup anywhere in Raleigh, Cary and Durham is included."
      },
      {
        "ask": "How many lessons will I need?",
        "match": [
          "how many",
          "lessons",
          "need",
          "hours",
          "ready"
        ],
        "answer": "Most new drivers need five to eight two hour lessons plus practice at home. Complete beginners and nervous drivers usually need more, and we tell you honestly after the first lesson."
      },
      {
        "ask": "Do you pick up from school?",
        "match": [
          "pick up",
          "pickup",
          "school",
          "home",
          "collect",
          "drop off"
        ],
        "answer": "Yes. Pickup and drop off anywhere in Raleigh, Cary and Durham is included in every price, from home, school or work."
      },
      {
        "ask": "Can I use your car for the road test?",
        "match": [
          "road test",
          "test",
          "dmv",
          "exam",
          "car for the test"
        ],
        "answer": "Yes. It is included in the road test package, along with a warm up lesson on the morning of the test so you arrive calm rather than cold."
      },
      {
        "ask": "I am really nervous about driving",
        "match": [
          "nervous",
          "scared",
          "anxious",
          "afraid",
          "panic",
          "confidence"
        ],
        "answer": "That is most of our learners. We start in an empty parking lot, the car has a second brake on the instructor's side, and nobody moves onto real roads until you are ready."
      }
    ]
  },
  "reviews": {}
};
