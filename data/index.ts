import { IActivity, IExperienceItem, INavItem, INavMedia } from "./interface";

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
    path: "#projects",
    title: "Projects",
  },
  {
    path: "#activites",
    title: "Activities",
  },
];

export const navMedia: INavMedia[] = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    height: 24,
    width: 24,
    link: "https://www.linkedin.com/in/ameerghazal/",
  },
  {
    name: "GitHub",
    src: "/github.svg",
    height: 24,
    width: 24,
    link: "https://github.com/ameerghazal",
  },
  {
    name: "Discord",
    src: "/discord.svg",
    height: 24,
    width: 24,
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
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
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
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
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
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
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
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
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
      "Largest Hackathon in Oklahoma.",
      "Organize for 170+ students and 20+ companies.",
      "Over $20,000+ raised.",
    ],
  },
];
