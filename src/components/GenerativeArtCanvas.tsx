import { useRef, useEffect } from "react";

/* ── Seeded RNG (mulberry32) ── */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStringToInt(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
}

/* ── Algorithm type ── */
type DrawFn = (frame: number) => void;
type AlgorithmFactory = (
  ctx: CanvasRenderingContext2D,
  rng: () => number,
  accent: string,
  width: number,
  height: number
) => DrawFn;

/* ── Utility: hex to rgba ── */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ════════════════════════════════════════════════════════════
   ALGORITHMS
   Each returns a draw(frame) function called every animation frame.
   Uses the seeded rng for deterministic-but-unique-per-load output.
   ════════════════════════════════════════════════════════════ */

/* Flow Field — particles following Perlin-like noise (SLOW) */
const flowField: AlgorithmFactory = (ctx, rng, accent, w, h) => {
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
  const tScale = 0.0008; // slower time evolution

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.04)"; // slower fade = longer trails
    ctx.fillRect(0, 0, w, h);

    const phase = frame * tScale;

    particles.forEach((p) => {
      const nx = p.x * noiseScale + phase;
      const ny = p.y * noiseScale + Math.sin(phase * 0.7) * 0.3;
      const gx = Math.floor(nx) % noiseW;
      const gy = Math.floor(ny) % noiseH;
      const idx = ((gx + noiseW) % noiseW) + ((gy + noiseH) % noiseH) * noiseW;
      const angle = angles[(idx + Math.floor(frame * 0.005)) % angles.length] + Math.sin(phase) * 0.5;

      p.vx = p.vx * 0.92 + Math.cos(angle) * 0.3; // slower acceleration
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

/* Constellation — nodes connected by edges, pulsing */
const constellation: AlgorithmFactory = (ctx, rng, accent, w, h) => {
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

    // Draw connections
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

    // Draw nodes with pulse
    nodes.forEach((n) => {
      const pulse = Math.sin(frame * n.speed + n.phase) * 0.5 + 0.5;
      const radius = n.r * (1 + pulse * 0.8);

      // Glow
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
      grad.addColorStop(0, hexToRgba(accent, pulse * 0.4));
      grad.addColorStop(1, hexToRgba(accent, 0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius * 4, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = hexToRgba(accent, 0.7 + pulse * 0.3);
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Drifting signal particle along a random connection
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

/* Vector Asteroids — procedural rotating polygon shapes */
const vectorAsteroids: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const asteroids = Array.from({ length: 5 }, () => {
    const sides = 5 + Math.floor(rng() * 5);
    const verts = Array.from({ length: sides }, () => ({
      angle: (Math.PI * 2 * rng()) / sides + rng() * 0.3,
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

  // Ship
  const ship = {
    x: w / 2,
    y: h / 2,
    angle: 0,
    thrustPhase: 0,
  };

  return (frame) => {
    // CRT dark background with slight trail
    ctx.fillStyle = "rgba(2, 2, 5, 0.2)";
    ctx.fillRect(0, 0, w, h);

    // CRT scanlines
    ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
    for (let y = 0; y < h; y += 3) {
      ctx.fillRect(0, y, w, 1);
    }

    // Draw asteroids
    asteroids.forEach((a) => {
      a.x += a.vx;
      a.y += a.vy;
      a.rot += a.rotSpeed;

      // Wrap around
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

    // Draw ship (triangle) orbiting center
    ship.angle = frame * 0.015;
    const orbitR = Math.min(w, h) * 0.2;
    ship.x = w / 2 + Math.cos(ship.angle) * orbitR;
    ship.y = h / 2 + Math.sin(ship.angle) * orbitR;

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

    // Thrust
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

    // Occasional bullet
    if (frame % 90 === 0) {
      // fire
    }
    const bulletProgress = (frame % 90) / 90;
    if (bulletProgress < 0.3) {
      const bx = ship.x + Math.cos(ship.angle + Math.PI / 2) * bulletProgress * 200;
      const by = ship.y + Math.sin(ship.angle + Math.PI / 2) * bulletProgress * 200;
      ctx.fillStyle = hexToRgba(accent, 1 - bulletProgress / 0.3);
      ctx.beginPath();
      ctx.arc(bx, by, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.6);
    vg.addColorStop(0, "rgba(0, 0, 0, 0)");
    vg.addColorStop(1, "rgba(0, 0, 0, 0.4)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, w, h);
  };
};

/* Agent Swarm — dots with seek/wander behaviors */
const agentSwarm: AlgorithmFactory = (ctx, rng, accent, w, h) => {
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
      // Behavior
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
        // Wander: add angular noise
        const angle = Math.atan2(a.vy, a.vx) + (rng() - 0.5) * 0.3;
        a.vx = a.vx * 0.95 + Math.cos(angle) * 0.15;
        a.vy = a.vy * 0.95 + Math.sin(angle) * 0.15;
      }

      // Limit speed
      const speed = Math.hypot(a.vx, a.vy);
      const maxSpeed = 1.5;
      if (speed > maxSpeed) {
        a.vx = (a.vx / speed) * maxSpeed;
        a.vy = (a.vy / speed) * maxSpeed;
      }

      a.x += a.vx;
      a.y += a.vy;

      // Bounce off edges
      if (a.x < 0) { a.x = 0; a.vx *= -1; }
      if (a.x > w) { a.x = w; a.vx *= -1; }
      if (a.y < 0) { a.y = 0; a.vy *= -1; }
      if (a.y > h) { a.y = h; a.vy *= -1; }

      // Trail
      a.trail.push([a.x, a.y]);
      if (a.trail.length > 12) a.trail.shift();

      // Draw trail
      ctx.strokeStyle = hexToRgba(accent, 0.15);
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      a.trail.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      });
      ctx.stroke();

      // Draw agent
      const c = a.hue > 0.5 ? accent : "#a855f7";
      ctx.fillStyle = hexToRgba(c, 0.6);
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();

      // Glow
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

/* Lissajous Curves — parametric curves drawing themselves */
const lissajous: AlgorithmFactory = (ctx, rng, accent, w, h) => {
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

      // Draw trail
      ctx.strokeStyle = hexToRgba(curve.color, 0.4);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      curve.points.forEach((p, i) => {
        const alpha = i / curve.points.length;
        if (i === 0) {
          ctx.moveTo(p[0], p[1]);
        } else {
          ctx.lineTo(p[0], p[1]);
        }
      });
      ctx.stroke();

      // Draw current point with glow
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

/* Token Stream — characters falling and forming */
const tokenStream: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const cols = Math.floor(w / 14);
  const tokens = ["{", "}", "[", "]", "=>", "fn", "if", "0x", "ai", "()", "<>", "||", "&&", "==", "++", "--"];
  const streams = Array.from({ length: cols }, (_, i) => ({
    x: i * 14 + 7,
    y: rng() * h,
    speed: 0.5 + rng() * 2,
    chars: Array.from({ length: 8 + Math.floor(rng() * 12) }, () => ({
      char: tokens[Math.floor(rng() * tokens.length)],
      opacity: rng(),
    })),
  }));

  return (frame) => {
    ctx.fillStyle = "rgba(10, 10, 20, 0.12)";
    ctx.fillRect(0, 0, w, h);

    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";

    streams.forEach((s) => {
      s.y += s.speed;
      if (s.y > h + s.chars.length * 12) {
        s.y = -s.chars.length * 12;
        s.speed = 0.5 + rng() * 2;
        s.chars.forEach((c) => {
          c.char = tokens[Math.floor(rng() * tokens.length)];
          c.opacity = rng();
        });
      }

      s.chars.forEach((c, i) => {
        const y = s.y - i * 12;
        if (y > -12 && y < h + 12) {
          const fade = 1 - i / s.chars.length;
          if (i === 0) {
            ctx.fillStyle = "#fff";
          } else {
            ctx.fillStyle = hexToRgba(accent, c.opacity * fade * 0.6);
          }
          ctx.fillText(c.char, s.x, y);
        }
      });
    });
  };
};

/* Dollar Decay — a $ symbol that erodes/pixelates over time, representing inflation */
const decay: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const cellSize = 8;
  const cols = Math.floor(w / cellSize);
  const rows = Math.floor(h / cellSize);

  // Generate $ shape mask
  const mask: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const cx = cols / 2;
  const cy = rows / 2;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = (c - cx) / cols;
      const dy = (r - cy) / rows;
      // Vertical bar
      if (Math.abs(dx) < 0.06 && dy > -0.35 && dy < 0.35) mask[r][c] = true;
      // Top curve
      if (dy < -0.1 && dy > -0.35 && dx > -0.25 && dx < 0.25) {
        const t = (dy + 0.35) / 0.25;
        const curveX = Math.sin(t * Math.PI) * 0.2;
        if (Math.abs(dx - curveX) < 0.08) mask[r][c] = true;
      }
      // Bottom curve
      if (dy > 0.1 && dy < 0.35 && dx > -0.25 && dx < 0.25) {
        const t = (dy - 0.1) / 0.25;
        const curveX = -Math.sin(t * Math.PI) * 0.2;
        if (Math.abs(dx - curveX) < 0.08) mask[r][c] = true;
      }
    }
  }

  interface Cell {
    decay: number;
    speed: number;
    flickerPhase: number;
  }

  const cells: Cell[] = [];
  const positions: { x: number; y: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mask[r][c]) {
        cells.push({
          decay: rng() * 0.3,
          speed: 0.0008 + rng() * 0.002,
          flickerPhase: rng() * Math.PI * 2,
        });
        positions.push({ x: c * cellSize, y: r * cellSize });
      }
    }
  }

  const cycleLength = 480; // ~8 seconds at 60fps

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.1)";
    ctx.fillRect(0, 0, w, h);

    const cycleProgress = (frame % cycleLength) / cycleLength;

    // Reset at start of each cycle
    if (frame > 0 && frame % cycleLength === 0) {
      cells.forEach((cell) => {
        cell.decay = rng() * 0.2;
      });
    }

    cells.forEach((cell, i) => {
      const pos = positions[i];
      if (!pos) return;

      cell.decay += cell.speed;

      if (cell.decay > 1) cell.decay = 1;

      const erosion = cell.decay;
      const flicker = Math.sin(frame * 0.02 + cell.flickerPhase) * 0.1 + 0.9;
      const alpha = (1 - erosion) * 0.55 * flicker;

      if (alpha > 0.02) {
        if (erosion > 0.5) {
          // Scattered fragments
          const fragCount = Math.floor((1 - erosion) * 3) + 1;
          for (let f = 0; f < fragCount; f++) {
            const fx = pos.x + cellSize / 2 + (rng() - 0.5) * cellSize * erosion * 2;
            const fy = pos.y + cellSize / 2 + (rng() - 0.5) * cellSize * erosion * 2;
            ctx.fillStyle = hexToRgba(accent, alpha * 0.5);
            ctx.beginPath();
            ctx.arc(fx, fy, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Solid block with slight jitter
          const jitter = erosion * 1.5;
          const jx = pos.x + (rng() - 0.5) * jitter;
          const jy = pos.y + (rng() - 0.5) * jitter;
          ctx.fillStyle = hexToRgba(accent, alpha);
          ctx.fillRect(jx, jy, cellSize - 1, cellSize - 1);
        }
      }
    });

    // Progress bar at bottom showing the decay cycle
    const barY = h - 3;
    ctx.fillStyle = hexToRgba(accent, 0.12);
    ctx.fillRect(0, barY, w, 1.5);
    ctx.fillStyle = hexToRgba(accent, 0.35);
    ctx.fillRect(0, barY, w * cycleProgress, 1.5);
  };
};

/* ════════════════════════════════════════════════════════════
   ALGORITHM REGISTRY
   ════════════════════════════════════════════════════════════ */

const ALGORITHMS: Record<string, AlgorithmFactory> = {
  flowField,
  constellation,
  vector: vectorAsteroids,
  network: agentSwarm,
  grid: lissajous,
  chat: tokenStream,
  decay,
};

/* ════════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════════ */

export function GenerativeArtCanvas({
  seed,
  accent,
  algorithm,
  className,
}: {
  seed: string;
  accent: string;
  algorithm: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const factory = ALGORITHMS[algorithm];
    if (!factory) return;

    // Combine project seed with timestamp on mount for unique-per-load art
    const fullSeed = hashStringToInt(`${seed}-${Date.now()}`);
    const rng = mulberry32(fullSeed);

    let rafId: number;
    let frame = 0;
    let drawFn: DrawFn | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let active = false;

    const initCanvas = (w: number, h: number) => {
      if (w === 0 || h === 0) return; // not laid out yet
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      drawFn = factory(ctx, rng, accent, w, h);
      active = true;
      frame = 0;
    };

    const loop = () => {
      if (active && drawFn) {
        drawFn(frame++);
      }
      rafId = requestAnimationFrame(loop);
    };

    // Use ResizeObserver to detect when canvas gets real dimensions
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          // Cancel existing loop, re-init with new dimensions
          cancelAnimationFrame(rafId);
          active = false;
          initCanvas(width, height);
          loop();
        }
      }
    });

    ro.observe(canvas);

    // Also try immediately in case dimensions are already available
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      initCanvas(rect.width, rect.height);
      loop();
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [seed, accent, algorithm]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} />;
}