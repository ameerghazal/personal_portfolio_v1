import {
  IActivity,
  IExperience,
  INavItem,
  INavMedia,
  IPicture,
  IProject,
  ILifestyle,
} from "./interface";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandTypescript,
  IconMail,
} from "@tabler/icons-react";
import { DiJava } from "react-icons/di";

export const navItems: INavItem[] = [
  {
    href: "#lifestyle",
    title: "lifestyle",
  },
  {
    href: "#experiences",
    title: "experiences",
  },
  {
    href: "#activites",
    title: "activities",
  },
  {
    href: "#projects",
    title: "projects",
  },
];

export const lifestyle: ILifestyle = {
  bulletPoints: [
    "I'm currently a Software Development Intern at Paycom and an Undergraduate Researcher at OU. Further, I am the Finance Director for Hacklahoma and a Web Developer for the UI/UX Club.",
    "In my free-time, I like to play basketball, film YouTube and TikTok videos, binge anime, program, and design. I'd also like to travel the world, but we'll see how that goes...",
  ],
  skills: [
    {
      icon: <IconBrandTypescript />,
      skill: "TypeScript",
    },
    {
      icon: <IconBrandNextjs />,
      skill: "Next.js",
    },
    {
      icon: <IconBrandNodejs />,
      skill: "Node.js",
    },
    {
      icon: <IconBrandPython />,
      skill: "Python",
    },
    {
      icon: <DiJava />,
      skill: "Java",
    },
    {
      icon: <IconBrandMongodb />,
      skill: "MongoDB",
    },
  ],
};

export const navMedia: INavMedia[] = [
  {
    name: "LinkedIn",
    fragment: (
      <IconBrandLinkedin className="lg:h-[2.5rem] lg:w-[2.5rem] md:h-[2rem] md:w-[2rem] " />
    ),
    link: "https://www.linkedin.com/in/ameerghazal/",
  },
  {
    name: "GitHub",
    fragment: (
      <IconBrandGithub className="lg:h-[2.5rem] lg:w-[2.5rem]  md:h-[2rem] md:w-[2rem]" />
    ),
    link: "https://github.com/ameerghazal",
  },
  {
    name: "Discord",
    fragment: (
      <IconBrandDiscord className="lg:h-[2.5rem] lg:w-[2.5rem]  md:h-[2rem] md:w-[2rem] h-auto w-auto" />
    ),
    link: "https://discordapp.com/users/ameerghazal",
  },
  {
    name: "Outlook",
    fragment: (
      <IconMail className="lg:h-[2.5rem] lg:w-[2.5rem] md:h-[2rem] md:w-[2rem] h-auto" />
    ),
    link: "mailto:officialameerghazal@outlook.com",
  },
];

export const experiences: IExperience[] = [
  {
    title: "Software Developer Intern",
    company: "Paycom",
    dates: "May 2024 - Present",
    bulletPoints: [
      "Collaborated on a Q&A web app, improving feedback for 8000+ employees.",
      "Designed 50+ endpoints using REST APIs and Entity Framework within .NET, enhancing data retrieval.",
      "Won 1st place at firm-wide Hackathon with a project enhancing team assignment and recruitment.",
    ],
    stack: [
      "React.js",
      "Typescript",
      "C#",
      "ASP .NET Core",
      "MySQL",
      "JEST",
      "Swagger API",
    ],
    img: {
      width: 300,
      height: 300,
      src: "/experiences/paycom.svg",
      alt: "paycom logo",
    },
    backgroundColor: "#008543",
  },
  {
    title: "Researcher",
    company: "University of Oklahoma",
    dates: "August 2024 - Present",
    bulletPoints: [
      "Scrape 9,000+ comments using the YouTube API and Python to build a dataset for disinformation detection.",
      "Apply Natural Language Processing to train ML models, aiming for 85% accuracy in spam classification.",
    ],
    stack: ["Python", "Scraping", "NLP", "Machine Learning"],
    img: {
      src: "/experiences/researcher.svg",
      width: 100,
      height: 100,
      alt: "research logo",
    },
    backgroundColor: "#841617",
  },

  {
    title: "Software Engineer Intern",
    company: "I-CCEW",
    dates: "January 2024 - May 2024",
    bulletPoints: [
      "Engineered a hospital app, delivering feedback to patients through visualization and notifications.",
      "Unified the UI with EPIC healthcare data, filtered by Qvera, optimizing storage costs by 90%.",
      "Leveraged Git version control with JIRA, ensuring maintainable code management, mastering SDLC.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Cloud SQL",
      "Firebase/Firestore",
      "EPIC API/Qvera",
    ],
    img: {
      src: "/experiences/iccew.svg",
      alt: "I-CCEW logo",
      width: 100,
      height: 100,
    },
    backgroundColor: "#323232",
  },
  {
    title: "Programming Instructor",
    company: "iCode",
    dates: "November 2023 - May 2024",
    bulletPoints: [
      "Instructed Python, C#, and project building with 50+ students, resulting in a 40% increase in assessment scores.",
      "Assessed OOP principles and time complexity, fostering analytical thinking and problem-solving for students.",
    ],
    stack: ["C#", "Python", ".NET MAUI", "JavaScript", "OOP", "Postman"],
    img: {
      src: "/experiences/icode.svg",
      alt: "icode logo",
      width: 200,
      height: 200,
    },
    backgroundColor: "#953982",
  },
  {
    title: "Software Engineer Intern",
    company: "UFLIP",
    dates: "January 2023 - November 2023",
    bulletPoints: [
      "Worked on a ticket tracking web app, displaying a live-sale feed, advanced filtering, and more for 5000+ clients.",
      "Integrated event ticketing via an API, facilitating access to 3000+ international live events.",
      "Prioritized Agile and client-sided approaches, generating a 20% boost in team productivity.",
    ],
    stack: ["React.js", "JavaScript", "HTML", "CSS/SCSS", "RESTful APIs"],
    img: {
      src: "/experiences/uflip.svg",
      alt: "UFLIP logo",
      width: 200,
      height: 200,
    },
    backgroundColor: "#1c75bc",
  },
];

export const activities: IActivity[] = [
  {
    club: "Hacklahoma",
    href: "https://hacklahoma.org/",
    title: "Finance Director",
    content:
      "Primary fiscal allocator for the largest hackathon in Okahoma, stationed at the University of Oklahoma. Our team has organized for 170+ students, with partnerships from 20+ companies. We have raised over $20,000. Another exciting year coming up!",
    linkDescription: "Check out our website",
    headerSize: "text-xl",
    descriptionSize: "text-sm",
    backgroundColor: "#4A3B2E",
    textColor: "white",
    img: {
      width: 500,
      height: 500,
      src: "/activites/hacklahoma_team.svg",
      alt: "Hacklahoma team photo.",
    },
  },
  {
    club: "UI/UX Club",
    href: "https://www.instagram.com/ou_uxdesign/",
    img: {
      src: "/activites/UI_logo.svg",
      alt: "OU UI/UX club logo",
      width: 300,
      height: 500,
    },
    title: "Web Developer",
    content:
      "Primary webiste creator for the User Interface and User Experience club at the University of Oklahoma. Currently, our inner team of three is working on the club's first website, featuring tech-stacks: Next.js, TypeScript, and Node.js.",
    linkDescription: "Check out our Instagram",
    headerSize: "text-md",
    descriptionSize: "text-sm",
    backgroundColor: "#584E3D",
    textColor: "white",
  },

  {
    club: "AI/ML Club",
    href: "https://www.instagram.com/ou.artificial/",

    title: "Technical Officer",
    content:
      "Board member of the Artifical Intelligence and Machine Learning club at the Univeristy of Oklahoma. Our team conducts workshops on various LLM's and libraries, further expanding AI understanding among our 400+ club student body.",
    linkDescription: "Checkout out our Instagram",
    headerSize: "text-lg",
    descriptionSize: "text-sm",
    backgroundColor: "#81886A",
    textColor: "white",
    img: {
      width: 500,
      height: 500,
      src: "/activites/AI_logo.svg",
      alt: "OU AI/ML club logo",
    },
  },

  {
    club: "CAC HSLC",
    href: "https://www.ou.edu/sga/cac/high-school-leadership-conference",

    title: "Operations Officer",
    content:
      "Board member of the University of Oklahoma's High School Student Leadership Council. Our team works on a year-long mentorship project for 500+ highschool students, condensed into a 3-day, empowering weekend.",
    linkDescription: "Check out our mission",
    headerSize: "text-lg",
    descriptionSize: "text-sm",
    backgroundColor: "#8E9C79",
    textColor: "white",
    img: {
      width: 500,
      height: 500,
      src: "/activites/hslc_hype.svg",
      alt: "OU Highschool Student Leadership Council team.",
    },
  },
];

export const projects: IProject[] = [
  {
    title: "Personal Portfolio",
    description:
      "Personal page for the world to catch a glimpse of my life. Discover my journey and achievements, all hosted with continuous CI/CD updates. ",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer", "GSAP"],
    link: "https://github.com/ameerghazal/personal_portfolio_v1",
    img: "/projects/portfolio.svg",
    alt: "Personal portfolio logo",
  },
  {
    title: "Outline - Social Media",
    description:
      "Platform for users to create a personalized outline of their day, allowing them to share real moments and thoughts in a structured format with followers.",
    technologies: ["React Native", "Python", "PostgreSQL", "Firebase"],
    link: "https://github.com/ameerghazal/Outline-Application",
    img: "/projects/outline_logo.svg",
    alt: "Outline logo",
  },
  {
    title: "Java GPS Tracker",
    description:
      "GPS tracker that leverages a scraped dataset, OOP, and Java GUI to track the distances, find the average speeds, and showcase a 2D model.",
    technologies: ["Java", "JUnit", "Scraping", "OOP"],
    link: "https://github.com/ameerghazal/project5-ameerghazal",
    img: "/projects/java_animation.svg",
    alt: "Java animation screen",
  },
  {
    title: "Recipe Application",
    description:
      "Web app, allowing users to search, bookmark, and add recipes. Recipies fetched from a public API and leveraged through netlify (CI/CD) capabilites. ",
    technologies: ["React.js", "JavaScript", "HTML/CSS", "Git"],
    link: "https://github.com/ameerghazal/forkify-recipe-application",
    img: "/projects/recipies.svg",
    alt: "Recipie application main page",
  },
  {
    title: "Car Price Prediction",
    description:
      "ML supervised learning model, predicting car sales prices using Linear Regression, KNN, Decision Trees, and Random Forest algorithms from scratch.",
    technologies: ["Python", "A.I.", "Supervised Learning", "Sci-kit"],
    link: "https://github.com/ameerghazal/ML-Supervised-Learning",
    img: "/projects/ml_sl.svg",
    alt: "Machine Learning supervised learning graphic",
  },
  {
    title: "Agent vs. Frozen Lake",
    description:
      "ML reinforcement learning model, training an agent to traverse any randomly chosen frozen lake maze, using DP, SARSA, Q-Learning, and Double Q.",
    technologies: ["Python", "A.I.", "Pandas", "Numpy"],
    link: "https://github.com/ameerghazal/ML-RL-FrozenLake",
    img: "/projects/ml_rl.svg",
    alt: "Machine Learning reinforcement learning frozen lake map",
  },
];

export const pictures: IPicture[] = [
  {
    src: "/gallery/ski.svg",
    alt: "Selfie ski.",
    styles: "",
  },

  {
    src: "/gallery/study.svg",
    alt: "Friends and I studying.",
    styles: "",
  },
  {
    src: "/gallery/view.svg",
    alt: "Friends and I admiring the view.",
    styles: "",
  },
  {
    src: "/gallery/foodbank.svg",
    alt: "Paycom team at the foodbank.",
    styles: "",
  },
  {
    src: "/gallery/iccew_team.svg",
    alt: "I-CCEW team photo.",
    styles: "",
  },
  {
    src: "/gallery/race.svg",
    alt: "Formula 1 race.",
    styles: "",
  },
  {
    src: "/gallery/hike.svg",
    alt: "Friends and I hiking.",
    styles: "",
  },
  {
    src: "/gallery/iccew_mic.svg",
    alt: "Me holding a microphone at a conference.",
    styles: "",
  },
  {
    src: "/gallery/side.svg",
    alt: "Side panel.",
    styles: "",
  },
  {
    src: "/gallery/flags.svg",
    alt: "Flags on a tree.",
    styles: "",
  },
  {
    src: "/gallery/mountain.svg",
    alt: "Mountain view from below.",
    styles: "",
  },
  {
    src: "/gallery/islam.svg",
    alt: "The kabba and the Mecca clock tower. Alhamdulliah.",
    styles: "",
  },
];
