import Link from "next/link";
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
    number: "01",
    title: "Quant Edge",
    description: "The research and modeling capability at our core.",
  },
  {
    number: "02",
    title: "Data Analytics",
    description: "Data-driven processes behind every model we build.",
  },
  {
    number: "03",
    title: "Model Risk & Robustness",
    description:
      "Every model is stress-tested and validated before it's trusted to run unattended.",
  },
  {
    number: "04",
    title: "Algo and Tech",
    description: "The automation and execution infrastructure that makes it real.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="hidden md:block absolute top-28 bottom-0 left-[8%] w-px bg-border"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-muted mb-10">
            Research · Model · Automate
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Disciplined research.
            <br />
            <span className="italic font-normal text-primary">
              Systematic models.
            </span>
            <br />
            Automated execution.
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            MoNor researches a problem, builds a model around it, and automates
            the execution — We partner with our clients to help them create this system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/capabilities"
              className="px-6 py-3 border border-text text-text hover:bg-text hover:text-background transition-colors font-mono text-xs tracking-[0.15em] uppercase"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-text-muted hover:border-text hover:text-text transition-colors font-mono text-xs tracking-[0.15em] uppercase"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do — process flow */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">
              What We Do
            </h2>
          </div>
          <div>
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 ${
                  i < steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="md:col-span-1 font-mono text-sm text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-text font-semibold text-2xl">
                    {step.label}
                  </h3>
                </div>
                <p className="md:col-span-8 text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="py-28 px-6 bg-surface/60 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">
              Four Disciplines, One Pipeline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group p-8 bg-background card-hover"
              >
                <span className="font-mono text-sm text-primary/60">
                  {cap.number}
                </span>
                <h3 className="font-serif text-text font-semibold text-lg mt-3 mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-mono text-xs tracking-[0.15em] uppercase underline-grow"
            >
              View full capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Why MoNor Exists
          </h2>
          <blockquote className="border-l-2 border-primary pl-8 md:pl-10">
            <p className="font-serif italic text-xl md:text-2xl text-text leading-relaxed">
              We strongly believe that decisions, in any industry, are too often
              made on instinct without syncing these decisions with what data says.
              MoNor exists to close that gap: research that earns its conclusions,
              models that are tested before they&rsquo;re trusted, and automation that
              holds up not looking at gut or instinct once data has taken the
              decisions.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 px-6 border-t border-border bg-surface/60">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Get in Touch
          </h2>
          <a
            href="mailto:contact@monor.in"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/70 transition-colors font-mono text-sm underline-grow"
          >
            contact@monor.in
          </a>
        </div>
      </section>
    </>
  );
}
