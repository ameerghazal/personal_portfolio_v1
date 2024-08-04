import {
  IActivity,
  IExperience,
  INavItem,
  INavMedia,
  IPicture,
  IProject,
} from "./interface";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const navItems: INavItem[] = [
  {
    path: "#lifestyle",
    title: "lifestyle",
  },
  {
    path: "#experience",
    title: "experience",
  },
  {
    path: "#activites",
    title: "activities",
  },
  {
    path: "#projects",
    title: "projects",
  },
  {
    path: "#gallery",
    title: "gallery",
  },
];

export const lifestyle: string[] = [
  "Hello! My name is Ameer Ghazal. I'm a Computer Science major, Mathematics minor at the University of Oklahoma.",
  "I'm currently a Software Development Intern at Paycom and an Undergraduate Researcher at OU.",
  "Further, I am the Finance Director for Hacklahoma and a Web Developer for the UI/UX Club.",
  "In my free-time, I like to play basketball, film YouTube and TikTok videos, binge anime, program, and design.",
  "I'd also like to travel the world, but we'll see how that goes...",
];

export const navMedia: INavMedia[] = [
  {
    name: "LinkedIn",
    fragment: <IconBrandLinkedin width={50} height={50} />,
    link: "https://www.linkedin.com/in/ameerghazal/",
  },
  {
    name: "GitHub",
    fragment: <IconBrandGithub width={50} height={50} />,
    link: "https://github.com/ameerghazal",
  },
  {
    name: "Discord",
    fragment: <IconBrandDiscord width={50} height={50} />,
    link: "https://discordapp.com/users/ameerghazal",
  },
  {
    name: "Outlook",
    fragment: <IconMail width={50} height={50} />,
    link: "mailto:officialameerghazal@outlook.com",
  },
];

export const experiences: IExperience[] = [
  {
    title: "Software Developer Intern",
    company: "Paycom",
    dates: "May 2024 - Present",
    bulletPoints: [
      "Working within a team of 20 to develop a component application.",
      "React.js, MySQL, PHP project infrastructure.",
      "Lorem ipsum dolor sit amet.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Oklahoma",
    dates: "May 2024 - Present",
    bulletPoints: [
      "Developing an A.I. powered chatbot for search engines.",
      "Working with many people.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter AI",
    dates: "July 2024 - Present",
    bulletPoints: [
      "Working within a team of 20 to develop a component application.",
      "Git version control.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "I-CCEW",
    dates: "January 2024 - May 2024",
    bulletPoints: [
      "Working within a team of 20 to develop a component application.",
      "React.js, MySQL, PHP project infrastructure.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "UFLIP",
    dates: "January 2023 - November 2023",
    bulletPoints: [
      "Working within a team of 20 to develop a component application.",
      "Git version control.",
    ],
  },
];

export const activities: IActivity[] = [
  {
    club: "Hacklahoma",
    href: "https://hacklahoma.org/",
    src: "/activites/hacklahoma_team.svg",
    alt: "Hacklahoma team photo.",
    title: "Finance Director",
    content:
      "for the largest hackathon in Oklahoma, stationed at the University of Oklahoma. Our team has organized for 170+ students, with partnerships from 20+ companies. We have raised over $20,000. Another exciting year coming up!",
    linkDescription: "Check out our website",
    headerSize: "text-xl",
    descriptionSize: "text-sm",
    backgroundColor: "#4A3B2E",
    textColor: "white",
  },
  {
    club: "OU UI/UX",
    href: "https://www.instagram.com/ou_uxdesign/",
    src: "/activites/UI_logo.svg",
    alt: "OU UI/UX club logo",
    imgStyles: "object-center",
    title: "Web Developer",
    content:
      "for the UI/UX club at the University of Oklahoma. In the midst of creating the club's first website, featuring React.js, Node.js, and MySQL.",
    linkDescription: "Check out our instagram",
    headerSize: "text-md",
    descriptionSize: "text-sm",
    backgroundColor: "#584E3D",
    textColor: "white",
  },
  {
    club: "iCode",
    href: "https://icodeschool.com/",
    src: "/experiences/icode_logo.svg",
    alt: "iCode Logo",
    imgStyles: "p-10",
    title: "Programming Instructor",
    content:
      "for 50+ young students. Classes include core coding principles, project building, and OOP paradigms. Courses were taught in Python, C#, and JavaScript.",
    linkDescription: "Check out the website",
    headerSize: "text-sm",
    descriptionSize: "text-xs",
    backgroundColor: "#65624C",
    textColor: "white",
  },
  {
    club: "OU AI/ML",
    href: "https://www.instagram.com/ou.artificial/",
    src: "/activites/AI_logo.svg",
    alt: "OU AI/ML club logo",
    title: "Technical Officer",
    content:
      "for the AI/ML club at the University of Oklahoma. Our team conducts workshops on various ML learning models and libraries, further expanding AI understanding among our 400+ club student body.",
    linkDescription: "Checkout out our instagram",
    headerSize: "text-lg",
    descriptionSize: "text-sm",
    backgroundColor: "#81886A",
    textColor: "white",
  },

  {
    club: "OU HSLC",
    href: "https://www.ou.edu/sga/cac/high-school-leadership-conference",
    src: "/activites/hslc_hype.svg",
    alt: "OU Highschool Student Leadership Council team.",
    title: "Operations Officer",
    content:
      "for the CAC High School Student Leadership Council at the University of Oklahoma. Our team works on a year-long mentorship project for 500+ highschool students, condensed into a 3-day, empowering weekend.",
    linkDescription: "Check out our mission",
    headerSize: "text-lg",
    descriptionSize: "text-sm",
    backgroundColor: "#8E9C79",
    textColor: "white",
  },
];

export const projects: IProject[] = [
  {
    title: "Personal Portfolio",
    description:
      "Personal page for the world to catch a glimpse of my life. Discover my journey and achievements, all hosted with continuous CI/CD updates. ",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer", "GSAP"],
    link: "https://github.com/ameerghazal/personal_portfolio",
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
      "GPS tracker that leverages a scraped dataset, OOP principles, and Java GUI to track the distances, find the average speeds, and showcase a 2D model.",
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
    title: "Car Price Prediction Model",
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
      "ML reinforcement learning model, training an agent to traverse any randomly chosen frozen lake maze, using DP, SARSA, Q-Learning, and Double Q from scratch.",
    technologies: ["Python", "A.I.", "Pandas", "Numpy"],
    link: "https://github.com/ameerghazal/ML-RL-FrozenLake",
    img: "/projects/ml_rl.svg",
    alt: "Machine Learning reinforcement learning frozen lake map",
  },
];

export const pictures: IPicture[] = [
  {
    src: "/gallery/iccew_mic.svg",
    alt: "Me holding a microphone at a conference.",
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
    src: "/gallery/ski.svg",
    alt: "Selfie ski.",
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
