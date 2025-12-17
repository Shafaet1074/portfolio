import { useContext } from "react";
import { Carousel } from "flowbite-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAxios,
} from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    name: "MediCamp",
    description: [
      "Implement both admin and participant dashboards.",
      "Admin can create and share their own camps.",
      "Implement payment methods for paying the camp's fees.",
    ],
    technologies: [
      FaReact,
      SiTailwindcss,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiFirebase,
      SiAxios,
    ],
    link: "https://medicamp-70825.web.app/",
  },
  {
    name: "Next-gen Blogs",
    description: [
      "Users can create and share their own blogs.",
      "Personalized wishlists to save and organize favorite blogs.",
      "Engaging All Blogs section with interactive blog cards and Read More buttons for full content access and commenting.",
    ],
    technologies: [
      FaReact,
      SiTailwindcss,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiFirebase,
      SiAxios,
    ],
    link: "https://nextgenblogs-6e55f.web.app",
  },
  {
    name: "ArtisanHeaven",
    description: [
      "Added personalized wishlists to help users save and organize their favorite art pieces.",
      "Developed an interactive All Artworks section with engaging art cards and View More buttons for full content access.",
      "Integrated secure login and signup authentication to protect user data.",
    ],
    technologies: [
      FaReact,
      SiTailwindcss,
      FaNodeJs,
      SiExpress,
      SiMongodb,
      SiFirebase,
      SiAxios,
    ],
    link: "https://incomparable-parfait-957e61.netlify.app/",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const arrowStyle = theme === "dark"
    ? "text-white bg-black/20 hover:bg-black/40"
    : "text-gray-900 bg-white/50 hover:bg-white/70";

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor = theme === "dark" ? "text-gray-100" : "text-gray-700";
  const bgColor = theme === "dark" ? "bg-[#111827]/70" : "bg-white/70 backdrop-blur-md";

  return (
    <section
      id="projects"
      className={`relative py-16 md:py-20 overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c]"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
      }`}
    >
      {/* Background Glow */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)]" />
        </>
      )}

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text`}
          >
            My Projects
          </h2>
          <p className={`text-lg sm:text-xl mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            Explore some of my latest work and projects built using cutting-edge technologies
          </p>
        </div>

        <div className="relative">
          <Carousel
            pauseOnHover
            className="h-96 md:h-[380px] lg:h-[420px] xl:h-[450px]"
            leftControl={
              <button
                className={`absolute top-1/2 -translate-y-1/2 left-2 z-20 p-2 rounded-full transition ${arrowStyle}`}
              >
                &#10094;
              </button>
            }
            rightControl={
              <button
                className={`absolute top-1/2 -translate-y-1/2 right-2 z-20 p-2 rounded-full transition ${arrowStyle}`}
              >
                &#10095;
              </button>
            }
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)] flex items-center justify-center relative"
              >
                <div className={`p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-6 w-full h-full ${bgColor} rounded-2xl`}>
                  <h3 className={`text-2xl sm:text-3xl font-semibold text-center ${textColor}`}>
                    {project.name}
                  </h3>
                  <div className="space-y-4 text-center">
                    {project.description.map((desc, descIndex) => (
                      <p key={descIndex} className={`text-md sm:text-lg font-light ${descColor}`}>
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-center mb-4 flex-wrap gap-4">
                    {project.technologies.map((TechIcon, techIndex) => (
                      <TechIcon
                        key={techIndex}
                        className={theme === "dark" ? "text-white text-xl sm:text-2xl md:text-3xl" : "text-gray-900 text-xl sm:text-2xl md:text-3xl"}
                      />
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 py-2 px-6 rounded-full transition duration-300 ${
                      theme === "dark"
                        ? "text-white bg-blue-500 hover:bg-blue-600"
                        : "text-gray-900 bg-blue-400 hover:bg-blue-500"
                    }`}
                  >
                    <span className="text-sm sm:text-base">View Project</span>
                    <GoArrowUpRight className="text-lg" />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
