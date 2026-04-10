import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "About",
  description: "A placeholder about page ready for future profile, positioning, and longer-form narrative content.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="About placeholder"
        description="This page exists so the route structure, metadata, and navigation are complete before real content is added."
      />
      <SectionWrapper
        title="Replace later"
        description="Use this section for biography, positioning, background, process, or any other profile content."
      >
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Placeholder copy keeps the project neutral while preserving a production-ready page structure.
        </p>
      </SectionWrapper>
    </div>
  );
}