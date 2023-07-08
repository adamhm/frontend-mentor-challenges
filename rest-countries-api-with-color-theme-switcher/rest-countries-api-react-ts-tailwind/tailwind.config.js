/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "outer-space": "hsl(209, 23%, 22%)",
                "yankees-blue": "hsl(207, 26%, 17%)",
                "chinese-black": "hsl(200, 15%, 8%)",
                "old-silver": "hsl(0, 0%, 52%)",
                lotion: "hsl(0, 0%, 98%)",
            },
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
