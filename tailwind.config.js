/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        card: "rgba(223, 226, 231, 0.6) 0px 4px 8px",
      },
    },
  },
  plugins: [],
}
