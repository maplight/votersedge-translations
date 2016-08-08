import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the sharing tool, including its tooltips.
// This appears on all pages near the footer area and also on candidate, contest and measure pages.

const shareSiteTranslation = {
  tooltips: {
    facebook: 'Share link to this site on Facebook', // Translate
    twitter: 'Share link to this site on Twitter', // Translate
    email: 'Send to email', // Translate
    copy_link: 'Copy a link', // Translate
  },
  icon_labels: {
    facebook: 'Facebook',
    twitter: 'Twitter',
    email: 'Email', // Translate
    copy_link: 'Get a link (to share via mobile or chat messages.)',  // Translate
  },
  share_to_label: 'Please share this site to help others research their voting choices.', // Translate
  email_label: 'Send to Email', // Translate
  email_message: 'You might like', // Translate
  copy_link_label: 'Copy a link', // Translate
  copy_link_instructions: 'Get a link to this page', // Translate
  copy_link_clean_instructions: 'Get link (without your address)', // Translate
  embed_link_label: 'Embed', // Translate
};

export default shareSiteTranslation;