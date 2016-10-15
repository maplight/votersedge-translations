import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const myListTranslation = {
    bookmark_label: 'Agregar a mi lista', // Translate
    clear_list: '<i class="fa fa-remove"></i><strong>Borrar</strong> la lista.',
    candidate_choice_label: "",
    list_label: "Candidatos, contiendas e iniciativas de ley en mi lista", // Translate
    noCandidatesSaved: "No se han seleccionado candidatos",
    candidateChoicesExceeded: "Más candidatos añadidos para este cargo por los que podrá votar.",
    toolbar_title: 'Obtener mi lista', // Translate
    toolbar_label: 'Elija sus opciones en la boleta electoral a las urnas.', // Translate
    updating_choices: 'Actualice sus opciones. ',
    last_updated: 'Última actualización',
    notifications: {
      candidate_saved: {
        title: 'Candidato añadido a su lista.',
        message: ''
      },
      candidate_exceeded: {
        title: 'Candidato añadido a su lista.',
        message: 'Nota: Más candidatos añadidos para este cargo por los que podrá votar.'
      },
      measured_saved: {
        title: 'Opción añadida a su lista.',
        message: ''
      },
      ballot_choices_removed: {
        title: 'Se han eliminado sus opciones para la boleta electoral.',
        message: ''
      }
    },
    mail_my_list: {
      subject: 'Mi lista de Voter’s Edge',
    },
    delete_ballot_choices: {
      label: '¿Borrar todas sus opciones?',
      yes: 'Sí',
      no: 'No'
    },
    toolbar: [
      {
        label: 'Imprima su lista.', // Translate
        icon: 'fa-print',
        description: "Puede imprimir esta página usando la función \"imprimir\" en su navegador.", // Translate
        type: 'print'
      },
      { label: 'Copie un enlace a su lista.',
        icon: 'fa-external-link',
        description: "Puede usar este enlace para pegar un mensaje de texto o agregar como marcador.",  // Translate
        type: 'copy'
      },
      { label: 'Enviar un enlace a su lista por correo electrónico.',
        icon: 'fa-envelope',
        description: "Obtenga esta lista y un enlace para regresar a su lista.",  // Translate
        type: 'email'
      },
      { label: 'Tuitee su lista.',
        icon: 'fa-twitter-square',
        description: "Obtenga esta lista y un enlace para regresar a su lista.",  // Translate
        type: 'twitter'
      },
      { label: 'Publique su lista en Facebook.',
        icon: 'fa-facebook-square',
        description: "Obtenga esta lista y un enlace para regresar a su lista.",  // Translate
        type: 'facebook'
      },
      { label: 'Update your profile picture to tell your friends you‘re ready to vote!',
        icon: 'fa-facebook-square',
        description: "",  // Translate
        type: 'facebook-overlay',
        link: 'https://app.profileoverlays.com/Overlay/voters-edge'
      },
    ],
    email_link_my_list: {
      button_label: 'Envíe un enlace por correo electrónico.',
      label: 'Envíe un enlace de sus opciones por correo electrónico.',
      with_address: '<strong>Con</strong> su dirección.',
      without_address: '<strong>Sin</strong> su dirección.',
      privacy_notice: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir sus opciones y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
    },
    copy_link_my_list: {
      button_label: 'Copie un enlace.',
      label: 'Copie un enlace a sus opciones:',
      with_address: '<strong>Con</strong> su dirección.',
      without_address: '<strong>Sin</strong> su dirección.',
      privacy_notice: 'Brindamos la opción de eliminar su dirección en caso de que desee compartir sus opciones y conservar la privacidad de su dirección. Solo el enlace con su dirección incluirá su lugar de votación.',
      include_address_button_label: 'Incluir mi dirección',
      copy_label: 'Copiar'
    },
    close_label: 'Cerrar',
    contest_toolbar: [
      {
        label: {
          set: 'Revisar esta contienda más tarde.',  // Translate
          unset: 'Eliminar'  // Translate
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'
        },
        type: 'review'
      },
      {
        label: 'Comparte esta página',  // Translate
        icon: '',
        type: 'share'
      },
    ],

    candidate_toolbar: [
      {
        label: {
           set: 'Revisar esta contienda más tarde.',  // Translate
          unset: 'Eliminar'  // Translate
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'
        },
        type: 'review'
      },
      {
        label: 'Comparte esta página', // Translate
        icon: '',
        type: 'share'
      },
    ],

    measure_toolbar: [
      {
        label: {
          set: 'Revisar esta contienda más tarde.',  // Translate
          unset: 'Eliminar'  // Translate
        },
        icon: {
          set: 'fa-bookmark',
          unset: 'fa-remove'},
          type: 'review'
        },
      {
        label: 'Comparte esta página',  // Translate
        icon: '',
        type: 'share'
      },
    ],
   // Translate
  choices_explanation:
      `
      <p>         Debido a que frecuentemente las boletas electorales son largas y complicadas, Voter's Edge le brinda una herramienta para ayudarle a dar seguimiento a sus opciones.         <a href="#" data-toggle="modal" data-target="#myListInstructions"> Obtenga más información.         </a>       </p>
      <div class="modal fade" id="myListInstructions" tabIndex="-1" role="dialog" aria-labelledby="myListInstructionsLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>               <h4 class="modal-title" id="myListInstructionsLabel">Instrucciones de Mi lista</h4>
            </div>
            <div class="modal-body">
              <p><strong>Cuando revise su boleta electoral, podrá:</strong></p>
              <ul>
                <li><i aria-hidden="true" class="fa fa-check-square"></i>Elegir a los candidatos que quisiera recordar para votar por ellos.</li>
                <li><i aria-hidden="true" class="fa fa-thumbs-up"></i>Añadir su voto &quot;sí&quot; o &quot;no&quot; para la iniciativa de ley en la boleta electoral.</li>
                <li><i aria-hidden="true" class="fa fa-bookmark"></i>Añadir contiendas o iniciativas de ley a favoritos para revisar más tarde. (Muy pronto).</li>
              </ul>
              <p><strong>Cuando haya terminado (o necesite descansar), puede:</strong></p>
              <ul>
                <li><i aria-hidden="true" class="fa fa-print"></i>Imprimir su lista.</li>
                <li><i aria-hidden="true" class="fa fa-external-link"></i>Copiar un enlace para regresar a su lista más tarde.</li>
                <li><i aria-hidden="true" class="fa fa-envelope"></i>Enviar sus opciones a su correo electrónico.</li>
              </ul>
              <h4>Consejos de privacidad</h4>
              <p>Sus opciones están guardadas en los datos de aplicación de su navegador. Si está en una computadora pública, puede borrar sus opciones al seleccionar &quot;Clear your list&quot; (Borrar su lista) en la página &quot;Mi lista&quot; o <a href="http://www.wikihow.com/Clear-Your-Browser's-Cache" target="_blank">borre</a> los datos de su aplicación. </p>
              <p>                 Guardamos sus datos en nuestro propio navegador usando <a href="https://www.techopedia.com/definition/27674/html5-local-storage" target="_blank">&quot;almacenamiento local&quot;</a>, que es similar a una cookie pero no transmite sus datos en la red. <a href="/page/privacy-policy" target="_blank">Política de privacidad.</a>               </p>

            </div>
          </div>
        </div>
      </div>
`,

};

export default myListTranslation;
