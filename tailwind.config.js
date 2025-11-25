/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose100: "var(--color-rose100)",
        rose200: "var(--color-rose200)",
        cream1: "var(--color-cream1)",
        cocoa: "var(--color-cocoa)",
        latte1: "var(--color-latte1)",

        matcha1: "var(--color-matcha1)",    // OPTION B (deep matcha = #5F7A4C)

        berry: "var(--color-berry)",
        "light-berry": "var(--color-light-berry)",
        cream2: "var(--color-cream2)",
        pistachio: "var(--color-pistachio)",

        espresso: "var(--color-espresso)",
        "oat-milk": "var(--color-oat-milk)",
        caramel: "var(--color-caramel)",
        "dusty-sage": "var(--color-dusty-sage)",
        "mauve-mocha": "var(--color-mauve-mocha)",

        cream: "var(--color-cream)",
        "light-sage": "var(--color-light-sage)",
        matcha: "var(--color-matcha)",
        latte: "var(--color-latte)",
        brown: "var(--color-brown)",
        mocha: "var(--color-mocha)",
      },
    },
  },
  plugins: [typography],
};
