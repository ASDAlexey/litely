/* ═══ Language Toggle Memory ═══ */
document.addEventListener('click', function (e) {
  if (e.target.closest('.lang-btn')) {
    try { sessionStorage.setItem('litely-lang', '1'); } catch (_) {}
  }
});

/* ═══ OS Detection ═══ */
function detectOS() {
  var ua = navigator.userAgent || navigator.platform || '';
  if (/Mac/i.test(ua)) return 'mac';
  if (/Win/i.test(ua)) return 'windows';
  if (/Linux/i.test(ua)) return 'linux';
  return 'unknown';
}

function setupOSDetection() {
  var os = detectOS();
  var lang = document.documentElement.lang || 'en';
  var yourOS = lang === 'ru' ? 'ваша система' : 'your system';
  var dlMac = lang === 'ru' ? 'Скачать для macOS' : 'Download for macOS';
  var dlWin = lang === 'ru' ? 'Скачать для Windows' : 'Download for Windows';
  var dlLinux = lang === 'ru' ? 'Скачать для Linux' : 'Download for Linux';

  var platformIds = { mac: 'platform-mac', windows: 'platform-windows', linux: 'platform-linux' };
  var detectIds = { mac: 'detect-mac', windows: 'detect-windows', linux: 'detect-linux' };

  Object.keys(platformIds).forEach(function (key) {
    var el = document.getElementById(platformIds[key]);
    var detectEl = document.getElementById(detectIds[key]);
    if (!el || !detectEl) return;
    if (key === os) {
      el.classList.add('platform--detected');
      detectEl.textContent = '\u2713 ' + yourOS;
    } else {
      el.classList.remove('platform--detected');
      detectEl.textContent = '';
    }
  });

  // Show the first-launch guide that matches the visitor's OS. macOS and
  // Windows ship unsigned, so each gets a reassurance block; Linux has no
  // equivalent gatekeeper, so neither guide is shown there.
  var macGuide = document.getElementById('macguide');
  var winGuide = document.getElementById('winguide');
  var activeGuide = macGuide;

  if (os === 'windows') {
    if (macGuide) macGuide.hidden = true;
    if (winGuide) winGuide.hidden = false;
    activeGuide = winGuide;
  } else if (os === 'linux') {
    if (macGuide) macGuide.hidden = true;
    if (winGuide) winGuide.hidden = true;
    activeGuide = null;
  }

  var primaryBtn = document.getElementById('primaryDownload');
  if (!primaryBtn) return;
  var btnText = primaryBtn.querySelector('span');
  if (!btnText) return;

  var directDownload = false;

  if (os === 'mac') {
    primaryBtn.href = 'https://github.com/ASDAlexey/litely/releases/latest/download/Litely_aarch64.dmg';
    btnText.textContent = dlMac;
    directDownload = true;
  } else if (os === 'windows') {
    primaryBtn.href = 'https://github.com/ASDAlexey/litely/releases/latest/download/Litely_x64-setup.exe';
    btnText.textContent = dlWin;
    directDownload = true;
  } else if (os === 'linux') {
    primaryBtn.href = 'https://github.com/ASDAlexey/litely/releases/latest/download/Litely_amd64.AppImage';
    btnText.textContent = dlLinux;
    directDownload = true;
  }

  // When the link triggers a direct download (no navigation), also scroll the
  // visitor down to the first-launch guide for their OS so they see the steps.
  if (directDownload) {
    primaryBtn.addEventListener('click', function () {
      var guide = activeGuide || document.getElementById('download');
      if (guide) guide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/* ═══ Scroll Reveal ═══ */
function initScrollReveal() {
  var observer = new IntersectionObserver(
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
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        observer.unobserve(el);

        if (el.dataset.text) {
          el.textContent = el.dataset.text;
          return;
        }

        var target = parseInt(el.dataset.counter, 10);
        var suffix = el.dataset.suffix || '';
        var duration = 1800;
        var start = performance.now();

        function tick(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);
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
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══ Init ═══ */
setupOSDetection();
initScrollReveal();
initCounters();
initSmoothScroll();
