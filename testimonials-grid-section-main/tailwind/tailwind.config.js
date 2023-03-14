/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Barlow Semi Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                desktop: "hsl(var(--color-desktop))",
                bg1: "hsl(var(--color-bg1))",
                bg2: "hsl(var(--color-bg2))",
                bg3: "hsl(var(--color-bg3))",
                bg4: "hsl(var(--color-bg4))",
                light: "hsl(var(--color-text-light))",
                dark: "hsl(var(--color-text-dark))",
                item1: "hsl(var(--color-item1))",
                item2: "hsl(var(--color-item2))",
                item3: "hsl(var(--color-item3))",
                item4: "hsl(var(--color-item4))",
                purple: "hsl(var(--color-bg1))",
            },
            backgroundImage: {
                "img-quotation": "url('../images/bg-pattern-quotation.svg')",
            },
        },
    },
    plugins: [],
};
