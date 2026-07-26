import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Lissajous Curves — parametric curves drawing themselves */
export const lissajous: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const curves = Array.from({ length: 3 }, () => ({
    a: 1 + Math.floor(rng() * 5),
    b: 1 + Math.floor(rng() * 5),
    phase: rng() * Math.PI,
    color: rng() > 0.5 ? accent : ["#a855f7", "#f472b6", "#22d3ee"][Math.floor(rng() * 3)],
    speed: 0.5 + rng() * 1.5,
    points: [] as [number, number][],
    maxPoints: 80 + Math.floor(rng() * 80),
  }));

  let step = 0;

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.08)";
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.35;

    curves.forEach((curve) => {
      const t = step * 0.02 * curve.speed;
      const x = cx + Math.sin(curve.a * t + curve.phase) * radius;
      const y = cy + Math.sin(curve.b * t) * radius;
      curve.points.push([x, y]);
      if (curve.points.length > curve.maxPoints) curve.points.shift();

      ctx.strokeStyle = hexToRgba(curve.color, 0.4);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      curve.points.forEach((p, i) => {
        if (i === 0) {
          ctx.moveTo(p[0], p[1]);
        } else {
          ctx.lineTo(p[0], p[1]);
        }
      });
      ctx.stroke();

      if (curve.points.length > 0) {
        const p = curve.points[curve.points.length - 1];
        const grad = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 12);
        grad.addColorStop(0, hexToRgba(curve.color, 0.6));
        grad.addColorStop(1, hexToRgba(curve.color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    step++;
  };
};
