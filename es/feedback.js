import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the feedback form & related labels.

const feedbackTranslation = {

  title: 'Contáctenos', // Translate
  surveyLinkLabel: 'Tome nuestra encuesta',
  feedback_button_label: "Contáctenos", // Translate
  feedbackFormLabel: 'If you’re reporting an issue with the Voter’s Edge site, please include as much detail as possible. (Ex. links, address or zip code used)',
  value_label_yes: 'Sí', // Translate
  value_label_no: 'No',  // Translate
  questions: {
    representing_candidate: '¿Representa a algún candidato o campaña?', // Translate
    representing_media_outlet: '¿Representa a algún medio de comunicación?', // Translate
    spanish_language_access: '¿Está visualizando la versión en español del sitio?', // Translate
    volunteer_interest: '¿Le interesa participar como voluntario?', // Translate
  },
  form_labels: {
    submit: 'Enviar',
    name: 'Nombre',
    email: 'Email',
    state: 'Estado',
    reason: 'Motivo', // Translate
    reason_select: 'Select a reason...',
    feedback: 'Comentario', // Translate
    election_area_optional: 'El área electoral es opcional', // Translate
    election_authority: 'Autoridad electoral', // Translate
    select_reason: 'Elija un motivo...', // Translate
    general_feedback: 'Comentario general', // Translate
    technical_problems: 'Problemas técnicos', // Translate
    address_entry: 'Problemas al ingresar mi domicilio', // Translate
    data_accuracy: 'Precisión de los datos', // Translate
    api_access: 'Solicitud de acceso a interfaz de programación de aplicaciones (Application Programming Interface, API)/widgets', // Translate
    partnership: 'Interesado en una alianza', // Translate
    other: 'Otro', // Translate
  },
  response: 'Gracias por sus comentarios.  Nos pondremos en contacto con usted para dar seguimiento en caso de ser necesario.'

};

export default feedbackTranslation;
