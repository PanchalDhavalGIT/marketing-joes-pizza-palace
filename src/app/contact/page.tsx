"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const subjects = [
  "General Inquiry",
  "Catering Request",
  "Private Event",
  "Feedback",
  "Other",
];

const hours = [
  { days: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
  { days: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
  { days: "Sunday", hours: "12:00 PM - 9:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
            Reach Out
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-body max-w-2xl mx-auto">
            Whether you&apos;re placing an order, booking an event, or just want to
            say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-accent-dark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-muted font-body">
                      Thanks for reaching out! We&apos;ll get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-body font-bold text-primary mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-background border border-accent/15 rounded-xl text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-body font-bold text-primary mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-background border border-accent/15 rounded-xl text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-body font-bold text-primary mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-background border border-accent/15 rounded-xl text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-body font-bold text-primary mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-background border border-accent/15 rounded-xl text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-body font-bold text-primary mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-background border border-accent/15 rounded-xl text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-primary text-surface font-body font-bold rounded-full hover:bg-secondary transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary/20 text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div className="bg-surface rounded-2xl p-6 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      Visit Us
                    </h3>
                    <p className="text-text-muted font-body text-sm">
                      123 Main St
                      <br />
                      Brooklyn, NY 11201
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-surface rounded-2xl p-6 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:555-867-5309"
                      className="text-text-muted font-body text-sm hover:text-accent-dark transition-colors duration-200 cursor-pointer"
                    >
                      555-867-5309
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-surface rounded-2xl p-6 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@joespizza.com"
                      className="text-text-muted font-body text-sm hover:text-accent-dark transition-colors duration-200 cursor-pointer"
                    >
                      info@joespizza.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface rounded-2xl p-6 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-accent-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-primary mb-3">
                      Hours
                    </h3>
                    <div className="space-y-2">
                      {hours.map((item) => (
                        <div
                          key={item.days}
                          className="flex justify-between text-sm font-body"
                        >
                          <span className="text-text-muted">{item.days}</span>
                          <span className="text-text font-bold">
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-accent/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent/15 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent-dark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="font-heading text-lg font-bold text-primary">
                123 Main St, Brooklyn, NY 11201
              </p>
              <p className="text-text-muted font-body text-sm mt-1">
                Located in the heart of Brooklyn
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
