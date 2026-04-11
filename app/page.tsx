import { CardTile } from "@/components/shared/card-tile";
import { CardSection } from "@/components/sections/card-section";
import WorkSection from "@/components/sections/worksection";
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
        <WorkSection />
        <div className="flex justify-end" style={{ marginTop: '-90px' }}>
          <ClickForMoreButton />
        </div>

       

       
        
      </div>
    </div>
  );
}