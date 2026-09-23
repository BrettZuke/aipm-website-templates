/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Kirkgate Handyman: Small Jobs Across Glasgow",
    "metaDescription": "A handyman for the list on the fridge. Booked by the half day across Glasgow south side, worked in the order you set, no call out charge and materials at cost."
  },
  "business": {
    "name": "Kirkgate Handyman",
    "shortName": "Kirkgate",
    "town": "Glasgow",
    "country": "GB",
    "phone": "07700 900412",
    "description": "Kirkgate Handyman, small jobs booked by the half day across Glasgow.",
    "services": [
      "Fixing and fitting",
      "Flat pack and shelving",
      "Small plumbing",
      "Tiling and sealing",
      "Making good",
      "A list of bits"
    ],
    "areasServed": [
      "Glasgow",
      "Shawlands",
      "Pollokshields",
      "Dennistoun",
      "Partick",
      "Rutherglen",
      "Giffnock"
    ]
  },
  "form": {
    "heading": "Send the list",
    "sub": "Photograph the fridge if that is easier. We price the half day off the list and come back today.",
    "services": [
      "Fixing and fitting",
      "Flat pack and shelving",
      "Small plumbing",
      "Tiling and sealing",
      "Making good",
      "A list of bits"
    ],
    "questions": [
      {
        "label": "How many jobs?",
        "options": [
          "One or two",
          "A handful",
          "A proper list",
          "I have lost count"
        ]
      },
      {
        "label": "When suits?",
        "options": [
          "This week",
          "Next week",
          "An evening",
          "A Saturday"
        ]
      }
    ],
    "button": "Send the list",
    "thanks": "Thanks. We will price the half day and come back today with a slot."
  },
  "chat": {
    "assistantName": "Ewan",
    "greeting": "Hi, Kirkgate Handyman. What is on the list?",
    "answers": [
      {
        "ask": "What do you charge?",
        "match": [
          "price",
          "cost",
          "how much",
          "charge",
          "rate",
          "hour",
          "fee"
        ],
        "answer": "Forty five pounds an hour with a half day minimum, so a standard booking is one hundred and eighty. Materials at cost with the receipt. The number is agreed before we start and it does not move because a job turned out fiddly."
      },
      {
        "ask": "Is my job too small?",
        "match": [
          "small",
          "tiny",
          "one job",
          "just a",
          "bother",
          "worth",
          "minimum"
        ],
        "answer": "Nothing is too small. One dripping tap is fine, it just goes into a half day with whatever else is on the list, because sending a van across Glasgow for a single washer is how other trades end up charging ninety pounds for it."
      },
      {
        "ask": "Do you do electrics or gas?",
        "match": [
          "electric",
          "gas",
          "boiler",
          "wiring",
          "rewire",
          "certificate",
          "safe"
        ],
        "answer": "No gas at all, and on electrics only up to changing a fitting. Anything past that needs someone registered and we will tell you on the phone rather than after a deposit. We are usually happy to say who to ring."
      },
      {
        "ask": "Can you come in the evening?",
        "match": [
          "evening",
          "saturday",
          "weekend",
          "after work",
          "late",
          "night",
          "time"
        ],
        "answer": "Evenings until eight and Saturday mornings, same rate. Sunday is family time and we would rather say that than quietly charge you double for it."
      },
      {
        "ask": "Who buys the materials?",
        "match": [
          "material",
          "buy",
          "supply",
          "parts",
          "screwfix",
          "bring",
          "collect"
        ],
        "answer": "Either. Tell us and we pick things up on the way at cost with the receipt. If you have already bought it, better still, and we will tell you honestly whether it is the right thing before it goes on the wall."
      }
    ]
  },
  "reviews": {}
};
