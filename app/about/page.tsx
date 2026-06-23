import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About — MoNor",
  description:
    "MoNor is a research-and-automation firm. We research a problem, build a systematic model around it, and automate the execution — delivered as a service.",
};

const pillars = [
  {
    number: "01",
    title: "Quant Edge",
    description:
      "The research and modeling capability itself — MoNor's intellectual core. Every engagement begins with rigorous empirical inquiry: we form hypotheses, run controlled analyses, and only accept findings that survive scrutiny. The model that emerges is only as strong as the research behind it.",
  },
  {
    number: "02",
    title: "Data Analytics",
    description:
      "The data-driven process behind every model we build — how signals are found and tested. We work systematically through data to surface what is real and repeatable, separating genuine patterns from noise. No assumption is too obvious to verify.",
  },
  {
    number: "03",
    title: "Model Risk & Robustness",
    description:
      "How models are stress-tested and validated before being trusted to automate. No model goes live until it has been challenged against what can go wrong, not just what we hope goes right. Robustness is not a nice-to-have — it is a prerequisite.",
  },
  {
    number: "04",
    title: "Algo and Tech",
    description:
      "The automation and execution infrastructure that makes it real. Once a model is validated, we build the systems that run it exactly as designed — every time, without emotion, without drift. This is where research becomes a product.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-8">About MoNor</SectionLabel>
          <img
            src="/monor_icon_white.svg"
            alt=""
            aria-hidden="true"
            className="block mb-5 opacity-90"
            style={{ height: "80px", width: "auto" }}
          />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Research. Model. Automate.
            <br />
            <span className="text-text-muted font-light">Built to Scale.</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Disciplined research becomes models. Models become systems.
          </p>
        </div>
      </section>

      {/* What MoNor Is */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel className="mb-4">What We Are</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              A research-and-automation firm.
              <br />
              <span className="text-text-muted font-light">Not a fund. Not a software house.</span>
            </h2>
          </div>
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              MoNor researches a problem, builds an algorithmic model around it,
              and automates the execution. We provide this as a service — B2B —
              to client firms who need that capability built right, not bolted on.
            </p>
            <p>
              Currently applied to the finance industry, but the approach is not
              finance-exclusive. Wherever decisions are made on instinct when the
              data to do better already exists, there is a MoNor-shaped problem.
            </p>
            <p>
              We were founded by two people from different backgrounds — banking
              and financial services, and data analytics and systems — who saw
              the same gap from different angles. That gap is what we close.
            </p>
            <p className="text-text font-light italic">
              "Data doesn't promise a destination. It just makes sure you're
              always facing the right direction."
            </p>
          </div>
        </div>
      </section>

      {/* Name meaning */}
      <section className="py-16 px-6 border-b border-border bg-surface/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <span className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient-primary">
              MoNor
            </span>
          </div>
          <div className="text-text-muted leading-relaxed">
            <p className="text-text font-medium mb-2">Mo + Nor — Moving North.</p>
            <p>
              Disciplined data and process give you direction, not a guaranteed
              destination. The name reflects the firm's core conviction: that the
              right approach always points you the right way, even when outcomes
              are uncertain.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel className="mb-4">Four Pillars</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight">
              How We Operate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-background p-10 hover:bg-surface/40 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-primary/40 font-mono text-sm pt-1 flex-shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-text font-semibold text-xl mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting tagline */}
      <section className="py-24 px-6 border-t border-border bg-surface/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            {["Research", "Model", "Automate"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <div className="text-center">
                  <div className="px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-blue-300 text-sm font-medium">
                    {step}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <svg
                    className="w-4 h-4 text-border flex-shrink-0 rotate-90 md:rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-text-muted mt-10 text-base leading-relaxed max-w-xl mx-auto">
            Disciplined research becomes models. Models become systems.
          </p>
        </div>
      </section>
    </div>
  );
}
