import { notFound } from "next/navigation";
import { ContentShell } from "@/components/shared/content-shell";
import { getPlaygroundProjectBySlug, playgroundProjects } from "@/content/playground";
import { buildPlaygroundRouteMetadata } from "@/lib/seo/route-metadata";

type PlaygroundDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return playgroundProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PlaygroundDetailPageProps) {
  const { slug } = await params;
  const metadata = buildPlaygroundRouteMetadata(slug);

  if (!metadata) {
    return {};
  }

  return metadata;
}

export default async function PlaygroundDetailPage({ params }: PlaygroundDetailPageProps) {
  const { slug } = await params;
  const project = getPlaygroundProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ContentShell
      backHref="/playground"
      backLabel="Back to playground"
      title={project.title}
      description={project.description}
      meta={[
        { label: "Status", value: project.status },
        { label: "Updated", value: project.updatedAt },
        { label: "Keywords", value: project.keywords.join(", ") },
      ]}
    >
      <p>
        Use this shell for prototype notes, experimental writeups, motion studies, or technical proofs of concept.
      </p>
    </ContentShell>
  );
}