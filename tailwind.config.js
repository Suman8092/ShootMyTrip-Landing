
export default {
 content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
  extend: {
    fontFamily: {
      playfair: ["'Playfair Display'", "serif"],
      poppins: ["'Poppins'", "sans-serif"],
    },
    animation: {
      slowfade: "fadeIn 3s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(30px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
},
}