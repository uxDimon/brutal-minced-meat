import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		build: {
			target: "esnext",
		},
		// esbuild: {
		// 	supported: {
		// 		"top-level-await": true, //browsers can handle top-level-await features
		// 	},
		// },
		resolve: {
			alias: {
				"@modules": resolve(__dirname, "src/modules"),
				"@ui": resolve(__dirname, "src/ui"),
			},
		},
		plugins: [svelte()],
	};
});
