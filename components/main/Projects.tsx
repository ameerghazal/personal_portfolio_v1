import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { IProject } from "@/data/interface";
import { projects } from "@/data";
import { useScroll, useTransform, motion } from "framer-motion";
import { easeInOut } from "framer-motion";

/**
 * This component displays a projects section featuring a horizontal parallax effect.
 * It showcases individual project cards in a horizontally scrolling view that moves as the user scrolls down the page.
 * @returns {React.ReactElement} A section containing the horizontally scrolling project cards.
 * @author Ameer Ghazal
 */
const Projects = (): React.ReactElement => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const x = useTransform(scrollYProgress, [0.2, 1], ["2.5%", "-80%"], {
    ease: easeInOut,
  });

  return (
    <section
      ref={container}
      id="projects"
      className="relative h-[200vh] flex flex-col gap-6 bg-primaryColor"
    >
      <h2 className="text-left 2xl:text-9xl xl:text-7xl lg:text-6xl xs:text-5xl text-4xl text-textColor font-medium pl-16 pt-20">
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
