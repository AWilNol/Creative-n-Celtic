/* --- 1. THE TRAIL: Fixed Mousemove --- */
document.addEventListener('pointermove', (e) => {
    // Pointermove covers mouse and touch; creating 2 sparkles for a smooth trail
    for (let i = 0; i < 2; i++) {
        createSparkle(e.clientX, e.clientY, true);
    }
});

/* --- 2. THE ENGINE: Improved with Safety Removal --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    document.body.appendChild(p);
    
    const size = (Math.random() * (isTrail ? 6 : 12) + 4) + 'px';
    const range = isTrail ? 30 : 500;
    const destX = (Math.random() - 0.5) * range + 'px';
    const destY = (Math.random() - 0.5) * range + 'px';

    p.style.cssText = `position:fixed; width:${size}; height:${size}; left:${x}px; top:${y}px; z-index:100001; pointer-events:none;`;
    p.style.setProperty('--x', destX);
    p.style.setProperty('--y', destY);
    
    // Safety Net: If animation fails to trigger the 'remove', this forces it after 1 second
    setTimeout(() => { if(p.parentElement) p.remove(); }, 1000);
    
    // Standard Cleanup
    p.addEventListener('animationend', () => p.remove());
}

/* --- 3. THE FLOURISH: Massive Logo Explosion --- */
function triggerLogoExplosion(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');

    if (logoImg) {
        // Add the class to the image
        logoImg.classList.add('logo-dissolve');
        
        // THE DAZZLING FIX: This line forces the browser to play the animation immediately
        void logoImg.offsetWidth; 
    }

    // Trigger the 150-particle flourish
    for (let i = 0; i < 150; i++) {
        const x = e.clientX || window.innerWidth / 2;
        const y = e.clientY || window.innerHeight / 2;
        createSparkle(x, y, false);
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
    const menu = document.getElementById('site-links-menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('pointerdown', (e) => {
            e.stopPropagation(); 
            menu.classList.toggle('active');
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