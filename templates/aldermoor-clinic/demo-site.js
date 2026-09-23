/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Aldermoor Clinic: Physiotherapy and Chiropractic in Harrogate",
    "metaDescription": "Physiotherapy and chiropractic in Harrogate. A forty five minute first assessment, no GP referral needed, and most health insurers invoiced direct."
  },
  "business": {
    "name": "Aldermoor Clinic",
    "shortName": "Aldermoor",
    "town": "Harrogate",
    "country": "GB",
    "phone": "01423 496 0127",
    "description": "Aldermoor Clinic, physiotherapy and chiropractic in Harrogate.",
    "services": [
      "Back or neck pain",
      "Sports or running injury",
      "Shoulder, hip or knee",
      "Rehab after surgery",
      "Sports massage",
      "Not sure"
    ],
    "areasServed": [
      "Harrogate",
      "Knaresborough",
      "Ripon",
      "Wetherby",
      "Pannal",
      "Boroughbridge",
      "Leeds"
    ]
  },
  "form": {
    "heading": "Book an assessment",
    "sub": "What hurts and how long it has been going on. Most new patients are seen within two working days.",
    "services": [
      "Back or neck pain",
      "Sports or running injury",
      "Shoulder, hip or knee",
      "Rehab after surgery",
      "Sports massage",
      "Not sure"
    ],
    "questions": [
      {
        "label": "How long has it been going on?",
        "options": [
          "Under two weeks",
          "Two to six weeks",
          "Over six weeks",
          "It keeps coming back"
        ]
      },
      {
        "label": "Are you claiming on insurance?",
        "options": [
          "Yes",
          "No, self paying",
          "Not sure"
        ]
      }
    ],
    "button": "Book my assessment",
    "thanks": "Thanks. We will call you today to book the assessment, usually within two working days, and tell you what to bring."
  },
  "chat": {
    "assistantName": "Ellen",
    "greeting": "Hi, Aldermoor Clinic here. What is bothering you, and how long has it been going on?",
    "answers": [
      {
        "ask": "Do I need a GP referral?",
        "match": [
          "referral",
          "gp",
          "doctor",
          "refer"
        ],
        "answer": "No, you can book directly. If anything in your assessment needs a doctor, we write to your GP and tell you why before you leave."
      },
      {
        "ask": "How much is an assessment?",
        "match": [
          "price",
          "cost",
          "how much",
          "fee",
          "assessment",
          "first"
        ],
        "answer": "The first assessment is 75 pounds for forty five minutes, with the first treatment in the same visit. Follow ups are 58, or 310 for a block of six."
      },
      {
        "ask": "Can I use my health insurance?",
        "match": [
          "insurance",
          "bupa",
          "axa",
          "vitality",
          "aviva",
          "insured",
          "claim"
        ],
        "answer": "Usually, yes. We are registered with Bupa, AXA, Vitality, Aviva and most others and invoice them directly. Bring your authorisation number to the first visit."
      },
      {
        "ask": "Physio or chiropractor?",
        "match": [
          "physio",
          "chiropractor",
          "chiro",
          "which",
          "difference",
          "osteo"
        ],
        "answer": "Book the assessment and tell us what hurts. We put you with whoever sees the most of your problem, and you can switch between them at any point."
      },
      {
        "ask": "How many sessions will I need?",
        "match": [
          "how many",
          "sessions",
          "how long",
          "weeks",
          "better"
        ],
        "answer": "Most problems settle in four to six sessions. We tell you at the first visit what to expect, and if you are not improving by the third we change the plan rather than repeat it."
      }
    ]
  },
  "reviews": {}
};
