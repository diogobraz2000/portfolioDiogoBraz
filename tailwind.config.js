/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"], // Adjust based on your file structure
    theme: {
      extend: {},
    },
    plugins: [require("tailwindcss-animate")], // Ensure this is included
  };
  