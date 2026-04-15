import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-border glass p-10 shadow-card sm:p-16"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              04 — Contact
            </div>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              Got an idea? <span className="text-gradient">Let's blend it.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether it's a quick MVP, a polished landing page, or a full product — I'd love to hear
              about it. Drop me a message and let's build something smooth together.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:elsan.memeti@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="size-4" /> Send an email
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/Elsani"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Github className="size-4" /> @Elsani
              </a>
              <a
                href="https://www.linkedin.com/in/elsan-memeti/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Linkedin className="size-4" /> elsan-memeti
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Elsan Memeti — Web Developer</div>
          <div className="font-mono text-xs uppercase tracking-widest">
            Designed & built with care.
          </div>
        </footer>
      </div>
    </section>
  );
}
