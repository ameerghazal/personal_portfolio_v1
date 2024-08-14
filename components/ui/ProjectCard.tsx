import React from "react";
import { IProject } from "@/data/interface";
import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

/**
 * This component represents a card for each project in a horizontal scroll section.
 * It displays the project’s image, title, description, technologies, and a link to the project, which includes a GitHub icon.
 * @param {IProject} project - The project object containing details such as the image, link, title, description, and technologies used.
 * @returns {React.ReactElement} A styled project card displaying the project information, with a link to the project's external page.
 * @author Ameer Ghazal
 */
const ProjectCard = ({
  project,
}: {
  project: IProject;
}): React.ReactElement => {
  const container = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={container} className="flex flex-col gap-4">
      <div className="md:h-full md:w-full">
        <Image
          src={project.img}
          width={400}
          height={400}
          alt={project.alt}
          className="max-w-none lg:h-[400px] lg:w-[400px] s:h-[250px] s:w-[250px] h-[150px] w-[150px]"
        />
      </div>
      <Link href={project.link} target="_blank">
        <div className="flex flex-col gap-4 items-start justify-start group transition-all duration-200">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-bold lg:text-4xl md:text-2xl s:text-xl mxs:text-lg text-textColor">
              {project.title}
            </h3>
            <IconBrandGithub className="group-hover:fill-[#f4c095] group-hover:text-tertiary" />
          </div>
          <p className="font-normal lg:text-2xl md:text-xl s:text-lg text-base">
            {project.description}
          </p>
          <span className="text-textGray lg:text-xl s:text-sm text-xs">
            {project.technologies.join(", ")}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
