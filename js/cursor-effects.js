/* --- 1. THE ENGINE: Create Sparkle (Gold Trail & Mixed Explosion) --- */
function createSparkle(x, y, isTrail) {
    const p = document.createElement('div');
    p.className = isTrail ? 'sparkle' : 'sparkle-particle';
    
    // VARIANT BRIGHTNESS: The luxury touch
    // Trail is subtle (1-1.5x), Explosion is brilliant (1-4x)
    const intensity = isTrail ? Math.random() * 0.5 + 1 : Math.random() * 3 + 1;
    p.style.filter = `brightness(${intensity})`;
    
    // Coordinates: Using fixed positioning logic
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    
    // RANDOMIZE SIZE
    const size = (Math.random() * (isTrail ? 4 : 12) + 2) + 'px';
    p.style.width = size;
    p.style.height = size;

    // THE COLOR PALETTE
    if (!isTrail) {
        // Logo Explosion: Rainbow & Gold Mix
        if (Math.random() > 0.5) {
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 100%, 75%)`;
            p.style.background = color;
            p.style.boxShadow = `0 0 15px ${color}`;
        } else {
            const gold = '#facc15';
            p.style.background = `radial-gradient(circle, #fff 30%, ${gold} 100%)`;
            p.style.boxShadow = `0 0 20px ${gold}`;
        }
    } else {
        // Cursor Trail: Pure Sparkly Gold
        p.style.background = '#facc15';
        p.style.boxShadow = '0 0 8px #facc15';
    }

    // TRAJECTORY MATH
    const range = isTrail ? 15 : 450; // Explosion flies much further
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * range;
    p.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    p.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    
    document.body.appendChild(p);

    // CLEANUP: Faster removal for performance
    p.addEventListener('animationend', () => p.remove());
    setTimeout(() => { if(p.parentElement) p.remove(); }, 1200);
}

/* --- 2. THE TRAIL: Smooth Mouse Movement --- */
document.addEventListener('pointermove', (e) => {
    // clientX/Y ensures particles stay with the cursor even if page scrolls
    createSparkle(e.clientX, e.clientY, true);
    // Add a secondary "echo" particle for extra shimmer
    if (Math.random() > 0.7) createSparkle(e.clientX, e.clientY, true);
});

/* --- 3. THE FLOURISH: Radial Logo Explosion --- */
function triggerLogoExplosion(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logoImg = link.querySelector('.logo-static');

    if (logoImg) {
        logoImg.classList.add('logo-dissolve');
        
        const rect = logoImg.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 400-500 particles is the "sweet spot" for 2025 performance
        for (let i = 0; i < 450; i++) {
            createSparkle(centerX, centerY, false);
        }

        // Redirect after the visual flash (0.7s matches our CSS)
        setTimeout(() => { 
            window.location.href = link.href; 
        }, 700);
    }
}

/* --- 4. INITIALIZERS --- */
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
        ['click', 'touchstart'].forEach(type => {
            menuToggle.addEventListener(type, (e) => {
                e.stopPropagation();
                siteLinksMenu.classList.toggle('active');
            }, { passive: true });
        });
    }
});

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