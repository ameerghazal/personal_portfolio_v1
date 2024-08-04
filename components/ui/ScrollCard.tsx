import { IActivity } from "@/data/interface";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ScrollCard = ({
  activity,
  progress,
  range,
  targetScale,
  i,
}: {
  activity: IActivity;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
}) => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Store the transform for the image scaling.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col items-start justify-center gap-20 sticky top-[5rem]"
    >
      <motion.div
        className="flex flex-col relative top-[-25%] h-[750px] w-[1250px] rounded-[1.5rem] p-[50px] origin-top"
        style={{
          background: activity.backgroundColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="flex h-full pt-[25px] gap-[50px]">
          <div className="w-[40%] relative top-[10%]">
            <h2 className="m-0 text-6xl font-bold mb-[1rem]">
              {activity.club}
            </h2>
            <p className="text-3xl mb-[1rem]">
              <span className="text-4xl font-semibold">{activity.title} </span>
              {activity.content}
            </p>
            <Link
              target="_blank"
              className="text-3xl hover:text-tertiary active:text-textColor transition-all duration-150 ease-linear"
              href={activity.href}
            >
              {activity.linkDescription} &rarr;
            </Link>
          </div>

          <div className="relative w-[60%] rounded-[1.5rem] overflow-hidden h-full">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={activity.src}
                alt={activity.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollCard;
