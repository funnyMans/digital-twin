module.exports = {
  darkMode: "selector", // important for next-themes
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        barFill: {
          "0%": { width: "0%", opacity: "0" },
          "60%": {
            width: "calc(var(--chronoAgePercentage) + 3%)",
            opacity: "1",
          },
          "80%": { width: "calc(var(--chronoAgePercentage) - 1%)" },
          "100%": { width: "var(--chronoAgePercentage)" },
        },
        thumbSlide: {
          "0%": { left: "0%", opacity: "0" },
          "100%": { left: "var(--bioAgePercentage)", opacity: "1" },
        },
      },
      animation: {
        barFill: "barFill 1.5s ease-in-out forwards",
        thumbSlide: "thumbSlide 1.3s ease-in-out forwards",
      },
    },
  },
};
