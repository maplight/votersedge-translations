import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.

const candidateCardTranslation = {
  no_photo_submitted: 'No photo submitted',
  encourage_candidate_link: 'Candidates can contact us',
  encourage_candidate_action: 'to submit info.',
  participation: {
    researched: 'Experience partially researched by Voter‘s Edge</div><div className={s["description"]}>Contact and ask the candidate to submit more information.</div>',
    candidate_no_info: 'Candidate has provided information',
    candidate_no_info_encourage: 'Candidate has not provided information.</div><div className={s["description"]}>Contact them to encourage participation.</div>',
  }
  candidate_website_label: 'Candidate website',
  accordionLabels: {
    experience: 'Experience', // Translate
    education: 'Education', // Translate
    community_activities: 'Community Activities', // Translate
    biography: 'Biography', // Translate
    professional_experience: 'Professional Experience', // Translate
    top_3_priorities: 'Top 3 priorities', // Translate
    top_3_priorities_candidate: 'My top 3 priorities', // Translate
    judicial_ratings: 'Judicial Ratings', // Translate
    videos: 'Videos', //Translate
    political_philosophy: 'Political Philosophy', //Translate
    position_papers: 'Position Papers', //Translate
    responses_to_questions: 'Responses to questions', //Translate
    political_beliefs: 'Political Beliefs', //Translate
    no_question_answer: 'No answer provided.', //Translate
    question_label: 'Question:', //Translate
    answer_label: 'Answer:', //Translate
    profession: 'Profession:', //Translate
    who_funds_candidate: 'Who funds this candidate?', //Translate
    who_supports_candidate: 'Who supports this candidate?', //Translate
    candidate_contact_info: 'Candidate Contact Info', //Translate
    experienceLabels: {
      institution: 'Institution', //Translate
      degree: 'Degree', //Translate
      subject: 'Subject', //Translate
      years: 'Years', //Translate
      last_year: 'Last Year', //Translate
    },
    position_appointed: ' — Appointed position', //Translate
    position_elected: ' — Elected position', //Translate
    endorsements_label: {
      featured: 'Featured', //Translate
      organization: 'Organization', //Translate
      individual: 'Individual', //Translate
      elected_official: 'Elected Official',
    },
    endorsements_label_plural: {
      featured: 'Featured', //Translate
      organization: 'Organizations', //Translate
      individual: 'Individuals', //Translate
      elected_official: 'Elected Officials',
    },
  },

  fundingTranslation: {
    contributionsTitle: "Contributions to candidate",
    contributionsExplanation: {
      "Federal": 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.',
      "State": {
        ca: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
        il: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
        ny: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
      }
    },

    totalMoneyRaised: "Total money raised",
    contributionSize: 'Candidates are not required to disclose detailed information for contributions under $100. These unitemized contributions are disclosed as a lump sum with each new filing.',
    organizationContributionsTitle: 'Who gave contributions?',
    organizationContributionsLabel: {
      "Federal": 'Contributions can be made by organizations through their political action committees (PACs) or by individuals.',
      "State": {
        ca: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
        il: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
        ny: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
      }
    },
    whoGaveMostMoneyTitle: "Who gave the most money?",
    whoGaveMostMoneyLabel: {
      "Federal": 'Below are the top contributors that gave money to support the candidate(s). We have combined contributions from employees of an organization with contributions directly from the organization‘s PAC.',
      "State": {
        ca: 'Below are the top contributors that gave money to support the candidate(s). We have combined contributions from employees of an organization with contributions directly from the organization and/or its PAC.',
        il: 'Below are the top contributors that gave money to support the candidate(s). We have combined contributions from employees of an organization with contributions directly from the organization and/or its PAC.',
        ny: 'Below are the top contributors that gave money to support the candidate(s). We have combined contributions from employees of an organization with contributions directly from the organization and/or its PAC.',
      }
    },

    ofTotal: 'of total',
    topFiveByStateTitle: 'Top contributions by state',
    topTenByStateLabel: '',
    piechartTitle: 'Top contributions by state',
    piechartLabel: '',

    contributionSizeTitle: 'How big are the contributions?',
    contributionSizeLabel: {
      "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
      "State": {
        ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
        il: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
        ny: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
      }
    },

    contributionOver: {
      "Federal": "Large contributions", // "Contributions over $200",
      "State": "Large contributions",
    },
    contributionUnder: {
      "Federal": "Small contributions",
      "State": "Small contributions",
    },
    organizationsOrg: {
      "label": "From organizations",
      "tooltip": "Contributions from companies, unions, or other organizations.",
    },
    organizationsEmployees: {
      "label": "From individuals",
      "tooltip": "Contributions from individuals, including employees of organizations.",
    },
    cashHat: 'public/content/svg/icons/Federal-100.png',
    moneyHand: 'public/content/svg/icons/Federal-100.png',
    sourceLabel: {
      "Federal": 'Source: MapLight analysis of data from the Federal Election Commission.',
      "State": {
        ca: 'Source: MapLight analysis of data from the California Secretary of State.',
        il: 'Source: MapLight analysis of data from the Illinois Secretary of State.',
        ny: 'Source: MapLight analysis of data from the New York Secretary of State.',
      }
    }
  },
  pieChartLabels: {
    explanation: "",
    label_in_state: "In-state contributions",
    label_other: "Other states",
    label_out_of_state: "Out-of-state",
    accessible_label: 'A pie chart containing color-coded sections corresponding to in-state, out-of-state and other states.'
  }
},

export default candidateCardTranslation;