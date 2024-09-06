import { applyTailwind } from "./tailwindcss/index.mjs";
import colors from "tailwindcss/colors";

const defaultConfig = applyTailwind({
  content: ["./index.html", "./src/**/*.{tsx,ts,css,scss}"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        disabled: colors.gray[400],
        noactive: colors.gray[600],
      },
      boxShadow: {
        s1: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
  corePlugins: {},
});

export default defaultConfig;
