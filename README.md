# CHINESEtime — Сайт доставки грузов из Китая

**Производственный сайт компании ООО «Чайниз Тайм»** — логистика и доставка грузов из Китая в Россию.

🌐 **Демо:** [http://109.172.87.169](http://109.172.87.169)  
📦 **Основной домен:** [chinesetime.ru](https://chinesetime.ru)

---

## Стек технологий

| Технология | Версия | Назначение |
|---|---|---|
| Next.js | 14.2.26 | Фреймворк (App Router) |
| React | 18 | UI |
| TypeScript | 5 | Типизация |
| Tailwind CSS | 3 | Стилизация |
| Framer Motion | 11 | Анимации |
| Lucide React | — | Иконки |

---

## Структура проекта

```
app/
├── layout.tsx          # SEO-метаданные, Open Graph, Yandex Webmaster
├── page.tsx            # Главная страница
├── globals.css         # Глобальные стили, анимации
├── sitemap.ts          # Автоматический sitemap.xml
├── robots.ts           # robots.txt (YandexBot + Googlebot)
├── policy/page.tsx     # Политика конфиденциальности (152-ФЗ)
└── offer/page.tsx      # Публичная оферта (ГК РФ ст. 438)

components/
├── Navbar.tsx          # Шапка — sticky, scroll-aware
├── Hero.tsx            # Главный экран — particles, stagger-анимация
├── About.tsx           # О компании — timeline + склады
├── Brands.tsx          # Карусель брендов — marquee (2 ряда)
├── HowWeWork.tsx       # Как мы работаем — 5 шагов
├── Team.tsx            # Команда — 5 отделов, 3D tilt-карточки
├── DeliveryMethods.tsx # Способы доставки — 4 карточки
├── Contacts.tsx        # Контакты — форма + чекбокс согласия 152-ФЗ
├── Footer.tsx          # Подвал — реквизиты ООО, ссылки на документы
├── CursorGlow.tsx      # Красный ambient glow за курсором
├── ScrollProgress.tsx  # Прогресс-бар прокрутки
├── CookieBanner.tsx    # Cookie-баннер (152-ФЗ)
├── Reveal.tsx          # Утилиты scroll-reveal анимаций
└── JsonLd.tsx          # JSON-LD: Organization + FAQ + Breadcrumb
```

---

## Что реализовано ✅

### Секции сайта
- **Hero** — частицы на canvas, stagger-анимация заголовка, счётчики статистики
- **О нас** — история компании, таймлайн, склады Москва/Гуанчжоу
- **Наши бренды** — автоскроллящаяся карусель (Xiaomi, DJI, SANY, BYD и др.)
- **Как мы работаем** — 5 шагов процесса с анимацией линии
- **Команда** — 5 отделов с 3D tilt-эффектом при наведении
- **Способы доставки** — авиа / авто / стандарт / ж/д
- **Контакты** — форма заявки, WhatsApp, Telegram
- **Футер** — полные юридические реквизиты

### Анимации (Framer Motion)
- Scroll-triggered reveal на всех секциях
- Stagger-анимации для групп карточек
- 3D perspective tilt на карточках команды и доставки
- Shimmer-эффект на градиентных текстах
- Ambient cursor glow
- Прогресс-бар прокрутки

### Юридическая оптимизация (РФ)
- Политика конфиденциальности по **ФЗ-152**
- Публичная оферта по **ГК РФ ст. 438**
- Обязательный чекбокс согласия в форме
- Cookie-баннер с возможностью отказа
- Реквизиты ООО в футере: ИНН, ОГРН, КПП, ОКПО

### SEO и поисковая оптимизация
- Полные Open Graph и Twitter Card теги
- JSON-LD: `Organization`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`
- `sitemap.xml` и `robots.txt` автогенерация
- Geo-теги для локального SEO (Москва)
- 15 ключевых слов по тематике карго из Китая
- Yandex Webmaster verification (токен нужно заменить)

### Деплой
- **VPS:** VDSINA.ru, Ubuntu 24.04
- **PM2:** процесс `chinesetime` на порту 3002
- **Nginx:** reverse proxy, gzip-сжатие, кэш статики

---

## Что нужно добавить и улучшить 🔧

### Приоритет: Высокий

- [ ] **Реальный OG-образ** — добавить `public/og-image.png` (1200×630px) для красивого превью при шаринге
- [ ] **Яндекс Вебмастер** — заменить `YANDEX_VERIFICATION_TOKEN` в `app/layout.tsx` на реальный токен из [webmaster.yandex.ru](https://webmaster.yandex.ru)
- [ ] **SSL-сертификат** — после привязки домена: `certbot --nginx -d chinesetime.ru -d www.chinesetime.ru`
- [ ] **Домен** — указать A-запись DNS `chinesetime.ru → 109.172.87.169`, обновить `SITE_URL` в `layout.tsx`
- [ ] **Реальная форма** — подключить отправку заявок (email через Nodemailer / Telegram Bot API / AmoCRM)
- [ ] **Реальные отзывы** — добавить секцию `Reviews` с отзывами клиентов

### Приоритет: Средний

- [ ] **Калькулятор доставки** — интерактивный расчёт стоимости по весу, объёму и маршруту
- [ ] **Логотип** — заменить «CT» placeholder на реальный логотип в `Navbar` и `Footer`
- [ ] **Favicon** — добавить `public/favicon.ico` и `public/apple-touch-icon.png`
- [ ] **Реальные фото** — добавить изображения склада, команды, процесса работы
- [ ] **Секция FAQ** — часто задаваемые вопросы (структура уже есть в JSON-LD)
- [ ] **Секция "Почему мы"** — 6 карточек с преимуществами компании
- [ ] **Трекинг заявок** — личный кабинет или страница отслеживания груза
- [ ] **Яндекс.Метрика** — вставить счётчик в `layout.tsx`
- [ ] **Google Analytics** / **Yandex Metrika** — события на отправку формы

### Приоритет: Низкий

- [ ] **Мобильная версия Navbar** — бургер-меню (сейчас скрывается, но нет дровера)
- [ ] **Мультиязычность** — добавить EN/ZH версии (`next-intl`)
- [ ] **Блог/Новости** — статьи о доставке из Китая для SEO
- [ ] **Страницы услуг** — отдельные SEO-страницы: `/dostavka-avto`, `/dostavka-avia` и т.д.
- [ ] **Чат-виджет** — онлайн-консультант (Jivo / LiveChat)
- [ ] **PWA** — манифест и service worker для мобильных

---

## Быстрый старт (локально)

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Деплой обновлений на сервер

```bash
# Загрузить изменения
rsync -avz --exclude='node_modules' --exclude='.next' ./ root@109.172.87.169:/var/www/chinesetime/

# На сервере — пересобрать и перезапустить
ssh root@109.172.87.169 "cd /var/www/chinesetime && npm run build && pm2 restart chinesetime"
```
