/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Trentside Exterior Cleaning: Driveway, Patio and Roof Cleaning in Nottingham",
    "metaDescription": "Driveways, patios, roofs, render and decking cleaned properly across Nottingham. Soft wash on anything fragile, controlled pressure on stone, and every joint re-sanded before we leave."
  },
  "business": {
    "name": "Trentside Exterior Cleaning",
    "shortName": "Trentside",
    "town": "Nottingham",
    "country": "GB",
    "phone": "0115 496 0142",
    "description": "Trentside Exterior Cleaning, driveway, patio, roof and render cleaning across Nottingham.",
    "services": [
      "Driveway or patio",
      "Roof soft wash",
      "Render or cladding",
      "Decking or fencing",
      "Paths and steps",
      "Commercial forecourt"
    ],
    "areasServed": [
      "Nottingham",
      "West Bridgford",
      "Beeston",
      "Arnold",
      "Carlton",
      "Long Eaton",
      "Hucknall"
    ]
  },
  "form": {
    "heading": "Get a fixed price",
    "sub": "Tell us what needs cleaning and roughly how big it is. One number back, not a range.",
    "services": [
      "Driveway or patio",
      "Roof soft wash",
      "Render or cladding",
      "Decking or fencing",
      "Paths and steps",
      "Commercial forecourt"
    ],
    "questions": [
      {
        "label": "Roughly how big is it?",
        "options": [
          "One or two parking spaces",
          "A normal drive or patio",
          "Front and back",
          "Bigger than that"
        ]
      },
      {
        "label": "When were you hoping?",
        "options": [
          "This week",
          "In the next month",
          "Before the spring",
          "Just getting prices"
        ]
      }
    ],
    "button": "Get my fixed price",
    "thanks": "Thanks. We will come back with a fixed price today."
  },
  "chat": {
    "assistantName": "Ryan",
    "greeting": "Hi, you have reached Trentside. What needs cleaning?",
    "answers": [
      {
        "ask": "How much does a driveway cost?",
        "match": ["price", "cost", "how much", "quote", "charge", "fee", "driveway"],
        "answer": "Most driveways around Nottingham land between 180 and 400 pounds depending on size, surface and how far gone it is. Send a photo through the quote form and you get one fixed number back the same day."
      },
      {
        "ask": "Do you jet wash roofs?",
        "match": ["roof", "tile", "moss", "lichen", "soft wash", "jet"],
        "answer": "No jet on a roof. We soft wash instead: low pressure and a biocide that kills the moss at the root and keeps working for months, so it weathers off rather than taking the surface of the tile with it."
      },
      {
        "ask": "Will it damage my block paving?",
        "match": ["damage", "block", "paving", "scar", "stripe", "ruin", "safe"],
        "answer": "Not with a rotary surface cleaner, which holds the water at a fixed distance across the whole slab. Afterwards we brush kiln-dried sand back into every joint, because an unsanded drive is what lets the blocks rock and the weeds back through."
      },
      {
        "ask": "What areas do you cover?",
        "match": ["area", "cover", "where", "travel", "postcode", "local"],
        "answer": "Nottingham and everything around it: West Bridgford, Beeston, Arnold, Carlton, Long Eaton and Hucknall. Anything further out, ask and we will tell you straight whether it is worth the travel."
      },
      {
        "ask": "What about my plants?",
        "match": ["plant", "border", "garden", "mess", "grass", "flower", "clean up"],
        "answer": "Borders get sheeted and the planting gets watered down first so nothing takes up the run-off. At the end we flush the downpipes and the gully and the silt goes in the van with us."
      }
    ]
  },
  "reviews": {}
};
