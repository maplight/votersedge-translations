import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.

const candidateCardTranslation = {
  no_photo_submitted: 'No photo submitted', //Translate

  encourage_candidate: 'Candidates can', //Translate
  encourage_candidate_link: 'contact us', //Translate
  encourage_candidate_action: 'to submit info.', //Translate
  photo_label: "Photo of",
  participation: {
    researched: 'Experience partially researched by Voter’s Edge.', //Translate
    researched_encourage: 'Contact and ask the candidate to submit more information.',
    candidate_provided_info: 'Candidate has provided information', //Translate
    candidate_no_info: 'Candidate has not provided information.', //Translate
    candidate_no_info_encourage: 'Contact them to encourage participation.',
    researched_data: 'Researched by Voter’s Edge',
  },
  candidate_website_label: 'Candidate website', //Translate
  accordionLabels: {
    experience: 'Experience', // Translate
    education: 'Education', // Translate
    community_activities: 'Community Activities', // Translate
    biography: 'Biography', // Translate
    professional_experience: 'Professional Experience', // Translate
    top_3_priorities: 'Top 3 Priorities', // Translate
    top_3_priorities_candidate: 'My Top 3 Priorities', // Translate
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
    official_statement: 'Official statement',
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
      elected_official: 'Elected Official', //Translate
    },
    endorsements_label_plural: {
      featured: 'Featured', //Translate
      organization: 'Organizations', //Translate
      individual: 'Individuals', //Translate
      elected_official: 'Elected Officials', //Translate
    },
  },

  fundingTranslation: {
    contributionsTitle: "Contributions to candidate", //Translate
    contributionsExplanation: {
      "Federal": 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.', //Translate
      "State": {
        ca: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.', //Translate
        il: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.', //Translate
        ny: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.', //Translate
      }
    },

    totalMoneyRaised: "Total money raised", //Translate
    contributionSize: 'Candidates are not required to disclose detailed information for contributions under $100. These unitemized contributions are disclosed as a lump sum with each new filing.', //Translate
    organizationContributionsTitle: 'Who gave contributions?', //Translate
    organizationContributionsLabel: {
      "Federal": 'Contributions can be made by organizations through their political action committees (PACs) or by individuals.', //Translate
      "State": {
        ca: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.', //Translate
        il: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.', //Translate
        ny: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.', //Translate
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

    ofTotal: 'of total', //Translate
    topFiveByStateTitle: 'Top contributions by state', //Translate
    topTenByStateLabel: '',
    piechartTitle: 'Top contributions by state', //Translate
    piechartLabel: '',

    contributionSizeTitle: 'How big are the contributions?', //Translate
    contributionSizeLabel: {
      "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', //Translate
      "State": {
        ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', //Translate
        il: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', //Translate
        ny: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', //Translate
      }
    },

    contributionOver: {
      "Federal": "Large contributions", // "Contributions over $200",
      "State": "Large contributions", //Translate
    },
    contributionUnder: {
      "Federal": "Small contributions", //Translate
      "State": "Small contributions", //Translate
    },
    organizationsOrg: {
      "label": "From organizations", //Translate
      "tooltip": "Contributions from companies, unions, or other organizations.", //Translate
    },
    organizationsEmployees: {
      "label": "From individuals", //Translate
      "tooltip": "Contributions from individuals, including employees of organizations.", //Translate
    },
    cashHat: 'public/content/svg/icons/Federal-100.png', // No translation
    moneyHand: 'public/content/svg/icons/Federal-100.png', // No translation
    sourceLabel: {
      "Federal": 'Source: MapLight analysis of data from the Federal Election Commission.', // Translate
      "State": {
        ca: 'Source: MapLight analysis of data from the California Secretary of State.', // Translate text but not names
        il: 'Source: MapLight analysis of data from the Illinois Secretary of State.', // Translate text but not names
        ny: 'Source: MapLight analysis of data from the New York Secretary of State.', // Translate text but not names
      }
    }
  },
  pieChartLabels: {
    explanation: "",
    label_in_state: "In-state contributions", // Translate
    label_other: "Other states", // Translate
    label_out_of_state: "Out-of-state", // Translate
    accessible_label: 'A pie chart containing color-coded sections corresponding to in-state, out-of-state and other states.' // Translate
  }
};

export default candidateCardTranslation;