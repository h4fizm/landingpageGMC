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
