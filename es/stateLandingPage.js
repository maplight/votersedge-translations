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
      special_label: 'Las elecciones generales en California son el 8 de noviembre:',
      register: {
        message: 'Conozca <a href="/es/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca#section-my-rights-as-a-voter">sus derechos como votante!</a>',
        icon: 'fa-star'
      },
      deadline: {
        message: '<a href="/es/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca#section-register-to-vote">Inscribase para votar! La fecha límite para inscribirse es el 24 de Octubre.</a>',
        icon: 'fa-star'
      },
      voting_info: {
        message: '<a href="/es/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca">Obtenga más información sobre dónde, cuándo y cómo votar.</a>',
        icon: 'fa-chevron-circle-right'
      },
    },
  },
  election_archive_label: 'Elecciones pasadas y actuales',
  other_ways_to_find_ballots: 'More Ways to find Ballots',
};

export default stateLandingPageTranslation;
