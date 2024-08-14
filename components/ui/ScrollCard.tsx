import { IScrollCard } from "@/data/interface";
import { motion, useTransform } from "framer-motion";
import React from "react";
import Image from "next/image";

/**
 *
 * This is a component that renders an experience card, which scales and positions itself dynamically based on the user's scroll progress.
 * @param {IScrollCard} props - The properties for the ScrollCard component.
 * @param {IExperience} props.experience - The experience data to display in the card, including title, company, dates, bullet points, and stack.
 * @param {MotionValue<number>} props.progress - The scroll progress value from Framer Motion's `useScroll` hook, used to control the card's animations.
 * @param {number[]} props.range - The range of scroll progress over which the card should animate, controlling the scaling effect.
 * @param {number} props.targetScale - The final scale value for the card when it reaches the end of the defined scroll range.
 * @param {number} props.i - The index of the current card, used to offset the card's position slightly.
 *
 * @returns {React.ReactElement} A scrollable experience card with dynamic scaling and positioning based on scroll progress.
 * @author Ameer Ghazal
 */
const ScrollCard = ({
  experience,
  progress,
  range,
  targetScale,
  i,
}: IScrollCard): React.ReactElement => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="md:h-screen h-[80vh] w-full flex flex-col items-start justify-center gap-20 sticky top-[5rem]"
    >
      <motion.div
        className="flex flex-col relative top-[-25%] 2xl:h-[700px] 2xl:w-[1500px] xl:h-[500px] xl:w-[1200px] mxl:h-[550px] mxl:w-[1000px] lg:h-[550px] lg:w-[800px] md:h-[500px] md:w-[600px] s:h-[500px] s:w-[430px] ms:h-[580px] xs:h-fit xs:w-fit rounded-xl p-11 xs:p-10 origin-top"
        style={{
          background: experience.backgroundColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="flex flex-col gap-10 w-full h-full">
          <div className="flex justify-between items-center h-fit w-full">
            <div>
              <h1 className="2xl:text-7xl xl:text-5xl md:text-4xl s:text-xl ms:text-lg font-semibold m-0 p-0">
                {experience.title} @ {experience.company}
              </h1>
              <span className="2xl:text-5xl xl:text-3xl md:text-2xl ms:text-sm text-textGray">
                {experience.dates}
              </span>
            </div>
            <Image
              src={experience.img.src}
              width={experience.img.width}
              height={experience.img.height}
              alt={experience.img.alt}
              className="object-cover lg:w-[20%] lg:block hidden"
            />
          </div>
          <ul className="2xl:text-5xl lg:text-3xl md:text-2xl s:text-lg ms:text-base s:block w-full max-w-[100rem] h-full">
            {experience.bulletPoints.map((point: string, index: number) => (
              <li key={index} className="font-normal mb-4">
                {point}
              </li>
            ))}
          </ul>
          <div className="font-normal 2xl:text-5xl lg:text-2xl s:text-lg ms:text-sm s:block w-full">
            <span className="font-semibold">Stack:</span>{" "}
            {experience.stack.join(", ")}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollCard;
