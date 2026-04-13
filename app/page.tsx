import { CardTile } from "@/components/shared/card-tile";
import { CardSection } from "@/components/sections/card-section";
import WorkSection from "@/components/sections/worksection";
import LetsCollaborateSection from "@/components/sections/LetsCollaborateSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightCard from "@/components/sections/InsightCard";
import TitleBlock from "@/components/shared/title-block";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { playgroundProjects } from "@/content/playground";
import { threadArticles } from "@/content/threads";
import { workProjects } from "@/content/work";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { ClickForMoreButton } from "@/components/shared/ClickForMoreButton";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = buildStaticPageMetadata({
  title: "Home",
  description: "A neutral placeholder homepage wired to reusable sections, listings, and metadata utilities.",
  path: "/",
  keywords: ["home", "placeholder portfolio"],
});

export default function HomePage() {
  return (
    <>
      {/* Theme script is now handled in app/head.tsx for proper SSR and hydration. */}
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

        <LetsCollaborateSection />
        <AboutSection />
         <div className="flex justify-end">
          <ClickForMoreButton />
        </div>
        <ServicesSection />
          <div className="flex justify-end">
          <ClickForMoreButton />
        </div>
        <InsightsSection />
      </div>
    </div>
    </>
  );
}
function InsightsSection() {
  return (
    <section className="w-full py-16 flex flex-col items-start">
      <div className="mb-8">
        <TitleBlock text="Insights" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InsightCard
            image="/insights/aa.png"
            tag="Press"
            date="June 16,2024"
            title="Strategic Panel Presence for High-Impact Marketing Events"
            description="StackBuilder supports founders and teams in shaping a clear, confident panel presence before key marketing and industry events. We focus on narrative structure, visual coherence, and message hierarchy to ensure ideas are communicated with precision. The outcome is stronger audience engagement, credible positioning, and conversations that extend beyond the stage."
            descriptionClassName="insight-desc-invert"
          />
          <InsightCard
            image="/insights/bb.png"
            tag="Press"
            date="June 16,2024"
            title="AI-Enabled Global Founder Collaboration"
            description="We integrate AI into our workflows to support meaningful collaboration between our team and founders across global ecosystems. By accelerating research, enabling sharper discussions and faster alignment. This approach allows us to work efficiently at scale while keeping decision-making thoughtful and human-centered."
            descriptionClassName="insight-desc-invert"
          />
          <InsightCard
            image="/insights/cc.png"
            tag="Press"
            date="June 16,2024"
            title="Founder-Led Product Marketing Systems"
            description="StackBuilder builds product marketing systems that help founders articulate value clearly and consistently. Through research-driven messaging, visual storytelling, and iterative refinement, we translate complex products into understandable narratives. Our campaigns are designed to build trust, improve recall, and support sustainable growth rather than short-term visibility."
            descriptionClassName="insight-desc-invert"
          />
          <InsightCard
            image="/insights/dd.png"
            tag="Press"
            date="June 16,2024"
            title="Curated Founder Investor Engagements | UAE"
            description="We design structured founder—investor engagements in the UAE that prioritise clarity, relevance, and long-term alignment. By refining pitch narratives and interaction touchpoints, we help founders communicate vision and reach meaningful connection. The focus is on enabling meaningful dialogue that leads to informed decisions and strategic partnerships."
            descriptionClassName="insight-desc-invert"
          />
      </div>
    </section>
  );
}