import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        variant === "primary"
          ? "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground"
          : "border-border bg-surface text-foreground hover:border-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}