import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F3EA",
        primary: "#1E3A8A",
        accent: "#1F5F52",
        surface: "#EDE8DA",
        border: "#DCD5C3",
        text: {
          DEFAULT: "#171A20",
          muted: "#5B6270",
        },
      },
      fontFamily: {
        sans: ["var(--font-text)", "Georgia", "serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
