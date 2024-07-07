import { navMedia } from "@/data";
import { INavMedia } from "@/data/interface";
import Image from "next/image";
import CodeBlock from "../ui/CodeBlock";
import React from "react";

const Hero = (): React.JSX.Element => {
  return (
    <section id="hero" className="flex items-center gap-20 mt-24">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center">
          <h1 className="p-0 m-0 font-bold text-4xl text-center">
            Hello, my name is
            <br /> Ameer Ghazal.
          </h1>
          <span className="text-xl text-[#ADB7BE]">Let&apos;s connect.</span>
        </div>
        <div className="flex gap-10 justify-center items-center w-full">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            <Image
              src="/headshot.jpg"
              alt="Headshot."
              className="object-cover w-full h-full"
              width={300}
              height={300}
            />
          </div>
          <div>
            <ul className="flex flex-col items-center gap-1.5">
              {
                // Map each section name to the relevant nav link.
                navMedia.map((social: INavMedia, index: number) => {
                  return (
                    <li key={index}>
                      <a href={social.link} target="_blank">
                        <Image
                          key={social.name}
                          src={social.src}
                          alt={social.name}
                          width={social.width}
                          height={social.height}
                        />
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <CodeBlock />
    </section>
  );
};

export default Hero;
