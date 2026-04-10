import type { MetadataRoute } from "next";
import { playgroundProjects } from "@/content/playground";
import { getThreadRegistry } from "@/content/threads";
import { workProjects } from "@/content/work";
import { buildAbsoluteUrl } from "@/lib/seo/site-config";

const staticRoutes = ["/", "/about", "/work", "/playground", "/threads", "/contact", "/book-meeting"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: buildAbsoluteUrl(route),
    lastModified: new Date(),
  }));

  const workEntries = workProjects.map((project) => ({
    url: buildAbsoluteUrl(`/work/${project.slug}`),
    lastModified: project.updatedAt,
  }));

  const playgroundEntries = playgroundProjects.map((project) => ({
    url: buildAbsoluteUrl(`/playground/${project.slug}`),
    lastModified: project.updatedAt,
  }));

  const threadCategoryEntries = Array.from(new Set(getThreadRegistry().map((entry) => entry.category))).map((category) => ({
    url: buildAbsoluteUrl(`/threads/${category}`),
    lastModified: new Date().toISOString(),
  }));

  const threadEntries = getThreadRegistry().map((entry) => ({
    url: buildAbsoluteUrl(entry.href),
    lastModified: new Date().toISOString(),
  }));

  return [...staticEntries, ...workEntries, ...playgroundEntries, ...threadCategoryEntries, ...threadEntries];
}