<script lang="ts">
	import { onMount } from "svelte";

	let canvasWrap: HTMLElement;

	onMount(() => {});
</script>

<div class="canvas-wrap" bind:this={canvasWrap} />

<style>
	.canvas-wrap {
		width: 100%;
		height: 100%;
	}
</style>
