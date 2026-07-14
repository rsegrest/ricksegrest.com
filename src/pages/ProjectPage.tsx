import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink, Github, Video, Calendar, Tag, Folder, ArrowLeft, Layers } from "lucide-react";
import { useGallery } from "@/lib/useGallery";
import { formatDate, hueFromString } from "@/lib/utils";
import { MediaPreview } from "@/components/MediaPreview";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects } = useGallery();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="ambient relative min-h-screen">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Project not found</h1>
          <p className="mt-2 text-[var(--color-fg-muted)]">The project "{id}" doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ambient relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-8">
        {/* back button */}
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-[var(--color-fg-muted)] ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Gallery
        </motion.button>

        {/* media */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-card)] glass"
        >
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
        </motion.div>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6"
        >
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-fg-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(project.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Folder className="h-4 w-4" /> {project.category}
            </span>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
            {project.description}
          </p>

          {/* tags */}
          {project.tags.length > 0 && (
            <div className="mt-6">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]">
                <Tag className="h-3.5 w-3.5" /> Tech & Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => {
                  const c = `hsl(${hueFromString(t)} 80% 70%)`;
                  return (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{
                        background: `color-mix(in oklch, ${c} 14%, transparent)`,
                        border: `1px solid color-mix(in oklch, ${c} 40%, transparent)`,
                        color: c,
                      }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* tech stack cards */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8 border-t border-[var(--color-hairline)] pt-6">
              <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]">
                <Layers className="h-3.5 w-3.5" /> Tech Stack
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.techStack.map((ts) => (
                  <div key={ts.label} className="rounded-xl glass p-4">
                    <h4 className="mb-1.5 text-sm font-semibold text-white">{ts.label}</h4>
                    <p className="text-xs leading-relaxed text-[var(--color-fg-muted)]">{ts.items}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:from-cyan-500/30 hover:to-violet-500/30"
              >
                <ExternalLink className="h-4 w-4" /> Live Deployment
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub Repository
              </a>
            )}
            {project.links.promo && (
              <a
                href={project.links.promo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <Video className="h-4 w-4" /> Promo Video
              </a>
            )}
          </div>

          {/* sub-projects */}
          {project.subprojects && project.subprojects.length > 0 && (
            <div className="mt-8 border-t border-[var(--color-hairline)] pt-6">
              <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]">
                <Layers className="h-3.5 w-3.5" /> Sub-projects
              </div>
              <div className="flex flex-wrap gap-2">
                {project.subprojects.map((s) => (
                  <a
                    key={s.title}
                    href={s.repo || s.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    {s.repo && <Github className="h-4 w-4" />}
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* article content */}
          {project.article && (
            <div className="mt-10 border-t border-[var(--color-hairline)] pt-8">
              <article className="prose prose-invert max-w-none
                prose-headings:font-display prose-headings:text-white prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-cyan-300
                prose-p:text-[var(--color-fg-soft)] prose-p:leading-relaxed prose-p:my-4
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-cyan-300 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-cyan-400/40 prose-blockquote:text-[var(--color-fg-muted)] prose-blockquote:italic prose-blockquote:my-5 prose-blockquote:pl-4
                prose-li:text-[var(--color-fg-soft)] prose-li:my-1 prose-li:leading-relaxed prose-li:marker:text-cyan-400/60
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5
                prose-code:text-cyan-300 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-hr:border-[var(--color-hairline)] prose-hr:my-8
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.article}
                </ReactMarkdown>
              </article>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
