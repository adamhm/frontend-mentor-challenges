/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Fraunces", ...defaultTheme.fontFamily.serif],
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                desktop: "hsl(var(--color-desktop))",
                title: "hsl(var(--color-title))",
                category: "hsl(var(--color-category))",
                description: "hsl(var(--color-description))",
                button: "hsl(var(--color-button))",
                currentPrice: "hsl(var(--color-price-current))",
                originalPrice: "hsl(var(--color-price-original))",
            },
        },
    },
    plugins: [],
};
