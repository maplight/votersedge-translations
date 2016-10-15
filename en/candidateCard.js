import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.

const candidateCardTranslation = {
  choiceCandidateAdd: 'Add candidate to my list',
  choiceCandidateAdded: 'Candidate added to my list',
  no_photo_submitted: 'No photo provided.', //Translate
  no_info_submitted: 'No information provided.', //Translate
  encourage_candidate: 'Are you this candidate?', //Translate
  encourage_candidate_link: 'http://join.votersedge.org', //Translate
  encourage_candidate_action: 'Add more info.', //Translate
  message_candidate: {
    label: 'Encourage candidate to share their information on Voter’s Edge.',
    label_no_social: 'Know this candidate? Tell them about Voter’s Edge.',
    label_thank_you: 'Thank candidate for sharing their information on Voter’s Edge.',
    tweet: {
      label: 'Tweet @ this candidate',
      participatingTweet: '.[!CANDIDATEHANDLE] Your @VotersEdge profile helped me learn about your candidacy. Thank you!',
      notParticipatingTweet: '.[!CANDIDATEHANDLE] I’m preparing to vote and would like to see more info on your @VotersEdge profile!'
    },
    email: {
      nonParticipatingSubject: 'Questions about your campaign',
      participatingSubject: 'Thank you!',
      notParticipatingEmail: 'Dear [!CANDIDATENAME],[!BR][!BR]I am using [!BRANDEDSITENAME] to research the candidates running for [!CONTESTNAME] in the upcoming election, and I don’t see any information from you on your profile ([!SHARECONTENTURL]).[!BR][!BR]**Start adding to your [!BRANDEDSITENAME] profile! http://join.votersedge.org** [!BR][!BR]I’m using [!BRANDEDSITENAME] to prepare to vote because it has all of my candidate, measure, and general voting info in one place. Please help me make an informed decision by completing your [!BRANDEDSITENAME] profile![!BR][!BR]{Personalize this message.}[!BR][!BR]Thank you and I look forward to learning more about your campaign.[!BR][!BR]Sincerely,[!BR]{Add your name here}[!BR][!BR]**Start adding to your [!BRANDEDSITENAME]] profile! http://join.votersedge.org**',
      participatingEmail: 'Dear [!CANDIDATENAME],[!BR][!BR]I am using [!BRANDEDSITENAME] to research the candidates running for [!CONTESTNAME] in the upcoming election. Thank you for providing your information![!BR][!BR]I’m using [!BRANDEDSITENAME] to prepare to vote because it has all of my candidate, measure, and general voting info in one place. Thank you for helping me make an informed decision by completing your [!BRANDEDSITENAME] profile![!BR][!BR]{Personalize this message.}[!BR][!BR]Sincerely,[!BR]{Add your name here}',
    }
  },
  photo_label: "Photo of ",
  participation: {
    researched: 'Experience partially researched by Voter’s Edge.', //Translate
    researched_encourage: 'Contact and ask the candidate to submit more information.',
    candidate_provided_info: 'Candidate has provided information.', //Translate
    candidate_no_info: 'Candidate has not provided information.', //Translate
    candidate_no_info_encourage: 'Contact them to encourage participation.',
    researched_data: 'Researched by Voter’s Edge',
  },
  screenreader: {
    accordion: 'For more in-depth information on this candidate, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
  },
  question_source_label: 'Questions from',
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
    responses_to_questions: 'Questions & Answers', //Translate
    political_beliefs: 'Political Beliefs', //Translate
    no_question_answer: 'No answer provided.', //Translate
    question_label: 'Question:', //Translate
    answer_label: 'Answer from', //Translate
    profession: 'Profession:', //Translate
    official_statement: 'Official Statement',
    who_funds_candidate: 'Who gave money to this candidate?', //Translate
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
    sourceLabels: {
      officialStatement: 'Researched by Voter’s Edge',
      funding: 'Analysis by Maplight',
      judicial: 'Researched by Voter’s Edge',
    },
  },
  embedCard: {
    endorsementsLabel: 'Endorsements',
    top3PrioritiesLabel: 'Top 3 Priorities',
    fundingLabel: 'Top 3 Donors',
    noEndorsements: 'No endorsement information available',
  },
  fundingTranslation: {
    accordionLabels: {
      contributions: 'Contributions',
      moreInfoAboutContributions: 'More information about contributions',
    },
    sourceLabel: {
      "Federal": 'Source: MapLight analysis of data from the Federal Election Commission.', // Translate
      "State": {
        ca: 'Source: MapLight analysis of data from the California Secretary of State.', // Translate text but not names
        il: 'Source: MapLight analysis of data from the Illinois Secretary of State.', // Translate text but not names
        ny: 'Source: MapLight analysis of data from the New York Secretary of State.', // Translate text but not names
      }
    },
    totalMoneyRaisedLabel: "Total money raised", //Translate
    totalMoneyRaisedTooltip: 'These amounts reflect the money given to, and reported by, candidates’ principal campaign committees for the given office within this election cycle. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.',
    whoGaveMostMoneyTitle: "Who gave the most money?",
    whoGaveMostMoneyLabel: {
      "Federal": 'Below are the top contributors that gave money to support the candidate(s).',
      "State": {
        ca: 'Below are the top contributors that gave money to support the candidate(s).',
        il: 'Below are the top contributors that gave money to support the candidate(s).',
        ny: 'Below are the top contributors that gave money to support the candidate(s).',
      }
    },
    whoGaveMostMoneyTooltip: {
      "Federal": 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
      "State": {
        ca: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
        il: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
        ny: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
      }
    },
    whoGaveMostMoneyOrganizations: 'Organizations',
    whoGaveMostMoneyIndividuals: 'Individuals',
    pieCharts: {
      byState: {
        label: 'By State:',
        tooltip: {
          "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
          "State": {
            ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            ny: 'This graph shows the top four states from which funds were contributed to this candidate. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
            il: 'This graph shows the top four states from which funds were contributed to this candidate. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
          }
        },
        accessible_label: 'A pie chart containing color-coded sections corresponding to primary, secondary and other states.' // Translate
      },
      bySize: {
        label: 'By Size:',
        largeContributionsLabel: 'Large contributions',
        smallContributionsLabel: 'Small contributions',
        tooltip: {

          "Federal": 'Campaign committees are not required to disclose detailed information for contributions under $200. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
          "State": {
            ca: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            ny: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',  // currently n/a ?
            il: 'Campaign committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.', // currently n/a ?
          },
          accessible_label: 'A pie chart containing color-coded sections corresponding to large and small contributions.' // Translate
        }
      },
      byType: {
        label: 'By Type:',
        organizationsLabel: 'From organizations',
        individualsLabel: 'From individuals',
        tooltip: {
          "Federal": 'Large contributions (over $200) can be made by organizations through their political action committees (PACs) or by individuals.',
          "State": {
            ca: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
            ny: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',  // currently n/a ?
            il: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.', // currently n/a ?
          }
        },
        accessible_label: 'A pie chart containing color-coded sections corresponding to contributions from organizations and individuals.' // Translate
      },
    }
  }
};

export default candidateCardTranslation;