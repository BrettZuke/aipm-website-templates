/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Bean Scene: Coffee Roastery and Espresso Bar in Holbeck, Leeds",
    "metaDescription": "Small batch coffee roasted in Holbeck and poured on Water Lane. Espresso bar, filter brews and fresh bakes, seven days a week from 7am."
  },
  "business": {
    "name": "Bean Scene",
    "shortName": "Bean Scene",
    "town": "Leeds",
    "country": "GB",
    "phone": "0113 496 0182",
    "description": "Bean Scene, a coffee roastery and espresso bar on Water Lane in Holbeck, Leeds.",
    "services": [
      "Espresso bar",
      "Coffee beans",
      "Wholesale",
      "Event coffee bar"
    ],
    "areasServed": [
      "Leeds",
      "Holbeck",
      "West Yorkshire"
    ]
  },
  "chat": {
    "assistantName": "Maya",
    "greeting": "Hi, Bean Scene here. After a table, some beans, or something else?",
    "answers": [
      {
        "ask": "When are you open?",
        "match": [
          "open",
          "hours",
          "close",
          "time",
          "today",
          "sunday",
          "saturday",
          "weekend",
          "early"
        ],
        "answer": "Monday to Friday 7am to 6pm, Saturday 8am to 6pm and Sunday 9am to 4pm. The first shot goes through at seven on weekdays."
      },
      {
        "ask": "Where are you?",
        "match": [
          "where",
          "address",
          "find",
          "location",
          "station",
          "parking",
          "walk",
          "directions"
        ],
        "answer": "Unit 4, Foundry Yard, Water Lane, Holbeck, Leeds LS11. It is about eight minutes on foot from Leeds station, and the roastery is the unit behind the shop."
      },
      {
        "ask": "How much is a flat white?",
        "match": [
          "price",
          "cost",
          "how much",
          "menu",
          "flat white",
          "latte",
          "cortado",
          "espresso",
          "oat",
          "milk"
        ],
        "answer": "A flat white is 3.40 pounds, a cortado 3.20 and a latte 3.60. Oat, soya and coconut milk cost nothing extra, and prices are the same whether you sit in or take it out."
      },
      {
        "ask": "Can I book a table?",
        "match": [
          "book",
          "table",
          "reserve",
          "reservation",
          "group",
          "seat",
          "booking"
        ],
        "answer": "Yes. Use the booking form on the page with the day, the time and how many of you there are, and we will confirm it. Walk ins are always welcome too."
      },
      {
        "ask": "Do you supply cafes or offices?",
        "match": [
          "wholesale",
          "supply",
          "office",
          "cafe",
          "shop",
          "beans",
          "bulk",
          "trade",
          "event",
          "wedding"
        ],
        "answer": "We do. Roasted on Thursday and delivered on Friday to cafes, offices and shops across Leeds, with the grind and dial in included and no contract. We also bring the bar and two baristas to events across West Yorkshire."
      }
    ]
  },
  "reviews": {}
};
