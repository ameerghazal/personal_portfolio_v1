import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { IProject } from "@/data/interface";
import { projects } from "@/data";
import { useScroll, useTransform, motion } from "framer-motion";

const Projects = (): React.JSX.Element => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const x = useTransform(scrollYProgress, [0.05, 1], ["2.5%", "-75%"], {
    // ease: circInOut,
  });

  return (
    <section
      ref={container}
      id="projects"
      className="relative h-[200vh] flex flex-col"
    >
      <h2 className="text-right text-9xl text-textColor font-semibold px-[5rem]">
        projects
      </h2>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 w-[300vw]">
          {projects.map((project: IProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
