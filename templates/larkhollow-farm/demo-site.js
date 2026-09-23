/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Larkhollow Farm: Barn Wedding Venue in Franklin, Tennessee",
    "metaDescription": "A barn wedding venue thirty minutes south of Nashville. One wedding a day, 180 guests seated, a ceremony grove, a sunset terrace and a coordinator from tour to send-off."
  },
  "business": {
    "name": "Larkhollow Farm",
    "shortName": "Larkhollow",
    "town": "Franklin",
    "country": "US",
    "phone": "(615) 555-0147",
    "description": "Larkhollow Farm, a barn wedding venue in Franklin, Tennessee, thirty minutes south of Nashville, hosting one wedding a day for up to 180 guests.",
    "services": [
      "Wedding",
      "Micro wedding or elopement",
      "Rehearsal dinner",
      "Vow renewal",
      "Not sure yet"
    ],
    "areasServed": [
      "Franklin",
      "Nashville",
      "Brentwood",
      "Leiper's Fork",
      "Spring Hill",
      "Thompson's Station",
      "Murfreesboro",
      "Columbia"
    ]
  },
  "form": {
    "heading": "Book a tour of the farm",
    "sub": "Tell us your date, or a rough month. We will check it and find a time to walk the farm with you.",
    "services": [
      "Wedding",
      "Micro wedding or elopement",
      "Rehearsal dinner",
      "Vow renewal",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "When is the wedding?",
        "options": [
          "This year",
          "Next year",
          "The year after",
          "Not sure yet"
        ]
      },
      {
        "label": "Roughly how many guests?",
        "options": [
          "Under 80",
          "80 to 130",
          "130 to 180",
          "Not sure yet"
        ]
      }
    ],
    "button": "Book my tour",
    "thanks": "Thank you. Dana will call you to check your date and set up a tour."
  },
  "chat": {
    "assistantName": "Dana",
    "greeting": "Hi, this is Larkhollow Farm. Are you checking a date, or would you like to come and see the farm?",
    "answers": [
      {
        "ask": "How much is the venue?",
        "match": [
          "cost",
          "price",
          "how much",
          "rate",
          "fee",
          "hire"
        ],
        "answer": "Venue hire runs from 2,900 dollars on a winter weekday to 9,500 dollars on a peak season Saturday, for up to 100 guests, plus 20 dollars for each guest over 100. The planner on the page prices your date."
      },
      {
        "ask": "How many guests fit?",
        "match": [
          "guests",
          "capacity",
          "how many",
          "seat",
          "fit"
        ],
        "answer": "180 seated in the Hay Barn, at round or long farm tables, and up to 220 for a ceremony in the Grove."
      },
      {
        "ask": "Is my date free?",
        "match": [
          "date",
          "available",
          "availability",
          "free",
          "book"
        ],
        "answer": "Saturdays from May to October usually go twelve to eighteen months ahead. Tell me your date and I will check it for you."
      },
      {
        "ask": "What if it rains?",
        "match": [
          "rain",
          "weather",
          "wet",
          "indoor"
        ],
        "answer": "The ceremony moves into the Chapel at no extra cost. We make the call together at noon on the day."
      },
      {
        "ask": "Food and drinks?",
        "match": [
          "food",
          "catering",
          "caterer",
          "drinks",
          "alcohol",
          "bar"
        ],
        "answer": "You choose from our five local caterers, and you can bring your own drinks for our licensed bartenders to serve."
      },
      {
        "ask": "Can we come and see it?",
        "match": [
          "tour",
          "visit",
          "see",
          "look"
        ],
        "answer": "Yes. Tours run Tuesday to Sunday. Leave your number and I will book you in with Dana."
      }
    ]
  },
  "reviews": {}
};
