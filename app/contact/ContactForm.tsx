"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start justify-center py-8">
        <span className="font-serif text-primary text-3xl mb-6">✓</span>
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-3">
          Message Received
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. We&rsquo;ve received your message and will be in
          touch within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-[11px] text-text-muted uppercase tracking-[0.2em] mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block font-mono text-[11px] text-text-muted uppercase tracking-[0.2em] mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[11px] text-text-muted uppercase tracking-[0.2em] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what's on your mind"
          className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 border border-text bg-text text-background font-mono text-xs tracking-[0.15em] uppercase hover:bg-primary hover:border-primary transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
