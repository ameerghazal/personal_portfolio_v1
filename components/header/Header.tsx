import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";
import { navItems, navMedia } from "@/data";
import React from "react";
import { INavItem, INavMedia } from "@/data/interface";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = (): React.JSX.Element => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeInOut" };
  return (
    <header>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10 p-4 bg-primaryColor shadow-md">
        <div className="flex container justify-between items-center">
          {/* Name / or logo. */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.2 }}
            className="hidden xs:block title"
          >
            <Link
              href="#top"
              className="sm:text-xs lg:text-3xl font-semibold text-textColor hover:text-tertiary transition-all ease-in-out duration-800"
            >
              AMEER
            </Link>
          </motion.div>
          {/* Desktop Navigation bar. */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.4 }}
            className="hidden md:block"
          >
            {/* Navigation */}
            <ul className="flex gap-4 items-center">
              {
                // Map each section name to the relevant nav link.
                navItems.map((link: INavItem, index: number) => {
                  return (
                    <motion.li
                      key={index}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{
                        ...transition,
                        delay: 0.4 + (index + 1) * 0.2,
                      }}
                    >
                      <NavLinks href={link.path} title={link.title} />
                    </motion.li>
                  );
                })
              }
            </ul>
          </motion.div>
          {/* Social media bar navigation. */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.6 }}
            className="justify-end"
          >
            <ul className="flex items-center gap-1.5">
              {
                // Map each section name to the relevant nav link.
                navMedia.map((social: INavMedia, index: number) => {
                  return (
                    <motion.li
                      key={index}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{
                        ...transition,
                        delay: 0.6 + (index + 1) * 0.2,
                      }}
                    >
                      <a
                        href={social.link}
                        className="text-textColor hover:text-tertiary transition-all ease-in-out duration-800"
                        target="_blank"
                      >
                        {social.fragment}
                      </a>
                    </motion.li>
                  );
                })
              }
            </ul>
          </motion.div> */}

          {/* Mobile Navigation, hamburger menu screen. */}
          <div className="flex items-center justify-center md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
