import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, Trash2, Image as ImageIcon, Film, Sparkles } from "lucide-react";
import type { AnimationKind, MediaType, Project } from "@/lib/types";
import { MediaPreview } from "./MediaPreview";

const ANIM_CHOICES: AnimationKind[] = ["aurora", "orbit", "wave", "scan", "mesh", "shimmer"];

function emptyProject(): Project {
  return {
    id: "",
    title: "",
    description: "",
    category: "",
    tags: [],
    date: new Date().toISOString().slice(0, 10),
    media: { type: "animation", animation: "aurora", accent: "#22d3ee" },
    links: {},
    featured: false,
  };
}

export function AdminModal({
  editing,
  onClose,
  onSave,
  onDelete,
}: {
  editing: Project | null;
  onClose: () => void;
  onSave: (p: Project) => void;
  onDelete?: (id: string) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const [draft, setDraft] = useState<Project>(editing ? structuredClone(editing) : emptyProject());
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    setDraft(editing ? structuredClone(editing) : emptyProject());
  }, [editing]);

  const set = <K extends keyof Project>(k: K, v: Project[K]) => setDraft((d) => ({ ...d, [k]: v }));
  const setLink = (k: keyof Project["links"], v: string) =>
    setDraft((d) => ({ ...d, links: { ...d.links, [k]: v || undefined } }));

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !draft.tags.includes(t)) set("tags", [...draft.tags, t]);
    setTagInput("");
  };

  const save = () => {
    if (!draft.title.trim() || !draft.id.trim()) return;
    onSave({ ...draft, id: draft.id.trim() });
  };

  const inputCls =
    "w-full rounded-lg border border-[var(--color-hairline)] bg-[var(--color-ink)]/60 px-3 py-2 text-sm text-white placeholder:text-[var(--color-fg-muted)] outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-muted)]";

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[var(--radius-card)] glass-strong"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-hairline)] px-6 py-4">
          <h2 className="font-display text-xl font-bold text-white">
            {editing ? "Edit Project" : "Add Project"}
          </h2>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 transition hover:bg-white/20 focusable" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-6 md:grid-cols-2">
          {/* ── left: form ── */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>ID (slug)</label>
                <input className={inputCls} value={draft.id} placeholder="my-cool-app" onChange={(e) => set("id", e.target.value)} disabled={!!editing} />
              </div>
              <div>
                <label className={labelCls}>Date</label>
                <input type="date" className={inputCls} value={draft.date} onChange={(e) => set("date", e.target.value)} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Title</label>
              <input className={inputCls} value={draft.title} placeholder="Local LLM Chat" onChange={(e) => set("title", e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Category</label>
                <input className={inputCls} value={draft.category} placeholder="AI Tools" onChange={(e) => set("category", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>GitHub repo (owner/name)</label>
                <input className={inputCls} value={draft.githubRepo || ""} placeholder="rsegrest/local-llm-chat" onChange={(e) => set("githubRepo", e.target.value || undefined)} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea className={`${inputCls} min-h-[88px] resize-y`} value={draft.description} placeholder="What does it do?" onChange={(e) => set("description", e.target.value)} />
            </div>

            <div>
              <label className={labelCls}>Tags / Tech</label>
              <div className="flex flex-wrap gap-1.5">
                {draft.tags.map((t) => (
                  <span key={t} className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/90">
                    {t}
                    <button onClick={() => set("tags", draft.tags.filter((x) => x !== t))} className="text-white/50 hover:text-white"><X className="h-3 w-3" /></button>
                  </span>
                ))}
              </div>
              <input
                className={`${inputCls} mt-2`}
                value={tagInput}
                placeholder="Type a tag and press Enter"
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? (e.preventDefault(), addTag()) : null)}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className={labelCls}>Live URL</label>
                <input className={inputCls} value={draft.links.live || ""} placeholder="https://…" onChange={(e) => setLink("live", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Repo URL</label>
                <input className={inputCls} value={draft.links.repo || ""} placeholder="https://…" onChange={(e) => setLink("repo", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Promo URL</label>
                <input className={inputCls} value={draft.links.promo || ""} placeholder="https://…" onChange={(e) => setLink("promo", e.target.value)} />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-white/90">
              <input type="checkbox" checked={!!draft.featured} onChange={(e) => set("featured", e.target.checked)} className="h-4 w-4 accent-cyan-400" />
              Mark as featured
            </label>
          </div>

          {/* ── right: media ── */}
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Media Type</label>
              <div className="flex gap-2">
                {(["image", "video", "animation"] as MediaType[]).map((mt) => (
                  <button
                    key={mt}
                    onClick={() => set("media", { ...draft.media, type: mt })}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium capitalize transition ${
                      draft.media.type === mt
                        ? "border-cyan-400/60 bg-cyan-400/10 text-white"
                        : "border-[var(--color-hairline)] text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {mt === "image" ? <ImageIcon className="h-4 w-4" /> : mt === "video" ? <Film className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                    {mt}
                  </button>
                ))}
              </div>
            </div>

            {draft.media.type === "animation" ? (
              <div>
                <label className={labelCls}>Animation Style</label>
                <div className="grid grid-cols-3 gap-2">
                  {ANIM_CHOICES.map((a) => (
                    <button
                      key={a}
                      onClick={() => set("media", { ...draft.media, type: "animation", animation: a })}
                      className={`rounded-lg border px-2 py-2 text-xs font-medium capitalize transition ${
                        draft.media.animation === a
                          ? "border-violet-400/60 bg-violet-400/10 text-white"
                          : "border-[var(--color-hairline)] text-white/70 hover:bg-white/5"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                <label className={labelCls + " mt-3"}>Accent color</label>
                <div className="flex items-center gap-2">
                  <input type="color" value={draft.media.accent || "#22d3ee"} onChange={(e) => set("media", { ...draft.media, accent: e.target.value })} className="h-9 w-12 rounded border border-[var(--color-hairline)] bg-transparent" />
                  <input className={inputCls} value={draft.media.accent || ""} onChange={(e) => set("media", { ...draft.media, accent: e.target.value })} />
                </div>
              </div>
            ) : (
              <div>
                <label className={labelCls}>{draft.media.type === "image" ? "Image URL" : "Video URL"}</label>
                <input className={inputCls} value={draft.media.url || ""} placeholder="https://…" onChange={(e) => set("media", { ...draft.media, url: e.target.value })} />
                {draft.media.type === "video" && (
                  <>
                    <label className={labelCls + " mt-3"}>Poster URL (optional)</label>
                    <input className={inputCls} value={draft.media.poster || ""} placeholder="https://…" onChange={(e) => set("media", { ...draft.media, poster: e.target.value })} />
                  </>
                )}
              </div>
            )}

            {/* live preview */}
            <div>
              <label className={labelCls}>Live Preview</label>
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-hairline)]">
                <MediaPreview media={draft.media} priority className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-hairline)] px-6 py-4">
          {editing && onDelete ? (
            <button onClick={() => onDelete(draft.id)} className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300 ring-1 ring-red-500/20 transition hover:bg-red-500/20">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          ) : (
            <span />
          )}
          <div className="flex gap-3">
            <button onClick={onClose} className="rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/10 transition hover:bg-white/10">Cancel</button>
            <button onClick={save} className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
              <Plus className="h-4 w-4" /> {editing ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
