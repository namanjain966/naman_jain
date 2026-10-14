/**
 * PORTFOLIO JAVASCRIPT - NAMAN JAIN
 * High-performance vanilla JavaScript for interactions, theme toggling,
 * mobile navigation, contact form handling, and scroll effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================
  // 1. THEME SWITCHER (Dark & Light Mode)
  // =========================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  // Retrieve stored theme or default to dark
  const savedTheme = localStorage.getItem('naman_portfolio_theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else {
    // Check OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    htmlRoot.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('naman_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  // =========================================================
  // 2. MOBILE NAVIGATION DRAWER
  // =========================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function toggleMobileMenu() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileMenuBtn.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileMenuBtn.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close when a link inside the drawer is clicked
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close drawer when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // =========================================================
  // 3. ACTIVE NAVIGATION LINK ON SCROLL (IntersectionObserver)
  // =========================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link:not(.nav-btn-contact)');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // =========================================================
  // 4. BACK TO TOP BUTTON
  // =========================================================
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================
  // 5. COPY TO CLIPBOARD BUTTONS (Email)
  // =========================================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https or older environments
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        showToast('Unable to copy automatically');
      }
    });
  });

  // =========================================================
  // 6. TOAST NOTIFICATION UTILITY
  // =========================================================
  const toastEl = document.getElementById('toastNotification');
  let toastTimeout;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  // =========================================================
  // 7. CONTACT FORM VALIDATION & SUBMISSION
  // =========================================================
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const messageInput = document.getElementById('senderMessage');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formNotification = document.getElementById('formNotification');
  const submitBtn = document.getElementById('submitBtn');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.classList.add('visible');
        nameInput.classList.add('invalid');
        isValid = false;
      } else {
        nameError.classList.remove('visible');
        nameInput.classList.remove('invalid');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.classList.add('visible');
        emailInput.classList.add('invalid');
        isValid = false;
      } else {
        emailError.classList.remove('visible');
        emailInput.classList.remove('invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.classList.add('visible');
        messageInput.classList.add('invalid');
        isValid = false;
      } else {
        messageError.classList.remove('visible');
        messageInput.classList.remove('invalid');
      }

      if (!isValid) return;

      // Simulate sending submission
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span>Sending...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Message Sent!</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

        formNotification.className = 'form-notification success';
        formNotification.innerHTML = `
          <strong>Thank you, ${escapeHTML(nameInput.value.trim())}!</strong><br />
          Your message has been recorded. <em>(Note: To connect this form directly to your email inbox, check the simple instructions in README.md).</em>
        `;

        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          `;
        }, 4000);
      }, 700);
    });

    // Clear validation error on input
    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        input.classList.remove('invalid');
        const err = input.parentElement.querySelector('.form-error-msg');
        if (err) err.classList.remove('visible');
      });
    });
  }

  // Basic HTML Escaper for security
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // =========================================================
  // 8. AUTO-UPDATE COPYRIGHT YEAR
  // =========================================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================================================
  // 9. SMOOTH SCROLL FOR ALL ANCHORS
  // =========================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
