import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the footer region, all pages.

const footerTranslation = {
  links: [
      {
        label: 'Overview',  // Translate
        link: 'overview',  // No translation
        section: 'overview', // No translation
      },
      {
        iconFileName: '',
        tooltip: '',
        label: 'Candidates', // Translate
        link: 'candidates', // No translation
        section: 'candidates', // No translation
        target: 'OverviewCandidates Offices', // No translation
      },
      {
        iconFileName: '',
        tooltip: '',
        label: 'Measures', // Translate
        link: 'measures',
        section: 'measures', // No translation
        target: 'OverviewMeasures Measures', // No translation
      },
      {
        iconFileName: '',
        tooltip: '',
        label: 'Voting Info', // Translate
        link: 'voting-info', // No translation
        section: 'votingInfo', // No translation
        target: 'VotingInfoSections', // No translation
      },
      {
        iconFileName: 'fa fa-newspaper-o', // No translation
        tooltip: 'Coming soon. Save your choices and see them all on a list.', // Translate
        label: 'My List', // Translate
        link: '', // 'choices'  // No translation
        section: 'choices', // No translation
        target: 'Choices', // No translation
      },
      ],
    current: "(current)", // Translate // Possibly deprecated
    aboutLabel: 'About Us', // Translate
    contactUsLabel: 'Contact Us', // Translate
    resourcesLabel: 'Resources', // Translate
    policiesLabel: 'Policies', // Translate
    about : [
    {
      label: "About this project", // Translate
      link: "page/about-voters-edge", // No translation
      status: "published", // No translation
    },
    {
      label: "How we get our data", // Translate
      link: "page/how-we-get-our-data", // No translation
      status: "published", // No translation
    },
    {
      label: "FAQ", // Translate
      link: "page/faq", // No translation
      status: "published", // No translation
      domain: 'ca' // No translation
    },
    ],
    policies: [
    {
      label: "Privacy policy", // Translate
      link: "page/privacy-policy", // No translation
      status: "published", // No translation
    },
    {
      label: "Terms of use", // Translate
      link: "page/terms-of-use", // No translation
      status: "published", // No translation
    },
    {
      label: "Icon attribution", // Translate
      link: "page/icons", // No translation
      status: "published", // No translation
    },
    ],
    contact: [
    {
      label: "Send us a message", // Translate
      link: "feedback", // No translation
      status: "published", // No translation
    },
    // {
    //   label: "Questions",
    //   link: "page/support-questions",
    //   status: "published",
    // },
    {
      label: "Donate", // Translate
      link: "https://donatenow.networkforgood.org/votersedge?code=votersedge", // No translation
      status: "published", // No translation
    },
    ],
    resources: [
    {
      label: "Create Your Own Guide", // Translate
      link: "page/resources#create-guide", // No translation
      status: "published", // No translation
      description: "Set up a version of Voter’s Edge for your organization"
    },
    {
      label: "Engage Voters", // Translate
      link: "page/resources#engage-voters", // No translation
      status: "published", // No translation
      description: "Share, promote, or embed",
    },
    {
      label: "For Developers",
      link: "page/resources#developers",
      status: "published",
      description: "Access our API"
    },
    {
      label: "For Candidates", // Translate
      link: "http://candidates.votersedge.org", // No translation
      status: "published", // No translation
      description: "Sign up and add your information"
    },
    {
      label: "For Voter’s Edge Team: Sign in", // Translate
      link: "http://team.votersedge.org", // No translation
      status: "published", // No translation
    },
    ],
    feedback_button_label: "Contact Us", // Translate
    survey_button: {
      label: "Take our survey",
      icon: "fa-edit",
      link: "survey"
    },
    subscribe_button: {
      label: 'Subscribe for updates on upcoming elections',
      icon: 'fa-megaphone',
      link: "subscribe"
    }
  };

export default footerTranslation;