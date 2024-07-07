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
      <div className="flex flex-row gap-4 justify-between">
        <div className="max-w-3xl place-content-center">
          <p className="text-white text-xl">
            I am a senior <b>Computer Science and Mathematics</b> major at the
            University of Oklahoma. Concurrently, I am a{" "}
            <b>Software Developer Intern at Paycom</b>. Further, I am{" "}
            <b>Artifical Intelligence Researcher</b> at the University of
            Oklahoma.
            <br></br>
            <br></br>
            Aside from tech, I love playing <b>basketball</b>, hanging with
            friends, hiking, watching movies, and <b>traveling the world</b> -
            well, at least in theory, until I get the funds for it ...{" "}
            <b>hopefully</b>.
          </p>
        </div>
        <div className="w-[300px] h-[300px] rounded overflow-hidden">
          <Image
            src="/hacklahoma_solo.jpg"
            alt="Headshot."
            className="object-cover w-full h-full"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
