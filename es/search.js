import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const searchTranslation  = {

  intro: "Obtener información detallada acerca de lo que está en su papeleta",

  // path: "/search",

  zipPrompt: "Introduzca su <strong>código postal</strong>",

  streetAddressPrompt: "Y su <strong> dirección de la calle </strong> <span class=\"\muted"> (Opcional, necesario para su lugar de votación.)</span>",

  addressPromptReason: "Necesario para dirá exactamente lo que va a estar en su papeleta y las operaciones de búsqueda de su lugar de votación.",

  searchButtonLabel: "Encuentra mi voto",

  confidentialityStatement: "Información de dirección es confidencial.",

  privacyStatement: "Estamos no partidista, sin fines de lucro, y no venderemos su información.",

  privacyPolicyLinkLabel: "Política de privacidad.",

  // privacyPolicyLink: "/page/privacy-policy",

  countyLabel: "Condado",

  // countySearchPath: "/election_authority",

  countyButtonLabel: "Búsqueda al condado",

  // zipSearchPath: "/search",

  zipLabel: "Código postal",

  zipButtonLabel: "Búsqueda al código postal",

  zipHelpText: "",

  domains: {

    "ca": {

      stateBallotLinkLabel: "Ver medidas de votación y las carreras para el <strong>Estado de California</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",

    },

    "il": {

      stateBallotLinkLabel: "Ver medidas de votación y las carreras para el <strong>Estado de Illinois</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:il",

    },

    "ny": {
      stateBallotLinkLabel: "Ver medidas de votación y las carreras para el <strong>Estado de New York</strong>",

      // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ny",

    }
  },
  // electionArchiveLink: "/page/elections-archive",

  electionArchiveLabel: "<strong>Archivo de Elecciónes.</strong>  Ver una lista de las pasadas elecciones.",

  // allStateLink: "/",

  allStateLabel: "Encuentra papeletas para <strong>otros estados</strong>",

  countyZipContent: {

    accordionLabel: "Buscar a las papeletas por <strong>ciudad, condado o código postal.</strong>",

    // accordionType: "simple",

    // accordionName: "county-selection",

  }
};

export default searchTranslation;
