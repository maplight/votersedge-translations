import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the sharing tool, including its tooltips.
// This appears on all pages near the footer area and also on candidate, contest and measure pages.

const shareSiteTranslation = {
  twitterMessages: {
    root: 'Using @VotersEdge to get ready to vote! [!SPECIALHASHTAG]',
    ca: 'Using @VotersEdge to get ready to vote! #California [!SPECIALHASHTAG]',
    ny: 'Using @VotersEdge to get ready to vote! #NewYork [!SPECIALHASHTAG]',
    il: 'Using @VotersEdge to get ready to vote! #Illinois [!SPECIALHASHTAG]',
    // contest, candidate and measure will probably get templates, but communication breakdown in the google sheet. They go here if they get set.
    votingInfo: 'Need info on when, where, and how to vote?[!MEDIAPARTNER] & @VotersEdge have you covered. [!STATEHASHTAG] [!SPECIALHASHTAG]',
    choices: 'I researched my ballot and marked my choices using ‘My List’ on @VotersEdge. Check it out! [!STATEHASHTAG] [!SPECIALHASHTAG]',
  },
  twitterMessagesMediaPartner: {
    ca: 'Using [!MEDIAPARTNER] & @VotersEdge to get ready to vote! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    ny: 'Using [!MEDIAPARTNER] & @VotersEdge to get ready to vote! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    il: 'Using [!MEDIAPARTNER] & @VotersEdge to get ready to vote! [!STATEHASHTAG] [!SPECIALHASHTAG]',
    votingInfo: 'Need info on when, where, and how to vote?[!MEDIAPARTNER] & @VotersEdge have you covered. [!STATEHASHTAG] [!SPECIALHASHTAG]',
    choices: 'I researched my ballot and marked my choices using ‘My List’ on @VotersEdge & [!MEDIAPARTNER]. Check it out! [!STATEHASHTAG] [!SPECIALHASHTAG]',
  },
  twitterCardTitle: {
    root: '[!SITENAME] | Get the facts before you vote.',
    ca: '[!BRANDEDSITENAME] | Get the facts before you vote.',
    ny: '[!BRANDEDSITENAME] | Get the facts before you vote.',
    il: '[!BRANDEDSITENAME] | Get the facts before you vote.',
    overview: 'What’s on the ballot in [!COUNTYNAME] | [!BRANDEDSITENAME]',
    contestPage: 'Candidates for: [!CONTESTNAME]',
    candidatePage: '[!CANDIDATENAME] | [!BRANDEDSITENAME]',
    measurePage: '[!MEASUREIDENTIFIER] [!MEASURENAME] | [!BRANDEDSITENAME]',
    votingInfo: 'When, where, and how to vote: [!COUNTYNAME] | [!BRANDEDSITENAME]',
    choices: 'My List for the [!ELECTIONDATE] election | [!BRANDEDSITENAME]',
  },
  twitterCardDescription: {
    root: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
    ca: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
    ny: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
    il: 'Nonpartisan election guide. Find your ballot with key information on candidates and measures.',
    overview: 'Get nonpartisan information on candidates and measures, including local information on when, where, and how to vote.',
    contestPage: '[!SITENAME] | Nonpartisan information on the [!ELECTIONDATE] election.',
    candidatePage: 'Candidate for [!CONTESTNAME] - [!ELECTIONDATE]',
    measurePage: 'Guide to measures in the [!JURISDICTIONNAME] on the [!ELECTIONDATE] ballot.',
    votingInfo: 'Nonpartisan voter guide for the [!ELECTIONDATE] election. Registration, polling places, important dates and deadlines, and more!',
    choices: 'Find your ballot, review the candidates and measures, and mark your choices before Election Day!'
  },
  twitterHashtagsSpecial: {
    current: '#Election2016',
  },
  twitterHashtags: {
    ca: '#California',
    ny: '#NewYork',
    il: '#Illinois',
    root: '',
    default: '',
  },
  email: {
    footer: '[!BR][!BR]Get the facts before you vote | [!SITENAME][!BR]@Votersedge [!MEDIAPARTNERTWITTER] | [!SHAREURL]',
    mediaPartnerFooter: '[!BR][!BR]Get the facts before you vote | [!MEDIAPARTNER] - [!SITENAME][!BR]@Votersedge [!MEDIAPARTNERTWITTER] | [!SHAREURL]',
    root: {
      subject: 'Check out [!SITENAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. Just enter your address and access a personalized ballot with in-depth information on candidates, measures, and who supports them.',
    },
    ca: {
      subject: 'Check out [!SITENAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. Just enter your address and access a personalized ballot with in-depth information on candidates, measures, and who supports them.',
    },
    ny: {
      subject: 'Check out [!SITENAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. Just enter your address and access a personalized ballot with in-depth information on candidates, measures, and who supports them.',
    },
    il: {
      subject: 'Check out [!SITENAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. Just enter your address and access a personalized ballot with in-depth information on candidates, measures, and who supports them.',
    },
    ballot: {
      subject: 'Check out [!SITENAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. Just enter your address and access a personalized ballot with in-depth information on candidates, measures, and who supports them.[!BR][!BR]I used it to look up my ballot in [!COUNTYNAME]: [!SHARECONTENTURL]',
    },
    contestPage: {
      subject: 'Learn more about the candidates running for [!CONTESTNAME]',
      emailBody: 'I used [!SITENAME] to learn about the candidates running for [!CONTESTNAME], in the [!ELECTIONDATE] election. [!BR][!BR]Learn more: [!SHARECONTENTURL][!BR][!BR][!SITENAME] is a nonpartisan, nonprofit guide where can you learn about the candidates and measures that will be on your ballot.',
    },
    candidatePage: {
      subject: 'Learn about [!CANDIDATENAME], Candidate for [!CONTESTNAME]',
      emailBody: '[!CANDIDATENAME] is a candidate for [!CONTESTNAME] in the [!ELECTIONDATE] election.[!BR][!BR]Learn more about [!CANDIDATENAME] and the other candidates: [!SHARECONTENTURL][!BR][!BR][!SITENAME] is a nonpartisan, nonprofit guide where can you learn about the candidates and measures that will be on your ballot.',
    },
    measurePage: {
      subject: 'Learn about ballot measures for [!COUNTYNAME]',
      emailBody: '[!MEASUREIDENTIFIER] is on the ballot for [!COUNTYNAME][!BR][!BR]Learn more: [!SHARECONTENTURL][!BR][!BR][!SITENAME] is a nonpartisan, nonprofit guide where can you learn about the candidates and measures that will be on your ballot.',
    },
    votingInfo: {
      subject: 'Info on when, where, and how to vote in [!COUNTYNAME]',
      emailBody: '[!SITENAME] is a comprehensive, nonpartisan online guide to federal, state, and local elections. The site has information on registration, polling places, important dates and deadlines, and more![!BR]See when, where, and how to vote in [!COUNTYNAME]: [!SHARECONTENTURL]',
    },
    choices: {
      subject: 'My List for the [!ELECTIONDATE] election',
      emailBody: 'I used [!SITENAME] to learn about the candidates and measures on the [!ELECTIONDATE] ballot, and marked my choices using their ‘My List’ feature. Now I can take my choices with me to the polls on Election Day and share them with you![!BR][!BR]My List: [!SHARELISTCHOICESPLACEHOLDER][!BR][!BR][!SITENAME] is a nonpartisan, nonprofit guide where you can learn about the candidates and measures that will be on your ballot.',
    },
  },
  share_to_label: 'Please share this site to help others research their voting choices.', // Translate
  email_label: 'Send to Email', // Translate
  // email_message: 'You might like', // Translate
  copy_link_label: 'Copy a link', // Translate
  copy_link_instructions: 'Get a link to this page', // Translate
  copy_link_clean_instructions: 'Get a link', // Translate
  share_facebook: 'Share link to this page on Facebook',
  share_twitter: 'Share link to this page on Twitter',
  embeddable_content_label: "Embeddable content",
  embed_link_label: 'Embed', // Translate
  email_link_content: {
    button_label: 'Email a link',
    label: 'Email a link to this page',
    with_address: 'Email a link <strong>with</strong> your address.',
    without_address: 'Email a link <strong>without</strong> your address.',
    include_address_button_label: 'Include my address',
    privacy_notice: 'We provide the option to remove your address in case you want to share your choices, but maintain the privacy of your address. Only the link with your address will include your polling location.',
  },
  copy_link_content: {
    button_label: 'Copy a link',
    label: 'Copy a link to this page',
    with_address: 'Copy a link <strong>with</strong> your address.',
    without_address: 'Copy a link <strong>without</strong> your address.',
    privacy_notice: 'We provide the option to remove your address in case you want to share your choices, but maintain the privacy of your address. Only the link with your address will include your polling location.',
    include_address_button_label: 'Include my address',
    copy_label: 'Copy'
  },
  with_address: '<strong>With</strong> your address.',
  without_address: '<strong>Without</strong> your address.',
  privacy_notice: 'We provide the option to remove your address in case you want to share your choices, but maintain the privacy of your address. Only the link with your address will include your polling location.',
  privacy_notice_content: 'We provide the option to remove your address in case you want to share this page, but maintain the privacy of your address. Only the link with your address will include your polling location.',
  include_address_button_label: 'Include my address',
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
};

export default shareSiteTranslation;