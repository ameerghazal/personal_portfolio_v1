import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { navItems, navMedia } from "@/data";
import { INavItem, INavMedia } from "@/data/interface";
import NavLinks from "../header/NavLinks";
import MagneticSocial from "../ui/MagneticSocial";
import Link from "next/link";

const Footer = (): React.JSX.Element => {
  const container = React.useRef<HTMLElement | null>(null);
  const texts = React.useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Track the scrolling.
  React.useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        if (text) {
          text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <footer ref={container}>
      <svg className="w-full" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-xs uppercase fill-[#eaddcf]">
          {[...Array(4)].map((_, i) => {
            return (
              <textPath
                href="#curve"
                ref={(ref) => {
                  texts.current[i] = ref;
                }}
                key={i}
              >
                So, let&apos;s connect?
              </textPath>
            );
          })}
        </text>
      </svg>
      <Content scrollYProgress={scrollYProgress} />
    </footer>
  );
};

const Content = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // Parallax.
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div className="h-[400px] overflow-hidden bg-primaryColor">
      <motion.div
        style={{ y }}
        className="h-full flex flex-col items-center justify-center gap-5"
      >
        <div className="flex gap-40">
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="font-bold text-3xl">Run it back</h3>
            <ul className="flex flex-col gap-2 items-center">
              {navItems.map((link: INavItem, index: number) => (
                <li key={index}>
                  <NavLinks href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="font-bold text-3xl">Socials</h3>
            <ul className="flex gap-2 items-center">
              {navMedia.map((social: INavMedia, i: number) => (
                <li key={i}>
                  <MagneticSocial>
                    <Link
                      href={social.link}
                      target="_blank"
                      className="text-textColor hover:text-tertiary transition-all ease-in-out duration-800"
                    >
                      {social.fragment}
                    </Link>
                  </MagneticSocial>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center py-8 bg-primaryColor">
          <span className="xs:text-xs md:text-xs lg:text-base text-white text-center">
            Built in Next.js, with TailwindCSS and TypeScript. Framer motion and
            GSAP for the animations. Minor Figma documentation. <br />
            Created by Ameer Ghazal. All rights reserved. &copy;
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
