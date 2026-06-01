# TODO — будущие задачи

Список того, что стоит сделать позже. Отмечай `[x]` по мере выполнения.

## SEO

### [ ] Yandex-верификация (нужен код, без него Яндекс не подтвердит сайт)
1. Зайти в [Яндекс.Вебмастер](https://webmaster.yandex.ru/) → добавить сайт `https://asdalexey.github.io/litely/`.
2. Выбрать способ подтверждения **«Мета-тег»** — Яндекс выдаст код вида
   `<meta name="yandex-verification" content="XXXXXXXXXXXX" />`.
3. Вставить этот тег в `<head>` **обоих** файлов — `index.html` и `ru/index.html`
   (рядом с `<meta name="robots" ...>`).
4. `node build.js` → задеплоить `docs/` → нажать «Проверить» в Вебмастере.
5. После подтверждения: добавить sitemap `https://asdalexey.github.io/litely/sitemap.xml`
   в Вебмастере (раздел «Файлы Sitemap»).

> Аналогично можно добавить `<meta name="google-site-verification" ...>` из
> [Google Search Console](https://search.google.com/search-console), если ещё не подключён.

### [x] ~~Опциональные микро-доводки~~ (сделано)
- [x] +2 FAQ (Cursor; «зачем сжимать перед вставкой») — в JSON-LD + видимый FAQ.
- [x] `BreadcrumbList` schema.
- [x] Image-sitemap (8 картинок в `sitemap.xml`).

### [ ] Цена Pro в schema-оффере
Сейчас в `SoftwareApplication.offers` стоит `price: "0"` (это бесплатный тариф) +
описание «Free tier available; Pro unlocks all features». Когда будет цена Pro —
указать её честно: либо `AggregateOffer` (`lowPrice: 0`, `highPrice: <Pro>`),
либо второй `Offer`. Файлы: `index.html` + `ru/index.html` (блок JSON-LD в `<head>`).

## Заметки по проекту

- **Версия приложения** тянется автоматически из `../litely-code/package.json`
  при `node build.js` (плейсхолдер не используется — правится по шаблону).
  Версии моделей (Opus/Codex) намеренно НЕ указаны на странице, чтобы не синхронизировать.
- **Картинки-мокапы** генерируются скриптами в `scripts/`:
  - `gen-ai-flow.cjs` — иллюстрация-поток
  - `gen-tool-cards.cjs` — карточки Claude/Codex/Cursor
  - `gen-jira-demo.cjs` — Jira-мокап
  - `gen-claude-console.cjs`, `gen-codex-console.cjs`, `gen-cursor-mockup.cjs` — детальные консоли (сейчас не используются на странице)
  - после правок: `node scripts/<gen>.cjs && node build.js`
- **Деплой:** `npm run release` (= `node build.js && git add docs/`).
