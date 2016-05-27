import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const measureTranslation = {
  measure: {
    pageTitle: 'Iniciativa de ley', // Translate
    positions: {
      yes: {
        label: 'Sí', // Translate
        campaign: "Información del contacto de la campaña por el sí", // Translate
      },
      no: {
        label: 'No', // Translate
        campaign: "Información del contacto de la campaña por el no", // Translate
      },
      neutral: {
        label: 'Neutral', // Translate
        campaign: "Información del contacto", // Translate
      },
    },
    screenreader: {
      accordion: 'To learn more about measures, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    sourceLabel: 'Fuente: ', // Translate
    endorsements_label: {
      organization: 'Organización', // Translate
      individual: 'Individuo', // Translate
      elected_official: 'Funcionario electo', // Translate
      elected_appointed_official: 'Funcionario electo y designado'
    },
    endorsements_label_plural: {
      organization: 'Organizaciónes', // Translate
      individual: 'Individuos', // Translate
      elected_official: 'Funcionarios electos', // Translate
      elected_appointed_official: 'Funcionarios electos y designados',
    },
    pieChartLabels: {
      explanation: "",
      label_in_state: "", // Translate
      label_other: "Otros estados", // Translate
      label_out_of_state: "Fuera del estado", // Translate
      accessible_label: 'Gráfica circular con secciones clasificadas por color que corresponden a residentes del estado, fuera del estado y de otros estados.' // Translate
    },
    navigation: {
      next: 'Siguiente:', // Translate
      back: 'Atrás:', // Translate
      last: 'Última contienda',  // Translate
      overview: 'Obtener una perspectiva general', // Translate
    },

    // Easy Voter Guide in Spanish: http://www.easyvoterguide.org/wp-content/uploads/2010/09/EVG-Nov14-Sp-final.pdf
    //
    accordionLabels: {
      learn_more: 'Additional resources', // Translate
      opinions: 'Opiniones y análisis', // Translate
      events: {
        label: 'Eventos',  // Translate
        upcoming: 'Próximos eventos', // Translate
        past: 'Eventos pasados', // Translate
        host: 'Anfitrión', // Translate
        date: 'Fecha', // Translate
        location: 'Lugar', // Translate
        time: 'Hora', // Translate
      },
      news: {
        label: 'News Coverage'
      },
      video: {
        label: 'Videos'
      },
      evg: {   // Translation already provided by LWCV
        label: 'Guía Fácil para el Votante', // If translated, it exists already
        way_it_is_now: 'The way it is now', // Translation exists
        what_if_passes: 'What if it passes?', // Translation exists
        budget_effect: 'Budget effect', // Translation exists
        people_for_say: 'People FOR say', // Translation exists
        people_against_say: 'People AGAINST say', // Translation exists
        question: 'The Question', // Translation exists
        situation: 'The Situation', // Translation exists
        proposal: 'The Proposal', // Translation exists
        fiscal_effect: 'Fiscal effect', // Translation exists
        supporters_say: 'Supporters say', // Translation exists
        opponents_say: 'Opponents say', // Translation exists
      },
      pros_cons: {  // Translation already provided by LWVC
        label: 'Pros & Cons', // If translated, it exists already
        summary: 'Summary',  // Translation exists
        background: 'Background',  // Translation exists
        financial_effect: 'Financial effect',  // Translation exists
      },
      basics: { // Translation already provided by Secretary of State except where noted
        label: 'Información básica sobre la iniciativa de ley',
        summary: 'Summary',  // Translation exists
        background: 'Background',  // Translation exists
        financial_effect: 'Financial effect',  // Translation exists
        impartial_analysis: 'Impartial analysis',  // Translation exists
        tax_rate: 'Tax rate', // Translation exists
        yes_vote_means: 'YES vote means', // Translation exists
        no_vote_means: 'NO vote means', // Translation exists
        rebuttals: 'Rebuttals (Replies)', // Translation exists
        arguments_for: 'Arguments FOR', // Translation exists
        arguments_against: 'Arguments AGAINST', // Translation exists
        proposed_legislation: 'Legislación propuesta', // Translate
        read_proposed_legislation: 'Leer la legislación propuesta', // Translate
        what_is_proposal: '¿Qué es esta propuesta?', // Translate
        endorsements: '¿Quién respalda las campañas de iniciativas de ley en las boletas?', // Translate
        funding: '¿Quién contribuye con el dinero?', // Translate
        more_info: 'Más información', // Translate
        message_content: 'Learn more about this measure'
      }
    },
    fundingTranslation: {
      contributionsTitle: "Contribuciones a las campañas",  // Translate
      contributionsExplanation: 'Estos montos reflejan el dinero proporcionado a, e informado por, los comités formados principalmente para apoyar u oponerse a la iniciativa de ley en la boleta dada.', // Translate
      contributionsSource: "Fuente: Análisis de datos de la Secretaría del Estado de California de MapLight. Última actualización: [placeholder]", // Translate
      totalMoneyRaised: "Dinero total recaudado", // Translate
      contributionSize: 'Los comités no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como una cantidad global con cada nuevo registro.', // Translate
      organizationContributionsTitle: 'Contribuciones de organizaciones', // Translate
      organizationContributionsLabel: 'Las contribuciones pueden hacerse directamente por organizaciones, mediante sus comités de acción política (PAC) afiliados o por individuos.', // Translate
      whoGaveMostMoneyTitle: "¿Quién dio más dinero?", // Translate
      whoGaveMostMoneyLabel: 'A continuación, están los primeros 10 contribuyentes que dieron más dinero a los comités que apoyan o se oponen a la(s) iniciativa(s) de ley dada(s).', // Translate
      ofTotal: 'del total', // Translate
      topTenByStateTitle: 'Primeras 5 contribuciones por estado', // Translate
      topTenByStateLabel: '',
      piechartTitle: '',
      piechartLabel: '',

      contributionSizeTitle: '¿Qué tan grandes son las contribuciones?', // Translate
      contributionSizeLabel: 'Los comités no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como una cantidad global con cada nuevo registro.', // Translate
      contributionOver: {
        "Federal": "Contribuciones arriba de $200", // Translate
        "State": "Contribuciones arriba de $100", // Translate
      },
      contributionUnder: {
        "Federal": "Contribuciones abajo de $200", // Translate
        "State": "Contribuciones abajo de $100", // Translate
      },
      organizationsOrg: {
        "label": "De organizaciones", // Translate
        "tooltip": "Contribuciones de empresas, sindicatos u otras organizaciones.", // Translate
      },
      organizationsEmployees: {
        "label": "De empleados", // Translate
        "tooltip": "Contribuciones de individuos, incluidos los empleados de organizaciones.", // Translate
      },
      cashHat: 'public/content/svg/icons/Federal-100.png', // No translation
      moneyHand: 'public/content/svg/icons/Federal-100.png', // No translation
    },
    sectionTitle: "Iniciativas de ley", // Translate
    measureDescriptionLabel: "Acerca de esta iniciativa de ley", // Translate
    my_choices: "¿Apoya esta propuesta?", // Translate
    SoS: "Secretario de Estado", // Translate
    EVG: "Guía Fácil para el Votante: League of Women Voters of California",  // Translate?
    LWVC: "Pros y contras: League of Women Voters of California",  // Translate?
    aboutLabel: 'What is this proposition?', // Translate
    argumentsLabel: 'Argumentos a favor y en contra de esta propuesta', // Translate
    supportLabel: '¿Quién apoya esta propuesta y por qué?', // Translate
    costLabel: '¿Cuánto cuesta?', // Translate
    infoLabel: '¿Cómo puedo obtener más información?', // Translate

  }
};

export default measureTranslation;
