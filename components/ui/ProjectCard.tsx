import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";
import { IProject } from "@/data/interface";

const ProjectCard: React.FC<IProject> = ({
  title,
  description,
  languages,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full rounded-lg p-7 flex flex-col justify-center gap-6 border-2 border-transparent hover:-translate-y-2 hover:border-tertiary transition-transform transition-border duration-300 ease-in-out group">
        <header>
          <div className="flex justify-between">
            <h3 className="text-xl text-[#eaddcf] font-semibold tracking-wide">
              {title}
            </h3>
            <IconBrandGithub className="group-hover:text-tertiary group-hover:fill-tertiary" />
          </div>
          <p className="text-sm  mt-3">{description}</p>
        </header>
        <footer>
          <ul className="text-xs text-tertiary flex items-center gap-1 justify-between flex-wrap">
            {languages.map((language: string, index: number) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </footer>
      </div>
    </a>
  );
};

export default ProjectCard;
