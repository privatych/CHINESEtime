export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://chinesetime.ru/#organization',
    name: 'Chinese Time',
    alternateName: ['ChineseTime'],
    description:
      'Доставка грузов из Китая в Россию с 2020 года. Авиа, авто, ж/д и стандартная доставка. ' +
      'Собственные склады в Москве и Гуанчжоу. Таможенное оформление, поиск и выкуп товаров у поставщиков.',
    url: 'https://chinesetime.ru',
    logo: 'https://chinesetime.ru/logo.png',
    image: 'https://chinesetime.ru/og-image.png',
    foundingDate: '2020',
    telephone: '+7-495-120-99-59',
    email: 'info@chinesetime.ru',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
      addressRegion: 'Москва',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+7-495-120-99-59',
        contactType: 'customer service',
        contactOption: 'TollFree',
        availableLanguage: ['Russian', 'Chinese'],
        areaServed: 'RU',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@chinesetime.ru',
        availableLanguage: ['Russian', 'Chinese'],
      },
    ],
    sameAs: [
      'https://wa.me/79254498440',
      'https://t.me/+79254498440',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги доставки грузов из Китая',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Авиадоставка из Китая',
            description: 'Доставка авиатранспортом из Китая в Россию за 3–5 дней',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Автодоставка из Китая',
            description: 'Экспресс автотранспортом из Китая в Россию за 7–10 дней',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ж/Д доставка из Китая',
            description: 'Железнодорожная доставка из Китая в Россию за 18–25 дней',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Стандартная доставка из Китая',
            description: 'Экономичная доставка из Китая в Россию за 30–45 дней',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Выкуп товаров в Китае',
            description: 'Поиск, проверка и выкуп товаров у китайских поставщиков',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Таможенное оформление',
            description: 'Полное таможенное оформление при ввозе грузов из Китая в Россию',
          },
        },
      ],
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Как заказать доставку груза из Китая?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Свяжитесь с нашим менеджером по телефону +7-495-120-99-59, через WhatsApp или Telegram. Опишите товар и его характеристики — мы подберём оптимальный способ доставки и рассчитаем стоимость в течение 24 часов.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит доставка из Китая в Россию?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Стоимость зависит от веса, объёма, вида товара и способа доставки. Авиадоставка — от 5 USD/кг, автодоставка — от 2.5 USD/кг, ж/д — от 1.8 USD/кг. Точный расчёт предоставляем индивидуально.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какие сроки доставки груза из Китая?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Авиатранспорт: 3–5 дней. Экспресс авто: 7–10 дней. Железнодорожная доставка: 18–25 дней. Стандартная доставка: 30–45 дней. Сроки указаны с момента отправки со склада в Китае.',
        },
      },
      {
        '@type': 'Question',
        name: 'Есть ли у вас склад в Китае?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, у нас есть собственный склад в Гуанчжоу (провинция Гуандун). Мы принимаем, консолидируем и проверяем товары от поставщиков прямо на месте перед отправкой в Россию.',
        },
      },
      {
        '@type': 'Question',
        name: 'Вы оформляете таможню?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы берём на себя полное таможенное оформление при ввозе грузов в Россию: декларирование, уплату пошлин, получение разрешительных документов.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какие товары вы доставляете из Китая?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Доставляем любые товары кроме запрещённых законодательством: электронику, одежду, оборудование, промышленные товары, сырьё, автозапчасти, товары для маркетплейсов (Wildberries, Ozon) и многое другое.',
        },
      },
    ],
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://chinesetime.ru' },
      { '@type': 'ListItem', position: 2, name: 'О нас', item: 'https://chinesetime.ru/#about' },
      { '@type': 'ListItem', position: 3, name: 'Доставка', item: 'https://chinesetime.ru/#delivery' },
      { '@type': 'ListItem', position: 4, name: 'Контакты', item: 'https://chinesetime.ru/#contacts' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
