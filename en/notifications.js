import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const notificationsTranslation = {
  notifications: {
    'getStartedActiveUser': {
      title: 'Want to keep track of your ballot choices?',
      message: ' Use \'My List.\'',
      delay: 1000,
      length: 7000
    },
    'beginContest': {
      title: 'Keep track of candidates by adding them to your list.',
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
      title: 'Select a contest to start adding choices to your list.',
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
      message: 'Now you can move on to \'My List.\'',
    },
    'contestViewsCompleted': {
      title: 'You\'ve viewed all of the races on your ballot.',
      message: 'It looks like you didn\'t make choices for all of them. Go to \'My List\' to see which ones don\'t have choices.',
    },
    'measuresChoicesCompleted':{
      title: 'You\'ve made a choice for every measure on your list. ',
      message: 'Now you can finish making choices for candidate races.'
    },
    'measureViewsCompleted': {
      title: 'You\'ve viewed all of the measures on your ballot.',
      message: 'It looks like you didn\'t make choices for all of them. Go to \'My List\' to see which ones don\'t have choices.',
    },
    'measuresCompletedDone':{
      title: 'You\'ve made a choice for every measure on your list.',
      message: 'Now you can move on to \'My List.\'',
    },
    'choicesHalfwayCompleted':{
      title: 'You\'re halfway through your list.',
      message: 'Keep going, or copy a link to save your list and finish later.',
    },
    'allContestsCompleted':{
      title: 'Congratulations!',
      message: 'Your list is complete. To look at it later, print it or send yourself a link.'
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
      'title': 'Candidate added to your list.',
      'message': ''
    },
    candidateRemoved: {
      'title': 'Candidate removed from your list.',
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
    }
  },
};

export default notificationsTranslation;