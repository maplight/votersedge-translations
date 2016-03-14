import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the content on a contest page.

const contestTranslation = {
    pageTitle: 'Contest', // Translate
    sectionTitle: "Candidates", // Translate
    officeDescriptionLabel: "About this office", // Translate
    my_choices: "How does voting work for this contest?", // Translate
    skip_label_offices: "Skip this", // Translate
    candidates_label: "Who's running?", // Translate
    candidates_random_label: "Candidates appear in random order.", // Translate
    navigation: {
      next: 'Next:',
      back: 'Back:',
      last: 'Last contest',
      overview: 'To overview',
    },
    accordionLabels: {
      candidates: 'Who’s Running?', // Translate
      news: 'News coverage', // Translate
      events: 'Events', // Translate
      links: 'Links', // Translate
      videos: 'Videos', // Translate
      more_info, 'Additional Info', // Translate
    },
    events: {
      label: 'Events',  // Translate
      upcoming: 'Upcoming Events', // Translate
      past: 'Past Events' // Translate
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
    voteForPrompt: {
      single: `You can vote for ${office.contestType.vote_for_count} candidate.`, // Translate just the text
      multiple: `You can vote for ${office.contestType.vote_for_count} candidates.` // Translate just the text
    }
};

export default contestTranslation;