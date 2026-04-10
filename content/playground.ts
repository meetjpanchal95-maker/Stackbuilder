export type PlaygroundProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: string;
  keywords: string[];
  updatedAt: string;
};

export const playgroundProjects: PlaygroundProject[] = [
  {
    slug: "lab-one",
    title: "Lab One",
    summary: "A placeholder experiment page for motion, prototypes, or technical tests.",
    description: "This entry stands in for future playground content while preserving route and metadata wiring.",
    status: "Prototype",
    keywords: ["lab one", "playground example"],
    updatedAt: "2026-04-02",
  },
  {
    slug: "lab-two",
    title: "Lab Two",
    summary: "A second placeholder experiment with the same data-driven route shape.",
    description: "The content is generic by design and safe to replace later without touching the route system.",
    status: "Exploration",
    keywords: ["lab two", "experimental route"],
    updatedAt: "2026-04-04",
  },
];

export function getPlaygroundProjectBySlug(slug: string) {
  return playgroundProjects.find((project) => project.slug === slug);
}