export default function SectionLabel({
  children,
  className = "mb-3",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-2 text-text-muted text-sm tracking-widest uppercase ${className}`}>
      <svg
        viewBox="81 9 86 98"
        width="11"
        height="13"
        fill="currentColor"
        className="opacity-50 flex-shrink-0"
        aria-hidden="true"
      >
        <polygon points="166,9 167,9 167,84 153,85 153,96 140,97 140,107 81,107 81,85 99,85 99,75" />
      </svg>
      {children}
    </p>
  );
}
