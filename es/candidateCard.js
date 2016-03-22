import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.

const candidateCardTranslation = {
  no_photo_submitted: 'No se proporcionó fotografía', //Translate
  encourage_candidate_link: 'Los candidatos pueden ponerse en contacto con nosotros', //Translate
  encourage_candidate_action: 'para proporcionar información.', //Translate
  participation: {
    researched: 'La experiencia se investigó parcialmente por Voter's Edge.</div><div className={s["description"]}>Contactar y solicitar al candidato que presente más información.</div>', //Translate
    candidate_no_info: 'El candidato proporcionó información', //Translate
    candidate_no_info_encourage: 'El candidato no proporcionó información.</div><div className={s["description"]}>Ponerse en contacto con ellos para fomentar la participación.</div>', //Translate
  }
  candidate_website_label: 'Sitio web del candidato', //Translate
  accordionLabels: {
    experience: 'Experiencia', // Translate
    education: 'Educación', // Translate
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
      "Federal": 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $200. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro."', //Translate
      "State": {
        ca: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.', //Translate
        il: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.', //Translate
        ny: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.', //Translate
      }
    },

    contributionOver: {
      "Federal": "Contribuciones grandes", // "Contributions over $200",
      "State": "Contribuciones grandes", //Translate
    },
    contributionUnder: {
      "Federal": "Contribuciones pequeñas", //Translate
      "State": "Contribuciones pequeñas", //Translate
    },
    organizationsOrg: {
      "label": "De organizaciones", //Translate
      "tooltip": "Contribuciones de empresas, sindicatos u otras organizaciones.", //Translate
    },
    organizationsEmployees: {
      "label": "De individuos", //Translate
      "tooltip": "Contribuciones de individuos, incluidos los empleados de organizaciones.", //Translate
    },
    cashHat: 'public/content/svg/icons/Federal-100.png', // No translation
    moneyHand: 'public/content/svg/icons/Federal-100.png', // No translation
    sourceLabel: {
      "Federal": 'Fuente: Análisis de datos de la Comisión Federal Electoral de MapLight.', // Translate
      "State": {
        ca: 'Fuente: Análisis de datos de la Secretaría del Estado de California de MapLight.', // Translate text but not names
        il: 'Fuente: Análisis de datos de la Secretaría del Estado de Illinois de MapLight.', // Translate text but not names
        ny: 'Fuente: Análisis de datos de la Secretaría del Estado de New York de MapLight.', // Translate text but not names
      }
    }
  },
  pieChartLabels: {
    explanation: "",
    label_in_state: "Contribuciones de residentes del estado", // Translate
    label_other: "Otros estados", // Translate
    label_out_of_state: "Fuera del estado", // Translate
    accessible_label: 'Gráfica circular con secciones clasificadas por color que corresponden a residentes del estado, fuera del estado y de otros estados.' // Translate
  }
},

export default candidateCardTranslation;
