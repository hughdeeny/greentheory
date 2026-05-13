import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo showWordmark={false} size="md" className="pointer-events-none" />
            <p className="mt-4 font-display text-lg font-semibold text-cream">
              Turf. Plants. Precision.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Turf care, hedging, irrigation and lawn renovations — plus soft
              landscaping across Adelaide&apos;s eastern and inner suburbs.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-light">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-cream/50">Director</span>
                <br />
                Ash Jose
              </li>
              <li>
                <a href="tel:0421573573" className="transition-colors hover:text-sage-light">
                  0421 573 573
                </a>
              </li>
              <li>
                <a href="mailto:hello@greentheory.au" className="transition-colors hover:text-sage-light">
                  hello@greentheory.au
                </a>
              </li>
              <li className="pt-1 text-cream/70">
                Adelaide &middot; Eastern &amp; Inner Suburbs
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-light">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#process", label: "Process" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/70 transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} GreenTheory. All rights reserved.</p>
          <p>Adelaide &middot; Eastern &amp; Inner Suburbs</p>
        </div>
      </div>
    </footer>
  );
}
