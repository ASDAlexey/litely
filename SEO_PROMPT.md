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
- Litely — нативное десктопное приложение для macOS (Windows/Linux — скоро)
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
- softwareVersion: "0.7.0"
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

## Текущие проблемы (аудит)

| Проблема | Приоритет | Статус |
|----------|-----------|--------|
| i18n через JS — Yandex/Google не видят RU | Critical | Не исправлено |
| Нет `hreflang` тегов | Critical | Не исправлено |
| Нет `canonical` URL | Critical | Не исправлено |
| Нет `og:image` | High | Не исправлено |
| Нет Twitter Card мета-тегов | High | Не исправлено |
| Нет `robots.txt` и `sitemap.xml` | High | Не исправлено |
| Нет `<meta name="keywords">` (Yandex) | High | Не исправлено |
| Schema.org минимальный | High | Не исправлено |
| H2 без ключевых слов | Medium | Не исправлено |
| Нет FAQ секции | Medium | Не исправлено |
| `alt` тексты изображений слабые | Medium | Не исправлено |
| Нет preload для шрифтов | Low | Не исправлено |
| CSS: опечатка `нг` в style.css:19 | Low | Не исправлено |
| Footer copyright 2025 вместо 2026 | Low | Не исправлено |

---

## Как использовать при обновлениях

### При добавлении новой фичи
1. Обнови секцию "Контекст продукта" в промпте выше
2. Добавь фичу в `featureList` Schema.org
3. Обнови FAQ если релевантно
4. Обнови `<meta description>` и `<meta keywords>` если фича ключевая
5. Обнови sitemap.xml (lastmod дату)

### При добавлении новой секции на лендинг
1. Используй семантические теги (`<section>`, `<article>`)
2. Один `<h1>` на страницу, новые секции — `<h2>` / `<h3>`
3. Добавь ключевые слова в заголовок секции
4. Обнови оба языка (HTML и i18n.js)
5. Проверь `alt` у новых изображений

### При смене URL / домена
1. Обнови `canonical`, `og:url`, `hreflang`, `sitemap.xml`
2. Настрой 301-редиректы со старого домена

### При добавлении новой платформы (Windows/Linux)
1. Обнови Schema.org `operatingSystem` и `downloadUrl`
2. Обнови `<meta description>` и keywords
3. Добавь страницы `/download/windows/`, `/download/linux/` если нужно
4. Обнови sitemap.xml

---

## Запрещено упоминать на лендинге
- Tauri, Rust, Angular, FFmpeg — используй "native app", "GPU acceleration", "native speed"
- "Free forever" — только "Free during Early Access"