/**
 * Builds the Local Business Onboarding form in YOUR Google account.
 *
 * You send this form to a local business the day they pay you. Their answers
 * are everything Claude needs to build their website, their Google listing,
 * their chatbot and their follow-up.
 *
 * To use it, once, about two minutes:
 *   1. Go to script.google.com and press New project.
 *   2. Delete what is in the editor and paste this whole file in.
 *   3. Press Run. Google asks for permission the first time: it is your own
 *      account making your own form, so allow it.
 *   4. The link to your new form is printed in the log at the bottom, and the
 *      form is in your Drive. Responses come to you, nobody else.
 *
 * Google Forms is free and does not cap your responses.
 */
function createOnboardingForm() {
  var form = FormApp.create("Local Business Onboarding");
  form.setDescription("About twelve minutes. Your website, your Google listing, your chatbot and your follow-up all get built from these answers, so this is the only form you get. There are no passwords in it, and nothing you write goes public before you have seen it.");
  form.setCollectEmail(false);
  form.setProgressBar(true);
  var item, page;

  page = form.addPageBreakItem().setTitle("First, the basics");
  page.setHelpText("Six quick ones so we know who we are building for.");
  item = form.addTextItem().setTitle("What is the business called?");
  item.setHelpText("Exactly as you want it written on the website and on Google.");
  item.setRequired(true);
  item = form.addTextItem().setTitle("And your name?");
  item.setRequired(true);
  item = form.addTextItem().setTitle("In one line, what does the business do?");
  item.setHelpText("Plain words, the way you would say it to a neighbour. For example: we fix boilers and bathrooms for homeowners in Leeds.");
  item.setRequired(true);
  item = form.addTextItem().setTitle("How long have you been going?");
  item = form.addTextItem().setTitle("Is the registered company name different to the trading name?");
  item.setHelpText("For example Leeds Boiler Company Ltd when everyone calls you Leeds Boiler Co. Leave it blank if they are the same.");
  item = form.addMultipleChoiceItem().setTitle("How many of you are there?");
  item.setChoiceValues(["Just me", "2 to 5", "6 to 15", "More than 15"]);
  item = form.addMultipleChoiceItem().setTitle("Who do you mostly work for?");
  item.setChoiceValues(["Homeowners", "Businesses", "Both, about evenly"]);
  page = form.addPageBreakItem().setTitle("How customers reach you");
  page.setHelpText("These exact details go on your website, your Google listing and everywhere else we list you. Google checks that they match, so take a minute over them.");
  item = form.addTextItem().setTitle("The best number for new enquiries");
  item.setHelpText("The one you actually answer.");
  item.setRequired(true);
  item = form.addTextItem().setTitle("The best email for new enquiries");
  item.setRequired(true);
  item = form.addMultipleChoiceItem().setTitle("Do customers come to you, or do you go to them?");
  item.setChoiceValues(["They come to us", "We go to them", "Both"]);
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("Your full address, written the way it should appear");
  item.setHelpText("House or unit, street, town, postcode. If you work from home and would rather not show the address, write the town and say you want the address hidden.");
  item = form.addParagraphTextItem().setTitle("Which towns, cities or postcodes do you cover?");
  item.setHelpText("The ones you actually want work from, most important first. We build a page for the main ones, which is how you get found in those towns.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("Your opening hours");
  item.setHelpText("Day by day, weekends included. Say if you do emergencies or out of hours, and what that costs. Google shows these and your chatbot answers from them.");
  item.setRequired(true);
  page = form.addPageBreakItem().setTitle("What you sell");
  page.setHelpText("The next four decide what your website has pages for and what your chatbot is allowed to say.");
  item = form.addParagraphTextItem().setTitle("List everything you do");
  item.setHelpText("One per line. Do not be shy about the small jobs.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("Which three do you want more of?");
  item.setHelpText("The ones that make you the most money, or that you enjoy most. These get the most room on the site.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("If you were the customer, what would you type into Google to find a business like yours?");
  item.setHelpText("Three or four goes at it, one per line, exactly as you would type them on your phone. This decides the category your Google listing goes in and the words your pages are built around, and the way you say it beats the way we would guess it.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("What do you not do?");
  item.setHelpText("Jobs you turn down or send elsewhere. This stops the website and the chatbot bringing you work you do not want.");
  item = form.addParagraphTextItem().setTitle("Prices you are happy to show publicly");
  item.setHelpText("Call-out fee, hourly rate, typical job prices, or from prices. If you would rather show none, write none: we will never invent a price, and your chatbot will never quote one.");
  item = form.addTextItem().setTitle("What is a typical job worth?");
  item = form.addTextItem().setTitle("How soon can you usually get to a new customer?");
  page = form.addPageBreakItem().setTitle("Why you, and the proof");
  page.setHelpText("This is the part that sells. It is also the part only you can answer.");
  item = form.addParagraphTextItem().setTitle("Why do customers pick you over the firm down the road?");
  item.setHelpText("In your own words. If customers have told you why, use their words.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("Do you make any guarantee or promise?");
  item.setHelpText("Workmanship guarantee, fixed prices, no mess, turn up when we say. Anything you stand behind.");
  item = form.addParagraphTextItem().setTitle("Licences, insurance, accreditations, memberships and awards");
  item.setHelpText("Gas Safe, NICEIC, FENSA, CHAS, DBS, public liability cover, trade bodies, local awards. Anything a careful customer might check.");
  item = form.addTextItem().setTitle("A link to your Google reviews");
  item.setHelpText("Open your listing on Google, press Share, and paste the link.");
  item = form.addParagraphTextItem().setTitle("Paste three things customers have said about you");
  item.setHelpText("Copy them out of Google, Facebook, texts or emails, with a first name and town if you can. Real words beat anything we could write.");
  item = form.addParagraphTextItem().setTitle("Where are your photos?");
  item.setHelpText("A link to a folder (Google Drive, Dropbox, WeTransfer) holding photos of your work, your team, your van or shop, and your logo. Before and after shots are worth the most. If you have none, write none and we will tell you exactly what to take on your phone.");
  item.setRequired(true);
  page = form.addPageBreakItem().setTitle("Where you already are online");
  page.setHelpText("Never type a password into this form. Anything we need, you grant by invite, and we will tell you exactly which button to press.");
  item = form.addTextItem().setTitle("Your website address, if you have one");
  item = form.addParagraphTextItem().setTitle("What do you like and dislike about it?");
  item.setHelpText("Skip if you have not got one.");
  item = form.addMultipleChoiceItem().setTitle("Do you have a Google Business Profile?");
  item.setChoiceValues(["Yes, and I can sign in to it", "Yes, but I cannot sign in", "No", "I am not sure"]);
  item.setHelpText("That is the listing with your name, map pin, photos and reviews. It is the single biggest thing for showing up in your town, so we set it up properly.");
  item.setRequired(true);
  item = form.addTextItem().setTitle("Which email do you use for Google?");
  item.setHelpText("We send an invite to it so we can work on the listing. You stay the owner, and you can remove us any time.");
  item = form.addParagraphTextItem().setTitle("Your Facebook, Instagram, TikTok or LinkedIn");
  item.setHelpText("Paste the links. One per line.");
  item = form.addParagraphTextItem().setTitle("Any directories you are listed on");
  item.setHelpText("Checkatrade, Yell, Bark, Trustpilot, Which, local business sites. We make your name, address and phone number identical everywhere, which is a real part of ranking.");
  item = form.addMultipleChoiceItem().setTitle("Who controls your domain name?");
  item.setChoiceValues(["I do", "My old web person does", "I do not have one yet", "I am not sure"]);
  item = form.addTextItem().setTitle("If you know where it is registered, which company?");
  item.setHelpText("GoDaddy, 123 Reg, Ionos, Squarespace, whoever you pay for it.");
  page = form.addPageBreakItem().setTitle("Your AI chatbot");
  page.setHelpText("The chat bubble on your site answers customers day and night, in your words, and passes you their name and number. It only ever says what you write here.");
  item = form.addParagraphTextItem().setTitle("The questions customers ask you again and again, with your answers");
  item.setHelpText("At least five. Write them the way you would answer the phone. Price, how soon, do you cover my area, do you charge to quote, are you insured.");
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("Anything the chatbot must never say or promise?");
  item.setHelpText("For example: never give a price for a boiler swap, never promise same day.");
  item = form.addMultipleChoiceItem().setTitle("When somebody wants to book, what should happen?");
  item.setChoiceValues(["Take their name and number, and I call them back", "Send them to my booking link", "Tell them to ring me now", "Take their details and email them"]);
  item.setRequired(true);
  item = form.addTextItem().setTitle("If you have a booking link, paste it");
  item = form.addParagraphTextItem().setTitle("What should it say outside your hours?");
  item.setHelpText("For example: we are closed now, leave your number and we will ring first thing.");
  page = form.addPageBreakItem().setTitle("What happens when an enquiry comes in");
  page.setHelpText("Speed is what turns an enquiry into a job, so we wire the alerts to whoever actually picks up.");
  item = form.addParagraphTextItem().setTitle("Who should be told the second a new enquiry comes in?");
  item.setHelpText("Name, mobile and email for each person.");
  item.setRequired(true);
  item = form.addMultipleChoiceItem().setTitle("Realistically, how fast can you reply?");
  item.setChoiceValues(["Within minutes", "Within the hour", "Same day", "Next working day"]);
  item.setRequired(true);
  item = form.addParagraphTextItem().setTitle("What happens now when somebody enquires?");
  item.setHelpText("Who answers, what you say, what you send them. Where it already works, we copy it rather than replace it.");
  item = form.addParagraphTextItem().setTitle("How do you price a job?");
  item.setHelpText("Over the phone, from photos, or a visit? It decides what your website asks a customer for.");
  page = form.addPageBreakItem().setTitle("Reviews and word of mouth");
  page.setHelpText("The two cheapest sources of work you have, and the two most businesses leave alone.");
  item = form.addMultipleChoiceItem().setTitle("Do you ask customers for a review today?");
  item.setChoiceValues(["Yes, after every job", "Sometimes", "No"]);
  item = form.addParagraphTextItem().setTitle("What stops you asking?");
  item.setHelpText("Be honest. Forgetting and feeling awkward are the usual two, and both are fixable.");
  item = form.addParagraphTextItem().setTitle("Do you reward people who send you work?");
  item.setHelpText("What you give them now, if anything. If nothing, what would you be happy to give?");
  item = form.addParagraphTextItem().setTitle("Describe the job and the customer you want more of");
  item.setHelpText("The one you would take every day of the week.");
  page = form.addPageBreakItem().setTitle("What you want out of it");
  page.setHelpText("So we build for your number, not a number we made up.");
  item = form.addTextItem().setTitle("How many more jobs a month would make this worth it?");
  item.setRequired(true);
  item = form.addTextItem().setTitle("How much more work could you take on right now?");
  item.setHelpText("Be honest. There is no point filling a diary you cannot service.");
  item = form.addParagraphTextItem().setTitle("Which months are busiest, and which are dead?");
  item = form.addParagraphTextItem().setTitle("Who are your main local competitors?");
  item.setHelpText("Names or websites. We look at what they rank for and where they are weak.");
  item = form.addParagraphTextItem().setTitle("What part of getting work do you hate most?");
  page = form.addPageBreakItem().setTitle("Last few");
  page.setHelpText("Taste, timing and anything we have not thought to ask.");
  item = form.addTextItem().setTitle("Any colours, or a logo style, you want kept?");
  item = form.addParagraphTextItem().setTitle("Any websites you love or hate?");
  item.setHelpText("Paste links, yours or anyone's, and say what you like or dislike. It saves us guessing at your taste.");
  item = form.addTextItem().setTitle("Is there a date this needs to be live by?");
  item = form.addParagraphTextItem().setTitle("Best times to reach you for a fifteen minute call");
  item = form.addParagraphTextItem().setTitle("Anything else we should know?");

  Logger.log("Your form: " + form.getPublishedUrl());
  Logger.log("To edit it: " + form.getEditUrl());
}
