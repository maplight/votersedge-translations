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
        label: 'Additional Resources',
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
      additional_info: {
        label: 'Additional Info',
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
        sourceLabel: 'Summary for new and busy voters',
      },
      pros_cons: {  // Translation already provided by LWVC
        label: 'Pros y Contras', // If translated, it exists already
        summary: 'Resumen',  // Translation exists
        background: 'Antecedentes',  // Translation exists
        financial_effect: 'Efectos fiscales',  // Translation exists
        sourceLabel: 'Unbiased explanation with arguments for and against',
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
        message_content: 'Additional info',
        sourceLabel: 'Official information about this measure',
      },
      intro: {
        details: 'Here is some helpful information about this ballot measure from trusted sources.',
      },
    },
    embedCard: {
      topContributors: {
        label:  'Top Contributors',
        yes: 'FOR',
        no: 'AGAINST',
        total_raised: 'total raised',
        total_raised_short: 'raised',
        multiple_contributors: 'Multiple contributors',
      },
      vote_means: {
        label: 'vote means',
        yes: 'YES',
        no: 'NO',
      }
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
      totalMoneyRaisedTooltip: 'These amounts reflect the money given to, and reported by, committees formed primarily to support or oppose the given ballot measure within this election cycle.',
      whoGaveMostMoneyTitle: "Who gave the most money?",
      whoGaveMostMoneyLabel: {
        "Federal": 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
        "State": {
          ca: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
          il: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
          ny: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
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
            "Federal": 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
            "State": {
              ca: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
              ny: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
              il: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
            }
          },
          accessible_label: 'A pie chart containing color-coded sections corresponding to primary, secondary and other states.' // Translate
        },
        bySize: {
          label: 'By Size:',
          largeContributionsLabel: 'Large contributions',
          smallContributionsLabel: 'Small contributions',
          tooltip: {
            "Federal": 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            "State": {
              ca: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
              ny: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
              il: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
            },
            accessible_label: 'A pie chart containing color-coded sections corresponding to large and small contributions.' // Translate
          }
        },
        byType: {
          label: 'By Type:',
          organizationsLabel: 'From organizations',
          individualsLabel: 'From individuals',
          tooltip: {
            "Federal": 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
            "State": {
              ca: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
              ny: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
              il: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
            }
          },
          accessible_label: 'A pie chart containing color-coded sections corresponding to contributions from organizations and individuals.' // Translate
        },
      }
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
