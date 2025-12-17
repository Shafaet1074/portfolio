/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: 'class', // <-- add this
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-rainbow": "linear-gradient(to right, #4A90E2, #834D9B, #F94A8B)",
      },
      fontFamily: {
        signature: ["Agustina"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#4A90E2 #1F3239",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "16px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1F3239",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4A90E2",
            borderRadius: "8px",
            border: "4px solid #1F3239",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    flowbite.plugin(),
  ],
};
