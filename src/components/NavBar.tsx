import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutGrid, FileText, User, BookOpen, Map, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/", label: "Gallery", icon: LayoutGrid },
  // { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/about", label: "About", icon: User },
];

const TRAVEL_MAP_URL = "http://localhost:3007";

export function NavBar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--color-hairline)] glass-strong">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* brand */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold text-white transition hover:opacity-80"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/15">
            <LayoutGrid className="h-4 w-4 text-cyan-300" />
          </span>
          <span className="text-gradient hidden sm:inline">Rick Segrest</span>
        </NavLink>

        {/* nav links */}
        <div className="flex items-center gap-1 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition",
                  isActive
                    ? "text-white"
                    : "text-[var(--color-fg-muted)] hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <item.icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10 hidden sm:inline">{item.label}</span>
              </NavLink>
            );
          })}
        </div>

        {/* external links */}
        <div className="flex items-center gap-2">
          {/* <a
            href={TRAVEL_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/70 transition hover:bg-white/5 hover:text-white"
            title="Travel Map"
          >
            <Map className="h-4 w-4" />
          </a> */}
          <a
            href="https://github.com/rsegrest"
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-ink)]/40 text-white/70 transition hover:bg-white/5 hover:text-white"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
