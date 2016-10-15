import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the feedback form & related labels.

const feedbackTranslation = {

  title: 'Contáctenos', // Translate
  surveyLinkLabel: 'Tome Nuestra Encuesta',
  feedback_button_label: "Contáctenos", // Translate
  feedbackFormLabel: 'Si va a reportar un problema con el sitio de Voter’s Edge, incluya tantos detalles como sea posible (por ejemplo, enlaces, dirección o código postal que se usaron).',
  value_label_yes: 'Sí', // Translate
  value_label_no: 'No',  // Translate
  required: '*',
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
    message_label: 'Mensaje',
  },
  select_state: 'Elija un estado...',
  select_election_area: 'Elija un área elecciones...',
  response: 'Gracias por sus comentarios.  Nos pondremos en contacto con usted para dar seguimiento en caso de ser necesario.',
  contactFormUrls: {
    root: 'https://docs.google.com/forms/d/e/1FAIpQLSeMBBQ6XpsMR0ABZgdKxXDIU7_bEd75PYSu0cAxxkVgCIGJuA/viewform',
    ca: 'https://docs.google.com/forms/d/e/1FAIpQLSdR1a-PxSyoRfdW1JDT36zMCS3y8Q9yqADU6A7JwdexdqougA/viewform',
    il: 'https://docs.google.com/forms/d/e/1FAIpQLScdyq8Whj8OLpj-WojNji8pRNU9mYJFuBpej4gas7TQkTEiXw/viewform',
    ny: 'https://docs.google.com/forms/d/e/1FAIpQLSdoSvRcQiC8Blj6MBUaMe8e7CX9aAlbfZgYBAWgKhXtOAAa1w/viewform',
  }
};

export default feedbackTranslation;
