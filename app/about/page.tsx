import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GapUp",
  description:
    "GapUp is a quantitative intelligence company building research-driven models that transform data into repeatable decisions.",
};

const pillars = [
  {
    number: "01",
    title: "Research",
    description:
      "Everything begins with rigorous empirical inquiry. We interrogate data with the discipline of science — forming hypotheses, running controlled analyses, and only accepting findings that survive statistical scrutiny. Opinion has no place in our process.",
  },
  {
    number: "02",
    title: "Models",
    description:
      "Research findings are codified into precise quantitative models. These models capture the relationships and patterns identified through analysis, translating complex dynamics into mathematical structures that can be validated, versioned, and improved over time.",
  },
  {
    number: "03",
    title: "Decisions",
    description:
      "Models produce signals. Signals produce decisions. We build frameworks that transform model output into clear, consistent, actionable choices — eliminating the ambiguity and emotional variance that undermines human judgement at scale.",
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Proven decision frameworks are automated for consistent, scalable execution. Automation removes latency, eliminates manual error, and allows the same rigorous logic to operate across far greater volume than any human team could manage.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">
            About GapUp
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Quantitative Intelligence,
            <br />
            <span className="text-text-muted font-light">Built to Scale</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            GapUp is a quantitative intelligence company. We develop research-
            driven models that transform data into repeatable, automated
            decisions — applied wherever complexity and scale demand precision.
          </p>
        </div>
      </section>

      {/* What GapUp Is */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary text-xs tracking-widest uppercase mb-4">
              What We Are
            </p>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Not a trading firm.
              <br />
              Not a software company.
            </h2>
          </div>
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              GapUp sits at the intersection of data science, quantitative
              modelling, and systematic decision-making. We are not a broker,
              not a fund, and not a generic software house.
            </p>
            <p>
              We are a company that builds intelligence infrastructure — the
              kind that turns raw data into structured insight, and structured
              insight into automated action.
            </p>
            <p>
              Our work is grounded in the belief that the most defensible
              advantage in any data-rich environment is the quality of your
              research process and the robustness of the models that emerge
              from it.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-primary text-xs tracking-widest uppercase mb-4">
              Strategic Pillars
            </p>
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

      {/* Core Narrative */}
      <section className="py-24 px-6 border-t border-border bg-surface/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs tracking-widest uppercase mb-6">
            Core Narrative
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            {["Data", "Research", "Models", "Decisions", "Automation"].map(
              (step, i, arr) => (
                <div key={step} className="flex items-center gap-3 md:gap-4">
                  <div className="text-center">
                    <div className="px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
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
              )
            )}
          </div>
          <p className="text-text-muted mt-10 text-base leading-relaxed max-w-xl mx-auto">
            This is the GapUp pipeline. Every engagement, every product, every
            model we build follows this sequence without exception.
          </p>
        </div>
      </section>
    </div>
  );
}
