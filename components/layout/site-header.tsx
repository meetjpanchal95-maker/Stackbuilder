"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/playground", label: "Services" },
  { href: "/threads", label: "Insights" },
  { href: "/contact", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

import React, { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-20 bg-background/80 backdrop-blur"
      style={{ borderBottom: '0.2px solid rgba(29, 111, 170, 0.5)' }}
    >
      <div className="mx-auto flex w-full flex-col gap-4 px-[var(--site-gutter)] py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-6 w-full">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
            Placeholder Site
          </Link>
          {/* Hamburger for mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{ marginLeft: 'auto' }}
          >
            <span style={{ display: 'inline-block', width: 28, height: 28, position: 'relative' }}>
              <span style={{
                position: 'absolute',
                height: 3,
                width: 24,
                background: 'var(--foreground)',
                borderRadius: 2,
                left: 2,
                top: 6,
                transition: '0.3s',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }} />
              <span style={{
                position: 'absolute',
                height: 3,
                width: 24,
                background: 'var(--foreground)',
                borderRadius: 2,
                left: 2,
                top: 13,
                opacity: mobileMenuOpen ? 0 : 1,
                transition: '0.3s',
              }} />
              <span style={{
                position: 'absolute',
                height: 3,
                width: 24,
                background: 'var(--foreground)',
                borderRadius: 2,
                left: 2,
                top: 20,
                transition: '0.3s',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }} />
            </span>
          </button>
        </div>
        {/* Desktop nav - one line, no wrap */}
        <nav className="site-header-nav hidden lg:flex flex-nowrap gap-9 text-muted items-center whitespace-nowrap w-auto">
          <ThemeToggle />
          {navigation.map((item, idx) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`site-header-link relative px-2 py-1 rounded-md transition-colors
                  ${isActive ? "active-menu" : ""}
                  hover:brand-hover`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="menu-bg" aria-hidden="true"></span>
                )}
              </Link>
            );
          })}
        </nav>
        {/* Mobile nav overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm flex flex-col items-end lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <nav
              className="bg-background rounded-l-xl shadow-lg mt-4 mr-2 py-6 px-8 flex flex-col gap-6 min-w-[60vw]"
              style={{ maxWidth: 320 }}
              onClick={e => e.stopPropagation()}
            >
              <ThemeToggle />
              {navigation.map((item, idx) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className={`site-header-link relative px-2 py-2 rounded-md text-lg transition-colors
                      ${isActive ? "active-menu" : ""}
                      hover:brand-hover`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="menu-bg" aria-hidden="true"></span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}