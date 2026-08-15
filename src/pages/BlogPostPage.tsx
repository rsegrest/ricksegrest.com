import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Calendar, Clock, ArrowLeft, Tag, BookOpen, X } from "lucide-react";
import { SEED_BLOG } from "@/lib/blog";
import { formatDate, hueFromString } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = SEED_BLOG.find((p) => p.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (lightboxSrc) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [lightboxSrc]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  if (!post) {
    return (
      <div className="ambient relative min-h-screen">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Post not found</h1>
          <p className="mt-2 text-[var(--color-fg-muted)]">The post "{slug}" doesn't exist.</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ambient relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-8">
        {/* back button */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-[var(--color-fg-muted)] ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </motion.div>

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 text-xs text-[var(--color-fg-muted)]">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{post.category}</span>
            {post.featured && (
              <>
                <span className="text-[var(--color-hairline-strong)]">·</span>
                <span className="text-cyan-300">Featured</span>
              </>
            )}
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-fg-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime} min read
              </span>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
            {post.description}
          </p>

          {/* tags */}
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => {
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
          )}
        </motion.div>

        {/* article content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-10 border-t border-[var(--color-hairline)] pt-8"
        >
          <article
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.tagName === "IMG") {
                const src = (target as HTMLImageElement).src;
                // Only open lightbox for content images, not UI icons
                if (src.includes("/images/")) {
                  setLightboxSrc(src);
                }
              }
            }}
            className="prose prose-invert max-w-none
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
              prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-[var(--color-hairline)] prose-pre:rounded-xl
              [&_figure]:my-6 [&_figure]:mx-auto
              [&_figure_img]:w-full [&_figure_img]:rounded-xl [&_figure_img]:border [&_figure_img]:border-[var(--color-hairline)] [&_figure_img]:cursor-pointer [&_figure_img]:transition [&_figure_img]:hover:opacity-80
              [&_figcaption]:mt-3 [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-[var(--color-fg-muted)] [&_figcaption]:italic [&_figcaption]:leading-relaxed
              [&_video]:w-full [&_video]:rounded-xl [&_video]:border [&_video]:border-[var(--color-hairline)]
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.article}
            </ReactMarkdown>
          </article>
        </motion.div>

        {/* footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-t border-[var(--color-hairline)] pt-6 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </motion.div>
      </div>

      {/* lightbox modal */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={lightboxSrc}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
