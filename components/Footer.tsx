import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-text font-semibold text-xs tracking-tight">
            MoNor Intelligence Labs Pvt. Ltd.
          </span>
          <span className="text-text-muted text-xs">·</span>
          <span className="text-text-muted text-xs">
            Disciplined research. Systematic models. Automated execution.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-text-muted text-xs hover:text-text transition-colors"
          >
            About
          </Link>
          <Link
            href="/capabilities"
            className="text-text-muted text-xs hover:text-text transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="/contact"
            className="text-text-muted text-xs hover:text-text transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="text-text-muted text-sm">
          <span className="text-xs">© {year} MoNor Intelligence Labs Pvt. Ltd. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
