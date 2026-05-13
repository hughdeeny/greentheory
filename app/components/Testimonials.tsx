const testimonials = [
  {
    quote:
      "Ash completely transformed our lawn — the renovation was flawless and the turf has never looked better. True precision in every detail.",
    name: "Example review 1",
    location: "Burnside",
  },
  {
    quote:
      "Our hedges are always perfectly shaped and the irrigation system Ash installed has made a huge difference. Highly recommend for eastern suburbs homes.",
    name: "Example review 2",
    location: "Norwood",
  },
  {
    quote:
      "From soft landscaping our front garden to ongoing turf care, GreenTheory has been reliable and professional every single visit.",
    name: "Example review 3",
    location: "Unley",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Client Stories
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest sm:text-5xl">
            Trusted by homeowners &amp; businesses
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-cream-dark bg-cream/40 p-8"
            >
              <div className="mb-6 flex gap-1 text-sand" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-[15px] leading-relaxed text-stone">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-cream-dark pt-6">
                <p className="font-semibold text-charcoal">{t.name}</p>
                <p className="text-sm text-stone">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
