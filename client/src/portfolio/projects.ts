import { Project } from "./types";

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
    url: "https://shenhome.notion.site/how-to-have-difficult-conversations-01d291c70699431e8944e5c0bc0c86c5?pvs=4",
    id: "difficult-conversations",
  },
  {
    title: "Bullet",
    subtitle_objective: "A service for coordinating calendars",
    subtitle_date: "2021-2024",
    body: `One major challenge my peers and I faced was finding availability to spend time with each other. 
    I built Bullet, a Discord chatbot, so my friends and I could quickly see each others academic and work schedules,
    allowing us to more easily coordinate time to hang out.`,
    techused: ["Python"],
    url: "/project/1",
    id: "bullet",
    localUrl: true,
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
    id: "raven",
  },
  {
    title: "Sprout",
    subtitle_objective:
      "A dating app that emphasizes real, in-person connections",
    subtitle_date: "2022",
    body: `As a project for CalgaryHacks 2022, my team and I built Sprout as a dating app that 
    encouraged real, in-person conversation. I engineered the peer-to-peer communication services
    and enabled the application to run in the background.`,
    techused: ["Java", "Android", "Firebase", "Google Maps"],
    url: "https://devpost.com/software/sprout-kze5xy",
    id: "sprout",
  },
  {
    title: "Recharge",
    subtitle_objective:
      "An app for finding and sharing mobile device chargers.",
    subtitle_date: "2019",
    body: `Built for LocalHackDay 2019, Recharge helps people with low batteries connect with someone nearby 
    who has a charger. I built the route-plotting and distance calculations, and helped with integrating notifications.`,
    techused: ["Java", "Android", "Firebase", "Google Maps"],
    url: "https://devpost.com/software/recharge-83btk6",
    id: "recharge",
  },
  {
    title: "FoodPrint",
    subtitle_objective:
      "A health and recipe app to help you reuse leftovers and reduce food waste",
    subtitle_date: "2019",
    body: `Built for XDHacks 2019, FoodPrint tackles food waste by helping users find healthy recipes 
    that recycle leftover food in their fridges. I prototyped the user interface and 
    developed the entire backend stack, connecting our recipe API to our vision engine.`,
    techused: ["Java", "GCP"],
    url: "https://www.youtube.com/watch?v=ipDUX1WH8js",
    id: "foodprint",
  },
  {
    title: "StrideML",
    subtitle_objective:
      "A service that protects your devices by learning your stride",
    subtitle_date: "2019",
    body: `Winning the Wolfram Award at nwHacks 2019, StrideML was an android app that two classmates and I built
    that could identify and notify your smartwatch if your phone was stolen by learning your gait. 
    I worked on communication between the two devices and set up data collection from the accelerometer.`,
    techused: ["Java", "Android", "Python", "Tensorflow"],
    url: "https://devpost.com/software/stride-fs0ncy",
    id: "stride-ml",
  },
  {
    title: "The ILDS Gallery",
    subtitle_objective:
      "A free, standardized repository of high quality clinical images",
    subtitle_date: "2021-2024",
    body: `The ILDS Dermatology Gallery is intented to serve as a visual companion
    for the ICD-11. I designed the initial prototype, built the entire application platform, 
    liased with consultants for deployment and cybersecurity, and communicated and presented to stakeholders.`,
    techused: ["Node.JS", "React", "Express", "MySQL", "Apache", "Typescript"],
    id: "ilds-gallery",
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
    id: "ascension",
  },
];
