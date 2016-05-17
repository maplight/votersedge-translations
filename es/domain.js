import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const domainTranslation = {
  national: {
      sponsor_name: "MapLight", // No translation
      sponsor_logo: '/content/svg/maplight/votersedge_logo_maplight.svg', // No translation
      sponsor_url: "http://maplight.org", // No translation
      sponsor_display_name: "MapLight",  // No translation
      votersedge_logo: {
        logo: "/content/svg/votersedge/votersedge.svg", // No translation
        favicon: "/content/svg/votersedge/votersedge-32.ico", // No translation
        apple_touch_57: "/content/svg/votersedge/votersedge-57.png", // No translation
        apple_touch_72: "/content/svg/votersedge/votersedge-72.png", // No translation
        apple_touch_114: "/content/svg/votersedge/votersedge-114.png", // No translation
        apple_touch_144: "/content/svg/votersedge/votersedge-144.png", // No translation
        square_120: "/content/svg/votersedge/votersedge-120.png", // No translation
        square_200: "/content/svg/votersedge/votersedge-200.png", // No translation
      },
      votersedge_display_name: "Voter’s Edge", // No translation
      votersedge_description: {
        es: "Conozca la información antes de votar.", // Translate
      },
      votersedge_twitter_account: "@VotersEdge",

      metatags: "voting,eleccion", // Translate
      domain: "http://votersedge.org", // No translation
      tagline: {
        es: "Conozca la información antes de votar.", // Translate

      },
      disclaimer: {
        es: "Voter's Edge no apoya ni se opone a ningún partido político, iniciativa de ley en la boleta electoral o candidato para algún cargo público.", // Translate

      },
      branding_intro: {
        es: "De",  // Translate
      },
      licensing_message: {
        es: "The content on this site is licensed with a Creative Commons license.", // Translate

      },
      licensing_name: {
        es: "Attribution-NonCommercial CC BY-NC", // Translate?

      },
      analytics: {
        type: 'google_analytics', // No translation
        code: 'UX-123123-01', // No translation
      },
      colors: {
        landing: '#ffcc00', // No translation
      },
      translation_button_labels: {
        es: 'en Español', // No translation necessary

      },
    },
    ca: {
      sponsor_name: "League of Women Voters of California Education Fund", // No translation?
      sponsor_logo: '/content/svg/lwvcef/votersedge_logo_lwvcef-200.png', // No translation
      sponsor_url: "https://cavotes.org/", // No translation
      sponsor_display_name: "League of Women Voters of California Education Fund",  // No translation?
      votersedge_logo: {
        // logo: "/content/svg/votersedge/california-square-200.png",
        logo: "/content/svg/votersedge/votersedge-california-square-100.png",  // No translation
        favicon: "/content/svg/votersedge/votersedge-california-square-32.ico", // No translation
        apple_touch_57: "/content/svg/votersedge/votersedge-california-square-57.png", // No translation
        apple_touch_72: "/content/svg/votersedge/votersedge-california-square-72.png", // No translation
        apple_touch_114: "/content/svg/votersedge/votersedge-california-square-114.png", // No translation
        apple_touch_144: "/content/svg/votersedge/votersedge-california-square-144.png", // No translation
        square_120: "/content/svg/votersedge/votersedge-california-square-120.png", // No translation
        square_200: "/content/svg/votersedge/votersedge-california-square-200.png", // No translation
      },
      votersedge_display_name: "Voter’s Edge California", // No translation
      votersedge_description: {
        es: "Infórmese antes de votar.", // Translate (same as above)
      },
      votersedge_twitter_account: "@VotersEdge",
      metatags: "elecciones de california",  // Translate
      domain: "http://ca.votersedge.org", // No translation
      tagline: {
        es: "Infórmese antes de votar.", // Translate (same as above)
      },
      disclaimer: {
        es: "Voter's Edge no apoya ni se opone a ningún partido político, iniciativas de ley en boletas electorales, o candidatos a cargos públicos.", // Translate
      },
      branding_intro: {
        es: "From", // Translate
      },
      licensing_message: {
        es: "El contenido de este sitio está sujeto a una licencia de Creative Commons.", // Translate
      },
      licensing_name: {
        es: "Attribution-NonCommercial CC BY-NC", // No translation
      },
      state: 'CA', // No translation
      state_display_name: 'California', // No translation
    },
};

export default domainTranslation;
