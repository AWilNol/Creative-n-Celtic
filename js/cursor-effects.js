/* --- 1. THE TRAIL: Mouse Movement --- */
document.addEventListener('pointermove', (e) => {
    for (let i = 0; i < 2; i++) {
        createSparkle(e.clientX, e.clientY, true);
    }
});

/* --- 2. THE ENGINE: Create Sparkle (Gold Trail & Mixed Explosion) --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    document.body.appendChild(p);
    
    const size = (Math.random() * (isTrail ? 6 : 12) + 4) + 'px';
    const range = isTrail ? 30 : 500;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * range;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    // Apply specific colors only if it's the logo explosion
    if (!isTrail) {
        if (Math.random() > 0.5) {
            // Rainbow Sparkle
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 100%, 75%)`;
            p.style.background = color;
            p.style.boxShadow = `0 0 15px ${color}`;
        } else {
            // Gold Sparkle
            const goldColor = '#facc15';
            p.style.background = `radial-gradient(circle, #fff 30%, ${goldColor} 70%, transparent 90%)`;
            p.style.boxShadow = `0 0 20px ${goldColor}`;
        }
    }

    p.style.width = size;
    p.style.height = size;
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    
    p.style.setProperty('--x', `${destX}px`);
    p.style.setProperty('--y', `${destY}px`);
    
    // Safety cleanup
    setTimeout(() => { if(p.parentElement) p.remove(); }, 1500);
    p.addEventListener('animationend', () => p.remove());
}

/* --- 3. THE FLOURISH: Radial Firework Explosion --- */
function triggerLogoExplosion(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');

    if (logoImg) {
        logoImg.classList.add('logo-dissolve');
        void logoImg.offsetWidth; 
        
        const rect = logoImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create the 800-particle explosion mix
        for (let i = 0; i < 800; i++) {
            createSparkle(centerX, centerY, false);
        }

        setTimeout(() => { 
            window.location.href = link.href; 
        }, 1600);
    }
}

/* --- 4. ALL INITIALIZERS --- */
document.addEventListener('DOMContentLoaded', () => {
    const isLanding = document.body.classList.contains('has-overlay');
    const logoLink = document.querySelector('.logo-link');
    if (isLanding && logoLink) {
        logoLink.addEventListener('click', triggerLogoExplosion);
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');
    if (menuToggle && siteLinksMenu) {
    // Add BOTH click and touchstart to ensure it unlocks on all phones
    ['click', 'touchstart'].forEach(type => {
        menuToggle.addEventListener(type, (e) => {
            e.stopPropagation(); // Prevents sparkles from stealing the tap
            siteLinksMenu.classList.toggle('active');
        }, { passive: true });
    });
}

    // Image Rotator (13 Images)
    const featureImg = document.getElementById('rotating-feature-img');
    if (featureImg) {
        const images = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg', './images/image5.jpg', './images/image6.jpg', './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', './images/image10.jpg', './images/image11.jpg', './images/image12.jpg', './images/image13.jpg'];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % images.length;
            featureImg.src = images[idx];
        }, 4000);
    }
});