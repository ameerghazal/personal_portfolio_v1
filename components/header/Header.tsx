import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";
import { navItems, navMedia } from "@/data";
import React from "react";
import { INavItem, INavMedia } from "@/data/interface";

/**
 * Header for the page, featuring the desktop and mobile navigation systems.
 * @returns header.
 */
const Header = (): React.JSX.Element => {
  return (
    <header>
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10 p-4 bg-[#242526]">
        <div className="flex container justify-between items-center">
          {/* Name / or logo. */}
          <div className="hidden xs:block title">
            <a
              href="#top"
              className="sm:text-xs md:text-base lg:text-lg text-white hover:opacity-55 active:opacity-55 transition-all ease-in-out duration-800"
            >
              Ameer Ghazal
            </a>
          </div>
          {/* Desktop Navigation bar. */}
          <div className="hidden md:block links_menu">
            {/* Navigation */}
            <ul className="flex gap-4 items-center">
              {
                // Map each section name to the relevant nav link.
                navItems.map((link: INavItem, index: number) => {
                  return (
                    <li key={index}>
                      <NavLinks href={link.path} title={link.title} />
                    </li>
                  );
                })
              }
            </ul>
          </div>
          {/* Social media bar navigation. */}
          <div className="media_menu justify-end">
            <ul className="flex items-center gap-1.5">
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
