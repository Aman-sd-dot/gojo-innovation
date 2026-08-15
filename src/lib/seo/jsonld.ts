import { COMPANY_DETAILS, FLAGSHIP_PRODUCT } from '@/data/mockData';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_DETAILS.name,
    legalName: COMPANY_DETAILS.name,
    url: 'https://www.gojoinnovation.com',
    logo: 'https://www.gojoinnovation.com/images/logo.png',
    slogan: COMPANY_DETAILS.tagline,
    description: COMPANY_DETAILS.heroSubheading,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      postalCode: '500001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_DETAILS.phone,
      contactType: 'customer service',
      email: COMPANY_DETAILS.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'te'],
    },
    department: [
      {
        '@type': 'Organization',
        name: 'Bioheed Pharmaceutical',
        description: 'Healthcare and pharmaceutical division of GOJO Innovation.',
      },
      {
        '@type': 'Organization',
        name: 'GOJO Nutrition',
        description: "Nutrition division under Bioheed Pharmaceutical, creator of GOJO – The Maharaja's Drink.",
      },
      {
        '@type': 'SoftwareApplication',
        name: 'GojoMe',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS, Android, Web',
        description: 'AI-powered nutrition intelligence and meal analysis platform.',
      },
    ],
  };
}

export function getProductJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: FLAGSHIP_PRODUCT.name,
    image: 'https://www.gojoinnovation.com/images/products/gojo_can_vanilla.png',
    description: FLAGSHIP_PRODUCT.description,
    brand: {
      '@type': 'Brand',
      name: 'GOJO Nutrition',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '60',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_DETAILS.name,
      },
    },
  };
}
