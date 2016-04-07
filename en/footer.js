import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the footer region, all pages.

const footerTranslation = {
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
    }
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
    }
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
    }
    ],
    resources: [
    // {
    //   label: "Embeddable Content & Widgets",
    //   link: "page/embeddable-content-widgets",
    //   status: "published",
    // },
    // {
    //   label: "For Media: Create a voting guide",
    //   link: "page/media",
    //   status: "unpublished",
    // },
    // {
    //   label: "For Developers: API resources",
    //   link: "page/api-resources",
    //   status: "published",
    // },
    {
      label: "For Candidates: Sign up and add your information", // Translate
      link: "http://candidates.votersedge.org", // No translation
      status: "published", // No translation
    },
    {
      label: "For Voter’s Edge Team: Sign in", // Translate
      link: "http://team.votersedge.org", // No translation
      status: "published", // No translation
    }
    ],
    feedback_button_label: "Contact Us", // Translate 
    feedback_message: "Message", // Translate 
  };

export default footerTranslation;