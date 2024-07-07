import React from "react";

const Footer = (): React.JSX.Element => {
  return (
    <footer>
      <div className="flex items-center justify-center py-8">
        <span className="xs:text-xs md:text-sm lg:text-base text-white">
          Created by Ameer Ghazal.<br></br>
          All rights reserved. &copy;
        </span>
      </div>
    </footer>
  );
};

export default Footer;
