"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { IExperienceItem } from "@/data/interface";
import React from "react";

// Underline animation.
const variants: { default: { width: number }; active: { width: string } } = {
  default: { width: 0 },
  active: { width: "calc(100%)" },
};

/**
 * Component for the different experience tabs.
 * @returns tabbed components.
 * @author Ameer Ghazal
 */
const Tabs = ({ items }: { items: IExperienceItem[] }): React.JSX.Element => {
  const [currTab, setCurrTab] = useState<number>(0);

  return (
    <div className="mt-8 text-white flex flex-col gap-6 max-w-screen-lg">
      <div className="flex flex-row gap-4 text-white text-lg">
        {/* Display the experience tabs. */}
        {items.map((item: IExperienceItem, index: number) => (
          <button
            key={index}
            onClick={() => setCurrTab(index)}
            className="outline-none"
          >
            <p
              className={`${
                currTab === index ? "text-white" : "text-[#ADB7BE]"
              } hover:text-white active:text-white transition-all ease-in-out duration-800`}
            >
              {item.company}
            </p>
            <motion.div
              animate={index === currTab ? "active" : "default"}
              variants={variants}
              className="h-1 bg-white mt-2 mr-3"
            ></motion.div>
          </button>
        ))}
      </div>
      {/* Display the specific experience, by attaching a hidden class. */}
      {items.map((item: IExperienceItem, index: number) => (
        <div key={index} className={`${currTab === index ? "" : "hidden"}`}>
          <ExperienceItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
