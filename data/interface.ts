import { MotionValue } from "framer-motion";
import { ReactElement } from "react";

export interface INavItem {
  href: string;
  title: string;
  mobile?: boolean;
}

export interface INavMedia {
  name: string;
  fragment: ReactElement;
  link: string;
}

export interface ILifestyle {
  bulletPoints: string[];
  skills: ISkill[];
}

export interface IExperience {
  title: string;
  company: string;
  dates: string;
  bulletPoints: string[];
  stack: string[];
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  backgroundColor: string;
}

export interface IActivity {
  club: string;
  href: string;
  title: string;
  content: string;
  linkDescription: string;
  imgStyles?: string;
  headerSize: string;
  descriptionSize: string;
  backgroundColor: string;
  textColor: string;
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export interface IImageProp {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  img: string;
  alt: string;
}

export interface IPicture {
  src: string;
  alt: string;
  styles: string;
}

export interface ISkill {
  icon: ReactElement;
  skill: string;
}

export interface IScrollCard {
  experience: IExperience;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
}
