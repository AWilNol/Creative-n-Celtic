
/* --- 1. SHARED MOUSE TRAIL (All Pages) --- */
function createSparkleTrail(x, y) {
    const container = document.getElementById('sparkle-container');
    if (!container) return;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const randomSize = Math.random() * 8 + 4; 
    
    sparkle.style.setProperty('--x', `${x}px`);
    sparkle.style.setProperty('--y', `${y}px`);
    sparkle.style.setProperty('--size', `${randomSize}px`);
    
    container.appendChild(sparkle);
    // Remove sparkle after animation
    setTimeout(() => sparkle.remove(), 800);
}

document.addEventListener('mousemove', (e) => {
    createSparkleTrail(e.clientX, e.clientY);
});

/* --- 2. LOGO EXPLOSION ENGINE (Landing Page Only) --- */
function triggerLogoExplosion(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');

    if (logoImg) logoImg.classList.add('logo-dissolve');

    // Generate concentrated burst at click point
    for (let i = 0; i < 80; i++) {
        const x = e.clientX || window.innerWidth / 2;
        const y = e.clientY || window.innerHeight / 2;
        createExplosionParticle(x, y);
    }

    // Transport after 1.5 seconds of shimmering
    setTimeout(() => { 
        window.location.href = link.href; 
    }, 1500);
}

function createExplosionParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'sparkle-particle';
    document.body.appendChild(p);
    
    const size = Math.random() * 8 + 4 + 'px';
    const destX = (Math.random() - 0.5) * 450 + 'px';
    const destY = (Math.random() - 0.5) * 450 + 'px';

    p.style.cssText = `position:fixed; width:${size}; height:${size}; left:${x}px; top:${y}px; z-index:9999; pointer-events:none;`;
    p.style.setProperty('--x', destX);
    p.style.setProperty('--y', destY);
    p.style.animation = `sparkle-burst ${Math.random() * 1 + 0.5}s ease-out forwards`;
    
    p.addEventListener('animationend', () => p.remove());
}

/* --- 3. PAGE INITIALIZERS (Detection Logic) --- */
document.addEventListener('DOMContentLoaded', () => {
    // A. Detect Landing Page vs Interior Pages
    const isLanding = document.body.classList.contains('has-overlay');
    const logoLink = document.querySelector('.logo-link');

    // B. Enable Explosion only on Landing Page
    if (isLanding && logoLink) {
        logoLink.addEventListener('click', triggerLogoExplosion);
    }

    // C. Mobile Menu (About, Services, Contact)
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('site-links-menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => menu.classList.toggle('active'));
    }

    // D. Image Rotator (About Page)
    const featureImg = document.getElementById('rotating-feature-img');
    if (featureImg) {
        const images = [
            './images/image1.jpg', './images/image2.jpg', './images/image3.jpg',
            './images/image4.jpg', './images/image5.jpg', './images/image6.jpg',
            './images/image7.jpg', './images/image8.jpg', './images/image9.jpg',
            './images/image10.jpg', './images/image11.jpg', './images/image12.jpg',
            './images/image13.jpg'
        ];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % images.length;
            featureImg.src = images[idx];
        }, 4000);
    }
});