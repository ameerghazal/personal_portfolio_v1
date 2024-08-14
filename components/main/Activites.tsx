import { activities } from "@/data";
import React from "react";
import { IActivity } from "@/data/interface";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * This component displays a section featuring various clubs, each represented by hoverable cards.
 * It includes an image and details for the currently selected activity and a list of all activities.
 * @returns {React.ReactElement} The activities section with interactive hover effects and content display.
 * @author Ameer Ghazal
 */
const Activites = (): React.ReactElement => {
  const [selectedActivity, setSelectedActivity] = React.useState<number>(0);
  const [hoveredActivity, setHoveredActivity] = React.useState<number | null>(
    0
  );

  /**
   * Updates the selected activity and hover state.
   * @param i - index of the selected state in the different activity cards.
   */
  const handleHover = (i: number): void => {
    setSelectedActivity(i);
    setHoveredActivity(i);
  };

  return (
    <section id="activites" className="px-10 bg-primaryColor">
      <div className="grid items-center justify-center container gap-8 h-full">
        <h2 className="2xl:text-9xl xl:text-7xl s:text-6xl xs:text-5xl text-4xl text-textColor font-medium text-right pt-20">
          activites
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-center gap-20 w-full mb-32">
          <motion.div className="sticky flex flex-col gap-8 w-4/5 h-fit">
            <Image
              src={activities[selectedActivity].img.src}
              alt={activities[selectedActivity].img.alt}
              width={activities[selectedActivity].img.width}
              height={activities[selectedActivity].img.height}
              className="object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="2xl:text-5xl xl:text-3xl mxl:text-2xl lg:text-xl xs:text-lg text-base font-medium">
                {activities[selectedActivity].title} @{" "}
                {activities[selectedActivity].club}
              </h3>
              <p className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg xs:text-base text-sm w-full font-light">
                {activities[selectedActivity].content}
              </p>
              <Link
                target="_blank"
                className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg s:text-base text-sm hover:text-tertiary active:text-textColor transition-all duration-150 ease-linear w-fit"
                href={activities[selectedActivity].href}
              >
                {activities[selectedActivity].linkDescription} &rarr;
              </Link>
            </div>
          </motion.div>

          <ul className="flex flex-col gap-16 relative md:mt-24 mt-0 w-3/5">
            {activities.map((activity: IActivity, i: number) => (
              <li
                key={activity.club}
                className=" w-full text-textColor flex s:justify-end justify-center uppercase border-b-white border-b-[1px]"
              >
                <h2
                  onMouseOver={() => handleHover(i)}
                  className={`m-0 2xl:text-8xl xl:text-6xl mxl:text-5xl lg:text-4xl md:text-3xl s:text-2xl text-lg cursor-pointer w-fit mb-[1.25rem] transition-all duration-200 ease-out ${
                    hoveredActivity !== i ? "text-white" : "text-tertiary"
                  } `}
                >
                  {activity.club}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Activites;
