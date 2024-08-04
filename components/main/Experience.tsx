import { activities as experiences } from "@/data";
import React from "react";
import { IActivity, IExperience } from "@/data/interface";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = (): React.JSX.Element => {
  const [selectedExperience, setSelectedExperience] = React.useState<number>(0);
  const [hoveredExperience, setHoveredExperience] = React.useState<
    number | null
  >(0);
  const container = React.useRef<HTMLDivElement | null>(null);
  const contentContainer = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    let offset = 0;
    if (
      container.current?.offsetHeight &&
      contentContainer.current?.offsetHeight
    ) {
      offset =
        container.current.offsetHeight -
        contentContainer.current.offsetHeight +
        72;
    }

    // end: bottom center, means when the bottom of the end trigger hits the center of the scroller.
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: contentContainer.current,
        start: "top 84px",
        end: () => `bottom ${offset + 72}px`,
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="grid items-center w-full mx-auto justify-center gap-8 h-full mt-48"
    >
      <h2 className="text-right text-8xl text-textColor font-semibold">
        experiences
      </h2>
      <div ref={container} className="flex gap-24 w-full">
        <div
          ref={contentContainer}
          className="flex flex-col gap-8 max-w-md relative h-fit"
        >
          <Image
            src={experiences[selectedExperience].src}
            alt={experiences[selectedExperience].alt}
            width={500}
            height={500}
            priority
            className="object-cover rounded-lg"
          />
          <div>
            <h3 className="text-5xl font-semibold mb-2">
              {experiences[selectedExperience].title}
            </h3>
            <span className="text-3xl w-full break-words">
              {experiences[selectedExperience].content}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-16 relative mt-24 h-full">
          {experiences.map((experience: IActivity, i: number) => (
            <div
              key={i}
              className="w-full text-white flex justify-end uppercase text-6xl border-b-white border-b-[1px]"
            >
              <h2
                onMouseOver={() => {
                  setSelectedExperience(i);
                  setHoveredExperience(i);
                }}
                className={`m-0 text-8xl cursor-pointer w-fit mb-[1.25rem] transition-all duration-200 ease-out ${
                  hoveredExperience !== i ? "text-white" : "text-tertiary"
                } `}
              >
                {experience.club}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
