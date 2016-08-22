import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to search errors that arise after submitting the search form & also partial results errors on the multiple elections selection page.
// Some search errors appear in src/api/election_authority & src/api/search.js local search api for totally failed searches.

// Dev Notes:
// @TODO replace Something blew up! & Sorry, a critical error occurred on this page.with critical_error
// @TODO replace Nothing found with no_elections_found

const searchErrorsTranslation = {
    pageTitle: 'Find a ballot', // Translate
    try_new_search: 'Try a new search.', // Translate
    zip_code_entered: 'The zip code you entered',
    multiple_counties: 'is in more than one county. Please select a county from the list below.',
    newSearchMessage: 'Please choose on of these other addresses or ', // Translate
    unable_to_find: 'We were unable to find your specific address.', // Translate
    enter_new: "We were unable to find your specific address.", // Translate
    no_zipcode_entered: "We were unable to find your specific address because a <strong>zip code</strong> is required. Please try again with a zip code.", // Translate
    for_zipcode: 'zip code ', // Translate
    your_search: 'You searched for:', // Translate
    search_prompt: 'Try one of these addresses', // Translate
    no_elections_found: 'No elections found', // Translate
    critical_error: 'We are very sorry. Something in our system is broken right now. Please try again or check back later. <br />If you keep getting this response, please contact us so that we can repair the problem.', // Translate
    no_address_found: 'No address found', // Translate
    no_page_found: 'Sorry, but the page you were trying to view does not exist.', // Translate
    noElectionsErrorMessage: {
      ca: '<p>Voter’s Edge covers only California, Illinois, and New York for 2016. We look forward to expanding our coverage to new states in the future.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/ca/ballot/election/area/42/section/voting-info?id=statewide-42-ca#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/ca/contact-us">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>', // Translate
      ny: '<p>Voter’s Edge covers only California, Illinois, and New York for 2016. We look forward to expanding our coverage to new states in the future.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/ny/ballot/election/area/44/section/voting-info?id=statewide-44-ny#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/ny/contact-us">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>', // Translate
      il: '<p>Voter’s Edge covers only California, Illinois, and New York for 2016. We look forward to expanding our coverage to new states in the future.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/il/ballot/election/area/43/section/voting-info?id=statewide-43-il#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/il/contact-us">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>' // Translate
    }
};

export default searchErrorsTranslation;

