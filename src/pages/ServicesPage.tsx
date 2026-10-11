import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileSignature,
  Receipt,
  ClipboardList,
  Mail,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  Lock,
  Server,
  UserCheck,
  DoorOpen,
  Briefcase,
} from "lucide-react";

/* ── content ───────────────────────────────────────────────────────────── */

interface Scenario {
  icon: typeof FileSignature;
  title: string;
  before: string;
  after: string;
  roles: string;
}

const SCENARIOS: Scenario[] = [
  {
    icon: FileSignature,
    title: "The contract pile",
    before:
      "Contracts live as PDFs in folders. Nobody knows what auto-renews, what the obligations are, or when the next deadline lands — until it is late.",
    after:
      'Every contract is read once. Dates, obligations and renewal terms land in one simple table you can ask questions of — "what terminates in the next 90 days?" — and every answer points back to the page it came from.',
    roles: "a general counsel, a purchasing manager, an office manager",
  },
  {
    icon: Receipt,
    title: "The invoice pile",
    before:
      "Someone matches invoices to purchase orders and packing slips by hand. Duplicates slip through, and small overcharges go unnoticed because finding them costs more than they are worth.",
    after:
      "Invoices are matched automatically. The ones that disagree are flagged with the reason, and duplicates are caught before payment.",
    roles: "a controller, a bookkeeper, an accounts-payable clerk",
  },
  {
    icon: ClipboardList,
    title: "The forms nobody wants to type",
    before:
      "Paper intake forms, faxed logs, handwritten service sheets. Once filed they are effectively gone — nobody searches them.",
    after:
      'Every form becomes a searchable record. Ask "when was pump 3 last serviced, and what did it say?" and get the answer with the original page attached.',
    roles: "operations managers, clinic and shop front desks, maintenance leads",
  },
  {
    icon: Mail,
    title: "The emails that repeat all day",
    before:
      "Fifty near-identical replies a day — quotes, scheduling, status requests, directions. It never gets done because it keeps arriving.",
    after:
      "Drafts written in your own voice, waiting for you to approve or edit. You stay in control of every message that leaves.",
    roles: "sales, customer service — anyone with an inbox",
  },
  {
    icon: ShieldCheck,
    title: "The audit binder",
    before:
      "Two weeks of scrambling before every audit, every year — records pulled from four places, hoping nothing is missing.",
    after:
      "The records assemble themselves, and the corrective actions you took stay linked to the problems they fixed, so you can prove the fix stuck rather than just that you wrote it down.",
    roles: "quality managers, compliance officers, plant managers",
  },
  {
    icon: BrainCircuit,
    title: "The thirty-year veteran's head",
    before:
      "The person who knows how everything works retires, and the knowledge leaves with them. New staff interrupt the remaining veterans all day, every day.",
    after:
      'An assistant that has read your procedures, work orders and past fixes answers new staff in plain language — and says "I don\'t know" when it doesn\'t.',
    roles: "any business with long-tenured staff",
  },
];

const SAFETY = [
  {
    icon: Server,
    title: "It can run on your network",
    body: "These tools can be built to run entirely inside your own network, so the documents never leave it. Where a cloud service is involved, that is a decision you make deliberately — not a default you inherit.",
  },
  {
    icon: UserCheck,
    title: "You approve what goes out",
    body: "Nothing is sent, filed, ordered or paid without a person clicking the button. Drafts stay drafts.",
  },
  {
    icon: Lock,
    title: "Your systems stay",
    body: "Nothing here replaces your ERP, your accounting package or your shared drive. It reads from them and fits alongside them.",
  },
  {
    icon: DoorOpen,
    title: "You can walk away",
    body: "No lock-in, and no proprietary format holding your records hostage. If it does not earn its keep, you stop paying for it.",
  },
];

const STEPS = [
  {
    price: "$750",
    name: "One-day assessment",
    body: "I read your documents and watch the workflow for a day, then tell you where the hours actually go and which fixes are worth doing. You get the written plan whether or not we work together again.",
  },
  {
    price: "$3,500",
    name: "Two-week build",
    body: "One fixed-scope tool, working in your environment, on your real documents. Fixed fee, agreed before anything starts.",
  },
  {
    price: "then",
    name: "Ongoing — only if it earns it",
    body: "If it saves what we said it would, we discuss the next one. If it does not, we stop.",
  },
];

const SECTORS = [
  "Professional services",
  "Insurance",
  "Logistics",
  "Manufacturing",
  "Agriculture",
  "Any business whose work runs on documents",
];

/* ── page ──────────────────────────────────────────────────────────────── */

export function ServicesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Services — Rick Segrest";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-14">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="tag-soft mb-5 inline-flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5" /> Services
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Small AI tools for the paperwork your business{" "}
          <span className="text-gradient">already has</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-fg-soft)]">
          I build focused tools around the documents and forms your team already works with — contracts,
          invoices, intake forms, maintenance logs, compliance records. Nothing new to learn, and nothing
          has to leave your network.
        </p>
        <p className="mt-5 font-display text-sm tracking-wide text-[var(--color-fg-muted)]">
          FIXED SCOPE · FIXED FEE · WORKING SOFTWARE IN TWO WEEKS
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:rick@ricksegrest.com?subject=Thirty%20minutes%20on%20our%20paperwork"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/90 to-violet-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Start with a conversation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-hairline-strong)] px-5 py-3 text-sm font-medium text-[var(--color-fg-soft)] transition hover:text-white"
          >
            See how it works
          </a>
        </div>
      </motion.header>

      {/* ── six things this looks like ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Six things this looks like
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--color-fg-soft)]">
          Each one is a week that somebody on your team is having right now.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              className="glass rounded-[var(--radius-card)] p-6"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 ring-1 ring-white/10">
                <s.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                <span className="font-semibold text-[var(--color-fg-soft)]">Before: </span>
                {s.before}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">
                <span className="font-semibold text-white">After: </span>
                {s.after}
              </p>
              <p className="mt-4 border-t border-[var(--color-hairline)] pt-3 text-xs text-[var(--color-fg-muted)]">
                For {s.roles}.
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── safety ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Why this is safer than it sounds
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {SAFETY.map((s) => (
            <div key={s.title} className="glass-strong flex gap-4 rounded-[var(--radius-card)] p-6">
              <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
              <div>
                <h3 className="font-display font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-soft)]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── how engagements work ── */}
      <section id="how-it-works" className="mt-20 scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">How engagements work</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.name} className="glass rounded-[var(--radius-card)] p-6">
              <p className="font-display text-3xl font-bold text-gradient">{step.price}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">{step.body}</p>
              {i === 0 && (
                <p className="mt-4 text-xs text-[var(--color-fg-muted)]">
                  Most people start here. It is also the honest way to find out if there is anything worth
                  building.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── who I work with ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Who I work with</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {SECTORS.map((sector) => (
            <li key={sector} className="tag-soft">
              {sector}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--color-fg-soft)]">
          <span className="font-semibold text-white">Commercial networks only.</span> No government,
          ITAR-controlled or export-controlled data — not because it is uninteresting, but because the
          security review would cost you more time than the tool saves.
        </p>
      </section>

      {/* ── about ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">About</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-fg-soft)]">
          Twenty-plus years building software for engineering teams, much of it for NASA&apos;s engineering
          organisations, where being wrong is expensive and &ldquo;probably right&rdquo; is not good enough.
          Now I build the same kind of careful tooling for the paperwork that runs small and mid-size
          businesses.
        </p>
      </section>

      {/* ── next step ── */}
      <section className="glass-strong mt-20 rounded-[var(--radius-card)] p-8 sm:p-10">
        <h2 className="font-display text-2xl font-bold text-white">The next step is thirty minutes</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-fg-soft)]">
          Tell me what your team spends its time on. I will tell you what I would try first — and if the
          honest answer is &ldquo;nothing here is worth it&rdquo;, I will say that too.
        </p>
        <a
          href="mailto:rick@ricksegrest.com?subject=Thirty%20minutes%20on%20our%20paperwork"
          className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/90 to-violet-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Email me
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </section>
    </main>
  );
}
