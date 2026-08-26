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

const founders = [
  {
    initial: "V",
    name: "Varun",
    role: "Co-Founder",
    bio: "Comes from a background in banking and financial services — the vantage point that shaped MoNor's conviction that disciplined, data-first process beats instinct, even in industries built on gut calls.",
  },
  {
    initial: "B",
    name: "Bhushan",
    role: "Co-Founder",
    bio: "Comes from a background in data analytics and systems — the vantage point that shaped MoNor's belief that a model is only as trustworthy as the automation and infrastructure that runs it.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-8">About MoNor</SectionLabel>
          <img
            src="/monor_icon_navy.svg"
            alt=""
            aria-hidden="true"
            className="block mb-5 opacity-90"
            style={{ height: "64px", width: "auto" }}
          />
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Research. Model. Automate.
            <br />
            <span className="text-text-muted italic font-normal">Built to Scale.</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Disciplined research becomes models. Models become systems.
          </p>
        </div>
      </section>

      {/* Name meaning */}
      <section className="py-16 px-6 border-b border-border bg-surface/60">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <span className="font-serif italic text-5xl md:text-7xl font-semibold tracking-tight text-primary">
              MoNor
            </span>
          </div>
          <div className="text-text-muted leading-relaxed">
            <p className="text-text font-medium mb-2">Mo + Nor — Moving North.</p>
            <p>
              Disciplined data and process give you direction, not a guaranteed
              destination. The name reflects the firm&rsquo;s core conviction: that the
              right approach always points you the right way, even when outcomes
              are uncertain.
            </p>
          </div>
        </div>
      </section>

      {/* What MoNor Is */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel className="mb-4">What We Are</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold tracking-tight mb-6">
              A research-and-automation firm.
              <br />
              <span className="text-text-muted italic font-normal">
                Downside defined, upside designed.
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              MoNor researches a problem, lets data define the risk and upside,
              builds an algorithmic model around it, and automates the execution.
            </p>
            <p>
              Wherever decisions are made on instinct when the data to do better
              already exists, there is a MoNor-shaped solution available.
            </p>
            <p>
              Our founders come with varied backgrounds — banking and financial
              services, and data analytics and systems — they saw the same gap
              from different angles. That gap is what we close.
            </p>
            <p className="font-serif text-text italic">
              &ldquo;Data doesn&rsquo;t promise a destination. It just makes sure you&rsquo;re
              always facing the right direction.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel className="mb-4">Founders</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Two Vantage Points, One Gap Closed
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-background p-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-primary/30 font-serif text-primary text-xl">
                    {founder.initial}
                  </div>
                  <div>
                    <h3 className="font-serif text-text font-semibold text-xl">
                      {founder.name}
                    </h3>
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary/70 mb-4">
                      {founder.role}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionLabel className="mb-4">Four Pillars</SectionLabel>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              How We Operate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-background p-10 hover:bg-surface/60 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-primary/50 font-mono text-sm pt-1 flex-shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-text font-semibold text-xl mb-4">
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
      <section className="py-24 px-6 border-t border-border bg-surface/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-muted">
            Research · Model · Automate
          </p>
          <p className="text-text-muted mt-10 text-base leading-relaxed max-w-xl mx-auto">
            Disciplined research becomes models. Models become systems.
          </p>
        </div>
      </section>
    </div>
  );
}
