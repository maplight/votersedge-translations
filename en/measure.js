import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const measureTranslation = {
Measure



Yes
No

Source:

Individual
Elected Official
Organization

Individuals
Elected Officials
Organizations

 "Campaign for " + position + " Contact Info",
  "Campaign for " + position + " Contact Info",

   Opinions & Analysis

   Events
   Upcoming Events
   Past Events


  let labels = {
    explanation: "Here are ...",
    label_total: "of total",
    label_organization_100: "Contribution from a PAC",
    label_individual_100: "Contribution from an individual",
    label_organization: "PAC",
    label_individual: "Individuals",
    icon_organization: "organization.svg",
    icon_individual: "individual.svg",
    source: "Maplight"
  }

    let labels = {
    explanation: "",
    label_in_state: "In-state contributions",
    label_other: "Other states",
    label_out_of_state: "Out-of-state",
  }



Neutral

        next
        back

        overview

        Last measure!

The way it is now
What if it passes?
Budget effect
People FOR say
People AGAINST say
The Question
The Situation
The Proposal
Fiscal effect
Supporters Say
Opponents say
Summary
Background
Financial effect
Impartial Analysis
Tax rate
Yes vote means
Arguments For
Rebuttals (Replies)
A No vote means
Arguments Against
Proposed Legislation
Read the proposed legislation
Measure Basics
Pros & Cons
Easy Voter Guide

What is this proposal?
Who endorses the ballot measure campaigns?
Who contributes money?
More information

 let fundingTranslation = {
      contributionsTitle: "Contributions to campaigns",
      contributionsExplanation: 'These amounts reflect the money given to, and reported by, committees formed primarily to support or oppose the given ballot measure.',
      contributionsSource: "Source: MapLight analysis of data from the California Secretary of State. Last updated: [placeholder]",
      totalMoneyRaised: "Total money raised",
      contributionSize: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
      organizationContributionsTitle: 'Organization Contributions',
      organizationContributionsLabel: 'Contributions can be made directly by organizations, through their affiliated political action committees (PACs), or by individuals.',
      whoGaveMostMoneyTitle: "Who gave the most money?",
      whoGaveMostMoneyLabel: 'Below are the top 10 contributors that gave money to committees supporting or opposing the given ballot measure(s).',
      ofTotal: 'of total',
      topTenByStateTitle: 'Top 5 contributions by state',
      topTenByStateLabel: '',
      piechartTitle: '',
      piechartLabel: '',

      contributionSizeTitle: 'How big are the contributions?',
      contributionSizeLabel: 'Committees are not required to disclose detailed information for contributions under $100. These small ("unitemized") contributions are disclosed as a lump sum with each new filing.',
      contributionOver: {
        "Federal": "Contributions over $200",
        "State": "Contributions over $100",
      },
      contributionUnder: {
        "Federal": "Contributions under $200",
        "State": "Contributions under $100",
      },
      organizationsOrg: {
        "label": "From organizations",
        "tooltip": "Contributions from companies, unions, or other organizations.",
      },
      organizationsEmployees: {
        "label": "From employees",
        "tooltip": "Contributions from individuals, including employees of organizations.",
      },
      cashHat: 'public/content/svg/icons/Federal-100.png',
      moneyHand: 'public/content/svg/icons/Federal-100.png',

    }










    en: {
      sectionTitle: "Measures",
      measureDescriptionLabel: "About this measure",
      my_choices: "Do you support this proposition?",
      SoS: "Secretary of State",
      EVG: "Easy Voter Guide — League of Women Voters of California",
      LWVC: "Pros/Cons — League of Women Voters of California",
    },

 aboutLabel: 'What is this proposition?',
          argumentsLabel: 'Arguments for and against this proposition',
          supportLabel: 'Who supports this and why?',
          costLabel: 'How much does it cost?',
          infoLabel: 'How can I learn more?',

          about: [
          {
            label: "Summary",
            link: "page/summary",
            status: "published",
            formattedField: 'official_summary',
            source: 'Secretary of State',
          },

          {
            label: "Background",
            link: "page/background",
            status: "published",
            formattedField: 'official_background',
            source: 'Secretary of State',
          },
          {
            label: "What will be on your ballot?",
            link: "page/about-proposition",
            status: "published",
            formattedField: '',
            source: 'Secretary of State'
          },
          {
            label: "How is it now?",
            link: "page/about-proposition",
            status: "published",
            formattedField: 'way_it_is',
            source: 'League of Women Voters of California Easy Voter’s Guide'
          },
          {
            label: "What happens if this passes?",
            link: "page/what-votes-mean",
            status: "published",
            formattedField: 'official_yes_vote_means_X',
            source: 'Secretary of State',
          },

          {
            label: "How much does it cost?",
            link: "page/cost",
            status: "published",
            formattedField: '',
            source: 'Secretary of State',
          },
          {
            label: "Read proposed legislation",
            link: "page/full-text-link",
            status: "published",
            formattedField: 'fulltext_link',
            source: 'Secretary of State',
          },
          ],
          arguments: [
          {
            label: "Arguments for Yes",
            link: "page/short-arguments-yes",
            status: "published",
            formattedField: 'official_short_arguments_yes',
            source: 'Secretary of State',
          },

          {
            label: "Arguments for No",
            link: "page/short-arguments-no",
            status: "published",
            formattedField: 'official_short_arguments_no',
            source: 'Secretary of State',
          },

          ],
          support: [
          {
            label: "Campaign financing",
            link: "page/campaign-financing",
            status: "published",
            formattedField: '',
            source: 'MapLight',
          },
          {
            label: "Endorsements",
            link: "page/endorsements",
            status: "published",
            formattedField: 'measure_endorsements',
            fieldMapDisplay: ['', ''],
            fieldMap: ['position', 'endorser', 'url'],
            source: 'MapLight',
          },


          ],

          info: [
          {
            label: "Analysis",
            link: "page/campaign-contact",
            status: "published",
            formattedField: 'measureInfo',
            fieldMapDisplay: ['', ''],
            fieldMap: ['data_type', 'title'],
            source: 'Secretary of State',
          },

          {
            label: "Events",
            link: "page/support-events",
            status: "published",
            formattedField: 'measure_events',
            fieldMapDisplay: ['Host', 'Description', 'Link', 'Added on'],
            fieldMap: ['host', 'description', 'link',  'event_timestamp'],
            source: 'MapLight',
          },

          {
            label: "News",
            link: "page/analysis-news",
            status: "published",
            formattedField: 'measure_news',
            fieldMapDisplay: ['Description', 'Link', 'Added on'],
            fieldMap: ['description', 'link',  'news_timestamp'],
            source: 'MapLight',

          },
          {
            label: "Opinions",
            link: "page/responses",
            status: "published",
            formattedField: 'measureAnswers',
            fieldMapDisplay: ['Answer'],
            fieldMap: ['answer'],
            source: 'Secretary of State',
          },
          {
            label: "Videos",
            link: "page/videos",
            status: "published",
            formattedField: 'measureVideos',
            fieldMapDisplay: ['Source', 'Description', 'Link', 'Added on'],
            fieldMap: ['source', 'description', 'link',  'video_timestamp'],
            source: 'Secretary of State',
          },

          {
            label: "Additional Resources",
            link: "page/videos",
            status: "published",
            formattedField: 'measureVideos',
            fieldMapDisplay: ['Source', 'Description', 'Link', 'Added on'],
            fieldMap: ['source', 'description', 'link',  'video_timestamp'],
            source: 'Secretary of State',
          },
          ]

};

export default measureTranslation;