import Image from "next/image";
import React from "react";
import { lifestyle } from "@/data";
import { MotionValue, motion, useTransform } from "framer-motion";

const Lifestyle = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}): React.JSX.Element => {
  // Animation. Takes a value and maps a range to the value. Reduce scale by 20% based on progress.
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.section
      style={{ scale }}
      id="lifestyle"
      className="flex flex-col gap-16 h-screen"
    >
      <div
        className="flex flex-row justify-center gap-20 mt-36
       items-center"
      >
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/hacklahoma_solo.jpg"
            alt="Headshot."
            className="object-cover"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-6 place-content-center w-1/2">
          <h2 className="xl:text-8xl lg:text-6xl text-left text-textColor font-semibold">
            lifestyle
          </h2>
          {lifestyle.map((point: string, index: number) => (
            <p
              key={index}
              className="xl:text-3xl lg:text-2xl font-medium m-0 p-0 leading-[3rem]"
            >
              {point}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Lifestyle;
