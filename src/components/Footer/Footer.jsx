import { FaFacebook, FaInstagram, FaLine, FaTelegram } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          {t("nickname")} {t("lastname")}
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { id: "about" },
            { id: "skills" },
            { id: "experience" },
            { id: "work" },
            { id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {t(item.id)}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/jadesadaphon.chaykaew/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/admin.jade/",
            },
            {
              icon: <FaLine />,
              link: "https://line.me/ti/p/UtCiXxTHoc",
            },
            {
              icon: <FaTelegram />,
              link: "https://t.me/jade_ck",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">{t("rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
