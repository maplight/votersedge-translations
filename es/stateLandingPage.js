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
        message: 'Use your address to get a personalized ballot.',
        icon: 'fa-star'
      },
      get_info: {
        message: 'Get info on candidates, measures, and who supports them.',
        icon: 'fa-star'
      },
      my_list: {
        message: 'Keep track of your choices and use them vote.',
        icon: 'fa-star'
      },
      special_label: 'The California primary is on June 7:',
      register: {
        message: 'Make sure you can <a href="/es/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca#menu-item-how-to-vote-in-the-presidential-primary">vote for president in the primary!</a>',
        icon: 'fa-star'
      },
      deadline: {
        message: 'Deadline: <a href="/es/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca#section-register-to-vote">Sign up to vote; register by May 23.</a>',
        icon: 'fa-star'
      },
      voting_info: {
        message: '<a href="/es/ca/ballot/election/area/39/section/voting-info?id=ocd-division/country:us/state:ca">Get more Voting Info on where, when, and how to vote.</a>',
        icon: 'fa-chevron-circle-right'
      },
    },
  },
  election_archive_label: 'Past and current elections',
};

export default stateLandingPageTranslation;