import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/playground", label: "Services" },
  { href: "/threads", label: "Insights" },
  { href: "/contact", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full flex-col gap-4 px-[var(--site-gutter)] py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
            Placeholder Site
          </Link>
          <ThemeToggle />
        </div>
        <nav className="site-header-nav flex flex-wrap gap-9 text-muted">
          {navigation.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="site-header-link transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}