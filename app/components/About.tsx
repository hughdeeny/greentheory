import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80"
                alt="Professional gardener tending to plants in Adelaide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-forest px-8 py-6 text-cream shadow-xl sm:-right-8">
              <p className="font-display text-3xl font-semibold">Ash Jose</p>
              <p className="mt-1 text-sm text-sage-light">Director &amp; Lead Horticulturalist</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage">
              About GreenTheory
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest sm:text-5xl">
              Turf. Plants. Precision.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-stone">
              <p>
                GreenTheory is your local Adelaide gardener, built on a simple
                promise: every outdoor space deserves expert care. Led by
                director{" "}
                <strong className="font-semibold text-charcoal">Ash Jose</strong>,
                we bring horticultural knowledge and hands-on craft to homes
                across Adelaide&apos;s eastern and inner suburbs.
              </p>
              <p>
                From crisp hedge lines and thriving turf to irrigation systems
                and soft landscaping — we understand Adelaide&apos;s soils,
                seasons, and plant varieties. That means healthier gardens,
                smarter water use, and results that improve over time.
              </p>
              <p>
                Whether you need a full lawn renovation, regular hedging, or
                ongoing turf care, GreenTheory delivers with the precision
                your property deserves.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Serving eastern & inner Adelaide",
                "Licensed & fully insured",
                "Transparent, fixed quotes",
                "Free on-site consultations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-charcoal">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-forest">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
