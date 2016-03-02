import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const footerTranslation = {
    en: {
      feedback_button_label: "Contact Us",
      feedback_message: "Message",

"en" : {
      links: [
          // {
          //   label: 'Home',
          //   link: '/' + props.subDomain,
          //   section: 'home',
          // },
          {
            label: 'Overview',
            link: 'overview',
            section: 'overview',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Candidates',
            link: 'candidates',
            section: 'candidates',
            target: 'OverviewCandidates Offices',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Measures',
            link: 'measures',
            section: 'measures',
            target: 'OverviewMeasures Measures',
          },
          {
            iconFileName: '',
            tooltip: '',
            label: 'Voting info',
            link: 'voting-info',
            section: 'votingInfo',
            target: 'VotingInfoSections',
          },
          {
            iconFileName: 'fa fa-newspaper-o',
            tooltip: 'Coming soon. Save your choices and see them all on a list.',
            label: 'My List',
            link: '', // 'choices'
            section: 'choices',
            target: 'Choices',
          },
          ],
          current: "(current)",
        },

  aboutLabel: 'About Us',
          contactUsLabel: 'Contact us',
          resourcesLabel: 'Resources',
          policiesLabel: 'Policies',

          about : [
          {
            label: "About this project",
            link: "page/about-voters-edge",
            status: "published",
          },
          {
            label: "How we get our data",
            link: "page/how-we-get-our-data",
            status: "published",
          },
          {
            label: "FAQ",
            link: "page/faq",
            status: "published",
            domain: 'ca'
          },
          ],
          policies: [
          {
            label: "Privacy policy",
            link: "page/privacy-policy",
            status: "published",
          },
          {
            label: "Terms of use",
            link: "page/terms-of-use",
            status: "published",
          },
          {
            label: "Icon attribution",
            link: "page/icons",
            status: "published",
          },
          ],
          contact: [
          {
            label: "Send us a message",
            link: "feedback",
            status: "published",
          },
          // {
          //   label: "Questions",
          //   link: "page/support-questions",
          //   status: "published",
          // },
          {
            label: "Donate",
            link: "https://donatenow.networkforgood.org/votersedge?code=votersedge",
            status: "published",
          },
          ],
          resources: [
          // {
          //   label: "Embeddable Content & Widgets",
          //   link: "page/embeddable-content-widgets",
          //   status: "published",
          // },
          // {
          //   label: "For Media: Create a voting guide",
          //   link: "page/media",
          //   status: "unpublished",
          // },
          // {
          //   label: "For Developers: API resources",
          //   link: "page/api-resources",
          //   status: "published",
          // },
          {
            label: "For Candidates: Sign up and add your information",
            link: "http://candidates.votersedge.org",
            status: "published",
          },
          {
            label: "For Voter's Edge Team: Sign in",
            link: "http://team.votersedge.org",
            status: "published",
          },
          ]

Attribution-NonCommercial CC BY-NC


      };

export default footerTranslation;