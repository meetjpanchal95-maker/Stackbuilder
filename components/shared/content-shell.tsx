import Link from "next/link";

type ContentShellProps = {
  backHref: string;
  backLabel: string;
  title: string;
  description: string;
  meta: Array<{ label: string; value: string }>;
  children?: React.ReactNode;
};

export function ContentShell({ backHref, backLabel, title, description, meta, children }: ContentShellProps) {
  return (
    <article className="space-y-8">
      <Link href={backHref} className="text-sm text-muted transition-colors hover:text-foreground">
        {backLabel}
      </Link>
      <header className="grid gap-6 rounded-3xl border border-border bg-surface p-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">{title}</h1>
          <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
        </div>
        <dl className="space-y-4 rounded-2xl border border-border bg-background p-5">
          {meta.map((item) => (
            <div key={item.label} className="space-y-1">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">{item.label}</dt>
              <dd className="text-sm text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>
      <div className="rounded-3xl border border-dashed border-border p-8 text-sm leading-7 text-muted">{children}</div>
    </article>
  );
}