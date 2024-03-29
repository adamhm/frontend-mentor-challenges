import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@state": path.resolve(__dirname, "./src/state"),
            "@typedefs": path.resolve(__dirname, "./src/typedefs"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        },
    },
    base: "/fm/ecommerce-product-page/",
    plugins: [
        react(),
        svgr(),
        Unfonts({
            google: {
                families: [
                    {
                        name: "Kumbh+Sans",
                        styles: "wght@400;700",
                    },
                ],
            },
        }),
    ],
});
