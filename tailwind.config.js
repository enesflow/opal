/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
        "pop-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)", opacity: 0 },
        },
      },
      animation: {
        "pop-in": "pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "pop-out": "pop-out 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
