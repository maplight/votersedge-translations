import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const stateLandingPageTranslation = {
  about_link: "/page/about-voters-edge", // No translation
  about_link_label: "Find out more about", // Translate
  features_label: "What you can do on", // Translate
  features: {
    ca: [
      'Use your address to get a personalized ballot.', // Translate
      'Get info on candidates, measures, and who supports them.', // Translate
      'Check where, when, and how to vote.', // Translate
      'Keep track of your choices and use them to vote.', // Translate
      'Share and start the conversation!' // Translate
    ],
    ny: [
      'Use your address to get a personalized ballot.', // Translate
      'Get in-depth info on candidates, measures, and who supports them.', // Translate
      'Check where, when, and how to vote.', // Translate
      'Keep track of your choices and use them to vote.', // Translate
      'Share and start the conversation!' // Translate
    ],
    il: [
      'Use your address to get a personalized ballot.', // Translate
      'Get in-depth info on candidates, measures, and who supports them.', // Translate
      'Check where, when, and how to vote.', // Translate
      'Keep track of your choices and use them to vote.', // Translate
      'Share and start the conversation!' // Translate
    ],
    default: [
      'Use your address to get a personalized ballot.', // Translate
      'Get in-depth info on candidates, measures, and who supports them.', // Translate
      'Check where, when, and how to vote.', // Translate
      'Keep track of your choices and use them to vote.', // Translate
      'Share and start the conversation!' // Translate
    ],
  },
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
        message: 'Keep track of your choices and use them to vote.',
        icon: 'fa-star'
      },
      special_label: 'The General Election is on November 8:',
      register: {
        message: 'Know your <a href="/en/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca#section-my-rights-as-a-voter">rights as a voter!</a>',
        icon: 'fa-star'
      },
      deadline: {
        message: 'Deadline: <a href="/en/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca#section-register-to-vote">Sign up to vote, register by October 24.</a>',
        icon: 'fa-star'
      },
      voting_info: {
        message: '<a href="/en/ca/ballot/election/area/42/section/voting-info?id=ocd-division/country:us/state:ca">Get more Voting Info on where, when and how to vote.</a>',
        icon: 'fa-chevron-circle-right'
      },
    },
  },
  election_archive_label: 'Past and current elections',
};

export default stateLandingPageTranslation;