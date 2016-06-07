import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content associated with a candidate.
const candidateCardTranslation = {
  no_photo_submitted: 'No se proporcionó fotografía', //Translate
  encourage_candidate: 'Los candidatos pueden', //Translate
  encourage_candidate_link: 'ponerse en contacto con nosotros', //Translate
  encourage_candidate_action: 'para proporcionar información.', //Translate
  photo_label: "Photo de ",
  participation: {
    researched: 'La experiencia se investigó parcialmente por Voter’s Edge.', //Translate
    researched_encourage: 'Contactar y solicitar al candidato que presente más información.', //Translate
    candidate_provided_info: 'El candidato(a) proporcionó información.', //Translate
    candidate_no_info: 'El candidato(a) no proporcionó información.', //Translate
    candidate_no_info_encourage: 'Ponerse en contacto con ellos para fomentar la participación.', //Translate
    researched_data: 'Investigó por Voter’s Edge.',
  },
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
    responses_to_questions: 'Respuestas a preguntas', //Translate
    political_beliefs: 'Creencias poliza', //Translate
    no_question_answer: 'No se proporcionó respuesta.', //Translate
    question_label: 'Pregunta:', //Translate
    answer_label: 'Respuesta:', //Translate
    profession: 'Profesión:', //Translate
    official_statement: 'Declaración oficial',
    who_funds_candidate: '¿Quién financia a este candidato?', //Translate
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
  },

  fundingTranslation: {
    contributionsTitle: "Contribuciones al candidato", //Translate
    contributionsExplanation: {
      "Federal": 'Estas cantidades reflejan el dinero proporcionado a, y reportado por, los comités principales de campaña de los candidatos para el puesto específico. Esto no incluye el dinero proporcionado a otros tipos de comité, como los Supercomités de Acción Política (Political Action Committee, PAC) que apoyan al candidato o se oponen él.', //Translate
      "State": {
        ca: 'Estas cantidades reflejan el dinero proporcionado a, y reportado por, los comités principales de campaña de los candidatos para el puesto específico. Esto no incluye el dinero proporcionado a otros tipos de comité, como los comités de gastos independientes que apoyan al candidato o se oponen él.', //Translate
        il: 'Estas cantidades reflejan el dinero proporcionado a, y reportado por, los comités principales de campaña de los candidatos para el puesto específico. Esto no incluye el dinero proporcionado a otros tipos de comité, como los comités de gastos independientes que apoyan al candidato o se oponen él.', //Translate
        ny: 'Estas cantidades reflejan el dinero proporcionado a, y reportado por, los comités principales de campaña de los candidatos para el puesto específico. Esto no incluye el dinero proporcionado a otros tipos de comité, como los comités de gastos independientes que apoyan al candidato o se oponen él.', //Translate
      }
    },

    totalMoneyRaised: "Dinero total recaudado", //Translate
    contributionSize: 'Los candidatos no están obligados a divulgar información detallada de contribuciones menores de $100. Estas contribuciones no detalladas se divulgan como cantidad global con cada nuevo registro.', //Translate
    organizationContributionsTitle: '¿Quién hizo contribuciones?', //Translate
    organizationContributionsLabel: {
      "Federal": 'Las contribuciones pueden hacerse directamente por organizaciones, mediante sus comités de acción política (PAC) o por individuos.', //Translate
      "State": {
        ca: 'Las contribuciones pueden hacerse directamente por organizaciones, mediante sus comités de acción política (PAC) afiliados o por individuos.', //Translate
        il: 'Las contribuciones pueden hacerse directamente por organizaciones, mediante sus comités de acción política (PAC) afiliados o por individuos.', //Translate
        ny: 'Las contribuciones pueden hacerse directamente por organizaciones, mediante sus comités de acción política (PAC) afiliados o por individuos.', //Translate
      }
    },
    whoGaveMostMoneyTitle: "¿Quién dio más dinero?",
    whoGaveMostMoneyLabel: {
      "Federal": 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s). Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por la organización o el PAC de la misma.',
      "State": {
        ca: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s). Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por la organización o el PAC de la misma.',
        il: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s). Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por la organización o el PAC de la misma.',
        ny: 'A continuación, le presentamos los mayores contribuyentes que dieron dinero para apoyar al (a los) candidato(s). Hemos combinado las contribuciones hechas por los empleados de una organización con las contribuciones hechas directamente por la organización o el PAC de la misma.',
      }
    },

    ofTotal: 'of total', //Translate
    topFiveByStateTitle: 'Mayores contribuciones por estado', //Translate
    topTenByStateLabel: '',
    piechartTitle: 'Mayores contribuciones por estado', //Translate
    piechartLabel: '',

    contributionSizeTitle: '¿Qué tan grandes son las contribuciones?', //Translate
    contributionSizeLabel: {
      "Federal": 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $200. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.', //Translate
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
};

export default candidateCardTranslation;
