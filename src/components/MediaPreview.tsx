import { useState } from "react";
import { Play } from "lucide-react";
import type { AnimationKind, ProjectMedia } from "@/lib/types";
import { GenerativeArtCanvas } from "./GenerativeArtCanvas";

/* ── existing animations ── */

function Aurora({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07070f]">
      <div
        className="absolute inset-0 animate-[aurora-pan_12s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(35% 45% at 25% 30%, ${accent}55, transparent 60%),
                       radial-gradient(40% 50% at 75% 35%, #a855f755, transparent 60%),
                       radial-gradient(45% 55% at 50% 80%, #f472b644, transparent 60%)`,
          backgroundSize: "200% 200%",
          filter: "blur(14px)",
          animation: "aurora-pan 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}

function Orbit({ accent }: { accent: string }) {
  const nodes = ["#22d3ee", "#a855f7", "#f472b6", "#a3e635"];
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#07070f]">
      <div className="absolute h-24 w-24 rounded-full" style={{ boxShadow: `0 0 60px 6px ${accent}55`, background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute animate-spin-slow"
          style={{ width: 230 - i * 40, height: 230 - i * 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,.06)", animationDuration: `${10 + i * 4}s`, animationDirection: i % 2 ? "reverse" : "normal" }}
        >
          <span
            className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
            style={{ background: nodes[i], boxShadow: `0 0 12px ${nodes[i]}` }}
          />
        </div>
      ))}
    </div>
  );
}

function Wave({ accent }: { accent: string }) {
  return (
    <div className="flex h-full w-full items-end justify-center gap-1.5 bg-[#07070f] pb-10">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: "100%",
            borderRadius: 4,
            background: `linear-gradient(to top, ${accent}, #a855f7)`,
            transformOrigin: "bottom",
            animation: `bars ${1.1 + (i % 5) * 0.18}s ease-in-out ${i * 0.05}s infinite`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

function Scan({ accent }: { accent: string }) {
  const lines = ["$ hermes run --agent dev", "▸ loading model runtime", "▸ indexing sessions …", "▸ 1,204 conversations", "✓ ready in 0.8s", "⟩ awaiting input"];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05050b] font-mono text-[11px] leading-relaxed p-4">
      <div className="space-y-1">
        {lines.map((l, i) => (
          <div key={i} style={{ color: i === lines.length - 1 ? accent : "rgba(255,255,255,.45)", animation: `blink ${2 + i * 0.3}s ease-in-out ${i * 0.4}s infinite` }}>
            {l}
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}22, transparent)`, animation: "scan 4s linear infinite" }}
      />
    </div>
  );
}

function Mesh({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#07070f]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(${accent}22 1px, transparent 1px), linear-gradient(90deg, ${accent}22 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          animation: "grid-pan 6s linear infinite",
          maskImage: "radial-gradient(circle at center, #000 30%, transparent 75%)",
        }}
      />
      <div className="relative h-28 w-28 rounded-full" style={{ border: `1px solid ${accent}66` }}>
        <div className="absolute inset-3 rounded-full animate-pulse-glow" style={{ border: `1px solid ${accent}55` }} />
        <div className="absolute inset-6 rounded-full animate-pulse-glow" style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)`, animationDelay: "1s" }} />
      </div>
    </div>
  );
}

function Shimmer({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#07070f]">
      <div
        className="h-24 w-24 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${accent}, #a855f7, #f472b6, ${accent})`, backgroundSize: "300% 300%", animation: "gradient-pan 4s linear infinite", boxShadow: `0 0 40px ${accent}55` }}
      />
      <div className="shimmer-sweep" />
    </div>
  );
}

/* ── new project-specific animations ── */

/** Asteroids — CRT vector graphics with flicker */
function Vector({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#020205]">
      {/* CRT scanlines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.15) 2px, rgba(255,255,255,.15) 4px)" }} />
      {/* flickering asteroid shapes */}
      <svg viewBox="0 0 200 200" className="h-3/4 w-3/4" style={{ filter: `drop-shadow(0 0 3px ${accent})` }}>
        {/* asteroid 1 */}
        <g style={{ animation: "spin-slow 8s linear infinite", transformOrigin: "100px 100px" }}>
          <polygon points="100,20 140,50 160,100 130,150 80,160 40,130 30,80 50,40" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.9" />
        </g>
        {/* asteroid 2 */}
        <g style={{ animation: "spin-slow 12s linear infinite reverse", transformOrigin: "100px 100px" }}>
          <polygon points="120,60 150,80 155,120 130,145 90,140 65,110 70,75" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
        </g>
        {/* ship */}
        <g style={{ animation: "float-y 3s ease-in-out infinite" }}>
          <polygon points="100,90 85,110 100,105 115,110" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.8" />
        </g>
        {/* bullet */}
        <circle cx="100" cy="70" r="1.5" fill={accent} style={{ animation: "float-y 0.6s ease-in-out infinite" }} />
      </svg>
      {/* CRT vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.6) 100%)" }} />
    </div>
  );
}

/** Inflation Calculator — animated bar chart */
function Chart({ accent }: { accent: string }) {
  const bars = [0.3, 0.5, 0.4, 0.7, 0.55, 0.8, 0.6, 0.9, 0.65, 0.85, 0.5, 0.75, 0.45, 0.6, 0.35, 0.5, 0.3, 0.4, 0.25, 0.35];
  return (
    <div className="relative flex h-full w-full items-end justify-center gap-[3px] bg-[#07070f] px-6 pb-8">
      {/* grid lines */}
      <div className="absolute inset-x-6 top-4 bottom-8 flex flex-col justify-between">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-t border-white/[0.04]" />
        ))}
      </div>
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[3%] rounded-t-sm"
          style={{
            height: `${h * 100}%`,
            background: `linear-gradient(to top, ${accent}88, ${accent})`,
            animation: `bars ${1.5 + (i % 4) * 0.2}s ease-in-out ${i * 0.08}s infinite`,
            transformOrigin: "bottom",
            opacity: 0.8,
          }}
        />
      ))}
      {/* trend line */}
      <svg className="absolute inset-x-6 top-4 bottom-8" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polyline
          points="0,70 5,50 10,60 15,30 20,45 25,20 30,40 35,10 40,35 45,15 50,25 55,40 60,35 65,50 70,45 75,55 80,60 85,65 90,70 95,65 100,60"
          fill="none" stroke={accent} strokeWidth="0.8" opacity="0.5"
          style={{ strokeDasharray: "200", strokeDashoffset: "200", animation: "dash-draw 3s ease-out forwards" }}
        />
      </svg>
    </div>
  );
}

/** Motion & Tween — animated easing curves */
function Curves({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#07070f]">
      <svg viewBox="0 0 200 160" className="h-3/4 w-3/4">
        {/* axes */}
        <line x1="20" y1="140" x2="190" y2="140" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
        <line x1="20" y1="140" x2="20" y2="10" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
        {/* linear */}
        <line x1="20" y1="140" x2="190" y2="10" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        {/* ease-out (quadratic) */}
        <path d="M20,140 Q100,140 190,10" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.5" style={{ strokeDasharray: "300", strokeDashoffset: "300", animation: "dash-draw 2s ease-out 0.3s forwards" }} />
        {/* ease-in (cubic) */}
        <path d="M20,140 C20,10 100,10 190,10" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.5" style={{ strokeDasharray: "300", strokeDashoffset: "300", animation: "dash-draw 2s ease-out 0.6s forwards" }} />
        {/* ease-in-out */}
        <path d="M20,140 C80,140 120,10 190,10" fill="none" stroke="#a3e635" strokeWidth="1.5" opacity="0.5" style={{ strokeDasharray: "300", strokeDashoffset: "300", animation: "dash-draw 2s ease-out 0.9s forwards" }} />
        {/* bouncing dot */}
        <circle r="4" fill="#fff" style={{ animation: "bounce-curve 3s ease-in-out infinite" }}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M20,140 Q100,140 190,10" />
        </circle>
      </svg>
    </div>
  );
}

/** Joust — flapping knight silhouette */
function Knight({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#0a0510]">
      {/* lava floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4" style={{ background: `linear-gradient(to top, ${accent}33, transparent)` }}>
        <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: `linear-gradient(to right, ${accent}, #f97316, ${accent})`, animation: "gradient-pan 3s linear infinite", backgroundSize: "200% 100%" }} />
      </div>
      {/* knight on ostrich silhouette */}
      <svg viewBox="0 0 120 120" className="relative z-10 h-2/3 w-2/3" style={{ animation: "float-y 2.5s ease-in-out infinite" }}>
        {/* ostrich body */}
        <ellipse cx="60" cy="75" rx="18" ry="12" fill={accent} opacity="0.3" />
        {/* legs */}
        <line x1="52" y1="85" x2="48" y2="105" stroke={accent} strokeWidth="2" opacity="0.5" style={{ animation: "knight-leg 0.4s ease-in-out infinite alternate" }} />
        <line x1="68" y1="85" x2="72" y2="105" stroke={accent} strokeWidth="2" opacity="0.5" style={{ animation: "knight-leg 0.4s ease-in-out 0.2s infinite alternate" }} />
        {/* rider */}
        <circle cx="60" cy="55" r="8" fill={accent} opacity="0.4" />
        <rect x="56" y="63" width="8" height="12" rx="2" fill={accent} opacity="0.35" />
        {/* lance */}
        <line x1="68" y1="58" x2="95" y2="45" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
        {/* wing flap */}
        <ellipse cx="45" cy="65" rx="12" ry="6" fill={accent} opacity="0.2" style={{ transformOrigin: "45px 65px", animation: "wing-flap 0.3s ease-in-out infinite alternate" }} />
      </svg>
      {/* floating embers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute bottom-0 h-1 w-1 rounded-full"
          style={{
            left: `${20 + i * 18}%`,
            background: accent,
            animation: `float-up ${2 + i * 0.5}s ease-out ${i * 0.7}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/** Local LLM Chat — streaming chat bubbles */
function Chat({ accent }: { accent: string }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end gap-3 bg-[#0a0a14] p-5">
      {/* user message */}
      <div className="ml-auto w-3/5 rounded-2xl rounded-br-md px-4 py-2.5 text-xs text-white/90" style={{ background: `${accent}33`, border: `1px solid ${accent}44` }}>
        What's the best way to handle SSE streaming in React?
      </div>
      {/* assistant typing */}
      <div className="w-4/5 rounded-2xl rounded-bl-md px-4 py-2.5 text-xs" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
        <span className="text-white/80">Great question! For SSE streaming, you'll want to use </span>
        <span className="text-white/80" style={{ animation: "blink 1s step-end infinite" }}>▌</span>
      </div>
      {/* cursor blink */}
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ background: accent, animation: "blink 1.4s ease-in-out infinite" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: accent, animation: "blink 1.4s ease-in-out 0.2s infinite" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: accent, animation: "blink 1.4s ease-in-out 0.4s infinite" }} />
      </div>
    </div>
  );
}

/** UX Critique Tool — magnifying glass scanning a UI */
function Magnify({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#0a0a14]">
      {/* fake UI underneath */}
      <div className="absolute inset-0 p-6 opacity-20">
        <div className="mb-3 h-3 w-1/3 rounded bg-white/30" />
        <div className="mb-2 h-2 w-2/3 rounded bg-white/20" />
        <div className="mb-2 h-2 w-1/2 rounded bg-white/20" />
        <div className="mb-4 h-2 w-3/4 rounded bg-white/20" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 rounded-lg border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
      {/* magnifying glass */}
      <div className="relative z-10" style={{ animation: "magnify-scan 4s ease-in-out infinite" }}>
        <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
          <circle cx="35" cy="35" r="22" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.8" />
          <line x1="51" y1="51" x2="68" y2="68" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          {/* crosshair inside lens */}
          <line x1="35" y1="20" x2="35" y2="50" stroke={accent} strokeWidth="0.8" opacity="0.4" />
          <line x1="20" y1="35" x2="50" y2="35" stroke={accent} strokeWidth="0.8" opacity="0.4" />
        </svg>
      </div>
      {/* annotation boxes appearing */}
      {[
        { x: 15, y: 20, w: 60, h: 12, delay: 0 },
        { x: 25, y: 55, w: 40, h: 8, delay: 1.5 },
      ].map((box, i) => (
        <div
          key={i}
          className="absolute rounded-sm border opacity-0"
          style={{
            left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%`,
            borderColor: accent,
            animation: `annotation-pop 4s ease-in-out ${box.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Mission Control — radar/dashboard */
function Dashboard({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#060610]">
      {/* radar rings */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${60 + i * 50}px`, height: `${60 + i * 50}px`,
            borderColor: `${accent}${[44, 33, 22, 11][i]}`,
            animation: `pulse-glow ${3 + i}s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}
      {/* radar sweep */}
      <div className="absolute h-[160px] w-[160px] overflow-hidden rounded-full" style={{ background: `conic-gradient(from 0deg, ${accent}22 0deg, transparent 60deg)` }}>
        <div className="absolute inset-0 origin-center" style={{ animation: "spin-slow 4s linear infinite" }}>
          <div className="h-1/2 w-[2px] bg-gradient-to-t from-transparent to-white/60" style={{ margin: "0 auto" }} />
        </div>
      </div>
      {/* center dot */}
      <div className="relative z-10 h-3 w-3 rounded-full" style={{ background: accent, boxShadow: `0 0 12px ${accent}` }} />
      {/* status indicators */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        {["#22d3ee", "#a3e635", "#fbbf24", "#f472b6"].map((c, i) => (
          <div key={i} className="h-2 w-2 rounded-full" style={{ background: c, animation: `blink ${1.5 + i * 0.3}s ease-in-out ${i * 0.4}s infinite` }} />
        ))}
      </div>
    </div>
  );
}

/** Hyperfocus Planner — calendar/clock */
function Calendar({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#080812]">
      {/* clock face */}
      <svg viewBox="0 0 100 100" className="h-2/3 w-2/3">
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        {/* hour markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 50 + 35 * Math.cos(angle);
          const y1 = 50 + 35 * Math.sin(angle);
          const x2 = 50 + 40 * Math.cos(angle);
          const y2 = 50 + 40 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,.15)" strokeWidth="1" />;
        })}
        {/* hour hand */}
        <line x1="50" y1="50" x2="50" y2="28" stroke="#fff" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: "50px 50px", animation: "spin-slow 24s linear infinite" }} />
        {/* minute hand */}
        <line x1="50" y1="50" x2="70" y2="50" stroke={accent} strokeWidth="1.5" strokeLinecap="round" style={{ transformOrigin: "50px 50px", animation: "spin-slow 4s linear infinite" }} />
        <circle cx="50" cy="50" r="2.5" fill={accent} />
      </svg>
      {/* checklist items */}
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
        {["Deep work sprint", "Code review", "Planning session"].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] text-white/50">
            <div className="h-3 w-3 rounded border border-white/20" style={i === 0 ? { background: accent, borderColor: accent } : {}} />
            <span style={i === 0 ? { textDecoration: "line-through", opacity: 0.4 } : {}}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Game Clawtroller — gamepad */
function Gamepad({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#080812]">
      <svg viewBox="0 0 160 100" className="h-2/3 w-2/3">
        {/* body */}
        <path d="M30,50 Q30,20 60,20 L100,20 Q130,20 130,50 Q130,80 110,80 L100,60 L60,60 L50,80 Q30,80 30,50Z" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        {/* d-pad */}
        <rect x="45" y="35" width="20" height="20" rx="3" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
        <rect x="52" y="38" width="6" height="14" rx="1" fill="rgba(255,255,255,.1)" />
        <rect x="45" y="42" width="20" height="6" rx="1" fill="rgba(255,255,255,.1)" />
        {/* buttons */}
        <circle cx="95" cy="40" r="5" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.6" style={{ animation: "blink 2s ease-in-out infinite" }} />
        <circle cx="108" cy="35" r="5" fill="none" stroke="#a3e635" strokeWidth="1" opacity="0.6" style={{ animation: "blink 2s ease-in-out 0.3s infinite" }} />
        <circle cx="108" cy="48" r="5" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.6" style={{ animation: "blink 2s ease-in-out 0.6s infinite" }} />
        <circle cx="95" cy="52" r="5" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.6" style={{ animation: "blink 2s ease-in-out 0.9s infinite" }} />
        {/* connection lines between controllers */}
        <line x1="80" y1="45" x2="80" y2="45" stroke={accent} strokeWidth="1" opacity="0" />
      </svg>
      {/* player indicators */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/40">
        P1 ←→ P2
      </div>
    </div>
  );
}

/** Agentic Patterns — network nodes */
function Network({ accent }: { accent: string }) {
  const nodes = [
    { x: 30, y: 30 }, { x: 70, y: 20 }, { x: 50, y: 60 },
    { x: 20, y: 70 }, { x: 80, y: 70 }, { x: 50, y: 40 },
  ];
  return (
    <div className="relative h-full w-full bg-[#07070f]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* connections */}
        {nodes.flatMap((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={accent} strokeWidth="0.4" opacity="0.15"
            />
          ))
        )}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="3" fill={accent} opacity="0.6" style={{ animation: `pulse-glow 2s ease-in-out ${i * 0.3}s infinite` }} />
            <circle cx={n.x} cy={n.y} r="8" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.2" style={{ animation: `pulse-glow 2s ease-in-out ${i * 0.3}s infinite` }} />
          </g>
        ))}
        {/* data flow particles */}
        {[0, 1, 2].map((i) => (
          <circle key={`p-${i}`} r="1.5" fill="#fff" opacity="0" style={{ animation: `network-particle 3s ease-in-out ${i * 1}s infinite` }}>
            <animateMotion dur="3s" repeatCount="indefinite" path={`M${nodes[i * 2].x},${nodes[i * 2].y} L${nodes[i * 2 + 1].x},${nodes[i * 2 + 1].y}`} />
          </circle>
        ))}
      </svg>
    </div>
  );
}

/** ES Vector Math — coordinate grid */
function Grid({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#07070f]">
      <svg viewBox="0 0 100 100" className="h-3/4 w-3/4">
        {/* grid */}
        {[20, 40, 60, 80].map((p) => (
          <g key={p}>
            <line x1={p} y1="0" x2={p} y2="100" stroke="rgba(255,255,255,.04)" strokeWidth="0.5" />
            <line x1="0" y1={p} x2="100" y2={p} stroke="rgba(255,255,255,.04)" strokeWidth="0.5" />
          </g>
        ))}
        {/* axes */}
        <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,.15)" strokeWidth="0.8" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,.15)" strokeWidth="0.8" />
        {/* vectors */}
        <line x1="50" y1="50" x2="75" y2="30" stroke={accent} strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" style={{ animation: "float-y 3s ease-in-out infinite" }} />
        <line x1="50" y1="50" x2="35" y2="70" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow2)" opacity="0.7" style={{ animation: "float-y 3s ease-in-out 0.5s infinite" }} />
        <line x1="50" y1="50" x2="80" y2="65" stroke="#f472b6" strokeWidth="1" markerEnd="url(#arrow3)" opacity="0.5" style={{ animation: "float-y 3s ease-in-out 1s infinite" }} />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10Z" fill={accent} />
          </marker>
          <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10Z" fill="#a855f7" />
          </marker>
          <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10Z" fill="#f472b6" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

/** System77 — retro pixel art */
function Pixels({ accent }: { accent: string }) {
  const grid = Array.from({ length: 12 }, () => Array.from({ length: 16 }, () => Math.random() > 0.7));
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#0a0a0a]">
      <div className="grid gap-[2px]" style={{ gridTemplateColumns: "repeat(16, 1fr)" }}>
        {grid.flat().map((on, i) => (
          <div
            key={i}
            className="transition-colors duration-700"
            style={{
              width: "14px", height: "14px",
              background: on ? accent : "transparent",
              opacity: on ? 0.7 : 0,
              animation: on ? `blink ${1 + Math.random() * 2}s ease-in-out ${Math.random()}s infinite` : "none",
            }}
          />
        ))}
      </div>
      {/* scanline overlay */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.15) 3px, rgba(0,0,0,.15) 6px)" }} />
    </div>
  );
}

/** Jira Python Book — book pages */
function Book({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#0a0a14]">
      <div className="relative flex" style={{ perspective: "600px" }}>
        {/* left page */}
        <div className="h-32 w-24 rounded-l-lg border border-white/10 bg-white/[0.03] p-3" style={{ transform: "rotateY(5deg)", transformOrigin: "right center" }}>
          <div className="mb-2 h-1.5 w-3/4 rounded bg-white/10" />
          <div className="mb-1 h-1 w-full rounded bg-white/5" />
          <div className="mb-1 h-1 w-5/6 rounded bg-white/5" />
          <div className="mb-1 h-1 w-2/3 rounded bg-white/5" />
          <div className="h-1 w-3/4 rounded bg-white/5" />
        </div>
        {/* right page */}
        <div className="h-32 w-24 rounded-r-lg border border-white/10 bg-white/[0.04] p-3" style={{ transform: "rotateY(-5deg)", transformOrigin: "left center" }}>
          <div className="mb-2 h-1.5 w-2/3 rounded bg-white/10" />
          <div className="mb-1 h-1 w-full rounded bg-white/5" />
          <div className="mb-1 h-1 w-4/5 rounded bg-white/5" />
          {/* code block */}
          <div className="mt-2 rounded bg-black/30 p-1.5">
            <div className="h-0.5 w-3/4 rounded" style={{ background: accent, opacity: 0.5 }} />
            <div className="mt-1 h-0.5 w-1/2 rounded bg-white/10" />
            <div className="mt-0.5 h-0.5 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* page turn hint */}
      <div className="absolute bottom-3 right-6 text-[9px] text-white/20 italic">import atlassian</div>
    </div>
  );
}

/** Clean Architecture — layered diagram */
function Layers({ accent }: { accent: string }) {
  const layerColors = [accent, "#a855f7", "#f472b6", "#22d3ee"];
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#080812]">
      {layerColors.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-lg border"
          style={{
            width: `${70 - i * 12}%`, height: `${50 - i * 8}%`,
            borderColor: `${c}44`,
            background: `${c}08`,
            animation: `float-y ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
          }}
        >
          <span className="absolute left-2 top-1.5 text-[9px] font-mono text-white/30">
            {["Domain", "Data", "Presentation", "Infrastructure"][i]}
          </span>
        </div>
      ))}
      {/* arrows between layers */}
      {[0, 1, 2].map((i) => (
        <div key={`a-${i}`} className="absolute text-white/15" style={{ top: `${35 + i * 12}%`, animation: `blink 2s ease-in-out ${i * 0.5}s infinite` }}>
          ↓
        </div>
      ))}
    </div>
  );
}

/** Pomodoro — timer */
function Timer({ accent }: { accent: string }) {
  return (
    <div className="relative grid h-full w-full place-items-center bg-[#080812]">
      {/* progress ring */}
      <svg viewBox="0 0 100 100" className="h-2/3 w-2/3">
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="3" />
        <circle
          cx="50" cy="50" r="38" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round"
          strokeDasharray="238.76" strokeDashoffset="60"
          style={{ transform: "rotate(-90deg)", transformOrigin: "50px 50px", transition: "stroke-dashoffset 1s linear" }}
          opacity="0.8"
        />
        {/* time text */}
        <text x="50" y="47" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Space Grotesk, monospace" fontWeight="700">18:42</text>
        <text x="50" y="60" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace" opacity="0.6">FOCUS</text>
      </svg>
      {/* pulsing ring */}
      <div className="absolute h-24 w-24 rounded-full animate-pulse-glow" style={{ border: `1px solid ${accent}33` }} />
    </div>
  );
}

/* ── dispatcher ── */

function AnimationPreview({ kind, accent }: { kind: AnimationKind; accent: string }) {
  switch (kind) {
    case "aurora": return <Aurora accent={accent} />;
    case "orbit": return <Orbit accent={accent} />;
    case "wave": return <Wave accent={accent} />;
    case "scan": return <Scan accent={accent} />;
    case "mesh": return <Mesh accent={accent} />;
    case "shimmer": return <Shimmer accent={accent} />;
    case "vector": return <Vector accent={accent} />;
    case "chart": return <Chart accent={accent} />;
    case "decay": return <Chart accent={accent} />; // fallback — generative canvas handles this
    case "curves": return <Curves accent={accent} />;
    case "knight": return <Knight accent={accent} />;
    case "chat": return <Chat accent={accent} />;
    case "magnify": return <Magnify accent={accent} />;
    case "dashboard": return <Dashboard accent={accent} />;
    case "calendar": return <Calendar accent={accent} />;
    case "gamepad": return <Gamepad accent={accent} />;
    case "network": return <Network accent={accent} />;
    case "grid": return <Grid accent={accent} />;
    case "pixels": return <Pixels accent={accent} />;
    case "book": return <Book accent={accent} />;
    case "layers": return <Layers accent={accent} />;
    case "timer": return <Timer accent={accent} />;
  }
}

/* ── generative art mapping ── */
// Projects that use generative canvas art instead of CSS animations.
// Key = animation kind from seed.ts, Value = generative algorithm name.
const GENERATIVE_MAP: Partial<Record<AnimationKind, string>> = {
  vector: "vector",        // asteroids → vector asteroid field
  dashboard: "constellation", // mission control → constellation map
  network: "network",      // agentic patterns → agent swarm
  grid: "grid",            // es-vector-math → lissajous curves
  chat: "chat",            // local-llm-chat → token stream
  chart: "flowField",      // nasa cost estimator → flow field
  decay: "decay",          // inflation calculator → dollar decay
};

export function MediaPreview({
  media,
  className = "",
  priority = false,
  projectId = "",
}: {
  media: ProjectMedia;
  className?: string;
  priority?: boolean;
  projectId?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const accent = media.accent || "#22d3ee";

  if (media.type === "image" && media.url) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={media.url}
          alt=""
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (media.type === "video" && media.url) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        {playing ? (
          <video
            src={media.url}
            poster={media.poster}
            controls
            autoPlay
            className="h-full w-full object-contain"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 grid place-items-center focusable"
            aria-label="Play video"
          >
            {media.poster ? (
              <img src={media.poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a16] to-[#120a1f]" />
            )}
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition group-hover:scale-110 group-hover:bg-white/20">
              <Play className="ml-1 h-7 w-7 text-white" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    );
  }

  const animKind = media.animation || "aurora";
  const generativeAlgo = GENERATIVE_MAP[animKind];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {generativeAlgo ? (
        <GenerativeArtCanvas
          seed={projectId || animKind}
          accent={accent}
          algorithm={generativeAlgo}
          className="h-full w-full"
        />
      ) : (
        <AnimationPreview kind={animKind} accent={accent} />
      )}
    </div>
  );
}
