import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content on a contest page.

const contestTranslation = {
    pageTitle: 'Contest', // Translate
    sectionTitle: "Candidates", // Translate
    officeDescriptionLabel: "About this office", // Translate
    my_choices: "How does voting work for this contest?", // Translate
    skip_label_offices: "Skip this", // Translate
    candidates_label: {
      active: "Who's running?", // Translate
      in_progress: "Who's winning?", // Translate
      complete: "Who won?", // Translate
    },
    candidates_random_label: "Candidates appear in random order.",
    candidates_random_label_results: {
      active: "Candidates appear in random order.", // Translate
      in_progress: 'Candidates are sorted in order of election results.',
      complete: 'Candidates are sorted in order of election results.',
    },
    party_label: 'Party', // Translate
    candidate_for: 'Candidate for',
    screenreader: {
      accordion: 'Access additional information about this contest in the tabs in this section. For most screenreaders, you can hit Return or Enter to enter a tab and read the content within.'
    },
    navigation: {
      next: 'Next',
      back: 'Back',
      last: 'Last contest',
      overview: 'To overview',
      choices: 'Go to My List',
      measure: 'Next: Go to Measures'
    },
    accordionLabels: {
      candidates: 'Who’s Running?', // Translate
      news: 'News Coverage', // Translate
      events: 'Events', // Translate
      links: 'Links', // Translate
      videos: 'Videos', // Translate
      more_info: 'Additional Info', // Translate
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
    sourceLabel: 'Source: ', // Translate
    electionType: {
      'single-winner': {
        label: '',
        supplemental_description: '',
      },
      'ranked-choice': {
        label: 'Ranked choice', // Translate
        supplemental_description: '',
      },
      'top-two': {
        label: 'This is a "top-two" contest.', // Translate
        supplemental_description: '',
      },
      'judicial-retention': {
        label: 'Judicial retention', // Translate
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
    scrollPrompt: 'Please scroll down to see all candidates.',
    voteForPrompt: {
      'singular': {
        'prefix': 'You can vote for',
        'separator': 'candidate of',
        'suffix': 'total candidates.'
      },
      'plural': {
        'prefix': 'You can vote for',
        'separator': 'candidates of',
        'suffix': 'total candidates.'
      }
    },
    // voteForPrompt: {
    //   single: `You can vote for ${office.contestType.vote_for_count} candidate.`, // Translate just the text
    //   multiple: `You can vote for ${office.contestType.vote_for_count} candidates.` // Translate just the text
    // }

};

export default contestTranslation;