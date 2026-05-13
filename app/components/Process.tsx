const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We visit your property, assess soil conditions, sun patterns, and discuss your vision, budget, and timeline.",
  },
  {
    number: "02",
    title: "Custom Plan",
    description:
      "Ash prepares a detailed proposal with plant selections, materials, and a clear scope — no hidden surprises.",
  },
  {
    number: "03",
    title: "Expert Execution",
    description:
      "Our crew brings the plan to life with precision workmanship, respecting your property every step of the way.",
  },
  {
    number: "04",
    title: "Ongoing Care",
    description:
      "Optional maintenance programs keep your investment thriving — seasonal adjustments included as standard.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-forest py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage-light">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From first call to flourishing garden
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/75">
            A straightforward process designed around your schedule and your
            outdoor goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-sage/30 lg:block"
                  aria-hidden="true"
                />
              )}
              <p className="font-display text-5xl font-light text-sage/40">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
