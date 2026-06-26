/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-base":    "#8A1C2C",
        "red-deep":    "#5C0E1A",
        "red-bright":  "#C41E3A",
        highlight:     "#FF4D6D",
        gold:          "#D4AF37",
        "gold-dark":   "#996515",
        "gold-light":  "#F2C85A",
        primary:       "#C41E3A",
        accent:        "#D4AF37",
        bg:            "#120308",
        surface:       "#1E0610",
        "text-primary": "#FFFFFF",
        muted:         "#E8D5C4",
        stroke:        "rgba(212,175,55,0.25)",
      },
      fontFamily: {
        sans:    ["var(--font-outfit)", "Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
    },
  },
};

module.exports = config;
