import { useState } from "react";
import { Play } from "lucide-react";
import type { AnimationKind, ProjectMedia } from "@/lib/types";

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

function AnimationPreview({ kind, accent }: { kind: AnimationKind; accent: string }) {
  switch (kind) {
    case "aurora": return <Aurora accent={accent} />;
    case "orbit": return <Orbit accent={accent} />;
    case "wave": return <Wave accent={accent} />;
    case "scan": return <Scan accent={accent} />;
    case "mesh": return <Mesh accent={accent} />;
    case "shimmer": return <Shimmer accent={accent} />;
  }
}

export function MediaPreview({
  media,
  className = "",
  priority = false,
}: {
  media: ProjectMedia;
  className?: string;
  priority?: boolean;
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

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimationPreview kind={media.animation || "aurora"} accent={accent} />
    </div>
  );
}
