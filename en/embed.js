import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the header on all pages except landing page & state landing page.
// URLS:

const embedTranslation = {
  embed: {
    intro: {
      'candidate': 'Want to share this candidate’s information on social media or embed it on your site?',
      'measure': 'Want to share this measure’s information on social media or embed it on your site?',
    },
    chooseCard: 'Choose the card you want and build it to fit your needs.',
    cardButton: 'Get this card',
    embed: 'Embed this content',
    more_info: 'Learn more',
    seeAllCards: 'See all cards',
    buildCard: 'Build this card the way you want it.',
    layoutLabel: 'Layout',
    sizeLabel: 'Size',
    exportLabel: 'Export',
    copyCodeLabel: 'Copy the code',
    exportExplanation: 'This card will link to the candidate’s Voter’s Edge page. The candidate’s data will always match the information on their page.',
    downloadImageLabel: 'Download image',
    downloadImageExplanation: 'This card will not link to the candidate’s Voter’s Edge page. The data will remain the same and not update along with the candidate’s page.',
    cardDisclaimer: '<p>By using this card, you agree to the following statement*:</p><p>.... (copy)</p>',
    cardDisclaimerFunder: '',
    vertical: 'Vertical',
    horizontal: 'Horizontal',
  }
};

export default embedTranslation;