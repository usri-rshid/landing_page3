import { useState } from "react";
import logo from "../assets/logo_yr.webp";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="VastuSpaze" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a 
              key={`${link.name}-${index}`} // Better key strategy
              href={link.link}
              className="uppercase text-sm font-medium hover:text-blue-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`
        ${isOpen ? "block" : "hidden"} 
        md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4
      `}>
        {LINKS.map((link, index) => (
          <a 
            key={`${link.name}-${index}`} // Better key strategy
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;