import {
  IActivity,
  IExperienceItem,
  INavItem,
  INavMedia,
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
    title: "Lifestyle",
  },
  {
    path: "#experience",
    title: "Experience",
  },
  {
    path: "#activites",
    title: "Activities",
  },
  {
    path: "#projects",
    title: "Projects",
  },
];

export const navMedia: INavMedia[] = [
  {
    name: "LinkedIn",
    fragment: <IconBrandLinkedin />,
    height: 24,
    width: 24,
    link: "https://www.linkedin.com/in/ameerghazal/",
  },
  {
    name: "GitHub",
    fragment: <IconBrandGithub />,
    height: 24,
    width: 24,
    link: "https://github.com/ameerghazal",
  },
  {
    name: "Discord",
    fragment: <IconBrandDiscord />,
    height: 24,
    width: 24,
    link: "https://discordapp.com/users/ameerghazal",
  },
  {
    name: "Outlook",
    fragment: <IconMail />,
    height: 24,
    width: 24,
    link: "mailto:officialameerghazal@outlook.com",
  },
];

export const experiences: IExperienceItem[] = [
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
    classNames:
      "grid col-start-1 col-end-6 row-start-1 row-end-7 rounded-lg relative overflow-hidden",
    club: "Hacklahoma",
    href: "https://hacklahoma.org/",
    src: "/hacklahoma_team.svg",
    alt: "Hacklahoma team photo.",
    title: "Finance Director",
    content: [
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
    headerSize: "text-xl",
    descriptionSize: "text-sm",
  },
  {
    classNames:
      "grid col-start-6 col-end-9 row-start-1 row-end-7 rounded-lg relative overflow-hidden",
    club: "OU UI/UX",
    href: "https://www.instagram.com/ou_uxdesign/",
    src: "/UI_logo.svg",
    alt: "OU UI/UX club logo",
    imgStyles: "object-center",
    title: "Web Developer",
    content: [
      "Full-stack website creation.",
      "React.js and Node.js.",
      "Increasing club retention by 20%.",
    ],
    headerSize: "text-md",
    descriptionSize: "text-sm",
  },
  {
    classNames:
      "grid col-start-9 col-end-11 row-start-1 row-end-5 bg-black rounded-lg relative overflow-hidden",
    club: "iCode",
    href: "https://icodeschool.com/",
    src: "/icode_logo.svg",
    alt: "iCode Logo",
    imgStyles: "p-10",
    title: "Programming Instructor",
    content: [
      "Instruct Python, C#, and JavaScript.",
      "Project building with 50+ young students.",
    ],
    headerSize: "text-sm",
    descriptionSize: "text-xs",
  },
  {
    classNames:
      "grid col-start-1 col-end-5 row-start-7 row-end-11 rounded-lg relative overflow-hidden",
    club: "OU AI/ML",
    href: "https://www.instagram.com/ou.artificial/",
    src: "/AI_logo.svg",
    alt: "OU AI/ML club logo",
    title: "Technical Officer",
    content: [
      "Conducting workshops on various ML learning models and libraries.",
      "Expanding AI understanding among 400+ students.",
    ],
    headerSize: "text-lg",
    descriptionSize: "text-sm",
  },

  {
    classNames:
      "grid col-start-5 col-end-9 row-start-7 row-end-11  rounded-lg relative overflow-hidden",
    club: "OU HSLC",
    href: "https://www.ou.edu/sga/cac/high-school-leadership-conference",
    src: "/hslc_team.svg",
    alt: "OU Highschool Student Leadership Council team.",
    title: "Operations Officer",
    content: [
      "Counseled a year-long mentorship project.",
      "Over 500+ high-schoolers.",
    ],
    headerSize: "text-lg",
    descriptionSize: "text-sm",
  },
  {
    classNames:
      "grid col-start-9 col-end-11 row-start-5 row-end-11 rounded-lg relative overflow-hidden",
    club: "OU SGA",
    href: "https://www.ou.edu/sga",
    src: "/ou_sga.svg",
    alt: "OU Student Government Logo",
    title: "Ways and Means Officer",
    content: [
      "Fiscal assessments for 50+ student organizations.",
      "Optimized share with data-driven decisions.",
    ],
    headerSize: "text-lg",
    descriptionSize: "text-sm",
  },
];

export const projects: IProject[] = [
  {
    title: "Outline - Social Media",
    description:
      "Platform for users to create a personalized outline of their day, allowing them to share real moments and thoughts in a structured format with followers.",
    languages: ["React Native", "Python", "PostgreSQL", "Firebase"],
    link: "https://github.com/ameerghazal/Outline-Application",
  },
  {
    title: "Java GPS Tracker",
    description:
      "GPS tracker that leverages a scraped dataset, OOP principles, and Java GUI to track the distances, find the average speeds, and showcase a 2D model.",
    languages: ["Java", "JUnit", "Scraping", "OOP"],
    link: "https://github.com/ameerghazal/project5-ameerghazal",
  },
  {
    title: "Recipe Application",
    description:
      "Web app, allowing users to search, bookmark, and add recipes. Recipies fetched from a public API and leveraged through netlify (CI/CD) capabilites. ",
    languages: ["React.js", "JavaScript", "HTML/CSS", "Git"],
    link: "https://github.com/ameerghazal/forkify-recipe-application",
  },
  {
    title: "Car Price Prediction Model",
    description:
      "ML supervised learning model, predecting car sales prices using Linear Regression, KNN, Decision Trees, and Random Forest algorithms from scratch.",
    languages: ["Python", "A.I.", "Supervised Learning", "Sci-kit"],
    link: "https://github.com/ameerghazal/ML-Supervised-Learning",
  },
];
