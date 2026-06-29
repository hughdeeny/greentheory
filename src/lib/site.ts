/** Display name (two words) — use in UI. Domain/email stay greentheory. */
export const siteConfig = {
  name: 'Green Theory',
  tagline: 'Turf. Plants. Precision.',
  brandPromise: 'We know why, and we know how to fix it.',
  heroPositioning:
    "Many clients know something isn't right with their lawn or garden — but they can't pinpoint why. At Green Theory, our answer is simple: we know why, and we know how to fix it. Professional turf and garden care for Adelaide homes, strata and commercial sites, backed by horticultural knowledge, irrigation expertise and long-term maintenance programs — not quick tidy-ups.",
  aboutLead:
    "Green Theory delivers that standard across Adelaide's eastern and inner suburbs: specialist turf and plant knowledge, practical irrigation and water management, and structured care so outdoor spaces stay healthy and presentation-ready.",
  audienceLine:
    'Residential, commercial and strata clients choose us for reliable scheduling, clear communication and ongoing programs — not one-off fixes.',
  url: 'https://greentheory.au',
  social: {
    googleBusinessProfile: 'https://share.google/UqVksBpQUeFjIqRRZ',
    instagram: 'https://www.instagram.com/greentheoryau/',
    facebook: 'https://www.facebook.com/profile.php?id=61574395924112',
  },
  email: 'hello@greentheory.au',
  phone: '0421573573',
  phoneDisplay: '0421 573 573',
  director: 'Ash Jose',
  directorTitle: 'Director & Turf/Garden Care Specialist',
  locale: 'en_AU',
  sortscapeEmbed: {
    enabled: true,
    containerId: 'sortscape-request-form-e367RzttZmBDjmyFiAZWex8q',
    stylesheetHref: 'https://app.sortscape.com/embed/sortscape-request-form.css',
    scriptSrc: 'https://app.sortscape.com/embed/sortscape-request-form.js',
    formUrl: 'https://app.sortscape.com/e/r/e367RzttZmBDjmyFiAZWex8q',
  },
  areaServed: [
    'Adelaide',
    'Adelaide Eastern Suburbs',
    'Adelaide Inner Suburbs',
    'Burnside',
    'Norwood',
    'Unley',
    'Kensington',
    'Glen Osmond',
    'Beaumont',
    'Rose Park',
    'Toorak Gardens',
    'St Peters',
    'College Park',
    'Kent Town',
    'Walkerville',
    'North Adelaide',
    'Prospect',
  ],
  services: [
    'Turf care',
    'Hedging',
    'Irrigation',
    'Lawn renovations',
    'Soft landscaping',
    'Garden maintenance',
  ],
} as const;

export const seoSchemaKnowsAbout = [
  'Adelaide lawn care',
  'Adelaide turf',
  'Lawn care Adelaide',
  'Garden care Adelaide',
  'Walkerville lawn and garden care',
  'North Adelaide turf and irrigation',
  'Prospect lawn renovations',
  'Norwood strata garden maintenance',
  'Unley hedging and turf programs',
] as const;

export const seo = {
  title: 'Green Theory Turf & Garden Care | Lawn Care Adelaide',
  titleTemplate: '%s | Green Theory',
  description:
    'Adelaide specialist turf and garden care — horticulture, irrigation, lawn renovations and long-term programs for homes, strata and commercial sites. Phone Green Theory on 0421 573 573.',
  keywords: [
    'Adelaide turf care',
    'lawn care Adelaide',
    'garden maintenance Adelaide',
    'hedging Adelaide',
    'irrigation repairs Adelaide',
    'lawn renovation Adelaide',
    'soft landscaping Adelaide',
    'strata garden maintenance Adelaide',
    'commercial grounds Adelaide',
    'Adelaide eastern suburbs gardener',
    'lawn care Walkerville',
    'lawn care North Adelaide',
    'lawn care Prospect',
    'lawn care Norwood',
    'lawn care Unley',
    'turf care Prospect',
    'garden maintenance Norwood',
    'strata gardening Unley',
    'Green Theory',
    'Ash Jose',
  ],
  ogImage: '/logo.png',
} as const;

export const aboutSubLinks = [
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/why-green-theory', label: 'Why Green Theory' },
] as const;

export const navLinks = [
  { href: '/#services', label: 'All Services' },
  { href: '/lawn-renovations', label: 'Lawn renovations' },
  { href: '/about', label: 'About Us', children: aboutSubLinks },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
] as const;
