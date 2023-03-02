/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "gradient-soft-violet":
                    "hsl(var(--color-gradient-soft-violet))",
                "gradient-soft-blue": "hsl(var(--color-gradient-soft-blue))",
                card: "hsl(var(--color-card-bg))",
                divider: "hsl(var(--color-divider))",
                text1: "hsl(var(--color-text1))",
                text2: "hsl(var(--color-text2))",
                hover: "hsl(var(--color-hover))",
            },
        },
    },
    plugins: [],
};
