export type qa = {
  id: number;
  q: string;
  a: string;
};

// To preserve formatting you will need to enclose text in `` and not normal ""
// To prevent the indented lines being included new lines will need to start all the way to the left.
// text here goes through a parser and can accept valid html.
// Quick Examples <b>BoldWord</b>  <i>ItalicWord</i>
// link style <a href="addrHere" style="color: #FF003F">textHere</a>
export const faq: qa[] = [
  {
    id: 1,
    q: "What is MedDAO?",
    a: `MedDAO will provide a platform for healthcare providers, patients and other industry stakeholders to collaborate and distribute medical knowledge on a global scale. We do that by leveraging a highly-engaged community made up of public health stakeholders who are co-owners of our organization. We do it because we believe that access to medical knowledge and expertise should not be constrained by geography or other artificial barriers.

MedDAO was founded Her and funded by DecentraMed, LLC, a Wyoming LLC. The owners of DecentraMed are:

• <b>Drs. R. Morgan Stuart</b> and <b>Brad Zacharia</b>, practicing neurosurgeons that trained together at the Neurological Institute of New York at Columbia University Medical Center.
• <b>George Cecil</b> and <b>Ryan Zacharia</b>, who invest in blockchain and web3 infrastructure for regulated financial institutions.

Other core team members and advisors include:

• <b>Dr. S.K. Steven Houston III</b> is a vitreoretinal surgeon who trained at Wills Eye Hospital and Bascom Palmer Eye Institute. He is a web3 enthusiast, building at the cross-section of medicine, cryptocurrencies, NFTs, and DAOs.
• <b>Katherine Onk</b>, a data analytics leader with experience in advertising, fundraising, social platforms and education. An advisor for clinical research after navigating patient advocacy for parents with neurological conditions. Web3 enthusiast with experience in cryptocurrencies, digital assets and blockchain data curation.
• <b>Tracheopteryx</b>, co-founder of Coordinape and yearn OG.
• Members of the LexDAO & Bankless communities.

It is currently anticipated that MedDAO will be set up as a Marshall Islands nonprofit DAO.`,
  },
  {
    id: 2,
    q: "What isn’t MedDAO?",
    a: `• It’s <b>not telehealth</b> -- while patient-facing use cases are on MedDAO's long-term roadmap, it is not currently equipped to handle patient-facing interactions or personal health information.

• It’s <b>not attempting to displace</b> healthcare professionals, eliminate doctors' offices, hospitals or insurances companies.

• It’s <b>not shilling NFTs or a speculative, profit-making opportunity.</b> Instead, MedDAO is seeking to build a platform that provides long-term value (be it philanthropic, economic, educational, etc.) to its members and users. MedDAO is, first and foremost, about coordinating public good. If you’re looking to get rich quick, you’re in the wrong place.`,
  },
  {
    id: 3,
    q: "Who are some of MedDAO’s stakeholders?",
    a: `Any individual is welcome to join MedDAO.  We aim to create a globally connected community dedicated to sharing all medical knowledge and experience.
    
• <b>Healthcare professionals</b> - for those that have dedicated their lives to acquiring and applying their medical knowledge, MedDAO hopes to build a platform to allow these professionals to expand their medical networks and more effectively distribute their knowledge.
• <b>Patients</b> - while patient-facing use cases are contemplated, they will not be MedDAO's initial focus due to the complex legal and privacy considerations. However, patients also possess a wealth of medical and experiential knowledge and foresee use cases that tap into this vast, and previously underutilized, knowledge base.
• <b>Medical industry</b> - MedDAO sees great potential to work with the medical industry as partners, working together to expand connectivity, increase efficiency and transparency and further the collective mission of advancing healthcare.
• <b>Academic institutions/researchers</b> - MedDAO endeavors to help institutions and medical researchers discover new resources and find new methods or collaboration.
• <b>Caused-based organizations</b> - organizations have traditionally been forced to rely upon fully centralized systems for their community engagement and platform development, we hope to enable these organizations to more easily communicate with those they’re trying to help and to facilitate the creation of new, completely decentralized organizations.
• <b>Medicolegal experts</b> - we hope medicolegal experts will guide the DAO, defining the permissible activities and further exploring the boundaries of Healthcare 3.0.
• <b>Web3 natives</b> - the web3 community plays a crucial role in our success as they rally around the mission of MedDAO to aid in the architecture built-out and continued growth of the DAO, protocol, and Healthcare 3.0.
• <b>Regulators</b> - regulators play a crucial role in facilitating the legal and ethical practice of medicine globally. MedDAO expects to engage with global regulators on an ongoing basis and welcomes their participation in the DAO to further the goals of Healthcare 3.0.`,
  },
  {
    id: 4,
    q: "How can you verify provider credentials?",
    a: `All members of the community must go through a Proof of Humanity check.  Additionally, subDAOs may have their own credentialing requirements. U.S.-licensed healthcare providers’ credentials will be checked against the American Board of Medical Specialties database, and once the provider has been approved, a non-transferrable NFT (with an expiration date that requires future reverification) will be minted to their wallet enabling their entry into the proper subDAO.  We would like to work with the community to replicate such a process across other geographies.
    
Please click <a href="https://docs.meddao.xyz/" style="color: #FF003F">here</a> for more information
    `,
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
    a: `If we’ve piqued your interest, we encourage you to learn more by reading our <a href="https://docs.meddao.xyz/" style="color: #FF003F">documentation</a>, subscribing to our newsletter (below) and joining our <a href="https://discord.com/invite/qwWATcETDq" style="color: #FF003F">Discord server</a> (our initial primary engagement platform). `,
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
    objective:
      "Implement self-sovereign identification and credential verification",
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
