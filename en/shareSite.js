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
  }
};

export default shareSiteTranslation;