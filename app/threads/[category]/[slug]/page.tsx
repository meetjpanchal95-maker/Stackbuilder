import { notFound } from "next/navigation";
import { ContentShell } from "@/components/shared/content-shell";
import { getThreadArticle, getThreadRegistry } from "@/content/threads";
import { buildThreadRouteMetadata } from "@/lib/seo/route-metadata";

type ThreadDetailPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  return getThreadRegistry();
}

export async function generateMetadata({ params }: ThreadDetailPageProps) {
  const { category, slug } = await params;
  const metadata = buildThreadRouteMetadata(category, slug);

  if (!metadata) {
    return {};
  }

  return metadata;
}

export default async function ThreadDetailPage({ params }: ThreadDetailPageProps) {
  const { category, slug } = await params;
  const article = getThreadArticle(category, slug);

  if (!article) {
    notFound();
  }

  return (
    <ContentShell
      backHref={`/threads/${article.category}`}
      backLabel={`Back to ${article.category}`}
      title={article.title}
      description={article.description}
      meta={[
        { label: "Category", value: article.category },
        { label: "Published", value: article.publishedAt },
        { label: "Reading time", value: article.readingTime },
      ]}
    >
      <p>
        This placeholder article route demonstrates category-aware URL structure, metadata generation, and registry-backed static params.
      </p>
    </ContentShell>
  );
}