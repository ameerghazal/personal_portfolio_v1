import { MotionValue } from "framer-motion";
import { ReactElement } from "react";

export interface INavItem {
  path: string;
  title: string;
}

export interface INavMedia {
  name: string;
  fragment: ReactElement;
  link: string;
}

export interface IExperience {
  title: string;
  company: string;
  dates: string;
  bulletPoints: string[];
  img?: string;
}

export interface IActivity {
  club: string;
  href: string;
  src: string;
  alt: string;
  title: string;
  content: string;
  linkDescription: string;
  imgStyles?: string;
  headerSize: string;
  descriptionSize: string;
  backgroundColor: string;
  textColor: string;
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
