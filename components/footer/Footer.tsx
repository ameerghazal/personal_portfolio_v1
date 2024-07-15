import React from "react";

const Footer = (): React.JSX.Element => {
  return (
    <footer>
      <div className="flex items-center justify-center py-8 bg-primaryColor pt-24">
        <span className="xs:text-xs md:text-xs lg:text-xs text-white">
          Built in Next.js, with TailwindCSS and Typescript. Minor Figma
          documentation. Created by Ameer Ghazal. All rights reserved. &copy;
        </span>
      </div>
    </footer>
  );
};

export default Footer;
