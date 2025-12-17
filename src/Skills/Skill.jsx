import { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/4236d00b6df31c5c1dab3566fa61ff3c.gif";

// 🧠 Icons
import {
  RiNextjsLine,
  RiNpmjsLine,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiReactquery,
  SiExpo,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";



const skills = [
  { Component: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { Component: RiTailwindCssFill, color: "text-blue-500", name: "Tailwind CSS" },
  { Component: TbBrandJavascript, color: "text-yellow-500", name: "JavaScript" },
  { Component: RiReactjsFill, color: "text-blue-400", name: "React.js" },
  { Component: FaReact, color: "text-cyan-400", name: "React Native" },
  { Component: RiNextjsLine, color: "text-gray-300", name: "Next.js" },
  { Component: DiNodejs, color: "text-emerald-500", name: "Node.js" },
  { Component: SiExpress, color: "text-gray-400", name: "Express.js" },
  { Component: SiMongodb, color: "text-green-600", name: "MongoDB" },
  { Component: SiSupabase, color: "text-green-500", name: "Supabase" },
  { Component: SiFirebase, color: "text-amber-500", name: "Firebase / Firestore" },
  { Component: RiNpmjsLine, color: "text-red-500", name: "NPM" },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  // Dark / Light mode classes
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-r from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white"
      : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900";
  const descColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const iconTextColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const cardBg = theme === "dark" ? "bg-[#111827]/70" : "bg-white/70 backdrop-blur-md";

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative py-20 overflow-hidden ${bgClass}`}
    >
      {/* Background Glows */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)]" />
        </>
      )}

      {/* Section Header */}
      <div className="relative text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-lg mt-3 ${descColor}`}
        >
          A blend of frontend, backend, and cross-platform expertise
        </motion.p>
      </div>

      {/* Skills Content */}
      <div className="relative z-10 md:flex justify-center items-center px-6 md:gap-10">
        {/* Animated GIF / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3 w-full mb-10 md:mb-0 flex justify-center"
        >
          <div className={`rounded-2xl ${cardBg} p-2`}>
            <img
              src={img}
              alt="Developer Animation"
              className="rounded-2xl shadow-lg shadow-blue-500/10"
            />
          </div>
        </motion.div>

        {/* Skills Grid + Descriptions */}
        <div className="md:w-2/3 w-full flex flex-col space-y-6">
          <motion.ul
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-4 text-center md:text-left"
          >
            <motion.li variants={itemVariants}>
              ⚡ Building modern, scalable, and responsive web apps with React,
              Next.js, and Tailwind CSS
            </motion.li>
            <motion.li variants={itemVariants}>
              ⚡ Creating full-stack applications using Node.js, Express, and MongoDB
            </motion.li>
            <motion.li variants={itemVariants}>
              ⚡ Developing cross-platform mobile apps with React Native
            </motion.li>
            <motion.li variants={itemVariants}>
              ⚡ Integrating authentication, database, and APIs via Firebase, Firestore,
              and Supabase
            </motion.li>
          </motion.ul>

          {/* Skills Icons Grid */}
          <motion.ul
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6"
          >
            {skills.map(({ Component, color, name }, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="transition-transform duration-300"
                >
                  <Component
                    size="50px"
                    className={`${color} ${theme === "light" ? "text-gray-900" : ""}`}
                  />
                </motion.div>
                <span className={`text-xs ${iconTextColor}`}>{name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
