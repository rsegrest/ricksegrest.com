import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Constellation — nodes connected by edges, pulsing */
export const constellation: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const nodeCount = 18 + Math.floor(rng() * 12);
  const nodes = Array.from({ length: nodeCount }, () => ({
    x: rng() * w,
    y: rng() * h,
    r: rng() * 2 + 1,
    phase: rng() * Math.PI * 2,
    speed: rng() * 0.02 + 0.005,
  }));

  const connections: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (rng() > 0.85) connections.push([i, j]);
    }
  }

  return (frame) => {
    ctx.fillStyle = "rgba(6, 6, 16, 0.15)";
    ctx.fillRect(0, 0, w, h);

    connections.forEach(([a, b]) => {
      const na = nodes[a];
      const nb = nodes[b];
      const dist = Math.hypot(na.x - nb.x, na.y - nb.y);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.25;
        ctx.strokeStyle = hexToRgba(accent, alpha);
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      }
    });

    nodes.forEach((n) => {
      const pulse = Math.sin(frame * n.speed + n.phase) * 0.5 + 0.5;
      const radius = n.r * (1 + pulse * 0.8);

      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
      grad.addColorStop(0, hexToRgba(accent, pulse * 0.4));
      grad.addColorStop(1, hexToRgba(accent, 0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius * 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = hexToRgba(accent, 0.7 + pulse * 0.3);
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    const sigConn = connections[Math.floor(frame * 0.02) % connections.length];
    if (sigConn) {
      const t = ((frame * 0.02) % connections.length) % 1;
      const na = nodes[sigConn[0]];
      const nb = nodes[sigConn[1]];
      const sx = na.x + (nb.x - na.x) * t;
      const sy = na.y + (nb.y - na.y) * t;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  };
};
