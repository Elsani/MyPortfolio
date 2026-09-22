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
    name: "enterprise-project-tracker",
    title: "Enterprise Project Tracker",
    description: "Fullstack enterprise project tracker with role-based access, task pipelines, and automated reporting.",
    language: "Java",
    url: "https://github.com/Elsani/enterprise-project-tracker",
    tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "Nuxt 3", "Vuetify"],
    year: "2026",
  },
  {
    name: "capitali",
    title: "Capital Banking & Transfers",
    description: "Digital payment processing and transfer management web app with interactive financial dashboards.",
    language: "JavaScript",
    url: "https://github.com/Elsani/capitali",
    tags: ["JavaScript", "Fintech", "Payment Processing", "Web App"],
    year: "2026",
  },
  {
    name: "EmployeeManagment",
    title: "Employee HR Platform",
    description: "Fullstack HR management platform for organizational tracking, department administration, and employee records.",
    language: "JavaScript",
    url: "https://github.com/Elsani/EmployeeManagment",
    tags: ["JavaScript", "HR System", "Admin Dashboard", "CRUD"],
    year: "2025",
  },
  {
    name: "MYSQL-BANK-PROJECT",
    title: "Banking Database Architecture",
    description: "Enterprise relational banking database design with stored procedures, complex transaction queries, and security.",
    language: "SQL",
    url: "https://github.com/Elsani/MYSQL-BANK-PROJECT",
    tags: ["MySQL", "Database Architecture", "Stored Procedures", "Security"],
    year: "2025",
  },
  {
    name: "Raiffeisen-Bank-Mysql",
    title: "Raiffeisen Core Banking Model",
    description: "Core banking data model simulation featuring account management, loan tracking, and relational data constraints.",
    language: "SQL",
    url: "https://github.com/Elsani/Raiffeisen-Bank-Mysql",
    tags: ["MySQL", "Banking", "Relational Modeling", "Fintech"],
    year: "2024",
  },
  {
    name: "jersey-shop-initial",
    title: "Jersey Shop E-Commerce",
    description: "Modern e-commerce platform with dynamic cart state, catalog filtering, responsive UI, and checkout workflow.",
    language: "JavaScript",
    url: "https://github.com/Elsani/jersey-shop-initial",
    tags: ["JavaScript", "React", "E-commerce", "State Management"],
    year: "2024",
  }
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Spring Boot", "Java"] },
  { group: "Data", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { group: "Tools", items: ["Git & GitHub", "Docker", "Vite", "Vercel"] },
];
