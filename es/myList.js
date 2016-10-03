import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const myListTranslation = {
    bookmark_label: 'Add to my list', // Translate
    clear_list: '<i class="fa fa-remove"></i><strong>Clear</strong> your list.',
    candidate_choice_label: "",
    list_label: "Candidates, races, and measures on my list", // Translate
    noCandidatesSaved: "No Candidate Selected",
    candidateChoicesExceeded: "More candidates added for this office than you will be able to vote for.",
    toolbar_title: 'Get my list', // Translate
    toolbar_label: 'Grab your ballot choices to take to the polls.', // Translate
    updating_choices: 'Updating your choices. ',
    last_updated: 'Last updated',
    notifications: {
      candidate_saved: {
        title: 'Candidate added to your list.',
        message: ''
      },
      candidate_exceeded: {
        title: 'Candidate added to your list.',
        message: 'Note: More candidates added for this office than you will be able to vote for.'
      },
      measured_saved: {
        title: 'Choice added to your list.',
        message: ''
      },
      ballot_choices_removed: {
        title: 'Your ballot choices have been removed.',
        message: ''
      }
    },
    mail_my_list: {
      subject: 'My List from Voter’s Edge',
    },
    delete_ballot_choices: {
      label: 'Delete all your ballot choices?',
      yes: 'Yes',
      no: 'No'
    },
    toolbar: [
      {
        label: 'Print your list.', // Translate
        icon: 'fa-print',
        description: "You can print this page by using the 'Print' feature of your browser.", // Translate
        type: 'print'
      },
      { label: 'Copy a link to your list.',
        icon: 'fa-external-link',
        description: "Here is a link you can use to paste into a text message or bookmark.",  // Translate
        type: 'copy'
      },
      { label: 'Email a link to your list.',
        icon: 'fa-envelope',
        description: "Get this list as well as a link to get back to your list.",  // Translate
        type: 'email'
      },
      { label: 'Tweet your list.',
        icon: 'fa-twitter-square',
        description: "Get this list as well as a link to get back to your list.",  // Translate
        type: 'twitter'
      },
      { label: 'Post your list to Facebook.',
        icon: 'fa-facebook-square',
        description: "Get this list as well as a link to get back to your list.",  // Translate
        type: 'facebook'
      },
    ],
    email_link_my_list: {
      button_label: 'Email a link',
      label: 'Email a link to your choices',
      with_address: '<strong>With</strong> your address.',
      without_address: '<strong>Without</strong> your address.',
      privacy_notice: 'We provide the option to remove your address in case you want to share your choices, but maintain the privacy of your address. Only the link with your address will include your polling location.',
    },
    copy_link_my_list: {
      button_label: 'Copy a link',
      label: 'Copy a link to your choices:',
      with_address: '<strong>With</strong> your address.',
      without_address: '<strong>Without</strong> your address.',
      privacy_notice: 'We provide the option to remove your address in case you want to share your choices, but maintain the privacy of your address. Only the link with your address will include your polling location.',
      include_address_button_label: 'Include my address',
      copy_label: 'Copy'
    },
    close_label: 'Close',
    contest_toolbar: [
      {
        label: {
          set: 'Review this contest later',  // Translate
          unset: 'Remove'  // Translate
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
          set: 'Review this candidate later',  // Translate
          unset: 'Remove'  // Translate
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
          set: 'Review this measure later',  // Translate
          unset: 'Remove'
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
