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
        // 1. Existing white dissolve logic
        logoImg.classList.add('logo-dissolve');
        void logoImg.offsetWidth; // Force re-flow

        // 2. NEW: Trigger rainbow sparkles
        const rect = logoImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create 20–30 rainbow sparkles
        for (let i = 0; i < 30; i++) {
            createRainbowSparkle(centerX, centerY);
        }
    }
}

// Helper function to create individual rainbow sparkles
function createRainbowSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("rainbow-sparkle");
    
    // Randomize rainbow color using HSL
    const hue = Math.floor(Math.random() * 360);
    const size = Math.random() * 8 + 4; // Sparkle size 4px-12px
    
    // Initial styles
    Object.assign(sparkle.style, {
        position: "fixed",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `hsl(${hue}, 100%, 75%)`, // Bright luxury rainbow tones
        borderRadius: "50%",
        boxShadow: `0 0 10px hsl(${hue}, 100%, 80%)`,
        pointerEvents: "none",
        zIndex: "9999"
    });

    document.body.appendChild(sparkle);

    // Animate outward in a random direction
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    
    const animation = sparkle.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), 
                      calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`, 
          opacity: 0 }
    ], {
        duration: 1000 + Math.random() * 500, // Vary speed for "pizazz"
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });

    // Clean up after animation finishes
    animation.onfinish = () => sparkle.remove();
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