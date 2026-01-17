import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), svgr()],
	base: "/",
  
  resolve: {
    alias: {
      '~': resolve(__dirname, "app")
    }
  }
});