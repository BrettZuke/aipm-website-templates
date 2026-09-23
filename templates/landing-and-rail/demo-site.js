/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Landing and Rail: Stairlifts and Walk In Showers in Leicester",
    "metaDescription": "Straight and curved stairlifts fitted across Leicester and Leicestershire, plus walk in showers and grab rails. Free home survey, written prices, no pressure."
  },
  "business": {
    "name": "Landing and Rail",
    "shortName": "Landing and Rail",
    "town": "Leicester",
    "country": "GB",
    "phone": "0116 496 0214",
    "description": "Landing and Rail, a family firm fitting straight and curved stairlifts, walk in showers and grab rails across Leicester and Leicestershire.",
    "services": [
      "Straight stairlift",
      "Curved stairlift",
      "Reconditioned stairlift",
      "Walk in shower",
      "Grab rails",
      "Not sure yet"
    ],
    "areasServed": [
      "Leicester",
      "Oadby",
      "Wigston",
      "Birstall",
      "Glenfield",
      "Syston",
      "Loughborough",
      "Market Harborough"
    ]
  },
  "form": {
    "heading": "Book a free home survey",
    "sub": "Tell us a little about the stairs or the bathroom. We ring to arrange a time that suits you.",
    "services": [
      "Straight stairlift",
      "Curved stairlift",
      "Reconditioned stairlift",
      "Walk in shower",
      "Grab rails",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Who is it for?",
        "options": [
          "Me",
          "My partner",
          "A parent",
          "Someone else"
        ]
      },
      {
        "label": "How do the stairs go?",
        "options": [
          "Straight",
          "One turn",
          "Two turns",
          "Not sure"
        ]
      }
    ],
    "button": "Book my survey",
    "thanks": "Thank you. We will ring you today to arrange your free survey."
  },
  "chat": {
    "assistantName": "Sue",
    "greeting": "Hello, this is Landing and Rail. Is it a stairlift or a bathroom you are thinking about?",
    "answers": [
      {
        "ask": "How much is a stairlift?",
        "match": [
          "cost",
          "price",
          "how much",
          "stairlift"
        ],
        "answer": "A straight stairlift is 2,295 pounds fitted. Curved ones start at 4,595 because the rail is made to measure, and reconditioned straight stairlifts start at 1,295."
      },
      {
        "ask": "Is there any help with the cost?",
        "match": [
          "vat",
          "grant",
          "council",
          "help",
          "afford"
        ],
        "answer": "If you have a long term illness or disability you pay no VAT. Your council may also help through a Disabled Facilities Grant of up to 30,000 pounds in England, and we help with the forms."
      },
      {
        "ask": "How soon can it be fitted?",
        "match": [
          "soon",
          "quick",
          "wait",
          "long",
          "when"
        ],
        "answer": "Straight rails are in stock, so most are fitted within three days of the survey. Curved rails take three to four weeks."
      },
      {
        "ask": "What if there is a power cut?",
        "match": [
          "power",
          "cut",
          "battery",
          "electric"
        ],
        "answer": "The chair runs on batteries that charge at each end of the rail, so it keeps working in a power cut."
      },
      {
        "ask": "Will it fit narrow stairs?",
        "match": [
          "narrow",
          "width",
          "fit",
          "space"
        ],
        "answer": "Most stairs from 70 cm wide are fine, and the chair folds to about 32 cm so everyone else can still use the stairs."
      },
      {
        "ask": "Do you do walk in showers?",
        "match": [
          "shower",
          "bath",
          "bathroom",
          "rails"
        ],
        "answer": "Yes. Swapping a bath for a walk in shower starts at 6,450 pounds and usually takes five days. Grab rails start at 95 pounds fitted."
      }
    ]
  },
  "reviews": {}
};
