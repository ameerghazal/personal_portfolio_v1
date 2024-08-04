import React from "react";
import { IProject } from "@/data/interface";
import Link from "next/link";
import Image from "next/image";

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  const container = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={container} className="flex flex-col gap-4">
      <div className="h-full w-full">
        <Image
          src={project.img}
          width={400}
          height={400}
          alt={project.alt}
          className="max-w-none h-full"
        />
      </div>
      <div className="flex flex-col gap-4 items-start justify-start">
        <h3 className="font-bold text-4xl text-textColor">{project.title}</h3>
        <p className="font-medium text-3xl">{project.description}</p>
        <span className="text-tertiary text-2xl">
          {project.technologies.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
