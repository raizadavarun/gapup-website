import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Research — MoNor",
  description:
    "Research publications and insights from MoNor — coming soon.",
};

export default function ResearchPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-4">Research</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Publications &
            <br />
            <span className="text-text-muted font-light">Insights</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Selected findings from our research process — methodology notes,
            empirical observations, and perspective on systematic
            decision-making.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-7 h-7 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Research publications and insights coming soon.
          </h2>
          <p className="text-text-muted leading-relaxed mb-10">
            We are preparing selected work from our quantitative research
            process. Check back here or get in touch to be notified when we
            publish.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:border-text/30 transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
