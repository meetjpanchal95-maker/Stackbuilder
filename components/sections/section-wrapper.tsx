type SectionWrapperProps = {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="space-y-6 rounded-[2rem] border border-border/70 bg-surface/70 p-8 shadow-sm backdrop-blur">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </div>
      {children}
    </section>
  );
}