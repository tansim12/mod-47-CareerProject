/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "colorGradient": "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
      },
      backgroundImage: {
        'gradient': "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
        'gradientBanner': 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#9873FF",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
