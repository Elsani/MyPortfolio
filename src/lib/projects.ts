export type Project = {
  name: string;
  title: string;
  description: string;
  language: string;
  url: string;
  homepage?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    name: "todo-list-initial",
    title: "Todo List",
    description: "Clean task manager with persistent state and intuitive add/edit/complete flow.",
    language: "JavaScript",
    url: "https://github.com/Elsani/todo-list-initial",
    tags: ["JavaScript", "UI"],
    year: "2026",
  },
  {
    name: "jersey-shop-initial",
    title: "Jersey Shop",
    description: "E-commerce front-end for sports jerseys with cart, filters and product detail pages.",
    language: "JavaScript",
    url: "https://github.com/Elsani/jersey-shop-initial",
    tags: ["JavaScript", "E-commerce"],
    year: "2026",
  },
  {
    name: "TSTODOS",
    title: "TS Todos",
    description: "Typed todo app exploring strict TypeScript patterns, state and component composition.",
    language: "TypeScript",
    url: "https://github.com/Elsani/TSTODOS",
    tags: ["TypeScript", "React"],
    year: "2025",
  },
  {
    name: "React_Typescript",
    title: "React + TypeScript",
    description: "Playground project pairing React with TypeScript best practices and reusable hooks.",
    language: "TypeScript",
    url: "https://github.com/Elsani/React_Typescript",
    tags: ["React", "TypeScript"],
    year: "2025",
  },
  {
    name: "spring-crud-demo",
    title: "Spring CRUD API",
    description: "Java + Spring Boot REST API demonstrating clean CRUD architecture and DB layer.",
    language: "Java",
    url: "https://github.com/Elsani/spring-crud-demo",
    tags: ["Java", "Spring", "REST"],
    year: "2025",
  },
  {
    name: "netflix-clone",
    title: "Netflix Clone",
    description: "Streaming UI clone with rows, hero banner and TMDB-powered movie data.",
    language: "JavaScript",
    url: "https://github.com/Elsani/netflix-clone",
    tags: ["React", "API"],
    year: "2024",
  },
  {
    name: "capitaliii",
    title: "Capitaliii",
    description: "Transfer & payment web app — money movement flow with clean transactional UX.",
    language: "JavaScript",
    url: "https://github.com/Elsani/capitaliii",
    tags: ["FinTech", "Web App"],
    year: "2024",
  },
  {
    name: "studentfrontend",
    title: "Student Portal",
    description: "Frontend for a student management system with forms, lists and routing.",
    language: "JavaScript",
    url: "https://github.com/Elsani/studentfrontend",
    tags: ["React", "Dashboard"],
    year: "2024",
  },
  {
    name: "URL-Shortener-Project",
    title: "URL Shortener",
    description: "Shorten long URLs with a tidy API and minimal redirect service.",
    language: "JavaScript",
    url: "https://github.com/Elsani/URL-Shortener-Project",
    tags: ["Node.js", "API"],
    year: "2023",
  },
  {
    name: "EmployeeManagment",
    title: "HR Platform",
    description: "Employee management platform with roles, profiles and admin tooling.",
    language: "JavaScript",
    url: "https://github.com/Elsani/EmployeeManagment",
    tags: ["HR", "CRUD"],
    year: "2021",
  },
  {
    name: "FitnesGym",
    title: "Fitness Gym",
    description: "Gym site with membership classes, schedule and trainer profiles.",
    language: "JavaScript",
    url: "https://github.com/Elsani/FitnesGym",
    tags: ["Website"],
    year: "2021",
  },
  {
    name: "YourLawyer",
    title: "Your Lawyer",
    description: "Lawyer firm website built on WordPress with services and contact flow.",
    language: "WordPress",
    url: "https://github.com/Elsani/YourLawyer",
    homepage: "http://avokatiyt.wts2020.net",
    tags: ["WordPress", "Website"],
    year: "2021",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Spring Boot", "Java"] },
  { group: "Data", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { group: "Tools", items: ["Git & GitHub", "Docker", "Vite", "Vercel"] },
];
