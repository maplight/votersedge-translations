import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const domainTranslation = {
  national: {
      sponsor_name: "MapLight",
      // sponsor_logo: '/content/svg/maplight/votersedge_logo_maplight.svg',
      // sponsor_url: "http://maplight.org",
      sponsor_display_name: "MapLight", 
      // votersedge_logo: {
      //   logo: "/content/svg/votersedge/votersedge.svg",
      //   favicon: "/content/svg/votersedge/votersedge-32.ico",
      //   apple_touch_57: "/content/svg/votersedge/votersedge-57.png",
      //   apple_touch_72: "/content/svg/votersedge/votersedge-72.png",
      //   apple_touch_114: "/content/svg/votersedge/votersedge-114.png",
      //   apple_touch_144: "/content/svg/votersedge/votersedge-144.png",
      //   square_120: "/content/svg/votersedge/votersedge-120.png",
      //   square_200: "/content/svg/votersedge/votersedge-200.png",
      // }, 
      votersedge_display_name: "Voter's Edge",
      votersedge_description: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      votersedge_twitter_account: "@VotersEdge",
      
      metatags: "voting,election",
      // contact_email: 'chacha+nationwide@maplight.org',
      // domain: "http://votersedge.org",
      tagline: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      disclaimer: {
        en: "Voter's Edge neither supports nor opposes political parties, ballot measures, or candidates for public office.", 
        es: "Voter's Edge neither supports nor opposes political parties, ballot measures, or candidates for public office."
      },
      branding_intro: { 
        en: "From", 
        es: "De"
      },
      licensing_message: {
        en: "The content on this site is licensed with a Creative Commons license.",
        es: "El contenido de este sitio está licenciado con una licencia Creative Commons.",
      },
      licensing_name: {
        en: "Attribution-NonCommercial CC BY-NC",
        es: "Attribution-NonCommercial CC BY-NC",
      },
      analytics: {
        type: 'google_analytics',
        code: 'UX-123123-01',
      },
      colors: {
        landing: '#ffcc00',
      },
      translation_button_labels: {
        en: 'en Español',
        es: 'in English',
      },
      share: {
        en: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',

        },
        es: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',
        },
      },
    },
    ca: {
      sponsor_name: "League of Women Voters of California Education Fund",
      sponsor_logo: '/content/svg/lwvcef/votersedge_logo_lwvcef-200.png',
      sponsor_url: "https://cavotes.org/",
      sponsor_display_name: "League of Women Voters of California Education Fund",
      votersedge_logo: {
        // logo: "/content/svg/votersedge/california-square-200.png",
        logo: "/content/svg/votersedge/votersedge-california-square-100.png", //
        favicon: "/content/svg/votersedge/votersedge-california-square-32.ico",
        apple_touch_57: "/content/svg/votersedge/votersedge-california-square-57.png",
        apple_touch_72: "/content/svg/votersedge/votersedge-california-square-72.png",
        apple_touch_114: "/content/svg/votersedge/votersedge-california-square-114.png",
        apple_touch_144: "/content/svg/votersedge/votersedge-california-square-144.png",
        square_120: "/content/svg/votersedge/votersedge-california-square-120.png",
        square_200: "/content/svg/votersedge/votersedge-california-square-200.png",
      },
      votersedge_display_name: "Voter's Edge California",
      votersedge_description: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      votersedge_twitter_account: "@VotersEdge",
      metatags: "california elections",
      domain: "http://ca.votersedge.org",
      tagline: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      disclaimer: {
        en: "Voter's Edge California neither supports nor opposes political parties, ballot measures, or candidates for public office.", 
        es: "Voter's Edge California neither supports nor opposes political parties, ballot measures, or candidates for public office."
      },
      branding_intro: { 
        en: "From", 
        es: "De"
      },
      licensing_message: {
        en: "The content on this site is licensed with a Creative Commons license.",
        es: "El contenido de este sitio está licenciado con una licencia Creative Commons.",
      },
      licensing_name: {
        en: "Attribution-NonCommercial CC BY-NC",
        es: "Attribution-NonCommercial CC BY-NC",
      },
      state: 'CA',
      state_display_name: 'California',
      analytics: {
        type: 'google_analytics',
        code: 'UX-123123-02',
      },
      colors: {
        primary: "#ffcc00",
        primary_dark: "#ffcc00",
        primary_light: "#ffcc00",
        secondary: "blue",
        secondary_dark: "blue",
        secondary_light: "blue",
        // tertiary: "red",
        // tertiary_dark: "red",
        // tertiary_light: "red",
        black: "#0000bb",
        white: "#ffffee",
        grays: [
          "#999",
          "#888",
          "#777",
          "#666",
          "#555",
          "#444444",
          "#333333",
          "#222222",
          "#111111",
          "#000000",
        ]
      },
      share: {
        en: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',

        },
        es: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',
        },
      },
      translation_button_labels: {
        en: 'en Español',
        es: 'in English',
      },
    },
    ny: {
      sponsor_name: "",
      sponsor_logo: "",
      sponsor_url: "",
      sponsor_display_name: "",
      votersedge_logo: {
        // logo: "/content/svg/votersedge/newyork-square-200.png",
        logo: "/content/svg/votersedge/votersedge-newyork-square.svg",
        favicon: "/content/svg/votersedge/votersedge-newyork-square-32.ico",
        apple_touch_57: "/content/svg/votersedge/votersedge-newyork-square-57.png",
        apple_touch_72: "/content/svg/votersedge/votersedge-newyork-square-72.png",
        apple_touch_114: "/content/svg/votersedge/votersedge-newyork-square-114.png",
        apple_touch_144: "/content/svg/votersedge/votersedge-newyork-square-144.png",
        square_120: "/content/svg/votersedge/votersedge-newyork-square-120.png",
        square_200: "/content/svg/votersedge/votersedge-newyork-square-200.png",
      },
      votersedge_display_name: "Voter's Edge New York",
      votersedge_description: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      votersedge_twitter_account: "@VotersEdge",
      metatags: "voting,election,new york elections",
      domain: "http://ny.votersedge.org",
      tagline: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      disclaimer: {
        en: "Voter's Edge New York neither supports nor opposes political parties, ballot measures, or candidates for public office.", 
        es: "Voter's Edge New York neither supports nor opposes political parties, ballot measures, or candidates for public office."
      },
      branding_intro: { 
        en: "From", 
        es: "De"
      },
      licensing_message: {
        en: "The content on this site is licensed with a Creative Commons license.",
        es: "El contenido de este sitio está licenciado con una licencia Creative Commons.",
      },
      licensing_name: {
        en: "Attribution-NonCommercial CC BY-NC",
        es: "Attribution-NonCommercial CC BY-NC",
      },
      state: 'NY',
      state_display_name: 'New York',
      analytics: {
        type: 'google_analytics',
        code: 'UX-123123-03',
      },
      colors: {
        landing: '#ffcc00',
      },
      share: {
        en: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',

        },
        es: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',
        },
      },
      translation_button_labels: {
        en: 'en Español',
        es: 'in English',
      },
    },
    il: {
      sponsor_name: "",
      sponsor_logo: "",
      sponsor_url: "",
      sponsor_display_name: "",
      votersedge_logo: {
        // logo: "/content/svg/votersedge/illinois-square-200.png",
        logo: "/content/svg/votersedge/votersedge-illinois-square.svg",
        favicon: "/content/svg/votersedge/votersedge-illinois-square-32.ico",
        apple_touch_57: "/content/svg/votersedge/votersedge-illinois-apple-touch-57.png",
        apple_touch_72: "/content/svg/votersedge/votersedge-illinois-apple-touch-72.png",
        apple_touch_114: "/content/svg/votersedge/votersedge-illinois-apple-touch-114.png",
        apple_touch_144: "/content/svg/votersedge/votersedge-illinois-apple-touch-144.png",
        square_120: "/content/svg/votersedge/votersedge-illinois-square-120.png",
        square_200: "/content/svg/votersedge/votersedge-illinois-square-200.png",
      },
      votersedge_display_name: "Voter's Edge Illinois",
      votersedge_description: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      votersedge_twitter_account: "@VotersEdge",
      metatags: "voting,election,illinois elections",
      domain: "http://il.votersedge.org",
       tagline: {
        en: "Get the facts before you vote.", 
        es: "Get the facts before you vote."
      },
      disclaimer: {
        en: "Voter's Edge Illinois neither supports nor opposes political parties, ballot measures, or candidates for public office.", 
        es: "Voter's Edge Illinois neither supports nor opposes political parties, ballot measures, or candidates for public office."
      },
      branding_intro: { 
        en: "From", 
        es: "De"
      },
      licensing_message: {
        en: "",
        es: "",
      },
      licensing_name: {
        en: "",
        es: "",
      },
      state: 'IL',
      state_display_name: 'Illinois',
      analytics: {
        type: 'google_analytics',
        code: 'UX-123123-04',
      },
      colors: {
        landing: '#ffcc00',
      },
      share: {
        en: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',

        },
        es: {
          share_to_label: 'Please share this site to help other people research their voting choices.',
          email_label: 'Email',
          email_message: 'You might like',
          copy_link_label: 'Copy Link',
          copy_link_instructions: 'Get a link to this page',
          copy_link_clean_instructions: 'Get link without your address',
          embed_link_label: 'Embed',
        },
      },
      translation_button_labels: {
        en: 'en Español',
        es: 'in English',
      },  
    },
};

export default domainTranslation;