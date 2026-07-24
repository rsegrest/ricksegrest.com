import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
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
  Lock,
  LogOut,
  ArrowRight,
  BookOpen,
  Mail,
} from "lucide-react";
import type { Project, SortKey } from "@/lib/types";
import { useGallery } from "@/lib/useGallery";
import { cn, hueFromString } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";
import { AdminModal } from "@/components/AdminModal";

const SORTS: { key: SortKey; label: string; icon: typeof LayoutGrid }[] = [
  { key: "date", label: "Newest", icon: CalendarDays },
  { key: "category", label: "Category", icon: ArrowDownNarrowWide },
  { key: "title", label: "A–Z", icon: LayoutGrid },
];

export function HomePage() {
  const { projects, upsert, remove, reset, importProjects } = useGallery();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("date");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [admin, setAdmin] = useState<Project | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    }
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return list;
  }, [projects, query, sort, activeTags, activeCat]);

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

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
      {/* hero section */}
      <header className="relative z-10 overflow-hidden border-b border-[var(--color-hairline)]">
        <div className="grid-backdrop absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* name + title */}
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient">Rick Segrest</span>
            </h1>
            <p className="mt-1 text-sm font-medium text-[var(--color-fg-soft)] sm:text-base">
              Senior Software Engineer · UI/UX · Full-Stack · Data Visualization · AI Integration
            </p>

            {/* positioning statement */}
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              I build interactive data tools that make complex information explorable.
            </p>

            {/* CTA buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href="#gallery"
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90"
              >
                See My Work
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="/blog"
                className="flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:ring-2 hover:ring-cyan-400/40"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Read the Blog
              </a>
              <a
                href="mailto:rsegrest77+ghpg@gmail.com"
                className="flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:ring-2 hover:ring-cyan-400/40"
              >
                <Mail className="h-3.5 w-3.5" />
                Hire Me
              </a>
            </div>

            {/* credential line */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-fg-muted)]">
              <span>20+ years experience</span>
              <span className="text-white/20">·</span>
              <span>NASA Engineering Materials (EM04)</span>
              <span className="text-white/20">·</span>
              <span>MS Modeling &amp; Simulation</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1">
                <Github className="h-3 w-3 text-cyan-300" />
                {projects.length} projects · {categories.length} categories
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* toolbar — single row */}
      <div className="sticky top-[57px] z-30 border-b border-[var(--color-hairline)] glass-strong">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-2">
          {/* search */}
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-fg-muted)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, descriptions…"
              className="w-full rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/50 py-2 pl-8 pr-3 text-sm text-white placeholder:text-[var(--color-fg-muted)] outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
            />
          </div>

          {/* sort */}
          <div className="flex items-center gap-0.5 rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 p-0.5">
            {SORTS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={cn(
                  "flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-medium transition",
                  sort === s.key ? "bg-white/10 text-white" : "text-[var(--color-fg-muted)] hover:text-white"
                )}
              >
                <s.icon className="h-3 w-3" /> {s.label}
              </button>
            ))}
          </div>

          {/* actions */}
          <div className="flex items-center gap-1.5">
            <button onClick={() => fileInputRef.current?.click()} className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/70 transition hover:bg-white/5" title="Import JSON">
              <Upload className="h-3.5 w-3.5" />
            </button>
            <button onClick={onExport} className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/70 transition hover:bg-white/5" title="Export JSON">
              <Download className="h-3.5 w-3.5" />
            </button>
            {isAdmin ? (
              <>
                <button onClick={() => { setAdmin(null); setShowAdmin(true); }} className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
                  <Plus className="h-3.5 w-3.5" /> Add
                </button>
                <button onClick={() => setIsAdmin(false)} className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-red-400/70 transition hover:bg-white/5" title="Admin Lock">
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  const pass = prompt("Enter admin token:");
                  if (pass === "changeme-dev-token" || pass === "rick-portfolio-admin") setIsAdmin(true);
                  else if (pass !== null) alert("Incorrect token.");
                }}
                className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/30 transition hover:bg-white/5"
                title="Admin Unlock"
              >
                <Lock className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* tag + category filters — compact */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat((prev) => (prev === c ? null : c))}
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition",
                activeCat === c
                  ? "bg-violet-500/20 text-white ring-1 ring-violet-400/40"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              )}
            >
              {c}
            </button>
          ))}
          <span className="mx-1 h-3 w-px bg-[var(--color-hairline)]" />
          {allTags.slice(0, 12).map((t) => {
            const on = activeTags.includes(t);
            const c = `hsl(${hueFromString(t)} 80% 70%)`;
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className="rounded-full px-2 py-0.5 text-[10px] font-medium transition"
                style={
                  on
                    ? { background: `color-mix(in oklch, ${c} 22%, transparent)`, border: `1px solid ${c}`, color: c }
                    : { background: "rgba(255,255,255,.05)", border: "1px solid transparent", color: "rgba(255,255,255,.55)" }
                }
              >
                #{t}
              </button>
            );
          })}
          {(activeTags.length > 0 || activeCat) && (
            <button onClick={() => { setActiveTags([]); setActiveCat(null); }} className="flex items-center gap-1 text-[10px] text-[var(--color-fg-muted)] hover:text-white">
              <X className="h-3 w-3" /> clear
            </button>
          )}
        </div>
      </div>

      {/* grid — 4 columns on large screens */}
      <main id="gallery" className="relative z-10 mx-auto max-w-7xl px-4 py-6">
        {filtered.length === 0 ? (
          <div className="grid place-items-center py-24 text-center">
            <SlidersHorizontal className="mb-3 h-8 w-8 text-[var(--color-fg-muted)]" />
            <p className="text-lg font-medium text-white/80">No projects match your filters</p>
            <p className="text-sm text-[var(--color-fg-muted)]">Try clearing some tags or the search.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* CTA section — Work with me */}
      <section className="relative z-10 border-t border-[var(--color-hairline)]">
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 py-14 text-center sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-gradient">Let's build something.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
              I'm open to consulting and full-time opportunities. If you need a developer who can
              turn complex data into tools people actually want to use, let's talk.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:rsegrest77+ghpg@gmail.com?subject=Let%27s%20work%20together"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg glass px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:ring-2 hover:ring-cyan-400/40"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 rounded-lg glass px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:ring-2 hover:ring-cyan-400/40"
              >
                <ArrowRight className="h-4 w-4" />
                More About Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[var(--color-hairline)] py-6 text-center text-[11px] text-[var(--color-fg-muted)]">
        Rick Segrest · Senior Software Engineer · Huntsville, AL
      </footer>

      {/* admin modal */}
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
