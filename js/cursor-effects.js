/* --- 1. THE TRAIL: Shimmering Mousemove Logic --- */
document.addEventListener('mousemove', (e) => {
    // Creates a consistent golden trail behind the cursor
    for (let i = 0; i < 2; i++) {
        createSparkle(e.clientX, e.clientY, true);
    }
});

/* --- 2. THE FLOURISH: 150-Particle Logo Explosion --- */
function triggerLogoExplosion(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');

    if (logoImg) logoImg.classList.add('logo-dissolve');

    // That "66,229 glitter" flourish you requested
    for (let i = 0; i < 150; i++) {
        createSparkle(e.clientX, e.clientY, false);
    }

    setTimeout(() => { 
        window.location.href = link.href; 
    }, 1600);
}

/* --- 3. THE ENGINE: Dynamic Sparkle Generator --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    document.body.appendChild(p);
    
    // Size and Drift range
    const size = (Math.random() * (isTrail ? 6 : 12) + 4) + 'px';
    const range = isTrail ? 20 : 500; // Trail stays tight, Explosion flies wide
    
    const destX = (Math.random() - 0.5) * range + 'px';
    const destY = (Math.random() - 0.5) * range + 'px';

    // Apply the coordinates
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.width = size;
    p.style.height = size;
    
    // Set the drift variables for the CSS animation
    p.style.setProperty('--x', destX);
    p.style.setProperty('--y', destY);
    
    p.addEventListener('animationend', () => p.remove());
}

/* --- 4. ALL INITIALIZERS: Menu, Rotator, & Logo Switch --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Logo Transition Switch (Landing Page Only)
    const isLanding = document.body.classList.contains('has-overlay');
    const logoLink = document.querySelector('.logo-link');
    if (isLanding && logoLink) {
        logoLink.addEventListener('click', triggerLogoExplosion);
    }

    // B. Mobile Menu Toggle - Fixed Brackets
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');
    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('pointerdown', (e) => {
            e.stopPropagation(); 
            siteLinksMenu.classList.toggle('active');
        });
    }

    // C. Mobile Dissolving Touch Spots - Now correctly placed
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        const spot = document.createElement('div');
        spot.className = 'touch-spot';
        spot.style.left = (x - 30) + 'px'; 
        spot.style.top = (y - 30) + 'px';
        document.body.appendChild(spot);

        for (let i = 0; i < 5; i++) {
            createSparkle(x, y, false); 
        }

        spot.addEventListener('animationend', () => spot.remove());
    }, { passive: true });

    // D. Automatic Image Rotator (Restored)
    const featureImg = document.getElementById('rotating-feature-img');
    if (featureImg) {
        const images = [
            './images/image1.jpg', './images/image2.jpg', './images/image3.jpg', 
            './images/image4.jpg', './images/image5.jpg', './images/image6.jpg', 
            './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', 
            './images/image10.jpg', './images/image11.jpg', './images/image12.jpg', 
            './images/image13.jpg'
        ];
        let imageIndex = 0;
        setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            featureImg.src = images[imageIndex];
        }, 4000);
    }
});