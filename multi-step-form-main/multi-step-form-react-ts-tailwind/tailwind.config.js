/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                desktop: "url(assets/images/bg-sidebar-desktop.svg)",
            },
            colors: {
                "marine-blue": "hsl(213, 96%, 18%)",
                "purplish-blue": "hsl(243, 100%, 62%)",
                "pastel-blue": "hsl(228, 100%, 84%)",
                "light-blue": "hsl(206, 94%, 87%)",
                "strawberry-red": "hsl(354, 84%, 57%)",
                "cool-gray": "hsl(231, 11%, 63%)",
                "light-gray": "hsl(229, 24%, 87%)",
                magnolia: "hsl(217, 100%, 97%)",
                alabaster: "hsl(231, 100%, 99%)",
                "ghost-white": "rgb(248, 249, 254)",
                "purple-navy": "hsl(246, 31%, 44%)",
                "slate-blue": "hsl(245, 56%, 60%)",
                "violets-are-blue": "hsl(244, 100%, 77%)",
            },
            fontFamily: {
                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
