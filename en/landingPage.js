import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org
 
const landingPageTranslation = {
  sponsors_label: "Brought to you by",
  intro: "Find elections in these states",
  features_label: "What you can do on Voter's Edge",
  features: [
    'Use your address to get a personalized ballot.',
    'Get in-depth info on candidates, measures, and who supports them.',
    'Check where, when, and how to vote.',
    'Keep track of your choices and use them to vote.',
    'Share and start the conversation!'
  ],
  benefits_label: "How Voter's Edge will help you",
  benefits: [
    'Make sense of the election.',
    'Cut through the campaign noise and get the facts.',
    'Vote with confidence.',
    'Impact your democracy.'
  ],
  about_link: "/page/about-voters-edge", // No translation
  about_link_label: "Find out more about Voter's Edge",
  domains: [
  {
    name: "california-state", // No translation
    label: "California",
    link: "/ca", // No translation
    branding_label: "Produced in partnership with",
    branding_logo: "/content/svg/lwvcef/votersedge_logo_lwvcef-200.png", // No translation
    branding_logo_alt: "League of Women Voters of California Education Fund", // No translation
    branding_link: "https://cavotes.org/", // No translation
  },
  {
    name: "illinois-state", // No translation
    label: "Illinois", // No translation
    link: "/il", // No translation
    branding_label: "",
    branding_logo: "",
    branding_logo_alt: "",
    branding_link: "",
  },
  {
    name: "new-york-state", // No translation
    label: "New York", // No translation
    // link: "/ny",
    link: "",
    branding_label: "Coming soon!",
    branding_logo: "",
    branding_logo_alt: "",
    branding_link: "",
  },
  ]

};

export default landingPageTranslation;
