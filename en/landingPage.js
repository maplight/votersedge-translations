import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// http://votersedge.org
// QA: http://qa.votersedge.org

const landingPageTranslation = {
  sponsors_label: "Brought to you by", // Translate
  intro: "Find elections in these states.", // Translate
  features_label: "What you can do on Voter’s Edge", // Translate
  features: [
    'Use your address to get a personalized ballot.', // Translate
    'Get in-depth info on candidates, measures, and who supports them.', // Translate
    'Check where, when, and how to vote.', // Translate
    'Keep track of your choices and use them to vote.', // Translate
    'Share and start the conversation!' // Translate
  ],
  benefits_label: "How Voter’s Edge will help you", // Translate
  benefits: [
    'Make sense of the election.', // Translate
    'Cut through the campaign noise and get the facts.', // Translate
    'Vote with confidence.', // Translate
    'Impact your democracy.' // Translate
  ],
  about_link: "/page/about-voters-edge", // No translation
  about_link_label: "Find out more about Voter’s Edge.", // Translate
  domains: [
  {
    name: "california-state", // No translation
    label: "California", // No translation
    link: "/ca", // No translation
    branding_label: "Produced in partnership with",
    branding_logo: "/content/svg/lwvcef/votersedge_logo_lwvcef-200.png", // No translation
    branding_logo_alt: "League of Women Voters of California Education Fund", // No translation ?
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
    link: "/ny",
    branding_label: "",  // Translate
    branding_logo: "",
    branding_logo_alt: "",
    branding_link: "",
  },
  ]
};

export default landingPageTranslation;
