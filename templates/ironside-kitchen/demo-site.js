/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Ironside Kitchen: Portland Food Truck and Catering",
    "metaDescription": "Smash burgers, tacos and oak-smoked brisket from a truck that actually turns up. Parked across Portland six days a week, and we cater weddings, film sets and office lunches."
  },
  "business": {
    "name": "Ironside Kitchen",
    "shortName": "Ironside",
    "town": "Portland",
    "country": "US",
    "phone": "(503) 555-0129",
    "description": "Ironside Kitchen, a Portland food truck serving smash burgers, tacos and oak-smoked brisket, plus catering across the metro.",
    "services": [
      "Wedding or party",
      "Office or job site lunch",
      "Film or production catering",
      "Street fair or market",
      "Drop-off trays",
      "Something else"
    ],
    "areasServed": [
      "Portland",
      "Beaverton",
      "Hillsboro",
      "Lake Oswego",
      "Gresham",
      "Vancouver WA",
      "Tigard"
    ]
  },
  "form": {
    "heading": "Check a date",
    "sub": "Date, rough headcount and where the truck would park. We answer every enquiry the same day.",
    "services": [
      "Wedding or party",
      "Office or job site lunch",
      "Film or production catering",
      "Street fair or market",
      "Drop-off trays",
      "Something else"
    ],
    "questions": [
      {
        "label": "How many people?",
        "options": [
          "Under 30",
          "30 to 75",
          "75 to 150",
          "150 or more"
        ]
      },
      {
        "label": "How would you like it served?",
        "options": [
          "Off the truck",
          "Drop-off trays",
          "Buffet with our crew",
          "Not sure yet"
        ]
      }
    ],
    "button": "Check my date",
    "thanks": "Thanks. We will confirm whether the truck is free that day and send a menu and a price."
  },
  "chat": {
    "assistantName": "Marco",
    "greeting": "Hi, Ironside Kitchen here. Chasing the truck today, or booking it for something?",
    "answers": [
      {
        "ask": "Where are you parked today?",
        "match": [
          "where",
          "parked",
          "today",
          "location",
          "find",
          "pitch",
          "address"
        ],
        "answer": "Tuesday to Friday we are on SE Division between 30th and 32nd from 11am. Saturday is the Hollywood market, Sunday is Cathedral Park. If the truck is out on a booking the pitch is dark that day and we post it the night before."
      },
      {
        "ask": "What does catering cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee",
          "budget"
        ],
        "answer": "Off the truck it is 24 dollars a head for two mains and a side, with a 1,400 dollar minimum for a four hour service. Drop-off trays work out cheaper at 16 a head. Send the date and headcount and you get a real number, not a range."
      },
      {
        "ask": "Do you do vegetarian and vegan?",
        "match": [
          "vegetarian",
          "vegan",
          "veggie",
          "allergy",
          "gluten",
          "dairy",
          "dietary",
          "halal"
        ],
        "answer": "Yes, and we cook them on a separate section of the flat top rather than scraping a corner clear. Tell us the count when you book. Gluten free tortillas and buns are no extra charge, we just need 48 hours."
      },
      {
        "ask": "How far do you travel?",
        "match": [
          "travel",
          "far",
          "area",
          "cover",
          "distance",
          "out of town",
          "mileage"
        ],
        "answer": "Anywhere inside 20 miles of downtown Portland with no travel charge, which covers Beaverton, Hillsboro, Lake Oswego, Gresham and Vancouver. Past that it is 2 dollars a mile each way and we will say so in the quote."
      },
      {
        "ask": "What do you need on site?",
        "match": [
          "power",
          "water",
          "setup",
          "site",
          "need",
          "parking",
          "space",
          "permit"
        ],
        "answer": "A flat space about 30 feet by 12 and that is genuinely it. The truck carries its own generator, water and waste tank. We handle the county permit for public events and we will tell you before you book if a venue is going to be a problem."
      }
    ]
  },
  "reviews": {}
};
