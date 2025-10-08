/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {

        // Platform-specific system font
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "ui-sans-serif",
        }),

        // Monospace font (platform-specific fallback)
        mono: platformSelect({
          ios: "Menlo",
          android: "monospace",
          default: "ui-monospace",
        }),

        // Add more named font styles if needed
        heading: ["Poppins_600SemiBold"],
        body: ["Poppins_400Regular"],
      },
    },
  },
  plugins: [],
};
