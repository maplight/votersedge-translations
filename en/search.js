import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const searchTranslation  = {
  // pageTitle: 'Choose a ballot for an election', // Translate // New
  pageTitle: 'Voter Guide - Candidate & Ballot Information',
  intro: "Find in-depth information about what's on your ballot.", // Translate
  path: '/search', // No translation
  zipPrompt: "Enter your <strong>zip code*</strong> <i>(Required.)</i>", // Translate
  zipErrorMessage: "Please enter a valid zipcode. Example: 94103 or 12002-1432.",
  streetAddressPrompt: "And your <strong>street address</strong> <span class=\"muted\">(to access your complete ballot.)</span>", // Translate just text, not HTML
  addressPromptReason: "Necessary to tell you exactly what will be on your ballot and look up your polling place.", // Translate
  searchButtonLabel: "Find my ballot", // Translate
  confidentialityStatement: "Address information is confidential.", // Translate
  privacyStatement: "We are nonpartisan, nonprofit, and will not sell your information.", // Translate
  privacyPolicyLinkLabel: "Privacy policy.", // Translate
  privacyPolicyLink: "/page/privacy-policy", // No translation
  countyLabel: {
    'ca': 'County',
    'il': 'County',
    'ny': 'Area'
  },
  countyButtonLabel: {
    'ca': 'Look up county',
    'il': 'Look up county',
    'ny': 'Look up area'
  },
  countySearchPath: '/election_authority', // No translation
  zipSearchPath: '/search', // No translation
  zipLabel: "Zipcode", // Translate
  zipButtonLabel: "Look up zip code", // Translate
  zipHelpText: "",
  domains: {
    'ca': {
      // stateBallotLinkLabel: "Coming soon for 2016. In meantime, here's measures and races for the <strong>state of California</strong> 2014 election.",
      stateBallotLinkLabel: "See ballot measures and races for the <strong>state of California</strong>.", // Translate
      stateBallotLink: "/ballot/election/area/42?id=statewide-42-ca",
    },
    'il': {
      stateBallotLinkLabel: "See ballot measures and races for the <strong>state of Illinois</strong>.", // Translate
      stateBallotLink: "/ballot/election/area/43?id=statewide-43-il", // No translation
    },
    'ny': {
      stateBallotLinkLabel: "See ballot measures and races for the <strong>state of New York</strong>.", // Translate
      stateBallotLink: "/ballot/election/area/45?id=statewide-45-ny",
    }
  },
  electionArchiveLink: "/page/elections-archive", // No translation
  electionArchiveLabel: "<strong>Election archive.</strong> See a list of past elections.", // Translate
  allStateLink: "http://votersedge.org", // No translation
  allStateLabel: "Find ballots for <strong>other states</strong>.", // Translate
  countyZipContent: {
    accordionLabel: {
      'root': "Look up ballots by <strong>county.</strong>", // Translate
      'ca': "Look up ballots by <strong>county.</strong>", // Translate
      'ny': "Look up ballots by <strong>area.</strong>", // Translate
      'il': "Look up ballots by <strong>county.</strong>", // Translate
    },
    accordionType: "simple", // No translation
    accordionName: "county-selection", // No translation
  },
  multipleElectionsTranslations: {
      upcoming_message_default: 'We found elections for ', // Translate
      upcoming_message_1: 'Looks like there is an upcoming election for ', // Translate
      upcoming_message_2: 'Looks like there are a couple of upcoming elections for ', // Translate
      upcoming_message_3: 'Looks like there are some upcoming elections for ', // Translate
      recent_message_default: 'We also found these past elections:', // Translate
      recent_message_1: 'We also found this past election:', // Translate
      recent_message_2: 'We also found these past elections:', // Translate
      recent_message_no_upcoming_1: 'Based on your search, we were able to find information on this past election. Check back soon for upcoming election information or select the ballot you would like to see.', // Translate
      recent_message_no_upcoming_2: 'Based on your search, we were able to find information on only past elections. Check back soon for upcoming election information or select the ballot you would like to see.', // Translate
      choose_ballot: 'Please choose which ballot you would like to see.', // Translate
      election_archive: 'Looking for an older election? Check the ', // Translate
      election_archive_label: 'archives.', // Translate
  },
};

export default searchTranslation;
