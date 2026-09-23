/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Mercer and Vine: Hair Salon and Barbers in Leeds",
    "metaDescription": "A hair salon and barbers on Call Lane in Leeds. Cuts, colour, balayage and fades, with a consultation first and nobody double booked."
  },
  "business": {
    "name": "Mercer and Vine",
    "shortName": "Mercer and Vine",
    "town": "Leeds",
    "country": "GB",
    "phone": "0113 496 0158",
    "description": "Mercer and Vine, a hair salon and barbers on Call Lane in Leeds city centre.",
    "services": [
      "Cut and finish",
      "Colour or balayage",
      "Barber cut or fade",
      "Blow dry or styling",
      "Wedding hair",
      "Shave or beard"
    ],
    "areasServed": [
      "Leeds",
      "Chapel Allerton",
      "Headingley",
      "Roundhay",
      "Horsforth",
      "Meanwood",
      "Kirkstall"
    ]
  },
  "form": {
    "heading": "Book an appointment",
    "sub": "What you are after and when suits. New colour clients get a free patch test first.",
    "services": [
      "Cut and finish",
      "Colour or balayage",
      "Barber cut or fade",
      "Blow dry or styling",
      "Wedding hair",
      "Shave or beard"
    ],
    "questions": [
      {
        "label": "Salon or barbers?",
        "options": [
          "Salon",
          "Barbers",
          "Not sure"
        ]
      },
      {
        "label": "Any stylist in mind?",
        "options": [
          "First available",
          "A senior stylist",
          "Someone I have seen before"
        ]
      }
    ],
    "button": "Request my appointment",
    "thanks": "Thanks. We will confirm your time today, and book a free patch test first if you are having colour."
  },
  "chat": {
    "assistantName": "Jade",
    "greeting": "Hi, Mercer and Vine here. Salon or barbers, and what are you thinking of having done?",
    "answers": [
      {
        "ask": "How much is a cut?",
        "match": [
          "price",
          "cost",
          "how much",
          "cut",
          "trim",
          "haircut"
        ],
        "answer": "A cut and finish starts at 48 pounds with a stylist and 62 with a senior. Barber cuts start at 28. Colour is priced at the consultation because it depends on your hair."
      },
      {
        "ask": "Do you take walk ins?",
        "match": [
          "walk in",
          "walk-in",
          "today",
          "now",
          "available",
          "free chair"
        ],
        "answer": "The barbers does whenever a chair is free, and you can see the wait on our booking page. The salon is by appointment so nobody is rushed."
      },
      {
        "ask": "How much is balayage?",
        "match": [
          "balayage",
          "colour",
          "color",
          "highlights",
          "roots",
          "bleach",
          "dye"
        ],
        "answer": "Colour starts at 85 pounds and balayage is priced at the consultation once we have seen your hair. New colour clients need a free patch test forty eight hours before."
      },
      {
        "ask": "Do you do wedding hair?",
        "match": [
          "wedding",
          "bride",
          "bridal",
          "bridesmaid",
          "event",
          "prom",
          "up do"
        ],
        "answer": "Yes, in the salon or on location. We always do a trial a couple of weeks before the day, so there are no surprises on the morning."
      },
      {
        "ask": "When are you open?",
        "match": [
          "open",
          "hours",
          "late",
          "evening",
          "saturday",
          "sunday",
          "close"
        ],
        "answer": "Tuesday to Saturday from nine, with late nights until eight on Thursdays and Fridays. We are closed Sundays and Mondays."
      }
    ]
  },
  "reviews": {}
};
