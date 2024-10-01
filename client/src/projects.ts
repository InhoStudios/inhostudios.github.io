export type Project = {
  title: string;
  subtitle_objective: string;
  subtitle_date: string;
  body: string;
  techused: string[];
  url?: string;
};

export type Job = {
  title: string;
  company: string;
  date: string;
  body: string[];
  location: string;
};

export const SoftSkills: string[] = [
  "Software Engineering",
  "Computer Vision",
  "Machine learning",
  "Agile",
  "Test-Driven Development",
  "User-Centred Design",
];

export const TechLangs: string[] = [
  "DBMS (MySQL, Oracle)",
  "Java",
  "C/C++",
  "Python",
  "Javascript/Typescript",
  "R",
];

export const TechSkills: string[] = [
  "PyTorch",
  "Tensorflow",
  "OpenGL",
  "Containerization (Docker)",
  "Image Registration (ITK)",
  "Hardware Acceleration (CUDA)",
  "Adobe Creative Cloud",
  "Photo and Video Editing",
];

export const Projects: Project[] = [
  //   {
  //     title: "Ascension",
  //     subtitle_objective:
  //       "A fantasy platformer with a focus on environmental storytelling",
  //     subtitle_date: "2024",
  //     body: `Ascension was built for the CPSC 427 course at UBC.
  //         I built the physics engine and the quest and progression system,
  //         and optimized the rendering engine.`,
  //     techused: ["C++", "OpenGL"],
  //   },
  {
    title: "We All Have Problems",
    subtitle_objective:
      "Helping people broach sensitive conversations, together",
    subtitle_date: "2024",
    body: `As part of an HCI research course, our team conceptualized and prototyped 
    a tool to help individuals address difficult topics in a constructive manner
    between loved ones. I prototyped our interfaces, conducted user tests, and produced our final report video.`,
    techused: ["Figma"],
  },
  {
    title: "Bullet",
    subtitle_objective: "Find when your friends are free",
    subtitle_date: "2021-2024",
    body: `One major challenge my peers and I faced was finding availability to spend time with each other. 
    I built Bullet, a Discord chatbot, so my friends and I could quickly see each others academic and work schedules,
    allowing us to more easily coordinate time to hang out.`,
    techused: ["Python"],
    url: "https://github.com/InhoStudios/Bullet",
  },
  {
    title: "Raven",
    subtitle_objective: "Assistive text to speech for the visually impaired",
    subtitle_date: "2023",
    body: `For HackTheNorth 2023, our team built Raven aid people with visual impairments
    or reading disorders by narrating aloud the text they're trying to read. I designed the OCR engine, and
    linked our software to the Adhawk SDK.`,
    techused: ["Python"],
    url: "https://devpost.com/software/raven-rikwjp",
  },
  {
    title: "Sprout",
    subtitle_objective:
      "A dating app that forms and blooms real, in-person connections",
    subtitle_date: "2022",
    body: `As a project for CalgaryHacks 2022, my team and I built Sprout as a dating app that 
    encouraged real, in-person conversation. I engineered the peer-to-peer communication services
    and enabled the application to run in the background.`,
    techused: ["Java", "Android", "Firebase", "Google Maps"],
    url: "https://devpost.com/software/sprout-kze5xy",
  },
  {
    title: "Recharge",
    subtitle_objective: "Battery low? Connect with others!",
    subtitle_date: "2019",
    body: `Built for LocalHackDay 2019, Recharge helps people with low batteries connect with someone nearby 
    who has a charger. I built the route-plotting and distance calculations, and helped with integrating notifications.`,
    techused: ["Java", "Android", "Firebase", "Google Maps"],
    url: "https://devpost.com/software/recharge-83btk6",
  },
  {
    title: "FoodPrint",
    subtitle_objective: "Reuse leftovers to reduce food waste",
    subtitle_date: "2019",
    body: `Built for XDHacks 2019, FoodPrint tackles food waste by helping users find healthy recipes 
    that recycle leftover food in their fridges. I prototyped the user interface and 
    developed the entire backend stack, connecting our recipe API to our vision engine.`,
    techused: ["Java", "GCP"],
  },
  {
    title: "StrideML",
    subtitle_objective: "Protecting your devices by learning your stride",
    subtitle_date: "2019",
    body: `Winning the Wolfram Award at nwHacks 2019, StrideML was an android app that two classmates and I built
    that could identify and notify your smartwatch if your phone was stolen by learning your gait. 
    I worked on communication between the two devices and set up data collection from the accelerometer.`,
    techused: ["Java", "Android", "Python", "Tensorflow"],
    url: "https://devpost.com/software/stride-fs0ncy",
  },
];

export const Games: Project[] = [
  {
    title: "Ascension",
    subtitle_objective:
      "A fantasy platformer with a focus on environmental storytelling",
    subtitle_date: "2024",
    body: `Ascension was built for the CPSC 427 course at UBC.
          I built the physics engine and the quest and progression system,
          and optimized the rendering engine.`,
    techused: ["C++", "OpenGL"],
  },
];

export const Jobs: Job[] = [
  {
    title: "Research Assistant",
    company:
      "BC Cancer Research Centre, and Department of Dermatology and Skin Science, UBC (Tim K. Lee)",
    date: "May 2024 - Present",
    body: [
      `Developing a premiere clinical image gallery with emphasis on standardization and accessibility`,
      `Expanded development team and implemented Agile development workflow`,
      `Migrated from Python Flask to Linux, Apache, MySQL, and Node.JS stack
            for improved scalability`,
      `Performed R&D of cybersecurity protocols to ensure compliance with UBC Information Security Standards`,
    ],
    location: "Vancouver, BC",
  },
  {
    title: "Undergraduate Academic Assistant",
    company: "Faculty of Pharmaceutical Sciences, UBC (Urs O. Hafeli)",
    date: "May 2023 - June 2024",
    body: [
      `Developed a mouse model for radiological imaging using a framework for 3D image registration and pose estimation,
        leading to an award-winning conference presentation`,
      `Conducted usability studies to evaluate applicability of the conducted research`,
      `Integrated the pose-estimated mouse model into open-source software intended for pre-clinical radiopharmaceutical researchers`,
    ],
    location: "Vancouver, BC",
  },
  {
    title: "Undergraduate Research Assistant",
    company:
      "BC Cancer Research Centre, and Department of Dermatology and Skin Science, UBC (Tim K. Lee)",
    date: "May 2021 - April 2024",
    body: [
      `Researched and implemented colour constancy models for the Dark Skin AI Project, which aims to generative AI
            address poor skin-colour representation and racial biases in dermatology`,
      `Conducted independent research on models of skin-colour and skin-tone for the Dark Skin AI Project,
            winning several awards at conference presentations`,
      `Achieve 180% improvement in segmentation metrics for state-of-the-art model in vitiligo segmentation project through
            finetuning and colour space analysis, using PyTorch`,
      `Began development of the ILDS Image Gallery project`,
    ],
    location: "Vancouver, BC",
  },
  {
    title: "President, Marketing Lead, Engineering",
    company: "vhHacks — Vancouver's first free high school hackathon",
    date: "Sep 2019 - Mar 2021",
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
