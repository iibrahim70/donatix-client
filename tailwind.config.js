/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        "dark-charcoal": "#121212", // Background
        "midnight-slate": "#1F1F1F", // Secondary Background
        "pale-silver": "#E0E0E0", // Text
        "shadow-gray": "#2C2C2C", // Card Background

        // Light Theme Colors
        "pure-white": "#FFFFFF", // Background
        "light-pearl": "#E8E8E8", // Secondary Background
        "jet-black": "#000000", // Text
        "light-gray": "#EAEAEA", // Card Background

        // Accent & Button Colors
        "flame-orange": "#F74F22", // Brand Color
        "teal-blue": "#2A9D8F", // Button color
        "deep-teal": "#475B5A", // Button color
        "deep-blue": "#2B2D42", // Sider Color
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
