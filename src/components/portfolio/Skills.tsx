import { motion } from "motion/react";
import { skills } from "@/lib/projects";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
        >
          <div className="text-xs font-mono uppercase tracking-widest text-primary">02 — Skills</div>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            A blender full of <span className="text-gradient">tools & tech.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-2xl border border-border glass p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  {s.group}
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
