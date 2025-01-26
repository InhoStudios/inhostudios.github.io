import { Job } from "./types";

export const Jobs: Job[] = [
  {
    company:
      "Lee Lab — BC Cancer Research Centre & Department of Dermatology and Skin Science (UBC)",
    date: "May 2021 - Present",
    title: "Undergraduate Research Assistant",
    body: [
      `Designed, engineered, and deployed the <strong>ILDS Dermatology Gallery</strong>, a 
          clinical image database emphasizing accessibility and standardization; won second place
          research presentation related with the project`,
      `Researched and implemented models of skin-tone and colour constancy for the <strong>Dark Skin AI Project</strong>, 
          which employs generative AI to address racial biases in dermatology; won second place poster presentation
          at conference for related research presentation`,
      `Led research and development of <strong>AI vitiligo segmentation project</strong>, 
          achieving more than 180% improvement over the state-of-the-art segmentation 
          model using PyTorch`,
    ],
    location: "Vancouver, BC",
  },
  {
    company: "Hafeli Lab — Faculty of Pharmaceutical Sciences (UBC)",
    date: "May 2023 - June 2024",
    title: "Undergraduate Academic Assistant",
    body: [
      `Engineered the <strong>Pose-Estimated Mouse Atlas</strong>: a mouse model for radiological imaging using 3D image registration and pose estimation, leading to an award-winning conference presentation`,
      `Integrated the pose-estimated mouse model into open-source software intended for pre-clinical radiopharmaceutical researchers`,
      `Conducted usability studies to evaluate applicability of the conducted research`,
    ],
    location: "Vancouver, BC",
  },
  {
    company: "vhHacks — The Vancouver High school Hackathon",
    date: "Sep 2019 - Mar 2021",
    title: "President, Marketing Lead, Engineering",
    body: [
      `Led a team of six over a period of two years in the conceptualization, development, and organization of the first
          free and accessible hackathon for high school students in the Greater Vancouver Area`,
      `Managed fundraising, acquired sponsorship, handled financial and event logistics, and obtained over $1300 of value
          in sponsorships and prizes`,
      `Designed the website, and engineered a bespoke virtual venue and event management bot in response to the global pandemic`,
      `Invited 48 students to the inaugural event in 2021`,
    ],
    location: "Vancouver, BC",
  },
];
