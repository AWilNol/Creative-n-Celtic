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
    
    const size = (Math.random() * (isTrail ? 6 : 12) + 4) + 'px';
    const range = isTrail ? 40 : 500;
    const destX = (Math.random() - 0.5) * range + 'px';
    const destY = (Math.random() - 0.5) * range + 'px';

    p.style.cssText = `position:fixed; width:${size}; height:${size}; left:${x}px; top:${y}px; z-index:100001; pointer-events:none;`;
    p.style.setProperty('--x', destX);
    p.style.setProperty('--y', destY);
    
    const duration = Math.random() * (isTrail ? 0.8 : 1.5) + 0.5;
    p.style.animation = `sparkle-burst ${duration}s ease-out forwards`;
    
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

    // B. Mobile Menu Toggle (About, Services, Contact)
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');
    if (menuToggle && siteLinksMenu) {
    // Listen for 'pointerdown' for instant mobile response
    menuToggle.addEventListener('pointerdown', (e) => {
        e.stopPropagation(); // Prevents the sparkle container from interfering
        siteLinksMenu.classList.toggle('active');
    });
}
    // C. Automatic Image Rotator (Restored with all 13 images)
    const featureImg = document.getElementById('rotating-feature-img');
    const images = [
        './images/image1.jpg', './images/image2.jpg', './images/image3.jpg', 
        './images/image4.jpg', './images/image5.jpg', './images/image6.jpg', 
        './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', 
        './images/image10.jpg', './images/image11.jpg', './images/image12.jpg', 
        './images/image13.jpg'
    ];
    let imageIndex = 0;

    if (featureImg && images.length > 0) {
        setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            featureImg.src = images[imageIndex];
        }, 4000);
    }
});