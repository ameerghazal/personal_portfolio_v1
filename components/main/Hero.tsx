import React, { useRef } from "react";
import { MotionValue, motion, useInView, useTransform } from "framer-motion";

const phrases = ["HEY, I'M AMEER!", "HEY, I'M أمير!", "HEY, I'M アミール!"];

const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}): React.JSX.Element => {
  // Animation. Takes a value and maps a range to the value. Reduce scale by 20% based on progress.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -7]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="bg-primaryColor"
      id="hero"
    >
      <div className="flex gap-40 justify-center items-center h-screen">
        <MaskText />

        {/* <div className="grid grid-rows-3 grid-cols-3 gap-6 w-full px-20 items-center">
          <h1 className="text-9xl font-semibold text-textColor row-start-1 col-span-2 justify-self-start">
            HEY, I&apos;M AMEER!
          </h1>
          <span className="text-lg row-start-1 col-start-3 justify-self-end">
            Computer Science Junior at OU.
          </span>
          <h1
            className="text-9xl font-semibold text-textColor justify-self-center row-start-2 col-span-full"
            // style={{ color: "transparent", WebkitTextStroke: "1px white" }}
          >
            HEY, I&apos;M أمير!
          </h1>
          <h1 className="text-9xl font-semibold text-textColor row-start-3 col-span-full justify-self-end ">
            HEY, I&apos;M アミール!
          </h1>
        </div> */}
      </div>
    </motion.section>
  );
};

export function MaskText() {
  const body = useRef(null);
  // When we are within 75% of the vh
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 1.0,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className="flex flex-col gap-6">
      {phrases.map((phrase: string, i: number) => (
        <motion.h1
          key={i}
          custom={i}
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
          className=" xl:text-9xl lg:text-8xl font-semibold text-textColor overflow-hidden"
        >
          {phrase}
        </motion.h1>
      ))}
    </div>
  );
}

export default Hero;
