// script.js — Access Page
// Add interactive behaviour here

// Example: subtle parallax on gears on mouse move
document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;  // -1 to 1
  const dy = (e.clientY - cy) / cy;

  document.querySelectorAll('.gear-wrap').forEach((el, i) => {
    const depth = (i % 2 === 0) ? 12 : 7;
    el.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
  });
});

// Nav active state
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-links a').forEach(l => l.removeAttribute('style'));
    this.style.color = '#ffffff';
    this.style.borderColor = 'rgba(42,95,168,0.8)';
    this.style.background = 'rgba(42,95,168,0.2)';
  });
});

// Register button click
const registerBtn = document.querySelector('.btn-register');
if (registerBtn) {
  registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Registration coming soon!');
  });
  // https://docs.google.com/forms/d/e/1FAIpQLSczDBYO7E8h-TQ7aPEgvIJ86zmoRXWiC1f-zFq4qKA8Um7DFQ/viewform?usp=publish-editor
  // get rid of event listener and redirect to that link
}
