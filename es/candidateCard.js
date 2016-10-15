import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.
const candidateCardTranslation = {
  no_photo_submitted: 'No se proporcionó fotografía.', //Translate
  no_info_submitted: 'No se proporcionó información.', //Translate
  encourage_candidate: '¿Usted es el candidato?', //Translate
  encourage_candidate_link: 'http://join.votersedge.org', //Translate
  encourage_candidate_action: 'Agregue más información', //Translate
  message_candidate: {
    label: 'Anime al candidato a compartir su información en Voter’s Edge.',
    label_no_social: '¿Conoce al candidato? Cuéntele sobre Voter’s Edge',
    label_thank_you: 'Agradezca al candidato por compartir su información en Voter’s Edge.',
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
    accordion: 'Para obtener más información a fondo sobre este candidato, siga los enlaces de cada pestaña en esta sección. En la mayoría de los lectores de pantalla, puede presionar Regresar o Ingresar para entrar a una pestaña y leer el contenido.'
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
      officialStatement: 'Investigó por Voter’s Edge',
      funding: 'Análisis realizado por Maplight',
      judicial: 'Investigó por Voter’s Edge',
    },
  },
  embedCard: {
    endorsementsLabel: 'Respaldos',
    top3PrioritiesLabel: 'Las 3 prioridades principales',
    fundingLabel: 'Los 3 donadores principales',
    noEndorsements: 'No hay información disponible sobre respaldos',
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
    totalMoneyRaisedTooltip: 'Estas cantidades reflejan el dinero proporcionado a, y reportado por, los comités principales de campaña de los candidatos para el puesto específico en este ciclo de elecciones. Esto no incluye el dinero proporcionado a otros tipos de comités, como los supercomités de acción política (Political Action Committee, PAC) que apoyan al candidato o que se oponen a él.',
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
      "Federal": 'Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por el PAC de la organización.',
      "State": {
        ca: 'Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por el PAC de la organización.',
        il: 'Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por el PAC de la organización.',
        ny: 'Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por el PAC de la organización.',
      }
    },
    whoGaveMostMoneyOrganizations: 'Organizaciones',
    whoGaveMostMoneyIndividuals: 'Individuos',
    moreInfoAboutContributions: 'Más información acerca de contribuciones',
    pieCharts: {
      byState: {
        label: 'Por estado:',
        tooltip: {
          "Federal": 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $200. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
          "State": {
            ca: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
            ny: 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este candidato. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
            il: 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este candidato. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
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
          "Federal": 'Las contribuciones grandes (más de $200) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
          "State": {
            ca: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
            ny: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',  // currently n/a ?
            il: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.', // currently n/a ?
          }
        },
        accessible_label: 'Gráfica circular con secciones clasificadas por color que corresponden a contribuciones de organizaciones y de individuos.' // Translate
      },
    }
  }
};

export default candidateCardTranslation;
