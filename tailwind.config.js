/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        secondary: "#4635F3",
        third: "#F5AC76",
        fourth: "#FF5391",
        thirdGradient: "#FECB7F",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
      backgroundImage: {
        homepage: "url('/public/bgHomepage.png')",
      },
      colors: {
        coklat: "#F5AC76",
        coklatMuda: "#FECB7F",
      },
    },
  },
  plugins: [],
};
