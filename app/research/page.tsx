import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research — GapUp",
  description:
    "Research publications and insights from GapUp's quantitative intelligence team.",
};

export default function ResearchPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">
            Research
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Insights &
            <br />
            <span className="text-text-muted font-light">Publications</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            We share selected findings from our research process — pattern
            analysis, methodology notes, and observations from working with
            data at scale.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-7 h-7 text-primary"
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
            Coming Soon
          </h2>
          <p className="text-text-muted leading-relaxed mb-10">
            Research publications and insights are currently in preparation.
            We'll be sharing selected work from our quantitative research
            process — methodology notes, empirical observations, and
            perspective on systematic decision-making.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-text-muted text-sm">
              Want to be notified when we publish?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:border-text/30 transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser grid */}
      <section className="py-16 px-6 border-t border-border bg-surface/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-text-muted text-xs tracking-widest uppercase mb-10 text-center">
            Research Areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              "Signal Detection",
              "Regime Classification",
              "Risk Modelling",
              "Execution Research",
            ].map((area) => (
              <div
                key={area}
                className="bg-background p-8 text-center hover:bg-surface/40 transition-colors"
              >
                <p className="text-text-muted text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
