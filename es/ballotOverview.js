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
    choices_label: "<p><strong>Mantenga un seguimiento de sus preferencias de boleta electoral y haga una lista para llevarla a las urnas.</p></strong><p>A medida que revise las competencias, los candidatos y las iniciativas de ley, puede añadirlos a su lista. Cuando termine, vaya a <strong>Mi lista</strong> para enviar la lista a su correo electrónico, impresora o una copia del enlace a su teléfono.</p><p>Somos un proyecto de defensa de los votantes no partidista y sin fines de lucro, y no le enviaremos nada ni haremos un seguimiento de sus opciones.</p>", // Translate
    noPollingLocationLabel: "Ubicación del lugar de votación y horario", // Translate
    noPollingLocationLookup: "<p><strong>¿Desea buscar su lugar de votación?</strong></p> <p></p>", // Translate
    noPollingLocationLinkLabel: "Buscar mi lugar de votación", // Translate
    pollingLocationLabel: "La ubicación de su lugar de votación y horario", // Translate
    myPollingLocationLabel: "Ubicación de mi lugar de votación y horario", // Translate
    noHoursLabel: "Las urnas se abren de", // Translate
    hoursLabel: "Abiertas de", // Translate
    hours: {
      ca: '7 a.m. - 8 p.m.',
      il: '6 a.m. - 7 p.m.',
      ny: '6 a.m. - 7 p.m.',
    },
    more_voting_info: "Consulte más información sobre la votacion", // Translate
    other_address: "Busque la boleta electoral para", // Translate
    other_address_link: "otra dirección", // Translate
    other_elections: "Consulte su boleta electoral para", // Translate
    past_elections_or: "O", // Translate
    past_elections_link: "busque las elecciones pasadas", // Translate
    past_elections_url: '/ca/en/page/elections-archive', // No translation
    privacy_statement: "Su información es privada, a menos que decida compartirla.", // Translate
    privacy_statement_link: "Política de privacidad", // Translate
    privacy_statement_url: '/page/privacy-policy', // No translation
    jurisdictionLabels: {
      Federal: {
        label: "Estados Unidos",  // Translate
        iconFileName: "Federal",  // No translation
        description: '',
      },
      State: {
        label: "Estado de ",  // Translate
        iconFileName: "State",  // No translation
        description: '',
      },
      Judicial: {
        label: "Judicial",  // Translate
        iconFileName: "Judicial",  // No translation
        description: '',
      },
      School: {
        label: "Escuela",  // Translate
        iconFileName: "School",  // No translation
        description: '',
      },
      County: {
        label: "Condado", // Translate
        iconFileName: "County", // No translation
        description: '',
      },
      Place: {
        label: "Local",  // Translate
        iconFileName: "Place", // No translation
        description: '',
      },

      Special: {
        label: "Distrito especial",  // Translate
        iconFileName: "Special", // No translation
        description: '',
      },
    }, 
    ballot_extra_result_explanation: {
      ca: 'Results based on only a zip code may return more contests than will appear on your actual ballot. <a href="/en/ca">For the most specific results available, enter your full address.</a><br />',
      il: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/il">For the most specific results available, enter your full address.</a><br />',
      ny: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/ny">For the most specific results available, enter your full address.</a><br />',
      default: ''
    },
    ballot_extra_result_explanation_address: {
      ca: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      il: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      ny: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      default: ''
    },
    contest_extra_result_explanation: {
      ca: 'May not appear on your actual ballot. <a href="/ca/page/how-we-get-our-data">Learn More</a>',
      il: 'May not appear on your actual ballot. <a href="/il/page/how-we-get-our-data">Learn More</a>',
      ny: 'May not appear on your actual ballot. <a href="/ny/page/how-we-get-our-data">Learn More</a>',
      default: ''
    },
  },
};

export default ballotOverviewTranslation;
