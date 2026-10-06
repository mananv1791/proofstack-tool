import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        paper: "#f7f5ef",
        panel: "#ffffff",
        line: "#dedbd1",
        cobalt: "#2e5bff",
        brass: "#d39b23",
        signal: "#0f9d77",
        slate: "#495160",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(17, 19, 24, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
