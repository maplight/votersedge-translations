import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";


const measureTranslation = {
  pageTitle: 'Measure', // Translate
  positions: {
    yes: {
      label: 'Yes', // Translate
      campaign: "Campaign for Yes Contact Info", // Translate
    },
    no: {
      label: 'No', // Translate
      campaign: "Campaign for No Contact Info", // Translate
    },
    neutral: {
      label: 'Neutral', // Translate
      campaign: "Contact Info", // Translate
    },
  },
  sourceLabel: 'Source: ', // Translate
  endorsements_label: {
    organization: 'Organization', // Translate
    individual: 'Individual', // Translate
    elected_official: 'Elected Official', // Translate
  },
  endorsements_label_plural: {
    organization: 'Organizations', // Translate
    individual: 'Individuals', // Translate
    elected_official: 'Elected Officials', // Translate
  },
  accordionLabels: {
    opinions: 'Opinions & Analysis', // Translate
    events: {
      label: 'Events',  // Translate
      upcoming: 'Upcoming Events', // Translate
      past: 'Past Events' // Translate
      host: 'Host', // Translate
      date: 'Date', // Translate
      location: 'Location', // Translate
      time: 'Time', // Translate
    }
  },
  pieChartLabels: {
    explanation: "",
    label_in_state: "In-state contributions", // Translate
    label_other: "Other states", // Translate
    label_out_of_state: "Out-of-state", // Translate
    accessible_label: 'A pie chart containing color-coded sections corresponding to in-state, out-of-state and other states.' // Translate
  },
  navigation: {
    next: 'Next:', // Translate
    back: 'Back:', // Translate
    last: 'Last contest',  // Translate
    overview: 'To overview', // Translate
  },

  // Easy Voter Guide in Spanish: http://www.easyvoterguide.org/wp-content/uploads/2010/09/EVG-Nov14-Sp-final.pdf
  // 
  accordionLabels: {
    evg: {   // Translation already provided by LWCV
      label: 'Easy Voter Guide', // If translated, it exists already
      way_it_is_now: 'The way it is now', // Translation exists
      what_if_passes: 'What if it passes?', // Translation exists
      budget_effect: 'Budget effect', // Translation exists
      people_for_say: 'People FOR say', // Translation exists
      people_against_say: 'People AGAINST say', // Translation exists
      question: 'The Question', // Translation exists
      situation: 'The Situation', // Translation exists
      proposal: 'The Proposal', // Translation exists
      fiscal_effect: 'Fiscal effect', // Translation exists
      supporters_say: 'Supporters Say', // Translation exists
      opponents_say: 'Opponents say', // Translation exists
    },
    pros_cons: {  // Translation already provided by LWVC
      label: 'Pros & Cons', // If translated, it exists already
      summary: 'Summary',  // Translation exists
      background: 'Background',  // Translation exists
      financial_effect: 'Financial effect',  // Translation exists
    }, 
    basics: { // Translation already provided by Secretary of State except where noted
      label: 'Measure Basics',
      summary: 'Summary',  // Translation exists
      background: 'Background',  // Translation exists
      financial_effect: 'Financial effect',  // Translation exists
      impartial_analysis: 'Impartial Analysis',  // Translation exists
      tax_rate: 'Tax rate'// Translation exists
      yes_vote_means: 'Yes vote means', // Translation exists
      no_vote_means: 'A No vote means', // Translation exists
      rebuttals: 'Rebuttals (Replies)', // Translation exists
      arguments_for: 'Arguments For', // Translation exists
      arguments_against: 'Arguments Against', // Translation exists
      proposed_legislation: 'Proposed legislation', // Translate
      read_proposed_legislation: 'Read the proposed legislation', // Translate
      what_is_proposal: 'What is this proposal?', // Translate
      endorsements: 'Who endorses the ballot measure campaigns?', // Translate
      funding: 'Who contributes money?', // Translate
      more_info: 'More information', // Translate
    }
  },
    fundingTranslation: {
      contributionsTitle: "Contributions to campaigns",  // Translate
      contributionsExplanation: 'These amounts reflect the money given to, and reported by, committees formed primarily to support or oppose the given ballot measure.', // Translate
      contributionsSource: "Source: MapLight analysis of data from the California Secretary of State. Last updated: [placeholder]", // Translate
      totalMoneyRaised: "Total money raised", // Translate
      contributionSize: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', // Translate
      organizationContributionsTitle: 'Organization Contributions', // Translate
      organizationContributionsLabel: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.', // Translate
      whoGaveMostMoneyTitle: "Who gave the most money?", // Translate
      whoGaveMostMoneyLabel: 'Below are the top 10 contributors that gave money to committees supporting or opposing the given ballot measure(s).', // Translate
      ofTotal: 'of total', // Translate
      topTenByStateTitle: 'Top 5 contributions by state', // Translate
      topTenByStateLabel: '',
      piechartTitle: '',
      piechartLabel: '',

      contributionSizeTitle: 'How big are the contributions?', // Translate
      contributionSizeLabel: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', // Translate
      contributionOver: {
        "Federal": "Contributions over $200", // Translate
        "State": "Contributions over $100", // Translate
      },
      contributionUnder: {
        "Federal": "Contributions under $200", // Translate
        "State": "Contributions under $100", // Translate
      },
      organizationsOrg: {
        "label": "From organizations", // Translate
        "tooltip": "Contributions from companies, unions, or other organizations.", // Translate
      },
      organizationsEmployees: {
        "label": "From employees", // Translate
        "tooltip": "Contributions from individuals, including employees of organizations.", // Translate
      },
      cashHat: 'public/content/svg/icons/Federal-100.png', // No translation
      moneyHand: 'public/content/svg/icons/Federal-100.png', // No translation

    }

      sectionTitle: "Measures", // Translate
      measureDescriptionLabel: "About this measure", // Translate
      my_choices: "Do you support this proposition?", // Translate
      SoS: "Secretary of State", // Translate
      EVG: "Easy Voter Guide — League of Women Voters of California",  // Translate?
      LWVC: "Pros/Cons — League of Women Voters of California",  // Translate?
      aboutLabel: 'What is this proposition?', // Translate
      argumentsLabel: 'Arguments for and against this proposition', // Translate
      supportLabel: 'Who supports this and why?', // Translate
      costLabel: 'How much does it cost?', // Translate
      infoLabel: 'How can I learn more?', // Translate

    ]
  },
};

export default measureTranslation;