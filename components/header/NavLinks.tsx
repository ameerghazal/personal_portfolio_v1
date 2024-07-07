import Link from "next/link";

interface INavLinks {
  href: string;
  title: string;
}

/**
 * Navigation links for the nav-bar.
 * @param {*} href: location for the specific section.
 * @param {*} title: title for the specific section.
 * @returns link element.
 */
const NavLinks: React.FC<INavLinks> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-sm lg:text-base rounded md:p-0 hover:text-white active:text-white transition-all ease-in-out duration-800"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
