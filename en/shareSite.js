import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the sharing tool, including its tooltips.
// This appears on all pages near the footer area and also on candidate, contest and measure pages.

const shareSiteTranslation = {
  tooltips: {
    facebook: 'Share link to this site on Facebook',
    twitter: 'Share link to this site on Twitter',
    email: 'Send to email',
    copy_link: 'Copy a link',
  },
  icon_labels: {
    facebook: 'Facebook',
    twitter: 'Twitter',
    email: 'Email',
    copy_link: 'Get a link (to share via mobile or chat messages.)',
  },
  share_to_label: 'Please share this site to help other people research their voting choices.', // Translate
  email_label: 'Email',
  email_message: 'You might like',
  copy_link_label: 'Copy Link',
  copy_link_instructions: 'Get a link to this page',
  copy_link_clean_instructions: 'Get link without your address',
  embed_link_label: 'Embed',
};

export default shareSiteTranslation;