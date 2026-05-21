# Litely Landing — SEO Optimization Prompt

> Используй этот промпт при каждом обновлении лендинга: добавлении фич, контента, новых страниц.
> Обновляй секцию "Контекст продукта" при изменениях в приложении.

---

## Промпт

```
Ты — SEO-эксперт с глубоким знанием факторов ранжирования Google и Yandex в 2026 году.

Задача: полная SEO-оптимизация одностраничного лендинга десктопного приложения Litely
(автоматическое сжатие видео и изображений с отслеживанием папок).

## Контекст продукта
- Litely — нативное десктопное приложение для macOS, Windows и Linux
- Автоматическое сжатие: пользователь добавляет папки, приложение сжимает новые файлы
- Видео: H.264, H.265/HEVC, AV1 кодеки; GPU-ускорение; двухпроходное кодирование;
  форматы MP4, MKV, WebM, MOV, AVI, FLV, GIF; resize; target size; извлечение аудио
- Изображения: WebP, AVIF, JPEG, PNG выход; вход HEIC/HEIF, BMP, TIFF;
  quality slider; EXIF strip; max effort; target size; batch resize; before/after
- Нативное приложение ~40 МБ памяти (не Electron)
- Бесплатно во время Early Access (не бесплатно навсегда)
- Сайт двуязычный: EN (основной) + RU (переключение кнопкой)
- URL сайта: https://litely.app (предположительно)
- GitHub: https://github.com/ASDAlexey/litely

## Текущая структура лендинга
Одностраничный HTML (index.html + style.css + i18n.js).
Секции: Hero → Stats → Watch Folders → Video Compression → Image Compression →
Task Management → System Integration → Performance → Use Cases → Download → Footer.
Русские тексты подгружаются через JS (data-i18n атрибуты), поисковики видят только EN.

## Что нужно сделать — полный чеклист

### 1. Мета-теги и <head>
- Переписать <title> с учётом основных ключевых слов (EN и RU версии)
- Переписать <meta description> — ёмко, с CTA, до 155 символов, ключевые слова
- Добавить <meta name="keywords"> (Yandex учитывает) — 8-12 ключевых слов EN + RU
- Добавить <link rel="canonical" href="...">
- Добавить <meta name="robots" content="index, follow">
- Добавить <meta name="author" content="...">
- Добавить <meta name="theme-color"> для мобильных (уже есть, проверить)

### 2. Open Graph (полный набор)
- og:title, og:description (уже есть, улучшить)
- og:image — создать OG-картинку 1200x630, указать путь
- og:image:width, og:image:height, og:image:alt
- og:url — каноничный URL
- og:site_name — "Litely"
- og:locale — "en_US" и "ru_RU"
- og:locale:alternate

### 3. Twitter Card
- twitter:card = "summary_large_image"
- twitter:title, twitter:description, twitter:image

### 4. Мультиязычность для SEO
Предложи оптимальное решение из двух вариантов:
A) Два отдельных HTML файла (index.html для EN, ru/index.html для RU)
   с <link rel="alternate" hreflang="en" href="...">
   и <link rel="alternate" hreflang="ru" href="...">
B) Server-side language detection + отдельные URL
Учти, что сейчас это статический сайт без серверной логики.
Для варианта A — предоставь инструкцию как реструктурировать.

### 5. Schema.org (JSON-LD) — расширить
Дополнить существующий SoftwareApplication:
- softwareVersion: "0.15.8"
- downloadUrl (для macOS)
- screenshot (URLs скриншотов)
- author → Organization или Person
- featureList — ключевые фичи
- releaseNotes
- fileSize
- memoryRequirements
- operatingSystem — развёрнуто

Добавить дополнительные схемы:
- WebPage
- BreadcrumbList
- FAQPage (если добавим FAQ секцию)
- Organization (для автора/компании)

### 6. Контент-оптимизация
- Написать SEO-оптимизированные заголовки H1 (один на страницу!), H2, H3
  Текущие H2: "Set It and Forget It", "Every Codec. Maximum Savings." — красивые
  но не содержат ключевых слов. Переписать, сохранив маркетинговую привлекательность
  но добавив ключевые слова.
  Примерный паттерн: "Keyword Phrase — Marketing Hook"
- Переписать alt-тексты для изображений — описательные, с ключевыми словами
- Добавить секцию FAQ (5-7 вопросов) — для Featured Snippets Google и расширенных
  сниппетов Yandex. Примерные вопросы:
  * Как Litely сжимает видео?
  * Какие форматы поддерживает Litely?
  * Litely бесплатный?
  * Чем Litely отличается от HandBrake / FFmpeg?
  * Работает ли Litely в фоне?
- Добавить текстовый блок "О приложении" — 100-200 слов, насыщенный ключевыми словами

### 7. Ключевые слова для оптимизации
Исследуй и предложи целевые ключевые слова в двух группах:

**EN (Google):**
- Основные: video compressor, image compressor, batch compression, automatic file compression
- Длинный хвост: compress video without losing quality, reduce video file size mac,
  batch image compression desktop app, watch folder video compression, H.265 video compressor,
  AV1 encoder desktop, WebP converter, AVIF converter
- Конкурентные: HandBrake alternative, FFmpeg GUI, video compression software

**RU (Yandex):**
- Основные: сжатие видео, сжатие изображений, программа для сжатия видео, конвертер видео
- Длинный хвост: сжать видео без потери качества, автоматическое сжатие файлов,
  пакетное сжатие изображений, программа для уменьшения размера видео,
  конвертер H.265 HEVC, конвертер WebP AVIF
- Конкурентные: аналог HandBrake, программа сжатия видео для Mac

### 8. Технический SEO
- Создать robots.txt (разрешить всё, указать sitemap)
- Создать sitemap.xml (для обоих языковых версий)
- Добавить Yandex.Metrica и Google Analytics код (плейсхолдеры)
- Добавить мета-тег верификации Yandex Webmaster и Google Search Console
- Проверить, что все изображения имеют width/height для CLS
- Добавить preload для критических ресурсов (шрифты, hero-изображения)
- Добавить loading="lazy" для не-hero изображений (уже есть)
- Проверить мобильную адаптивность — Google Mobile-First Index

### 9. Yandex-специфичное
- <meta name="yandex-verification" content="...">
- Проверить совместимость с Yandex Turbo страницами
- Добавить Yandex.Metrica
- <meta name="keywords"> — Yandex в отличие от Google реально использует
- Yandex ИКС — тексты должны быть для людей, не переспамить ключевыми словами

### 10. Файлы для создания
Предоставь содержимое для:
- robots.txt
- sitemap.xml
- Обновлённый <head> секция index.html
- Обновлённый Schema.org JSON-LD
- Секция FAQ (HTML + тексты EN/RU)
- manifest.json (для PWA-сигналов, если применимо)

## Формат ответа
Для каждого пункта дай:
1. Конкретный код / текст для копирования
2. Объяснение почему это важно
3. Приоритет: Critical / High / Medium / Low

Начни с Critical-приоритета и двигайся к Low.
Весь контент должен быть в двух версиях: EN и RU.
НЕ используй названия технологий Tauri, Rust, Angular, FFmpeg —
только общие термины: "native app", "GPU acceleration", "native speed".
```

---

## Структура сайта (все страницы)

```
/
├── index.html              ← EN лендинг (основная страница)
├── privacy.html            ← EN политика конфиденциальности
├── robots.txt              ← TODO: создать
├── sitemap.xml             ← TODO: создать
├── style.css
├── i18n.js
├── images/
│   ├── og-image.png        ← TODO: создать (1200x630)
│   └── ...
├── ru/
│   ├── index.html          ← TODO: RU лендинг (статический)
│   └── privacy.html        ← TODO: RU политика конфиденциальности (статический)
├── auth/
│   └── callback.html       ← OAuth callback (техническая, noindex)
└── docs/                   ← build output
```

---

## Текущие проблемы (аудит)

### index.html

| Проблема | Приоритет | Статус |
|----------|-----------|--------|
| i18n через JS — Yandex/Google не видят RU | Critical | Не исправлено |
| Нет `hreflang` тегов | Critical | Не исправлено |
| Нет `canonical` URL | Critical | Не исправлено |
| Нет `og:image` | High | Не исправлено |
| Нет Twitter Card мета-тегов | High | Не исправлено |
| Нет `robots.txt` и `sitemap.xml` | High | Не исправлено |
| Нет `<meta name="keywords">` (Yandex) | High | Не исправлено |
| Schema.org минимальный (нет `aggregateRating` — Google не покажет rich result) | High | Не исправлено |
| H2 без ключевых слов | Medium | Не исправлено |
| Нет FAQ секции (упущенные Featured Snippets Google + Yandex) | Medium | Не исправлено |
| `alt` тексты изображений слабые | Medium | Не исправлено |
| Контраст `--text-muted` не проходит WCAG AA (3.5:1) | Medium | Не исправлено |
| Нет `:focus` стилей (accessibility) | Medium | Не исправлено |
| ~250 строк неиспользуемого CSS (`.jira-flow*`) | Medium | Не исправлено |
| Внешние ссылки без `rel="noopener noreferrer"` | Medium | Не исправлено |
| Кнопка языка < 44px touch target | Medium | Не исправлено |
| Footer copyright 2025 вместо 2026 | Low | Не исправлено |

### privacy.html

| Проблема | Приоритет | Статус |
|----------|-----------|--------|
| `<meta name="robots" content="noindex">` — страница исключена из индекса (а должна быть E-E-A-T trust signal) | Critical | Не исправлено |
| RU-контент через inline JS — не виден ботам Yandex | Critical | Не исправлено |
| Нет отдельного `ru/privacy.html` | Critical | Не исправлено |
| Нет `canonical` URL | High | Не исправлено |
| Нет `hreflang` тегов | High | Не исправлено |
| Нет OG мета-тегов | Medium | Не исправлено |
| Нет Schema.org (WebPage) | Medium | Не исправлено |
| Нет `<meta name="keywords">` | Medium | Не исправлено |
| Copyright 2025 | Low | Не исправлено |
| Версия на privacy.html отстаёт (0.15.3, актуальная 0.15.8) | Low | Не исправлено |
| Незакрытый `<p>` в footer | Low | Не исправлено |
| Переключатель языка через JS DOM-замену вместо URL | High | Не исправлено |

### auth/callback.html

| Проблема | Приоритет | Статус |
|----------|-----------|--------|
| Нет `<meta name="robots" content="noindex, nofollow">` | Low | Не исправлено |
| Нет `Disallow: /auth/` в robots.txt (robots.txt не существует) | High | Не исправлено |
| Не нуждается в отдельной RU-версии (техническая страница, i18n через auto-detect) | — | OK |

---

## SEO-ценность privacy.html

Privacy Policy Litely **уникально сильная** для SEO:

1. **E-E-A-T Trust signal**: Google и Yandex расценивают Privacy Policy как признак серьёзного проекта
2. **Yandex ИКС**: наличие правовых страниц повышает индекс качества сайта
3. **"No telemetry" как ключевое слово**: пользователи ищут "video compressor no telemetry", "privacy-friendly image compressor" — Litely здесь идеален
4. **Конкурентное преимущество**: большинство конкурентов (Movavi, WonderShare) собирают данные; Litely — нет
5. **App Store / каталоги**: при публикации на AlternativeTo, ProductHunt ссылка на Privacy Policy обязательна

**Рекомендация**: не просто разрешить индексацию, но акцентировать "zero telemetry, zero tracking" в description.

---

## auth/callback.html — SEO-обработка

OAuth callback — **техническая страница**, не имеет SEO-ценности.

**Что сделать:**
1. Добавить `<meta name="robots" content="noindex, nofollow">` в `<head>` (после строки 6)
2. `robots.txt`: `Disallow: /auth/` (уже запланировано)
3. **НЕ включать** в sitemap.xml
4. **НЕ создавать** отдельную RU-версию (auto-detect через `navigator.language` уже работает)

---

## Как использовать при обновлениях

### При добавлении новой фичи
1. Обнови секцию "Контекст продукта" в промпте выше
2. Добавь фичу в `featureList` Schema.org
3. Обнови FAQ если релевантно
4. Обнови `<meta description>` и `<meta keywords>` если фича ключевая
5. Обнови sitemap.xml (lastmod дату)
6. Обнови оба языка: EN (index.html) и RU (ru/index.html)

### При добавлении новой секции на лендинг
1. Используй семантические теги (`<section>`, `<article>`)
2. Один `<h1>` на страницу, новые секции — `<h2>` / `<h3>`
3. Добавь ключевые слова в заголовок секции
4. Обнови оба языковых файла (index.html и ru/index.html)
5. Проверь `alt` у новых изображений
6. Обнови FAQ Schema.org если добавились новые вопросы

### При смене URL / домена
1. Обнови `canonical`, `og:url`, `hreflang`, `sitemap.xml` **во всех 4 HTML-файлах**
2. Настрой 301-редиректы со старого домена
3. Обнови robots.txt (`Host` директиву для Yandex)

### При обновлении платформ (macOS / Windows / Linux)
1. Обнови Schema.org `operatingSystem` и `downloadUrl` для новых билдов
2. Обнови `<meta description>` и keywords **в обоих языках** если изменились требования
3. Обнови sitemap.xml (lastmod)
4. Обнови `<meta name="keywords">` если добавились платформо-специфичные ключевые слова

### При обновлении Privacy Policy
1. Обнови **оба файла**: privacy.html и ru/privacy.html
2. Обнови дату "Last updated" / "Последнее обновление"
3. Обнови `lastmod` в sitemap.xml
4. Если добавились новые сетевые запросы — обнови секцию "Network Connections"

### При обновлении auth/callback
1. Убедись что `noindex, nofollow` остаётся
2. Не добавляй страницу в sitemap.xml
3. i18n через auto-detect `navigator.language` — достаточно

---

## Конкурентный анализ — ключевые выводы

### Прямые конкуренты и их SEO
| Конкурент | Что у него лучше |
|-----------|-----------------|
| **HandBrake** | Бренд, 100k+ GitHub stars, все каталоги |
| **ImageOptim** | FAQ, прозрачное сравнение с конкурентами |
| **Movavi** | Отдельные URL `/ru/`, нативные RU-тексты, FAQ, 70M+ пользователей |
| **TinyPNG** | 22+ вопросов FAQ, лого клиентов (Airbnb, Microsoft) |
| **Caesium** | 5.9k GitHub stars, AlternativeTo (85 лайков) |

### Голубой океан: Jira-интеграция
"compress screenshots for jira" / "сжатие скриншотов для jira" — **нулевая конкуренция**.
Ни один конкурент не имеет Jira-интеграцию. Отдельная страница `/jira/` может быть ТОП-1.

### Обязательные площадки для бэклинков
| Площадка | Приоритет | Влияние |
|----------|-----------|---------|
| AlternativeTo | CRITICAL | Google + Yandex |
| awesome-mac (104k stars) | HIGH | Google |
| Product Hunt | HIGH | Google |
| Habr | HIGH | **Yandex** (ключевой) |
| VC.ru | HIGH | **Yandex** (ключевой) |
| 4PDA | MEDIUM | **Yandex** |
| MacUpdate | MEDIUM | Google |

---

## Yandex-специфика (отдельный чеклист)

- [ ] `<meta name="keywords">` — Yandex реально использует (Google игнорирует)
- [ ] `Host` директива в robots.txt
- [ ] Yandex.Метрика с WebVisor (поведенческие факторы — ключевой фактор ранжирования Yandex)
- [ ] Отдельный `ru/index.html` и `ru/privacy.html` со статическим контентом
- [ ] Бэклинки с Habr, VC.ru, 4PDA — критичны для Yandex ИКС
- [ ] Естественность текста (Баден-Баден фильтр при переспаме)
- [ ] Yandex Webmaster: указать регион сайта (Россия)
- [ ] `<meta name="yandex-verification" content="...">` после регистрации

---

## Запрещено упоминать на лендинге
- Tauri, Rust, Angular, FFmpeg — используй "native app", "GPU acceleration", "native speed"
- "Free forever" — только "Free during Early Access"

---

## Полный план реализации

Детальный план с кодом, Schema.org, FAQ-секцией, мета-тегами для всех страниц,
ключевыми словами и чеклистом — см. **SEO_AUDIT.md**.