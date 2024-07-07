import SectionHeadings from "../ui/SectionHeadings";
import Tabs from "../ui/ExperienceTabs";
import { experiences } from "@/data";
import React from "react";

/**
 * Experience section, featuring work experience.
 * @returns experience section.
 */
const Experience = (): React.JSX.Element => {
  return (
    <section id="experience" className="max-w-5xl pt-4">
      <SectionHeadings heading={"Experience"} />
      <Tabs items={experiences} />
    </section>
  );
};

export default Experience;
