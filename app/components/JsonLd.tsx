import { siteConfig, seo } from "@/lib/site";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: seo.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${seo.ogImage}`,
    logo: `${siteConfig.url}${seo.ogImage}`,
    telephone: `+61${siteConfig.phone.slice(1)}`,
    email: siteConfig.email,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      addressCountry: "AU",
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    founder: {
      "@type": "Person",
      name: siteConfig.director,
      jobTitle: "Director & Lead Horticulturalist",
    },
    employee: {
      "@type": "Person",
      name: siteConfig.director,
      jobTitle: "Adelaide Gardener & Horticulturalist",
    },
    knowsAbout: siteConfig.services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garden & Turf Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: {
            "@type": "City",
            name: "Adelaide",
          },
          provider: {
            "@id": `${siteConfig.url}/#business`,
          },
        },
      })),
    },
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: seo.description,
    inLanguage: "en-AU",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#business`,
    },
    inLanguage: "en-AU",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
