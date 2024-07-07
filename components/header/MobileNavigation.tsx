"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import { navItems } from "@/data";
import { INavItem } from "@/data/interface";

const MobileNavigation = (): React.JSX.Element => {
  // State to check if the nav bar is open or not for the smaller screens.
  const [navBarOpen, setNavBarOpen] = useState<Boolean>(false);

  return (
    <div>
      {/* Below is the mobile menu, which is hidden for large screens. */}
      <div className="moblie-menu block md:hidden">
        <button
          onClick={() => setNavBarOpen(!navBarOpen)}
          className="flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white"
        >
          {navBarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>
      <ul
        className={`md:hidden flex flex-col items-center mt-10 gap-3 fixed left-0 w-full h-full bg-[#1B1B1B] bg-opacity-100 z-50 transition-all ease-in-out duration-800 ${
          navBarOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        {navItems.map((link: INavItem, index: number) => (
          <li key={index}>
            <NavLinks href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
