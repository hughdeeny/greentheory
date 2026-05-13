const services = [
  {
    title: "Turf Care",
    description:
      "Professional lawn maintenance, fertilising, weed control, and seasonal programs that keep your turf healthy, dense, and looking its best year-round.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 18c2-4 5-6 8-6s6 2 8 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 14c1-3 3-5 4-8 1 3 3 5 4 8M12 6c0-2 1-3 2-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hedging",
    description:
      "Crisp, clean hedge lines shaped with precision — from formal box hedges to native screens. Regular trimming schedules available to maintain the perfect finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M3 17h18M6 17V11l3-3 3 3v6M12 17V8l3-3 3 3v9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Irrigation & Lawn Renovations",
    description:
      "Efficient irrigation systems, drainage solutions, and full lawn renovations — from soil preparation and turf laying to restoring tired, patchy lawns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 3c-3 4-6 6-6 9a6 6 0 1012 0c0-3-3-5-6-9z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M9 14c1 1.5 2 2 3 2s2-.5 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Soft Landscaping",
    description:
      "Garden beds, planting schemes, mulching, and softscape design that complements your home — selecting plants suited to Adelaide's climate and your lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest sm:text-5xl">
            Turf. Plants. Precision.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Turf care, hedging, irrigation and lawn renovations — plus soft
            landscaping for Adelaide&apos;s eastern and inner suburbs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-cream-dark bg-cream/50 p-8 transition-all duration-300 hover:border-sage/40 hover:bg-white hover:shadow-lg hover:shadow-forest/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
