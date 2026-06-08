import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — GapUp",
  description: "Get in touch with GapUp.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-28 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Get in Touch
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-xl">
            Whether you have a specific question or just want to start a
            conversation, we'd welcome hearing from you.
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
                <a
                  href="mailto:contact@gapup.in"
                  className="text-primary hover:text-primary/80 transition-colors text-base font-medium"
                >
                  contact@gapup.in
                </a>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="text-text-muted text-sm leading-relaxed">
                  GapUp is a quantitative intelligence company. We work with
                  partners who value disciplined research and systematic
                  thinking.
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
