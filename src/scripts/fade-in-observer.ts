// Shared IntersectionObserver for fade-in animations
// This reduces TBT by consolidating multiple observers into one

const observerOptions = {
  threshold: 0.1,
  rootMargin: '-100px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in-section elements on the page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
});
