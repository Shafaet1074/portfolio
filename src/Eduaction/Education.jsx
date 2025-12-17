import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // your theme context

const educationData = [
  {
    year: "2010 – 2015",
    title: "Secondary School Certificate",
    institution: "Natore Govt. Boys’ High School, Natore",
    stream: "Science",
    score: "GPA – 5.00",
    icon: <FaSchool className="text-blue-500 text-3xl" />,
  },
  {
    year: "2015 – 2017",
    title: "Higher Secondary School Certificate",
    institution: "Nawab Siraj-Ud-Dowla Govt. College, Natore",
    stream: "Science",
    score: "GPA – 5.00",
    icon: <FaSchool className="text-green-500 text-3xl" />,
  },
  {
    year: "2018 – 2023",
    title: "Bachelor of Science in Computer Science",
    institution: "Brac University",
    stream: "Computer Science",
    score: "CGPA – 2.74",
    icon: <FaUniversity className="text-yellow-500 text-3xl" />,
  },
];

const Education = () => {
  const { theme } = useContext(ThemeContext);

  // Dark / Light mode classes
  const sectionBg =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white"
      : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-900";
  const textDescColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-[#111827]/70 border border-blue-500/20 backdrop-blur-md text-white"
      : "bg-white border border-gray-300/30 backdrop-blur-sm text-gray-900";
  const iconBg =
    theme === "dark" ? "bg-[#111827]/50" : "bg-gray-200/50";

  return (
    <section
      id="education"
      className={`relative py-20 px-6 md:px-16 overflow-hidden ${sectionBg}`}
    >
      {/* Background glows for dark mode */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)]" />
        </>
      )}

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text tracking-wide">
            Education
          </h2>
          <p className={`text-lg mt-3 ${textDescColor}`}>
            My academic journey — milestones that shaped my professional path.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <AnimatedEducationCard
              key={index}
              item={item}
              index={index}
              cardBg={cardBg}
              iconBg={iconBg}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedEducationCard = ({ item, index, cardBg, iconBg, theme }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  };

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const instColor = theme === "dark" ? "text-blue-300" : "text-blue-600";

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`relative rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 p-6 md:p-8 ${cardBg}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full ${iconBg}`}>{item.icon}</div>
        <div>
          <h3 className={`text-xl md:text-2xl font-semibold ${textColor}`}>
            {item.title}
          </h3>
          <p className={`text-sm ${subTextColor}`}>{item.year}</p>
        </div>
      </div>

      <div className={`border-l-4 pl-4 ml-2 border-blue-500`}>
        <h4 className={`text-lg font-medium ${instColor}`}>{item.institution}</h4>
        <p className={`text-sm mt-1 ${subTextColor}`}>{item.stream}</p>
        <p className={`text-sm mt-1 ${subTextColor}`}>{item.score}</p>
      </div>
    </motion.div>
  );
};

export default Education;
