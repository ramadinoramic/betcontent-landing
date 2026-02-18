/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        surface: {
          DEFAULT: "#060809",
          raised: "#0a0e0c",
          overlay: "rgba(255,255,255,0.02)",
        },
        border: {
          subtle: "rgba(255,255,255,0.04)",
          DEFAULT: "rgba(255,255,255,0.06)",
          strong: "rgba(255,255,255,0.1)",
        },
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.75s ease-out both",
        "pulse-slow": "pulse 2s ease-in-out infinite",
        "glow": "glow 3.5s ease-in-out infinite",
        "border-pulse": "borderPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 16px rgba(52,211,153,0.08)" },
          "50%": { boxShadow: "0 0 32px rgba(52,211,153,0.18)" },
        },
        borderPulse: {
          "0%, 100%": { borderColor: "rgba(52,211,153,0.12)" },
          "50%": { borderColor: "rgba(52,211,153,0.35)" },
        },
      },
    },
  },
  plugins: [],
};
