// Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Auto-highlight active nav button while scrolling
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));

  // Parallax gears on mouse move
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    document.querySelectorAll('.gear-wrap').forEach((el, i) => {
      const d = (i % 2 === 0) ? 12 : 7;
      el.style.transform = `translate(${dx * d}px, ${dy * d}px)`;
    });
  });

  // Register button opens external form
  const registerBtn = document.querySelector('.btn-register');
  if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSczDBYO7E8h-TQ7aPEgvIJ86zmoRXWiC1f-zFq4qKA8Um7DFQ/viewform?usp=publish-editor', '_blank');
    });
  }
