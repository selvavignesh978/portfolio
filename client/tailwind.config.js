/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ IMPORTANT for your dark mode toggle

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },

  plugins: [],
};