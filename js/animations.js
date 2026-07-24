// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation class to sections
document.querySelectorAll('section, .value-item, .product-card, .info-card').forEach(el => {
  observer.observe(el);
});

// Fade In Animation
const style = document.createElement('style');
style.textContent = `
  section, .value-item, .product-card, .info-card {
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  section.animate-in, .value-item.animate-in, .product-card.animate-in, .info-card.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Parallax effect for hero image */
  @media (prefers-reduced-motion: no-preference) {
    .hero-image img {
      transition: transform 0.6s ease;
    }
  }
`;
document.head.appendChild(style);

// Parallax Effect (optional)
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      heroImage.style.backgroundPosition = `center calc(50% + ${parallax}px)`;
    }
  });
}

console.log('Animations initialized');
