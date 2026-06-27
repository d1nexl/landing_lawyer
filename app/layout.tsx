import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const DOMAIN = 'https://uristbezkordoniv.cz'

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Аліна Татару — Юрист без кордонів | Прага, Чехія',
    template: '%s | Аліна Татару — Юрист без кордонів',
  },
  description: 'Юридична допомога українцям у Чехії. Оформлення робочих карт, віз, паспортів, дозволів на проживання. Аліна Татару — практикуючий юрист у Празі з дипломом чеського університету.',
  keywords: [
    'юрист Прага', 'юрист Чехія', 'юридична допомога Чехія',
    'робоча карта Чехія', 'віза Чехія', 'дозвіл на проживання',
    'закордонний паспорт Прага', 'працевлаштування Чехія',
    'українці Чехія', 'dokumenty Česká republika',
    'právník Praha', 'právní pomoc Ukrajinci',
    'Alina Tataru', 'Аліна Татару',
  ],
  authors: [{ name: 'Аліна Татару', url: DOMAIN }],
  creator: 'Аліна Татару',
  publisher: 'Аліна Татару',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: DOMAIN,
    languages: {
      'uk': DOMAIN,
      'cs': DOMAIN,
      'en': DOMAIN,
    },
  },
  openGraph: {
    type: 'website',
    url: DOMAIN,
    siteName: 'Юрист без кордонів',
    title: 'Аліна Татару — Юрист без кордонів | Прага',
    description: 'Юридична допомога українцям у Чехії. Робочі карти, візи, паспорти, дозволи на проживання. Консультація онлайн та в Празі.',
    locale: 'uk_UA',
    alternateLocale: ['cs_CZ', 'en_US'],
    images: [
      {
        url: '/alina-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Аліна Татару — Юрист без кордонів, Прага',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аліна Татару — Юрист без кордонів | Прага',
    description: 'Юридична допомога українцям у Чехії. Робочі карти, візи, паспорти.',
    images: ['/alina-1.jpg'],
  },
  verification: {
    google: '',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${DOMAIN}/#person`,
      name: 'Аліна Татару',
      jobTitle: 'Юрист',
      description: 'Практикуючий юрист у Празі, Чехія. Спеціалізація — юридична допомога українцям та іноземцям з документами, візами, робочими картами.',
      url: DOMAIN,
      image: `${DOMAIN}/alina-1.jpg`,
      telephone: '+420723720172',
      email: 'uristkonsultant26@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Прага',
        addressCountry: 'CZ',
      },
      sameAs: [
        'https://www.facebook.com/UristAlinaTataru26',
        'https://www.instagram.com/alinatataruiurist',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${DOMAIN}/#business`,
      name: 'Юрист без кордонів — Аліна Татару',
      description: 'Юридична допомога українцям та іноземцям у Чехії. Оформлення робочих карт, віз, паспортів, дозволів на проживання.',
      url: DOMAIN,
      telephone: '+420723720172',
      email: 'uristkonsultant26@gmail.com',
      image: `${DOMAIN}/alina-1.jpg`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Прага',
        addressRegion: 'Hlavní město Praha',
        addressCountry: 'CZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.0755,
        longitude: 14.4378,
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      serviceArea: {
        '@type': 'Country',
        name: 'Czech Republic',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Юридичні послуги',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Робоча карта (pracovní povolení)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Дозвіл на проживання' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Оформлення паспорту' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Юридичні консультації онлайн' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Допомога з працевлаштуванням' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      url: DOMAIN,
      name: 'Юрист без кордонів',
      description: 'Персональний сайт юриста Аліни Татару — юридична допомога у Чехії',
      inLanguage: ['uk', 'cs', 'en'],
      publisher: { '@id': `${DOMAIN}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy-900 text-white antialiased overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
