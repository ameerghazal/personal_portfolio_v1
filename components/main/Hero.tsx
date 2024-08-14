import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { slideInFromLeft } from "@/utils/motion";

/**
 * This component displays the hero section of the page with smooth scrolling and transitions.
 * It includes a typewriter animation that cycles through different phrases.
 * @param {MotionValue<number>} scrollYProgress - The scroll progress value from the parent, used to scale the section.
 * @returns {React.ReactElement} The hero section with animations and a typewriter effect.
 * @author Ameer Ghazal
 */
const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}): React.ReactElement => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.section style={{ scale }} id="hero">
      <div className="flex  justify-center items-center h-[80vh] px-10 mx-auto">
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.5)}
        >
          <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl xs:text-5xl text-4xl">
            Hey, I&apos;m Ameer Ghazal, and I like <br></br>{" "}
            <TypeAnimation
              sequence={[
                "challenging myself to new levels.",
                2000,
                "building large scale projects.",
                2000,
                "hanging with friends.",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </h1>
          <span className="2xl:text-3xl xl:text-2xl text-xl font-normal text-textGray ">
            I&apos;m a student of the University of Oklahoma, studying Computer
            Science and Mathematics.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
