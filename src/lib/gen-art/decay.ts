import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Dollar Decay — renders a $ via canvas text, samples pixels, erodes them over time */
export const decay: AlgorithmFactory = (ctx, rng, accent, w, h) => {
  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const octx = off.getContext("2d");
  if (!octx) return () => {};

  const fontSize = Math.min(w, h) * 0.75;
  octx.fillStyle = "#fff";
  octx.font = `bold ${fontSize}px Arial, sans-serif`;
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  octx.fillText("$", w / 2, h / 2);

  const imgData = octx.getImageData(0, 0, w, h);
  const pixels = imgData.data;

  const sampleStep = 3;
  interface Cell {
    x: number; y: number;
    vx: number; vy: number;
    decay: number; speed: number; flickerPhase: number;
    origX: number; origY: number;
  }
  const cells: Cell[] = [];
  for (let y = 0; y < h; y += sampleStep) {
    for (let x = 0; x < w; x += sampleStep) {
      const idx = (y * w + x) * 4;
      if (pixels[idx + 3] > 128) {
        cells.push({
          x, y,
          vx: 0, vy: 0,
          decay: rng() * 0.2,
          speed: 0.0008 + rng() * 0.0025,
          flickerPhase: rng() * Math.PI * 2,
          origX: x, origY: y,
        });
      }
    }
  }

  const cellSize = sampleStep;
  const cycleLength = 480;

  return (frame) => {
    ctx.fillStyle = "rgba(7, 7, 15, 0.1)";
    ctx.fillRect(0, 0, w, h);

    const cycleProgress = (frame % cycleLength) / cycleLength;

    if (frame > 0 && frame % cycleLength === 0) {
      cells.forEach((cell) => {
        cell.decay = rng() * 0.2;
        cell.x = cell.origX;
        cell.y = cell.origY;
        cell.vx = 0;
        cell.vy = 0;
      });
    }

    cells.forEach((cell) => {
      cell.decay += cell.speed;
      if (cell.decay > 1) cell.decay = 1;

      const erosion = cell.decay;
      const flicker = Math.sin(frame * 0.02 + cell.flickerPhase) * 0.1 + 0.9;
      const alpha = (1 - erosion * 0.7) * 0.65 * flicker;

      let r: number, g: number, b: number;
      if (erosion < 0.5) {
        const t = erosion / 0.5;
        r = Math.round(251 + (101 - 251) * t);
        g = Math.round(191 + (160 - 191) * t);
        b = Math.round(36 + (48 - 36) * t);
      } else {
        const t = (erosion - 0.5) / 0.5;
        r = Math.round(101 + (92 - 101) * t);
        g = Math.round(160 + (58 - 160) * t);
        b = Math.round(48 + (30 - 48) * t);
      }

      if (erosion > 0.3) {
        const fallStrength = (erosion - 0.3) * 0.15;
        cell.vy += fallStrength;
        cell.vx += (rng() - 0.5) * fallStrength * 0.5;
      }
      cell.x += cell.vx;
      cell.y += cell.vy;

      let drawAlpha = alpha;
      if (cell.y > h - 10) {
        drawAlpha = alpha * Math.max(0, 1 - (cell.y - (h - 10)) / 20);
      }

      if (drawAlpha > 0.02 && cell.y < h + 20) {
        if (erosion > 0.6) {
          const fragCount = Math.floor((1 - erosion) * 2) + 1;
          for (let f = 0; f < fragCount; f++) {
            const fx = cell.x + (rng() - 0.5) * cellSize * erosion * 3;
            const fy = cell.y + (rng() - 0.5) * cellSize * erosion * 3;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${drawAlpha * 0.5})`;
            ctx.beginPath();
            ctx.arc(fx, fy, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          const jitter = erosion * 1.5;
          const jx = cell.x + (rng() - 0.5) * jitter;
          const jy = cell.y + (rng() - 0.5) * jitter;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${drawAlpha})`;
          ctx.fillRect(jx, jy, cellSize, cellSize);
        }
      }
    });

    const barY = h - 3;
    ctx.fillStyle = hexToRgba(accent, 0.12);
    ctx.fillRect(0, barY, w, 1.5);
    ctx.fillStyle = hexToRgba(accent, 0.35);
    ctx.fillRect(0, barY, w * cycleProgress, 1.5);
  };
};
