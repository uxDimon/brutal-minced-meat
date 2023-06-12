import { defineConfig, splitVendorChunkPlugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				"@modules": resolve(__dirname, "src/modules"),
				"@ui": resolve(__dirname, "src/ui"),
			},
		},
		plugins: [svelte(), splitVendorChunkPlugin()],
	};
});
