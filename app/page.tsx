import { CardTile } from "@/components/shared/card-tile";
import { CardSection } from "@/components/sections/card-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { playgroundProjects } from "@/content/playground";
import { threadArticles } from "@/content/threads";
import { workProjects } from "@/content/work";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { ClickForMoreButton } from "@/components/shared/ClickForMoreButton";

export const metadata = buildStaticPageMetadata({
  title: "Home",
  description: "A neutral placeholder homepage wired to reusable sections, listings, and metadata utilities.",
  path: "/",
  keywords: ["home", "placeholder portfolio"],
});

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed SVG background */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          background: 'none',
        }}
      >
        <img
          src="/Grdiant Background.svg"
          alt="Gradient background"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          draggable={false}
        />
      </div>
      <div className="space-y-12 relative z-10">
        <HeroSection />
        <CardSection />
        <div className="flex justify-end">
          <ClickForMoreButton />
        </div>

        <SectionWrapper
          id="work-preview"
          title="Work Preview"
          description="Placeholder project entries demonstrate the reusable listing and detail route pattern."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {workProjects.map((project) => (
              <CardTile
                key={project.slug}
                href={`/work/${project.slug}`}
                title={project.title}
                description={project.summary}
                meta={project.year}
              />
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper
          id="playground-preview"
          title="Playground Preview"
          description="Experiment routes follow the same content-driven conventions with lighter placeholder entries."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {playgroundProjects.map((project) => (
              <CardTile
                key={project.slug}
                href={`/playground/${project.slug}`}
                title={project.title}
                description={project.summary}
                meta={project.status}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="thread-preview"
          title="Thread Preview"
          description="Article routes are category-aware and driven from a central content registry."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {threadArticles.map((article) => (
              <CardTile
                key={`${article.category}-${article.slug}`}
                href={`/threads/${article.category}/${article.slug}`}
                title={article.title}
                description={article.summary}
                meta={`${article.category} · ${article.readingTime}`}
              />
            ))}
          </div>
        </SectionWrapper>
        
      </div>
    </div>
  );
}