import { CardTile } from "@/components/shared/card-tile";
import { PageHeader } from "@/components/shared/page-header";
import { playgroundProjects } from "@/content/playground";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Playground",
  description: "A placeholder playground section for experiments, prototypes, and future exploratory work.",
  path: "/playground",
});

export default function PlaygroundPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Playground"
        title="Experiments and prototypes"
        description="This section mirrors the work architecture while keeping room for more informal or experimental entries."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {playgroundProjects.map((project) => (
          <CardTile
            key={project.slug}
            href={`/playground/${project.slug}`}
            title={project.title}
            description={project.summary}
            meta={project.status}
          />
        ))}
      </div>
    </div>
  );
}