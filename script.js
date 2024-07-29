document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    // Toggle navigation menu on small screens
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  
    // IntersectionObserver to animate images on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe project images
    document.querySelectorAll('.project img').forEach(img => {
      observer.observe(img);
    });
  
    // Observe other images if needed
    document.querySelectorAll('#hero img').forEach(img => {
      observer.observe(img);
    });
  });
  