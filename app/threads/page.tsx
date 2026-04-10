import { CardTile } from "@/components/shared/card-tile";
import { PageHeader } from "@/components/shared/page-header";
import { threadArticles, threadCategories } from "@/content/threads";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Threads",
  description: "A placeholder article index with category-aware routes and registry-driven detail pages.",
  path: "/threads",
});

export default function ThreadsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Threads"
        title="Article and notes registry"
        description="Content is grouped by category and routed through a central registry so indexing and metadata remain consistent."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {threadCategories.map((category) => (
          <CardTile
            key={category}
            href={`/threads/${category}`}
            title={category}
            description="A category landing page for grouped article listings."
            meta="Category"
          />
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {threadArticles.map((article) => (
          <CardTile
            key={`${article.category}-${article.slug}`}
            href={`/threads/${article.category}/${article.slug}`}
            title={article.title}
            description={article.summary}
            meta={`${article.category} · ${article.readingTime}`}
          />
        ))}
      </section>
    </div>
  );
}