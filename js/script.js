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
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => {
    if (navigation.classList.contains('open') && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (sections.length) {
    const setActiveLink = () => {
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 150) || sections[0];
      sectionLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${current.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    setActiveLink();
    window.addEventListener('scroll', setActiveLink, { passive: true });
  }

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

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
      const requestedProduct = new URLSearchParams(window.location.search).get('product');
      if (requestedProduct) {
        const productSelect = contactForm.querySelector('[name="productCategory"]');
        const message = contactForm.querySelector('[name="message"]');
        const match = [...productSelect.options].find((option) => option.textContent.toLowerCase().includes(requestedProduct.toLowerCase()));
        if (match) productSelect.value = match.value;
        if (message && !message.value) message.value = `I would like information about ${requestedProduct}.`;
      }
      contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;

        const button = contactForm.querySelector('.contact-submit');
        const status = contactForm.querySelector('.form-status');
        const originalButton = button.innerHTML;
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        button.innerHTML = '<span aria-hidden="true">↻</span> Sending enquiry';
        if (status) {
          status.classList.remove('is-error');
          status.textContent = '';
        }

        try {
          const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' }
          });
          const result = await response.json();
          if (!response.ok || !result.success) throw new Error(result.message || 'Unable to send enquiry');

          button.innerHTML = '<span aria-hidden="true">✓</span> Enquiry sent';
          if (status) status.textContent = 'Thank you — your enquiry has been sent to our team.';
          contactForm.reset();
        } catch (error) {
          button.innerHTML = originalButton;
          if (status) {
            status.classList.add('is-error');
            status.textContent = 'We could not send your enquiry. Please email info@alpharubberuae.com directly.';
          }
        } finally {
          button.disabled = false;
          button.removeAttribute('aria-busy');
        }
      });
    }
})();
