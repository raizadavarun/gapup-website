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
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
          <svg
            className="w-5 h-5 text-blue-300"
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
        </div>
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Message Received
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. We've received your message and will be in
          touch within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-xs text-text-muted uppercase tracking-widest mb-2"
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
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-text-muted uppercase tracking-widest mb-2"
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
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs text-text-muted uppercase tracking-widest mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what's on your mind"
          className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-primary text-background font-medium text-sm hover:bg-primary/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
