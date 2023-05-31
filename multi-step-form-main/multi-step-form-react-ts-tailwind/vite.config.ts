import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
        },
    },
    plugins: [
        react(),
        Unfonts({
            google: {
                families: [{ name: "Ubuntu", styles: "wght@400;500;700" }],
            },
        }),
    ],
});
