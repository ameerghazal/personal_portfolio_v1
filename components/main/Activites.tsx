import React from "react";
import { activities } from "@/data";
import ScrollCard from "../ui/ScrollCard";
import { IActivity } from "@/data/interface";
import { useScroll } from "framer-motion";

const Activities = (): React.JSX.Element => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} id="activites" className="m-48">
      <div className="flex flex-col justify-center items-start w-fit mx-auto">
        <h2 className="text-left text-8xl text-textColor font-semibold">
          activites
        </h2>
        {activities.map((activity: IActivity, index: number) => {
          const targetScale = 1 - (activities.length - index) * 0.05;
          return (
            <ScrollCard
              key={`p_${index}`}
              i={index}
              activity={activity}
              progress={scrollYProgress}
              range={[index * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
