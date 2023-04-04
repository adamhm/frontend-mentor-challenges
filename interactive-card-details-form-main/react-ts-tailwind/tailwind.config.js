/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                card: "var(--color-card)",
                "card-front": "var(--color-card-front)",
                "card-back": "var(--color-card-back)",
                label: "var(--color-label)",
                "input-border": "var(--color-input-border)",
                "input-placeholder": "var(--color-input-placeholder)",
                "input-focus": "var(--color-input-focus)",
                error: "var(--color-error)",
                button: "var(--color-button)",
                "button-text": "var(--color-button-text)",
                "completed-text": "var(--color-completed-text-1",
                "completed-text-2": "var(--color-completed-text-2",
            },
            backgroundImage: {
                "main-desktop": "var(--image-main-desktop)",
                "image-front":
                    "var(--image-card-logo), var(--image-card-front)",
                "image-card-back": "var(--image-card-back)",
                "main-mobile": "var(--image-main-mobile)",
            },
            backgroundPosition: {
                "position-front": "30px 26px, top left",
                "position-front-mobile": "18px 16px, top left",
            },
            backgroundSize: {
                "size-front-mobile": "55px, 286px 157px",
            },
            width: {
                container: "1440px",
                "container-mobile": "375px",
            },
            height: {
                container: "900px",
                "container-mobile": "704px",
            },
        },
    },
    plugins: [],
};
