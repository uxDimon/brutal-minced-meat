<script lang="ts">
	import { onMount } from "svelte";

	import { createEngine } from "@modules/engine/createEngine";

	import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
	import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
	import { Vector3 } from "@babylonjs/core/Maths/math.vector";
	import { CreateGround } from "@babylonjs/core/Meshes/Builders/groundBuilder";
	import { CreateSphere } from "@babylonjs/core/Meshes/Builders/sphereBuilder";
	import { Scene } from "@babylonjs/core/scene";

	import { GridMaterial } from "@babylonjs/materials/grid/gridMaterial";

	let canvas: HTMLCanvasElement;

	onMount(() => {
		createEngine(canvas).then((engine) => {
			// Create our first scene.
			const scene = new Scene(engine);

			// This creates and positions a free camera (non-mesh)
			const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

			// This targets the camera to scene origin
			camera.setTarget(Vector3.Zero());

			// This attaches the camera to the canvas
			camera.attachControl(canvas, true);

			// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
			const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

			// Default intensity is 1. Let's dim the light a small amount
			light.intensity = 0.7;

			// Create a grid material
			const material = new GridMaterial("grid", scene);

			// Our built-in 'sphere' shape.
			const sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);

			// Move the sphere upward 1/2 its height
			sphere.position.y = 2;

			// Affect a material
			sphere.material = material;

			// Our built-in 'ground' shape.
			const ground = CreateGround("ground1", { width: 6, height: 6, subdivisions: 2 }, scene);

			// Affect a material
			ground.material = material;

			// Render every frame
			engine.runRenderLoop(() => {
				scene.render();
			});

			window.addEventListener("resize", function () {
				engine.resize();
			});
		});
	});
</script>

<canvas class="canvas" bind:this={canvas} />

<style>
	.canvas {
		width: 100%;
		height: 100%;
	}
</style>
