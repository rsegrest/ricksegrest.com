import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Vector Asteroids — procedural rotating polygon shapes with a player ship */
export const vectorAsteroids: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const asteroids = Array.from({ length: 5 }, () => {
    const sides = 5 + Math.floor(rng() * 5);
    const baseAngles = Array.from({ length: sides }, (_, i) => (Math.PI * 2 * i) / sides);
    const verts = baseAngles.map((a) => ({
      angle: a + (rng() - 0.5) * 0.4,
      radius: 15 + rng() * 35,
    }));
    return {
      x: rng() * w,
      y: rng() * h,
      vx: (rng() - 0.5) * 0.6,
      vy: (rng() - 0.5) * 0.6,
      rot: 0,
      rotSpeed: (rng() - 0.5) * 0.02,
      verts,
      scale: 0.6 + rng() * 0.6,
    };
  });

  const ship = {
    x: w / 2,
    y: h / 2,
    vx: 0.5,
    vy: 0,
    angle: 0,
    thrustPhase: 0,
    turnTimer: 60 + Math.floor(rng() * 60),
    _turnTarget: undefined as number | undefined,
  };

  return (frame) => {
    ctx.fillStyle = "rgba(2, 2, 5, 0.2)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
    for (let y = 0; y < h; y += 3) {
      ctx.fillRect(0, y, w, 1);
    }

    asteroids.forEach((a) => {
      a.x += a.vx;
      a.y += a.vy;
      a.rot += a.rotSpeed;

      if (a.x < -50) a.x = w + 50;
      if (a.x > w + 50) a.x = -50;
      if (a.y < -50) a.y = h + 50;
      if (a.y > h + 50) a.y = -50;

      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.rotate(a.rot);
      ctx.scale(a.scale, a.scale);
      ctx.strokeStyle = hexToRgba(accent, 0.6);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      a.verts.forEach((v, i) => {
        const x = Math.cos(v.angle) * v.radius;
        const y = Math.sin(v.angle) * v.radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    });

    ship.turnTimer--;
    if (ship.turnTimer <= 0) {
      const targetAngle = rng() * Math.PI * 2;
      ship.turnTimer = 80 + Math.floor(rng() * 80);
      ship._turnTarget = targetAngle;
    }

    if (ship._turnTarget !== undefined) {
      let diff = ship._turnTarget - ship.angle;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      ship.angle += diff * 0.04;
      if (Math.abs(diff) < 0.05) {
        ship._turnTarget = undefined;
      }
    }

    const thrust = 0.03;
    ship.vx += Math.cos(ship.angle) * thrust;
    ship.vy += Math.sin(ship.angle) * thrust;

    const speed = Math.hypot(ship.vx, ship.vy);
    const maxSpeed = 1.2;
    if (speed > maxSpeed) {
      ship.vx = (ship.vx / speed) * maxSpeed;
      ship.vy = (ship.vy / speed) * maxSpeed;
    }

    ship.x += ship.vx;
    ship.y += ship.vy;

    if (ship.x < -10) ship.x = w + 10;
    if (ship.x > w + 10) ship.x = -10;
    if (ship.y < -10) ship.y = h + 10;
    if (ship.y > h + 10) ship.y = -10;

    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.angle + Math.PI / 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(-5, 6);
    ctx.lineTo(0, 3);
    ctx.lineTo(5, 6);
    ctx.closePath();
    ctx.stroke();

    ship.thrustPhase = (ship.thrustPhase + 1) % 20;
    if (ship.thrustPhase < 14) {
      ctx.strokeStyle = hexToRgba(accent, 0.5);
      ctx.beginPath();
      ctx.moveTo(-3, 7);
      ctx.lineTo(0, 7 + 4 + Math.sin(frame * 0.5) * 2);
      ctx.lineTo(3, 7);
      ctx.stroke();
    }
    ctx.restore();

    const bulletProgress = (frame % 90) / 90;
    if (bulletProgress < 0.3) {
      const noseOffset = 8;
      const startX = ship.x + Math.cos(ship.angle) * noseOffset;
      const startY = ship.y + Math.sin(ship.angle) * noseOffset;
      const bulletDist = bulletProgress * 200;
      const bx = startX + Math.cos(ship.angle) * bulletDist;
      const by = startY + Math.sin(ship.angle) * bulletDist;
      ctx.fillStyle = hexToRgba(accent, 1 - bulletProgress / 0.3);
      ctx.beginPath();
      ctx.arc(bx, by, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    const vg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.6);
    vg.addColorStop(0, "rgba(0, 0, 0, 0)");
    vg.addColorStop(1, "rgba(0, 0, 0, 0.4)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, w, h);
  };
};
