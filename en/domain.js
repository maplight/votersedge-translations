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
      votersedge_display_name: "Voter's Edge", // No translation
      votersedge_description: {
        en: "Get the facts before you vote.", // Translate
        es: "Get the facts before you vote.", // Translate
      },
      votersedge_twitter_account: "@VotersEdge",
      
      metatags: "voting,election", // Translate
      domain: "http://votersedge.org", // No translation
      tagline: {
        en: "Get the facts before you vote.", // Translate

      },
      disclaimer: {
        en: "Voter's Edge neither supports nor opposes political parties, ballot measures, or candidates for public office.", // Translate

      },
      branding_intro: { 
        en: "From",  // Translate
        
      },
      licensing_message: {
        en: "The content on this site is licensed with a Creative Commons license.", // Translate
        
      },
      licensing_name: {
        en: "Attribution-NonCommercial CC BY-NC", // Translate?
        
      },
      analytics: {
        type: 'google_analytics', // No translation
        code: 'UX-123123-01', // No translation
      },
      colors: {
        landing: '#ffcc00', // No translation
      },
      translation_button_labels: {
        en: 'en Español', // No translation necessary

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
      votersedge_display_name: "Voter's Edge California", // No translation
      votersedge_description: {
        en: "Get the facts before you vote.", // Translate (same as above)
      },
      votersedge_twitter_account: "@VotersEdge",
      metatags: "california elections",  // Translate
      domain: "http://ca.votersedge.org", // No translation
      tagline: {
        en: "Get the facts before you vote.", // Translate (same as above)
      },
      disclaimer: {
        en: "Voter's Edge California neither supports nor opposes political parties, ballot measures, or candidates for public office.", // Translate

      },
      branding_intro: { 
        en: "From", // Translate

      },
      licensing_message: {
        en: "The content on this site is licensed with a Creative Commons license.", // Translate

      },
      licensing_name: {
        en: "Attribution-NonCommercial CC BY-NC", // No translation
      },
      state: 'CA', // No translation
      state_display_name: 'California', // No translation
    },
};

export default domainTranslation;