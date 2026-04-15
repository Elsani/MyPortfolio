import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const ease = "easeOut" as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for projects
        </motion.div>

        <motion.h1
          className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient">Elsan Memeti</span>
          <span className="block text-foreground/90">crafting smooth web experiences.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Fullstack developer specialised in <span className="text-foreground">React, Next.js</span>{" "}
          and <span className="text-foreground">Node.js</span>. I design and build fast, polished
          interfaces and clean APIs — the digital equivalent of a really good smoothie.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View my work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/Elsani"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elsan-memeti/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border glass sm:grid-cols-4"
        >
          {[
            { k: "5+", v: "Years coding" },
            { k: "15+", v: "Projects built" },
            { k: "React", v: "Main stack" },
            { k: "EU", v: "Based in Europe" },
          ].map((s) => (
            <div key={s.v} className="bg-card/40 px-6 py-5">
              <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
