import type { AlgorithmFactory } from "./utils";
import { hexToRgba } from "./utils";

/* Token Stream — characters falling and forming */
export const tokenStream: AlgorithmFactory = (ctx, rng, accent, w, h) => {
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
