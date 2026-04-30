const themeMap = {
  hero: {
    gradient: 'radial-gradient(circle at 18% 18%, rgba(76, 145, 235, 0.42) 0%, rgba(76, 145, 235, 0) 38%), radial-gradient(circle at 82% 14%, rgba(154, 202, 255, 0.22) 0%, rgba(154, 202, 255, 0) 34%), linear-gradient(145deg, #030815 0%, #08152b 45%, #143a66 100%)',
    wash: 'radial-gradient(circle at 25% 20%, rgba(85, 154, 255, 0.32) 0%, rgba(85, 154, 255, 0) 46%), radial-gradient(circle at 82% 16%, rgba(50, 110, 210, 0.22) 0%, rgba(50, 110, 210, 0) 40%), linear-gradient(160deg, rgba(6, 16, 34, 0.82) 0%, rgba(9, 24, 50, 0.62) 100%)',
    bg: '#0a1628',
    bg2: '#0e1e3a',
    accent: '#1e4d8c',
    text: '#d0dff5',
    textDim: '#6b8ab5',
    navBg: 'rgba(10,22,40,0.88)',
    navBorder: 'rgba(42,95,168,0.25)',
    panel: 'rgba(255,255,255,0.06)',
    panelBorder: 'rgba(255,255,255,0.08)'
  },
  section1: {
    gradient: 'radial-gradient(circle at 18% 18%, rgba(103, 194, 255, 0.44) 0%, rgba(103, 194, 255, 0) 38%), radial-gradient(circle at 82% 18%, rgba(58, 118, 255, 0.24) 0%, rgba(58, 118, 255, 0) 34%), linear-gradient(145deg, #07111f 0%, #163562 46%, #3173b0 100%)',
    wash: 'radial-gradient(circle at 22% 22%, rgba(122, 196, 255, 0.36) 0%, rgba(122, 196, 255, 0) 48%), radial-gradient(circle at 80% 18%, rgba(87, 166, 255, 0.24) 0%, rgba(87, 166, 255, 0) 40%), linear-gradient(160deg, rgba(8, 24, 52, 0.8) 0%, rgba(22, 62, 115, 0.55) 100%)',
    bg: '#102741',
    bg2: '#204e7c',
    accent: '#7ac4ff',
    text: '#f3f8ff',
    textDim: '#c3dcf4',
    navBg: 'rgba(11,28,50,0.92)',
    navBorder: 'rgba(103,194,255,0.34)',
    panel: 'rgba(255,255,255,0.09)',
    panelBorder: 'rgba(103,194,255,0.2)'
  },
  section2: {
    gradient: 'radial-gradient(circle at 18% 20%, rgba(75, 233, 195, 0.42) 0%, rgba(75, 233, 195, 0) 38%), radial-gradient(circle at 82% 16%, rgba(29, 184, 222, 0.22) 0%, rgba(29, 184, 222, 0) 34%), linear-gradient(145deg, #06191b 0%, #0d4550 46%, #1fb08c 100%)',
    wash: 'radial-gradient(circle at 20% 20%, rgba(89, 235, 204, 0.36) 0%, rgba(89, 235, 204, 0) 48%), radial-gradient(circle at 82% 18%, rgba(28, 173, 214, 0.24) 0%, rgba(28, 173, 214, 0) 40%), linear-gradient(160deg, rgba(8, 43, 48, 0.8) 0%, rgba(11, 78, 88, 0.55) 100%)',
    bg: '#10313c',
    bg2: '#15655f',
    accent: '#59ebcc',
    text: '#f0fffc',
    textDim: '#bfede5',
    navBg: 'rgba(9,34,39,0.92)',
    navBorder: 'rgba(75,233,195,0.32)',
    panel: 'rgba(255,255,255,0.09)',
    panelBorder: 'rgba(75,233,195,0.2)'
  },
  section3: {
    gradient: 'radial-gradient(circle at 18% 18%, rgba(197, 131, 255, 0.42) 0%, rgba(197, 131, 255, 0) 38%), radial-gradient(circle at 82% 14%, rgba(104, 150, 255, 0.22) 0%, rgba(104, 150, 255, 0) 34%), linear-gradient(145deg, #0f0c24 0%, #34206a 46%, #7b4dff 100%)',
    wash: 'radial-gradient(circle at 22% 18%, rgba(202, 145, 255, 0.36) 0%, rgba(202, 145, 255, 0) 48%), radial-gradient(circle at 80% 16%, rgba(114, 161, 255, 0.22) 0%, rgba(114, 161, 255, 0) 40%), linear-gradient(160deg, rgba(22, 12, 52, 0.82) 0%, rgba(61, 34, 122, 0.55) 100%)',
    bg: '#1f2148',
    bg2: '#4c3286',
    accent: '#cd95ff',
    text: '#f7f3ff',
    textDim: '#dccdf5',
    navBg: 'rgba(20,18,43,0.92)',
    navBorder: 'rgba(197,131,255,0.32)',
    panel: 'rgba(255,255,255,0.09)',
    panelBorder: 'rgba(197,131,255,0.2)'
  },
  section4: {
    gradient: 'radial-gradient(circle at 18% 18%, rgba(255, 187, 111, 0.42) 0%, rgba(255, 187, 111, 0) 38%), radial-gradient(circle at 82% 16%, rgba(255, 126, 88, 0.20) 0%, rgba(255, 126, 88, 0) 34%), linear-gradient(145deg, #140b12 0%, #4a1f3a 46%, #bf5b2e 100%)',
    wash: 'radial-gradient(circle at 22% 18%, rgba(255, 188, 115, 0.34) 0%, rgba(255, 188, 115, 0) 48%), radial-gradient(circle at 80% 16%, rgba(255, 132, 94, 0.22) 0%, rgba(255, 132, 94, 0) 40%), linear-gradient(160deg, rgba(48, 22, 32, 0.84) 0%, rgba(121, 61, 42, 0.58) 100%)',
    bg: '#30202a',
    bg2: '#61304a',
    accent: '#ffb96f',
    text: '#fff5ed',
    textDim: '#f0d2bd',
    navBg: 'rgba(35,18,27,0.92)',
    navBorder: 'rgba(255,187,111,0.32)',
    panel: 'rgba(255,255,255,0.09)',
    panelBorder: 'rgba(255,187,111,0.2)'
  }
};

const baseLayer = document.querySelector('.theme-layer-base');
const nextLayer = document.querySelector('.theme-layer-next');
const washLayer = document.querySelector('.theme-wash');
let activeTheme = 'hero';
let layerSwapTimer = null;

function applyTheme(themeName) {
  const theme = themeMap[themeName];
  if (!theme) return;

  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--bg2', theme.bg2);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--text', theme.text);
  root.style.setProperty('--text-dim', theme.textDim);
  root.style.setProperty('--nav-bg', theme.navBg);
  root.style.setProperty('--nav-border', theme.navBorder);
  root.style.setProperty('--panel', theme.panel);
  root.style.setProperty('--panel-border', theme.panelBorder);

  if (washLayer && theme.wash) {
    washLayer.style.backgroundImage = theme.wash;
  }

  if (baseLayer && nextLayer && theme.gradient && themeName !== activeTheme) {
    nextLayer.style.backgroundImage = theme.gradient;
    nextLayer.style.opacity = '1';
    window.clearTimeout(layerSwapTimer);
    layerSwapTimer = window.setTimeout(() => {
      baseLayer.style.backgroundImage = theme.gradient;
      nextLayer.style.opacity = '0';
      activeTheme = themeName;
    }, 1150);
  } else if (baseLayer && theme.gradient && activeTheme === 'hero') {
    baseLayer.style.backgroundImage = theme.gradient;
  }
}

applyTheme('hero');
if (baseLayer && themeMap.hero.gradient) {
  baseLayer.style.backgroundImage = themeMap.hero.gradient;
}
if (washLayer && themeMap.hero.wash) {
  washLayer.style.backgroundImage = themeMap.hero.wash;
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Auto-highlight active nav button while scrolling
const sections = document.querySelectorAll('.hero, .content-section');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      applyTheme(entry.target.id);
      navLinks.forEach(l => l.classList.remove('active'));
      const match = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.55, rootMargin: '-20% 0px -30% 0px' });

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
