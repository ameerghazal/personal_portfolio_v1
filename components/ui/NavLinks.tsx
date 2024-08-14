import { INavItem } from "@/data/interface";

/**
 * Navigation links for the nav-bar.
 * This component renders a button that, when clicked, smoothly scrolls to a specific section of the page.
 * @param {string} href - The location of the specific section, represented as a string starting with a '#' symbol (e.g., `#section-id`).
 * @param {string} title - The title for the specific section. This is the text that will be displayed on the button.
 * @param {boolean} [mobile] - Optional parameter to include spacing for a bottom border on mobile navigation menus. When true, adds margin at the bottom for better mobile styling.
 * @returns {React.ReactElement} A button element with an `onClick` handler that scrolls smoothly to the specified section of the page.
 * @author Ameer Ghazal
 */
const NavLinks = ({ href, title, mobile }: INavItem): React.ReactElement => {
  /**
   * Smooth scrolls to the section.
   */
  const handleClick = (): void => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`block font-medium rounded text-textColor hover:text-tertiary active:text-tertiary ${
        mobile && "xs:mb-6 mb-2"
      } transition-all ease-in-out duration-800`}
    >
      {title}
    </button>
  );
};

export default NavLinks;
