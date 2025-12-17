import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext"; // your theme context

const Contacts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Dark / Light Mode classes
  const sectionBg =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white"
      : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-900";
  const formBg =
    theme === "dark"
      ? "bg-[#111827]/80 text-white placeholder-gray-400"
      : "bg-white text-gray-900 placeholder-gray-500";
  const labelColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const buttonBg =
    theme === "dark"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white";
  const inputRing =
    theme === "dark" ? "focus:ring-blue-400" : "focus:ring-blue-600";

  const formVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-16 md:py-24 overflow-hidden ${sectionBg}`}
    >
      {/* Background Glow only in dark mode */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_70%)]" />
        </>
      )}

      <div className="relative container mx-auto px-4 z-10 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Contact
          </h2>
          <p className={`text-xl md:text-2xl mt-4 ${descColor}`}>
            Submit the form below to get in touch
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={formVariants}
          className={`rounded-2xl shadow-lg p-8 ${
            theme === "dark"
              ? "backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              : "bg-gray-50 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          }`}
        >
          <form
            action="https://getform.io/f/pbmqqqkb"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className={`text-lg ${labelColor}`}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`w-full p-4 rounded-lg ${formBg} focus:outline-none focus:ring-2 ${inputRing}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`text-lg ${labelColor}`}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full p-4 rounded-lg ${formBg} focus:outline-none focus:ring-2 ${inputRing}`}
              />
            </div>

            <div>
              <label htmlFor="message" className={`text-lg ${labelColor}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                className={`w-full p-4 rounded-lg ${formBg} focus:outline-none focus:ring-2 ${inputRing}`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 mt-4 rounded-lg text-xl transition duration-300 ${buttonBg}`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
