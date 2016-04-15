import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const ballotOverviewTranslation = {
  ballotOverview: {
    ballot_address: 'What\'s on the ballot for your address in', // Translate
    ballot_area: 'What\'s on the ballot for ', // Translate
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
    ballot_no_address: 'Here’s what’s on the ballot.', // Translate
    choose_candidates: 'Candidates', // Translate
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
    choices_label: "<p><strong>Keep track of your ballot choices and make a list to take to the polls</strong></p><p>As you review races, candidates and measures, you can add them to your list. When you are finished, go to <strong>My List</strong> to send your list to your email, printer, or copy a link to your phone.</p><p>We are a nonpartisan, nonprofit voter advocacy project and will not mail you anything or track your choices.</p>", // Translate
    noPollingLocationLabel: 'Polling location & hours', // Translate
    noPollingLocationLookup: '<p><strong>Want to look up your polling place?</strong></p> <p></p>', // Translate
    noPollingLocationLinkLabel: 'Look up my polling place', // Translate
    pollingLocationLabel: 'Your polling location & hours', // Translate
    myPollingLocationLabel: 'My polling location and hours', // Translate
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
      }
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
    privacy_statement_link: 'Privacy Policy', // Translate
    privacy_statement_url: '/page/privacy-policy', // No translation

    jurisdictionLabels: {
      Federal: {
        label: "United States",  // Translate
        iconFileName: "Federal",  // No translation
        description: '',
      },
      State: {
        label: "State of ",  // Translate
        iconFileName: "State",  // No translation
        description: '',
      },
      Judicial: {
        label: "Judicial",  // Translate
        iconFileName: "Judicial",  // No translation
        description: '',
      },
      School: {
        label: "School",  // Translate
        iconFileName: "School",  // No translation
        description: '',
      },
      County: {
        label: "County", // Translate
        iconFileName: "County", // No translation
        description: '',
      },
      Place: {
        label: "Local",  // Translate
        iconFileName: "Place", // No translation
        description: '',
      },
      'party committee': {
        label: "Party Committee",  // Translate
        iconFileName: "PartyCommittee", // No translation
        description: '',
      },
      Special: {
        label: "Special District",  // Translate
        iconFileName: "Special", // No translation
        description: '',
      },
    },
    ballot_extra_result_explanation: {
      ca: 'Results based on only a zip code may return more contests than will appear on your actual ballot. <a href="/en/ca">For the most specific results available, enter your full address.</a><br />',
      il: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/il">For the most specific results available, enter your full address.</a><br />',
      ny: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/ny">For the most specific results available, enter your full address.</a><br />',
      default: ''
    },
    ballot_extra_result_explanation_address: {
      ca: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      il: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      ny: 'There may be more contests listed here than will appear on your actual ballot. <br /><a href="/ca/page/how-we-get-our-data">Learn More</a>',
      default: ''
    },
    contest_extra_result_explanation: {
      ca: 'May not appear on your actual ballot. <a href="/ca/page/how-we-get-our-data">Learn More</a>',
      il: 'May not appear on your actual ballot. <a href="/il/page/how-we-get-our-data">Learn More</a>',
      ny: 'May not appear on your actual ballot. <a href="/ny/page/how-we-get-our-data">Learn More</a>',
      default: ''
    },
  },
  ballotNavigation: {
     links: [
        {
          label: 'Overview',  // Translate
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
        },
        {
          iconFileName: '',
          tooltip: '',
          label: 'Measures', // Translate
          link: 'measures',
          section: 'measures', // No translation
          target: 'OverviewMeasures Measures', // No translation
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
          iconFileName: 'fa fa-newspaper-o', // No translation
          tooltip: 'Coming soon. Save your choices and see them all on a list.', // Translate
          label: 'My List', // Translate
          link: '', // 'choices'  // No translation
          section: 'choices', // No translation
          target: 'Choices', // No translation
        },
      ],
    }
};

export default ballotOverviewTranslation;
