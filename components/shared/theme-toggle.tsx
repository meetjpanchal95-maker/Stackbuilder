"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/app/theme";

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12H2.75M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M20.25 14.2A8.75 8.75 0 1 1 9.8 3.75a7 7 0 1 0 10.45 10.45Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const label = mounted ? `Switch to ${nextTheme} mode` : "Toggle theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      title={label}
      className="theme-toggle-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-foreground"
    >
      <span className="sr-only">Switch theme</span>
      {mounted ? theme === "dark" ? <SunIcon /> : <MoonIcon /> : <span className="h-4 w-4 rounded-full border border-current" />}
    </button>
  );
}