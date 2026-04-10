import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import { ThemeProvider } from "@/app/theme";
import { SiteShell } from "@/components/layout/site-shell";
import { buildAbsoluteUrl, siteConfig } from "@/lib/seo/site-config";
import "@/app/globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  alternates: {
    canonical: buildAbsoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: buildAbsoluteUrl("/"),
    siteName: siteConfig.siteName,
    type: "website",
    images: [
      {
        url: buildAbsoluteUrl(siteConfig.defaultOgImage),
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: [buildAbsoluteUrl(siteConfig.defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={afacad.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}