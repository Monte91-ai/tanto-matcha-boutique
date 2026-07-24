// Newsletter Subscription Handler
const newsletterForms = document.querySelectorAll(
  '#newsletter-form-home, #newsletter-form-shop, #newsletter-form-visit, .newsletter-form'
);

if (newsletterForms.length > 0) {
  newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      // Disable button
      button.disabled = true;
      button.textContent = 'Iscrizione in corso...';
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success message
        button.textContent = 'Iscritto!';
        button.style.backgroundColor = '#4A7C59';
        
        // Reset after 3 seconds
        setTimeout(() => {
          button.disabled = false;
          button.textContent = originalText;
          button.style.backgroundColor = '';
          form.reset();
        }, 3000);
        
        // Log subscription (for testing)
        console.log('Newsletter subscription:', email);
        
      } catch (error) {
        console.error('Newsletter error:', error);
        button.textContent = 'Errore. Prova di nuovo.';
        button.disabled = false;
      }
    });
  });
}

console.log('Newsletter handler initialized');
