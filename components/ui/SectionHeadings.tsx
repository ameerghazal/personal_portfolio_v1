import React from "react";

/**
 * General section heading component.
 * @param {*} heading name of the heading.
 * @returns general section heading.
 * @author Ameer Ghazal
 */
const SectionHeadings = ({
  heading,
}: {
  heading: string;
}): React.JSX.Element => {
  return (
    <div className="flex items-center mt-24 mb-8">
      <span className="font-semibold text-4xl text-[#eaddcf] after:bg-[#eaddcf]">
        {heading}
      </span>
      <div className="border-t ml-4 w-[300px] h-[1px] border-[#eaddcf]"></div>
    </div>
  );
};

export default SectionHeadings;
