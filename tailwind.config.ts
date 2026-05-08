import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          teal: "var(--accent-teal)",
          cyan: "var(--accent-cyan)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 10px 40px -10px rgba(45, 212, 191, 0.22)",
        "glass-lg":
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 80px -20px rgba(45, 212, 191, 0.3)",
        soft: "0 8px 30px -12px rgba(2, 34, 29, 0.35)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,191,0.04) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(13,148,136,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,148,136,0.05) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(circle at 30% 20%, rgba(45, 212, 191, 0.28), transparent 45%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.22), transparent 40%), radial-gradient(circle at 50% 90%, rgba(13, 148, 136, 0.3), transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
