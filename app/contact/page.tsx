import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact — MoNor",
  description: "Get in touch with MoNor.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-4">Contact</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Get in Touch
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-xl">
            MoNor works with firms who want research and automation built right,
            not bolted on. If that sounds like your problem, we'd welcome the
            conversation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  Email
                </p>
                {/* TODO: update email once monor.in domain is confirmed */}
                <a
                  href="mailto:contact@monor.in"
                  className="text-blue-300 hover:text-blue-200 transition-colors text-base font-medium"
                >
                  contact@monor.in
                </a>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="text-text-muted text-sm leading-relaxed">
                  MoNor is a research-and-automation firm. We work with clients
                  who value disciplined research, systematic models, and
                  execution that doesn't drift.
                </p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
                  Response Time
                </p>
                <p className="text-text-muted text-sm">
                  We aim to respond to all enquiries within 2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form (client component) */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
