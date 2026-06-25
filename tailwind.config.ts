import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        canvas:      "#faf9f6",
        surface:     "#f3f0ea",
        card:        "#ffffff",
        "card-warm": "#fdfcfa",
        border:      "rgba(28,28,46,0.08)",
        "border-md": "rgba(28,28,46,0.13)",
        accent:      "#7c6fe0",
        "accent-2":  "#a89fe8",
        "accent-light": "#ede9fb",
        "accent-mid":   "#c4bcf3",
        "text-primary":   "#1c1c2e",
        "text-secondary": "#54546e",
        "text-muted":     "#9898b4",
      },
      backgroundImage: {
        "accent-gradient":  "linear-gradient(135deg, #7c6fe0 0%, #a89fe8 100%)",
        "accent-gradient-soft": "linear-gradient(135deg, rgba(124,111,224,0.12) 0%, rgba(168,159,232,0.06) 100%)",
        "hero-glow":        "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,111,224,0.10) 0%, transparent 65%)",
        "warm-gradient":    "linear-gradient(180deg, #faf9f6 0%, #f3f0ea 100%)",
        "section-gradient": "linear-gradient(180deg, #ffffff 0%, #faf9f6 100%)",
      },
      animation: {
        "float-a":   "floatA 14s ease-in-out infinite",
        "float-b":   "floatB 11s ease-in-out infinite",
        "float-c":   "floatC 8s ease-in-out infinite",
        "shimmer":   "shimmer 2.5s linear infinite",
      },
      keyframes: {
        floatA: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "40%":     { transform: "translate(30px,-22px) scale(1.04)" },
          "70%":     { transform: "translate(-18px,18px) scale(0.97)" },
        },
        floatB: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(-28px,-16px) scale(1.03)" },
          "66%":     { transform: "translate(16px,24px) scale(0.98)" },
        },
        floatC: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%":     { transform: "translate(14px,-18px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        card:       "0 1px 3px rgba(28,28,46,0.06), 0 4px 20px rgba(28,28,46,0.07)",
        "card-lg":  "0 2px 8px rgba(28,28,46,0.06), 0 12px 40px rgba(28,28,46,0.10)",
        "card-hover": "0 4px 16px rgba(28,28,46,0.08), 0 20px 60px rgba(124,111,224,0.12)",
        accent:     "0 4px 24px rgba(124,111,224,0.28)",
        "accent-sm":"0 2px 12px rgba(124,111,224,0.22)",
        soft:       "0 1px 2px rgba(28,28,46,0.04), 0 2px 10px rgba(28,28,46,0.06)",
        button:     "0 1px 3px rgba(28,28,46,0.12), inset 0 1px 0 rgba(255,255,255,0.14)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
        tight:    "-0.02em",
        snug:     "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
