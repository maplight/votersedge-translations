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
          label: 'Candidatos', // Translate
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
          label: "Información de la votación", // Translate
          link: 'voting-info', // No translation
          section: 'votingInfo', // No translation
          target: 'VotingInfoSections', // No translation
        },
        {
          iconFileName: 'fa fa-newspaper-o', // No translation
          tooltip: 'Coming soon. Save your choices and see them all on a list.', // Translate
          label: 'Mi Lista', // Translate
          link: '', // 'choices'  // No translation
          section: 'choices', // No translation
          target: 'Choices', // No translation
        },
      ],
    current: "(actual)", // Translate // Possibly deprecated
    aboutLabel: "Acerca de nosotros", // Translate
    contactUsLabel: "Contáctenos", // Translate
    resourcesLabel: "Recursos", // Translate
    policiesLabel: "Políticas", // Translate
    about : [
    {
      label: "Acerca de este proyecto", // Translate
      link: "page/about-voters-edge", // No translation
      status: "published", // No translation
    },
    {
      label: "Fuente de información", // Translate
      link: "page/how-we-get-our-data", // No translation
      status: "published", // No translation
    },
    {
      label: "Preguntas frecuentes", // Translate
      link: "page/faq", // No translation
      status: "published", // No translation
      domain: 'ca' // No translation
    },
    ],
    policies: [
    {
      label: "Política de privacidad", // Translate
      link: "page/privacy-policy", // No translation
      status: "published", // No translation
    },
    {
      label: "Términos de uso", // Translate
      link: "page/terms-of-use", // No translation
      status: "published", // No translation
    },
    {
      label: "Atribución de íconos", // Translate
      link: "page/icons", // No translation
      status: "published", // No translation
    },
    ],
    contact: [
    {
      label: "Envíenos un mensaje", // Translate
      link: "feedback", // No translation
      status: "published", // No translation
    },
    // {
    //   label: "Questions",
    //   link: "page/support-questions",
    //   status: "published",
    // },
    {
      label: "Contribuya", // Translate
      link: "https://donatenow.networkforgood.org/votersedge?code=votersedge", // No translation
      status: "published", // No translation
    },
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
      label: "Para los candidatos: regístrese y agregue su información", // Translate
      link: "http://candidates.votersedge.org", // No translation
      status: "published", // No translation
    },
    {
      label: "Para el equipo de Voter's Edge: inicio de sesión", // Translate
      link: "http://team.votersedge.org", // No translation
      status: "published", // No translation
    },
    ],
    feedback_button_label: "Contáctenos", // Translate
    feedback_message: "Mensaje", // Translate
  };

export default footerTranslation;
