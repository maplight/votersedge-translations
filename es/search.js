import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const searchTranslation  = {
  pageTitle: 'Elija una boleta electoral para una elección', // Translate // New
  intro: "Encuentre información detallada sobre lo que incluye su boleta electoral.", // Translate 
  path: '/search', // No translation
  zipPrompt: "Ingrese su <strong>código postal</strong>.", // Translate 
  streetAddressPrompt: "Y su <strong>dirección</strong> <span class=\"muted\"> (para tener acceso a su boleta electoral completa)</span>.", // Translate just text, not HTML
  addressPromptReason: "Es necesario para decirle exactamente qué habrá en su boleta electoral y para ubicar su lugar de votación.", // Translate 
  searchButtonLabel: "Encontrar mi boleta electoral", // Translate 
  confidentialityStatement: "La información de su dirección es confidencial.", // Translate 
  privacyStatement: "Somos no partidistas, sin fines de lucro y no venderemos su información.", // Translate 
  privacyPolicyLinkLabel: "Política de privacidad.", // Translate 
  privacyPolicyLink: "/page/privacy-policy", // No translation
  countyLabel: {
    'ca': 'Condado',
    'il': 'Condado',
    'ny': 'Zona'
  },
  countyButtonLabel: {
    'ca': 'Buscar condado',
    'il': 'Buscar condado',
    'ny': 'Buscar zona'
  },
  countySearchPath: '/election_authority', // No translation
  zipSearchPath: '/search', // No translation
  zipLabel: "Código postal", // Translate 
  zipButtonLabel: "Buscar el código postal", // Translate 
  zipHelpText: "",
  domains: {
    'ca': {
      // stateBallotLinkLabel: "Coming soon for 2016. In meantime, here's measures and races for the <strong>state of California</strong> 2014 election.",
      stateBallotLinkLabel: "",
      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",
      stateBallotLink: "",
    },
    'il': {
      stateBallotLinkLabel: "Consulte las iniciativas de ley en la boleta electoral y la contienda electoral para el <strong>estado de Illinois</strong>.", // Translate 
      stateBallotLink: "/ballot/election/area/30?id=ocd-division/country:us/state:il", // No translation
    },
    'ny': {
      stateBallotLinkLabel: "Consulte las iniciativas de ley en la boleta electoral y la contienda electoral para el <strong>estado de Nueva York</strong>.", // Translate 
      stateBallotLink: "/ballot/election/area/38?id=ocd-division/country:us/state:ny",
    }
  },
  electionArchiveLink: "/page/elections-archive", // No translation
  electionArchiveLabel: "<strong>Archivo de las elecciones</strong> Consulte una lista de las elecciones pasadas.", // Translate 
  allStateLink: "http://votersedge.org", // No translation
  allStateLabel: "Encuentre las boletas electorales de <strong>otros estados</strong>.", // Translate 
  countyZipContent: {
    accordionLabel: {
    'root': "Busque boletas electorales por <strong>condado.</strong>", // Translate 
      'ca': "Busque boletas electorales por <strong>condado.</strong>", // Translate 
      'ny': "Busque boletas electorales por <strong>zona.</strong>", // Translate 
      'il': "Busque boletas electorales por <strong>condado.</strong>", // Translate 
    },
    accordionType: "simple", // No translation
    accordionName: "county-selection", // No translation
  },
  multipleElectionsTranslations: {
      upcoming_message_default: 'Encontramos elecciones para ', // Translate 
      upcoming_message_1: 'Parece ser que hay una elección próxima para ', // Translate 
      upcoming_message_2: 'Parece ser que hay un par de elecciones próximas para ', // Translate 
      upcoming_message_3: 'Parece ser que hay elecciones próximas para ', // Translate 
      recent_message_default: 'También encontramos estas elecciones pasadas:', // Translate 
      recent_message_1: 'También encontramos esta elección pasada:', // Translate 
      recent_message_2: 'También encontramos estas elecciones pasadas:', // Translate 
      recent_message_no_upcoming_1: 'Aquí está la elección más reciente para ', // Translate 
      recent_message_no_upcoming_2: 'Aquí están algunas elecciones recientes para ', // Translate 
      choose_ballot: 'Elija qué boleta electoral desea consultar.', // Translate 
      election_archive: '¿Busca una elección anterior? Consulte los ', // Translate 
      election_archive_label: 'archivos.', // Translate 
  },
};

export default searchTranslation;
