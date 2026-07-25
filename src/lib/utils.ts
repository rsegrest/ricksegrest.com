export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function formatDate(iso: string): string {
  // Handle date ranges with " — " separator
  if (iso.includes(" — ")) {
    const [start, end] = iso.split(" — ");
    return `${formatSingle(start)} — ${formatSingle(end)}`;
  }
  return formatSingle(iso);
}

function formatSingle(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  // If it's just a year (4 chars), return as-is
  if (/^\d{4}$/.test(iso)) return iso;
  // Month + year only (no day)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function formatStars(n: number | undefined): string {
  if (n === undefined) return "—";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

/** Deterministic hue from a string (for tag coloring). */
export function hueFromString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return h;
}

export function tagStyle(color: string): React.CSSProperties {
  return {
    background: `color-mix(in oklch, ${color} 14%, transparent)`,
    border: `1px solid color-mix(in oklch, ${color} 40%, transparent)`,
    color,
  };
}
