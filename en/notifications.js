import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const notificationsTranslation = {
  notifications: {
    'getStartedActiveUser': {
      title: 'Want to keep track of your ballot choices?',
      message: ' Use <a href="[!CHOICEPAGEURL]">\'My List\'</a>.',
      delay: 1000,
      length: 7000
    },
    'beginContest': {
      title: 'Keep track of candidates by adding them to <a href="[!CHOICEPAGEURL]">your list.</a>',
       message: '',
    },
    'beginMeasure': {
      title: 'Select \'yes\' or \'no\' to keep track of your measure choices.',
      message: '',
    },
    'getStartedVotingInfo':{
      title: 'Go to \'Voting Info\' to find out when, where, and how to vote.',
      message: ''
    },
    'createList': {
      title: 'Select a contest to start adding choices to <a href="[!CHOICEPAGEURL]">your list.</a>',
      message: '',
    },
    'firstChoiceMade': {
      title: 'First choice added to your list! Select \'Next\' to continue.',
      message: '',
    },
    'returningAfterWeeks': {
      title: 'Welcome back!',
      message: 'Continue editing your current list or clear it to start a new list.',
    },
    'contestsCompleted': {
      title: 'You\'ve made a choice for every candidate race on your list.',
      message: 'Now you can move on to make choices on ballot measures.'
    },
    'contestsCompletedDone': {
      title: 'You\'ve made a choice for every candidate race on your list.',
      message: 'Now you can move on to <a href="[!CHOICEPAGEURL]">\'My List.\'</a>',
    },
    'contestViewsCompleted': {
      title: 'You\'ve viewed all of the races on your ballot.',
      message: 'It looks like you didn\'t make choices for all of them. Go to <a href="[!CHOICEPAGEURL]">\'My List\'</a> to see which ones don\'t have choices.',
    },
    'measuresChoicesCompleted':{
      title: 'You\'ve made a choice for every measure on your list. ',
      message: 'Now you can finish making choices for candidate races.'
    },
    'measureViewsCompleted': {
      title: 'You\'ve viewed all of the measures on your ballot.',
      message: 'It looks like you didn\'t make choices for all of them. Go to <a href="[!CHOICEPAGEURL]">\'My List\'</a> to see which ones don\'t have choices.',
    },
    'measuresCompletedDone':{
      title: 'You\'ve made a choice for every measure on your list.',
      message: 'Now you can move on to <a href="[!CHOICEPAGEURL]">\'My List.\'</a>',
    },
    'choicesHalfwayCompleted':{
      title: 'You\'re halfway through your list.',
      message: 'Keep going, or <a href="[!CHOICEPAGEURL]" target="_blank">copy a link</a> to save your list and finish later.',
    },
    'allContestsCompleted':{
      title: 'Congratulations!',
      message: 'Your <a href="[!CHOICEPAGEURL]">list</a> is complete. To look at it later, print it or send yourself a link.'
    },
    'shareFacebookOverlay':{
      title: 'Encourage your friends to vote by adding a sticker to your Facebook profile picture.',
      message: '',
    },
    'electionIsIn3days':{
      title: 'Election Day is in three days!',
      message: '',
    },
    'electionIsTomorrow':{
      title: 'The election is tomorrow!',
      message: '',
    },
    'electionIsToday':{
      title: 'Happy Election Day! Make sure and vote before the polls close today.',
      message: '',
    },
    moreCandidatesAdded: {
      'title': 'Candidate added to your list.',
      'message': 'Note: More candidates added than you will be able to vote for.'
    },
    candidateAdded: {
      'title': 'Candidate added to <a href="[!CHOICEPAGEURL]">your list</a>.',
      'message': ''
    },
    candidateRemoved: {
      'title': 'Candidate removed from <a href="[!CHOICEPAGEURL]">your list.</a>',
      'message': ''
    },
    choiceAdded: {
      'title': 'Choice added to your list.',
      'message': '',
    },
    choiceRemoved: {
      'title': 'Choice removed to your list.',
      'message': '',
    },
    updatingChoices: {
      title: 'Updating your list.',
      message: 'Last updated',
    },
    ballotAlreadyExists: {
      title: 'Loading your list.',
      message: 'Last updated',
    },
    replaceListWithURLChoices: {
      title: 'Loading a new list.',
      message: 'Current list last updated',
      replaceBallotPrompt: 'You already have a list with choices, would you like to replace it with this new list?<div class="local-remote-ballot"><a class="replace-ballot" tabindex="0">Yes</a><a class="skip-replace-ballot" tabIndex="0">No</a></div>',
    },
    deleteAllBallotChoices: {
      title: 'Delete all your ballot choices?',
      message: '',
      yes: 'Yes',
      no: 'No',
    },
    ballotChoicesRemoved: {
      title: 'Your ballot choices have been removed.',
      message: ''
    },
    welcomeContentPage: {
      title: 'Welcome!',
      message: 'Visit the homepage to access your personalized ballot or go to the overview to see more candidates and measures for this ballot!',
      length: 6000,
      delay: 10,
      // position: 'center',
    },
  },
};

export default notificationsTranslation;