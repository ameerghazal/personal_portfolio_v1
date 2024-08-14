import React from "react";
import { experiences } from "@/data";
import ScrollCard from "../ui/ScrollCard";
import { IExperience } from "@/data/interface";
import { useScroll } from "framer-motion";

/**
 * This component renders a section displaying a list of experiences, with each experience presented on a scrollable card.
 * The component leverages Framer Motion's `useScroll` hook to track the scroll progress and applies scaling effects to the cards as the user scrolls.
 * @returns {React.ReactElement} The experiences section with scrollable cards.
 * @author Ameer Ghazal
 */
const Experiences = (): React.ReactElement => {
  const container = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} id="experiences" className="bg-primaryColor">
      <div className="flex flex-col justify-center gap-6 s:items-start items-center w-fit mx-auto px-5">
        <h2 className="s:text-left text-center 2xl:text-9xl xl:text-7xl s:text-6xl xs:text-5xl text-4xl pt-20 s:pb-0 pb-20 text-textColor font-medium">
          experiences
        </h2>
        {experiences.map((experience: IExperience, index: number) => {
          const targetScale = 1 - (experiences.length - index) * 0.05;
          return (
            <ScrollCard
              key={`p_${index}`}
              i={index}
              experience={experience}
              progress={scrollYProgress}
              range={[index * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
