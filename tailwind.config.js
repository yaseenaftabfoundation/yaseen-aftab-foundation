const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-body)"],
      serif: ["var(--font-body)"],
      body: ["var(--font-body)"],
    },
    container: {
      center: true,
    },
    screens: {
      xl: { max: "1920px" },
      "min-xl": { min: "1921px" },
      laptop: { max: "1535px" },
      "min-laptop": { min: "1536px" },
      tablet: { max: "1023px" },
      "min-tablet": { min: "1024px" },
      mobile: { max: "767px" },
      "min-mobile": { min: "768px" },
      xs: { max: "319px" },
      "min-xs": { min: "320px" },
    },
    extend: {},
  },
  plugins: [],
});
