import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gojoinnovation.com';

export interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = 'GOJO Innovation Pvt. Ltd. | Healthcare, Nutrition & Technology Ecosystem',
  description = 'GOJO Innovation is building an integrated ecosystem uniting Bioheed Pharmaceutical, GOJO Nutrition, and the GojoMe Nutrition Intelligence Platform for a healthier tomorrow.',
  path = '',
  image = '/images/og-corporate.jpg',
  noIndex = false,
}: SeoProps = {}): Metadata {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: {
      default: title,
      template: '%s | GOJO Innovation Pvt. Ltd.',
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'GOJO Innovation Pvt. Ltd.',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@gojoinnovation',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}
