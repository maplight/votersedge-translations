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
    measure_not_found: 'No se pudo encontrar esa iniciativa de ley.',
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
      choices: 'Ir a Mi Lista',
      contest: 'Siguente: Ir al candidatos'
    },
     election_results_analysis: {
      election_status_complete: {
        label: 'Resultados electorales',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Resultados electorales',
        icon: 'fa-star', // 'fa-refresh',
      },
      election_status_no_results: {
        label: 'Resultados electorales no están disponible',
        icon: 'fa-circle',
      },
      contest: {
        complete: {
          icon: 'fa-star',
          message_result: ' de distritos activos',
          ballots_counted: ' boletas electorales serán contadas.',
          yes_votes: 'votos si',
          no_votes: 'votos no',
          pass: 'Se aprueba',
          fail: 'No se aprueba',
          tooltip_result: {
            message: '',
            label: 'distritos activos.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          },
        },
        in_progress: {
          icon: 'fa-star', //'fa-refresh',
          message_result: ' de distritos activos',
          ballots_counted: ' boletas electorales serán contadas.',
          yes_votes: 'votos si',
          no_votes: 'votos no',
          pass: 'Passing',
          fail: 'Failing',
          tooltip_result: {
            message: '',
            label: 'distritos activos.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          },
          measure: {
            passed: 'Se aprueba',
            failed: 'No se aprueba',
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
        label: 'Recursos addicionales',
      },
      news: {
        label: 'Noticias'
      },
      video: {
        label: 'Videos'
      },
      events: {
        label: 'Eventos',
      },
      additional_info: {
        label: 'Más información',
      }
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
        what_if_passes: '¿Qué pasa si se aprueba?', // Translation exists
        budget_effect: 'Efectos en el presupuesto estatal', // Translation exists
        people_for_say: 'La gente a favor dice', // Translation exists
        people_against_say: 'La gente en contra dice', // Translation exists
        question: 'La pregunta', // Translation exists
        situation: 'La situación', // Translation exists
        proposal: 'La propuesta', // Translation exists
        fiscal_effect: 'Efectos fiscales', // Translation exists
        supporters_say: 'Sus partidarios dicen', // Translation exists
        opponents_say: 'Sus oponentes dicen', // Translation exists
        sourceLabel: 'Resumen para los electores nuevos y ocupados',
      },
      pros_cons: {  // Translation already provided by LWVC
        label: 'Pros y Contras', // If translated, it exists already
        summary: 'Resumen',  // Translation exists
        background: 'Antecedentes',  // Translation exists
        financial_effect: 'Efectos fiscales',  // Translation exists
        sourceLabel: 'Explicación objetiva con argumentos a favor y en contra',
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
        rebuttals_for: 'Refutación al argumento A FAVOR', // Translation exists
        rebuttals_against: 'Refutación al argumento EN CONTRA', // Translation exists
        arguments_for: 'Argumento A FAVOR', // Translation exists
        arguments_against: 'Argumento EN CONTRA', // Translation exists
        proposed_legislation: 'Legislación propuesta', // Translate
        read_proposed_legislation: 'Leer la legislación propuesta', // Translate
        what_is_proposal: '¿Qué es esta propuesta?', // Translate
        endorsements: '¿Quién está a favor y en contra de esta iniciativa de ley?', // Translate
        funding: '¿Quién contribuyó?', // Translate
        more_info: 'Más información', // Translate
        message_content: 'Additional info',
        sourceLabel: 'Información oficial sobre esta iniciativa',
      },
      intro: {
        details: 'A continuación se proporciona información útil acerca de esta iniciativa de ley en la boleta electoral obtenida de fuentes confiables.',
      },
    },
    embedCard: {
      topContributors: {
        label:  'Mayores contribuyentes',
        yes: 'A favor',
        no: 'En contra',
        total_raised: 'total raised',
        total_raised_short: 'raised',
        multiple_contributors: 'Multiple contributors',
      },
      vote_means: {
        label: 'vote means',
        yes: 'Si',
        no: 'No',
      }
    },
    fundingTranslation: {
      accordionLabels: {
        contributions: 'Contribuciones',
        moreInfoAboutContributions: 'Más información acerca de las contribuciones',
      },
      sourceLabel: {
        "Federal": 'Fuente: Análisis de datos de la Comisión Federal Electoral de MapLight.',
        "State": {
        ca: 'Fuente: Análisis de datos de la Secretaría del Estado de California de MapLight.',
        il: 'Fuente: Análisis de datos de la Secretaría del Estado de Illinois de MapLight.',
        ny: 'Fuente: Análisis de datos de la Secretaría del Estado de New York de MapLight.',
      }
      },
      totalMoneyRaisedLabel: "Dinero total recaudado",
      totalMoneyRaisedTooltip: 'Estos montos reflejan el dinero proporcionado a, e informado por, los comités formados principalmente para apoyar u oponerse a la iniciativa de ley en la boleta en cuestión en este ciclo de elecciones.',
      whoGaveMostMoneyTitle: "¿Quién dio más dinero?",
      whoGaveMostMoneyLabel: {
        "Federal": 'A continuación, están los primeros 10 contribuyentes que dieron más dinero a los comités que apoyan o se oponen a la(s) iniciativa(s) de ley.',
        "State": {
          ca: 'A continuación, están los primeros 10 contribuyentes que dieron más dinero a los comités que apoyan o se oponen a la(s) iniciativa(s) de ley.',
          il: 'A continuación, están los primeros 10 contribuyentes que dieron más dinero a los comités que apoyan o se oponen a la(s) iniciativa(s) de ley.',
          ny: 'A continuación, están los primeros 10 contribuyentes que dieron más dinero a los comités que apoyan o se oponen a la(s) iniciativa(s) de ley.',
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
      pieCharts: {
        byState: {
          label: 'Por estado:',
          tooltip: {
            "Federal": 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este iniciativa de ley. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
            "State": {
              ca: 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este iniciativa de ley. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
              ny: 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este iniciativa de ley. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
              il: 'Esta gráfica muestra los cuatro estados principales de donde provinieron los fondos que se contribuyeron a este iniciativa de ley. La categoría con el texto "otros" representa el monto total del financiamiento que se contribuyó en otras partes de los Estados Unidos.',
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
            ny: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
            il: 'Los comités de campaña no están obligados a divulgar información detallada de contribuciones menores de $100. Estas pequeñas contribuciones (no detalladas) se divulgan como cantidad global con cada nuevo registro.',
          },
            accessible_label: 'A pie chart containing color-coded sections corresponding to large and small contributions.'
          }
        },
        byType: {
          label: 'Por tipo:',
          organizationsLabel: 'De organizaciones',
          individualsLabel: 'De individuos',
          tooltip: {
            "Federal": 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
            "State": {
              ca: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
              ny: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
              il: 'Las contribuciones grandes (más de $100) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
            }
          },
          accessible_label: 'A pie chart containing color-coded sections corresponding to contributions from organizations and individuals.' // Translate
        },
      }
    },
    contest_message_additional_info: 'Las contribuciones grandes (más de $200) pueden hacerse por organizaciones mediante sus comités de acción política (PAC) o por individuos.',
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
    ballotVotingInfo: "En su boleta electoral real, puede votar 'sí' o 'no' por esta iniciativa.",
    addChoice: 'Agregar una opción a mi lista',
    screenReaderInstructions: "Use tabs to select your choice. Use return to create a choice. You can access your list by navigating to 'My List'.",

  }
};

export default measureTranslation;
