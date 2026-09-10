// 한국어 / English 전환. 기기 언어가 한국어가 아니면 영어로 시작한다.
(function () {
  const buttons = document.querySelectorAll('.langbar button');
  const sections = {
    ko: document.getElementById('ko'),
    en: document.getElementById('en'),
  };

  function show(lang) {
    for (const [key, el] of Object.entries(sections)) {
      if (el) el.hidden = key !== lang;
    }
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-nav-ko]').forEach(a => {
      a.textContent = lang === 'ko' ? a.dataset.navKo : a.dataset.navEn;
    });
  }

  buttons.forEach(b => b.addEventListener('click', () => show(b.dataset.lang)));

  if (!(navigator.language || '').toLowerCase().startsWith('ko')) show('en');
})();
