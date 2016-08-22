import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const ballotOverviewTranslation = {
  ballotOverview: {
    ballot_address: 'Ballot and voting information for your address in', // Translate
    ballot_area: 'Ballot and voting information for ', // Translate
    votingInfoSections: {
     'section-my-polling-place': 'My polling place',
     'section-register-to-vote': 'Register to vote',
     'section-ways-to-vote': 'Ways to vote',
     'section-voting-basics': 'Voting basics',
     'section-important-dates-deadlines': 'Important dates and deadlines',
     'section-my-rights-as-a-voter': 'My rights as a voter',
     'section-more-voting-info': 'More voting info',
     'section-election-office-contact': 'Contact election office',
    },
    meta: {
      overview: {
        page_title: 'Ballot',
        page_title_description: 'Candidate & Ballot Measure Voter Guide',
        card_title: '',
        card_title_description: 'Get the facts before you vote.',
        twitter_templates: {
          default: {
            landingPage: 'Get the facts before you vote. ',
            ballotOverview: 'Get the facts before you vote. ',
            ballotOverviewAlt: 'Get the facts before you vote. ',
            votingInfo: 'Get the facts before you vote. ',
          },
          il: {
            landingPage: 'Get the facts before you vote. Access your personalized ballot here ',
            ballotOverview: 'Ready for the Illinois Primary Election on March 15th? I accessed my ballot with ',
            ballotOverviewAlt: 'The Illinois Primary Election is March 15th. Get the facts before you vote ',
            votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
          },
          ca: {
            landingPage: 'Get the facts before you vote. Access your personalized ballot here ',
            ballotOverview: 'Ready for California Elections? I accessed my ballot with ',
            ballotOverviewAlt: 'Get the facts before you vote ',
            votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
          },
          ny: {
            landingPage: 'Get the facts before you vote. Access your personalized ballot here ',
            ballotOverview: 'Ready for New York Elections? I accessed my ballot with ',
            ballotOverviewAlt: 'Get the facts before you vote ',
            votingInfo: 'Need info on voter registration, polling locations, election dates, and more? ',
          }
        },
        facebook: '',
        email: '',
      },
      contest: {
        page_title: 'Ballot',
        page_title_description: 'Voter Guide',
        card_title: '',
        card_title_description: '',
        twitter: '',
        facebook: '',
        email: '',
      },
      candidate: {
        page_title: 'Ballot',
        page_title_description: 'Voter Guide',
        card_title: '',
        card_title_description: '',
        card_title_label: 'Learn more about',
        card_title_separator: 'for',
        candidate_label: 'Candidate'
      },
      measure: {
        page_title: 'Ballot',
        page_title_description: 'Measures & Voter Guide',
        card_title: '',
        card_title_description: '',
        card_title_label: 'Learn more about',
        card_title_separator: '',
      },
      'ballot-candidates': {
        page_title: 'Ballot',
        page_title_description: 'Candidates',
        card_title: '',
        card_title_description: '',
      },
      'ballot-measures': {
        page_title: 'Ballot',
        page_title_description: 'Measures',
        card_title: '',
        card_title_description: '',
      },
      'ballot-voting-info': {
        page_title: 'Voting Info',
        page_title_description: 'Registration, Polling Places & How to Vote',
        card_title: '',
        card_title_description: '',
      },
      'ballot-choices': {
        page_title: 'Election',
        page_title_description: 'My List',
        card_title: '',
        card_title_description: '',
      }
    },
    ballot_error: "There was a problem finding this ballot.", // Translate
    ballot_extra_result_explanation: {
      ca: 'Results based on only a zip code may return more contests than will appear on your actual ballot. <a href="/en/ca">For the most specific results available, enter your full address.</a>', // Translate
      il: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/il">For the most specific results available, enter your full address.</a>', // Translate
      ny: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/ny">For the most specific results available, enter your full address.</a>', // Translate
      default: ''
    },
    contest_extra_result_explanation: {
      ca: 'May not appear on your actual ballot. <a href="/ca/page/how-we-get-our-data">Learn More</a>', // Translate
      il: 'May not appear on your actual ballot. <a href="/il/page/how-we-get-our-data">Learn More</a>', // Translate
      ny: 'May not appear on your actual ballot. <a href="/ny/page/how-we-get-our-data">Learn More</a>', // Translate
      default: ''
    },
    read_more: 'Read more',
    read_less: 'Read less',
    ballot_no_address: 'Here’s what’s on the ballot.', // Translate
    choose_candidates: 'Candidates', // Translate
    list_of_candidates: 'See a list',
    start_with_candidates: 'Start with candidates',
    list_of_measures: 'See a list',
    start_with_measures: 'Start with measures',
    candidates_intro_prefix: 'Get in-depth information about the ', // Translate
    candidates_intro: 'candidates running for', // Translate
    candidates_offices: 'offices', // Translate
    candidates_office: 'office', // Translate
    choose_propositions: 'Ballot Measures', // Translate
    propositions_intro: 'Learn more about the ', // Translate
    propositions: 'measures', // Translate
    proposition: 'measure', // Translate
    choose_voting_info: 'Voting Info', // Translate
    choose_voting_info_label: 'Get info on <strong>when, where, and how to vote</strong>', // Translate
    choices: "My List", // Translate
    choices_get_ballot: 'Want to keep track of you ballot choices and make a list to take to the polls?',
    choices_learn_more: 'Learn more',
    other_elections_label: 'Other Elections',
    choices_get_started: 'get started',
    choices_progress_percentage_prefix: 'You are',
    choices_progress_percentage_suffix: 'of the way through your ballot.',
    choices_label: "<p>Review the candidates and measures on your ballot, mark your choices, and then send your list to your email or printer, or copy the link to your phone.</p>", // Translate
    noPollingLocationLabel: 'Polling location & hours', // Translate
    noPollingLocationLookup: '<p><strong>Want to look up your polling place?</strong></p> <p></p>', // Translate
    noPollingLocationLinkLabel: 'Check your polling location with your local elections office.', // Translate
    noPollingLocationMessage: 'No polling location information is available.',
    noPollingLocationMessageResults: {
      active: 'No polling location information is available.',
      complete: 'No polling location information is available. Election has already passed.'
    },
    pollingLocationLabel: 'Your polling location & hours', // Translate
    myPollingLocationLabel: 'My polling location and hours', // Translate

    election_results_analysis: {
      intro_label: 'Election results',
      state_results_label: 'Statewide Results',
      county_results_label: 'Results',
      intro_description: {
        complete: '',
        in_progress: 'Results are still being reported.'
        // complete: 'All results are in. <br />View candidates and measures to see who won.',
        // in_progress: 'Results are still being reported.<br /> View candidates and measures to see who’s winning.'
      },
      election_status_complete: {
        label: 'Election results',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Election results', // Election results are still being reported.',
        icon: 'fa-star', // icon: 'fa-refresh',
      },
      updated: 'Updated:',
      votes: 'votes',
      state: {
        complete: {
          icon: 'fa-star',
          message_result: 'of precincts reporting',
          message_turnout: 'Voter Turnout:',
          tooltip_result: {
            message: '',
            label: 'total precincts reporting.',
            separator: 'of'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          }
        },
        in_progress: {
          icon: 'fa-star', // icon: 'fa-refresh',
          message_result: 'of precincts reporting',
          message_turnout: 'Voter Turnout:',
          tooltip_result: {
            message: '',
            label: 'total precincts reporting.',
            separator: 'of'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots have been counted.',
          }
        }
      },
      precincts: {
        complete: {
          icon: 'fa-star',
          message_result: 'of precincts reporting',
          message_turnout: 'Voter Turnout:',
          message_turnout_tense: 'was',
          message_turnout_suffix: '.',
          tooltip_result: {
            message: '',
            label: 'total precincts reporting.',
            separator: 'of'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots.',
          }
        },
        in_progress: {
          icon: 'fa-star', // icon: 'fa-refresh',
          message_result: 'of precincts reporting',
          message_turnout: 'Voter Turnout:',
          message_turnout_tense: 'is',
          message_turnout_suffix: '.',
          tooltip_result: {
            message: '',
            label: 'total precincts reporting.',
            separator: 'of'
          },
          tooltip_turnout: {
            message: '',
            prefix: 'This means',
            separator: 'of',
            label: 'registered voters cast ballots have been counted.',
          }
        }
      }
    },


    noHoursLabel: {
      ca: 'Polls are open from',
      il: 'Polls are open from',
      ny: {
        'default': 'Polls are open from',
        'State of New York': 'All polls close at 9 p.m., but opening hours vary by county. Look up your ballot by area for more information.',
      }
    },
    hoursLabel: {
      ca: 'Open from',
      il: 'Open from',
      ny: {
        'default': 'Open from',
        'State of New York': 'All polls close at 9 p.m., but opening hours vary by county. Look up your ballot by area for more information.',
      },

    },
    hours: {
      ca: '7 a.m. - 8 p.m.',
      il: '6 a.m. - 7 p.m.',
      ny: {
        'default': '12 p.m. - 9 p.m.',
        'State of New York': '',
        'New York City': '6 a.m. - 9 p.m.',
        'Erie County': '6 a.m. - 9 p.m.',
        'Nassau County': '6 a.m. - 9 p.m.',
        'Suffolk County': '6 a.m. - 9 p.m.',
        'Westchester County': '6 a.m. - 9 p.m.',
        'Rockland County': '6 a.m. - 9 p.m.',
        'Orange County': '6 a.m. - 9 p.m.',
        'Putnam County': '6 a.m. - 9 p.m.',
      }
    },
    more_voting_info: 'See more voting info', // Translate
    other_address: 'Look up ballot for', // Translate
    other_address_link: 'another address.', // Translate
    other_elections: 'See your ballot for', // Translate
    past_elections_or: 'Or', // Translate
    past_elections_link: 'look up past elections.', // Translate
    past_elections_url: '/ca/en/page/elections-archive', // No translation
    privacy_statement: 'Your information is private unless you choose to share it.', // Translate
    privacy_statement_link: 'Privacy policy.', // Translate
    privacy_statement_url: '/page/privacy-policy', // No translation

    jurisdictionLabels: {
      Federal: {
        label: "United States",  // Translate
        iconFileName: "Federal",  // No translation
        description: '',
        altText: 'Icon of Capitol building'
      },
      State: {
        label: "State of ",  // Translate
        iconFileName: "State",  // No translation
        description: '',
        altText: 'Icon of the State'
      },
      Judicial: {
        label: "Judicial",  // Translate
        iconFileName: "Judicial",  // No translation
        description: '',
        altText: 'Icon of a Judge'
      },
      School: {
        label: "School",  // Translate
        iconFileName: "School",  // No translation
        description: '',
        altText: 'Icon of a school'
      },
      County: {
        label: "County", // Translate
        iconFileName: "County", // No translation
        description: '',
        altText: 'Icon of buildings and a farm for County'
      },
      Place: {
        label: "Local",  // Translate
        iconFileName: "Place", // No translation
        description: '',
        altText: 'Icon of buildings'
      },
      'party committee': {
        label: "Party Committee",  // Translate
        iconFileName: "PartyCommittee", // No translation
        description: '',
        altText: 'Icon of a group of people'
      },
      Special: {
        label: "Special District",  // Translate
        iconFileName: "Special", // No translation
        description: '',
        altText: 'Icon of a bridge and a road'
      },
    },
    ballot_extra_result_explanation_address: {
      ca: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      il: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      ny: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data#address-search">Learn More</a>',
      default: ''
    },
  },
  ballotNavigation: {
     links: [
        {
          iconFileName: 'fa fa-chevron-circle-left',
          activeIconFileName: 'fa fa-chevron-circle-down',
          tooltip: 'Back to Overview',
          label: '',  // Translate
          link: 'overview',  // No translation
          section: 'overview', // No translation
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Candidates', // Translate
          link: 'candidates', // No translation
          section: 'candidates', // No translation
          target: 'OverviewCandidates Offices', // No translation
          dropdownLimit: 50,
          dropdownComponent: 'ContestsList',
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Measures', // Translate
          link: 'measures',
          section: 'measures', // No translation
          target: 'OverviewMeasures Measures', // No translation
          dropdownLimit: 50,
          dropdownComponent: 'MeasuresList',
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Voting Info', // Translate
          link: 'voting-info', // No translation
          section: 'votingInfo', // No translation
          target: 'VotingInfoSections', // No translation
        },
        {
          iconFileName: '', // No translation
          tooltip: 'New feature! We are still testing this feature, please let us know what you think.', // Translate
          label: 'My List', // Translate
          link: 'choices', // 'choices'  // No translation
          section: 'choices', // No translation
          target: 'Choices', // No translation
        },
      ],
    }
};

export default ballotOverviewTranslation;
