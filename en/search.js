import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const searchTranslation  = {

  intro: "Get in-depth information about what’s on your ballot",

  // path: "/search",

  zipPrompt: "Enter your <strong>zip code</strong>",

  streetAddressPrompt: "And your <strong>street address</strong>. <span class=\"muted\">(Optional, needed for your polling place.)</span>",

  addressPromptReason: "Necessary to tell you exactly what will be on your ballot and lookup your polling place.",

  searchButtonLabel: "Find my ballot",

  confidentialityStatement: "Address information is confidential.",

  privacyStatement: "We are non-partisan, non-profit, and will not sell your information.",

  privacyPolicyLinkLabel: "Privacy policy.",

  // privacyPolicyLink: "/page/privacy-policy",

  countyLabel: "County",

  // countySearchPath: "/election_authority",

  countyButtonLabel: "Lookup county",

  // zipSearchPath: "/search",

  zipLabel: "Zipcode",

  zipButtonLabel: "Lookup zipcode",

  zipHelpText: "",

  domains: {

    "ca": {

      stateBallotLinkLabel: "See ballot measures and races for the <strong>State of California</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",

    },

    "il": {

      stateBallotLinkLabel: "See ballot measures and races for the <strong>State of Illinois</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:il",

    },

    "ny": {
      stateBallotLinkLabel: "See ballot measures and races for the <strong>State of New York</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ny",

    }
  },
  // electionArchiveLink: "/page/elections-archive",

  electionArchiveLabel: "<strong>Election archive.</strong> See a list of past elections.",

  // allStateLink: "/",

  allStateLabel: "Find ballots for <strong>other states</strong>",

  countyZipContent: {

    accordionLabel: "Lookup ballots by <strong>city, county or zipcode.</strong>",

    // accordionType: "simple",

    // accordionName: "county-selection",

  }
};

export default searchTranslation;
