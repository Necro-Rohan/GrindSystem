import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5175, // or your current port
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      ".ngrok-free.app", // ngrok domain
    ],
  },
});
