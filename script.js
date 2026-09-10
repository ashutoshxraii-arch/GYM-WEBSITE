document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  }

  // --- Contact Form Handling (Demo Mode) ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Clear inputs safely
      contactForm.reset();

      // Display exact demo submission message
      if (formStatus) {
        formStatus.textContent = 'Demo only — enquiry submission is not connected yet.';
      }
    });
  }
});