export default function SectionLabel({
  children,
  className = "mb-3",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase text-text-muted ${className}`}
    >
      <span className="h-px w-6 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}
