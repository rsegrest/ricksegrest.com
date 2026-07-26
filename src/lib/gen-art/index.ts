import type { AlgorithmFactory } from "./utils";
import { flowField } from "./flow-field";
import { constellation } from "./constellation";
import { vectorAsteroids } from "./vector-asteroids";
import { agentSwarm } from "./agent-swarm";
import { lissajous } from "./lissajous";
import { tokenStream } from "./token-stream";
import { decay } from "./decay";

export const ALGORITHMS: Record<string, AlgorithmFactory> = {
  flowField,
  constellation,
  vector: vectorAsteroids,
  network: agentSwarm,
  grid: lissajous,
  chat: tokenStream,
  decay,
};

export { type AlgorithmFactory, type DrawFn } from "./utils";
