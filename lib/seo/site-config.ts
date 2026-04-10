const siteUrl = "https://example-site.test";
const siteName = "Placeholder Site";
const siteDescription = "A placeholder-driven website foundation with clean route structure, reusable SEO helpers, and extensible content registries.";
const defaultOgImage = "/og/default-og.png";
const authorName = "Site Author";

function stripTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function ensureLeadingSlash(value: string) {
  if (!value) {
    return "/";
  }

  return value.startsWith("/") ? value : `/${value}`;
}

export function buildAbsoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "/" : ensureLeadingSlash(path);
  return new URL(normalizedPath, `${stripTrailingSlash(siteUrl)}/`).toString();
}

export function normalizeMetaDescription(description?: string) {
  const fallback = siteDescription;
  const normalized = (description ?? fallback).replace(/\s+/g, " ").trim();

  if (normalized.length <= 160) {
    return normalized;
  }

  return `${normalized.slice(0, 157).trimEnd()}...`;
}

export function buildKeywords(...keywordGroups: Array<Array<string | null | undefined> | string | null | undefined>) {
  return keywordGroups
    .flatMap((group) => (Array.isArray(group) ? group : [group]))
    .filter((keyword): keyword is string => Boolean(keyword?.trim()))
    .map((keyword) => keyword.trim())
    .filter((keyword, index, collection) => collection.indexOf(keyword) === index);
}

export const siteConfig = {
  siteUrl,
  siteName,
  siteDescription,
  defaultOgImage,
  authorName,
};