/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", //blue shade for main actions (buttons, highlights)
        secondary: "#F4A261", // Orange shade for accents
        background: "#F8F9FA", // Light gray for body background
        textPrimary: "#333333", // Dark gray for main text
        textSecondary: "#555555", // Slightly lighter gray for subtexts
        cardBg: "#FFFFFF", // White background for cards
        borderColor: "#E0E0E0", // Light gray for borders
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

