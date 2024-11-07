/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Green for primary buttons
        secondary: '#FF9800', // Orange for delete
        background: '#F7F8FC', // Soft white background color
        card: '#FFFFFF', // White for task cards or list items
        textPrimary: '#333333', // Dark gray for main text
        textSecondary: '#757575', // Medium gray for secondary text
        priority: '#F44336', // Red for priority tasks
      }
    },
  },
  plugins: [],
}