import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";
// Applies to the voting info section
const votingInfoTranslation = {
    page_title: "Información de la votación", // Translate
    page_description: "",
    website_label: "Sitio web", // Translate
    no_information_available: "No hay información disponible", // Translate
    check_my_polling_place: "Verificar mi lugar de votación", // Translate
    my_polling_place: "Ubicación de mi lugar de votación y horario", // Translate
    contact_state_election_office: "Póngase en contacto con la Oficina de Elecciones Estatal", // Translate
    contact_county_election_office: "Póngase en contacto con la Oficina de Elecciones del Condado", // Translate
    screenreader: {
      accordion: 'You can navigate the sections of the Voting information section by following the links. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    state_election_authority_contact_message: {
      ca: '<p>To find contact information for your local election office, search for your county or address <a href="http://votersedge.org/ca">here</a> or find your county election office on the California Secretary of State <a href="http://www.sos.ca.gov/elections/voting-resources/county-elections-offices/" target="_blank">website.</a></p>',
      il: null,
      ny: null
    },
    share_ballot_label: 'Comparte esta página',
};

export default votingInfoTranslation;
