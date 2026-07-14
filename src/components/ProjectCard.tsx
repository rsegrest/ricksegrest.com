import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Video, Sparkles } from "lucide-react";
import type { Project } from "@/lib/types";
import { formatDate, formatStars, hueFromString } from "@/lib/utils";
import { MediaPreview } from "./MediaPreview";

export const ProjectCard = forwardRef<HTMLDivElement, {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}>(function ProjectCard({ project, index, onOpen }, ref) {
  const tags = project.tags.slice(0, 4);
  const extra = project.tags.length - tags.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen(project))}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[var(--radius-card)] glass focusable outline-none transition-transform duration-300 hover:-translate-y-1.5"
      >
        {/* glow on hover */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[var(--radius-card)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(60% 50% at 50% 0%, ${project.media.accent || "#a855f7"}22, transparent 70%)`, boxShadow: `inset 0 1px 0 rgba(255,255,255,.08)` }}
        />

        {/* media */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <MediaPreview media={project.media} priority={index < 4} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />

          <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md ring-1 ring-white/10">
            {project.category}
          </span>

          {project.featured && (
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-violet-400/20 px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/15 backdrop-blur-md">
              <Sparkles className="h-3 w-3" /> Featured
            </span>
          )}

          <span className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-md ring-1 ring-white/15 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View →
          </span>
        </div>

        {/* body */}
        <div className="relative flex flex-1 flex-col gap-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold leading-tight text-white">
              {project.title}
            </h3>
            {project.githubRepo && (
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/20">
                <Star className="h-3 w-3" fill="currentColor" />
                {formatStars(project.stars)}
              </span>
            )}
          </div>

          <p className="line-clamp-2 text-sm text-[var(--color-fg-muted)]">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {tags.map((t) => {
              const c = `hsl(${hueFromString(t)} 80% 70%)`;
              return (
                <span key={t} className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: `color-mix(in oklch, ${c} 14%, transparent)`, border: `1px solid color-mix(in oklch, ${c} 40%, transparent)`, color: c }}>
                  {t}
                </span>
              );
            })}
            {extra > 0 && <span className="text-[11px] text-[var(--color-fg-muted)]">+{extra}</span>}
          </div>

          <div className="flex items-center gap-2 pt-1">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/90 transition hover:bg-white/10 ring-1 ring-white/10">
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </a>
            )}
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/90 transition hover:bg-white/10 ring-1 ring-white/10">
                <Github className="h-3.5 w-3.5" /> Repo
              </a>
            )}
            {project.links.promo && (
              <a href={project.links.promo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/90 transition hover:bg-white/10 ring-1 ring-white/10">
                <Video className="h-3.5 w-3.5" /> Promo
              </a>
            )}
            <span className="ml-auto text-[11px] text-[var(--color-fg-muted)]">{formatDate(project.date)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
