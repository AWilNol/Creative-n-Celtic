/* --- CREATIVE & CELTIC MAGIC 2025 --- */
const sparkleContainer = document.getElementById('sparkle-container');

function createSparkle(x, y, isTrail) {
    if (!sparkleContainer) return;
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    
    // Position relative to the fixed container
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    
    const size = isTrail ? (Math.random() * 4 + 2) : (Math.random() * 12 + 4);
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    const range = isTrail ? 25 : 350; 
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * range;
    p.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    p.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    
    sparkleContainer.appendChild(p);
    setTimeout(() => p.remove(), 800);
}

// 1. Trail Logic
document.addEventListener('pointermove', (e) => {
    createSparkle(e.clientX, e.clientY, true);
    if (Math.random() > 0.8) createSparkle(e.clientX, e.clientY, true);
});

// 2. Explosion Logic
function triggerLogoExplosion(e) {
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');
    if (logoImg && !logoImg.classList.contains('logo-dissolve')) {
        e.preventDefault();
        logoImg.classList.add('logo-dissolve');
        const rect = logoImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 120; i++) {
            setTimeout(() => createSparkle(centerX, centerY, false), i * 3);
        }
        setTimeout(() => { window.location.href = link.href; }, 850);
    }
}

// 3. Initialize & Menu Fix
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.logo-link').forEach(link => {
        link.addEventListener('click', triggerLogoExplosion);
    });

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('site-links-menu');
    if (menuToggle && menu) {
        menuToggle.onclick = () => menu.classList.toggle('active');
    }

    // Image Rotator Fix
    const featureImg = document.getElementById('rotating-feature-img');
    if (featureImg) {
        const images = Array.from({length: 13}, (_, i) => `./images/image${i+1}.jpg`);
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % images.length;
            featureImg.src = images[idx];
        }, 4000);
    }
});