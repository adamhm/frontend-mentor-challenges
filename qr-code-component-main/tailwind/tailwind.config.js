/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                back: "hsl(212, 45%, 89%)",
                title: "hsl(218, 44%, 22%)",
                desc: "hsl(220, 15%, 55%)",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "15px" },
            });
        }),
    ],
};
