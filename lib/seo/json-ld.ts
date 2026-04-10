import { buildAbsoluteUrl, siteConfig } from "@/lib/seo/site-config";

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": buildAbsoluteUrl("/#website"),
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
        description: siteConfig.siteDescription,
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": buildAbsoluteUrl("/#organization"),
        name: siteConfig.authorName,
        url: siteConfig.siteUrl,
      },
    ],
  };
}