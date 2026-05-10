/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        foreground: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
      },
      animation: {
        "scroll-down": "scroll-down 2s ease-in-out infinite",
        "role-fade-in": "role-fade-in 0.5s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "scroll-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "role-fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}
