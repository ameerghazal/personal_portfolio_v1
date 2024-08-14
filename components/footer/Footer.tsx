import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { navItems, navMedia } from "@/data";
import { INavItem, INavMedia } from "@/data/interface";
import NavLinks from "../ui/NavLinks";
import MagneticSocial from "../ui/MagneticSocial";
import Link from "next/link";

/**
 * A sticky footer that includes an SVG element for visual effects and a section with navigational links and social media links.
 * The SVG element animates based on scroll progress, and the footer appears from the bottom of the page once scrolled past the SVG.
 * @returns {React.ReactElement} The sticky footer component.
 * @author Ameer Ghazal
 */
const Footer = (): React.ReactElement => {
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
      <svg className="py-20 bg-primaryColor w-full h-auto" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-xs uppercase fill-textColor">
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

/**
 * This component of the footer features animated scroll effects and displaying navigational and social media links.
 * @param {MotionValue<number>} scrollYProgress - The scroll progress of the page, used to adjust animations.
 * @returns {React.ReactElement} The footer content with animated scroll effects.
 */
const Content = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}): React.ReactElement => {
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div className="h-[500px] overflow-hidden bg-primaryColor">
      <motion.div
        style={{ y }}
        className="h-full flex flex-col items-center justify-center gap-5"
      >
        <div className="flex md:gap-40 s:gap-20 gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="font-bold lg:text-3xl md:text-2xl text-xl">
              Run it back
            </h3>
            <ul className="flex flex-col gap-2 items-center">
              {navItems.map((link: INavItem, index: number) => (
                <li key={index} className="lg:text-2xl md:text-xl text-lg">
                  <MagneticSocial>
                    <NavLinks href={link.href} title={link.title} />
                  </MagneticSocial>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="font-bold lg:text-3xl md:text-2xl text-xl">
              Socials
            </h3>
            <ul className="flex ms:flex-row flex-col gap-2 items-center">
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

        <div className="flex items-center justify-center pt-8 px-8 bg-primaryColor">
          <span className="lg:text-xl md:text-lg text-base text-textGray text-center">
            Created by Ameer Ghazal. All rights reserved. &copy;
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
