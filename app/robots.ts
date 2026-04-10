import type { MetadataRoute } from "next";
import { buildAbsoluteUrl, siteConfig } from "@/lib/seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildAbsoluteUrl("/sitemap.xml"),
    host: siteConfig.siteUrl,
  };
}