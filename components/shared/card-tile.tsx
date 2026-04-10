import Link from "next/link";

type CardTileProps = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

export function CardTile({ href, title, description, meta }: CardTileProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-border bg-surface p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-foreground/40"
    >
      <div className="space-y-3">
        {meta ? <p className="text-xs uppercase tracking-[0.2em] text-muted">{meta}</p> : null}
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </div>
    </Link>
  );
}