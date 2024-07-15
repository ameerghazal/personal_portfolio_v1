import SectionHeadings from "../ui/SectionHeadings";
import Image from "next/image";
import React from "react";

/**
 * Lifestyle 'about me' section.
 * @returns returns the lifestyle section.
 * @author Ameer Ghazal
 */
const Lifestyle = (): React.JSX.Element => {
  return (
    <section id="lifestyle" className="max-w-5xl pt-4">
      <SectionHeadings heading={"Lifestyle"} />
      <div className="flex flex-row gap-6 items-start">
        <div className="place-content-center">
          <p className="text-white text-lg">
            I am a senior{" "}
            <span className="text-textColor font-medium">
              Computer Science and Mathematics
            </span>{" "}
            major at the University of Oklahoma. Concurrently, I am a{" "}
            <span className="text-textColor font-medium">
              Software Developer Intern at Paycom
            </span>
            . Further, I am{" "}
            <span className="text-textColor font-medium">
              Undergraduate Researcher
            </span>{" "}
            at the University of Oklahoma.
            <br></br>
            <br></br>
            Aside from tech, I love playing basketball, hanging with friends,
            hiking, watching movies, and traveling the world - well, at least in
            theory, until I get the funds for it ... hopefully.
          </p>
        </div>
        <div className="w-full h-full rounded overflow-hidden">
          <Image
            src="/hacklahoma_solo.jpg"
            alt="Headshot."
            className="object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
