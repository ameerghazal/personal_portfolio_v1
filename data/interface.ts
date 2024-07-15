import { ReactElement } from "react";

export interface INavItem {
  path: string;
  title: string;
}

export interface INavMedia {
  name: string;
  fragment: ReactElement;
  height: number;
  width: number;
  link?: string;
}

export interface IExperienceItem {
  title: string;
  company: string;
  dates: string;
  bulletPoints: string[];
}

export interface IActivity {
  classNames: string;
  club: string;
  href: string;
  src: string;
  alt: string;
  title: string;
  content: string[];
  imgStyles?: string;
  headerSize: string;
  descriptionSize: string;
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
  languages: string[];
  link: string;
}
