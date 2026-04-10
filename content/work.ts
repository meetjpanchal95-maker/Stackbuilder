export type WorkProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  tags: string[];
  keywords: string[];
  updatedAt: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "A placeholder case study for a production-ready work detail route.",
    description: "This entry exists to validate the work section architecture, metadata helpers, and static route generation.",
    year: "2026",
    tags: ["Strategy", "Interface"],
    keywords: ["project one", "work example"],
    updatedAt: "2026-04-01",
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "A second placeholder entry that proves the reusable content pattern.",
    description: "This route is intentionally minimal and focused on technical structure over presentation.",
    year: "2026",
    tags: ["Systems", "Delivery"],
    keywords: ["project two", "portfolio structure"],
    updatedAt: "2026-04-03",
  },
];

export function getWorkProjectBySlug(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}