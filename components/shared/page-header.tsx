type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-muted">{eyebrow}</p> : null}
      <div className="max-w-3xl space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
      </div>
    </header>
  );
}