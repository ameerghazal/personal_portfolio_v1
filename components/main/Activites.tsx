import SectionHeadings from "../ui/SectionHeadings";
import BentoGrid from "../ui/BentoGrid";
import React from "react";

/**
 * Activites section, featuring the clubs and organizations I am apart of.
 * @returns activities section.
 */
const Activities = (): React.JSX.Element => {
  return (
    <section id="activites" className="max-w-5xl ">
      <SectionHeadings heading={"Activites"} />
      <BentoGrid />
    </section>
  );
};

export default Activities;
