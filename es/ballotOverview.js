import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const ballotOverviewTranslation = {
  ballotOverview: {
    ballot_address: "Qué contiene la boleta electoral para su dirección en", // Translate
    ballot_area: "Qué contiene la boleta electoral para el ", // Translate
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
    choices_label: "<p>Review the candidates and measures on your ballot, mark your choices, and then send your list to your email or printer, or copy the link to your phone.</p>", // Translate
    noPollingLocationLabel: "Ubicación del lugar de votación y horario", // Translate
    noPollingLocationLookup: "<p><strong>¿Desea buscar su lugar de votación?</strong></p> <p></p>", // Translate
    noPollingLocationLinkLabel: "Buscar mi lugar de votación", // Translate
    pollingLocationLabel: "La ubicación de su lugar de votación y horario", // Translate
    noPollingLocationMessage: 'No hay información disponible sobre la ubicación del lugar de votación.',
    myPollingLocationLabel: "Ubicación de mi lugar de votación y horario", // Translate
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
    more_voting_info: "Consulte más información sobre la votacion", // Translate
    other_address: "Busque la boleta electoral para", // Translate
    other_address_link: "otra dirección.", // Translate
    other_elections: "Consulte su boleta electoral para", // Translate
    past_elections_or: "O", // Translate
    past_elections_link: "busque las elecciones pasadas.", // Translate
    past_elections_url: '/ca/en/page/elections-archive', // No translation
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
      ca: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      il: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      ny: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      default: ''
    },
  },
  ballotNavigation: {
     links: [
        {
          iconFileName: '',
          tooltip: '',
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
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Iniciativas de ley', // Translate
          link: 'measures',
          section: 'measures', // No translation
          target: 'OverviewMeasures Measures', // No translation
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
          iconFileName: 'fa fa-newspaper-o', // No translation
          tooltip: 'New feature! We are still testing this feature, please let us know what you think.', // Translate
          label: 'Mi Lista', // Translate
          link: 'choices', // 'choices'  // No translation
          section: 'choices', // No translation
          target: 'Choices', // No translation
        },
      ],
  }
};

export default ballotOverviewTranslation;
