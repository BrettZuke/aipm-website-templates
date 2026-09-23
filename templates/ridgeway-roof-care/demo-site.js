/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Ridgeway Roof Care: Roof Cleaning and Soft Washing in Leicester",
    "metaDescription": "Roof soft washing across Leicester and Leicestershire. No jet on your tiles, a free drone survey before we quote, and the gutters cleared on the way down."
  },
  "business": {
    "name": "Ridgeway Roof Care",
    "shortName": "Ridgeway",
    "town": "Leicester",
    "country": "GB",
    "phone": "0116 496 0134",
    "description": "Ridgeway Roof Care, roof soft washing and moss removal across Leicestershire.",
    "services": [
      "Roof soft wash",
      "Moss scraping",
      "Gutters and valleys",
      "Render or cladding",
      "Roof coating",
      "Drone survey only"
    ],
    "areasServed": [
      "Leicester",
      "Oadby",
      "Wigston",
      "Birstall",
      "Glenfield",
      "Kibworth",
      "Market Harborough"
    ]
  },
  "form": {
    "heading": "Book a roof survey",
    "sub": "Postcode and a photo from the street. We fly the roof before quoting and the footage is yours either way.",
    "services": [
      "Roof soft wash",
      "Moss scraping",
      "Gutters and valleys",
      "Render or cladding",
      "Roof coating",
      "Drone survey only"
    ],
    "questions": [
      {
        "label": "What sort of roof?",
        "options": [
          "Concrete tile",
          "Clay pantile",
          "Slate",
          "Not sure"
        ]
      },
      {
        "label": "How bad is it?",
        "options": [
          "A green tinge",
          "Moss you can see from the road",
          "Growth in the gutters too",
          "Never been done"
        ]
      }
    ],
    "button": "Send it over",
    "thanks": "Thanks. We will fly the roof and come back with a fixed price and the footage."
  },
  "chat": {
    "assistantName": "Chris",
    "greeting": "Hi, Ridgeway Roof Care. Whereabouts in Leicestershire are you?",
    "answers": [
      {
        "ask": "What does it cost?",
        "match": [
          "price",
          "cost",
          "how much",
          "quote",
          "charge",
          "fee"
        ],
        "answer": "A standard three bedroom semi in Leicester is 450 to 700 pounds depending on the pitch, the access and how far gone it is. The drone survey is free and you keep the footage whether or not you book."
      },
      {
        "ask": "Will it damage my tiles?",
        "match": [
          "damage",
          "safe",
          "tile",
          "break",
          "jet",
          "pressure",
          "harm"
        ],
        "answer": "No, because there is no pressure involved. Soft washing works chemically at about the pressure of a garden hose. A jet wash is what strips the face off a concrete tile and drives water under the laps, and we will talk you out of anyone offering that."
      },
      {
        "ask": "How long before the moss goes?",
        "match": [
          "how long",
          "time",
          "weeks",
          "when",
          "result",
          "clean",
          "gone"
        ],
        "answer": "Four to twelve weeks. It dies at the root on the day, then wind and rain take it off gradually. A roof that looks spotless the same afternoon has usually been jetted."
      },
      {
        "ask": "Do you clear the gutters too?",
        "match": [
          "gutter",
          "valley",
          "downpipe",
          "debris",
          "fall",
          "clear"
        ],
        "answer": "Always, on the way down. Everything that comes off a roof ends up in the gutters, so leaving them is just booking yourself the next problem."
      },
      {
        "ask": "Is a roof coating worth it?",
        "match": [
          "coating",
          "seal",
          "paint",
          "spray",
          "colour",
          "worth"
        ],
        "answer": "Usually not. If the tiles are sound a coating buys colour rather than life, and it can trap moisture if it goes on wrong. We will quote for it if you want it and tell you plainly when to keep the money."
      }
    ]
  },
  "reviews": {}
};
