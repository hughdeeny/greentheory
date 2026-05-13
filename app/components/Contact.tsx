"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    const subject = encodeURIComponent(`GreenTheory Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );

    window.location.href = `mailto:hello@greentheory.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage">
              Get in Touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest sm:text-5xl">
              Ready to transform your outdoor space?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Book a free on-site consultation with Ash across Adelaide&apos;s
              eastern and inner suburbs. We&apos;ll assess your property and
              provide a clear, no-obligation quote.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:0421573573"
                className="group flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-5 transition-all hover:border-sage/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-stone">Phone</p>
                  <p className="font-semibold text-charcoal">0421 573 573</p>
                </div>
              </a>

              <a
                href="mailto:hello@greentheory.au"
                className="group flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-5 transition-all hover:border-sage/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-stone">Email</p>
                  <p className="font-semibold text-charcoal">hello@greentheory.au</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cream-dark bg-white p-8 shadow-sm lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-forest">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-semibold text-forest">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-stone">
                  Your email client should have opened. If not, reach Ash directly
                  at{" "}
                  <a href="mailto:hello@greentheory.au" className="font-medium text-forest underline">
                    hello@greentheory.au
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-sage focus:ring-2 focus:ring-sage/20"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-sage focus:ring-2 focus:ring-sage/20"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-sage focus:ring-2 focus:ring-sage/20"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-sage focus:ring-2 focus:ring-sage/20"
                    placeholder="Describe your lawn, garden, or landscaping needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-forest py-4 text-base font-semibold text-cream transition-all hover:bg-forest-light hover:shadow-lg"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
