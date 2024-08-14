import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "../ui/NavLinks";
import { navItems } from "@/data";
import { INavItem } from "@/data/interface";
import Link from "next/link";

/**
 * This component handles the mobile navigation menu, featuring a hamburger icon that toggles the menu open and close.
 * It renders navigation links sourced from the `navItems` dictionary and includes a link to download a resume.
 * The menu is visible only on medium-sized screens and below, with smooth transition effects.
 * @author Ameer Ghazal
 * @returns {React.ReactElement} The mobile navigation menu with toggle functionality and navigation links.
 */
const MobileNavigation = (): React.ReactElement => {
  const [navBarOpen, setNavBarOpen] = React.useState<Boolean>(false);

  /**
   * Updates the nav open/close based on the click.
   */
  const handleNavClick = (): void => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <div>
      <div className="block md:hidden">
        <button
          onClick={handleNavClick}
          className="flex items-center px-3 py-2 text-textColor hover:text-textGray hover:border-textColor"
        >
          {navBarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>
      <ul
        className={`md:hidden flex flex-col items-stretch px-10 pt-10 gap-3 fixed left-0 w-full h-full bg-primaryColor bg-opacity-100 z-50 transition-all ease-in-out duration-800 ${
          navBarOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
        onClick={handleNavClick}
      >
        {navItems.map((link: INavItem, index: number) => (
          <li
            key={`${link}-${index}`}
            className="md:text-5xl xs:text-4xl text-xl border-b-textGray border-b-[2px]"
          >
            <NavLinks href={link.href} title={link.title} mobile />
          </li>
        ))}
        <Link
          href="/Ameer_Resume_Curr.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 pt-2 py-3 text-textColor font-medium hover:bg-tertiary hover:text-primaryColor active:bg-tertiary active:text-primaryColor hover:border-tertiary active:border-tertiary border-textColor transition-all duration-200 border-[2px] rounded-2xl xs:text-2xl text-lg">
            resume
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavigation;
