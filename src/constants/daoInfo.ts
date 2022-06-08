type qa = {
  id: number;
  q: string;
  a: string;
};

export const faq: qa[] = [
  {
    id: 1,
    q: "What is MedDAO?",
    a: "MedDAO provides a platform on which healthcare providers,  patients and other industry stakeholders can collaborate to distribute medical knowledge on a global scale. We do that by leveraging a highly-engaged community made up of public health stakeholders who are co-owners of our organization. We do it because we believe that access to medical knowledge and expertise should not be artificially constrained by geography.",
  },
  {
    id: 2,
    q: "Who are some of MedDAO’s stakeholders?",
    a: `·Healthcare professionals
    ·Patients
    ·Medical industry
    ·Academic institutions/researchers
    ·Caused-based organizations
    ·Medicolegal experts
    ·Web3 natives
    ·Regulators`,
  },
  {
    id: 3,
    q: "What isn/’t MedDAO?",
    a: `·It/’s not telehealth
    ·It’s not attempting to displace healthcare professionals, eliminate doctors' offices, hospitals or insurances companies
    ·It’s not shilling NFTs`,
  },
  {
    id: 4,
    q: "How can you verify provider credentials?",
    a: "All members of the community must go through a KYC/Proof of Humanity check.  Additionally, subDAOs may have additional credentialing requirements.  Providers will be credentialed using a 3rd party provider, once the provider has been approved a non-transferrable NFT will be minted to their wallet enabling their entry into the proper subDAO. Please click here for more information [links to docs section on credentialing]",
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
    objective: "Launch gated Discord ",
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
