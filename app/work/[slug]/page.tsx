import { notFound } from "next/navigation";
import { ContentShell } from "@/components/shared/content-shell";
import { getWorkProjectBySlug, workProjects } from "@/content/work";
import { buildWorkRouteMetadata } from "@/lib/seo/route-metadata";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const metadata = buildWorkRouteMetadata(slug);

  if (!metadata) {
    return {};
  }

  return metadata;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ContentShell
      backHref="/work"
      backLabel="Back to work"
      title={project.title}
      description={project.description}
      meta={[
        { label: "Year", value: project.year },
        { label: "Tags", value: project.tags.join(", ") },
        { label: "Updated", value: project.updatedAt },
      ]}
    >
      <p>
        This placeholder detail page verifies the reusable shell pattern for project pages. Replace the content later without changing the route, metadata, or sitemap wiring.
      </p>
    </ContentShell>
  );
}