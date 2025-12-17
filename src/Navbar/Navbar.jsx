import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "education" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  // Change background on scroll
  const changeBackGround = (scrollTop) => setNavbar(scrollTop >= 80);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    const handleScroll = () => {
      changeBackGround(scrollContainer.scrollTop);
    };
    if (scrollContainer) scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollContainer) scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false);
    }
  };

  return (
    <motion.div
      className={`fixed w-full z-50 px-4 py-3 md:h-20 transition-all duration-300 ${
        navbar
          ? theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg rounded-b-md"
            : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow-lg rounded-b-md"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center my-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className={`text-2xl md:text-4xl font-bold font-signature my-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Shafaet <span className="text-blue-400">Hossain</span>
          </h1>

          {/* Theme Toggle Button */}
        
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ml-8">
            <button
            onClick={toggleTheme}
            className={`ml-4 flex items-center px-3 py-1 rounded-full border transition duration-300 ${
              theme === "dark"
                ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            {theme === "dark" ? (
              <>
                <FaSun className="mr-2" /> Light Mode
              </>
            ) : (
              <>
                <FaMoon className="mr-2" /> Dark Mode
              </>
            )}
          </button>
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              className={`capitalize font-medium cursor-pointer transition-transform duration-200 ${
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-500"
              }`}
              onClick={() => handleScrollToSection(link)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className={`cursor-pointer md:hidden ml-8 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          className={`flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
              : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              className={`py-6 text-2xl font-medium capitalize cursor-pointer transition-transform duration-200 ${
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-500"
              }`}
              onClick={() => handleScrollToSection(link)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Navbar;
