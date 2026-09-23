/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Rainline Gutter Care: Gutter Clearing and Roofline Work in Birmingham",
    "metaDescription": "Gutters cleared by vacuum from the ground across Birmingham, with a pole camera on every run and before and after photos with the invoice. Overflows seen the same day where we can."
  },
  "business": {
    "name": "Rainline Gutter Care",
    "shortName": "Rainline",
    "town": "Birmingham",
    "country": "GB",
    "phone": "0121 496 0166",
    "description": "Rainline Gutter Care, gutter clearing, overflows and roofline work across Birmingham.",
    "services": [
      "Gutter clearing",
      "Overflow or downpipe",
      "Leaking joint or dropped run",
      "Fascia and soffit wash",
      "Roofline survey",
      "Landlord or block contract"
    ],
    "areasServed": [
      "Birmingham",
      "Moseley",
      "Solihull",
      "Erdington",
      "Harborne",
      "Sutton Coldfield",
      "Halesowen"
    ]
  },
  "form": {
    "heading": "Book a clear out",
    "sub": "Address, and whether it is running over right now. Overflows get seen the same day where we can.",
    "services": [
      "Gutter clearing",
      "Overflow or downpipe",
      "Leaking joint or dropped run",
      "Fascia and soffit wash",
      "Roofline survey",
      "Landlord or block contract"
    ],
    "questions": [
      {
        "label": "Is it overflowing now?",
        "options": [
          "Yes, water is coming over",
          "Only in heavy rain",
          "No, just due a clear",
          "Not sure"
        ]
      },
      {
        "label": "How many storeys?",
        "options": [
          "Bungalow",
          "Two storey",
          "Three storey",
          "Block or commercial"
        ]
      }
    ],
    "button": "Send it over",
    "thanks": "Thanks. We will come back with a price and a day, and sooner if it is running over."
  },
  "chat": {
    "assistantName": "Sam",
    "greeting": "Hi, Rainline here. Is the gutter running over, or is it just due a clear?",
    "answers": [
      {
        "ask": "What does it cost?",
        "match": ["price", "cost", "how much", "quote", "charge", "fee"],
        "answer": "A standard three bedroom semi is 65 pounds for the full run front and back, downpipes included. Three storeys, long elevations and anything over a conservatory are priced before we start rather than after."
      },
      {
        "ask": "It is overflowing, can you come today?",
        "match": ["today", "overflow", "urgent", "emergency", "now", "pouring", "flooding"],
        "answer": "Send the address through and we will tell you straight away whether we can get to you today. An overflow is usually the outlet or a bend in the downpipe and it is normally an hour on site."
      },
      {
        "ask": "Do you have to go on the roof?",
        "match": ["roof", "ladder", "height", "safe", "climb", "scaffold"],
        "answer": "Almost never. The vacuum and the pole camera both reach four storeys from the ground, so no ladder leans on the gutter and nothing stands in your borders. If a run cannot be worked from below we say so before quoting."
      },
      {
        "ask": "How often should they be done?",
        "match": ["often", "how many times", "year", "frequency", "again", "schedule"],
        "answer": "Once a year for most Birmingham houses, twice if you are under trees. If you can see growth in the gutter from the pavement it has been longer than a year and the outlet is likely blocked already."
      },
      {
        "ask": "Do you do landlords and blocks?",
        "match": ["landlord", "block", "portfolio", "agent", "commercial", "properties", "flats"],
        "answer": "Yes, scheduled twice a year on one invoice with a photo report per address. Most agents put the whole portfolio on a single visit, which brings the price per property down."
      }
    ]
  },
  "reviews": {}
};
