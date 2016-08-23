import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the voting info section

const votingInfoTranslation = {
    page_title: "Voting Info", // Translate
    page_description: "",
    website_label: "Website", // Translate
    no_information_available: 'No information available.', // Translate
    check_my_polling_place: 'Check my polling place', // Translate
    my_polling_place: 'My polling location and hours', // Translate
    contact_state_election_office: 'Contact state election office', // Translate
    contact_county_election_office: 'Contact county election office', // Translate
    screenreader: {
      accordion: 'You can navigate the sections of the Voting information section by following the links. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    state_election_authority_contact_message: {
      ca: '<p>To find contact information for your local election office, search for your county or address <a href="http://votersedge.org/ca">here</a> or find your county election office on the California Secretary of State <a href="http://www.sos.ca.gov/elections/voting-resources/county-elections-offices/" target="_blank">website.</a></p>',
      il: null,
      ny: null
    },
};

export default votingInfoTranslation;