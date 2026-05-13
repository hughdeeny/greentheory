import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
        alt="Lush green lawn and landscaped garden in Adelaide"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/55 to-forest/85" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-cream backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-light" />
            Adelaide &middot; Eastern &amp; Inner Suburbs
          </p>

          <h1 className="animate-fade-up animation-delay-100 font-display text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Turf. Plants.{" "}
            <span className="text-sage-light">Precision.</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
            Expert turf care, hedging, irrigation and lawn renovations — plus
            soft landscaping — for homes across Adelaide&apos;s eastern and
            inner suburbs.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-base font-semibold text-forest transition-all hover:bg-white hover:shadow-lg"
            >
              Request a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              Our Services
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-500 mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-4 sm:gap-8">
          {[
            { value: "Turf", label: "Care & renovations" },
            { value: "Hedging", label: "Shaped with precision" },
            { value: "Irrigation", label: "Systems & drainage" },
            { value: "Soft", label: "Landscaping" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
