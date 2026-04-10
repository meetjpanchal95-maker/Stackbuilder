import type { Metadata } from "next";
import { buildAbsoluteUrl, buildKeywords, normalizeMetaDescription, siteConfig } from "@/lib/seo/site-config";

type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

type CollectionMetadataInput = MetadataInput & {
  section: string;
  publishedTime?: string;
  modifiedTime?: string;
};

function buildBaseMetadata({ title, description, path = "/", image, keywords }: MetadataInput): Metadata {
  const resolvedDescription = normalizeMetaDescription(description);
  const resolvedImage = buildAbsoluteUrl(image ?? siteConfig.defaultOgImage);
  const resolvedUrl = buildAbsoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  return {
    title: fullTitle,
    description: resolvedDescription,
    keywords,
    alternates: {
      canonical: resolvedUrl,
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url: resolvedUrl,
      siteName: siteConfig.siteName,
      type: "website",
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildStaticPageMetadata(input: MetadataInput): Metadata {
  return buildBaseMetadata({
    ...input,
    keywords: buildKeywords([siteConfig.siteName, "placeholder website", "Next.js"], input.keywords),
  });
}

export function buildCollectionItemMetadata(input: CollectionMetadataInput): Metadata {
  const metadata = buildBaseMetadata({
    ...input,
    keywords: buildKeywords([input.section, "collection item"], input.keywords),
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime,
      section: input.section,
      authors: [siteConfig.authorName],
    },
  };
}

export function buildArticleMetadata(input: CollectionMetadataInput): Metadata {
  return buildCollectionItemMetadata({
    ...input,
    keywords: buildKeywords(["article", input.section], input.keywords),
  });
}