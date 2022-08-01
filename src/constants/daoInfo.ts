export type qa = {
  id: number;
  q: string;
  a: string;
};

// To preserve formatting you will need to enclose text in `` and not normal ""
// To prevent the indented lines being included new lines will need to start all the way to the left.
export const faq: qa[] = [
  {
    id: 1,
    q: "What is MedDAO?",
    a: `MedDAO provides a platform on which healthcare providers, patients and other industry stakeholders can collaborate to distribute medical knowledge on a global scale.
    
We do that by leveraging a highly-engaged community made up of public health stakeholders who are co-owners of our organization. 

We do it because we believe that access to medical knowledge and expertise should not be constrained by geography.`,
  },
  {
    id: 2,
    q: "What isn’t MedDAO?",
    a: `· It’s not telehealth -- while patient-facing use cases are on MedDAO's long-term roadmap, it is not currently equipped to handle patient-facing interactions or personal health information
· It’s not attempting to displace healthcare professionals, eliminate doctors' offices, hospitals or insurances companies
· It’s not shilling NFTs or a speculative, profit-making opportunity`,
  },
  {
    id: 3,
    q: "Who are some of MedDAO’s stakeholders?",
    a: `Any individual is welcome to join MedDAO.  We aim to create a globally connected community dedicated to sharing all medical knowledge and experience.  We think stakeholders will include:
    
· Healthcare professionals
· Medical industry
· Patients
· Academic institutions/researchers
· Caused-based organizations
· Medicolegal experts
· Web3 natives
· Regulators`,
  },
  {
    id: 4,
    q: "How can you verify provider credentials?",
    a: `All members of the community must go through a KYC/Proof of Humanity check.  Additionally, subDAOs may have additional credentialing requirements.  Healthcare professionals will be credentialed using a 3rd party provider; once a healthcare professional has been approved a non-transferrable NFT will be minted to their wallet, enabling their entry into the proper subDAO. Please click here for more information.`,
  },
  {
    id: 5,
    q: "I am a patient, why would I join?",
    a: `Any individual is welcome to join MedDAO.  We aim to create a globally connected community dedicated to sharing all medical knowledge and experience.  As a patient (or caregiver), you possess a  unique perspective and we believe there is value in creating a platform for you to share your experiential knowledge with others who may be facing a similar medical problem.   In this way,  MedDAO seeks to create a regenerative economy around medical knowledge and experience.`,
  },
  {
    id: 6,
    q: "I am not a patient, why would I join?",
    a: `MedDAO seeks to collaborate and partner with a broad range of stakeholders in the healthcare space.  We believe creating global access to a large community of healthcare providers and other medical stakeholders organized by medical specialties presents novel opportunities for researchers, charitable organizations and med-tech,  pharmaceutical, and health-insurance companies alike.  In this way MedDAO seeks to become an ImpactDAO, creating positive externalities for  the world.`,
  },
  {
    id: 7,
    q: "What is a knowledge request?",
    a: `Knowledge Requests (KRs) are one of the proposed use cases of MedDAO and its members. A KR begins with a knowledge requestor asking a question to a subDAO (or multiple subDAOs), the subDAO members  then go through a request fufillment process and, after internal quality check processes, the return the completed KR. At genesis, MedDAO will support Industry Knowledge Requests. In the future, we plan to expand Knowledge Request use cases to include patients, legal, government, research and other areas submitted by subDAOs.`,
  },
  {
    id: 8,
    q: "How do I get involved?",
    a: `So we've piqued your interest and now you want to get involved. Maybe you're a healthcare provider and want to truly be part of a vision to utilize blockchain technology and shared ownership to better share and deliver healthcare knowledge. Maybe you are a patient or advocate who wants to take on a more of an active role in how medical expertise is shared. Or perhaps, you are just interested in learning more about or contributing to the conversation on Web3, blockchain and DAOs as they pertain to healthcare.
    
If you're interested in learning more you can find the core MedDAO documents on our GitBook linked here. We've also linked to several of our favorite articles about DAOs, Web3 and healthcare.

We encourage you to sign up for our email list and follow our socials to receive updates regarding progress of MedDAO and, community events.

If you've made it this far we would recommend you sign up for our Discord server. This is the primary platform for engagement with MedDAO. Here you will become part of the conversation and a member of the team actually making this vision a reality. Detailed instructions and walkthrough are provided on the Discord server. Please reach out to our Community Management Team with technical difficulties.`,
  },
];

type objective = {
  id: number;
  objective: string;
  completed: boolean; // returns full circle icon if true, empty if false
  inProgress: boolean; // returns half circle icon if true
  futurePlans: boolean; // returns full circle icon if true, empty if false
};

// Object for editing the Roadmap section of the website
export const roadmap: objective[] = [
  {
    id: 1,
    objective: "Launch Discord ",
    completed: true,
    inProgress: false,
    futurePlans: false,
  },
  {
    id: 2,
    objective: "Grow community and identify early DAO contributors",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 3,
    objective: "Implement self-sovereign identification and credentialing",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 4,
    objective: "Distribute MedDAO Token",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 5,
    objective: "Develop initial Knowledge Request Protocol",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 6,
    objective: "Launch MedDAO Protocol",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 7,
    objective:
      "Collaboration with other DAOs, medical industry and charitable partners",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 8,
    objective: "Establish MedDAO grants program",
    completed: false,
    inProgress: false,
    futurePlans: true,
  },
  {
    id: 9,
    objective: "Fully decentralize governance",
    completed: false,
    inProgress: false,
    futurePlans: true,
  },
];
