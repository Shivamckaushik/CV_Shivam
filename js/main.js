/* ============================================================
   Portfolio Website — JavaScript
   Theme toggle, animations, project filters, typing effect
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Theme Toggle ----------
  const themeToggleHero = document.getElementById('themeToggleHero');
  const themeToggleNav = document.getElementById('themeToggleNav');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.remove('light-theme');
    updateThemeIcons(false);
  } else {
    body.classList.add('light-theme');
    updateThemeIcons(true);
  }

  function toggleTheme() {
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcons(isLight);
  }

  function updateThemeIcons(isLight) {
    const icon = isLight ? '\u2600' : '\u263E'; // sun : moon
    if (themeToggleHero) themeToggleHero.textContent = icon;
    if (themeToggleNav) themeToggleNav.textContent = icon;
  }

  if (themeToggleHero) themeToggleHero.addEventListener('click', toggleTheme);
  if (themeToggleNav) themeToggleNav.addEventListener('click', toggleTheme);

  // ---------- Sticky Navbar ----------
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');

  function handleNavbar() {
    if (!hero || !navbar) return;
    const heroBottom = hero.offsetTop + hero.offsetHeight - 100;
    if (window.scrollY > heroBottom) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleNavbar, { passive: true });
  handleNavbar();

  // ---------- Mobile Hamburger ----------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Active Nav Link on Scroll ----------
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ---------- Fade-In on Scroll (IntersectionObserver) ----------
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ---------- Project Category Filters ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
          card.classList.remove('expanded');
        }
      });
    });
  });

  // ---------- Project Card Expand/Collapse ----------
  projectCards.forEach(card => {
    const expandBtn = card.querySelector('.project-expand');
    if (expandBtn) {
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('expanded');
      });
    }

    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  // ---------- Typing Animation ----------
  const typingEl = document.getElementById('typingText');
  if (typingEl) {
    const phrases = [
      'AI/ML Engineer',
      'Semiconductor Domain Expert',
      'Multi-Agent AI Architect',
      'Computer Vision Engineer',
      'Building AI for the Fab'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Add cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    typingEl.appendChild(cursor);

    function type() {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      typingEl.appendChild(cursor);

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === current.length) {
        speed = 2000; // pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400; // pause before next
      }

      setTimeout(type, speed);
    }

    type();
  }

});
