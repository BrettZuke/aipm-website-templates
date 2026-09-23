/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Arkwright Facilities: Commercial Cleaning in Leeds",
    "metaDescription": "Contract cleaning for offices, warehouses and clinics across Leeds and West Yorkshire. Directly employed staff, a named supervisor walking your site weekly, and a written spec you can hold us to."
  },
  "business": {
    "name": "Arkwright Facilities",
    "shortName": "Arkwright",
    "town": "Leeds",
    "country": "GB",
    "phone": "0113 496 0177",
    "description": "Arkwright Facilities, contract cleaning for offices, warehouses and clinics across West Yorkshire.",
    "services": [
      "Office and commercial",
      "Clinical and healthcare",
      "Industrial and warehouse",
      "Periodic deep clean",
      "Washroom services",
      "Take over an existing contract"
    ],
    "areasServed": [
      "Leeds",
      "Bradford",
      "Wakefield",
      "Harrogate",
      "Halifax",
      "Huddersfield",
      "York"
    ]
  },
  "form": {
    "heading": "Book a walk round",
    "sub": "Site type, rough square footage and what the current cleaner keeps getting wrong.",
    "services": [
      "Office and commercial",
      "Clinical and healthcare",
      "Industrial and warehouse",
      "Periodic deep clean",
      "Washroom services",
      "Take over an existing contract"
    ],
    "questions": [
      {
        "label": "What sort of site?",
        "options": [
          "Office",
          "Warehouse or plant",
          "Clinic or healthcare",
          "Mixed estate"
        ]
      },
      {
        "label": "Roughly how big?",
        "options": [
          "Under 5,000 sq ft",
          "5 to 20,000",
          "20 to 50,000",
          "Over 50,000"
        ]
      }
    ],
    "button": "Book a walk round",
    "thanks": "Thanks. We will arrange a walk round and come back with a written spec and a weekly price."
  },
  "chat": {
    "assistantName": "Nathaniel",
    "greeting": "Hi, Arkwright Facilities. What sort of site are you looking after?",
    "answers": [
      {
        "ask": "How is it priced?",
        "match": [
          "price",
          "cost",
          "quote",
          "how much",
          "rate",
          "charge",
          "fee"
        ],
        "answer": "Off a survey and a written specification, never off a floor area and a guess. You get a price per week with the hours, the headcount and the tasks listed, so you can hold us to all three."
      },
      {
        "ask": "Are your staff employed?",
        "match": [
          "staff",
          "employed",
          "self employed",
          "franchise",
          "agency",
          "wage",
          "subcontract"
        ],
        "answer": "Employed, all ninety one of them, above the real living wage with holiday, sick pay and pension. It costs more than the franchise model and it is why the same faces are still on your site in year three."
      },
      {
        "ask": "Who checks the work?",
        "match": [
          "supervisor",
          "check",
          "audit",
          "manage",
          "standards",
          "quality",
          "inspect"
        ],
        "answer": "A named area supervisor walks your building every week, unannounced, against the signed spec. You get their mobile number and the audit lands in your inbox whether or not anything failed."
      },
      {
        "ask": "Can you take over our current contract?",
        "match": [
          "take over",
          "switch",
          "tupe",
          "transfer",
          "existing",
          "change",
          "current"
        ],
        "answer": "Yes, usually inside two weeks. TUPE applies on most transfers and we handle it properly rather than pretending it does not. We will also tell you honestly if your current price is already fair."
      },
      {
        "ask": "Do you do clinical sites?",
        "match": [
          "clinic",
          "healthcare",
          "dental",
          "medical",
          "infection",
          "cqc",
          "surgery"
        ],
        "answer": "Yes. Colour coded equipment, staff trained to national infection control standards, and a monthly audit you receive either way. It is a different contract type to an office and it is priced as one."
      }
    ]
  },
  "reviews": {}
};
