import { CardTile } from "@/components/shared/card-tile";
import { PageHeader } from "@/components/shared/page-header";
import { workProjects } from "@/content/work";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Work",
  description: "A placeholder work index using a reusable card grid and data-driven detail routes.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Work"
        title="Selected work placeholders"
        description="Project entries come from a central data file so listings, detail routes, metadata, and sitemap generation stay aligned."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {workProjects.map((project) => (
          <CardTile
            key={project.slug}
            href={`/work/${project.slug}`}
            title={project.title}
            description={project.summary}
            meta={project.tags.join(" · ")}
          />
        ))}
      </div>
    </div>
  );
}