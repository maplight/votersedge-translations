import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.
const candidateCardTranslation = {
  choiceCandidateAdded: 'Agregar un candidato a mi lista',
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
      notParticipatingEmail: 'Dear [!CANDIDATENAME],[!BR][!BR]I am using [!BRANDEDSITENAME] to research the candidates running for [!CONTESTNAME] in the upcoming primary election, and I don’t see any information from you on your profile ([!SHARECONTENTURL]).[!BR][!BR]**Start adding to your [!BRANDEDSITENAME] profile! http://join.votersedge.org** [!BR][!BR]I’m using [!BRANDEDSITENAME] to prepare to vote because it has all of my candidate, measure, and general voting info in one place. Please help me make an informed decision by completing your [!BRANDEDSITENAME] profile![!BR][!BR]{Personalize this message.}[!BR][!BR]Thank you and I look forward to learning more about your campaign.[!BR][!BR]Sincerely,[!BR]{Add your name here}[!BR][!BR]**Start adding to your [!BRANDEDSITENAME]] profile! http://join.votersedge.org**',
      participatingEmail: 'Dear [!CANDIDATENAME],[!BR][!BR]I am using [!BRANDEDSITENAME] to research the candidates running for [!CONTESTNAME] in the upcoming primary election. Thank you for providing your information![!BR][!BR]Start adding to your [!BRANDEDSITENAME]] profile! http://join.votersedge.org[!BR][!BR]I’m using [!BRANDEDSITENAME] to prepare to vote because it has all of my candidate, measure, and general voting info in one place. Please help me make an informed decision by completing your [!BRANDEDSITENAME] profile![!BR][!BR]{Personalize this message.}[!BR][!BR]Thank you and I look forward to learning more about your campaign.[!BR][!BR]Sincerely,[!BR]{Add your name here}',
    }
  },
  photo_label: "Photo de ",
  participation: {
    researched: 'La experiencia se investigó parcialmente por Voter’s Edge.', //Translate
    researched_encourage: 'Contactar y solicitar al candidato que presente más información.', //Translate
    candidate_provided_info: 'El candidato(a) proporcionó información.', //Translate
    candidate_no_info: 'El candidato(a) no proporcionó información.', //Translate
    candidate_no_info_encourage: 'Ponerse en contacto con ellos para fomentar la participación.', //Translate
    researched_data: 'Investigó por Voter’s Edge.',
  },
  question_source_label: 'Questions from',
  screenreader: {
    accordion: 'For more in-depth information on this candidate, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
  },
  candidate_website_label: 'Visite el sitio web del candidato', //Translate
  accordionLabels: {
    experience: 'Experiencia', // Translate
    education: 'Educación', // Translate
    community_activities: 'Actividades comunitarias', // Translate
    biography: 'Biografía', // Translate
    professional_experience: 'Experiencia profesional', // Translate
    top_3_priorities: 'Las 3 prioridades principales', // Translate
    top_3_priorities_candidate: 'Mis 3 prioridades principales', // Translate
    judicial_ratings: 'Designaciones judiciales', // Translate
    videos: 'Videos', //Translate
    political_philosophy: 'Filosofía política', //Translate
    position_papers: 'Documentos sobre determinadas posturas', //Translate
    responses_to_questions: 'Preguntas y Respuestas', //Translate
    political_beliefs: 'Creencias poliza', //Translate
    no_question_answer: 'No se proporcionó respuesta.', //Translate
    question_label: 'Pregunta:', //Translate
    answer_label: 'Respuesta de', //Translate
    profession: 'Profesión:', //Translate
    official_statement: 'Declaración oficial',
    who_funds_candidate: '¿Quién proporcionó dinero a este candidato?', //Translate
    who_supports_candidate: '¿Quién apoya a este candidato?', //Translate
    candidate_contact_info: 'Información de contacto del candidato', //Translate
    experienceLabels: {
      institution: 'Institución', //Translate
      degree: 'Título', //Translate
      subject: 'Materia', //Translate
      years: 'Años', //Translate
      last_year: 'Último año', //Translate
    },
    position_appointed: ' — Cargo designado', //Translate
    position_elected: ' — Cargo elegido', //Translate
    endorsements_label: {
      featured: 'Destacado', //Translate
      organization: 'Organización', //Translate
      individual: 'Individuo', //Translate
      elected_official: 'Funcionario electo', //Translate
    },
    endorsements_label_plural: {
      featured: 'Destacado', //Translate
      organization: 'Organizaciónes', //Translate
      individual: 'Individuos', //Translate
      elected_official: 'Funcionarios electos', //Translate
    },
    sourceLabels: {
      officialStatement: 'Researched by Voter’s Edge',
      funding: 'Análisis realizado por Maplight',
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
      contributions: 'Contribuciones',
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
    totalMoneyRaisedLabel: "Dinero total recaudado", //Translate
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
    moreInfoAboutContributions: 'More information about contributions',
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
