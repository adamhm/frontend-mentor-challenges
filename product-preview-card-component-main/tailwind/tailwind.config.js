/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html"],
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
                "button-hover": "hsl(var(--color-button-hover))",
                "price-current": "hsl(var(--color-price-current))",
                "price-original": "hsl(var(--color-price-original))",
            },
            backgroundImage: {
                "img-desktop": "url('../images/image-product-desktop.jpg')",
                "img-mobile": "url('../images/image-product-mobile.jpg')",
            },
        },
    },
    plugins: [],
};
