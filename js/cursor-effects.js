/* --- 1. THE TRAIL: Fixed Mousemove --- */
document.addEventListener('pointermove', (e) => {
    // Pointermove covers mouse and touch; creating 2 sparkles for a smooth trail
    for (let i = 0; i < 2; i++) {
        createSparkle(e.clientX, e.clientY, true);
    }
});

/* --- 2. THE ENGINE: Improved with Safety Removal --- */
/* --- 2. THE ENGINE: Firework Streaks (Gold & Rainbow) --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    // Using a specific class for the firework effect
    p.className = isTrail ? 'sparkle' : 'sparkle-streak';
    document.body.appendChild(p);
    
    // Randomize Colors: Gold vs Rainbow
    /* --- 2. THE ENGINE: Firework Sparkles (Gold & Rainbow dots) --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    document.body.appendChild(p);
    
    // 1. Size and range logic
    const size = (Math.random() * (isTrail ? 6 : 12) + 4) + 'px';
    const range = isTrail ? 30 : 500;
    
    // 2. Firework Math: Calculate radial direction
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * range;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    // 3. THE COLOR MIX: Only for the Logo Explosion
    if (!isTrail) {
        if (Math.random() > 0.5) {
            // RAINBOW: Pick a random hue
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 100%, 75%)`;
            p.style.background = color;
            p.style.boxShadow = `0 0 15px ${color}`;
        } else {
            // GOLD: Use your signature luxury gold
            const goldColor = '#facc15';
            p.style.background = `radial-gradient(circle, #fff 30%, ${goldColor} 70%, transparent 90%)`;
            p.style.boxShadow = `0 0 20px ${goldColor}`;
        }
    }

    // 4. Set final properties
    p.style.width = size;
    p.style.height = size;
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    
    p.style.setProperty('--x', `${destX}px`);
    p.style.setProperty('--y', `${destY}px`);
    
    // 5. High-Performance Safety Removal
    setTimeout(() => { if(p.parentElement) p.remove(); }, 1300);
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
    }

    // Capture the center of the logo for the firework launch point
    const rect = logoImg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Trigger 800 particles in a burst
    for (let i = 0; i < 800; i++) {
        createSparkle(centerX, centerY, false);
    }

    setTimeout(() => { 
        window.location.href = link.href; 
    }, 1600);
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