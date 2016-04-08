import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const myListTranslation = {
    bookmark_label: 'Add to my list', // Translate
    candidate_choice_label: "",
    list_label: "Here are the candidates, races and measure you have added.", // Translate
    toolbar_title: 'Get your list', // Translate
    toolbar_label: 'Grab your ballot choices to take to the polls.', // Translate
    toolbar: [
      {
        label: 'Print your list.', // Translate
        icon: 'fa-print',
        description: "You can print this page by using the 'Print' feature of your browser.", // Translate
        type: 'print'
      },
      { label: 'Copy a link.',
        icon: 'fa-external-link',
        description: "Here is a link you can use to paste into a text message or bookmark.",  // Translate
        type: 'copy'
      },
      { label: 'E-mail your list',
        icon: 'fa-envelope',
        description: "Get this list as well as a link to get back to your list.",  // Translate
        type: 'email'
      },
    ],

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
        label: 'Share this page',  // Translate
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
        label: 'Share this page', // Translate
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
        label: 'Share this page',  // Translate
        icon: '',
        type: 'share'
      },
    ],
   // Translate
  choices_explanation:

      `
      <p>Because ballots are often long and complicated, Voter’s Edge
      provides you with a tool to help you keep track of your choices.</p>

      <p><strong>As you review your ballot, you can</strong></p>
      <ul>
      <li><i class="fa fa-check-square"></i>Choose the candidates you would like to remember to vote for on your ballot.</li>
      <li><i class="fa fa-thumbs-up"></i>Add your Yes or No vote for ballot measures.</li>
      <li><i class="fa fa-bookmark"></i>Bookmark contests or measure to review later.</li>
      </ul>

      <p><strong>When you are finished (or need a break), you can</strong></p>
      <ul>
      <li><i class="fa fa-print"></i>Print your list.</li>
      <li><i class="fa fa-external-link"></i>Copy a link to send to your phone to retrieve your list later.</li>
      <li><i class="fa fa-envelope"></i>E-mail your ballot to yourself.</li>
      </ul>

      <h4>Privacy Tips</h4>
      <p>For privacy reasons, we do not save your choices. We do not set cookies with your
      choices. If you are on a public computer, be sure to clear your history.</p>

      `,



};

export default myListTranslation;