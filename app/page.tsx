import Link from "next/link";
import GridBackground from "@/components/GridBackground";

const steps = [
  {
    label: "Data",
    description: "Ingesting structured and unstructured signals at scale",
  },
  {
    label: "Research",
    description: "Identifying patterns through rigorous empirical analysis",
  },
  {
    label: "Models",
    description: "Quantifying relationships with statistical precision",
  },
  {
    label: "Decisions",
    description: "Converting model output into clear, actionable signals",
  },
  {
    label: "Automation",
    description: "Executing decisions consistently without human latency",
  },
];

const applications = [
  {
    title: "Quantitative Research",
    description:
      "Systematic exploration of data to surface non-obvious patterns and validate hypotheses with statistical rigour.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Automated Execution",
    description:
      "Translating model-derived signals into deterministic, high-frequency execution pipelines that scale without drift.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Risk Frameworks",
    description:
      "Quantifying uncertainty and downside exposure to ensure decisions are made within well-defined risk parameters.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
        <GridBackground />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-muted text-xs tracking-wider uppercase">
              Quantitative Intelligence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            Turning Data
            <br />
            <span className="text-gradient-primary">Into Decisions</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            GapUp develops research-driven quantitative models that transform
            data into repeatable, automated decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/capabilities"
              className="px-6 py-3 rounded-lg bg-primary text-background font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-border text-text-muted hover:text-text hover:border-text/30 transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted/40">
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {steps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="flex flex-col md:items-center p-6 md:p-8">
                  <div className="flex items-center gap-4 md:flex-col md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary text-xs font-mono flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-text font-semibold text-base md:text-center">
                      {step.label}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed md:text-center">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-border z-10">
                    <svg
                      className="w-8 h-8 text-primary/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-28 px-6 bg-surface/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">
              Applications
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Built for Complexity
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group relative p-8 rounded-xl border border-border bg-background card-hover"
                style={{
                  background:
                    "linear-gradient(145deg, #0D1117 0%, #030712 100%)",
                }}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(0,212,255,0.05) 0%, rgba(0,255,179,0.02) 100%)",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    {app.icon}
                  </div>
                  <h3 className="text-text font-semibold text-lg mb-3">
                    {app.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs tracking-widest uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Research Philosophy
          </h2>
          <blockquote className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
            "We believe that disciplined research, rigorous modelling, and
            systematic execution produce outcomes that are{" "}
            <span className="text-text font-normal">repeatable</span> and{" "}
            <span className="text-text font-normal">scalable</span>."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-text-muted text-sm">GapUp</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 px-6 border-t border-border bg-surface/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Interested in what we're building? We'd welcome the conversation.
          </p>
          <a
            href="mailto:contact@gapup.in"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            contact@gapup.in
          </a>
        </div>
      </section>
    </>
  );
}
