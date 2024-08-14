import Image from "next/image";
import React from "react";
import { lifestyle } from "@/data";
import { MotionValue, motion, useTransform } from "framer-motion";
import Skill from "../ui/Skill";
import { ISkill } from "@/data/interface";

/**
 * Displays the lifestyle section with a smooth parallax effect as the user scrolls.
 * Highlights lifestyle-related content and technologies being studied.
 * @param {MotionValue<number>} scrollYProgress - The vertical scroll progress, used to create the parallax effect for the section.
 * @returns {React.ReactElement} A section element that displays lifestyle content with a parallax effect.
 * @author Ameer Ghazal
 */
const Lifestyle = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}): React.ReactElement => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]); // Animation. Takes a value and maps a range to the value. Reduce scale by 20% based on progress.

  return (
    <motion.section
      style={{ scale }}
      id="lifestyle"
      className="h-fit mx-auto flex flex-col justify-center gap-6 max-w-screen-mxl p-10"
    >
      <h2 className="text-textColor font-medium text-left 2xl:text-8xl xl:text-7xl s:text-6xl text-5xl pt-10">
        lifestyle
      </h2>
      <div className="flex lg:flex-row flex-col gap-20">
        <div className="flex flex-col gap-6 lg:w-2/3 w-full 2xl:text-3xl s:text-2xl text-xl">
          {lifestyle.bulletPoints.map((point: string, index: number) => (
            <p
              key={`life-${index}`}
              className="font-normal p-0 m-0 text-textColor"
            >
              {point}
            </p>
          ))}
          <p>Here are some technologies I have been studying with:</p>
          <ul className="grid ms:grid-cols-2 grid-cols-1 gap-2 max-w-[450px]">
            {lifestyle.skills.map((skill: ISkill, index: number) => (
              <li
                className="flex items-center gap-2 font-normal text-textColor"
                key={`${skill.skill}-${index}`}
              >
                <Skill icon={skill.icon} skill={skill.skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/lifestyle/hacklahoma_solo_b.svg"
            alt="Headshot."
            className="rounded-lg 2xl:max-w-[100%] max-w-[75%] h-full object-cover hover:-translate-y-2 hover:-translate-x-2 transform duration-300"
            width={400}
            height={400}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Lifestyle;
