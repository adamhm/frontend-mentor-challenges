/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "soft-violet": "hsl(var(--color-soft-violet))",
                "soft-blue": "hsl(var(--color-soft-blue))",
                card: "hsl(var(--color-card-bg))",
                divider: "hsl(var(--color-divider))",
                text1: "hsl(var(--color-text1))",
                text2: "hsl(var(--color-text2))",
                hover: "hsl(var(--color-hover))",
            },
            backgroundImage: {
                arrow: "url(images/icon-arrow-down.svg)",
                desktop:
                    "url(images/illustration-woman-online-desktop.svg), url(images/bg-pattern-desktop.svg)",
                "box-desktop": "url(images/illustration-box-desktop.svg)",
                "pattern-mobile": "url(images/bg-pattern-mobile.svg)",
                mobile: "url(images/illustration-woman-online-mobile.svg)",
            },
            backgroundPosition: {
                "pos-desktop": "-85px, -580px -300px",
            },
            data: {
                open: "open='true'",
            },
        },
    },
    plugins: [],
};
