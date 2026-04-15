import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elsan Memeti — Fullstack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Elsan Memeti, a fullstack web developer crafting smooth, polished experiences with React, Next.js and Node.js.",
      },
      { property: "og:title", content: "Elsan Memeti — Fullstack Web Developer" },
      {
        property: "og:description",
        content: "Smooth web experiences built with React, Next.js and Node.js.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
