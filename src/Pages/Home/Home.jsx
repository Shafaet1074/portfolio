import React, { useContext } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import pro from "../../assets/2.png";
import resume from "../../assets/resume.pdf";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6
        ${theme === "dark"
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-900"
      }`}
    >
      {/* Background Accent Glow */}
      <div
        className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2
          ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-300/30"} `}
      />
      <div
        className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2
          ${theme === "dark" ? "bg-indigo-600/20" : "bg-indigo-300/30"} `}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Profile Image with Subtle Glow */}
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-full blur-2xl animate-pulse ${
              theme === "dark" ? "bg-blue-500/30" : "bg-blue-300/30"
            }`}
          />
          <div
            className={`absolute inset-0 rounded-full border animate-spin-slow ${
              theme === "dark" ? "border-blue-500/40" : "border-blue-300/40"
            }`}
          />
          <img
            src={pro}
            alt="Shafaet Hossain"
            className={`relative z-10 w-44 h-44 md:w-56 md:h-56 rounded-full border-4 shadow-lg object-cover ${
              theme === "dark"
                ? "border-blue-600 shadow-blue-500/30"
                : "border-blue-400 shadow-blue-300/30"
            }`}
          />
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`mt-6 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-400 to-cyan-400"
              : "bg-gradient-to-r from-blue-600 to-blue-400"
          }`}
        >
          Shafaet Hossain
        </motion.h1>

        {/* Role Animation */}
        <p
          className={`mt-3 text-lg md:text-2xl font-medium ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer 🚀",
              1500,
              "Software Engineer 💻",
              1500,
              "Creative Innovator 🎨",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>

        {/* Short Bio */}
        <p
          className={`mt-5 max-w-xl text-sm md:text-base leading-relaxed ${
            theme === "dark" ? "text-gray-400" : "text-gray-800"
          }`}
        >
          Passionate about crafting elegant, responsive web applications. Turning
          complex ideas into clean, efficient, and visually appealing digital experiences.
        </p>

        {/* Resume Button */}
        <motion.a
          href={resume}
          download="Shafaet_Hossain_Resume.pdf"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className={`mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 ${
            theme === "dark"
              ? "text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-blue-700/30 hover:shadow-blue-500/50"
              : "text-gray-900 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 shadow-blue-300/30 hover:shadow-blue-400/50"
          }`}
        >
          <FaDownload className="text-xl" />
          <span>Download Resume</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
