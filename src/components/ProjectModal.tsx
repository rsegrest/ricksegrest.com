import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ExternalLink, Github, Star, Video, X, Calendar, Tag, Folder, Pencil } from "lucide-react";
import type { Project } from "@/lib/types";
import { formatDate, formatStars, hueFromString } from "@/lib/utils";
import { MediaPreview } from "./MediaPreview";

export function ProjectModal({
  project,
  onClose,
  onEdit,
}: {
  project: Project | null;
  onClose: () => void;
  onEdit?: (p: Project) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-card)] glass-strong"
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 transition hover:bg-white/20 focusable" aria-label="Close">
              <X className="h-4 w-4" />
            </button>

            {/* media */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <MediaPreview media={project.media} priority className="h-full w-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="rounded-full bg-gradient-to-r from-cyan-400/25 to-violet-400/25 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
                {project.githubRepo && false && (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-1 text-sm font-semibold text-amber-300 ring-1 ring-amber-400/20">
                    <Star className="h-4 w-4" fill="currentColor" /> {formatStars(project.stars)}
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-fg-muted)]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(project.date)}</span>
                <span className="flex items-center gap-1.5"><Folder className="h-4 w-4" /> {project.category}</span>
                {project.starsUpdatedAt && <span className="text-xs">stars synced</span>}
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]">
                    <Tag className="h-3.5 w-3.5" /> Tech & Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => {
                      const c = `hsl(${hueFromString(t)} 80% 70%)`;
                      return (
                        <span key={t} className="rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: `color-mix(in oklch, ${c} 14%, transparent)`, border: `1px solid color-mix(in oklch, ${c} 40%, transparent)`, color: c }}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:from-cyan-500/30 hover:to-violet-500/30">
                    <ExternalLink className="h-4 w-4" /> Live Deployment
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10">
                    <Github className="h-4 w-4" /> GitHub Repository
                  </a>
                )}
                {project.links.promo && (
                  <a href={project.links.promo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10">
                    <Video className="h-4 w-4" /> Promo Video
                  </a>
                )}
                {project.subprojects?.length ? (
                  <div className="mt-5 border-t border-[var(--color-hairline)] pt-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]">Sub-projects</div>
                    <div className="flex flex-wrap gap-2">
                      {project.subprojects.map((s) => (
                        <a key={s.title} href={s.repo || s.live} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/10 transition hover:bg-white/10">
                          {s.repo && <Github className="h-3.5 w-3.5" />}
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
                {onEdit && (
                  <button onClick={() => onEdit(project)} className="ml-auto flex items-center gap-2 rounded-lg bg-violet-500/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-violet-400/30 transition hover:bg-violet-500/25">
                    <Pencil className="h-4 w-4" /> Edit
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
