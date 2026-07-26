import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Agent Swarm — dots with seek/wander behaviors */
export const agentSwarm: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const agentCount = 25 + Math.floor(rng() * 15);
  const agents = Array.from({ length: agentCount }, () => ({
    x: rng() * w,
    y: rng() * h,
    vx: (rng() - 0.5) * 1.5,
    vy: (rng() - 0.5) * 1.5,
    r: rng() * 2 + 1,
    hue: rng(),
    behavior: rng() > 0.5 ? "wander" : "seek",
    targetX: rng() * w,
    targetY: rng() * h,
    trail: [] as [number, number][],
  }));

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.08)";
    ctx.fillRect(0, 0, w, h);

    agents.forEach((a) => {
      if (a.behavior === "seek") {
        const dx = a.targetX - a.x;
        const dy = a.targetY - a.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 20) {
          a.targetX = rng() * w;
          a.targetY = rng() * h;
        }
        a.vx += (dx / dist) * 0.05;
        a.vy += (dy / dist) * 0.05;
      } else {
        const angle = Math.atan2(a.vy, a.vx) + (rng() - 0.5) * 0.3;
        a.vx = a.vx * 0.95 + Math.cos(angle) * 0.15;
        a.vy = a.vy * 0.95 + Math.sin(angle) * 0.15;
      }

      const speed = Math.hypot(a.vx, a.vy);
      const maxSpeed = 1.5;
      if (speed > maxSpeed) {
        a.vx = (a.vx / speed) * maxSpeed;
        a.vy = (a.vy / speed) * maxSpeed;
      }

      a.x += a.vx;
      a.y += a.vy;

      if (a.x < 0) { a.x = 0; a.vx *= -1; }
      if (a.x > w) { a.x = w; a.vx *= -1; }
      if (a.y < 0) { a.y = 0; a.vy *= -1; }
      if (a.y > h) { a.y = h; a.vy *= -1; }

      a.trail.push([a.x, a.y]);
      if (a.trail.length > 12) a.trail.shift();

      ctx.strokeStyle = hexToRgba(accent, 0.15);
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      a.trail.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      });
      ctx.stroke();

      const c = a.hue > 0.5 ? accent : "#a855f7";
      ctx.fillStyle = hexToRgba(c, 0.6);
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 5);
      grad.addColorStop(0, hexToRgba(c, 0.2));
      grad.addColorStop(1, hexToRgba(c, 0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r * 5, 0, Math.PI * 2);
      ctx.fill();
    });
  };
};
