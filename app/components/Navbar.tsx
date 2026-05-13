"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo size="sm" light={onHero} className="group" />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  onHero
                    ? "text-cream/80 hover:text-cream"
                    : "text-stone hover:text-forest"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:0421573573"
            className={`hidden text-sm font-medium transition-colors sm:block ${
              onHero
                ? "text-cream/80 hover:text-cream"
                : "text-stone hover:text-forest"
            }`}
          >
            0421 573 573
          </a>
          <a
            href="#contact"
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all hover:shadow-md sm:px-5 ${
              onHero
                ? "bg-cream text-forest hover:bg-white"
                : "bg-forest text-cream hover:bg-forest-light"
            }`}
          >
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
