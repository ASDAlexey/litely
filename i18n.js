const translations = {
  en: {
    'header.slogan': 'make your media lighter',
    'nav.features': 'Features',
    'nav.usecases': 'Use Cases',
    'nav.download': 'Download',
    'hero.title': 'Compress Everything.<br>Automatically.',
    'hero.subtitle':
      'Add a folder — Litely watches for new files and compresses them in the background. Videos, images, zero effort.',
    'hero.cta': 'Download',
    'hero.hint': 'macOS 11+ · Native app',
    'hero.dark': 'Dark theme',
    'hero.light': 'Light theme',
    'demo.status': '3 files compressed · 3.1 GB saved',
    'stats.video': 'video compression',
    'stats.image': 'image compression',
    'stats.formats': 'video formats',
    'stats.memory': 'MB memory',
    'watch.label': 'Smart Automation',
    'watch.title': 'Set It and Forget It',
    'watch.desc':
      'Add up to 3 folders — Litely watches them around the clock and compresses every new file automatically.',
    'watch.f1': 'Watch up to 3 folders simultaneously',
    'watch.f2': 'Real-time detection of new files',
    'watch.f3': 'Settings persist between restarts',
    'watch.f4': 'Smart filtering — skips hidden, compressed, and output files',
    'watch.s1': 'Watching · 24 files',
    'watch.s2': 'Watching · 156 files',
    'watch.s3': 'Watching · 8 files',
    'video.label': 'Video Compression',
    'video.title': 'Every Codec. Maximum Savings.',
    'video.desc':
      'From H.264 to AV1 — pick the perfect balance between compatibility and compression ratio.',
    'video.f1': 'GPU acceleration via VideoToolbox (macOS)',
    'video.f2': '3 quality presets: Compact, Optimal, Maximum',
    'video.f3': 'Two-pass encoding for optimal quality/size',
    'video.f4': 'Convert: MP4, MOV, AVI, MKV, WebM, FLV, GIF',
    'video.f5': 'Extract audio track from video',
    'video.f6': 'Resize video (fit / width / height)',
    'video.f7': 'Target file size — auto quality adjustment',
    'video.t1': 'Compatible',
    'video.t2': 'Balanced',
    'video.t3': 'Maximum',
    'video.caption': 'Compression ratio →',
    'images.label': 'Image Compression',
    'images.title': 'Pixel-Perfect Optimization',
    'images.desc':
      'From WebP to AVIF to SVG — choose the right format and quality for every use case.',
    'images.f1': 'Quality slider 1–100',
    'images.f2': 'Strip EXIF & ICC metadata',
    'images.f3': 'Max Effort mode — slower, better compression',
    'images.f4': 'Target size in KB — auto quality adjustment',
    'images.f5': 'Batch resize — multiple sizes from one image',
    'images.f6': 'Visual before/after comparison',
    'images.f7': 'SVG optimization & raster-to-vector conversion',
    'images.input': 'Input: WebP, AVIF, JPEG, PNG, SVG, HEIC/HEIF, BMP, TIFF',
    'images.quality': 'Quality',
    'images.before': 'Before',
    'images.after': 'After',
    'tasks.label': 'Task Management',
    'tasks.title': 'Full Control Over Every File',
    'tasks.desc': 'Pause, resume, cancel — manage every compression task with precision.',
    'tasks.c1t': 'Pause & Resume',
    'tasks.c1d': 'Pause, resume, or cancel individual tasks at any time.',
    'tasks.c2t': 'Real-Time Progress',
    'tasks.c2d': 'Live progress with estimated time remaining for each task.',
    'tasks.c3t': 'Smart History',
    'tasks.c3d': 'Task history grouped by date with 7-day auto-cleanup.',
    'tasks.c4t': 'Size Tracking',
    'tasks.c4d': 'See input size, output size, and percentage reduction for every file.',
    'tasks.c5t': 'Tray Progress',
    'tasks.c5d': 'Batch processing progress visible right from the system tray.',
    'tasks.c6t': 'Date Grouping',
    'tasks.c6d': 'Tasks grouped by date — today, yesterday, and older.',
    'int.label': 'Seamless Integration',
    'int.title': 'Fits Right Into Your Workflow',
    'int.desc': 'Designed to work quietly in the background and stay out of your way.',
    'int.c1t': 'Drag & Drop',
    'int.c1d': 'Drop files directly into the app window to start compression.',
    'int.c2t': 'System Tray',
    'int.c2d': 'Runs quietly in the system tray — always ready, never in the way.',
    'int.c3t': 'Floating Progress',
    'int.c3d': 'Always-on-top progress panel — see status at a glance.',
    'int.c4t': 'Auto-Copy',
    'int.c4d': 'Compressed file is automatically copied to your clipboard.',
    'int.c5t': 'Auto-Delete',
    'int.c5d': 'Optionally remove originals after successful compression.',
    'int.c6t': 'Dark & Light',
    'int.c6d': 'Both themes supported — switch to match your preference.',
    'jira.label': 'Jira Integration',
    'jira.unique': 'Only in Litely',
    'jira.title': 'Screenshot to Jira \u2014 without leaving the keyboard',
    'jira.desc':
      'No other tool does this. Take a screenshot or record a video \u2014 Litely compresses it by up to 90%, converts the format, and puts the result in your clipboard. Switch to Jira, paste into a comment \u2014 the file uploads right into the issue. Markup is inserted automatically. Save the comment \u2014 done.',
    'jira.w1t': 'Capture',
    'jira.w1d': "Take a screenshot or record a video. Save it to Litely's watch folder \u2014 compression starts instantly.",
    'jira.w2t': 'Auto-compress & convert',
    'jira.w2d': 'Up to 90% smaller. Format conversion on the fly \u2014 JPG\u00a0\u2192\u00a0WebP, MOV\u00a0\u2192\u00a0MP4. The optimized file goes straight to your clipboard.',
    'jira.w3t': 'Paste into Jira',
    'jira.w3d': 'Open a Jira comment and press Cmd+V on Mac or Ctrl+V on Windows/Linux. The file uploads directly into the issue with a progress indicator.',
    'jira.w4t': 'Markup is ready',
    'jira.w4d': 'Jira markup is inserted automatically \u2014 !image.webp! for images, [^video.mp4] for videos. Save the comment \u2014 the attachment is linked to the issue.',
    'jira.f1': 'Chrome extension for Jira',
    'jira.f2': 'Chrome, Arc, Brave, Safari, Firefox, Edge',
    'jira.f3': 'Multiple Jira instances',
    'jira.accounts': 'ACCOUNTS',
    'jira.s1t': 'Compress',
    'jira.s2t': 'Switch to browser',
    'jira.s3t': 'Uploaded to PROJ-123',
    'jira.s3d': 'copied to clipboard',
    'perf.label': 'Native Performance',
    'perf.title': 'Fast. Lightweight.',
    'perf.desc': 'Just 7 MB. Launches instantly, works fast, takes up almost nothing.',
    'perf.f1': 'Native binary — instant startup',
    'perf.f2': 'Hardware-accelerated GPU encoding',
    'perf.f3': 'Smooth UI even with thousands of files',
    'perf.f4': 'Instant interface response, zero lag',
    'perf.size': 'Total app size',
    'perf.caption': 'Total app size',
    'uc.label': "Who It's For",
    'uc.title': 'Built for Everyone',
    'uc.c1t': 'Content Creators',
    'uc.c1d': 'Compress videos before uploading to YouTube, TikTok, or Instagram.',
    'uc.c2t': 'Photographers',
    'uc.c2d': 'Batch optimize images for web galleries and client deliverables.',
    'uc.c3t': 'Video Editors',
    'uc.c3d': 'Quick compression for review copies and sharing with clients.',
    'uc.c4t': 'SMM Managers',
    'uc.c4d': 'Optimize media before publishing to social platforms.',
    'uc.c5t': 'Developers',
    'uc.c5d': 'Compress image and video assets for web projects and apps.',
    'uc.c6t': 'Everyone Else',
    'uc.c6d': 'Free up gigabytes of disk space without losing quality.',
    'dl.title': 'Download Litely',
    'dl.desc': 'Free during Early Access. Choose your platform.',
    'dl.coming': 'Coming soon',
    'dl.all': 'All releases on GitHub →',
    'dl.your_os': 'your system',
    'dl.auto.mac': 'Download for macOS',
    'dl.auto.win': 'Download for Windows',
    'dl.auto.linux': 'Download for Linux',
  },
  ru: {
    'header.slogan': 'сделай медиа легче',
    'nav.features': 'Возможности',
    'nav.usecases': 'Сценарии',
    'nav.download': 'Скачать',
    'hero.title': 'Сжимай всё.<br>Автоматически.',
    'hero.subtitle':
      'Добавь папку — Litely следит за новыми файлами и сжимает их в фоне. Видео, изображения, без усилий.',
    'hero.cta': 'Скачать',
    'hero.hint': 'macOS 11+ · Нативное приложение',
    'hero.dark': 'Тёмная тема',
    'hero.light': 'Светлая тема',
    'demo.status': '3 файла сжато · 3.1 ГБ сэкономлено',
    'stats.video': 'сжатие видео',
    'stats.image': 'сжатие изображений',
    'stats.formats': 'форматов видео',
    'stats.memory': 'МБ памяти',
    'watch.label': 'Умная автоматизация',
    'watch.title': 'Настрой и забудь',
    'watch.desc':
      'Добавь до 3 папок — Litely следит за ними круглосуточно и сжимает каждый новый файл автоматически.',
    'watch.f1': 'Наблюдение до 3 папок одновременно',
    'watch.f2': 'Обнаружение новых файлов в реальном времени',
    'watch.f3': 'Настройки сохраняются между перезапусками',
    'watch.f4': 'Умная фильтрация — пропускает скрытые, сжатые и выходные файлы',
    'watch.s1': 'Наблюдение · 24 файла',
    'watch.s2': 'Наблюдение · 156 файлов',
    'watch.s3': 'Наблюдение · 8 файлов',
    'video.label': 'Сжатие видео',
    'video.title': 'Все кодеки. Максимальная экономия.',
    'video.desc':
      'От H.264 до AV1 — выбери идеальный баланс между совместимостью и степенью сжатия.',
    'video.f1': 'GPU-ускорение через VideoToolbox (macOS)',
    'video.f2': '3 пресета качества: Компактный, Оптимальный, Максимальный',
    'video.f3': 'Двухпроходное кодирование для лучшего качества/размера',
    'video.f4': 'Конвертация: MP4, MOV, AVI, MKV, WebM, FLV, GIF',
    'video.f5': 'Извлечение аудиодорожки из видео',
    'video.f6': 'Ресайз видео (вписать / ширина / высота)',
    'video.f7': 'Целевой размер файла — автоподбор качества',
    'video.t1': 'Совместимый',
    'video.t2': 'Сбалансированный',
    'video.t3': 'Максимальный',
    'video.caption': 'Степень сжатия →',
    'images.label': 'Сжатие изображений',
    'images.title': 'Идеальная оптимизация',
    'images.desc':
      'От WebP до AVIF и SVG — выбери формат и качество для каждого случая.',
    'images.f1': 'Ползунок качества 1–100',
    'images.f2': 'Удаление метаданных EXIF и ICC',
    'images.f3': 'Режим максимального усилия сжатия — медленнее, но лучше сжатие',
    'images.f4': 'Целевой размер в КБ — автоподбор качества',
    'images.f5': 'Пакетный ресайз — несколько размеров из одного изображения',
    'images.f6': 'Визуальное сравнение до/после',
    'images.f7': 'Оптимизация SVG и конвертация растра в вектор',
    'images.input': 'Входные форматы: WebP, AVIF, JPEG, PNG, SVG, HEIC/HEIF, BMP, TIFF',
    'images.quality': 'Качество',
    'images.before': 'До',
    'images.after': 'После',
    'tasks.label': 'Управление задачами',
    'tasks.title': 'Полный контроль над каждым файлом',
    'tasks.desc': 'Пауза, возобновление, отмена — управляй каждой задачей сжатия.',
    'tasks.c1t': 'Пауза и возобновление',
    'tasks.c1d': 'Ставь на паузу, возобновляй или отменяй отдельные задачи.',
    'tasks.c2t': 'Прогресс в реальном времени',
    'tasks.c2d': 'Текущий прогресс с оценкой оставшегося времени.',
    'tasks.c3t': 'Умная история',
    'tasks.c3d': 'История задач по датам с автоочисткой через 7 дней.',
    'tasks.c4t': 'Отслеживание размера',
    'tasks.c4d': 'Входной размер, выходной размер и процент уменьшения для каждого файла.',
    'tasks.c5t': 'Прогресс в трее',
    'tasks.c5d': 'Прогресс пакетной обработки прямо в системном трее.',
    'tasks.c6t': 'Группировка по датам',
    'tasks.c6d': 'Задачи сгруппированы: сегодня, вчера и ранее.',
    'int.label': 'Интеграция с системой',
    'int.title': 'Вписывается в ваш рабочий процесс',
    'int.desc': 'Работает тихо в фоне и не мешает.',
    'int.c1t': 'Drag & Drop',
    'int.c1d': 'Перетащи файлы прямо в окно приложения.',
    'int.c2t': 'Системный трей',
    'int.c2d': 'Живёт в трее — всегда готов, никогда не мешает.',
    'int.c3t': 'Плавающий прогресс',
    'int.c3d': 'Панель прогресса поверх всех окон.',
    'int.c4t': 'Автокопирование',
    'int.c4d': 'Сжатый файл автоматически копируется в буфер обмена.',
    'int.c5t': 'Автоудаление',
    'int.c5d': 'Опционально удалять оригиналы после сжатия.',
    'int.c6t': 'Тёмная и светлая',
    'int.c6d': 'Обе темы — переключайся под настроение.',
    'jira.label': 'Интеграция с Jira',
    'jira.unique': 'Только в Litely',
    'jira.title': 'Скриншот в Jira \u2014 не отрывая рук от клавиатуры',
    'jira.desc':
      'Ни один другой инструмент так не умеет. Сделайте скриншот или запишите видео \u2014 Litely сожмёт до 90%, сконвертирует формат и поместит результат в буфер обмена. Переключитесь в Jira, вставьте в комментарий \u2014 файл загрузится прямо в задачу. Разметка вставится автоматически. Сохраните комментарий \u2014 готово.',
    'jira.w1t': 'Снимите',
    'jira.w1d': 'Сделайте скриншот или запишите видео. Сохраните в папку наблюдения Litely \u2014 сжатие начнётся мгновенно.',
    'jira.w2t': 'Автосжатие и конвертация',
    'jira.w2d': 'До 90% меньше. Конвертация формата на лету \u2014 JPG\u00a0\u2192\u00a0WebP, MOV\u00a0\u2192\u00a0MP4. Оптимизированный файл сразу попадает в буфер обмена.',
    'jira.w3t': 'Вставьте в Jira',
    'jira.w3d': 'Откройте комментарий в Jira и нажмите Cmd+V на Mac или Ctrl+V на Windows/Linux. Файл загрузится прямо в задачу с индикатором прогресса.',
    'jira.w4t': 'Разметка готова',
    'jira.w4d': 'Jira-разметка вставится автоматически \u2014 !image.webp! для изображений, [^video.mp4] для видео. Сохраните комментарий \u2014 вложение привязано к задаче.',
    'jira.f1': 'Chrome-расширение для Jira',
    'jira.f2': 'Chrome, Arc, Brave, Safari, Firefox, Edge',
    'jira.f3': 'Несколько Jira-инстансов',
    'jira.accounts': 'АККАУНТЫ',
    'jira.s1t': 'Сжатие',
    'jira.s2t': 'Переключение в браузер',
    'jira.s3t': 'Загружено в PROJ-123',
    'jira.s3d': 'скопировано в буфер',
    'perf.label': 'Нативная скорость',
    'perf.title': 'Быстрое. Лёгкое.',
    'perf.desc': 'Всего 7 МБ. Мгновенный запуск, быстрая работа, почти не занимает места.',
    'perf.f1': 'Нативный бинарник — мгновенный запуск',
    'perf.f2': 'Аппаратное ускорение GPU-кодирования',
    'perf.f3': 'Плавный интерфейс даже с тысячами файлов',
    'perf.f4': 'Мгновенный отклик интерфейса, ноль задержек',
    'perf.size': 'Размер приложения',
    'perf.caption': 'Размер приложения',
    'uc.label': 'Для кого',
    'uc.title': 'Создан для каждого',
    'uc.c1t': 'Контент-креаторы',
    'uc.c1d': 'Сжимай видео перед загрузкой на YouTube, TikTok или Instagram.',
    'uc.c2t': 'Фотографы',
    'uc.c2d': 'Пакетная оптимизация для веб-галерей и клиентов.',
    'uc.c3t': 'Видеоредакторы',
    'uc.c3d': 'Быстрое сжатие для ревью и шеринга с клиентами.',
    'uc.c4t': 'SMM-менеджеры',
    'uc.c4d': 'Оптимизация медиа перед публикацией.',
    'uc.c5t': 'Разработчики',
    'uc.c5d': 'Сжатие изображений и видео для веб-проектов.',
    'uc.c6t': 'Все остальные',
    'uc.c6d': 'Освободи гигабайты дискового пространства без потери качества.',
    'dl.title': 'Скачать Litely',
    'dl.desc': 'Бесплатно на старте. Выберите платформу.',
    'dl.coming': 'Скоро',
    'dl.all': 'Все версии на GitHub →',
    'dl.your_os': 'ваша система',
    'dl.auto.mac': 'Скачать для macOS',
    'dl.auto.win': 'Скачать для Windows',
    'dl.auto.linux': 'Скачать для Linux',
  },
};

/* ═══ OS Detection ═══ */
function detectOS() {
  const ua = navigator.userAgent || navigator.platform || '';
  if (/Mac/i.test(ua)) return 'mac';
  if (/Win/i.test(ua)) return 'windows';
  if (/Linux/i.test(ua)) return 'linux';
  return 'unknown';
}

function setupOSDetection() {
  const os = detectOS();
  const lang = getLang();
  const strings = translations[lang];
  const platformIds = { mac: 'platform-mac', windows: 'platform-windows', linux: 'platform-linux' };
  const detectIds = { mac: 'detect-mac', windows: 'detect-windows', linux: 'detect-linux' };

  Object.keys(platformIds).forEach(function (key) {
    const el = document.getElementById(platformIds[key]);
    const detectEl = document.getElementById(detectIds[key]);
    if (!el || !detectEl) return;
    if (key === os) {
      el.classList.add('platform--detected');
      el.classList.remove('platform--soon');
      detectEl.textContent = '\u2713 ' + strings['dl.your_os'];
    } else {
      el.classList.remove('platform--detected');
      detectEl.textContent = '';
    }
  });

  const primaryBtn = document.getElementById('primaryDownload');
  const btnText = primaryBtn.querySelector('[data-i18n]');
  if (os === 'mac') {
    primaryBtn.href =
      'https://github.com/ASDAlexey/litely/releases/latest/download/Litely_aarch64.dmg';
    btnText.textContent = strings['dl.auto.mac'];
    btnText.setAttribute('data-i18n', 'dl.auto.mac');
  } else if (os === 'windows') {
    primaryBtn.href = '#download';
    btnText.textContent = strings['dl.auto.win'];
    btnText.setAttribute('data-i18n', 'dl.auto.win');
  } else if (os === 'linux') {
    primaryBtn.href = '#download';
    btnText.textContent = strings['dl.auto.linux'];
    btnText.setAttribute('data-i18n', 'dl.auto.linux');
  }
}

/* ═══ i18n ═══ */
function getLang() {
  return localStorage.getItem('litely-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('litely-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const strings = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });
  document.documentElement.lang = lang;
  document.title =
    lang === 'ru'
      ? 'Litely \u2014 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u0436\u0430\u0442\u0438\u0435 \u043c\u0435\u0434\u0438\u0430'
      : 'Litely \u2014 Automatic Media Compression';

  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'ru' ? 'EN' : 'RU';

  setupOSDetection();
}

/* ═══ Scroll Reveal ═══ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
}

/* ═══ Counter Animation ═══ */
function initCounters() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);

        if (el.dataset.text) {
          el.textContent = el.dataset.text;
          return;
        }

        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll('[data-counter]').forEach(function (el) {
    observer.observe(el);
  });
}

/* ═══ Smooth Scroll for Nav ═══ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══ Init ═══ */
document.getElementById('langToggle').addEventListener('click', function () {
  const current = getLang();
  setLang(current === 'ru' ? 'en' : 'ru');
});

applyLang(getLang());
initScrollReveal();
initCounters();
initSmoothScroll();
