import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            google: {
                families: [
                    {
                        name: "Josefin Sans",
                        styles: "wght@400;700",
                        defer: true,
                    },
                ],
            },
        }),
    ],
});