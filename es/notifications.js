import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the ballot overview page for each ballot for all states
// Includes Candidates, Measures, Voting info, polling place, other elections selections and my list intros.
// URL samples

// Tests: http://votersedge.org/ca/ballot/election/32-70b46e/address/null/zip/90001/section/overview'
const notificationsTranslation = {
  notifications: {
    'getStartedActiveUser': {
      title: '¿Quiere mantener un registro de sus opciones para la boleta electoral?',
      message: 'Use \'Mi lista\'.',
      delay: 1000,
      length: 4000
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
      title: 'Vaya a \'Información para votar\' para conocer cuándo, cómo y dónde votar.',
      message: ''
    },
    'createList': {
      title: 'Seleccione una contienda para empezar a añadir opciones a la lista.',
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
      title: 'Tomó una decisión para todas las contiendas de candidatos en su lista.',
      message: 'Now you can move on to \'My List.\'',
    },
    'contestViewsCompleted': {
      title: 'Ya consultó todas las contiendas en su boleta electoral.',
      message: 'Parece que no tomó decisiones para todas las contiendas. Ir a \'Mi lista\' para ver en cuáles no ha tomado decisiones.',
    },
    'measuresChoicesCompleted':{
      title: 'Tomó una decisión para todas las iniciativas de ley en su lista. ',
      message: 'Ahora puede terminar de tomar decisiones para las contiendas de candidatos.'
    },
    'measureViewsCompleted': {
      title: 'Ya consultó todas las iniciativas de ley en su boleta electoral.',
      message: 'Parece que no tomó decisiones para todas las iniciativas de ley. Ir a \'Mi lista\' para ver en cuáles no ha tomado decisiones.',
    },
    'measuresCompletedDone':{
      title: 'Tomó una decisión para todas las iniciativas de ley en su lista.',
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
      'message': 'Nota: Más candidatos añadidos para este cargo por los que podrá votar.'
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
    choiceRemoved: {
      'title': 'La opción se eliminó a su lista.',
      'message': '',
    },
    updatingChoices: {
      title: 'Actualice su lista.',
      message: 'Última actualización',
    },
    ballotAlreadyExists: {
      title: 'Cargue su lista.',
      message: 'Última actualización',
    },
    replaceListWithURLChoices: {
      title: 'Cargando una lista nueva.',
      message: 'Actualización más reciente de la lista actual:',
      replaceBallotPrompt: 'Ya tiene una lista de selecciones. ¿Desea reemplazarla con esta lista nueva?<div class="local-remote-ballot"><a class="replace-ballot" tabindex="0">Yes</a><a class="skip-replace-ballot" tabIndex="0">No</a></div>',
    },
    deleteAllBallotChoices: {
      title: '¿Borrar todas sus opciones?',
      message: '',
      yes: 'Sí',
      no: 'No',
    },
    ballotChoicesRemoved: {
      title: 'Se han eliminado sus opciones para la boleta electoral.',
      message: ''
    },
    welcomeContentPage: {
      title: '¡Bienvenido!',
      message: '¡Visite la página principal para acceder a su boleta electoral personalizada o vaya a la perspectiva general para ver más candidatos e iniciativas de ley para esta boleta!',
      length: 4000,
      delay: 10,
      // position: 'center',
    },

  }
};

export default notificationsTranslation;
