import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const feedbackTranslation = {

  Feedback
  Contact Us

  text += "Representing a Candidate or Campaign?: " + (req.body.respresenting_candidate ? "yes" : "no") + "\n";
  text += "Representing a Media Outlet?: " + (req.body.respresenting_media ? "yes" : "no") + "\n";
  text += "Accessing the Spanish language version of the site?: " + (req.body.spanish_language ? "yes" : "no") + "\n";
  text += "Interested in volunteering?: " + (req.body.volunteering ? "yes" : "no") + "\n";
  text += "Reason: " + req.body.reason + "\n";
  text += "Feedback: " + req.body.feedback_text + "\n\n";

  Election area is optional
  Election Authority
  Representing a Candidate or Campaign?
  Representing a Media Outlet?
  Accessing the Spanish language version of the site?
  Interested in volunteering?
  Reason
  Select a reason...

  <option value="">Select a reason...</option>
  <option value="General Feedback">General Feedback</option>
  <option value="Technical Problems">Technical Problems</option>
  <option value="Problems After Entering My Address">Problems After Entering My Address</option>
  <option value="Data Accuracy">Data Accuracy</option>
  <option value="Requesting API Access / Widgets">Requesting API Access / Widgets</option>
  <option value="Interested in Partnership">Interested in Partnership</option>
  <option value="Other">Other</option>

  Thank you for your feedback.  We will follow up with you if necessary.


};

export default feedbackTranslation;

