import { ButtonLink } from "@/components/shared/button-link";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildStaticPageMetadata({
  title: "Book Meeting",
  description: "A placeholder booking page backed by a future-ready route handler.",
  path: "/book-meeting",
});

export default function BookMeetingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Book Meeting"
        title="Booking placeholder"
        description="This page is intentionally minimal and exists to prove the route structure and API scaffolding."
      />
      <SectionWrapper
        title="Future booking flow"
        description="Swap this block with a scheduling embed, form flow, or calendaring integration later."
      >
        <ButtonLink href="/api/book-meeting">View booking API route</ButtonLink>
      </SectionWrapper>
    </div>
  );
}