import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";

// Applies to the national landing page
// * http://qa.votersedge.org

const votingInfoTranslation = {
      en: {
        page_title: "Voting Info",
        page_description: "",
        website_label: "Website",
      },

        votingInfo['my-polling-place']['Minor'].push({
    path: "default",
    content: "PollingPlace",
    title: "My polling location and hours",
    published: true,
    weight: 1,
    section: "my-polling-place",
    priority: "Minor", 
    accordionOpen: true,
  });
  votingInfo['my-polling-place']['Minor'].push({
    path: "default",
    content: "CheckPollingPlace",
    title: "Check My Polling Place",
    published: true,
    weight: 4,
    section: "my-polling-place",
    priority: "Minor",
    accordionOpen: true,
  });

    votingInfo['election-office-contact']['Minor'].push({
    path: "defaultElectionAuthority",
    content: "StateElectionOffice",
    title: "Contact State Election Office",
    published: true,
    weight: 1,
    section: "election-office-contact",
    priority: "Minor",
    accordionOpen: true,
  });
  votingInfo['election-office-contact']['Minor'].push({
    path: "default",
    content: "CountyElectionOffice",
    title: "Contact County Election Office",
    published: false,
    weight: 2,
    section: "election-office-contact",
    priority: "Minor",
    accordionOpen: true,
  });


No information available


};

export default votingInfoTranslation;