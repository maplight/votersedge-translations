import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to search errors that arise after submitting the search form & also partial results errors on the multiple elections selection page.
// Some search errors appear in src/api/election_authority & src/api/search.js local search api for totally failed searches.

// Dev Notes:
// @TODO replace Something blew up! & Sorry, a critical error occurred on this page.with critical_error
// @TODO replace Nothing found with no_elections_found

const searchErrorsTranslation = {
    pageTitle: "Encontrar una boleta electoral", // Translate
    try_new_search:  "Intente una nueva búsqueda.", // Translate
    zip_code_entered: 'Este código postal ',
    multiple_counties: 'es en más de uno condado. Seleccione su condado en la lista siguiente.',
    newSearchMessage: "Elija una de estas otras direcciones o ", // Translate
    unable_to_find: "No pudimos encontrar su dirección específica.", // Translate
    enter_new: "No pudimos encontrar su dirección específica.", // Translate
    no_zipcode_entered: "No pudimos encontrar su dirección específica porque se requiere un <strong>código postal</strong>. Por favor, inténtelo de nuevo con un código postal.", // Translate
    for_zipcode: "código postal ", // Translate
    your_search: "Usted buscó:", // Translate
    search_prompt: "Intente con una de estas direcciones", // Translate
    no_elections_found: "No se encontraron elecciones", // Translate
    critical_error: "Lo sentimos. Algo en nuestro sistema no funciona por el momento. Intente de nuevo o regrese más tarde. <br />Si continúa obteniendo esta respuesta, contáctenos para que podamos solucionar el problema.", // Translate
    no_address_found: "No se encontró la dirección", // Translate
    no_page_found: "Lo sentimos, pero la página que intentó consultar no existe.", // Translate
    noElectionsErrorMessage: {
      ca: '<p>No encontramos ninguna elección próxima con base en la información proporcionada.</p><p>Sus oficinas de elecciones estatales y locales son la autoridad máxima en las elecciones en su área y <a href="/es/ca/ballot/election/area/42/section/voting-info?id=statewide-42-ca#section-election-office-contact">puede contactarlas</a> si tiene preguntas adicionales.</p><p>También <a href="/es/ca/contact-us">puede comunicarse con nosotros</a> si piensa que recibió este mensaje por error o si tiene preguntas sobre nuestra cobertura.</p>', // Translate
      ny: '<p>No encontramos ninguna elección próxima con base en la información proporcionada.</p><p>Sus oficinas de elecciones estatales y locales son la autoridad máxima en las elecciones en su área y <a href="/es/ny/ballot/election/area/45/section/voting-info?id=statewide-45-ny#section-election-office-contact">puede contactarlas</a> si tiene preguntas adicionales.</p><p>También <a href="/es/ny/contact-us">puede comunicarse con nosotros</a> si piensa que recibió este mensaje por error o si tiene preguntas sobre nuestra cobertura.</p>', // Translate
      il: '<p>No encontramos ninguna elección próxima con base en la información proporcionada.</p><p>Sus oficinas de elecciones estatales y locales son la autoridad máxima en las elecciones en su área y <a href="/es/il/ballot/election/area/43/section/voting-info?id=statewide-43-il#section-election-office-contact">puede contactarlas</a> si tiene preguntas adicionales.</p><p>También puede <a href="/es/il/contact-us">comunicarse con nosotros</a> si piensa que recibió este mensaje por error o si tiene preguntas sobre nuestra cobertura.</p>' // Translate
    }
};

export default searchErrorsTranslation;
