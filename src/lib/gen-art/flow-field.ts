import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Flow Field — particles following Perlin-like noise */
export const flowField: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const particles = Array.from({ length: 80 }, () => ({
    x: rng() * w,
    y: rng() * h,
    vx: 0,
    vy: 0,
    life: rng() * 300 + 150,
    age: 0,
    size: rng() * 1.2 + 0.4,
  }));

  const noiseW = 20;
  const noiseH = 14;
  const angles: number[] = [];
  for (let i = 0; i < noiseW * noiseH; i++) {
    angles.push(rng() * Math.PI * 2);
  }

  const noiseScale = 0.006;
  const tScale = 0.0008;

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.04)";
    ctx.fillRect(0, 0, w, h);

    const phase = frame * tScale;

    particles.forEach((p) => {
      const nx = p.x * noiseScale + phase;
      const ny = p.y * noiseScale + Math.sin(phase * 0.7) * 0.3;
      const gx = Math.floor(nx) % noiseW;
      const gy = Math.floor(ny) % noiseH;
      const idx = ((gx + noiseW) % noiseW) + ((gy + noiseH) % noiseH) * noiseW;
      const angle = angles[(idx + Math.floor(frame * 0.005)) % angles.length] + Math.sin(phase) * 0.5;

      p.vx = p.vx * 0.92 + Math.cos(angle) * 0.3;
      p.vy = p.vy * 0.92 + Math.sin(angle) * 0.3;
      p.x += p.vx;
      p.y += p.vy;
      p.age++;

      const alpha = 1 - p.age / p.life;
      if (alpha > 0) {
        ctx.fillStyle = hexToRgba(accent, alpha * 0.45);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (p.age > p.life || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
        p.x = rng() * w;
        p.y = rng() * h;
        p.vx = 0;
        p.vy = 0;
        p.age = 0;
        p.life = rng() * 300 + 150;
      }
    });
  };
};
