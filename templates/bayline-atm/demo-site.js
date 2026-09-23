/* Business details for the growth kit: the floating quote form, the chat
   widget and its canned answers all read from this one object. Nothing here
   is wired to a backend yet. Until form.endpoint is set, the form thanks the
   visitor but sends nothing, so set it before the site goes live. The chat
   answers from the scripted set below. */
window.SITE = {
  "copy": {
    "metaTitle": "Bayline ATM: Free ATM Placement for Florida Venues",
    "metaDescription": "Free ATM placement across Tampa Bay and central Florida. We own, fill and service the machine, you take a share of every surcharge, and customers stop walking out to find cash."
  },
  "business": {
    "name": "Bayline ATM",
    "shortName": "Bayline",
    "town": "Tampa",
    "country": "US",
    "phone": "(813) 555-0133",
    "description": "Bayline ATM, free ATM placement and servicing for venues across Tampa Bay.",
    "services": [
      "Full placement",
      "Cash share",
      "Buy a machine outright",
      "Replace an existing ATM",
      "Event or seasonal",
      "Service only"
    ],
    "areasServed": [
      "Tampa",
      "St Petersburg",
      "Clearwater",
      "Brandon",
      "Sarasota",
      "Lakeland",
      "Orlando"
    ]
  },
  "form": {
    "heading": "Get a machine",
    "sub": "Venue type, hours and roughly how busy. We come and look, and say no if it would not earn its floor space.",
    "services": [
      "Full placement",
      "Cash share",
      "Buy a machine outright",
      "Replace an existing ATM",
      "Event or seasonal",
      "Service only"
    ],
    "questions": [
      {
        "label": "What kind of venue?",
        "options": [
          "Bar or restaurant",
          "Convenience store",
          "Laundromat",
          "Other"
        ]
      },
      {
        "label": "Do you have one now?",
        "options": [
          "No machine",
          "Yes, unhappy with it",
          "Yes, contract ending",
          "Just looking"
        ]
      }
    ],
    "button": "Get a machine",
    "thanks": "Thanks. We will come and look at the site and tell you straight what it would earn."
  },
  "chat": {
    "assistantName": "Marcus",
    "greeting": "Hi, Bayline ATM. What sort of venue are you?",
    "answers": [
      {
        "ask": "What does it cost me?",
        "match": [
          "cost",
          "price",
          "charge",
          "free",
          "fee",
          "rent",
          "pay"
        ],
        "answer": "Nothing on full placement. We own the machine, install it, load the cash and service it, and you take a share of every surcharge. There is no install fee and no charge if you ever want it removed."
      },
      {
        "ask": "How much will it make?",
        "match": [
          "make",
          "earn",
          "revenue",
          "profit",
          "share",
          "surcharge",
          "income"
        ],
        "answer": "The surcharge is 2.75 and you take a share of every withdrawal from the first one. A busy bar typically runs 300 to 700 withdrawals a month, but we would rather look at your site than quote you somebody else's numbers."
      },
      {
        "ask": "Who fills it?",
        "match": [
          "fill",
          "cash",
          "load",
          "refill",
          "empty",
          "run out",
          "money"
        ],
        "answer": "We do on full placement, and the machine reports its own balance so we come before it runs dry rather than after somebody complains. On a cash share you load your own and split the surcharge with us."
      },
      {
        "ask": "What if it breaks?",
        "match": [
          "break",
          "jam",
          "fault",
          "fix",
          "service",
          "repair",
          "down"
        ],
        "answer": "We monitor every machine remotely, so we usually know before you do. Service calls in Tampa Bay are same day, and you are never charged for a repair on a placed machine."
      },
      {
        "ask": "I already have an ATM",
        "match": [
          "already",
          "existing",
          "switch",
          "contract",
          "another",
          "provider",
          "current"
        ],
        "answer": "Tell us what you are getting per withdrawal and we will tell you honestly whether we can beat it. If we cannot, we will say so rather than talk you into switching for nothing."
      }
    ]
  },
  "reviews": {}
};
