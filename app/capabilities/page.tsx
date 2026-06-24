import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Capabilities — MoNor",
  description:
    "MoNor's four capability pillars: Quant Edge, Data Analytics, Model Risk & Robustness, and Algo and Tech.",
};

const capabilities = [
  {
    number: "01",
    title: "Quant Edge",
    subtitle: "Where every model starts",
    description:
      "We research a problem properly before we ever attempt to solve it. Every engagement begins with empirical inquiry — data acquisition, rigorous hypothesis testing, and evidence-based analysis. We do not build on assumptions; we build on what the data actually shows.",
    points: [
      "Exploratory and confirmatory data analysis",
      "Statistical hypothesis testing and validation",
      "Signal discovery across structured and unstructured data",
      "Backtesting and out-of-sample performance assessment",
    ],
  },
  {
    number: "02",
    title: "Data Analytics",
    subtitle: "The evidence behind every model decision",
    description:
      "Data-driven analysis and signal discovery — the process that separates real patterns from noise. We work systematically through data to surface what is repeatable and actionable, applying rigorous methodology at every step before a finding is trusted.",
    points: [
      "Structured and unstructured data pipelines",
      "Feature engineering and signal selection",
      "Regime analysis and pattern classification",
      "Quantitative validation and out-of-sample testing",
    ],
  },
  {
    number: "03",
    title: "Model Risk & Robustness",
    subtitle: "Tested against what can go wrong",
    description:
      "No model goes live until it has been stress-tested against what can go wrong, not just what we hope goes right. We build for longevity, not just accuracy on training data — validating models against adverse conditions, edge cases, and real-world variation before they are trusted to run unattended.",
    points: [
      "Stress testing and scenario analysis",
      "Overfitting detection and out-of-sample validation",
      "Regime robustness across environmental conditions",
      "Ongoing monitoring and performance attribution",
    ],
  },
  {
    number: "04",
    title: "Algo and Tech",
    subtitle: "The execution layer",
    description:
      "Automation that runs the model exactly as designed, every time, without emotion. Once a model is validated, we build the systems that deploy it at scale — removing human latency, eliminating variance, and allowing the same disciplined logic to operate across volume and frequency that no manual process can match.",
    points: [
      "End-to-end execution pipeline engineering",
      "Real-time signal ingestion and processing",
      "Monitoring, alerting, and circuit breaker systems",
      "Continuous improvement and performance loops",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-4">Capabilities</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            What MoNor
            <br />
            <span className="text-text-muted font-light">Builds</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Four interconnected disciplines — each rigorous on its own, and
            significantly more powerful in sequence.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <div
              key={cap.number}
              className={`py-20 ${i < capabilities.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-4">
                  <span className="text-primary/40 font-mono text-sm">
                    {cap.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-2 mb-2">
                    {cap.title}
                  </h2>
                  <p className="text-emerald-400/70 text-sm">{cap.subtitle}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-text-muted leading-relaxed mb-8">
                    {cap.description}
                  </p>
                  <ul className="space-y-3">
                    {cap.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-text-muted text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border bg-surface/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Want to understand how these capabilities apply to your context?
          </h2>
          <p className="text-text-muted mb-8 text-sm leading-relaxed">
            Every engagement starts with a conversation. Reach out and we'll
            discuss where research-and-automation can create leverage for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
