/* ============================================
   GMC - Gamma Maya Cyberindo JavaScript
   ============================================ */

// --------------------------------------------
// Initialize AOS (Animate On Scroll)
// --------------------------------------------
AOS.init({
  duration: 800,
  once: true
});

// --------------------------------------------
// Mobile Menu Toggle
// --------------------------------------------
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
const mobileDropdown = document.querySelector('.mobile-dropdown');

// Toggle mobile menu
if (mobileMenuBtn && mobileMenuOverlay) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking overlay
  mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Mobile Dropdown Toggle
if (mobileDropdownToggle && mobileDropdown) {
  mobileDropdownToggle.addEventListener('click', () => {
    mobileDropdown.classList.toggle('active');
  });
}

// --------------------------------------------
// Scroll to Top Button
// --------------------------------------------
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Scroll to top on click
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
