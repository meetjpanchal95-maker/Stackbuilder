import { notFound } from "next/navigation";
import { CardTile } from "@/components/shared/card-tile";
import { PageHeader } from "@/components/shared/page-header";
import { getThreadArticlesByCategory, threadCategories } from "@/content/threads";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

type ThreadCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return threadCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: ThreadCategoryPageProps) {
  const { category } = await params;

  return buildStaticPageMetadata({
    title: `${category} threads`,
    description: `Placeholder articles filed under the ${category} category.`,
    path: `/threads/${category}`,
    keywords: [category, "threads category"],
  });
}

export default async function ThreadCategoryPage({ params }: ThreadCategoryPageProps) {
  const { category } = await params;
  const articles = getThreadArticlesByCategory(category);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Category"
        title={`${category} threads`}
        description="This category page is generated from the shared thread registry."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <CardTile
            key={article.slug}
            href={`/threads/${article.category}/${article.slug}`}
            title={article.title}
            description={article.summary}
            meta={article.readingTime}
          />
        ))}
      </div>
    </div>
  );
}