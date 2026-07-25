import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { SEED_BLOG } from "@/lib/blog";
import { cn, formatDate, hueFromString } from "@/lib/utils";

export function BlogListPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const m = new Map<string, number>();
    SEED_BLOG.forEach((p) => p.tags.forEach((t) => m.set(t, (m.get(t) || 0) + 1)));
    return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, []);

  const filtered = useMemo(() => {
    let list = SEED_BLOG.filter((p) => p.published);
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeTag) list = list.filter((p) => p.tags.includes(activeTag));
    return list.sort((a, b) => b.date.localeCompare(a.date));
  }, [query, activeTag]);

  return (
    <div className="ambient relative min-h-screen">
      {/* header */}
      <header className="relative z-10 overflow-hidden border-b border-[var(--color-hairline)]">
        <div className="grid-backdrop absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-cyan-300" />
              <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="text-gradient">Blog</span>
              </h1>
              <span className="text-sm text-[var(--color-fg-muted)]">
                {SEED_BLOG.filter((p) => p.published).length} posts
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* toolbar */}
      <div className="sticky top-[57px] z-30 border-b border-[var(--color-hairline)] glass-strong">
        <div className="mx-auto flex max-w-4xl items-center gap-2 px-6 py-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-fg-muted)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts…"
              className="w-full rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/50 py-2 pl-8 pr-3 text-sm text-white placeholder:text-[var(--color-fg-muted)] outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-1.5 px-6 pb-2">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition",
                activeTag === t
                  ? "bg-cyan-500/20 text-white ring-1 ring-cyan-400/40"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              )}
            >
              {t}
            </button>
          ))}
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-[10px] text-[var(--color-fg-muted)] hover:text-white"
            >
              clear
            </button>
          )}
        </div>
      </div>

      {/* post list */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-8">
        {filtered.length === 0 ? (
          <div className="grid place-items-center py-24 text-center">
            <BookOpen className="mb-3 h-8 w-8 text-[var(--color-fg-muted)]" />
            <p className="text-lg font-medium text-white/80">No posts match your filters</p>
            <p className="text-sm text-[var(--color-fg-muted)]">Try clearing the search or tag filter.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl glass p-5 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h2>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-fg-muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                        </span>
                        {post.readingTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readingTime} min read
                          </span>
                        )}
                        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px]">
                          {post.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-soft)] line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => {
                          const c = `hsl(${hueFromString(t)} 80% 70%)`;
                          return (
                            <span
                              key={t}
                              className="rounded-full px-2 py-0.5 text-[10px] font-medium"
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
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-fg-muted)] transition-transform group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
