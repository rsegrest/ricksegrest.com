import { motion } from "framer-motion";
import { Github, Mail, Award, Code, Palette, Brain } from "lucide-react";
import { ABOUT } from "@/lib/projects";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "NASA Team Innovation Award (2025)",
    text: "For advancing system-of-systems analysis methods applied to multi-element human exploration architectures.",
  },
  {
    icon: Code,
    title: "Dyreqt SaaS",
    text: "Led a 5-person team to deliver an alpha version of this engineering tool in just 8 weeks, adding an easy-to-use web interface to an existing simulation previously only accessible via Python scripts and command line.",
  },
  {
    icon: Brain,
    title: "Digital Twins",
    text: "Supported the development of a Digital Twin for the ISS's CO₂ Scrubber system. Presented GUI innovations at Jacobs' MSFC Center-wide Program Review.",
  },
  {
    icon: Palette,
    title: "Education & Mentorship",
    text: "Authored a 100-page internal book on Jira/Python automation. Created and taught courses on React Web Development and DevOps streamlining within Jacobs/NASA.",
  },
];

export function AboutPage() {
  return (
    <div className="ambient relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/15">
            <span className="font-display text-3xl font-bold text-gradient">RS</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">{ABOUT.name}</span>
          </h1>
          <p className="mt-3 text-lg text-[var(--color-fg-soft)]">{ABOUT.role}</p>
        </motion.div>

        {/* bio */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <div className="rounded-2xl glass p-8">
            <p className="text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
              {ABOUT.bio}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
              With a background in <strong className="text-white">Computer Science (BS)</strong>,{" "}
              <strong className="text-white">Modeling & Simulation (MS)</strong>, and{" "}
              <strong className="text-white">Visual Communication (BFA)</strong>, I bridge the gap
              between heavy technical data and human-readable interfaces. I believe that even the most
              complex aerospace systems deserve intuitive, elegant, and responsive user experiences.
            </p>
          </div>
        </motion.section>

        {/* career highlights */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8"
        >
          <h2 className="mb-4 font-display text-xl font-bold text-white">Career Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="rounded-xl glass p-5">
                <h.icon className="mb-2 h-5 w-5 text-cyan-300" />
                <h3 className="mb-1 text-sm font-semibold text-white">{h.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{h.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* technical expertise */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="mb-4 font-display text-xl font-bold text-white">Technical Expertise</h2>
          <div className="rounded-2xl glass p-6">
            <p className="mb-4 text-sm text-[var(--color-fg-muted)]">
              I build full-stack web applications that simplify complex and intimidating scientific and
              simulation applications, and process, filter, and visualize massive datasets and real-time data.
            </p>
            <ul className="space-y-2">
              {ABOUT.expertise.map((x) => (
                <li key={x} className="flex gap-2 text-sm text-[var(--color-fg-soft)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href={ABOUT.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={`mailto:${ABOUT.links.email}`}
            className="flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Get in Touch
          </a>
        </motion.div>

        <div className="mt-12 border-t border-[var(--color-hairline)] pt-6 text-center text-xs text-[var(--color-fg-muted)]">
          When I'm not building tools for NASA, I'm reading, writing, learning by building projects, tinkering with AI, or spending time with my family.
        </div>
      </div>
    </div>
  );
}
