import { EngineFactory } from "@babylonjs/core/Engines";

export const createEngine = async (canvas: HTMLCanvasElement) => {
	return EngineFactory.CreateAsync(canvas, { adaptToDeviceRatio: true });
};
