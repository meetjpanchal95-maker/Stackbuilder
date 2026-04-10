import { ButtonLink } from "@/components/shared/button-link";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Contact",
  description: "A placeholder contact page with future-ready API scaffolding.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Contact"
        title="Contact placeholder"
        description="This route is connected to a placeholder API handler and can be replaced with a form later."
      />
      <SectionWrapper title="Next step" description="Use the future API route below when you are ready to connect a form.">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/api/contact">View contact API route</ButtonLink>
          <ButtonLink href="/book-meeting" variant="secondary">
            Go to book meeting
          </ButtonLink>
        </div>
      </SectionWrapper>
    </div>
  );
}