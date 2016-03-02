import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const searchErrorsTranslation = {
// election authority.sj search .js
Find a ballot

No elections found
Something blew up!

Find a ballot

We are very sorry. Something in our system is broken right now. Please try again or check back later. <br />If you keep getting this response, please contact us so that we can repair the problem.

No address found


API error replacements
Sorry, a critical error occurred on this page.

Sorry, but the page you were trying to view does not exist.

newSearchMessage = 'Please choose on of these other addresses or ';
You searched for:
Try one of these addresses

          errorMessage = {
            ca: '<p>We did not find any upcoming elections based on the information provided.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/en/ca/ballot/election/area/32/section/voting-info?&id=ocd-division/country:us/state:ca#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/ca/feedback">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>',
            ny: '<p>We did not find any upcoming elections based on the information provided.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/en/ca/ballot/election/area/30/section/voting-info?&id=ocd-division/country:us/state:ny#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/ny/feedback">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>',
            il: '<p>We did not find any upcoming elections based on the information provided.</p><p>Your state and local election offices are the ultimate authority on elections in your area and <a href="/en/ca/ballot/election/area/18/section/voting-info?&id=ocd-division/country:us/state:il#section-election-office-contact">can be contacted</a> with additional questions.</p><p>You may also <a href="/il/feedback">contact us</a> if you believe you are receiving this message in error or have questions about our coverage.</p>'
          }

          Nothing found


};

export default searchErrorsTranslation;

