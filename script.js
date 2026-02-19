document.addEventListener('DOMContentLoaded', () => {
  // ===== MOBILE NAVIGATION =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');

      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Close menu when clicking links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ===== SMOOTH SCROLLING =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== GALLERY LIGHTBOX =====
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightboxClose');

  function openLightbox(img) {
    if (!lightbox || !lightboxImg) return;
    if (!img || !img.src) return;

    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Gallery image';

    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    const img = item.querySelector('img');

    // Handle image loading errors
    if (img) {
      img.addEventListener('error', function () {
        item.style.backgroundColor = '#2c3e50';
        const overlayText = item.querySelector('.gallery-overlay p');
        if (overlayText && !overlayText.textContent) {
          overlayText.textContent = 'Image coming soon';
        }
      });
    }

    item.addEventListener('click', () => {
      if (img) openLightbox(img);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });

  // ===== COPY BANK DETAILS =====
  const copyBtn = document.getElementById('copyBankBtn');
  const copyMessage = document.getElementById('copyMessage');
  const bankDetails = document.getElementById('bankDetails');

  if (copyBtn && bankDetails) {
    copyBtn.addEventListener('click', async () => {
      const text = bankDetails.innerText.replace(/\n+/g, '\n').trim();

      try {
        await navigator.clipboard.writeText(text);
        if (copyMessage) {
          copyMessage.style.display = 'inline';
          setTimeout(() => { copyMessage.style.display = 'none'; }, 2000);
        }
      } catch (err) {
        alert('Copy failed. Please copy manually.');
      }
    });
  }

  // ===== SCROLL TO TOP =====
  const scrollBtn = document.getElementById('scrollToTop');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== CONTACT FORM HANDLING =====
  const contactForm = document.getElementById('contactForm');
  const contactMessage = document.getElementById('contactMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name')?.value?.trim();
      const email = document.getElementById('email')?.value?.trim();
      const subject = document.getElementById('subject')?.value?.trim();
      const message = document.getElementById('message')?.value?.trim();

      if (!name || !email || !subject || !message) {
        if (contactMessage) {
          contactMessage.className = 'form-message error';
          contactMessage.textContent = 'Please fill in all fields';
        }
        return;
      }

      if (contactMessage) {
        contactMessage.style.display = 'block';
        contactMessage.className = 'form-message success';
        contactMessage.textContent = 'Thank you for your message! We will get back to you soon.';
      }

      contactForm.reset();

      setTimeout(() => {
        if (contactMessage) contactMessage.style.display = 'none';
      }, 5000);
    });
  }

  // ===== DONATION AMOUNT HANDLER =====
  const customDonateBtn = document.getElementById('customDonateBtn');
  const customAmountInput = document.getElementById('customDonationAmount');

  if (customDonateBtn && customAmountInput) {
    customDonateBtn.addEventListener('click', () => {
      const val = Number(customAmountInput.value);
      if (!val || Number.isNaN(val)) {
        alert('Please enter a donation amount');
        return;
      }
      if (val < 100) {
        alert('Please enter an amount of at least $100');
        return;
      }

      window.open(`YOUR_PAYMENT_LINK_HERE?amount=${val}`, '_blank', 'noopener');
    });
  }

  // ===== FADE-IN ANIMATION FOR SECTIONS =====
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // Add fade-in styles dynamically (optional)
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
});