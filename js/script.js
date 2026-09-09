(() => {
  'use strict';

  const header = document.getElementById('header');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-nav');
  const cursor = document.querySelector('.cursor-light');
  const visual = document.querySelector('[data-parallax]');
  const themeToggle = document.querySelector('.theme-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  document.getElementById('year').textContent = new Date().getFullYear();

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const isLight = theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#eee8df' : '#0b0a09');
    try { localStorage.setItem('alpha-theme', theme); } catch (error) { /* Preference storage is optional. */ }
  };

  applyTheme(document.documentElement.dataset.theme || 'dark');
  themeToggle.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

  const closeMenu = () => {
    navigation.classList.remove('open');
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const opening = !navigation.classList.contains('open');
    navigation.classList.toggle('open', opening);
    menuButton.classList.toggle('active', opening);
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', opening);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 991) closeMenu(); }, { passive: true });

  const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion) {
    reveals.forEach((element) => element.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  }

  if (!reducedMotion && finePointer) {
    let frame = 0;
    window.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        if (visual && window.innerWidth > 991) {
          const x = (event.clientX / window.innerWidth - .5) * -16;
          const y = (event.clientY / window.innerHeight - .5) * -16;
          visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        frame = 0;
      });
    }, { passive: true });
  }
})();
