var translations = {
  ru: {
    'nav.features': 'Возможности',
    'nav.download': 'Скачать',
    'hero.badge': 'Free \u00b7 v0.6',
    'hero.title': 'Сжимай медиа.<br>Сохраняй качество.',
    'hero.subtitle':
      'Десктопное приложение для пакетного сжатия изображений и видео. FFmpeg под капотом, нативная скорость, нулевой трафик в облако.',
    'hero.hint': 'macOS 11+ \u00b7 Бесплатно \u00b7 Нативное приложение',
    'download.auto': 'Скачать для вашей системы',
    'download.auto.mac': 'Скачать для macOS',
    'download.auto.win': 'Скачать для Windows',
    'download.auto.linux': 'Скачать для Linux',
    'features.heading': 'Возможности',
    'features.video.title': 'Видео',
    'features.video.hevc': 'H.265 (HEVC) — максимальное сжатие',
    'features.video.h264': 'H.264 — универсальная совместимость',
    'features.video.av1': 'AV1 — новейший стандарт',
    'features.video.hw': 'GPU-ускорение (VideoToolbox)',
    'features.video.quality': '3 уровня качества + CRF',
    'features.images.title': 'Изображения',
    'features.images.webp': 'WebP — оптимальный баланс',
    'features.images.avif': 'AVIF — следующее поколение',
    'features.images.jpeg': 'JPEG — MozJPEG оптимизация',
    'features.images.png': 'PNG — сжатие без потерь (OxiPNG)',
    'features.images.resize': 'Ресайз и мультиресайз',
    'features.workflow.title': 'Автоматизация',
    'features.workflow.watch': 'Отслеживание папок',
    'features.workflow.dragdrop': 'Drag & Drop файлов',
    'features.workflow.batch': 'Пакетная обработка',
    'features.workflow.clipboard': 'Копирование в буфер обмена',
    'features.workflow.delete': 'Удаление исходников',
    'features.tools.title': 'Инструменты',
    'features.tools.compare': 'Сравнение до и после',
    'features.tools.target': 'Целевой размер файла',
    'features.tools.convert': 'Конвертация форматов',
    'features.tools.audio': 'Извлечение аудио',
    'features.tools.history': 'История обработки',
    'stats.reduction': 'сжатие изображений',
    'stats.video': 'сжатие видео (HEVC)',
    'stats.cloud': 'данных в облако',
    'stats.free_val': 'Бесплатно',
    'stats.free': 'начни прямо сейчас',
    'download.heading': 'Скачать Litely',
    'download.desc': 'Бесплатно. Выберите вашу платформу.',
    'download.coming': 'Скоро',
    'download.all': 'Все версии на GitHub \u2192',
    'download.your_os': 'ваша система',
  },
  en: {
    'nav.features': 'Features',
    'nav.download': 'Download',
    'hero.badge': 'Free \u00b7 v0.6',
    'hero.title': 'Compress media.<br>Keep quality.',
    'hero.subtitle':
      'A desktop app for batch image and video compression. FFmpeg under the hood, native speed, zero cloud traffic.',
    'hero.hint': 'macOS 11+ \u00b7 Free \u00b7 Native app',
    'download.auto': 'Download for your system',
    'download.auto.mac': 'Download for macOS',
    'download.auto.win': 'Download for Windows',
    'download.auto.linux': 'Download for Linux',
    'features.heading': 'Features',
    'features.video.title': 'Video',
    'features.video.hevc': 'H.265 (HEVC) — maximum compression',
    'features.video.h264': 'H.264 — universal compatibility',
    'features.video.av1': 'AV1 — latest standard',
    'features.video.hw': 'GPU acceleration (VideoToolbox)',
    'features.video.quality': '3 quality levels + CRF',
    'features.images.title': 'Images',
    'features.images.webp': 'WebP — optimal balance',
    'features.images.avif': 'AVIF — next generation',
    'features.images.jpeg': 'JPEG — MozJPEG optimization',
    'features.images.png': 'PNG — lossless (OxiPNG)',
    'features.images.resize': 'Resize & multi-resize',
    'features.workflow.title': 'Automation',
    'features.workflow.watch': 'Folder watching',
    'features.workflow.dragdrop': 'Drag & Drop files',
    'features.workflow.batch': 'Batch processing',
    'features.workflow.clipboard': 'Copy to clipboard',
    'features.workflow.delete': 'Delete source files',
    'features.tools.title': 'Tools',
    'features.tools.compare': 'Before & after comparison',
    'features.tools.target': 'Target file size',
    'features.tools.convert': 'Format conversion',
    'features.tools.audio': 'Audio extraction',
    'features.tools.history': 'Processing history',
    'stats.reduction': 'image compression',
    'stats.video': 'video compression (HEVC)',
    'stats.cloud': 'data to cloud',
    'stats.free_val': 'Free',
    'stats.free': 'start now',
    'download.heading': 'Download Litely',
    'download.desc': 'Free to use. Choose your platform.',
    'download.coming': 'Coming soon',
    'download.all': 'All releases on GitHub \u2192',
    'download.your_os': 'your system',
  },
};

/* ── OS Detection ── */
function detectOS() {
  var ua = navigator.userAgent || navigator.platform || '';
  if (/Mac/i.test(ua)) return 'mac';
  if (/Win/i.test(ua)) return 'windows';
  if (/Linux/i.test(ua)) return 'linux';
  return 'unknown';
}

function setupOSDetection() {
  var os = detectOS();
  var lang = getLang();
  var strings = translations[lang];

  // Highlight detected platform card
  var platformIds = { mac: 'platform-mac', windows: 'platform-windows', linux: 'platform-linux' };
  var detectIds = { mac: 'detect-mac', windows: 'detect-windows', linux: 'detect-linux' };

  Object.keys(platformIds).forEach(function (key) {
    var el = document.getElementById(platformIds[key]);
    var detectEl = document.getElementById(detectIds[key]);
    if (key === os) {
      el.classList.add('download__platform_detected');
      el.classList.remove('download__platform_soon');
      detectEl.textContent = '\u2713 ' + strings['download.your_os'];
    } else {
      el.classList.remove('download__platform_detected');
      detectEl.textContent = '';
    }
  });

  // Update hero download button
  var primaryBtn = document.getElementById('primaryDownload');
  var btnText = primaryBtn.querySelector('[data-i18n]');

  if (os === 'mac') {
    primaryBtn.href =
      'https://github.com/ASDAlexey/litely/releases/latest/download/Litely_aarch64.dmg';
    btnText.textContent = strings['download.auto.mac'];
    btnText.setAttribute('data-i18n', 'download.auto.mac');
  } else if (os === 'windows') {
    primaryBtn.href = '#download';
    btnText.textContent = strings['download.auto.win'];
    btnText.setAttribute('data-i18n', 'download.auto.win');
  } else if (os === 'linux') {
    primaryBtn.href = '#download';
    btnText.textContent = strings['download.auto.linux'];
    btnText.setAttribute('data-i18n', 'download.auto.linux');
  }
}

/* ── i18n ── */
function getLang() {
  return localStorage.getItem('litely-lang') || 'ru';
}

function setLang(lang) {
  localStorage.setItem('litely-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  var strings = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });
  document.documentElement.lang = lang;
  document.title =
    lang === 'ru'
      ? 'Litely \u2014 \u0421\u0436\u0430\u0442\u0438\u0435 \u043c\u0435\u0434\u0438\u0430 \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430'
      : 'Litely \u2014 Lightweight Media Compressor';

  var toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'ru' ? 'EN' : 'RU';

  // Re-run OS detection to update dynamic labels
  setupOSDetection();
}

document.getElementById('langToggle').addEventListener('click', function () {
  var current = getLang();
  setLang(current === 'ru' ? 'en' : 'ru');
});

applyLang(getLang());
