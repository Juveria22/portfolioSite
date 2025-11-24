/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mocha: "var(--color-mocha)",
        latte: "var(--color-latte)",
        "light-sage": "var(--color-light-sage)",
        matcha: "var(--color-matcha)",
      },
    },
  },
  plugins: [typography],
};
