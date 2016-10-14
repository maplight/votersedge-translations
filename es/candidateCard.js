import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.
const candidateCardTranslation = {
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
  photo_label: "Photo de ",
  participation: {
    researched: 'La experiencia se investigó parcialmente por Voter’s Edge.', //Translate
    researched_encourage: 'Contactar y solicitar al candidato que presente más información.', //Translate
    candidate_provided_info: 'El candidato(a) proporcionó información.', //Translate
    candidate_no_info: 'El candidato(a) no proporcionó información.', //Translate
    candidate_no_info_encourage: 'Ponerse en contacto con ellos para fomentar la participación.', //Translate
    researched_data: 'Investigó por Voter’s Edge.',
  },
  question_source_label: 'Preguntas de',
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
      moreInfoAboutContributions: 'Más información acerca de contribuciones',
    },
    sourceLabel: {
      "Federal": 'Fuente: Análisis de datos de la Comisión Federal Electoral de MapLight.', // Translate
      "State": {
        ca: 'Fuente: Análisis de datos de la Secretaría del Estado de California de MapLight.', // Translate text but not names
        il: 'Fuente: Análisis de datos de la Secretaría del Estado de Illinois de MapLight.', // Translate text but not names
        ny: 'Fuente: Análisis de datos de la Secretaría del Estado de New York de MapLight.', // Translate text but not names
      }
    },
    totalMoneyRaisedLabel: "Dinero total recaudado", //Translate
    totalMoneyRaisedTooltip: 'These amounts reflect the money given to, and reported by, candidates’ principal campaign committees for the given office within this election cycle. This does not include money given to other types of committees, such as Super PACs that support or oppose the candidate.',
    whoGaveMostMoneyTitle: "¿Quién dio más dinero??",
    whoGaveMostMoneyLabel: {
      "Federal": 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s).',
      "State": {
        ca: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s).',
        il: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s).',
        ny: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s).',
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
    whoGaveMostMoneyOrganizations: 'Organizaciones',
    whoGaveMostMoneyIndividuals: 'Individuos',
    moreInfoAboutContributions: 'Más información acerca de contribuciones',
    pieCharts: {
      byState: {
        label: 'Por estado:',
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
        label: 'Por tamaño:',
        largeContributionsLabel: 'Contribuciones grandes',
        smallContributionsLabel: 'Contribuciones pequeñas',
        tooltip: {
          "Federal": 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
          "State": {
            ca: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
            ny: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',  // currently n/a ?
            il: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.', // currently n/a ?
          },
          accessible_label: 'Gráfica circular con secciones clasificadas por color que corresponden a contribuciones grandes y pequeñas.' // Translate
        }
      },
      byType: {
        label: 'Por tipo:',
        organizationsLabel: 'De organizaciones',
        individualsLabel: 'De individuos',
        tooltip: {
          "Federal": 'Large contributions (over $200) can be made by organizations through their political action committees (PACs) or by individuals.',
          "State": {
            ca: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
            ny: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',  // currently n/a ?
            il: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.', // currently n/a ?
          }
        },
        accessible_label: 'Gráfica circular con secciones clasificadas por color que corresponden a contribuciones de organizaciones y de individuos.' // Translate
      },
    }
  }
};

export default candidateCardTranslation;
