/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-hover": "#6ECFFF",
        "btn-btn": "#FFF3BB",
        "btn-hover": "#FD7666",
        "green-graphic": "#23564A",
        "footer-green": "#90D4C5",
        "blue-photo": "#16526F",
        "nav-blue": "#3DBEFF",
        "nav-yellow": "#FDD601",
      },

      backgroundImage: {
        "hero-pattern": "url('../images/desktop/image-header.jpg')",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
