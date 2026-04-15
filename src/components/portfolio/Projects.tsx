import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              03 — Projects
            </div>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
              Selected work from <span className="text-gradient">GitHub.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Elsani?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <Github className="size-4" /> All repositories
          </a>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.homepage || p.url}
              target="_blank"
              rel="noreferrer"
              
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: "easeOut" as const }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                  {p.language}
                </span>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
