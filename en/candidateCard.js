import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const candidateCardTranslation = {
 No photo submitted

 Candidates can contact us</a> to submit info.

 Candidate website

 Experience partially researched by Voter‘s Edge</div><div className={s["description"]}>Contact and ask the candidate to submit more information.

 Candidate has provided information

 Candidate has not provided information.</div><div className={s["description"]}>Contact them to encourage participation.

 Experience
 Education
 Community Activities
 Biography

 Professional Experience
 Top 3 priorities
 My top 3 priorities

 Judicial Ratings
 Videos
 Political Philosophy
 Position Papers
 Responses to questions
 Political Beliefs
 No answer provided.
 Question:
 Answer:

 Profession:

         let experienceLabels = {
          institution: 'Institution',
          degree: 'Degree',
          subject: 'Subject',
          years: 'Years',
          last_year: 'Last Year',
        }

               ' — Appointed position';

           ' — Elected position';



           Featured
           Organization
           Elected Official
           Individual
           Organizations 
           Elected officials
           Individuals
           Who supports this candidate?
};


let fundingTranslation = {
    contributionsTitle: "Contributions to candidate",
    contributionsExplanation: {
      "Federal": 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.',
      "State": {
        ca: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
        il: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
        ny: 'These amounts reflect the money given to, and reported by, candidates‘ principal campaign committees for the given office. This does not include money given to other types of committees, such as independent expenditure committees that support or oppose the candidate.',
      }
    },

    // contributionsSource: "Source: MapLight analysis of data from the California Secretary of State.",
    totalMoneyRaised: "Total money raised",
    contributionSize: 'Candidates are not required to disclose detailed information for contributions under $100. These unitemized contributions are disclosed as a lump sum with each new filing.',

    organizationContributionsTitle: 'Who gave contributions?',
    // contrib "types"
    organizationContributionsLabel: {
      "Federal": 'Contributions can be made by organizations through their political action committees (PACs) or by individuals.',
      "State": {
        ca: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
        il: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
        ny: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
      }
    },
//Here are the top organizations and individuals to give money to support this candidate’s campaign. We have included contributions from an organization as well as from its employees or members so that you can see how active an organization is with respect to a particular candidate.</p><p>When an organization or company gives money to a candidate, they use a Political Action Committee (PAC). The organization is allowed to give up to $10,000 for this contest. We have also included the amount contributed by the employees of this organization, though employees‘ political preferences do not always match that of their employer.</p>
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
  }

  Who funds this candidate?

  Candidate Contact Info



  let labels = {
    explanation: "Here are ...",
    label_total: "of total",
    label_organization_100: "Contribution from a PAC",
    label_individual_100: "Contribution from an individual",
    label_organization: "PAC",
    label_individual: "Individuals",
    icon_organization: "organization.svg",
    icon_individual: "individual.svg",
    source: "Maplight"
  }

    let labels = {
    explanation: "",
    label_in_state: "In-state contributions",
    label_other: "Other states",
    label_out_of_state: "Out-of-state",
  }


  Accessible Pie Chart label TBD

  

export default candidateCardTranslation;