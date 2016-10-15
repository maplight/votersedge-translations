import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the sharing tool, including its tooltips.
// This appears on all pages near the footer area and also on candidate, contest and measure pages.

const shareSiteTranslation = {
  twitterMessages: {
    root: '¡Use @VotersEdge para prepararse para votar! [!SPECIALHASHTAG]',
    ca: '¡Use @VotersEdge para prepararse para votar! #California [!SPECIALHASHTAG]',
    ny: '¡Use @VotersEdge para prepararse para votar! #NewYork [!SPECIALHASHTAG]',
    il: '¡Use @VotersEdge para prepararse para votar! #Illinois [!SPECIALHASHTAG]',
    // contest, candidate and measure will probably get templates, but communication breakdown in the google sheet. They go here if they get set.
    votingInfo: '¿Necesita información sobre cuándo, dónde y cómo votar? @VotersEdge lo tiene cubierto. [!STATEHASHTAG] [!SPECIALHASHTAG]',
    choices: 'Busqué información de mi boleta electoral y marqué mis elecciones con la herramienta ‘Mi lista’ en @VotersEdge. ¡Compruébelo! [!STATEHASHTAG] [!SPECIALHASHTAG]',
  },
  twitterMessagesMediaPartner: {
    ca: '¡Use [!MEDIAPARTNER] y @VotersEdge para prepararse para votar! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    ny: '¡Use [!MEDIAPARTNER] y @VotersEdge para prepararse para votar! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    il: '¡Use [!MEDIAPARTNER] y @VotersEdge para prepararse para votar! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    votingInfo: '¿Necesita información sobre cuándo, dónde y cómo votar? [!MEDIAPARTNER] & @VotersEdge lo tiene cubierto. [!STATEHASHTAG] [!SPECIALHASHTAG]',
    choices: 'Busqué información de mi boleta electoral y marqué mis elecciones con la herramienta ‘Mi lista’ en @VotersEdge y [!MEDIAPARTNER]. ¡Compruébelo! [!STATEHASHTAG] [!SPECIALHASHTAG]',
  },
  twitterCardTitle: {
    root: '[!SITENAME] | Conozca la información antes de votar.',
    ca: '[!BRANDEDSITENAME] | Conozca la información antes de votar.',
    ny: '[!BRANDEDSITENAME] | Conozca la información antes de votar.',
    il: '[!BRANDEDSITENAME] | Conozca la información antes de votar.',
    overview: 'Qué se encuentra en la boleta electoral de [!COUNTYNAME] | [!BRANDEDSITENAME]',
    contestPage: 'Candidatos \"para\": [!CONTESTNAME]',
    candidatePage: '[!CANDIDATENAME] | [!BRANDEDSITENAME]',
    measurePage: '[!MEASUREIDENTIFIER] [!MEASURENAME] | [!BRANDEDSITENAME]',
    votingInfo: 'Cuándo, dónde y cómo \"votar\": [!COUNTYNAME] | [!BRANDEDSITENAME]',
    choices: 'Mi Lista para las elecciones de [!ELECTIONDATE] | [!BRANDEDSITENAME]',
  },
  twitterCardDescription: {
    root: 'Guía electoral no partidista. Encuentre su boleta electoral con la información clave de los candidatos y las iniciativas de ley.',
    ca: 'Guía electoral no partidista. Encuentre su boleta electoral con la información clave de los candidatos y las iniciativas de ley.',
    ny: 'Guía electoral no partidista. Encuentre su boleta electoral con la información clave de los candidatos y las iniciativas de ley.',
    il: 'Guía electoral no partidista. Encuentre su boleta electoral con la información clave de los candidatos y las iniciativas de ley.',
    overview: 'Obtenga información no partidista sobre los candidatos y las iniciativas de ley, incluida información local sobre cuándo, dónde y cómo votar.',
    contestPage: '[!BRANDEDSITENAME] | Información no partidista sobre las elecciones de [!ELECTIONDATE].',
    candidatePage: 'Candidato para [!CONTESTNAME] - [!ELECTIONDATE]',
    measurePage: 'Guía para las iniciativas de ley en [!JURISDICTIONNAME] en la boleta electoral de [!ELECTIONDATE].',
    votingInfo: 'Guía electoral no partidista para las elecciones de [!ELECTIONDATE]. Registro, lugares de votación, fechas importantes y plazos, ¡y más!',
    choices: '¡Encuentre su boleta electoral, revise los candidatos y las iniciativas de ley, y marque sus opciones antes del día de las elecciones!'
  },
  twitterHashtagsSpecial: {
    current: '#Election2016',
  },
  twitterHashtags: {
    ca: '#California',
    ny: '#NewYork',
    il: '#Illinois',
    root: '',
    default: '',
  },
  email: {
    footer: '[!BR][!BR]Conozca la información antes de votar | [!BRANDEDSITENAME][!BR]@Votersedge [!MEDIAPARTNERTWITTER] | [!SHAREURL]',
    mediaPartnerFooter: '[!BR][!BR]Conozca la información antes de votar | [!MEDIAPARTNER] - [!BRANDEDSITENAME][!BR]@Votersedge [!MEDIAPARTNERTWITTER] | [!SHAREURL]',
    root: {
      subject: 'Conozca [!BRANDEDSITENAME]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. Solo ingrese su domicilio y obtenga acceso a una boleta electoral personalizada con información a fondo sobre los candidatos, las medidas y quién los apoya.',
    },
    ca: {
      subject: 'Conozca [!BRANDEDSITENAME]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. Solo ingrese su domicilio y obtenga acceso a una boleta electoral personalizada con información a fondo sobre los candidatos, las medidas y quién los apoya.',
    },
    ny: {
      subject: 'Conozca [!BRANDEDSITENAME]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. Solo ingrese su domicilio y obtenga acceso a una boleta electoral personalizada con información a fondo sobre los candidatos, las medidas y quién los apoya.',
    },
    il: {
      subject: 'Conozca [!BRANDEDSITENAME]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. Solo ingrese su domicilio y obtenga acceso a una boleta electoral personalizada con información a fondo sobre los candidatos, las medidas y quién los apoya.',
    },
    ballot: {
      subject: 'Conozca [!BRANDEDSITENAME]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. Solo ingrese su domicilio y obtenga acceso a una boleta electoral personalizada con información a fondo sobre los candidatos, las medidas y quién los apoya.[!BR][!BR]Yo la usé para buscar mi boleta electoral en [!\"COUNTYNAME\"]: [!SHARECONTENTURL]',
    },
    contestPage: {
      subject: 'Conozca más sobre los candidatos que se postulan para [!CONTESTNAME]',
      emailBody: 'Yo usé [!SITENAME] para conocer más sobre los candidatos que se postulaban para [!CONTESTNAME] en las elecciones de [!ELECTIONDATE]. [!BR][!BR]Conozca \"más\": [!SHARECONTENTURL][!BR][!BR][!SITENAME] es una guía no partidista y sin fines de lucro en la que puede conocer más sobre los candidatos y las medidas que se encontrarán en su boleta electoral.',
    },
    candidatePage: {
      subject: 'Conozca más sobre [!CANDIDATENAME], candidato para [!CONTESTNAME]',
      emailBody: '[!CANDIDATENAME] es candidato para [!CONTESTNAME] en las elecciones de [!ELECTIONDATE].[!BR][!BR]Conozca más sobre [!CANDIDATENAME] y los demás \"candidatos\": [!SHARECONTENTURL][!BR][!BR][!SITENAME] es una guía no partidista y sin fines de lucro en la que puede conocer más sobre los candidatos y las iniciativas de ley que se encontrarán en su boleta electoral.',
    },
    measurePage: {
      subject: 'Conozca sobre las iniciativas de ley en la boleta electoral de [!COUNTYNAME]',
      emailBody: 'La [!MEASUREIDENTIFIER] se encuentra en la boleta electoral de [!COUNTYNAME][!BR][!BR] Conozca \"más\": [!SHARECONTENTURL][!BR][!BR][!SITENAME] es una guía no partidista y sin fines de lucro en la que puede conocer más sobre los candidatos y las iniciativas de ley que se encontrarán en su boleta electoral.',
    },
    votingInfo: {
      subject: 'Información sobre cuándo, dónde y cómo votar desde [!BRANDEDSITENAME]]',
      emailBody: '[!SITENAME] es una guía integral para las elecciones, no partidista y disponible en línea para las elecciones federales, estatales y locales. El sitio contiene información sobre registro, lugares de votación, fechas importantes y plazos ¡y más![!BR]Vea cuándo, dónde y cómo votar en [!\"COUNTYNAME\"]: [!SHARECONTENTURL]',
    },
    choices: {
      subject: 'Mi Lista para las elecciones de [!ELECTIONDATE]',
      emailBody: 'Yo usé [!SITENAME] para conocer sobre los candidatos y las iniciativas de ley en la boleta electoral de [!ELECTIONDATE] y marqué mis opciones con su herramienta ‘Mi Lista’.  ¡Ahora puedo llevar mis decisiones conmigo a las urnas el día de las elecciones y compartirlas con usted![!BR][!BR]Mi \"Lista\": [!SHARELISTCHOICESPLACEHOLDER][!BR][!BR][!SITENAME] es una guía no partidista y sin fines de lucro en la que puede conocer más sobre los candidatos y las iniciativas de ley que se encontrarán en su boleta electoral.',
    },
  },
  share_to_label: 'Comparta este sitio para ayudar a otros a investigar sus opciones para las votaciones.', // Translate
  email_label: 'Enviar por correo electrónico', // Translate
  share_to_email: 'Send choices & link to email',
  // email_message: 'Le podría gustar', // Translate
  copy_link_label: 'Copiar un enlace', // Translate
  copy_link_instructions: 'Obtener un enlace para esta página', // Translate
  copy_link_clean_instructions: 'Obtener un enlace', // Translate
  share_facebook: 'Compartir el enlace de esta página en Facebook',
  share_twitter: 'Compartir el enlace de esta página en Twitter',
  embeddable_content_label: "Contenido incorporable",
  embed_link_label: 'Incorporado', // Translate
  email_link_content: {
    button_label: 'Envíe un enlace por correo electrónico.',
    label: 'Envíe un enlace para esta página por correo electrónico.',
    with_address: 'Envíe un enlace <strong>con</strong> su dirección por correo electrónico.',
    without_address: 'Envíe un enlace <strong>sin</strong> su dirección por correo electrónico.',
    include_address_button_label: 'Incluir mi dirección',
    privacy_notice: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir sus opciones y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
  },
  copy_link_content: {
    button_label: 'Copiar un enlace',
    label: 'Copiar un enlace para esta página',
    with_address: 'Copie un enlace <strong>con</strong> su dirección por correo electrónico.',
    without_address: 'Copie un enlace <strong>sin</strong> su dirección por correo electrónico.',
    privacy_notice: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir sus opciones y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
    include_address_button_label: 'Incluir mi dirección',
    copy_label: 'Copiar'
  },
  with_address: '<strong>Con</strong> su dirección.',
  without_address: '<strong>Sin</strong> su dirección.',
  privacy_notice: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir sus opciones y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
  privacy_notice_content: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir esta página y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
  include_address_button_label: 'Incluir mi dirección',
  tooltips: {
    facebook: 'Compartir el enlace de este sitio en Facebook', // Translate
    twitter: 'Compartir el enlace de este sitio en Twitter', // Translate
    email: 'Enviar por correo electrónico', // Translate
    copy_link: 'Copiar un enlace', // Translate
  },
  screenreader: {
    get_link_to_share: 'Obtener un enlace para compartir',
  },
  icon_labels: {
    facebook: 'Facebook',
    twitter: 'Twitter',
    email: 'Correo electrónico', // Translate
    copy_link: 'Obtener un enlace (para compartir a través del celular o de mensajes de chat).',  // Translate
  },
};

export default shareSiteTranslation;
