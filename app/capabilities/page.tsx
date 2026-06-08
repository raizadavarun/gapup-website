import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities — GapUp",
  description:
    "GapUp's quantitative capabilities: research, model development, decision frameworks, and automation.",
};

const capabilities = [
  {
    number: "01",
    title: "Quantitative Research",
    subtitle: "Understanding complexity through data",
    description:
      "We approach every problem as a research question. Our process starts with data acquisition, cleaning, and exploration — followed by rigorous hypothesis formation and empirical testing. We do not build on assumptions; we build on evidence.",
    points: [
      "Exploratory and confirmatory data analysis",
      "Statistical hypothesis testing and validation",
      "Signal discovery across structured and unstructured data",
      "Backtesting and out-of-sample performance assessment",
    ],
  },
  {
    number: "02",
    title: "Model Development",
    subtitle: "Quantifying patterns and relationships",
    description:
      "Once a signal or pattern is validated through research, we codify it into a precise model. Models are versioned, stress-tested, and continuously monitored. We build for longevity — not just accuracy on training data.",
    points: [
      "Statistical and machine learning model construction",
      "Feature engineering and selection",
      "Regime detection and adaptive model frameworks",
      "Robustness testing across market and environmental conditions",
    ],
  },
  {
    number: "03",
    title: "Decision Frameworks",
    subtitle: "Transforming intelligence into action",
    description:
      "A model is only as valuable as the decision it enables. We build structured frameworks that convert model output into unambiguous, consistent decisions — removing discretion from the execution layer and making outcomes reproducible.",
    points: [
      "Signal-to-decision translation pipelines",
      "Rule-based and probabilistic decision systems",
      "Position sizing and allocation logic",
      "Threshold design and confidence interval management",
    ],
  },
  {
    number: "04",
    title: "Automation",
    subtitle: "Scaling proven decision frameworks consistently",
    description:
      "When a decision framework is validated, we automate it. Automation removes human latency, eliminates emotional variance, and allows the same disciplined logic to scale across volume and frequency that no manual process can match.",
    points: [
      "End-to-end execution pipeline engineering",
      "Real-time signal ingestion and processing",
      "Monitoring, alerting, and circuit breaker systems",
      "Performance attribution and continuous improvement loops",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">
            Capabilities
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            What GapUp
            <br />
            <span className="text-text-muted font-light">Builds</span>
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
            Four interconnected disciplines, each rigorous on its own — and
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
                  <p className="text-accent text-sm">{cap.subtitle}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-text-muted leading-relaxed mb-8">
                    {cap.description}
                  </p>
                  <ul className="space-y-3">
                    {cap.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
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
            discuss where quantitative intelligence can create leverage for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
