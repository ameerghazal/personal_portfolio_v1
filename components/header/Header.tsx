import React from "react";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "../ui/NavLinks";
import { INavItem } from "@/data/interface";
import { navItems } from "@/data";
import Link from "next/link";

/**
 * This component features the large and mobile navigation menus, with smooth links to different parts of the page.
 * @returns {React.ReactElement} The header component with both large and mobile navigation menus.
 * @author Ameer Ghazal
 */
const Header = (): React.ReactElement => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeInOut" };

  /**
   * Smooth scroll to the top of the screen.
   */
  const handleMainClick = (): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10 p-4 bg-primaryColor shadow-md">
        <div className="flex md:container px-4 justify-between items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.2 }}
          >
            <button
              className="lg:text-3xl md:text-2xl xs:text-xl text-base font-semibold text-textColor hover:text-tertiary transition-all ease-in-out duration-800"
              onClick={handleMainClick}
            >
              <span className="pointer-events-none">{`new AG();`}</span>
            </button>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ...transition, delay: 0.4 }}
            className="md:block hidden"
          >
            <ul className="flex gap-4 items-center">
              {navItems.map((link: INavItem, index: number) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{
                    ...transition,
                    delay: 0.4 + (index + 1) * 0.2,
                  }}
                  className="mxl:text-2xl lg:text-xl text-lg"
                >
                  <NavLinks href={link.href} title={link.title} />
                </motion.li>
              ))}
              <Link
                href="/Ameer_Resume_Curr.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-2 pt-1 py-2 text-textColor font-medium hover:bg-tertiary hover:text-primaryColor active:bg-tertiary active:text-primaryColor hover:border-tertiary active:border-tertiary border-textColor transition-all duration-200 border-[2px] rounded-2xl mxl:text-2xl lg:text-xl text-lg">
                  resume
                </button>
              </Link>
            </ul>
          </motion.div>
          <div className="flex items-center justify-center md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
