import { useRef, useEffect } from "react";
import { ALGORITHMS } from "@/lib/gen-art";
import { hashStringToInt, mulberry32 } from "@/lib/gen-art/utils";
import type { DrawFn } from "@/lib/gen-art/utils";

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

    const fullSeed = hashStringToInt(`${seed}-${Date.now()}`);
    const rng = mulberry32(fullSeed);

    let rafId: number;
    let frame = 0;
    let drawFn: DrawFn | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let active = false;

    const initCanvas = (w: number, h: number) => {
      if (w === 0 || h === 0) return;
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

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          cancelAnimationFrame(rafId);
          active = false;
          initCanvas(width, height);
          loop();
        }
      }
    });

    ro.observe(canvas);

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
