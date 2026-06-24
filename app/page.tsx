import Link from "next/link";
import GridBackground from "@/components/GridBackground";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    label: "Research",
    description:
      "We start by understanding the problem properly — no assumptions, only data.",
  },
  {
    label: "Model",
    description:
      "We build a systematic, testable model around what the research shows.",
  },
  {
    label: "Automate",
    description:
      "We deploy automation that executes without emotion, without fail.",
  },
];

const capabilities = [
  {
    title: "Quant Edge",
    description: "The research and modeling capability at our core.",
    icon: (
      <svg
        className="w-full h-full"
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
    title: "Data Analytics",
    description:
      "Data-driven processes behind every model we build.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        />
      </svg>
    ),
  },
  {
    title: "Model Risk & Robustness",
    description:
      "Every model is stress-tested and validated before it's trusted to run unattended.",
    icon: (
      <svg
        className="w-full h-full"
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
  {
    title: "Algo and Tech",
    description:
      "The automation and execution infrastructure that makes it real.",
    icon: (
      <svg
        className="w-full h-full"
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
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
        <GridBackground />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-muted text-xs tracking-wider uppercase">
              Research · Model · Automate
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            Disciplined research.
            <br />
            <span className="text-gradient-primary">Systematic models.</span>
            <br />
            Automated execution.
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            MoNor researches a problem, builds a model around it, and automates
            the execution — We partner with our clients to help them create this system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/capabilities"
              className="px-6 py-3 rounded-lg border border-border text-text-muted hover:text-text hover:border-text/30 transition-colors text-sm"
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

      {/* What We Do — process flow */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {steps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="flex flex-col md:items-center p-6 md:p-10">
                  <div className="mb-3 md:mb-4 md:text-center">
                    <span className="text-3xl md:text-4xl font-semibold font-mono text-teal-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-text font-semibold text-2xl mb-2 md:text-center">
                    {step.label}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed md:text-center">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-10">
                    <svg
                      className="w-8 h-8 text-border"
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

      {/* Capabilities Preview */}
      <section className="py-28 px-6 bg-surface/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Four Disciplines, One Pipeline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group relative p-8 rounded-xl border border-border card-hover"
                style={{
                  background:
                    "linear-gradient(145deg, #1E2127 0%, #0E182D 100%)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(30,58,138,0.08) 0%, rgba(31,95,82,0.04) 100%)",
                    border: "1px solid rgba(30,58,138,0.3)",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-blue-300 mb-6">
                    <div className="w-9 h-9">{cap.icon}</div>
                  </div>
                  <h3 className="text-text font-semibold text-lg mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors text-sm"
            >
              View full capabilities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Why MoNor Exists
          </h2>
          <blockquote className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
            We strongly believe that decisions, in any industry, are too often
            made on instinct without syncing these decisions with what data says.
            MoNor exists to close that gap: research that earns its conclusions,
            models that are tested before they're trusted, and automation that
            holds up not looking at gut or instinct once data has taken the
            decisions.
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 px-6 border-t border-border bg-surface/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Get in Touch
          </h2>
          {/* TODO: update email once monor.in domain is confirmed */}
          <a
            href="mailto:contact@monor.in"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium"
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
            contact@monor.in
          </a>
        </div>
      </section>
    </>
  );
}
