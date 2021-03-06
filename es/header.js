import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the header on all pages except landing page & state landing page.
// URLS:

const headerTranslation = {
  translation_message: '¡La traducción viene muy pronto!',
  sponsors_label: "Presentado por", // Translate
  to_top: 'Ir a la parte superior de la página',
  donate_button: {
    label: 'Contribuya',
    icon: 'fa-gift',
    link: "https://donatenow.networkforgood.org/votersedge?code=votersedge"
  }
};

export default headerTranslation;
