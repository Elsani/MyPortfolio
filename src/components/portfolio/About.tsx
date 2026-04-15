import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-5">
        <motion.div
          className="md:col-span-2"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-primary">01 — About</div>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Code that flows<br />like a <span className="text-gradient">smoothie.</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3"
        >
          <p>
            I'm <span className="text-foreground">Elsan Memeti</span>, a fullstack web developer who
            loves turning ideas into fast, beautiful interfaces. My focus is on{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Next.js</span> and{" "}
            <span className="text-foreground">Node.js</span> — combined with a thoughtful eye for UX.
          </p>
          <p>
            From e-commerce shops and dashboards to REST APIs and fintech flows, I've shipped real
            projects following modern architecture, clean Git workflows and a "ship it polished" mindset.
          </p>
          <p>
            Outside the editor, I enjoy mentoring, exploring new frameworks, and turning rough
            briefs into smooth, production-ready products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
