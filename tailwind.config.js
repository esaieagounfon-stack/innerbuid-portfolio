/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        /* ── Vert ── */
        vert: {
          50:  "#EAF3DE",  // fond très doux
          100: "#C0DD97",  // hover léger
          400: "#97C459",  // vert lime (accent)
          600: "#3B6D11",  // vert forêt (primaire)
          900: "#0d1a0a",  // fond dark mode
        },

        /* ── Jaune ── */
        jaune: {
          100: "#FAEEDA",  // fond chaleureux
          300: "#FAC775",  // jaune doux
          500: "#EF9F27",  // jaune or (énergie)
          700: "#BA7517",  // jaune profond
        },

        /* ── Rose ── */
        rose: {
          50:  "#FBEAF0",  // rose poudré (doux)
          200: "#F4C0D1",  // rose pastel
          500: "#D4537E",  // rose vif (CTA)
          700: "#993556",  // rose sombre (hover)
        },

        /* ── Neutres dark ── */
        dark: {
          base:    "#0d1a0a",  // fond principal dark
          surface: "#162310",  // cartes, sections
          border:  "#2a4020",  // bordures subtiles
        },
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};