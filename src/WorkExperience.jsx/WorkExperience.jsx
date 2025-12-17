import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Kinedao.com",
    period: "Jan 4, 2026 – May 12, 2026",
    description:
      "Kinedao.com is a B2B startup eCommerce platform. I was responsible for web design analysis, product research, and full-stack website development. I built an OTP verification system, admin panel, WhatsApp & Messenger chat APIs, and a complete order & delivery management system.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Shadcn UI",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    projects: [
      {
        name: "Live Website",
        link: "https://kinedao.com/",
      },
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "EduTechs",
    period: "May 13, 2026 – October 10,2026",
    description:
      "EduTechs is an Education Tech company that builds Learning Management Systems (LMS) for clients. I worked as a full-stack developer handling both website and mobile app projects — converting UI designs into pixel-perfect frontend and implementing full functionality using modern stacks.",
    tech: [
      "React.js",
      "React Native",
      "Ant Design",
      "Firebase",
      "Supabase",
    ],
    projects: [
      {
        name: "EduTechs LMS",
        link: "https://edutechs.app/welcome",
      },
      {
        name: "Hotel Management System(Gustav) ",
        link: "https://gustav.club/welcome",
      },
      {
        name: "Landing Page For Parents Software Company(Zenyth Lab)",
        link: "https://zenythlabs.com/welcome",
      },
    ],
  },
];

const WorkExperience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="work"
      className={`relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden
        ${
          theme === "dark"
            ? "bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white"
            : "bg-gradient-to-b from-gray-100 via-gray-200 to-white text-gray-900"
        }`}
    >
      {/* Background Glow Effects */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)] ${
          theme === "light"
            ? "bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_70%)]"
            : ""
        }`}
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)] ${
          theme === "light"
            ? "bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.05),_transparent_70%)]"
            : ""
        }`}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`relative text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-400 to-cyan-400"
            : "bg-gradient-to-r from-blue-600 to-blue-400"
        }`}
      >
        Work Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl px-6 md:px-0">
        {/* Vertical Line */}
        <div
          className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-b from-blue-500/60 to-cyan-500/30"
              : "bg-gradient-to-b from-blue-300/40 to-cyan-300/20"
          }`}
        />

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <AnimatedCard exp={exp} index={index} key={exp.id} theme={theme} />
        ))}
      </div>
    </section>
  );
};

const AnimatedCard = ({ exp, index, theme }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`relative flex flex-col md:flex-row items-center ${
        index % 2 === 0
          ? "md:justify-start md:text-right md:pr-12"
          : "md:justify-end md:text-left md:pl-12"
      } mb-20`}
    >
      {/* Dot on Timeline */}
      <div
        className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 ${
          theme === "dark"
            ? "bg-blue-500 border-[#0a0f1c]"
            : "bg-blue-300 border-white"
        }`}
      />

      {/* Card */}
      <div
        className={`w-full md:w-1/2 p-6 rounded-2xl backdrop-blur-md border shadow-md transition-transform hover:-translate-y-2 duration-300
          ${
            theme === "dark"
              ? "bg-[#111827]/80 border-blue-500/20 shadow-[0_0_25px_rgba(37,99,235,0.15)]"
              : "bg-white/80 border-blue-200 shadow-[0_0_25px_rgba(37,99,235,0.08)]"
          }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <FaBriefcase
            className={`h-6 w-6 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h3
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } text-xl font-semibold`}
          >
            {exp.role}
          </h3>
        </div>
        <h4
          className={`${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          } text-sm mb-2 font-medium`}
        >
          {exp.company} • {exp.period}
        </h4>
        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-sm leading-relaxed mb-3`}
        >
          {exp.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-3 py-1 rounded-full border ${
                theme === "dark"
                  ? "bg-blue-600/20 text-blue-300 border-blue-500/20"
                  : "bg-blue-200/40 text-blue-600 border-blue-300/40"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {exp.projects?.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2">
            {exp.projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400"
                    : "bg-gradient-to-r from-blue-400 to-cyan-300 text-gray-900 hover:from-blue-300 hover:to-cyan-200"
                }`}
              >
                <FaExternalLinkAlt className="text-xs" />
                {project.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
