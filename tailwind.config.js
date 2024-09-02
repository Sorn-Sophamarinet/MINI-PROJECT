/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontSize: {
        32: ["32px"],
        30: ["30px"],
        16: ["16px"],
        18: ["18px"],
        24: ["24px"],
      },
      colors: {
        primary: {
          110: "#172554",
          100: "#1e40af",
          90: "#1d4ed8",
          80: "#2563eb",
        },
        secondary: {
          100: "#881337",
          90: "#9f1239",
          80: "#be123c",
        },
        accent: {
          100: "#ca8a04",
          90: "#ca8a04",
          80: "#2563eb",
        },
        text: {
          800: "#1e293b",
          700: "#374151",
          50: "#f8fafc",
        },
        slate: {
          300: "#cbd5e1",
        },
      },
    },
    fontFamily: {
      30: "30px",
      24: "24px",
      18: "18px",
      16: "16px",
    },
    backgroundImage: {
      bg1: "url('src/image/bg-img.png')",
    },
  },
};
