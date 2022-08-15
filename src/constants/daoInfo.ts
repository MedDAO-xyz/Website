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
    a: `MedDAO will provide a platform for healthcare providers, patients and other industry stakeholders to collaborate and distribute medical knowledge on a global scale. We do that by leveraging a highly-engaged community made up of public health stakeholders who are co-owners of our organization. We do it because we believe that access to medical knowledge and expertise should not be constrained by geography or other artificial barriers.

MedDAO was founded and funded by DecentraMed, LLC, a Wyoming LLC. The owners of DecentraMed are:

• Drs. R. Morgan Stuart and Brad Zacharia, practicing neurosurgeons that trained together at the Neurological Institute of New York at Columbia University Medical Center.
• George Cecil and Ryan Zacharia, who invest in blockchain and web3 infrastructure for regulated financial institutions.

Other core team members and advisors include:

• Dr. S.K. Steven Houston III is a vitreoretinal surgeon who trained at Wills Eye Hospital and Bascom Palmer Eye Institute. He is a web3 enthusiast, building at the cross-section of medicine, cryptocurrencies, NFTs, and DAOs.
• Katherine Onk, a data analytics leader with experience in advertising, fundraising, social platforms and education. An advisor for clinical research after navigating patient advocacy for parents with neurological conditions. Web3 enthusiast with experience in cryptocurrencies, digital assets and blockchain data curation.
• Tracheopteryx, co-founder of Coordinape and yearn OG.
• Members of the LexDAO & Bankless communities.

It is currently anticipated that MedDAO will be set up as a Marshall Islands nonprofit DAO.`,
  },
  {
    id: 2,
    q: "What isn’t MedDAO?",
    a: `• It’s not telehealth -- while patient-facing use cases are on MedDAO's long-term roadmap, it is not currently equipped to handle patient-facing interactions or personal health information.

• It’s not attempting to displace healthcare professionals, eliminate doctors' offices, hospitals or insurances companies.

• It’s not shilling NFTs or a speculative, profit-making opportunity. Instead, MedDAO is seeking to build a platform that provides long-term value (be it philanthropic, economic, educational, etc.) to its members and users. MedDAO is, first and foremost, about coordinating public good. If you’re looking to get rich quick, you’re in the wrong place.`,
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
    a: ``,
  },
  {
    id: 5,
    q: "I am a patient, why would I join?",
    a: `As a patient (or caregiver), you possess a  unique perspective and we believe there is value in creating a platform for you to share your experiential knowledge with others who may be facing a similar medical problem.  In this way,  MedDAO seeks to create a regenerative platform around medical knowledge and experience.`,
  },
  {
    id: 6,
    q: "I am not a patient, why would I join?",
    a: `MedDAO seeks to collaborate and partner with a broad range of stakeholders in the healthcare space.  We believe creating global access to a large community of healthcare providers organized by medical specialties and other medical stakeholders presents novel opportunities for researchers, charitable organizations, pharmaceutical and health insurance companies alike.  In this way, MedDAO seeks to become an ImpactDAO, creating positive externalities for the world.`,
  },
  {
    id: 7,
    q: "What is a knowledge request?",
    a: `Knowledge Requests (KRs) are one of the proposed use cases and primitives of the MedDAO protocol. A KR begins with a knowledge requestor submitting a question/query/or proposal to a subDAO (or multiple subDAOs); the subDAO members then go through a request fulfillment process and, after internal quality check processes, return the completed KR. MedDAO’s minimum viable product will support Industry Knowledge Requests. In the future, we plan to expand Knowledge Request use cases to include legal, government, research and other areas contemplated  by subDAOs.`,
  },
  {
    id: 8,
    q: "How do I get involved?",
    a: ``,
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
    objective: "Implement self-sovereign identification and credential verification",
    completed: false,
    inProgress: true,
    futurePlans: false,
  },
  {
    id: 4,
    objective: "Develop MedDAO Token",
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
