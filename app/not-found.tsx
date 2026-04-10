import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-[2rem] border border-border bg-surface p-10 text-center">
      <div className="mx-auto max-w-xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Page not found</h1>
        <p className="text-sm leading-7 text-muted">
          The route exists in the application structure, but this specific entry was not found in the placeholder content registry.
        </p>
        <Link href="/" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">
          Return home
        </Link>
      </div>
    </div>
  );
}