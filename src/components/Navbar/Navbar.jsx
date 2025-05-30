import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import thLogo from "../../assets/flags/th.png";
import enLogo from "../../assets/flags/en.png";
import khLogo from "../../assets/flags/kh.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about" },
    { id: "skills" },
    { id: "experience" },
    { id: "work" },
    { id: "education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">{t("nickname")}</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">{t("lastname")}</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {t(item.id)}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/jadesadaphon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          {/* Language Switcher */}
          <div className="flex space-x-2 ml-4">
            <button onClick={() => changeLanguage("th")}>
              <img
                src={thLogo}
                alt="TH"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <img
                src={enLogo}
                alt="EN"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </button>
            <button onClick={() => changeLanguage("kh")}>
              <img
                src={khLogo}
                alt="KH"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {t(item.id)}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/jadesadaphon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex space-x-2 ml-4">
              <button onClick={() => changeLanguage("th")}>
                <img
                  src={thLogo}
                  alt="TH"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </button>
              <button onClick={() => changeLanguage("en")}>
                <img
                  src={enLogo}
                  alt="EN"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </button>
              <button onClick={() => changeLanguage("kh")}>
                <img
                  src={khLogo}
                  alt="KH"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
