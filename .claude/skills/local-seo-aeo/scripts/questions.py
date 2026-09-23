"""What customers actually ask, by trade.

The owner writes three or four questions on the onboarding form. Their
customers ask thirty. This is the rest of them: the questions people type into
Google and say out loud to an assistant before they ring anybody.

Every question here is one a real customer asks, not a keyword. That matters,
because the page answering it has to be worth reading. A question nobody asks
produces a page nobody wants, which is the definition of the thin content
Google's spam policy is aimed at.

Kept in its own file so `seo_content.py` stays readable. Add to it freely: if a
client says "everyone asks me X", put X in their trade's list.
"""

# Shapes that work in any trade, used as the fallback and as a top-up.
GENERIC = [
    "What does it cost, and what makes the price go up or down?",
    "How quickly can you get here?",
    "Do you charge for a quote?",
    "Which areas do you cover?",
    "Are you insured, and what does that actually cover?",
    "How do I check you are qualified?",
    "What happens if something goes wrong after you have finished?",
    "Do you guarantee the work, and for how long?",
    "What should I ask before hiring anyone for this?",
    "How do I know if I am being overcharged?",
]

# Trade specific. Keyed by the same words as the rest of the skill.
BANK = [
    (r"electric|rewir|fuse|eicr|pat test|spark", [
        "How do I know if my house needs rewiring?",
        "How long does a full rewire take, and do we have to move out?",
        "What is an EICR, and do I legally need one?",
        "How often does a landlord need an electrical safety certificate?",
        "Why does my fuse box keep tripping?",
        "Is my old fuse box dangerous?",
        "Can I add sockets myself, or does it have to be an electrician?",
        "What is Part P, and why does it matter when I sell the house?",
        "What does it cost to put an EV charger on the drive?",
        "Do I need a new consumer unit before solar or an EV charger?",
        "What are the warning signs of dangerous wiring?",
        "Why do my lights flicker?",
        "Do I need an electrician to fit a new shower?",
        "How do I check an electrician is actually registered?",
    ]),
    (r"plumb|heat|boiler|gas|radiator|bathroom", [
        "Should I repair my boiler or replace it?",
        "How long should a boiler last?",
        "Why does my boiler keep losing pressure?",
        "How often should a boiler be serviced, and what do you actually do?",
        "What is a gas safety certificate, and do I need one?",
        "Why is my radiator cold at the bottom?",
        "Do I need a power flush, or is that a sales tactic?",
        "What size boiler does my house need?",
        "Why do I have heating but no hot water?",
        "How long does it take to fit a new boiler?",
        "Is a combi boiler right for my house?",
        "What should I do if I smell gas?",
        "Why is my water pressure so low?",
        "Should I get a heat pump instead of a new boiler?",
        "How long does a new bathroom take from start to finish?",
    ]),
    (r"roof|guttering|fascia|chimney", [
        "Does my roof need replacing, or can it be repaired?",
        "How long should a roof last?",
        "My roof is leaking. How urgent is it?",
        "Do you need scaffolding, and is that included in the price?",
        "What is flashing, and why does it keep failing?",
        "Should the ridge tiles be repointed or replaced?",
        "Does a new roof need planning permission?",
        "How long does a re-roof take?",
        "Flat roof: felt, EPDM or fibreglass?",
        "Why is my loft damp?",
        "Will my insurance cover storm damage to the roof?",
        "How do I avoid a roofing scam?",
        "How often should gutters be cleared?",
    ]),
    (r"build|extension|render|loft|convers|carpent|joiner|plaster|kitchen fitt", [
        "Do I need planning permission for an extension?",
        "What is permitted development, and does my plan fit it?",
        "How long does a single storey extension take?",
        "What is building control, and when do I need it?",
        "Do I need an architect, or can a builder do the drawings?",
        "What is a party wall agreement, and do I need one?",
        "How much value does an extension add?",
        "What should be in a builder's quote?",
        "How do stage payments work, and what should I never pay up front?",
        "What happens if the build runs over?",
        "How much mess and disruption should I expect?",
        "Can I live in the house while the work is done?",
    ]),
    (r"garden|landscap|lawn|patio|fenc|decking", [
        "When is the best time of year to lay a new lawn?",
        "Turf or seed?",
        "How long does a new patio take?",
        "Do I need planning permission for a garden room?",
        "How do I stop my garden flooding every winter?",
        "How often should hedges be cut?",
        "Who owns the fence, me or my neighbour?",
        "What is the lowest maintenance garden I can have?",
    ]),
    (r"driveway|block pav|tarmac|resin", [
        "Do I need planning permission for a driveway?",
        "What is a dropped kerb, and how do I get one?",
        "Block paving, tarmac or resin: which is right for my house?",
        "How long does a new driveway take?",
        "How do I stop weeds coming through?",
        "Will a new driveway cause flooding, and what are the drainage rules?",
    ]),
    (r"clean|carpet|janitor|domestic", [
        "How often should carpets be cleaned?",
        "How long does carpet take to dry afterwards?",
        "What is included in an end of tenancy clean?",
        "Will this get my deposit back?",
        "Do I need to be in while you clean?",
        "Are your products safe for pets and children?",
        "What is the difference between a deep clean and a regular clean?",
        "Do I need to provide anything?",
    ]),
    (r"locksmith|lock", [
        "I am locked out. How quickly can you get here?",
        "Will you damage my door getting in?",
        "What is a British Standard lock, and does my insurance need one?",
        "Should I change the locks when I move into a new house?",
        "What is lock snapping, and is my door at risk?",
        "What does it cost to get back into my own house?",
        "Can you get into a uPVC door without breaking it?",
    ]),
    (r"pest|vermin|rodent|wasp|rat|mice", [
        "How do I tell whether I have mice or rats?",
        "How long does it take to get rid of wasps?",
        "Is the treatment safe for pets and children?",
        "How do I stop them coming back?",
        "Do I have to leave the house during treatment?",
        "Who is responsible for pests, me or my landlord?",
        "How much does it cost to get rid of a rat problem?",
    ]),
    (r"tree|arbor|stump|hedge cut", [
        "Do I need permission to cut down a tree in my garden?",
        "What is a TPO, and how do I check whether my tree has one?",
        "When is the best time of year to prune?",
        "Is my tree dangerous?",
        "My neighbour's tree overhangs my garden. What can I do?",
        "Do you take the waste away?",
        "What does it cost to take a large tree down?",
    ]),
    (r"remov|moving|man and van|storage", [
        "How far in advance should I book?",
        "Do you pack for me, or do I do it?",
        "Are my things insured while you move them?",
        "What will you not move?",
        "How long does a three bedroom house take?",
        "What happens if my completion is delayed on the day?",
        "How much does it cost to move locally?",
    ]),
    (r"car|mot|garage|tyre|auto|vehicle|mechanic|servicing", [
        "What is the difference between a service and an MOT?",
        "How often does my car actually need servicing?",
        "What are the most common MOT failures?",
        "Will a warning light fail my MOT?",
        "Can I drive if my MOT has run out?",
        "Do I have to use a main dealer to keep my warranty?",
        "How long does an MOT take?",
        "What does an advisory mean, and do I have to fix it?",
        "Is it worth repairing an older car?",
    ]),
    (r"hair|beauty|barber|nail|salon|spa", [
        "How often should I get my hair cut?",
        "Do I need a patch test before colour?",
        "How long does a full head of highlights take?",
        "What is the difference between balayage and highlights?",
        "How do I look after colour treated hair?",
        "Do you do a consultation first?",
        "What happens if I do not like it?",
        "How far ahead do I need to book?",
    ]),
    (r"dent|orthodon", [
        "How often should I see a dentist?",
        "Are you taking on new NHS patients?",
        "What should I do in a dental emergency?",
        "Does teeth whitening damage enamel?",
        "How much do implants cost, and how long do they last?",
        "I am nervous about the dentist. What do you do differently?",
        "Do you offer payment plans?",
        "What is the difference between NHS and private treatment here?",
    ]),
    (r"vet|animal|pet", [
        "What do I do if my pet is ill out of hours?",
        "When should a puppy or kitten have their vaccinations?",
        "Is pet insurance worth it?",
        "How often should my pet have a check-up?",
        "When should my pet be neutered, and what does it cost?",
        "Do you offer payment plans?",
        "How do I get my pet registered with you?",
    ]),
    (r"window|glazing|door fitt|conservatory", [
        "How long does double glazing last?",
        "Why are my windows misting up inside the glass?",
        "What is FENSA, and why does it matter when I sell?",
        "Do new windows need planning permission?",
        "uPVC, aluminium or timber?",
        "Will new windows actually cut my heating bill?",
    ]),
    (r"paint|decorat", [
        "How long does it take to paint a room?",
        "Do I need to move the furniture, or do you?",
        "How long before I can use the room again?",
        "Do you do the preparation, or is that extra?",
        "How many coats do you do?",
        "Can you paint over wallpaper?",
    ]),
    (r"floor|tiling|tiler", [
        "Can you tile over existing tiles?",
        "How long before I can walk on a new floor?",
        "What is the best flooring for a kitchen or bathroom?",
        "Do I need underfloor heating under tiles?",
        "How do I look after a new floor?",
    ]),
    (r"solar|heat pump|renewab|battery|ev charg", [
        "Do solar panels actually work in this country?",
        "How long do solar panels take to pay for themselves?",
        "Do I need planning permission for solar panels?",
        "What happens on a cloudy day, or at night?",
        "Do I need a battery as well?",
        "What grants are available at the moment?",
        "Will a heat pump keep my house warm in winter?",
    ]),
    (r"damp|drain|septic|plumbing emerg", [
        "What is the difference between rising damp, penetrating damp and condensation?",
        "Do I really need a damp proof course?",
        "Why does my drain keep blocking?",
        "Who is responsible for a blocked drain, me or the water company?",
        "My house smells damp. Where do I start?",
    ]),
    (r"alarm|cctv|security|aerial", [
        "Does a burglar alarm reduce my home insurance?",
        "Do I need a monitored alarm, or is a bell box enough?",
        "Where should cameras actually go?",
        "Is CCTV legal if it can see my neighbour's garden?",
        "What happens when the alarm goes off and I am away?",
    ]),
    (r"hvac|air con|ventilation|refrigerat", [
        "How often does air conditioning need servicing?",
        "Do I need planning permission for an external unit?",
        "What size unit does my room need?",
        "Can air conditioning heat the room as well as cool it?",
        "Why is my air conditioning not cold any more?",
    ]),
]


def for_trade(words):
    """The questions specific to this trade. GENERIC is kept separate on
    purpose: a trade question beats a general one every time, so the caller
    ranks them below, and a business whose trade is not in the bank still gets
    the general set rather than nothing."""
    import re
    found = []
    for pattern, items in BANK:
        if re.search(pattern, words):
            found += items
    return found
