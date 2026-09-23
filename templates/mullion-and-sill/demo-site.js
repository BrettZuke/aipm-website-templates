/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Mullion and Sill: Windows, Doors and Conservatories in Cardiff",
    "metaDescription": "Composite doors, A rated windows and conservatory roofs across Cardiff, measured, made and fitted by our own team. FENSA registered with a ten year guarantee."
  },
  "business": {
    "name": "Mullion and Sill",
    "shortName": "Mullion and Sill",
    "town": "Cardiff",
    "country": "GB",
    "phone": "029 2018 0146",
    "description": "Mullion and Sill, windows, doors and conservatories across Cardiff and the Vale.",
    "services": [
      "Windows",
      "Front or back door",
      "Bifold or patio doors",
      "Conservatory or orangery",
      "Conservatory roof",
      "Repairs"
    ],
    "areasServed": [
      "Cardiff",
      "Penarth",
      "Llandaff",
      "Whitchurch",
      "Rhiwbina",
      "Pontcanna",
      "Barry"
    ]
  },
  "form": {
    "heading": "Book a free survey",
    "sub": "What you are thinking of changing. We measure up and bring samples to your door.",
    "services": [
      "Windows",
      "Front or back door",
      "Bifold or patio doors",
      "Conservatory or orangery",
      "Conservatory roof",
      "Repairs"
    ],
    "questions": [
      {
        "label": "How many windows or doors?",
        "options": [
          "Just a door",
          "1 to 3",
          "4 to 8",
          "9 or more"
        ]
      },
      {
        "label": "What kind of house?",
        "options": [
          "Terrace",
          "Semi detached",
          "Detached",
          "Flat"
        ]
      }
    ],
    "button": "Book my survey",
    "thanks": "Thanks. We will ring to book your survey, usually within two working days."
  },
  "chat": {
    "assistantName": "Rhys",
    "greeting": "Hi, Mullion and Sill here. Is it windows, a door, or the conservatory you are thinking about?",
    "answers": [
      {
        "ask": "How much is a front door?",
        "match": [
          "door",
          "composite",
          "front door",
          "cost of a door"
        ],
        "answer": "A composite front door starts from 1,395 pounds fitted for a Georgian style, including the frame, furniture and a PAS 24 lock. You choose from over twenty colours at the survey."
      },
      {
        "ask": "How much are windows?",
        "match": [
          "window",
          "windows",
          "price",
          "cost",
          "how much"
        ],
        "answer": "Flush casement windows start from 495 pounds each fitted, Georgian bar from 645 and sash look from 895. The survey gives you a fixed written price for the whole house."
      },
      {
        "ask": "Are you FENSA registered?",
        "match": [
          "fensa",
          "building regs",
          "regulations",
          "certificate",
          "registered"
        ],
        "answer": "Yes. Every replacement window and door is registered with FENSA, and you get the certificate for when you sell."
      },
      {
        "ask": "How long does fitting take?",
        "match": [
          "long",
          "how quickly",
          "fitting",
          "install",
          "days"
        ],
        "answer": "Most doors take half a day and a typical house of windows one to two days, with dust sheets down and no opening left overnight."
      },
      {
        "ask": "What is the guarantee?",
        "match": [
          "guarantee",
          "warranty"
        ],
        "answer": "Ten years on the frames, glass and workmanship, and it transfers to the next owner if you sell."
      }
    ]
  },
  "reviews": {}
};
