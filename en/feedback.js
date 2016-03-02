import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the feedback form & related labels.

const feedbackTranslation = {

  title: 'Contact Us',
  value_label_yes: 'yes',
  value_label_no: 'no', 
  questions: {
    representing_candidate: 'Representing a Candidate or Campaign?',
    representing_media_outlet: 'Representing a Media Outlet?',
    spanish_language_access: 'Accessing the Spanish language version of the site?',
    volunteer_interest: 'Interested in volunteering?'
  }
  form_labels: {
    reason: 'Reason', // Translate
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

