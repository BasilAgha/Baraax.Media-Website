import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        smoke: "#111111",
        graphite: "#1b1b1b",
        bone: "#f7f4ee",
        silver: "#b9b9b9",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        cinematic: "0 30px 100px rgba(0, 0, 0, 0.45)",
        glow: "0 0 70px rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12), transparent 34%), linear-gradient(180deg, #050505 0%, #111 44%, #050505 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
