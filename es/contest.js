import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content on a contest page.

const contestTranslation = {
    pageTitle: "Contienda", // Translate
    sectionTitle: "Candidato(a)s", // Translate
    officeDescriptionLabel: "Sobre este cargo", // Translate
    my_choices: "¿Cómo funciona la votación para esta contienda?", // Translate
    skip_label_offices: "Omitir esto", // Translate
    candidates_label: "¿Quién se está postulando?", // Translate
    candidates_random_label: "Los candidatos aparecen en orden aleatorio.", // Translate
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
      choices: 'Go to My List',
      measure: 'Next: Go to Measures'
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
        label: 'Election Results',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Election Results',
        icon: 'fa-star', // 'fa-refresh',
      },
      contest: {
        complete: {
          icon: 'fa-star',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted.',
          tooltip_result: {
            message: '',
            label: 'precincts reporting.',
            separator: '/'
          },
          tooltip_message: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          },
          candidate: {
            votes: 'votes',
            status: 'Elected',
          },
        },
        in_progress: {
          icon: 'fa-star', // 'fa-refresh',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted.',
          tooltip_result: {
            message: '',
            label: 'precincts reporting.',
            separator: '/',
          },
          tooltip_message: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          },
          candidate: {
            votes: 'votes',
            status: 'Elected',
          },
        },
      },
    },
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
    // voteForPrompt: {
    //   single: `Puede votar por ${office.contestType.vote_for_count} candidato.`, // Translate just the text
    //   multiple: `Puede votar por ${office.contestType.vote_for_count} candidatos.` // Translate just the text
    // }
};

export default contestTranslation;
