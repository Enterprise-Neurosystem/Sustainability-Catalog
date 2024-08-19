// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add paths to your Carbon components or other files where Tailwind CSS should be applied
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors that match IBM Carbon Design System
        'carbon-blue': '#004f9d',
      },
    },
  },
  plugins: [],
}
