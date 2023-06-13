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
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@typedefs": path.resolve(__dirname, "./src/typedefs"),
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
