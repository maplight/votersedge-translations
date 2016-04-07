import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the sharing tool, including its tooltips.
// This appears on all pages near the footer area and also on candidate, contest and measure pages.

const shareSiteTranslation = {
  tooltips: {
    facebook: 'Compartir el enlace de este sitio en Facebook', // Translate
    twitter: 'Compartir el enlace de este sitio en Twitter', // Translate
    email: 'Enviar por correo electrónico', // Translate
    copy_link: 'Copiar un enlace', // Translate
  },
  icon_labels: {
    facebook: 'Facebook',
    twitter: 'Twitter',
    email: 'Correo electrónico', // Translate
    copy_link: 'Obtener un enlace (para compartir a través del celular o de mensajes de chat).',  // Translate
  },
  share_to_label: 'Por favor comparta esta página web para ayudar a otros a aprender sobre sus opciones electorales.', // Translate
  email_label: 'Correo electrónico', // Translate
  email_message: 'Le podría gustar', // Translate
  copy_link_label: 'Copiar un enlace', // Translate
  copy_link_instructions: 'Obtener un enlace para esta página', // Translate
  copy_link_clean_instructions: 'Obtener el vínculo sin su dirección', // Translate
  embed_link_label: 'Incorporado', // Translate
};

export default shareSiteTranslation;
