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
      title: 'Dé seguimiento a los candidatos al agregarlos a su lista.',
      message: '',
    },
    'beginMeasure': {
      title: 'Seleccione \'sí\' o \'no\' para mantener un registro de sus opciones para las iniciativas de ley.',
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
      title: '¡Se añadió la primera opción a su lista! Seleccione \'Siguiente\' para continuar.',
      message: '',
    },
    'returningAfterWeeks': {
      title: '¡Bienvenido de nuevo!',
      message: 'Siga editando su lista actual o bórrela para empezar una nueva.',
    },
    'contestsCompleted': {
      title: 'Tomó una decisión para todas las contiendas de candidatos en su lista. ',
      message: 'Ahora puede avanzar y tomar decisiones para las iniciativas de ley en la boleta electoral.'
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
      title: 'Tomó una decisión para todas las iniciativas de ley en su lista. ',
      message: 'Ahora puede terminar de tomar decisiones para las contiendas de candidatos.'
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
      title: 'Está a la mitad de su lista.',
      message: 'Continúe o copie un enlace para guardar su lista y terminar después.',
    },
    'allContestsCompleted':{
      title: '¡Felicidades!',
      message: 'Su lista está completa. Para consultarla después, imprímala o envíese un enlace.'
    },
    'shareFacebookOverlay':{
      title: 'Anime a sus amigos a votar al añadir una etiqueta a su foto de perfil de Facebook.',
      message: '',
    },
    'electionIsIn3days':{
      title: '¡Faltan tres días para el día de las elecciones!',
      message: '',
    },
    'electionIsTomorrow':{
      title: '¡Mañana son las elecciones!',
      message: '',
    },
    'electionIsToday':{
      title: '¡Feliz día de las elecciones! Asegúrese y vote hoy antes de que cierren las urnas.',
      message: '',
    },
    moreCandidatesAdded: {
      'title': 'El candidato se añadió a su lista.',
      'message': 'Note: More candidates added than you will be able to vote for.'
    },
    candidateAdded: {
      'title': 'El candidato se añadió a su lista.',
      'message': ''
    },
    candidateRemoved: {
      'title': 'El candidato se eliminó de su lista.',
      'message': ''
    },
    choiceAdded: {
      'title': 'La opción se añadió a su lista.',
      'message': '',
    },
    updatingChoices: {
      title: 'Updating your choices.',
      message: 'Last updated',
    },
    ballotAlreadyExists: {
      title: 'Loading your ballot',
      message: 'Last updated',
    },
  }
};

export default notificationsTranslation;
