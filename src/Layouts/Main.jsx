import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skill";
import Education from "../Eduaction/Education";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import WorkExperience from "../WorkExperience.jsx/WorkExperience";

const Main = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      // Add any logic needed when the user scrolls (if necessary)
    };

    // Add event listener to scroll container
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center md:bg-center relative">

      <div className="scroll-container h-screen overflow-y-scroll scrollbar-thin scrollbar-webkit z-10">
        <Navbar />
        <Outlet />
        <WorkExperience/>
        <Projects />    
        <Skills />     
        <Education />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
