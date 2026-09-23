/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Wensley and Hart: Family Funeral Directors in Leeds",
    "metaDescription": "Family funeral directors in Leeds since 1962. Answered day and night by our own team, with every price published in full, from direct cremation to a traditional funeral."
  },
  "business": {
    "name": "Wensley and Hart",
    "shortName": "Wensley and Hart",
    "town": "Leeds",
    "country": "GB",
    "phone": "0113 496 0719",
    "description": "Wensley and Hart, family funeral directors in Leeds, arranging traditional funerals, celebrations of life and direct cremations.",
    "services": [
      "Arranging a funeral now",
      "Direct cremation",
      "Planning ahead",
      "A question"
    ],
    "areasServed": [
      "Leeds",
      "Chapel Allerton",
      "Moortown",
      "Roundhay",
      "Headingley",
      "Harehills",
      "Pudsey",
      "Horsforth"
    ]
  },
  "form": {
    "heading": "Arrange a funeral",
    "sub": "Send a message and one of our funeral directors will call you back today.",
    "services": [
      "Arranging a funeral now",
      "Direct cremation",
      "Planning ahead",
      "A question"
    ],
    "servicePlaceholder": "How can we help?",
    "questions": [
      {
        "label": "How should we reply?",
        "options": [
          "A phone call",
          "An email",
          "Either is fine"
        ]
      }
    ],
    "messagePlaceholder": "Tell us anything that would help, or just your name and number",
    "button": "Send message",
    "thanks": "Thank you. One of our funeral directors will be in touch today."
  },
  "chat": {
    "assistantName": "Ruth",
    "hi": "Hello.",
    "hiSub": "We are here whenever you need us.",
    "greeting": "Hello. If someone has just died, you can call us on 0113 496 0719 at any hour, and a person will answer. Or ask me anything here.",
    "answers": [
      {
        "ask": "What do I do first?",
        "match": [
          "first",
          "just died",
          "what do i do",
          "died",
          "start"
        ],
        "answer": "If they died at home and it was expected, call their GP or 111 so a doctor can confirm the death, then call us whenever you are ready. In hospital, the bereavement office will guide you. If it was sudden, call 999."
      },
      {
        "ask": "How much does a funeral cost?",
        "match": [
          "cost",
          "price",
          "how much",
          "afford",
          "fees"
        ],
        "answer": "An attended funeral with us starts at 2,995 pounds, and a direct cremation at 1,495. Crematorium and celebrant fees are added at cost. Every price is on this page."
      },
      {
        "ask": "How do I register the death?",
        "match": [
          "register",
          "registrar",
          "certificate",
          "paperwork"
        ],
        "answer": "In England a death is registered within 5 days, by appointment at the register office, once the medical certificate is ready. The registrar can tell most government departments for you through Tell Us Once."
      },
      {
        "ask": "What is a direct cremation?",
        "match": [
          "direct",
          "no service",
          "simple",
          "unattended"
        ],
        "answer": "A cremation with no service on the day. We look after everything and return the ashes to you, so you can say goodbye later in your own way. From 1,495 pounds."
      },
      {
        "ask": "Can we visit them?",
        "match": [
          "visit",
          "see them",
          "chapel",
          "viewing",
          "rest"
        ],
        "answer": "Yes. You are welcome in our chapel of rest by appointment, as often as you like."
      },
      {
        "ask": "Is there help with the cost?",
        "match": [
          "help",
          "benefit",
          "payment",
          "grant",
          "support"
        ],
        "answer": "If you get certain benefits, you may be able to get a Funeral Expenses Payment from the government. We can help you apply."
      }
    ]
  },
  "reviews": {}
};
