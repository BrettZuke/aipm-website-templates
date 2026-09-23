/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Plumbline Weight Care: Medical Weight Loss in Charlotte, NC",
    "metaDescription": "Physician led weight loss in Charlotte. A first visit that listens, monthly body composition scans, nutrition coaching, and prescription medicine only when it is right for you."
  },
  "business": {
    "name": "Plumbline Weight Care",
    "shortName": "Plumbline",
    "town": "Charlotte",
    "country": "US",
    "phone": "(704) 555-0171",
    "description": "Plumbline Weight Care, a physician led weight loss clinic in Charlotte, North Carolina, with body composition scans, nutrition coaching and medical programs.",
    "services": [
      "Medical weight loss",
      "Nutrition coaching",
      "Body composition scan",
      "Maintenance program",
      "Not sure yet"
    ],
    "areasServed": [
      "Charlotte",
      "South End",
      "Ballantyne",
      "Myers Park",
      "Dilworth",
      "Matthews",
      "Huntersville",
      "Mint Hill"
    ]
  },
  "form": {
    "heading": "Book your first visit",
    "sub": "Tell us a little about you. We will call to find a time that suits.",
    "services": [
      "Medical weight loss",
      "Nutrition coaching",
      "Body composition scan",
      "Maintenance program",
      "Not sure yet"
    ],
    "questions": [
      {
        "label": "Tried a program before?",
        "options": [
          "No",
          "Yes, on my own",
          "Yes, with a clinic"
        ]
      },
      {
        "label": "Best time for a visit?",
        "options": [
          "Weekday morning",
          "Weekday evening",
          "Saturday"
        ]
      }
    ],
    "button": "Book my visit",
    "thanks": "Thank you. We will call you to book your first visit."
  },
  "chat": {
    "assistantName": "Renee",
    "greeting": "Hi, this is Plumbline Weight Care. Would you like to know about programs, costs, or your first visit?",
    "answers": [
      {
        "ask": "How much does it cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "fee",
          "monthly"
        ],
        "answer": "Foundations coaching is 149 dollars a month, the Medical program is 299 a month, and Maintenance is 79. The first visit is 95 dollars and comes off your first month. Medicine, if prescribed, is billed separately."
      },
      {
        "ask": "Will I get medication?",
        "match": [
          "medication",
          "medicine",
          "prescription",
          "shot",
          "injection"
        ],
        "answer": "Only if your provider thinks it is safe and right for you, after your consult and labs. It is usually considered from a BMI of 30, or 27 with a weight related condition."
      },
      {
        "ask": "Does insurance cover it?",
        "match": [
          "insurance",
          "covered",
          "coverage"
        ],
        "answer": "Visits and labs are often covered. Coverage for weight loss medicine varies a lot, so we check yours before you start."
      },
      {
        "ask": "What happens at the first visit?",
        "match": [
          "first visit",
          "first",
          "consult",
          "appointment"
        ],
        "answer": "A 60 minute visit with a provider, a body composition scan, and labs if you need them. No pressure to sign up."
      },
      {
        "ask": "Do I need a referral?",
        "match": [
          "referral",
          "gp",
          "doctor"
        ],
        "answer": "No. You can book directly with us."
      }
    ]
  },
  "reviews": {}
};
