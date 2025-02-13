import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import MillionLint from "@million/lint";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), MillionLint.vite()],
});
