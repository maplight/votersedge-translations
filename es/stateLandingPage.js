import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const stateLandingPageTranslation = {
  about_link: "/page/about-voters-edge", // No translation
  about_link_label: "Descubra más sobre", // Translate
  features_label: "Qué puede hacer en", // Translate
  features: [
     "Use su dirección para obtener una boleta electoral personalizada.", // Translate
     "Obtenga información detallada sobre los candidatos, las iniciativas de ley y quién las apoya.", // Translate
    "Revise dónde, cuándo y cómo votar.", // Translate
    "Mantenga un registro de sus opciones y úselas para votar.", // Translate
    "¡Comparta e inicie la conversación!" // Translate
  ],
  features_special: {
    ca: {
      find_ballot: {
        message: 'Use su dirección para obtener una boleta electoral personalizada.',
        icon: 'fa-star'
      },
      get_info: {
        message: 'Obtenga información sobre los candidatos, las iniciativas de ley y quién las apoya.',
        icon: 'fa-star'
      },
      my_list: {
        message: 'Mantenga un registro de sus opciones y úselas para votar.',
        icon: 'fa-star'
      },
      special_label: 'Las elecciones primarias en California son el 7 de junio:',
      register: {
        message: '¡Obtenga información sobre como <a href="/en/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca#menu-item-how-to-vote-in-the-presidential-primary">votar para presidente en las elecciones primarias!</a>',
        icon: 'fa-star'
      },
      deadline: {
        message: '<a href="/en/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca#section-ways-to-vote">Mira las maneras en que puede votar.</a>',
        icon: 'fa-star'
      },
      voting_info: {
        message: '<a href="/en/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca">Obtenga más información sobre dónde, cuándo y cómo votar.</a>',
        icon: 'fa-chevron-circle-right'
      },
    },
  },
  election_archive_label: 'Past and current elections',
};

export default stateLandingPageTranslation;