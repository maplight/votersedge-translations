import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content on a contest page.

const contestTranslation = {
    pageTitle: "Contienda", // Translate
    sectionTitle: "Candidato(a)s", // Translate
    officeDescriptionLabel: "Sobre este cargo", // Translate
    my_choices: "¿Cómo funciona la votación para esta contienda?", // Translate
    skip_label_offices: "Omitir esto", // Translate
    candidates_label: "¿Quién se está postulando?", // Translate
    candidates_random_label_results: {
      ca: {
        active: "Se ordena a los candidatos de forma aleatoria según la cantidad de información que proporcionaron. <a href=\"/ca/page/how-we-get-our-data#candidate-data\" target=\"blank\">Obtenga más información.</a>", // Translate
        complete: 'Candidates are sorted in order of election results.',
      },
      il: {
        active: "Se ordena a los candidatos de forma aleatoria según la cantidad de información que proporcionaron. <a href=\"/il/page/how-we-get-our-data#candidate-data\" target=\"blank\">Obtenga más información.</a>", // Translate
        complete: 'Candidates are sorted in order of election results.',
      },
      ny: {
        active: "Se ordena a los candidatos de forma aleatoria según la cantidad de información que proporcionaron. <a href=\"/ny/page/how-we-get-our-data#candidate-data\" target=\"blank\">Obtenga más información.</a>", // Translate
        complete: 'Candidates are sorted in order of election results.',
      },
    },
    party_label: 'Partido', // Translate
    candidate_for: 'Candidato(a) para',
    screenreader: {
      accordion: 'Access additional information about this contest in the tabs in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    toolbar: [
      {
        label: '',  // Translate
        icon: '',
        type: 'share'
      },
    ],
    navigation: {
      next: "Siguiente",
      back: "Atrás",
      last: "Última contienda",
      overview: "Resumen",
      choices: 'To My List',
      measure: 'Go to Measures',
      contest: 'Go to Races',
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
    election_results_analysis: {
      election_status_complete: {
        label: 'Resultados electorales',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Resultados electorales',
        icon: 'fa-star', // 'fa-refresh',
      },
      contest: {
        complete: {
          icon: 'fa-star',
          message_result: ' de distritos activos',
          ballots_counted: ' boletas electorales serán contadas.',
          tooltip_result: {
            message: '',
            label: 'distritos activos.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          },
          candidate: {
            votes: 'votos',
            status: 'Elegido',
          },
        },
        in_progress: {
          icon: 'fa-star', // 'fa-refresh',
          message_result: ' de distritos activos',
          ballots_counted: ' boletas electorales serán contadas.',
          tooltip_result: {
            message: '',
            label: 'distritos activos.',
            separator: '/',
          },
          tooltip_message: {
            message: '',
            prefix: 'Esto significa',
            separator: 'de',
            label: 'electores registrados votaron.',
          },
          candidate: {
            votes: 'votos',
            status: 'Elegido',
          },
        },
      },
    },
    contest_message_additional_info: 'Please see Additional Info to learn more.',
    scrollPrompt: 'Por favor, desplácese hacia abajo para ver todos los candidatos.',
    voteForPrompt: {
      'singular': {
        'prefix': 'Puede votar por',
        'separator': 'candidato de',
        'suffix': 'candidatos totales.'
      },
      'plural': {
        'prefix': 'Puede votar por ',
        'separator': 'candidatos de',
        'suffix': 'candidatos totales.'
      }
    },
};

export default contestTranslation;
