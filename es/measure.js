import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const measureTranslation = {
  measure: {
    information_provided_by: 'Fuente:',
    from: 'Fuente:',
    measureContestTitle: 'Ballot Measures',
    pageTitle: 'Iniciativa de ley', // Translate
    proposition_abbreviation: "Iniciativa de ley",
    positions: {
      yes: {
        label: 'Sí', // Translate
        campaign: "Información del contacto de la campaña por el sí", // Translate
        for: 'Sí por',
      },
      no: {
        label: 'No', // Translate
        campaign: "Información del contacto de la campaña por el no", // Translate
        for: 'No por',
      },
      neutral: {
        label: 'Neutral', // Translate
        campaign: "Información del contacto", // Translate
      },
    },
    toolbar: [
      {
        label: '',  // Translate
        icon: '',
        type: 'share'
      },
    ],
    screenreader: {
      accordion: 'To learn more about measures, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    measure_not_found: 'Could not find that measure.',
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
      elected_official: 'Funcionarios electos y designados', // Translate
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
      next: "Siguiente",
      back: "Atrás",
      last: "Última contienda",
      overview: "Resumen",
      choices: 'Go to My List',
      contest: 'Next: Go to Candidates'
    },
     election_results_analysis: {
      election_status_complete: {
        label: 'Election Results.',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Election Results.',
        icon: 'fa-star', // 'fa-refresh',
      },
      election_status_no_results: {
        label: 'No election results available.',
        icon: 'fa-circle',
      },
      contest: {
        complete: {
          icon: 'fa-star',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted.',
          yes_votes: 'votes yes',
          no_votes: 'votes no',
          pass: 'Passed',
          fail: 'Failed',
          tooltip_result: {
            message: '',
            label: 'precincts reporting.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          },
        },
        in_progress: {
          icon: 'fa-star', //'fa-refresh',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted',
          yes_votes: 'votes yes',
          no_votes: 'votes no',
          pass: 'Passing',
          fail: 'Failing',
          tooltip_result: {
            message: '',
            label: 'precincts reporting.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          },
          measure: {
            passed: 'Passed',
            failed: 'Failed',
          },
        },
      },
    },

    get_evg: 'Descargar copias de esta guía en',
    get_evg_languages: {
      English: 'inglés',
      Spanish: 'español',
      Chinese: 'chino',
      Vietnamese: 'vietnamita',
      Korean: 'coreano',
    },
    // Easy Voter Guide in Spanish: http://www.easyvoterguide.org/wp-content/uploads/2010/09/EVG-Nov14-Sp-final.pdf
    contestLabels: {
      contest_links: {
        label: 'Additional resources',
      },
      news: {
        label: 'News'
      },
      video: {
        label: 'Videos'
      },
      events: {
        label: 'Events',
      },
    },
    accordionLabels: {
      learn_more: 'Otros recursos', // Translate
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
        label: 'Noticias'
      },
      video: {
        label: 'Videos'
      },
      evg: {   // Translation already provided by LWCV
        label: 'Guía Fácil para el Votante', // If translated, it exists already
        way_it_is_now: 'Cómo está ahora', // Translation exists
        what_if_passes: 'Lo que haría la Prop. 50 si se aprueba', // Translation exists
        budget_effect: 'Efectos en el presupuesto estatal', // Translation exists
        people_for_say: 'Quienes apoyan la Prop 50 dicen', // Translation exists
        people_against_say: 'Quienes están contra la Prop 50 dicen', // Translation exists
        question: 'La pregunta', // Translation exists
        situation: 'La situación', // Translation exists
        proposal: 'La propuesta', // Translation exists
        fiscal_effect: 'Efectos fiscales', // Translation exists
        supporters_say: 'Sus partidarios dicen', // Translation exists
        opponents_say: 'Sus oponentes dicen', // Translation exists
      },
      pros_cons: {  // Translation already provided by LWVC
        label: 'Pros y Contras', // If translated, it exists already
        summary: 'Resumen',  // Translation exists
        background: 'Antecedentes',  // Translation exists
        financial_effect: 'Efectos fiscales',  // Translation exists
      },
      basics: { // Translation already provided by Secretary of State except where noted
        label: 'Información básica sobre la iniciativa de ley',
        summary: 'Resumen oficial',  // Translation exists
        background: 'Antecedentes',  // Translation exists
        financial_effect: 'Efectos fiscales',  // Translation exists
        impartial_analysis: 'Análisis del analista legislativo / Proposal',  // Translation exists
        tax_rate: 'Tax rate', // Translation exists
        yes_vote_means: 'Un voto por el SÍ significa', // Translation exists
        no_vote_means: 'Un voto por el NO significa', // Translation exists
        rebuttals_for: 'Replies to Arguments FOR', // Translation exists
        rebuttals_against: 'Replies to Arguments AGAINST', // Translation exists
        arguments_for: 'Argumento A FAVOR', // Translation exists
        arguments_against: 'Argumento EN CONTRA', // Translation exists
        proposed_legislation: 'Legislación propuesta', // Translate
        read_proposed_legislation: 'Leer la legislación propuesta', // Translate
        what_is_proposal: '¿Qué es esta propuesta?', // Translate
        endorsements: '¿Quién respalda las campañas de iniciativas de ley en las boletas?', // Translate
        funding: '¿Quién contribuye con el dinero?', // Translate
        more_info: 'Más información', // Translate
        message_content: 'Aprender más acerca de este propuesta'
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
      piechartTitle: 'Top 5 contributions by state (Graph)',
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
    EVG: "The League of Women Voters of California Education Fund",  // Translate?
    LWVC: "Pros y contras: League of Women Voters of California",  // Translate?
    aboutLabel: '¿Que es este propuesta?', // Translate
    argumentsLabel: 'Argumentos a favor y en contra de esta propuesta', // Translate
    supportLabel: '¿Quién apoya esta propuesta y por qué?', // Translate
    costLabel: '¿Cuánto cuesta?', // Translate
    infoLabel: '¿Cómo puedo obtener más información?', // Translate

  }
};

export default measureTranslation;
