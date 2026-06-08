import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-text font-semibold text-sm tracking-tight">
            GapUp
          </span>
          <span className="text-text-muted text-sm">·</span>
          <span className="text-text-muted text-sm">
            Turning Data Into Decisions
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            About
          </Link>
          <Link
            href="/capabilities"
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="/contact"
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="text-text-muted text-sm">
          © {year} GapUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
