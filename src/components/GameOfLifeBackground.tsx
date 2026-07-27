import { useRef, useEffect } from "react";

const CELL_SIZE = 3;
const TICK_MS = 220; // ~4.5 generations per second — slow, subtle
const RESEED_INTERVAL = 600; // generations between reseeds
const ALPHA = 0.15;

function createGrid(cols: number, rows: number): Uint8Array {
  const grid = new Uint8Array(cols * rows);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = Math.random() < 0.18 ? 1 : 0;
  }
  return grid;
}

function tick(grid: Uint8Array, cols: number, rows: number): Uint8Array {
  const next = new Uint8Array(cols * rows);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let neighbors = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = (x + dx + cols) % cols;
          const ny = (y + dy + rows) % rows;
          neighbors += grid[ny * cols + nx];
        }
      }
      const idx = y * cols + x;
      if (grid[idx]) {
        next[idx] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        next[idx] = neighbors === 3 ? 1 : 0;
      }
    }
  }
  return next;
}

export function GameOfLifeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let grid: Uint8Array;
    let generation = 0;
    let lastTick = 0;
    let rafId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / CELL_SIZE);
      rows = Math.ceil(h / CELL_SIZE);
      grid = createGrid(cols, rows);
      generation = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(34, 211, 238, ${ALPHA})`;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (grid[y * cols + x]) {
            ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
          }
        }
      }
    };

    const loop = (now: number) => {
      if (now - lastTick >= TICK_MS) {
        grid = tick(grid, cols, rows);
        generation++;
        lastTick = now;

        // Reseed periodically to keep it from going static
        if (generation % RESEED_INTERVAL === 0) {
          grid = createGrid(cols, rows);
        }

        draw();
      }
      rafId = requestAnimationFrame(loop);
    };

    resize();
    draw();
    rafId = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
