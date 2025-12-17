import { useContext } from "react";
import { TbHandLoveYou } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // your theme context

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  // Theme-based classes
  const footerBg =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white"
      : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-900";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const iconColorDefault = theme === "dark" ? "text-white" : "text-gray-800";
  const iconHoverLinkedin = theme === "dark" ? "hover:text-blue-500" : "hover:text-blue-700";
  const iconHoverGithub = theme === "dark" ? "hover:text-gray-400" : "hover:text-gray-600";
  const iconHoverFacebook = theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600";
  const gradientText =
    theme === "dark"
      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
      : "bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text";

  return (
    <footer className={`relative py-16 overflow-hidden ${footerBg}`}>
      {/* Background Glow only in dark mode */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)] pointer-events-none" />
        </>
      )}

      <div className="relative container mx-auto text-center z-10">
        {/* Made with Love */}
        <p className={`text-xl md:text-2xl font-semibold mb-6 flex justify-center items-center gap-2 ${textColor}`}>
          Made with <TbHandLoveYou className="text-blue-400 text-2xl" /> by
          <span className={gradientText}> Shafaet Hossain</span>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-3xl mb-6">
          <a
            href="https://www.linkedin.com/in/shafaet-hossain-alif-b99808180/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconColorDefault} ${iconHoverLinkedin} transition duration-300`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Shafaet1074"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconColorDefault} ${iconHoverGithub} transition duration-300`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/shafahet.hossain.9"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconColorDefault} ${iconHoverFacebook} transition duration-300`}
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className={`text-sm ${subTextColor}`}>
          © {new Date().getFullYear()} Shafaet Hossain. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
