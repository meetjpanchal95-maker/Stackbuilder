import { getPlaygroundProjectBySlug } from "@/content/playground";
import { getThreadArticle } from "@/content/threads";
import { getWorkProjectBySlug } from "@/content/work";
import { buildArticleMetadata, buildCollectionItemMetadata } from "@/lib/seo/metadata";

export function buildWorkRouteMetadata(slug: string) {
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    return null;
  }

  return buildCollectionItemMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
    section: "Work",
    keywords: project.keywords,
    modifiedTime: project.updatedAt,
  });
}

export function buildPlaygroundRouteMetadata(slug: string) {
  const project = getPlaygroundProjectBySlug(slug);

  if (!project) {
    return null;
  }

  return buildCollectionItemMetadata({
    title: project.title,
    description: project.description,
    path: `/playground/${project.slug}`,
    section: "Playground",
    keywords: project.keywords,
    modifiedTime: project.updatedAt,
  });
}

export function buildThreadRouteMetadata(category: string, slug: string) {
  const article = getThreadArticle(category, slug);

  if (!article) {
    return null;
  }

  return buildArticleMetadata({
    title: article.title,
    description: article.description,
    path: `/threads/${article.category}/${article.slug}`,
    section: article.category,
    keywords: article.keywords,
    publishedTime: article.publishedAt,
  });
}