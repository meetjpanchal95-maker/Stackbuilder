import type { PropsWithChildren } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[30rem]"
        style={{
          background:
            "radial-gradient(circle at top, color-mix(in srgb, var(--brand-color) 22%, transparent) 0%, transparent 52%), radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--secondary-brand) 18%, transparent) 0%, transparent 32%)",
        }}
      />
      <SiteHeader />
      <main className="mx-auto flex w-full flex-col gap-10 px-[var(--site-gutter)] py-10">{children}</main>
      <SiteFooter />
    </div>
  );
}