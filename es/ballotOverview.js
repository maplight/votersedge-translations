import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const ballotOverviewTranslation = {
  ballotOverview: {
    ballot_address: "Boleta y información de la votación para su dirección en", // Translate
    ballot_area: "Boleta y información de la votación para el", // Translate
    ballot_zip: 'Boleta y información de la votación para zip code', // Translate
    ballot_area_state: 'Boleta y información de la votación para el', // Translate
    votingInfoSections: {
     'section-my-polling-place': 'My polling place',
     'section-register-to-vote': 'Register to vote',
     'section-ways-to-vote': 'Ways to vote',
     'section-voting-basics': 'Voting basics',
     'section-important-dates-deadlines': 'Important dates and deadlines',
     'section-my-rights-as-a-voter': 'My rights as a voter',
     'section-more-voting-info': 'More voting info',
     'section-election-office-contact': 'Contact election office',
    },
    meta: {
      overview: {
        page_title: 'Ballot',
        page_title_description: 'Candidate & Ballot Measure Voter Guide',
        card_title: '',
        card_title_description: 'Get the facts before you vote.',
        // twitter_templates: {
        //   default: {
        //     landingPage: 'Get the facts before you vote. ',
        //     ballotOverview: 'Get the facts before you vote. ',
        //     ballotOverviewAlt: 'Get the facts before you vote. ',
        //     votingInfo: 'Get the facts before you vote. ',
        //   },
        //   il: {
        //     landingPage: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
        //     ballotOverview: 'Ready for the Illinois Primary Election on March 15th? I accessed my ballot with ',
        //     ballotOverviewAlt: 'The Illinois Primary Election is March 15th. Get the facts before you vote ',
        //     votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
        //   },
        //   ca: {
        //     landingPage: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
        //     ballotOverview: 'Ready for California Elections? I accessed my ballot with ',
        //     ballotOverviewAlt: 'Get the facts before you vote ',
        //     votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
        //   },
        //   ny: {
        //     landingPage: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
        //     ballotOverview: 'Ready for New York Elections? I accessed my ballot with ',
        //     ballotOverviewAlt: 'Get the facts before you vote ',
        //     votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
        //   }
        // },
        // facebook: '',
        // email: '',
      },
      contest: {
        page_title: 'Ballot',
        page_title_description: 'Voter Guide',
        card_title: '',
        card_title_description: '',
        twitter: '',
        facebook: '',
        email: '',
      },
      candidate: {
        page_title: 'Ballot',
        page_title_description: 'Voter Guide',
        card_title: '',
        card_title_description: '',
        card_title_label: 'Learn more about',
        card_title_separator: 'for',
        candidate_label: 'Candidate'
      },
      measure: {
        page_title: 'Ballot',
        page_title_description: 'Measures & Voter Guide',
        card_title: '',
        card_title_description: '',
        card_title_label: 'Learn more about',
        card_title_separator: '',
      },
      'ballot-candidates': {
        page_title: 'Ballot',
        page_title_description: 'Candidates',
        card_title: '',
        card_title_description: '',
      },
      'ballot-measures': {
        page_title: 'Ballot',
        page_title_description: 'Measures',
        card_title: '',
        card_title_description: '',
      },
      'ballot-voting-info': {
        page_title: 'Voting Info',
        page_title_description: 'Registration, Polling Places & How to Vote',
        card_title: '',
        card_title_description: '',
      },
      'ballot-choices': {
        page_title: 'Election',
        page_title_description: 'My List',
        card_title: '',
        card_title_description: '',
      }
    },

    ballot_error: "Hubo un problema para encontrar esta boleta electoral.", // Translate
    ballot_extra_result_explanation: {
      ca: 'Es posible que los resultados que se basan solo en un código postal arrojen más contiendas de las que aparecerán en su boleta electoral real. <a href="/en/ca">Para obtener los resultados más específicos disponibles, ingrese su dirección completa.</a>', // Translate
      il: 'Es posible que los resultados que se basan solo en un código postal no arrojen todas las contiendas que aparecerán en su boleta electoral real. <a href="/en/il">Para obtener los resultados más específicos disponibles, ingrese su dirección completa.</a>', // Translate
      ny: 'Es posible que los resultados que se basan solo en un código postal no arrojen todas las contiendas que aparecerán en su boleta electoral real. <a href="/en/ny">Para obtener los resultados más específicos disponibles, ingrese su dirección completa.</a>',
      default: ''
    },
    contest_extra_result_explanation: {
      ca:  'Es posible que no aparezca en su boleta electoral real. <a href="/ca/page/how-we-get-our-data">Obtenga más información</a>', // Translate
      il: 'Es posible que no aparezca en su boleta electoral real. <a href="/il/page/how-we-get-our-data">Obtenga más información</a>', // Translate
      ny: 'Es posible que no aparezca en su boleta electoral real. <a href="/ny/page/how-we-get-our-data">Obtenga más información</a>', // Translate
      default: ''
    },
    read_more: 'Leer más',
    read_less: 'Leer menos',
    ballot_no_address: "Aquí encontrará lo que contiene la boleta electoral.", // Translate
    choose_candidates: "Candidatos", // Translate
    list_of_candidates: 'Ver una lista',
    list_of_measures: 'Ver una lista',
    start_with_candidates: 'Ir a la primera contienda',
    start_with_measures: 'Ir a la primera iniciativa de ley',
    candidates_intro_prefix: "Obtenga información detallada sobre los ", // Translate
    candidates_intro: "candidatos postulados para", // Translate
    candidates_offices: "cargos", // Translate
    candidates_office: "cargo", // Translate
    choose_propositions: "Iniciativas de ley en la boleta electoral", // Translate
    propositions_intro: "Obtenga más información sobre las ", // Translate
    propositions: "iniciativas de ley", // Translate
    proposition: "iniciativa de ley", // Translate
    choose_voting_info: "Información de la votación", // Translate
    choose_voting_info_label: "Obtenga información sobre <strong>cuándo, dónde y cómo votar</strong>", // Translate
    choices: "Mi lista", // Translate
    choices_get_ballot: 'Want to keep track of you ballot choices and make a list to take to the polls?',
    choices_learn_more: 'Learn more',
    choices_get_started: 'get started',
    choices_get_started_separator: 'or',
    other_elections_search_label: 'Other Elections',
    other_elections_search_link_labels: {
      address: 'Find other elections for this address.',
      area: 'Find other elections for this area.',
      zip:'Find other elections for this zip code.',
    },
    choices_progress_percentage_prefix: 'You are',
    choices_progress_percentage_suffix: 'of the way through your ballot.',
    choices_completed_label: 'Completed',
    choices_label: "<p>Review the candidates and measures on your ballot, mark your choices, and then send your list to your email or printer, or copy the link to your phone.</p>", // Translate
    noPollingLocationLabel: "Ubicación del lugar de votación y horario", // Translate
    noPollingLocationLookup: "<p><strong>¿Desea buscar su lugar de votación?</strong></p> <p></p>", // Translate
    pollingLocationLookupToolLink: "Check your polling location with your county elections office.", // Translate
    noPollingLocationLookupToolLink: "There is no polling location look up available from your county elections office.", // Translate
    contactCountyElectionsOffice: 'Contact county elections office',
    pollingLocationLabel: "La ubicación de su lugar de votación y horario", // Translate
    noPollingLocationMessage: 'No hay información disponible sobre la ubicación del lugar de votación.',
    noPollingLocationMessageZipMessage: 'No polling location information is available on a zip code search.',
    noPollingLocationMessageZipSearch: 'Try searching for your street address.',
    noPollingLocationMessageCountyMessage: 'No polling location information is available on a county search.',
    noPollingLocationMessageCountySearch: 'Try searching for your street address.',
    noPollingLocationMessageStateMessage: 'No polling location information is available.',
    noPollingLocationMessageStateSearch: 'Try searching for your street address.',
    noPollingLocationMessageVotingInfo: 'Voter’s Edge could not match your address to a polling location. Check below to search for your polling location through your county elections office.',
    noPollingLocationMessageResults: {
      active: 'No hay información disponible sobre la ubicación del lugar de votación.',
      complete: 'No hay información disponible sobre la ubicación del lugar de votación. Election has already passed.'
    },
    myPollingLocationLabel: "Ubicación de mi lugar de votación y horario", // Translate

    election_results_analysis: {
      intro_label: 'Resultados electorales',
      state_results_label: 'Resultados de todo el estado',
      county_results_label: 'Resultados',
      intro_description: {
        complete: '',
        in_progress: 'Todavía se están reportando los resultados.'
        // complete: 'All results are in. <br />View candidates and measures to see who won.',
        // in_progress: 'Results are still being reported.<br /> View candidates and measures to see who’s winning.'
      },
      election_status_complete: {
        label: 'Resultados electorales',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Resultados electorales', // Election results are still being reported.',
        icon: 'fa-star', // icon: 'fa-refresh',
      },
      updated: 'Actualizado:',
      votes: 'votos',
      state: {
        complete: {
          icon: 'fa-star',
          message_result: 'de distritos activos',
          message_turnout: 'Participación de los votantes:',
          tooltip_result: {
            message: '',
            label: 'distritos activos.',
            separator: 'de'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          }
        },
        in_progress: {
          icon: 'fa-star', // icon: 'fa-refresh',
          message_result: 'de distritos activos',
          message_turnout: 'Participación de los votantes:',
          tooltip_result: {
            message: '',
            label: 'distritos activos',
            separator: 'de'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'se contaron las boletas de votación de los electores registrados.',
          }
        }
      },
      precincts: {
        complete: {
          icon: 'fa-star',
          message_result: 'de distritos activos',
          message_turnout: 'Participación de los votantes:',
          message_turnout_tense: 'estuvo',
          message_turnout_suffix: '.',
          tooltip_result: {
            message: '',
            label: 'distritos activos',
            separator: 'de'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          }
        },
        in_progress: {
          icon: 'fa-star', // icon: 'fa-refresh',
          message_result: 'de distritos activos',
          message_turnout: 'Participación de los votantes:',
          message_turnout_tense: 'esta',
          message_turnout_suffix: '.',
          tooltip_result: {
            message: '',
            label: 'distritos activos',
            separator: 'de'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'se contaron las boletas de votación de los electores registrados.',
          }
        }
      }
    },

    // noHoursLabel: "Las urnas se abren de", // Translate
    // hours: {
    //   ca: '7 a.m. - 8 p.m.',
    //   il: '6 a.m. - 7 p.m.',
    //   ny: '6 a.m. - 7 p.m.',
    // },
    noHoursLabel: {
      ca: 'Las urnas se abren de',
      il: 'Las urnas se abren de',
      ny: {
        'default': 'Las urnas se abren de',
        'State of New York': 'All polls close at 9 p.m., but opening hours vary by county. Look up your ballot by area for more information.',
      }
    },
    hoursLabel: {
      ca: 'Abiertas de',
      il: 'Abiertas de',
      ny: {
        'default': 'Open from',
        'State of New York': 'All polls close at 9 p.m., but opening hours vary by county. Look up your ballot by area for more information.',
      }
    },
    hours: {
      ca: '7 a.m. - 8 p.m.',
      il: '6 a.m. - 7 p.m.',
      ny: {
        'default': '12 p.m. - 9 p.m.',
        'State of New York': '',
        'New York City': '6 a.m. - 9 p.m.',
        'Erie County': '6 a.m. - 9 p.m.',
        'Nassau County': '6 a.m. - 9 p.m.',
        'Suffolk County': '6 a.m. - 9 p.m.',
        'Westchester County': '6 a.m. - 9 p.m.',
        'Rockland County': '6 a.m. - 9 p.m.',
        'Orange County': '6 a.m. - 9 p.m.',
        'Putnam County': '6 a.m. - 9 p.m.',
      }
    },
    toolbar: [
      {
        label: '',  // Translate
        icon: '',
        type: 'share'
      },
    ],
    share_ballot_label: 'Share This Page',
    more_voting_info: "Consulte más información sobre la votacion", // Translate
    other_address: "Busque la boleta electoral para", // Translate
    other_address_link: "otra dirección.", // Translate
    other_elections: "Consulte su boleta electoral para", // Translate
    past_elections_or: "O", // Translate
    past_elections_link: "Busque las elecciones pasadas.", // Translate
    past_elections_url: '/page/elections-archive', // No translation
    privacy_statement: "Su información es privada, a menos que decida compartirla.", // Translate
    privacy_statement_link: "Política de privacidad.", // Translate
    privacy_statement_url: '/page/privacy-policy', // No translation
    jurisdictionLabels: {
      Federal: {
        label: "Estados Unidos",  // Translate
        iconFileName: "Federal",  // No translation
        description: '',
        altText: 'Icon of Capitol building'
      },
      State: {
        label: "Estado de ",  // Translate
        iconFileName: "State",  // No translation
        description: '',
        altText: 'Icon of the State'
      },
      Judicial: {
        label: "Judicial",  // Translate
        iconFileName: "Judicial",  // No translation
        description: '',
        altText: 'Icon of a Judge'
      },
      School: {
        label: "Escuela",  // Translate
        iconFileName: "School",  // No translation
        description: '',
        altText: 'Icon of a school'
      },
      County: {
        label: "Condado", // Translate
        iconFileName: "County", // No translation
        description: '',
        altText: 'Icon of buildings and a farm for County'
      },
      Place: {
        label: "Local",  // Translate
        iconFileName: "Place", // No translation
        description: '',
        altText: 'Icon of buildings'
      },
      'party committee': {
        label: "Party Committee",  // Translate
        iconFileName: "PartyCommittee", // No translation
        description: '',
        altText: 'Icon of a group of people'
      },
      Special: {
        label: "Distrito especial",  // Translate
        iconFileName: "Special", // No translation
        description: '',
        altText: 'Icon of a bridge and a road'
      },
    },
    ballot_extra_result_explanation_address: {
      ca: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      il: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      ny: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      default: ''
    },
  },
  ballotNavigation: {
      menu_label: 'Menu',
      menu_label_hide: 'Hide Menu',
      toggle_navigation: 'Toggle navigation',
      open_dropdown_label: 'Open drop down menu',
      links: [
        {
          iconFileName: 'fa fa-chevron-circle-left',
          activeIconFileName: 'fa fa-chevron-circle-down',
          tooltip: 'Resumen',
          target: 'OverviewBallot', // No translation
          label: 'Resumen',  // Translate
          link: 'overview',  // No translation
          section: 'overview', // No translation
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Candidatos', // Translate
          link: 'candidates', // No translation
          section: 'candidates', // No translation
          target: 'OverviewCandidates Offices', // No translation
          dropdownLimit: 50,
          dropdownComponent: 'ContestsList',
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Iniciativas de ley', // Translate
          link: 'measures',
          section: 'measures', // No translation
          target: 'OverviewMeasures Measures', // No translation
          dropdownLimit: 50,
          dropdownComponent: 'MeasuresList',
        },
        {
          iconFileName: '',
          tooltip: '',
          label: "Información de la votación", // Translate
          link: 'voting-info', // No translation
          section: 'votingInfo', // No translation
          target: 'VotingInfoSections', // No translation
        },
        {
          iconFileName: '', // No translation
          tooltip: '¡Nueva función! Seguimos probando esta función; háganos saber su opinión.', // Translate
          label: 'Mi Lista', // Translate
          link: 'choices', // 'choices'  // No translation
          section: 'choices', // No translation
          target: 'Choices', // No translation
        },
      ],
  }
};

export default ballotOverviewTranslation;
