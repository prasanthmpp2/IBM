import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveBasePath = () => {
  if (!process.env.GITHUB_ACTIONS) return "/";
  const repository = process.env.GITHUB_REPOSITORY || "";
  const repoName = repository.split("/")[1];
  return repoName ? `/${repoName}/` : "/";
};

export default defineConfig({
  // Use repository subpath when building on GitHub Actions for Pages.
  base: resolveBasePath(),
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  }
});
