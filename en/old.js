import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

const InterfaceStringTranslations = {
  search: {
    en: {
      intro: "Find in-depth information about what's on your ballot",
      path: '/search',
      zipPrompt: "Enter your <strong>zip code</strong>",
      streetAddressPrompt: "And your <strong>street address</strong> <span class=\"muted\">(to access your complete ballot.)</span>",
      addressPromptReason: "Necessary to tell you exactly what will be on your ballot and lookup your polling place.",
      searchButtonLabel: "Find my ballot",
      confidentialityStatement: "Address information is confidential.",
      privacyStatement: "We are non-partisan, non-profit, and will not sell your information.",
      privacyPolicyLinkLabel: "Privacy policy.",
      privacyPolicyLink: "/page/privacy-policy",
      countyLabel: "County",
      countySearchPath: '/election_authority',
      countyButtonLabel: "Look up county",
      zipSearchPath: '/search',
      zipLabel: "Zipcode",
      zipButtonLabel: "Look up zipcode",
      zipHelpText: "",
      domains: {
        'ca': {
          // stateBallotLinkLabel: "Coming soon for 2016. In meantime, here's measures and races for the <strong>state of California</strong> 2014 election.",
          stateBallotLinkLabel: "",
          // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",
          stateBallotLink: "",
        },
        'il': {
          stateBallotLinkLabel: "See ballot measures and races for the <strong>state of Illinois</strong>",
          stateBallotLink: "/ballot/election/area/30?id=ocd-division/country:us/state:il",
        },
        'ny': {
          stateBallotLinkLabel: "See ballot measures and races for the <strong>state of New York</strong>",
          // stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ny",
          stateBallotLink: "",
        }
      },
      electionArchiveLink: "/page/elections-archive",
      electionArchiveLabel: "<strong>Election archive.</strong> See a list of past elections.",
      allStateLink: "http://votersedge.org",
      allStateLabel: "Find ballots for <strong>other states</strong>",
      countyZipContent: {
        accordionLabel: "Look up ballots by <strong>county or zipcode.</strong>",
        accordionType: "simple",
        accordionName: "county-selection",
      }
    },
    es: {
      intro: "Find in-depth information about what's on your ballot",
      path: '/search',
      zipPrompt: "Enter your <strong>zip code</strong>",
      streetAddressPrompt: "And your <strong>street address</strong> <span class=\"muted\">(to access your complete ballot.)</span>",
      addressPromptReason: "Necessary to tell you exactly what will be on your ballot and lookup your polling place.",
      searchButtonLabel: "Find my ballot",
      confidentialityStatement: "Address information is confidential.",
      privacyStatement: "We are non-partisan, non-profit, and will not sell your information.",
      privacyPolicyLinkLabel: "Privacy policy.",
      privacyPolicyLink: "/page/privacy-policy",
      countyLabel: "County",
      countySearchPath: '/ballot/election',
      countyButtonLabel: "Look up county",
      zipSearchPath: '/search',
      zipLabel: "Zipcode",
      zipButtonLabel: "Look up zipcode",
      zipHelpText: "",
      domains: {
        'ca': {
          stateBallotLinkLabel: "See ballot measures and races for the State of California",
          stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ca",
        },
        'il': {
          stateBallotLinkLabel: "See ballot measures and races for the State of Illinois",
          stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:il",
        },
        'ny': {
          stateBallotLinkLabel: "See ballot measures and races for the State of New York",
          stateBallotLink: "/ballot/election/area/18?id=ocd-division/country:us/state:ny",
        }
      },
      electionArchiveLink: "/page/elections-archive",
      electionArchiveLabel: "Election archive. See a list of past elections.",
      allStateLink: "http://votersedge.org",
      allStateLabel: "Find ballots for other states",
      countyZipContent: {
        accordionLabel: "Look up ballots by county or zipcode.",
        accordionType: "simple",
        accordionName: "county-selection",
      }
    }
  },

  searchPageTranslations: {
    en: {
    },
    es: {
    }
  },

  measureTranslations: {
    en: {
      sectionTitle: "Measures",
      measureDescriptionLabel: "About this measure",
      my_choices: "Do you support this proposition?",
      SoS: "Secretary of State",
      EVG: "Easy Voter Guide — League of Women Voters of California",
      LWVC: "Pros/Cons — League of Women Voters of California",
    },
    es: {
      sectionTitle: "Measures",
      measureDescriptionLabel: "About this measure",
      my_choices: "Do you support this proposition?",
      SoS: "Secretary of State",
      EVG: "Easy Voter Guide — League of Women Voters of California",
      LWVC: "Pros/Cons — League of Women Voters of California",
    }
  },

  contestTranslations: {
    en: {
      sectionTitle: "Candidates",
      officeDescriptionLabel: "About this office",
      my_choices: "How does voting work for this contest?",
      skip_label_offices: "Skip this",
      candidates_label: "Who's running?",
      candidates_random_label: "Candidates appear in random order.",
    },
    es: {
      sectionTitle: "Candidates",
      officeDescriptionLabel: "About this office",
      my_choices: "How does voting work for this contest?",
      skip_label_offices: "Skip this",
      candidates_label: "Who's running?",
      candidates_random_label: "Candidates appear in random order.",
    },
  },
  landingPage: {
    en: {
      intro: "Find elections in these states",
      features_label: "What you can do on Voter's Edge",
      features: [
      'Use your address to get a personalized ballot.',
      'Get in-depth info on candidates, measures, and who supports them.',
      'Check where, when, and how to vote.',
      'Keep track of your choices and use them to vote.',
      'Share and start the conversation!'
      ],
      benefits_label: "How Voter's Edge will help you",
      benefits: [
      'Make sense of the election.',
      'Cut through the campaign noise and get the facts.',
      'Vote with confidence.',
      'Impact your democracy.'
      ],
      about_link: "/page/about-voters-edge",
      about_link_label: "Find out more about Voter's Edge",
      domains: [
      {
        name: "california-state",
        label: "California",
        link: "/ca",
        branding_label: "Produced in partnership with",
        branding_logo: "/content/svg/lwvcef/votersedge_logo_lwvcef-200.png",
        branding_logo_alt: "League of Women Voters of California Education Fund",
        branding_link: "https://cavotes.org/",
      },
      {
        name: "illinois-state",
        label: "Illinois",
        link: "/il",
        branding_label: "",
        branding_logo: "",
        branding_logo_alt: "",
        branding_link: "",
      },
      {
        name: "new-york-state",
        label: "New York",
        // link: "/ny",
        link: "",
        branding_label: "Coming soon!",
        branding_logo: "",
        branding_logo_alt: "",
        branding_link: "",
      },
      ]
    },
    es: {
      intro: "Find elections in these states",
      features: [
      'Use your address to get a personalized ballot.',
      'Get in-depth info on candidates, measures, and who supports them.',
      'Check where, when, and how to vote.',
      'Keep track of your choices and use them to vote.',
      'Share and start the conversation!'
      ],
      benefits_label: "How Voter's Edge will help you",
      benefits: [
      'Make sense of the election.',
      'Cut through the campaign noise and get the facts.',
      'Vote with confidence.',
      'Impact your democracy.'
      ],
      about_link: "/page/about-voters-edge",
      about_link_label: "Find out more about Voter's Edge",
      domains: [
      {
        name: "california-state",
        label: "California",
        link: "/ca",
        branding_label: "Produced in partnership with",
        branding_logo: "/content/svg/lwvcef/votersedge_logo_lwvcef-200.png",
        branding_logo_alt: "League of Women Voters of California Education Fund",
        branding_link: "https://cavotes.org/",
      },
      {
        name: "illinois-state",
        label: "Illinois",
        link: "/il",
        branding_label: "",
        branding_logo: "",
        branding_logo_alt: "",
        branding_link: "",
      },
      {
        name: "new-york-state",
        label: "New York",
        link: "/ny",
        branding_label: "",
        branding_logo: "",
        branding_logo_alt: "",
        branding_link: "",
      },
      ]
    },
  },
  jurisdictionLabels: {
    en: {
      Federal: {
        label: "United States",
        iconFileName: "Federal",
        description: '',
      },
      State: {
        label: "State of ",
        iconFileName: "State",
        description: '',
      },
      Judicial: {
        label: "Judicial",
        iconFileName: "Judicial",
        description: '',
      },
      School: {
        label: "School",
        iconFileName: "School",
        description: '',
      },
      County: {
        label: "County",
        iconFileName: "County",
        description: '',
      },
      Place: {
        label: "Local",
        iconFileName: "Place",
        description: '',
      },

      Special: {
        label: "Special District",
        iconFileName: "Special",
        description: '',
      },
    },
    es: {
      Federal: {
        label: "United States",
        iconFileName: "Federal",
        description: '',
      },
      State: {
        label: "State of ",
        iconFileName: "State",
        description: '',
      },
      Judicial: {
        label: "Judicial",
        iconFileName: "Judicial",
        description: '',
      },
      School: {
        label: "School",
        iconFileName: "School",
        description: '',
      },
      County: {
        label: "County",
        iconFileName: "County",
        description: '',
      },
      Place: {
        label: "Local",
        iconFileName: "Place",
        description: '',
      },

      Special: {
        label: "Special District",
        iconFileName: "Special",
        description: '',
      },
    },

  },

  feedbackTranslations: {
    en: {
      feedback_button_label: "Contact Us",
      feedback_message: "Message",

    },
    es: {
      feedback_button_label: "Enviar un mensaje",
      feedback_message: "Mensaje",

    }

  },

  statusTranslation: {
    en: {

    },
    es: {

    }
  },

  multipleElectionsTranslations: {
    en: {
      upcoming_message_default: 'We found elections for ',
      upcoming_message_1: 'Looks like there is an upcoming election for ',
      upcoming_message_2: 'Looks like there are a couple of upcoming elections for ',
      upcoming_message_3: 'Looks like there are some upcoming elections for ',
      recent_message_default: 'We also found these past elections:',
      recent_message_1: 'We also found this past election:',
      recent_message_2: 'We also found these past elections:',
      recent_message_no_upcoming_1: 'Here is the most recent election for ',
      recent_message_no_upcoming_2: 'Here are some recent elections for ',
      choose_ballot: 'Please choose which ballot you would like to see.',

      election_archive: 'Looking for an older election? Check the ',
      election_archive_label: 'archives.',
    },
    es: {
      upcoming_message_default: 'We found elections for ',
      upcoming_message_1: 'Looks like there is an upcoming elections for ',
      upcoming_message_2: 'Looks like there are a couple of upcoming elections for ',
      upcoming_message_3: 'Looks like there are some upcoming elections for ',
      recent_message_1: 'Here is the most recent election',
      recent_message_2: 'Here are some recent elections',
      recent_message_no_upcoming_1: 'Here is the most recent election for ',
      recent_message_no_upcoming_2: 'Here are some recent elections for ',
      election_archive: 'You can also view past elections in the ',
      election_archive_label: 'election archive',
      choose_ballot: 'Please choose which ballot you would like to see.',
    }
  },

  ballotNavigation: {
    "en" : {
      links: [
          // {
          //   label: 'Home',
          //   link: '/' + props.subDomain,
          //   section: 'home',
          // },
          {
            label: 'Overview',
            link: 'overview',
            section: 'overview',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Candidates',
            link: 'candidates',
            section: 'candidates',
            target: 'OverviewCandidates Offices',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Measures',
            link: 'measures',
            section: 'measures',
            target: 'OverviewMeasures Measures',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Voting info',
            link: 'voting-info',
            section: 'votingInfo',
            target: 'VotingInfoSections',
          },
          {
            iconFileName: 'fa fa-newspaper-o',
            tooltip: 'Coming soon. Save your choices and see them all on a list.',
            label: 'My List',
            link: '', // 'choices'
            section: 'choices',
            target: 'Choices',
          },
          ],
          current: "(current)",
        },
        "es" : {
          links: [
          // {
          //   label: 'Inicio',
          //   link: '/' + props.subDomain + '/es',
          //   section: 'home',
          // },
          {
            label: 'Mi Votación',
            link: 'overview',
            section: 'overview',
          },
          {
            label: 'Candidatos',
            link: 'candidates',
            section: 'candidates',
          },
          {
            label: 'Proposiciones',
            link: 'measures',
            section: 'measures',
          },
          {
            label: 'Info Votación',
            link: 'voting-info',
            section: 'votingInfo',
          },
          {
            label: 'Mi Opciones',
            link: 'choices',
            section: 'choices',
          },
          ],
          current: "(current)"
        }
      },
      candidate: {

      },
      choices: {
        en: {
          bookmark_label: 'Add to my list',
          candidate_choice_label: "",
          list_label: "Here are the candidates, races and measure you have added.",
          choices_explanation: `
            <p>Because ballots are often long and complicated, Voter’s Edge
            provides you with a tool to help you keep track of your choices.</p>

            <p><strong>As you review your ballot, you can</strong></p>
            <ul>
            <li><i class="fa fa-check-square"></i>Choose the candidates you would like to remember to vote for on your ballot.</li>
            <li><i class="fa fa-thumbs-up"></i>Add your Yes or No vote for ballot measures.</li>
            <li><i class="fa fa-bookmark"></i>Bookmark contests or measure to review later.</li>
            </ul>

            <p><strong>When you are finished (or need a break), you can</strong></p>
            <ul>
            <li><i class="fa fa-print"></i>Print your list.</li>
            <li><i class="fa fa-external-link"></i>Copy a link to send to your phone to retrieve your list later.</li>
            <li><i class="fa fa-envelope"></i>E-mail your ballot to yourself.</li>
            </ul>

            <h4>Privacy Tips</h4>
            <p>For privacy reasons, we do not save your choices. We do not set cookies with your
            choices. If you are on a public computer, be sure to clear your history.</p>
            `,
          toolbar_title: 'Get your list',
          toolbar_label: 'Grab your ballot choices to take to the polls. ',
          toolbar: [

            {label: 'Print your list.', icon: 'fa-print', description: "Just print this page with this browser.", type: 'print'},
            {label: 'Copy a link.', icon: 'fa-external-link', description: "Here is a link you can use to paste into a text message or bookmark.", type: 'copy'},
            {label: 'E-mail your list', icon: 'fa-envelope', description: "Get this list as well as a link to get back to your list.", type: 'email'},

          ],

          contest_toolbar: [
            {label: {set: 'Review this contest later', unset: 'Remove from review'}, icon: {set: 'fa-bookmark', unset: 'fa-remove'}, type: 'review'},
            {label: 'Share this page', icon: '', type: 'share'},
          ],

          candidate_toolbar: [
            {label: {set: 'Review this candidate later', unset: 'Remove from review'}, icon: {set: 'fa-bookmark', unset: 'fa-remove'}, type: 'review'},
            {label: 'Share this page', icon: '', type: 'share'},
          ],

          measure_toolbar: [
            {label: {set: 'Review this measure later', unset: 'Remove from review'}, icon: {set: 'fa-bookmark', unset: 'fa-remove'}, type: 'review'},
            {label: 'Share this page', icon: '', type: 'share'},
          ],
        }

      },
      compareCandidates: {

      },
      measure: {
        en: {
          aboutLabel: 'What is this proposition?',
          argumentsLabel: 'Arguments for and against this proposition',
          supportLabel: 'Who supports this and why?',
          costLabel: 'How much does it cost?',
          infoLabel: 'How can I learn more?',

          about: [
          {
            label: "Summary",
            link: "page/summary",
            status: "published",
            formattedField: 'official_summary',
            source: 'Secretary of State',
          },

          {
            label: "Background",
            link: "page/background",
            status: "published",
            formattedField: 'official_background',
            source: 'Secretary of State',
          },
          {
            label: "What will be on your ballot?",
            link: "page/about-proposition",
            status: "published",
            formattedField: '',
            source: 'Secretary of State'
          },
          {
            label: "How is it now?",
            link: "page/about-proposition",
            status: "published",
            formattedField: 'way_it_is',
            source: 'League of Women Voters of California Easy Voter’s Guide'
          },
          {
            label: "What happens if this passes?",
            link: "page/what-votes-mean",
            status: "published",
            formattedField: 'official_yes_vote_means_X',
            source: 'Secretary of State',
          },

          {
            label: "How much does it cost?",
            link: "page/cost",
            status: "published",
            formattedField: '',
            source: 'Secretary of State',
          },
          {
            label: "Read proposed legislation",
            link: "page/full-text-link",
            status: "published",
            formattedField: 'fulltext_link',
            source: 'Secretary of State',
          },
          ],
          arguments: [
          {
            label: "Arguments for Yes",
            link: "page/short-arguments-yes",
            status: "published",
            formattedField: 'official_short_arguments_yes',
            source: 'Secretary of State',
          },

          {
            label: "Arguments for No",
            link: "page/short-arguments-no",
            status: "published",
            formattedField: 'official_short_arguments_no',
            source: 'Secretary of State',
          },

          ],
          support: [
          {
            label: "Campaign financing",
            link: "page/campaign-financing",
            status: "published",
            formattedField: '',
            source: 'MapLight',
          },
          {
            label: "Endorsements",
            link: "page/endorsements",
            status: "published",
            formattedField: 'measure_endorsements',
            fieldMapDisplay: ['', ''],
            fieldMap: ['position', 'endorser', 'url'],
            source: 'MapLight',
          },


          ],

          info: [
          {
            label: "Analysis",
            link: "page/campaign-contact",
            status: "published",
            formattedField: 'measureInfo',
            fieldMapDisplay: ['', ''],
            fieldMap: ['data_type', 'title'],
            source: 'Secretary of State',
          },

          {
            label: "Events",
            link: "page/support-events",
            status: "published",
            formattedField: 'measure_events',
            fieldMapDisplay: ['Host', 'Description', 'Link', 'Added on'],
            fieldMap: ['host', 'description', 'link',  'event_timestamp'],
            source: 'MapLight',
          },

          {
            label: "News",
            link: "page/analysis-news",
            status: "published",
            formattedField: 'measure_news',
            fieldMapDisplay: ['Description', 'Link', 'Added on'],
            fieldMap: ['description', 'link',  'news_timestamp'],
            source: 'MapLight',

          },
          {
            label: "Opinions",
            link: "page/responses",
            status: "published",
            formattedField: 'measureAnswers',
            fieldMapDisplay: ['Answer'],
            fieldMap: ['answer'],
            source: 'Secretary of State',
          },
          {
            label: "Videos",
            link: "page/videos",
            status: "published",
            formattedField: 'measureVideos',
            fieldMapDisplay: ['Source', 'Description', 'Link', 'Added on'],
            fieldMap: ['source', 'description', 'link',  'video_timestamp'],
            source: 'Secretary of State',
          },

          {
            label: "Additional Resources",
            link: "page/videos",
            status: "published",
            formattedField: 'measureVideos',
            fieldMapDisplay: ['Source', 'Description', 'Link', 'Added on'],
            fieldMap: ['source', 'description', 'link',  'video_timestamp'],
            source: 'Secretary of State',
          },
          ]
        },
      },
      measures: {

      },
      multipleElections: {

      },
      offices: {

      },

      overviewBallot: {
        en: {
          ballot_address: 'What\'s on the ballot for your address in',
          ballot_area: 'What\'s on the ballot for ',
          for_zipcode: 'zipcode ',
          try_new_search: 'Try a new search.',
          unable_to_find: 'We were unable to find your specific address.',
          enter_new: "We were unable to find your specific address.",
          ballot_extra_result_explanation: {
            ca: 'Results based on only a zip code may return more contests than will appear on your actual ballot. <a href="/en/ca">For the most specific results available, enter your full address.</a>',
            il: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/il">For the most specific results available, enter your full address.</a>',
            ny: 'Results based on only a zip code may not return all of the contests that will appear on your actual ballot. <a href="/en/ny">For the most specific results available, enter your full address.</a>',
            default: ''
          },
          contest_extra_result_explanation: {
            ca: 'May not appear on your actual ballot. <a href="/page/ca/how-we-get-our-data">Learn More</a>',
            il: 'May not appear on your actual ballot. <a href="/page/il/how-we-get-our-data">Learn More</a>',
            ny: 'May not appear on your actual ballot. <a href="/page/ny/how-we-get-our-data">Learn More</a>',
            default: ''
          },
          ballot_no_address: 'Here’s what’s on the ballot.',
          choose_candidates: 'Candidates',
          candidates_intro_prefix: 'Get in-depth information about the ',
          candidates_intro: 'candidates running for',
          candidates_offices: 'offices',
          candidates_office: 'office',
          choose_propositions: 'Ballot Measures',
          propositions_intro: 'Learn more about the ',
          propositions: 'measures',
          proposition: 'measure',
          choose_voting_info: 'Voting Info',
          choose_voting_info_label: 'Get info on <strong>when, where and how to vote</strong>',
          choices: "My List",
          choices_label: "<p><strong>Keep track of your ballot choices and make a list to take to the polls</p></strong><p>As you review races, candidates and measures, you can add them to your list. When you are finished, go to <strong>My List</strong> to send your list to your email, printer, or copy a link to your phone.</p><p>We are a non-partisan, non-profit voter advocacy project and will not mail you anything or track your choices.</p>",

          noPollingLocationLabel: 'Polling location & hours',
          noPollingLocationLookup: '<p><strong>Want to look up your polling place?</strong></p> <p></p>',
          noPollingLocationLinkLabel: 'Look up my polling place',
          pollingLocationLabel: 'Your polling location & hours',
          hoursLabel: 'Open from',
          hours: {
            ca: '7 a.m. - 8 p.m.',
            il: '6 a.m. - 7 p.m.',
            ny: '6 a.m. - 7 p.m.',
          },
          noHoursLabel: 'Polls are open from',
          more_voting_info: 'See more voting info',
          other_address: 'Look up ballot for',
          other_address_link: 'another address',
          other_elections: 'See your ballot for',
          past_elections_or: 'Or',
          past_elections_link: 'lookup past elections',
          past_elections_url: '/ca/en/page/elections-archive',
          privacy_statement: 'Your information is private unless you choose to share it.',
          privacy_statement_link: 'Privacy Policy',
          privacy_statement_url: '/page/privacy-policy',
        },
        es: {
          ballot_address: 'What\'s on the ballot for your address in',
          ballot_area: 'What\'s on the ballot for ',
          for_zipcode: 'zipcode ',
          try_new_search: 'Try a new search.',
          unable_to_find: 'We were unable to find your specific address.',
          enter_new: "We were unable to find your specific address.",
          ballot_extra_result_explanation: {
            ca: 'Results based on only a zip code may return <em>more contests than will appear on your actual ballot.</em> For the most specific results available, <a href="/en/ca">enter your full address.</a>',
            il: 'Results based on only a zip code <em>may not return all of the contests that will appear on your actual ballot.</em> For the most specific results available, <a href="/en/il">enter your full address.</a>',
            ny: 'Results based on only a zip code <em>may not return all of the contests that will appear on your actual ballot.</em> For the most specific results available, <a href="/en/ny">enter your full address.</a>',
            default: ''
          },
          contest_extra_result_explanation: {
            ca: 'This may not appear on your actual ballot. <a href="/page/how-we-get-our-data">Learn More</a>',
            il: '',
            ny: '',
            default: ''
          },
          ballot_no_address: 'Here’s what’s on the ballot.',
          choose_candidates: 'Candidates',
          candidates_intro_prefix: 'Get in-depth information about the ',
          candidates_intro: 'candidates running for',
          candidates_offices: 'offices',
          candidates_office: 'office',
          choose_propositions: 'Ballot Measures',
          propositions_intro: 'Learn more about the ',
          propositions: 'measures',
          proposition: 'measure',
          choose_voting_info: 'Voting Info',
          choose_voting_info_label: 'Get info on <strong>when, where and how to vote</strong>',
          choices: "My List",
          choices_label: "<p>Coming soon:<strong>Keep track of your ballot choices and make a list to take to the polls</p></strong><p>As you review races, candidates and measures, you can add them to your list. When you are finished, go to <strong>My List</strong> to send your list to your email, printer, or copy a link to your phone.</p><p>We are a non-partisan, non-profit voter advocacy project and will not mail you anything or track your choices.</p>",
          noPollingLocationLabel: 'Polling location & hours',
          noPollingLocationLookup: '<p><strong>Want to look up your polling place?</strong></p> <p></p>',
          noPollingLocationLinkLabel: 'Look up my polling place',
          pollingLocationLabel: 'Your polling location & hours',
          hoursLabel: 'Open from',
          noHoursLabel: 'Polls are open from',
          hours: {
            ca: '7 a.m. - 8 p.m.',
            il: '6 a.m. - 7 p.m.',
            ny: '6 a.m. - 7 p.m.',
          },
          more_voting_info: 'See more voting info',
          other_address: 'Look up ballot for',
          other_address_link: 'another address',
          other_elections: 'See your ballot for',
          past_elections_or: 'Or',
          past_elections_link: 'lookup past elections',
          past_elections_url: '/ca/en/page/elections-archive',
          privacy_statement: 'Your information is private unless you choose to share it.',
          privacy_statement_link: 'Privacy Policy',
          privacy_statement_url: '/page/privacy-policy',
        }
      },
      overviewCandidates: {

      },
      overviewMeasures: {

      },
      VotingInfoSections: {

      },
      ballot: {

      },



      footerNavTranslations: {
        en : {
          aboutLabel: 'About Us',
          contactUsLabel: 'Contact us',
          resourcesLabel: 'Resources',
          policiesLabel: 'Policies',

          about : [
          {
            label: "About this project",
            link: "page/about-voters-edge",
            status: "published",
          },
          {
            label: "How we get our data",
            link: "page/how-we-get-our-data",
            status: "published",
          },
          {
            label: "FAQ",
            link: "page/faq",
            status: "published",
            domain: 'ca'
          },
          ],
          policies: [
          {
            label: "Privacy policy",
            link: "page/privacy-policy",
            status: "published",
          },
          {
            label: "Terms of use",
            link: "page/terms-of-use",
            status: "published",
          },
          {
            label: "Icon attribution",
            link: "page/icons",
            status: "published",
          },
          ],
          contact: [
          {
            label: "Send us a message",
            link: "feedback",
            status: "published",
          },
          // {
          //   label: "Questions",
          //   link: "page/support-questions",
          //   status: "published",
          // },
          {
            label: "Donate",
            link: "https://donatenow.networkforgood.org/votersedge?code=votersedge",
            status: "published",
          },
          ],
          resources: [
          // {
          //   label: "Embeddable Content & Widgets",
          //   link: "page/embeddable-content-widgets",
          //   status: "published",
          // },
          // {
          //   label: "For Media: Create a voting guide",
          //   link: "page/media",
          //   status: "unpublished",
          // },
          // {
          //   label: "For Developers: API resources",
          //   link: "page/api-resources",
          //   status: "published",
          // },
          {
            label: "For Candidates: Sign up and add your information",
            link: "http://candidates.votersedge.org",
            status: "published",
          },
          {
            label: "For Voter's Edge Team: Sign in",
            link: "http://team.votersedge.org",
            status: "published",
          },
          ]
        },
        es : {
          aboutLabel: 'Sobre nosotros',
          contactUsLabel: 'Contact Us',
          resourcesLabel: 'Recursos',
          policiesLabel: 'Polîticas',

          about : [
          {
            label: "Sobre este proyecto",
            link: "page/about-voters-edge",
            status: "published",
          },
          {
            label: "Cómo obtenemos nuestros datos",
            link: "page/how-we-get-our-data",
            status: "published",
          },
          ],
          policies: [
          {
            label: "Política de privacidad",
            link: "page/privacy-policy",
            status: "published",
          },
          {
            label: "Condiciones de uso",
            link: "page/terms-of-use",
            status: "published",
          },

          ],
          contact: [
          {
            label: "Feedback",
            link: "/feedback",
            status: "published",
          },
          {
            label: "Questions",
            link: "page/support-questions",
            status: "published",
          },
          ],
          resources: [
          {
            label: "Embeddable Content & Widgets",
            link: "page/embeddable-content-widgets",
            status: "published",
          },
          {
            label: "For Media: Create a voting guide",
            link: "page/media",
            status: "unpublished",
          },
          {
            label: "For Developers: API resources",
            link: "page/api-resources",
            status: "published",
          },
          {
            label: "For Candidates: Add your information",
            link: "http://candidates.votersedge.org",
            status: "published",
          },
          {
            label: "For Volunteers: Sign in",
            link: "http://team.votersedge.org",
            status: "published",
          },
          ]
        },
      }
    };

    export default InterfaceStringTranslations;
