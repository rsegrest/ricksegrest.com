import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Star,
  RefreshCw,
  SlidersHorizontal,
  Plus,
  Download,
  Upload,
  Github,
  LayoutGrid,
  ArrowDownNarrowWide,
  CalendarDays,
  Tag as TagIcon,
  X,
} from "lucide-react";
import type { Project, SortKey } from "@/lib/types";
import { useGallery } from "@/lib/useGallery";
import { cn, hueFromString } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { AdminModal } from "@/components/AdminModal";

const SORTS: { key: SortKey; label: string; icon: typeof Star }[] = [
  { key: "date", label: "Newest", icon: CalendarDays },
  { key: "popularity", label: "Popular", icon: Star },
  { key: "category", label: "Category", icon: ArrowDownNarrowWide },
  { key: "title", label: "A–Z", icon: LayoutGrid },
];

export default function App() {
  const { projects, upsert, remove, reset, importProjects, refreshStars, refreshing } = useGallery();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("date");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [open, setOpen] = useState<Project | null>(null);
  const [admin, setAdmin] = useState<Project | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // refresh stars on mount (silent)
  useEffect(() => {
    refreshStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allTags = useMemo(() => {
    const m = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => m.set(t, (m.get(t) || 0) + 1)));
    return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, [projects]);

  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))].sort(),
    [projects]
  );

  const filtered = useMemo(() => {
    let list = [...projects];
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (activeCat) list = list.filter((p) => p.category === activeCat);
    if (activeTags.length)
      list = list.filter((p) => activeTags.every((t) => p.tags.includes(t)));

    const byDate = (a: Project, b: Project) => b.date.localeCompare(a.date);
    switch (sort) {
      case "date":
        list.sort(byDate);
        break;
      case "title":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "category":
        list.sort((a, b) => a.category.localeCompare(b.category) || byDate(a, b));
        break;
      case "popularity":
        list.sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1));
        break;
    }
    // featured always float to top for non-popularity sorts
    if (sort !== "popularity")
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [projects, query, sort, activeTags, activeCat]);

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const totalStars = projects.reduce((s, p) => s + (p.stars ?? 0), 0);

  const onImportFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        const arr = Array.isArray(data) ? data : (data.projects ?? []);
        if (arr.length) importProjects(arr as Project[]);
      } catch {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const onExport = () => {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dev-gallery.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ambient relative min-h-screen">
      {/* hero */}
      <header className="relative z-10 overflow-hidden border-b border-[var(--color-hairline)]">
        <div className="grid-backdrop absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/15">
              <LayoutGrid className="h-5 w-5 text-cyan-300" />
            </span>
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-gradient">Dev Gallery</span>
              </h1>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                A showcase of everything I've built — {projects.length} projects · {totalStars} GitHub stars · {categories.length} categories
              </p>
            </div>
          </motion.div>

          {/* quick stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Github, label: `${projects.length}`, sub: "Projects" },
              { icon: Star, label: `${totalStars}`, sub: "Stars" },
              { icon: TagIcon, label: `${allTags.length}`, sub: "Tech tags" },
              { icon: LayoutGrid, label: `${categories.length}`, sub: "Categories" },
            ].map((s, i) => (
              <motion.div
                key={s.sub}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-3 rounded-2xl glass px-4 py-3"
              >
                <s.icon className="h-5 w-5 text-cyan-300" />
                <div>
                  <div className="font-display text-lg font-semibold text-white">{s.label}</div>
                  <div className="text-[11px] uppercase tracking-wide text-[var(--color-fg-muted)]">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* toolbar */}
      <div className="sticky top-0 z-30 border-b border-[var(--color-hairline)] glass-strong">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 lg:flex-row lg:items-center">
          {/* search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-fg-muted)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, descriptions…"
              className="w-full rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/50 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-[var(--color-fg-muted)] outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          {/* sort */}
          <div className="flex items-center gap-1 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 p-1">
            {SORTS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",
                  sort === s.key ? "bg-white/10 text-white" : "text-[var(--color-fg-muted)] hover:text-white"
                )}
              >
                <s.icon className="h-3.5 w-3.5" /> {s.label}
              </button>
            ))}
          </div>

          {/* actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={refreshStars}
              disabled={refreshing}
              className="flex items-center gap-1.5 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/5 disabled:opacity-50"
              title="Refresh GitHub stars"
            >
              <RefreshCw className={cn("h-3.5 w-3.5", refreshing && "animate-spin")} /> Stars
            </button>
            <button onClick={() => fileInputRef.current?.click()} className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/80 transition hover:bg-white/5" title="Import JSON">
              <Upload className="h-4 w-4" />
            </button>
            <button onClick={onExport} className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/80 transition hover:bg-white/5" title="Export JSON">
              <Download className="h-4 w-4" />
            </button>
            <button onClick={() => { setAdmin(null); setShowAdmin(true); }} className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
        </div>

        {/* tag + category filters */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 pb-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat((prev) => (prev === c ? null : c))}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition",
                activeCat === c
                  ? "bg-violet-500/20 text-white ring-1 ring-violet-400/40"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              )}
            >
              {c}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-[var(--color-hairline)]" />
          {allTags.slice(0, 16).map((t) => {
            const on = activeTags.includes(t);
            const c = `hsl(${hueFromString(t)} 80% 70%)`;
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className="rounded-full px-2.5 py-1 text-[11px] font-medium transition"
                style={
                  on
                    ? { background: `color-mix(in oklch, ${c} 22%, transparent)`, border: `1px solid ${c}`, color: c }
                    : { background: "rgba(255,255,255,.05)", border: "1px solid transparent", color: "rgba(255,255,255,.65)" }
                }
              >
                #{t}
              </button>
            );
          })}
          {(activeTags.length > 0 || activeCat) && (
            <button onClick={() => { setActiveTags([]); setActiveCat(null); }} className="flex items-center gap-1 text-[11px] text-[var(--color-fg-muted)] hover:text-white">
              <X className="h-3 w-3" /> clear
            </button>
          )}
        </div>
      </div>

      {/* grid */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        {filtered.length === 0 ? (
          <div className="grid place-items-center py-24 text-center">
            <SlidersHorizontal className="mb-3 h-8 w-8 text-[var(--color-fg-muted)]" />
            <p className="text-lg font-medium text-white/80">No projects match your filters</p>
            <p className="text-sm text-[var(--color-fg-muted)]">Try clearing some tags or the search.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} onOpen={setOpen} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      <footer className="relative z-10 border-t border-[var(--color-hairline)] py-8 text-center text-xs text-[var(--color-fg-muted)]">
        Built with Vite · React · Tailwind · Framer Motion — edit <code className="text-white/70">src/lib/seed.ts</code> and redeploy to publish.
        {" "}
        <button onClick={reset} className="underline hover:text-white">Reset to seed</button>.
      </footer>

      {/* modals */}
      <ProjectModal project={open} onClose={() => setOpen(null)} onEdit={(p) => { setOpen(null); setAdmin(p); setShowAdmin(true); }} />
      {showAdmin && (
        <AdminModal
          editing={admin}
          onClose={() => setShowAdmin(false)}
          onSave={(p) => { upsert(p); setShowAdmin(false); }}
          onDelete={(id) => { remove(id); setShowAdmin(false); }}
        />
      )}

      {/* hidden import input */}
      <input
        type="file"
        accept="application/json"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onImportFile(f);
          e.currentTarget.value = "";
        }}
      />
    </div>
  );
}
