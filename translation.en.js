import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const InterfaceStringTranslations = {
  search: {
    
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
  },

  landingPage: { 
      intro: "Find elections in these states",

      features_label: "What you can do on Voter’s Edge",

      features: [

        "Use your address to get a personalized ballot.",

        "Get in-depth info on candidates, measures, and who supports them.",

        "Check where, when, and how to vote.",

        "Keep track of your choices and use them to vote.",

        "Share and start the conversation!"

      ],

      benefits_label: "How Voter’s Edge will help you",

      benefits: [

        "Make sense of the election.",

        "Cut through the campaign noise and get the facts.",

        "Vote with confidence.",

        "Impact your democracy."

      ],

      about_link: "/page/about-voters-edge",

      about_link_label: "Find out more about Voter’s Edge",

      domains: [

      {
        // name: "california-state",

        label: "California",

        // link: "/ca",

        branding_label: "Produced in partnership with",

        branding_logo: "/content/image/lwvcef/votersedge_logo_lwvc.png",

        branding_logo_alt: "League of Women Voters of California Education Fund",

        branding_link: "https://cavotes.org/",

      },
      {
        // name: "illinois-state",

        label: "Illinois",

        // link: "/il",

        // branding_label: "",

        // branding_logo: "",

        // branding_logo_alt: "",

        // branding_link: "",

      },
      {
        name: "new-york-state",

        label: "New York",

        link: "/ny",

        // branding_label: "",

        // branding_logo: "",

        // branding_logo_alt: "",

        // branding_link: "",

      },
      ]
    }
};
export default InterfaceStringTranslations;
