import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the feedback form & related labels.

const feedbackTranslation = {

  title: 'Contact Us', // Translate
  value_label_yes: 'yes', // Translate
  value_label_no: 'no',  // Translate
  questions: {
    representing_candidate: 'Representing a Candidate or Campaign?', // Translate
    representing_media_outlet: 'Representing a Media Outlet?', // Translate
    spanish_language_access: 'Accessing the Spanish language version of the site?', // Translate
    volunteer_interest: 'Interested in volunteering?', // Translate
  },
  form_labels: {
    submit: 'Submit',
    name: 'Name',
    email: 'Email',
    state: 'State',
    reason: 'Reason', // Translate
    reason_select: 'Select a reason...',
    feedback: 'Feedback', // Translate
    election_area_optional: 'Election area is optional', // Translate
    election_authority: 'Election Authority', // Translate
    select_reason: 'Select a reason...', // Translate
    general_feedback: 'General Feedback', // Translate
    technical_problems: 'Technical Problems', // Translate
    address_entry: 'Problems After Entering My Address', // Translate
    data_accuracy: 'Data Accuracy', // Translate
    api_access: 'Requesting API Access / Widgets', // Translate
    partnership: 'Interested in Partnership', // Translate
    other: 'Other', // Translate
  },
  response: 'Thank you for your feedback.  We will follow up with you if necessary.'

};

export default feedbackTranslation;

