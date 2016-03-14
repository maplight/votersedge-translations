import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// http://votersedge.org
// QA: http://qa.votersedge.org
 
const landingPageTranslation = {
  sponsors_label: "Brought to you by", // Translate
  intro: "Encuentre elecciones en estos estados", // Translate
  features_label: "Qué puede hacer en Voter’s Edge", // Translate
  features: [
     "Use su dirección para obtener una boleta electoral personalizada.", // Translate
     "Obtenga información detallada sobre los candidatos, las iniciativas de ley y quién las apoya.", // Translate
    "Revise dónde, cuándo y cómo votar.", // Translate
    "Mantenga un registro de sus opciones y úselas para votar.", // Translate
    "¡Comparta e inicie la conversación!" // Translate
  ],
  benefits: [
    "Encuentre sentido a la elección.", // Translate
    "Elimine el ruido de las campañas y obtenga los hechos.", // Translate
    "Vote con confianza.", // Translate
    "Influya en su democracia." // Translate
  ],
  about_link: "/page/about-voters-edge", // No translation
  about_link_label: "Descubra más sobre Voter’s Edge", // Translate
  domains: [
  {
    name: "california-state", // No translation
    label: "California", // No translation
    link: "/ca", // No translation
    branding_label: "Producido en asociación con",
    branding_logo: "/content/svg/lwvcef/votersedge_logo_lwvcef-200.png", // No translation
    branding_logo_alt: "League of Women Voters of California Education Fund", // No translation ?
    branding_link: "https://cavotes.org/", // No translation
  },
  {
    name: "illinois-state", // No translation
    label: "Illinois", // No translation
    link: "/il", // No translation
    branding_label: "",
    branding_logo: "",
    branding_logo_alt: "",
    branding_link: "",
  },
  {
    name: "new-york-state", // No translation
    label: "New York", // No translation
    // link: "/ny",
    link: "",
    branding_label: "Coming soon!",  // Translate
    branding_logo: "",
    branding_logo_alt: "",
    branding_link: "",
  },
  ]
};

export default landingPageTranslation;
