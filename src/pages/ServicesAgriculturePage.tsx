import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SprayCan,
  ClipboardCheck,
  Truck,
  Wrench,
  Beef,
  Fuel,
  ArrowRight,
  Server,
  WifiOff,
  Layers,
  FileCheck2,
  Ban,
} from "lucide-react";

/* ── content ───────────────────────────────────────────────────────────── */

interface Job {
  icon: typeof SprayCan;
  title: string;
  body: string;
}

const JOBS: Job[] = [
  {
    icon: SprayCan,
    title: "Spray and application records",
    body: "State and federal rules require them, and the paper version is hours of handwriting. Records get entered with as little typing as possible, then printed or exported in the form your state asks for.",
  },
  {
    icon: ClipboardCheck,
    title: "The audit binder (GAP and third-party)",
    body: "Field records, machinery maintenance and corrective actions in one place, assembled when the auditor asks instead of in a two-week scramble before.",
  },
  {
    icon: Truck,
    title: "Billing landlords and custom work",
    body: "Planting, drilling, spraying and spreading records that currently live in four notebooks become itemised invoices and share reports — without retyping any of it.",
  },
  {
    icon: Wrench,
    title: "Equipment maintenance off the spreadsheet",
    body: "Service history per machine: when, what it cost, and what is due next. Searchable, and readable on a phone in the shop with greasy hands.",
  },
  {
    icon: Beef,
    title: "Herd and treatment records",
    body: "Breeding, performance and treatment records — including drug use — on a phone, for a commercial outfit that is not going to buy software priced for a registered herd.",
  },
  {
    icon: Fuel,
    title: "Mileage by state for fuel-tax filings",
    body: "Build the per-state log out of records you already keep, and produce it in the shape the filing wants.",
  },
];

const SAFETY = [
  {
    icon: Server,
    title: "Nothing leaves your network",
    body: "It runs on your own machine or server. No cloud account, no vendor holding your data, and nothing used to train anything for anyone else.",
  },
  {
    icon: WifiOff,
    title: "It has to work with no signal",
    body: "Anything used in the field works offline and catches up later. If it needs a connection to be useful, it will not get used.",
  },
  {
    icon: Layers,
    title: "Your stack stays",
    body: "FieldView, Granular, QuickBooks, the spreadsheets — all of it stays. This adds the missing output layer; it does not ask you to migrate.",
  },
  {
    icon: FileCheck2,
    title: "You own the output",
    body: "Records and reports are files you keep. No per-user subscription, no lock-in, and nothing held hostage if we stop working together.",
  },
];

const NOTS = [
  "Not an ERP, and not a replacement for your field or livestock software",
  "Not a per-user cloud subscription that keeps your records on someone else's server",
  "Not a farm-wide system that requires everyone to change how they work",
  "Not government, ITAR-controlled or export-controlled work",
];

const STARTS = [
  {
    price: "No charge",
    name: "Send me one season's records",
    body: "Pick the messiest thing you keep — sprays, maintenance, herd — and send it over. I send back the audit view. If the output is not useful to you, that is the end of it and we have both lost nothing.",
  },
  {
    price: "$750",
    name: "One-day assessment",
    body: "I read the records and watch how they are actually kept, then tell you where the hours go and which fix is worth doing. You keep the written plan either way.",
  },
  {
    price: "$3,500",
    name: "Two-week build",
    body: "One of the jobs above, working on your records, in your environment. Fixed fee agreed before anything starts.",
  },
];

/* ── page ──────────────────────────────────────────────────────────────── */

export function ServicesAgriculturePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Services for Agriculture — Rick Segrest";
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
          <SprayCan className="h-3.5 w-3.5" /> Services · Agriculture
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Your records already exist.{" "}
          <span className="text-gradient">Make them answer the auditor.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-fg-soft)]">
          You already collect the data — in FieldView, in Granular, in Excel, in a notebook on the truck
          seat. What is usually missing is the part that turns it into the report an auditor, a regulator,
          your lender or your landlord actually asks for. That part is what I build.
        </p>
        <p className="mt-5 font-display text-sm tracking-wide text-[var(--color-fg-muted)]">
          FIXED SCOPE · FIXED FEE · RUNS ON YOUR OWN NETWORK
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:rick@ricksegrest.com?subject=One%20season%27s%20records%20-%20show%20me%20the%20audit%20view"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/90 to-violet-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send me one season&apos;s records
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

      {/* ── the gap ── */}
      <section className="glass-strong mt-16 rounded-[var(--radius-card)] p-8 sm:p-10">
        <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
          The part nobody sells you
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-fg-soft)]">
          Farm software is usually good at collecting and poor at reporting. Every vendor wants your data
          inside their system; almost nobody will take the records you already have and produce the output
          you keep being asked for. That is the whole job here — and it is why this does not need to replace
          anything you run.
        </p>
      </section>

      {/* ── jobs ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Six jobs this covers</h2>
        <p className="mt-3 max-w-3xl text-[var(--color-fg-soft)]">
          Each one is a job somebody is doing by hand right now.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((j, i) => (
            <motion.article
              key={j.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
              className="glass rounded-[var(--radius-card)] p-6"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 ring-1 ring-white/10">
                <j.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{j.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">{j.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── safety ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Why this is different from the last program you tried
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

      {/* ── what this is not ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What this is not</h2>
        <ul className="mt-6 space-y-3">
          {NOTS.map((n) => (
            <li key={n} className="flex gap-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">
              <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-fg-muted)]" />
              {n}
            </li>
          ))}
        </ul>
      </section>

      {/* ── how it works ── */}
      <section id="how-it-works" className="mt-20 scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Three ways to start, smallest first
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STARTS.map((s) => (
            <div key={s.name} className="glass rounded-[var(--radius-card)] p-6">
              <p className="font-display text-2xl font-bold text-gradient">{s.price}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--color-fg-muted)]">
          There is no annual licence and no per-user fee. If the first job pays for itself in hours saved,
          we talk about the next one; if it does not, we stop.
        </p>
      </section>

      {/* ── who this is for ── */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Who this is for</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-fg-soft)]">
          Row crop, hay, commercial cow/calf, custom work, ag retail and co-ops — and the office that keeps
          the books for them. Especially the operation that is too small for the expensive program and too
          busy to keep doing it all by hand.
        </p>
      </section>

      {/* ── next step ── */}
      <section className="glass-strong mt-20 rounded-[var(--radius-card)] p-8 sm:p-10">
        <h2 className="font-display text-2xl font-bold text-white">Start with one season&apos;s records</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-fg-soft)]">
          Send the messiest thing you keep. I will send back the audit view, and you will know within a day
          whether this is worth your time.
        </p>
        <a
          href="mailto:rick@ricksegrest.com?subject=One%20season%27s%20records%20-%20show%20me%20the%20audit%20view"
          className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/90 to-violet-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Email me
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
        <p className="mt-6 text-sm text-[var(--color-fg-muted)]">
          Not a farm or a co-op?{" "}
          <Link to="/services" className="text-cyan-300 underline-offset-4 hover:underline">
            See the general services page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
