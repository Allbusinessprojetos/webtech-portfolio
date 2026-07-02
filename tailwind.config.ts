import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#0B0B0B",
        graphite: "#111827",
        electric: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          dim: "#1D4ED8",
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, rgba(11,11,11,0) 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-15px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
