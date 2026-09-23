/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Daylight Window Co: Window Cleaning Rounds Across Bristol",
    "metaDescription": "Pure water window cleaning across Bristol on a four or eight weekly round. Same day every time, a text the night before, frames and sills included in the price."
  },
  "business": {
    "name": "Daylight Window Co.",
    "shortName": "Daylight",
    "town": "Bristol",
    "country": "GB",
    "phone": "0117 496 0188",
    "description": "Daylight Window Co., pure water window cleaning rounds across Bristol.",
    "services": [
      "House or flat",
      "Shop or office",
      "Conservatory or glass roof",
      "Gutters and fascias",
      "Inside windows",
      "One off before a viewing"
    ],
    "areasServed": [
      "Bristol",
      "Bedminster",
      "Clifton",
      "Redland",
      "Fishponds",
      "Keynsham",
      "Portishead"
    ]
  },
  "form": {
    "heading": "Get a price",
    "sub": "Address and roughly how many windows. Most Bristol rounds are priced in under a minute.",
    "services": [
      "House or flat",
      "Shop or office",
      "Conservatory or glass roof",
      "Gutters and fascias",
      "Inside windows",
      "One off before a viewing"
    ],
    "questions": [
      {
        "label": "What sort of property?",
        "options": [
          "Flat or terrace",
          "Semi detached",
          "Detached",
          "Shop or office"
        ]
      },
      {
        "label": "How often?",
        "options": [
          "Every four weeks",
          "Every eight weeks",
          "One off",
          "Not sure yet"
        ]
      }
    ],
    "button": "Get my price",
    "thanks": "Thanks. We will text you a price today and tell you which day your street runs."
  },
  "chat": {
    "assistantName": "Nathan",
    "greeting": "Hi, Daylight Window Co. here. Whereabouts in Bristol are you?",
    "answers": [
      {
        "ask": "How much is it?",
        "match": ["price", "cost", "how much", "quote", "charge", "fee", "cheap"],
        "answer": "A typical three bedroom semi is 16 pounds every four weeks or 20 pounds every eight. Bigger house, more glass, and the price moves with it. Send the address through the form and you get the exact number today."
      },
      {
        "ask": "Do I need to be in?",
        "match": ["in", "home", "access", "key", "gate", "out", "there"],
        "answer": "No. It is all done from outside on a pure water pole and we never need to come through the house. You get a text when we are finished and a link to pay whenever suits."
      },
      {
        "ask": "What if it rains?",
        "match": ["rain", "weather", "wet", "wind", "storm"],
        "answer": "We still clean. Pure water dries clear, so rain landing on clean glass is just water with nothing to stick to. The only thing that stops us is wind strong enough to make a pole unsafe, and you would get a text."
      },
      {
        "ask": "Which areas do you cover?",
        "match": ["area", "cover", "where", "postcode", "bs", "travel", "local"],
        "answer": "Bristol and the ring around it: Bedminster, Clifton, Redland, Fishponds, Keynsham and Portishead. Tell us the postcode and we will say which day your street runs."
      },
      {
        "ask": "Do you clean conservatory roofs?",
        "match": ["conservatory", "roof", "glass roof", "green", "panel", "skylight"],
        "answer": "Yes, roof, bars, gutters and finials. Those panels go green first because rain never runs down them. Twice a year is usually plenty, and it is half price if you are on the four weekly round."
      }
    ]
  },
  "reviews": {}
};
