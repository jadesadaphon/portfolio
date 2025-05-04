import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    host: "0.0.0.0",
    port: 5858,
    strictPort: true,
  },
});
