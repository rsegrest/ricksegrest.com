import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, Award, ExternalLink, Download } from "lucide-react";

const EXPERIENCE = [
  {
    company: "AMENTUM SPACE EXPLORATION GROUP (formerly JACOBS)",
    location: "Huntsville, AL",
    period: "2019–Present",
    title: "Senior Software Engineer & Subject Matter Expert",
    subtitle: "GUI, UX, and Web Application Software Engineering",
    highlights: [
      "Designed and built a desktop application (Electron/React/TypeScript) that centralizes NASA proposal cost estimating and scope-of-work generation, replacing error-prone spreadsheet workflows with a single source of truth — projected six-figure cost savings by eliminating duplicate budget entries.",
      "Led 5-person team for NASA Engineering Materials (EM04) that delivered alpha version of Dyreqt SaaS in 8 weeks under FY surge, enabling non-Python users to adopt the tool, eliminating the need for week-long user training sessions.",
      "Awarded NASA Marshall Space Flight Center (MSFC) Team Innovation Award in Fall 2025 for innovation and advancement of system-of-systems analysis methods applied to multi-element human exploration architectures.",
      "Created and taught two courses for the Jacobs MPP: Introduction to React Web Application Development, and Streamlining DevOps. Awarded 2023 TIPI Grant to author a 100-page internal tutorial book.",
      "Extended NASA's Sherlock Web Application front end for a big-data tool allowing users to consume, search, filter, and visualize SLS simulation data or real-world telemetry data.",
      "Supported NASA IRAD to produce Digital Twin Simulation of the ISS's 4-bed CO₂ Scrubber physical system. Team awarded NASA Group Achievement Award in 2024.",
      "Built 3 Atlassian Jira/Confluence DevOps automation tools using Python Flask REST APIs with TS/JS React Front-ends that eliminated manual reporting for 50+ users.",
      "Primary developer in NASA IRAD effort to design, prototype, and implement NASA Software Engineering Requirements Tailoring Tool (SERTT).",
      "Led effort to recreate and modernize THOR, a legacy NASA application querying the HOSC's centralized library of raw ISS payload data.",
    ],
    awards: ["Spot Bonus (April 2024)", "JuMP Mentoring Program (2023)", "Extra Miler Award (April 2023)"],
  },
  {
    company: "ASRC FEDERAL",
    location: "Huntsville, AL",
    period: "2018–2019",
    title: "Senior Database Engineer",
    highlights: [
      "Backend Database Engineer for two Missile Defense Data Center (MDDC) software applications, DMS and T-PATS / TREAD.",
      "Managed databases and developed SQL queries to create data reports. Enabled users to create, track, and manage data artifacts for Integrated Data Management Plan (IDMP) documentation.",
    ],
  },
  {
    company: "WAVELINK, INC.",
    location: "Huntsville, AL",
    period: "2015–2018",
    title: "Senior Software Engineer",
    highlights: [
      "Led effort to develop a Post-Flight Analysis Application (PFA) using Java and NASA WorldWind to receive, process, and display flight analysis data messages in real time.",
      "Defined a JSON-based data message format mapping to MIL-STD-1553 avionics data protocol, allowing human-readable client-server communication.",
      "Supported front-end development for CMMI-level 4 global missile defense simulation software suite (Objective Simulation Framework) written in Java and C++.",
    ],
  },
  {
    company: "NORTHROP GRUMMAN INFORMATION SYSTEMS",
    location: "Huntsville, AL",
    period: "2011–2015",
    title: "Software Engineer",
    highlights: [
      "Designed and built user interface prototypes for developmental IBCS and Ground Combat Vehicle (GCV) projects using Adobe Creative Suite, jQuery, JavaScript, PHP, HTML5, and XML.",
      "Won Northrop Grumman Timely Award (December 2013) for completing future-concept GCV Armored Personnel Carrier simulation and UI design prototype via Unity3D game engine.",
      "Designed and maintained team business development database with web interface tracking stakeholder contacts from 65+ captures worth $4.8B+.",
    ],
  },
  {
    company: "TELEDYNE BROWN ENGINEERING",
    location: "Huntsville, AL",
    period: "2006–2011",
    title: "Software Developer",
    highlights: [
      "Designed and developed Adobe Flex Web 2.0 user interface prototypes for IAMD CWMI team. Integrated software simulation components in PCIL real-time simulation laboratory at Boeing.",
      "Won 2 TBE Presidential Awards for Outstanding Performance (January 2010, September 2010).",
      "Led 3-person team to develop, support, and maintain modular database web portal for tracking system anomalies — used throughout Boeing GMD Program.",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of Alabama in Huntsville (UAH)",
    degree: "Master of Science — Computer Science: Modeling & Simulation",
    note: "1 of first 2 graduates in new course of study at UAH — 1 of only 3 graduate programs in M&S worldwide. GPA: 3.45",
  },
  {
    school: "University of Alabama in Huntsville (UAH)",
    degree: "Bachelor of Science — Computer Science",
    note: "Minor: Mathematics",
  },
  {
    school: "Auburn University",
    degree: "Bachelor of Fine Arts — Visual Communication",
  },
];

const PUBLICATIONS = [
  { text: "Streamlining DevOps with the Atlassian Jira Python API. Jacobs/NASA internal publication, 2024." },
  { text: "Coverage of Alabama Delegation at 2008 Republican National Convention. The Huntsville Times: September 2-5, 2008, and al.com, September 1-5, 2008." },
  { text: "Open Source Telephony Answers the Call. Linux World Magazine: September 2005." },
  { text: "IAX Protocol Simplifies VoIP. Network World Magazine: 11 April 2005." },
  { text: "Say Hello to Asterisk. Linux Magazine: September 2004. (with B. Kervin)" },
];

const PRESENTATIONS = [
  { text: "Introduction to React Web Application Development. November 9, 2023. Marshall Space Flight Center: Huntsville, AL" },
  { text: "Streamlining DevOps using the Atlassian Jira Python API. November 2, 2023. Marshall Space Flight Center: Huntsville, AL" },
  { text: "Leveraging Game Development Engines to Simulate Conceptual Systems. March 29-April 3, 2014. 26th Annual IEEE Software Technology Conference: Long Beach, CA. (with J.E. Dodson & M. Graham)" },
  { text: "Leveraging Game Development Engines to Simulate Conceptual Systems. April 7-10, 2014. Northrop Grumman Software Symposium: Baltimore, MD. (with J.E. Dodson & M. Graham)" },
];

export function ResumePage() {
  return (
    <div className="ambient relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-gradient">Rick Segrest</span>
              </h1>
              <p className="mt-2 text-lg text-[var(--color-fg-soft)]">
                Senior Software Engineer — UI/UX · Full-Stack · Data Visualization · AI Integration
              </p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                Huntsville, AL · 20+ years experience · NASA Engineering Materials (EM04)
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all hover:ring-2 hover:ring-cyan-400/40 hover:bg-cyan-400/5"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* professional summary */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
            <Briefcase className="h-5 w-5 text-cyan-300" />
            Professional Summary
          </h2>
          <div className="rounded-2xl glass p-6">
            <p className="text-[15px] leading-relaxed text-[var(--color-fg-soft)]">
              Senior Software Engineer with 20+ years of experience specializing in UI/UX design, full-stack web applications,
              and data visualization for complex scientific and aerospace systems. Currently a Full Stack Application Developer for NASA
              Engineering Materials (EM04) Model-Based Systems Engineering tools. Proven expertise in React, TypeScript,
              Python, and modern DevOps practices. Passionate about making complex technical tools accessible to scientists
              and engineers. Multiple innovation awards and group achievement honors awarded by both NASA and contractors.
            </p>
          </div>
        </motion.section>

        {/* core expertise */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8"
        >
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
            <Award className="h-5 w-5 text-cyan-300" />
            Core Knowledge & Expertise
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Frontend",
                items: "React, TypeScript, Semantic-UI, IBM Carbon, MaterialUI, D3, Plotly. Also C++/Qt, Java Swing/FX, Swift/UIKit, React Native.",
              },
              {
                title: "Backend & APIs",
                items: "Python (Flask), Node.js, Socket.io & WebSockets. PostgreSQL, MSSQL, MongoDB.",
              },
              {
                title: "DevOps & Process",
                items: "Docker, Git, Atlassian API, GitHub, GitLab. Agile Scrum, Kanban, TDD.",
              },
              {
                title: "AI & ML Integration",
                items: "LLMs, Multimodal & Vision models. Both hosted and self-deployed local AI services. AI API integration.",
              },
              {
                title: "Simulation & Analysis",
                items: "MATLAB, MiniTab, R, SciPy. Modeling & Simulation (MS degree). Statistical analysis & data modeling.",
              },
              {
                title: "Technical Writing",
                items: "Tutorials, presentations, documentation for complex software. 100-page internal book. Multiple publications.",
              },
            ].map((exp, i) => (
              <div key={exp.title} className="rounded-xl glass p-4">
                <h3 className="mb-1.5 text-sm font-semibold text-white">{exp.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{exp.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* experience */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-white">
            <Briefcase className="h-5 w-5 text-cyan-300" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="rounded-2xl glass p-6">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-white">{job.company}</h3>
                  <span className="shrink-0 rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-[var(--color-fg-muted)]">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-cyan-300">{job.title}</p>
                {job.subtitle && (
                  <p className="text-xs text-[var(--color-fg-muted)]">{job.subtitle}</p>
                )}
                <p className="mt-1 text-xs text-[var(--color-fg-muted)]">{job.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-[var(--color-fg-soft)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>
                {job.awards && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.awards.map((a) => (
                      <span key={a} className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* education */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10"
        >
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
            <GraduationCap className="h-5 w-5 text-cyan-300" />
            Education & Professional Development
          </h2>
          <div className="space-y-3">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="rounded-xl glass p-4">
                <h3 className="font-semibold text-white">{edu.school}</h3>
                <p className="text-sm text-cyan-300">{edu.degree}</p>
                {edu.note && <p className="mt-1 text-xs text-[var(--color-fg-muted)]">{edu.note}</p>}
              </div>
            ))}
          </div>
        </motion.section>

        {/* presentations & publications */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-white">
              <ExternalLink className="h-5 w-5 text-cyan-300" />
              Presentations
            </h2>
            <div className="space-y-2">
              {PRESENTATIONS.map((p, i) => (
                <div key={i} className="rounded-xl glass p-3">
                  <p className="text-sm leading-relaxed text-[var(--color-fg-soft)]">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-white">
              <BookOpen className="h-5 w-5 text-cyan-300" />
              Publications
            </h2>
            <div className="space-y-2">
              {PUBLICATIONS.map((p, i) => (
                <div key={i} className="rounded-xl glass p-3">
                  <p className="text-sm leading-relaxed text-[var(--color-fg-soft)]">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* footer */}
        <div className="mt-12 border-t border-[var(--color-hairline)] pt-6 text-center text-xs text-[var(--color-fg-muted)]">
          More contact information available upon request ·{" "}
          <a href="mailto:rsegrest77+ghpg@gmail.com" className="text-cyan-300 hover:underline">
            rsegrest77+ghpg@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
