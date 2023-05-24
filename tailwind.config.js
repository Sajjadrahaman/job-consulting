/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#38bdf8",

          "secondary": "#84cc16",

          "accent": "#1FB2A5",

          "neutral": "#191D24",

          "base-100": "#ffffff",

          "info": "#8b5cf6",

          "success": "#22c55e",

          "warning": "#FBBD23",

          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}