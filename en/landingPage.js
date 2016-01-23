import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const landingPageTranslation = {

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

};

export default landingPageTranslation;
