import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

const measureTranslation = {
  measure: {
    no_data_available: 'No data currently available',
    bar_graph_label: 'Bar graph showing total amount relative to total amount for this entire campaign.',
    no_information_available: 'No information available',
    information_provided_by: 'Information provided by',
    from: 'From',
    measureContestTitle: 'Ballot Measures',

    pageTitle: 'Measure', // Translate
    proposition_abbreviation: "Prop.",
    positions: {
      yes: {
        label: 'Yes', // Translate
        campaign: "Yes on", // Translate
        for: 'Yes on',
      },
      no: {
        label: 'No', // Translate
        campaign: "No on", // Translate
        for: 'No on',
      },
      neutral: {
        label: 'Neutral', // Translate
        campaign: "Contact Info", // Translate
      },
    },
    screenreader: {
      accordion: 'To learn more about measures, follow the links for each tab in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
  toolbar: [
      {
        label: '',  // Translate
        icon: '',
        type: 'share'
      },
    ],
  measure_not_found: 'Could not find that measure.',
  election_results_analysis: {
      election_status_complete: {
        label: 'Election Results.',
        icon: 'fa-star',
      },
      election_status_in_progress: {
        label: 'Election Results.',
        icon: 'fa-star', // 'fa-refresh',
      },
      election_status_no_results: {
        label: 'No election results available.',
        icon: 'fa-circle',
      },
      contest: {
        complete: {
          icon: 'fa-star',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted.',
          yes_votes: 'votes yes',
          no_votes: 'votes no',
          pass: 'Passed',
          fail: 'Failed',
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
        },
        in_progress: {
          icon: 'fa-star', //'fa-refresh',
          message_result: ' of precincts reporting',
          ballots_counted: ' ballots counted',
          yes_votes: 'votes yes',
          no_votes: 'votes no',
          pass: 'Passing',
          fail: 'Failing',
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
          measure: {
            passed: 'Passed',
            failed: 'Failed',
          },
        },
      },
    },

    sourceLabel: 'Source: ', // Translate
    endorsements_label: {
      organization: 'Organization', // Translate
      individual: 'Individual', // Translate
      elected_official: 'Elected Official', // Translate
      elected_appointed_official: 'Elected or Appointed Official', // Translate
    },
    endorsements_label_plural: {
      organization: 'Organizations', // Translate
      individual: 'Individuals', // Translate
      elected_official: 'Elected Officials', // Translate
      elected_appointed_official: 'Elected & Appointed Officials', // Translate
    },
    contest_message_additional_info: 'Please see Additional Info to learn more.',
    pieChartLabels: {
      explanation: "",
      label_in_state: "In-state contributions", // Translate
      label_other: "Other states", // Translate
      label_out_of_state: "Out-of-state", // Translate
      accessible_label: 'A pie chart containing color-coded sections corresponding to primary, secondary and other states.' // Translate
    },
    navigation: {
      next: 'Next',
      back: 'Back',
      last: 'Last measure',
      overview: 'To overview',
      choices: 'Go to My List',
      contest: 'Next: Go to Candidates'
    },
    get_evg: 'Get the Easy Voter Guide for this measure in these languages',
    get_evg_languages: {
      English: 'English',
      Spanish: 'Spanish',
      Chinese: 'Chinese',
      Vietnamese: 'Vietnamese',
      Korean: 'Korean',
    },
    contestLabels: {
      contest_links: {
        label: 'Additional Resources',
      },
      news: {
        label: 'News'
      },
      video: {
        label: 'Videos'
      },
      events: {
        label: 'Events',
      },
      additional_info: {
        label: 'Additional Info',
      }
    },
    accordionLabels: {
      learn_more: 'Additional Resources', // Translate
      opinions: 'Opinions & Analysis', // Translate
      news: {
        label: 'News'
      },
      video: {
        label: 'Videos'
      },
      events: {
        label: 'Events',  // Translate
        upcoming: 'Upcoming Events', // Translate
        past: 'Past Events', // Translate
        host: 'Host', // Translate
        date: 'Date', // Translate
        location: 'Location', // Translate
        time: 'Time', // Translate
      },
      evg: {   // Translation already provided by LWCV
        label: 'Easy Voter Guide', // If translated, it exists already
        way_it_is_now: 'The way it is now', // Translation exists
        what_if_passes: 'What if it passes?', // Translation exists
        budget_effect: 'Budget effect', // Translation exists
        people_for_say: 'People FOR say', // Translation exists
        people_against_say: 'People AGAINST say', // Translation exists
        question: 'The Question', // Translation exists
        situation: 'The Situation', // Translation exists
        proposal: 'The Proposal', // Translation exists
        fiscal_effect: 'Fiscal effect', // Translation exists
        supporters_say: 'Supporters say', // Translation exists
        opponents_say: 'Opponents say', // Translation exists
        sourceLabel: 'Summary for new and busy voters',
      },
      pros_cons: {  // Translation already provided by LWVC
        label: 'Pros & Cons', // If translated, it exists already
        summary: 'Summary',  // Translation exists
        background: 'Background',  // Translation exists
        financial_effect: 'Financial effect',  // Translation exists
        sourceLabel: 'Unbiased explanation with arguments for and against',
      },
      basics: { // Translation already provided by Secretary of State except where noted
        label: 'Measure Details',
        summary: 'Summary',  // Translation exists
        background: 'Background',  // Translation exists
        financial_effect: 'Financial effect',  // Translation exists
        impartial_analysis: 'Impartial analysis / Proposal',  // Translation exists
        tax_rate: 'Tax rate',// Translation exists
        yes_vote_means: 'YES vote means', // Translation exists
        no_vote_means: 'NO vote means', // Translation exists
        rebuttals_for: 'Replies to Arguments FOR', // Translation exists
        rebuttals_against: 'Replies to Arguments AGAINST', // Translation existsts
        arguments_for: 'Arguments FOR', // Translation exists
        arguments_against: 'Arguments AGAINST', // Translation exists
        proposed_legislation: 'Proposed legislation', // Translate
        read_proposed_legislation: 'Read the proposed legislation', // Translate
        what_is_proposal: 'What is this proposal?', // Translate
        endorsements: 'Who endorses the ballot measure campaigns?', // Translate
        funding: 'Who gave money to the ballot measure campaigns?', // Translate
        more_info: 'More information', // Translate
        message_content: 'Additional Info',
        sourceLabel: 'Official information about this measure',
      },
      intro: {
        details: 'Here is some helpful information about this ballot measure from trusted sources.',
      },
    },
    embedCard: {
      topContributors: {
        label:  'Top Contributors',
        yes: 'FOR',
        no: 'AGAINST',
        total_raised: 'total raised',
        total_raised_short: 'raised',
        multiple_contributors: 'Multiple contributors',
      },
      vote_means: {
        label: 'vote means',
        yes: 'YES',
        no: 'NO',
      }
    },
    fundingTranslation: {
        accordionLabels: {
          contributions: 'Contributions',
          moreInfoAboutContributions: 'More information about contributions',
        },
        sourceLabel: {
          "Federal": 'Source: MapLight analysis of data from the Federal Election Commission.', // Translate
          "State": {
            ca: 'Source: MapLight analysis of data from the California Secretary of State.', // Translate text but not names
            il: 'Source: MapLight analysis of data from the Illinois Secretary of State.', // Translate text but not names
            ny: 'Source: MapLight analysis of data from the New York Secretary of State.', // Translate text but not names
          }
        },
        totalMoneyRaisedLabel: "Total money raised", //Translate
        totalMoneyRaisedTooltip: 'These amounts reflect the money given to, and reported by, committees formed primarily to support or oppose the given ballot measure within this election cycle.',
        whoGaveMostMoneyTitle: "Who gave the most money?",
        whoGaveMostMoneyLabel: {
          "Federal": 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
          "State": {
            ca: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
            il: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
            ny: 'Below are the top 10 contributors that gave money to committees supporting or opposing the ballot measures.',
          }
        },
        whoGaveMostMoneyTooltip: {
          "Federal": 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
          "State": {
            ca: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
            il: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
            ny: 'We have combined contributions from employees of an organization with contributions directly from the organization’s PAC.',
          }
        },
        whoGaveMostMoneyOrganizations: 'Organizations',
        whoGaveMostMoneyIndividuals: 'Individuals',
        pieCharts: {
          byState: {
            label: 'By State:',
            tooltip: {
              "Federal": 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
              "State": {
                ca: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
                ny: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
                il: 'This graph shows the top four states from which funds were contributed to this measure campaign. The "other" category represents the total amount of funding contributed from elsewhere in the United States.',
              }
            },
            accessible_label: 'A pie chart containing color-coded sections corresponding to primary, secondary and other states.' // Translate
          },
          bySize: {
            label: 'By Size:',
            largeContributionsLabel: 'Large contributions',
            smallContributionsLabel: 'Small contributions',
            tooltip: {
              "Federal": 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
              "State": {
                ca: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
                ny: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
                il: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
              },
              accessible_label: 'A pie chart containing color-coded sections corresponding to large and small contributions.' // Translate
            }
          },
          byType: {
            label: 'By Type:',
            organizationsLabel: 'From organizations',
            individualsLabel: 'From individuals',
            tooltip: {
              "Federal": 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
              "State": {
                ca: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
                ny: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
                il: 'Large contributions (over $100) can be made by organizations through their political action committees (PACs) or by individuals.',
              }
            },
            accessible_label: 'A pie chart containing color-coded sections corresponding to contributions from organizations and individuals.' // Translate
          },
        }
    },
    sectionTitle: "Measures", // Translate
    measureDescriptionLabel: "About this measure", // Translate
    my_choices: "Do you support this proposition?", // Translate
    SoS: "Secretary of State", // Translate
    EVG: "The League of Women Voters of California Education Fund",  // Translate?
    LWVC: "Pros/Cons — League of Women Voters of California",  // Translate?
    aboutLabel: 'What is this proposition?', // Translate
    argumentsLabel: 'Arguments for and against this proposition', // Translate
    supportLabel: 'Who supports this and why?', // Translate
    costLabel: 'How much does it cost?', // Translate
    infoLabel: 'How can I learn more?', // Translate
    ballotVotingInfo: "On your actual ballot, you can vote 'yes' or 'no' on this measure.",
    addChoice: 'Add choice to my list.',
    screenReaderInstructions: "Use tabs to select your choice. Use return to create a choice. You can access your list by navigating to 'My List'.",

  }
};

export default measureTranslation;