import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://chinesetime.ru'
const SITE_NAME = 'Chinese Time'
const TITLE = 'Chinese Time — Доставка грузов из Китая в Россию'
const DESCRIPTION =
  'Доставка грузов из Китая в Россию с 2020 года. Авиа, авто, ж/д и стандартная доставка. ' +
  'Собственные склады в Москве и Гуанчжоу. Таможенное оформление, поиск и выкуп товаров у поставщиков. ' +
  'ООО «Чайниз Тайм» — ИНН 9710105741, ОГРН 1227700746085.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'доставка из Китая',
    'доставка грузов из Китая в Россию',
    'карго из Китая',
    'логистика Китай Россия',
    'таможенное оформление',
    'выкуп товаров в Китае',
    'авиадоставка из Китая',
    'ж/д доставка из Китая',
    'склад в Гуанчжоу',
    'Chinese Time',
    'чайниз тайм',
    'доставка из Гуанчжоу',
    'импорт из Китая',
    'поставщики Китай',
    'маркетплейс Китай',
    'промышленное оборудование из Китая',
  ],
  authors: [{ name: 'ООО «Чайниз Тайм»', url: SITE_URL }],
  creator: 'ООО «Чайниз Тайм»',
  publisher: 'ООО «Чайниз Тайм»',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'ru-RU': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chinese Time — Доставка грузов из Китая в Россию',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  verification: {
    // Замените на токен из Яндекс Вебмастера: https://webmaster.yandex.ru
    yandex: 'YANDEX_VERIFICATION_TOKEN',
    // Google Search Console (опционально)
    google: 'GOOGLE_VERIFICATION_TOKEN',
  },
  other: {
    'og:locale:alternate': 'en_US',
    'geo.region': 'RU-MOW',
    'geo.placename': 'Москва',
    'geo.position': '55.759637;37.569536',
    'ICBM': '55.759637, 37.569536',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#060B18" />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#060B18' }}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
