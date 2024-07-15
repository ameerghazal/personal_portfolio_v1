import React from "react";
import SectionHeadings from "../ui/SectionHeadings";
import ProjectCard from "../ui/ProjectCard";
import { IProject } from "@/data/interface";
import { projects } from "@/data";

const Projects = (): React.JSX.Element => {
  return (
    <section id="projects" className="max-w-5xl ">
      <SectionHeadings heading={"Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: IProject, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
