export type ThreadArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  keywords: string[];
};

export const threadArticles: ThreadArticle[] = [
  {
    slug: "article-one",
    category: "notes",
    title: "Article One",
    summary: "A placeholder article for validating category-aware article routing.",
    description: "This article exists to demonstrate a registry-driven approach for thread or article content.",
    publishedAt: "2026-04-01",
    readingTime: "3 min read",
    keywords: ["article one", "notes"],
  },
  {
    slug: "article-two",
    category: "process",
    title: "Article Two",
    summary: "A second article entry using a different category segment.",
    description: "Use this route as a structural placeholder until real editorial content is ready.",
    publishedAt: "2026-04-05",
    readingTime: "4 min read",
    keywords: ["article two", "process"],
  },
  {
    slug: "article-three",
    category: "notes",
    title: "Article Three",
    summary: "Another notes entry to prove category landing pages and dynamic detail routes.",
    description: "This placeholder article helps populate listings, sitemap entries, and metadata derivation.",
    publishedAt: "2026-04-07",
    readingTime: "5 min read",
    keywords: ["article three", "category listing"],
  },
];

export const threadCategories = Array.from(new Set(threadArticles.map((article) => article.category)));

export function getThreadArticle(category: string, slug: string) {
  return threadArticles.find((article) => article.category === category && article.slug === slug);
}

export function getThreadArticlesByCategory(category: string) {
  return threadArticles.filter((article) => article.category === category);
}

export function getThreadRegistry() {
  return threadArticles.map((article) => ({
    category: article.category,
    slug: article.slug,
    href: `/threads/${article.category}/${article.slug}`,
  }));
}