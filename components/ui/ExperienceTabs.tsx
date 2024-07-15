"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { IExperienceItem } from "@/data/interface";
import React from "react";

/**
 * Component for the different experience tabs.
 * @returns tabbed components.
 * @author Ameer Ghazal
 */
const Tabs = ({ items }: { items: IExperienceItem[] }): React.JSX.Element => {
  const [currTab, setCurrTab] = useState<number>(0);

  return (
    <div className="w-full mt-10 text-white flex flex-col md:flex-row gap-6 max-w-screen-lg">
      {/* <div className="flex flex-row gap-4 text-white text-lg"> */}
      <div>
        <ul className="md:w-50 w-full flex flex-col">
          {/* Display the experience tabs. */}
          {items.map((item: IExperienceItem, index: number) => (
            <li key={index} className="w-full">
              <button
                className="py-1.5 px-5 outline-none w-full flex items-start justify-center"
                onClick={() => setCurrTab(index)}
              >
                <span
                  className={`${
                    currTab === index ? "text-tertiary" : "text-textColor"
                  } hover:text-tertiary active:text-tertiary transition-all ease-in-out duration-800 uppercase w-full flex flex-col items-start justify-center whitespace-nowrap`}
                >
                  {item.company}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display the specific experience, by attaching a hidden class. */}
      {items.map((item: IExperienceItem, index: number) => (
        <div
          key={index}
          className={`w-full ${currTab === index ? "" : "hidden"}`}
        >
          <ExperienceItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;

// #74c095
