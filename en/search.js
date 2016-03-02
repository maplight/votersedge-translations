import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const searchTranslation  = {
  intro: "Find in-depth information about what's on your ballot",
  path: '/search',
  zipPrompt: "Enter your <strong>zip code</strong>",
  streetAddressPrompt: "And your <strong>street address</strong> <span class=\"muted\">(to access your complete ballot.)</span>",
  addressPromptReason: "Necessary to tell you exactly what will be on your ballot and lookup your polling place.",
  searchButtonLabel: "Find my ballot",
  confidentialityStatement: "Address information is confidential.",
  privacyStatement: "We are non-partisan, non-profit, and will not sell your information.",
  privacyPolicyLinkLabel: "Privacy policy.",
  privacyPolicyLink: "/page/privacy-policy",
  countyLabel: "County",
  countySearchPath: '/election_authority',
  countyButtonLabel: "Look up county",
  zipSearchPath: '/search',
  zipLabel: "Zipcode",
  zipButtonLabel: "Look up zipcode",
  zipHelpText: "",
  domains: {
    'ca': {
      // stateBallotLinkLabel: "Coming soon for 2016. In meantime, here's measures and races for the <strong>state of California</strong> 2014 election.",
      stateBallotLinkLabel: "",
      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",
      stateBallotLink: "",
    },
    'il': {
      stateBallotLinkLabel: "See ballot measures and races for the <strong>state of Illinois</strong>",
      stateBallotLink: "/ballot/election/area/30?id=ocd-division/country:us/state:il",
    },
    'ny': {
      stateBallotLinkLabel: "See ballot measures and races for the <strong>state of New York</strong>",
      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ny",
      stateBallotLink: "",
    }
  },
  electionArchiveLink: "/page/elections-archive",
  electionArchiveLabel: "<strong>Election archive.</strong> See a list of past elections.",
  allStateLink: "http://votersedge.org",
  allStateLabel: "Find ballots for <strong>other states</strong>",
  countyZipContent: {
    accordionLabel: "Look up ballots by <strong>county or zipcode.</strong>",
    accordionType: "simple",
    accordionName: "county-selection",
  },
  multipleElectionsTranslations: {
    en: {
      upcoming_message_default: 'We found elections for ',
      upcoming_message_1: 'Looks like there is an upcoming election for ',
      upcoming_message_2: 'Looks like there are a couple of upcoming elections for ',
      upcoming_message_3: 'Looks like there are some upcoming elections for ',
      recent_message_default: 'We also found these past elections:',
      recent_message_1: 'We also found this past election:',
      recent_message_2: 'We also found these past elections:',
      recent_message_no_upcoming_1: 'Here is the most recent election for ',
      recent_message_no_upcoming_2: 'Here are some recent elections for ',
      choose_ballot: 'Please choose which ballot you would like to see.',

      election_archive: 'Looking for an older election? Check the ',
      election_archive_label: 'archives.',
    },
  
Choose a ballot for an election
  
};

export default searchTranslation;
