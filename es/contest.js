import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content on a contest page.

const contestTranslation = {
    pageTitle: "Contienda", // Translate
    sectionTitle: "Candidatos", // Translate
    officeDescriptionLabel: "Sobre este cargo", // Translate
    my_choices: "¿Cómo funciona la votación para esta contienda?", // Translate
    skip_label_offices: "Omitir esto", // Translate
    candidates_label: "¿Quién se está postulando?", // Translate
    candidates_random_label: "Los candidatos aparecen en orden aleatorio.", // Translate
    party_label: 'Partido', // Translate
    candidate_for: 'Candidato para',
    screenreader: {
      accordion: 'Access additional information about this contest in the tabs in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    navigation: {
      next: "Siguiente:",
      back: "Atrás:",
      last: "Última contienda",
      overview: "Obtener una perspectiva general",
    },
    accordionLabels: {
      candidates: "¿Quién se está postulando?", // Translate
      news: "Cobertura de noticias", // Translate
      events: "Eventos", // Translate
      links: "Enlaces", // Translate
      videos: "Videos", // Translate
      more_info: "Información adicional", // Translate
    },
    events: {
      label: "Eventos",  // Translate
      upcoming: "Próximos eventos", // Translate
      past: "Eventos pasados", // Translate
      host: "Anfitrión", // Translate
      date: "Fecha", // Translate
      location: "Lugar", // Translate
      time: "Hora", // Translate
    },
    sourceLabel: "Fuente: ", // Translate
    electionType: {
      'single-winner': {
        label: '',
        supplemental_description: '',
      },
      'ranked-choice': {
        label: "Elección por rango", // Translate
        supplemental_description: '',
      },
      'top-two': {
        label: "Esta es una contienda de los dos principales.", // Translate
        supplemental_description: '',
      },
      'judicial-retention': {
        label: "Retención judicial", // Translate
        supplemental_description: '',
      },
    },
    // voteForPrompt: {
    //   single: `Puede votar por ${office.contestType.vote_for_count} candidato.`, // Translate just the text
    //   multiple: `Puede votar por ${office.contestType.vote_for_count} candidatos.` // Translate just the text
    // }
};

export default contestTranslation;
