console.log("Creative & Celtic Effects Loaded!");
/* --- 1. MOUSE TRAIL (Always Active) --- */
// This function creates the shimmer that follows your cursor
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
  setTimeout(() => sparkle.remove(), 800);
}

document.addEventListener('mousemove', (e) => {
  createSparkleTrail(e.clientX, e.clientY);
});

/* --- 2. LOGO EXPLOSION (Index Page Only) --- */
const logoLink = document.querySelector('.logo-link');
const mainLogo = document.getElementById('main-logo');

function triggerLogoExplosion(e) {
    // Only respond to left clicks or Enter/Space keys
    if (e.type === 'pointerdown' && e.button !== 0) return;
    if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
    
    e.preventDefault();

    // 1. Make the logo dissolve into the background
    if (mainLogo) {
        mainLogo.classList.add('logo-dissolve');
        mainLogo.style.pointerEvents = 'none';
    }

    // 2. Get click/touch location (or logo center if using keyboard)
    const rect = mainLogo ? mainLogo.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    // 3. Create the 60-particle shimmer burst
    for (let i = 0; i < 60; i++) {
        createExplosionParticle(x, y);
    }

    // 4. Transport to About page after the "mesmerizing moment"
    setTimeout(() => {
        window.location.href = logoLink.href || '/about';
    }, 1500);
}

// Sparkle Particle Engine for the explosion
function createExplosionParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'sparkle-particle';
  document.body.appendChild(particle);

  // Style and randomize the "dance" directions
  const size = Math.random() * 8 + 4 + 'px';
  const destinationX = (Math.random() - 0.5) * 400 + 'px';
  const destinationY = (Math.random() - 0.5) * 400 + 'px';

  particle.style.cssText = `
    position: fixed;
    width: ${size};
    height: ${size};
    left: ${x}px;
    top: ${y}px;
    z-index: 9999;
    pointer-events: none;
  `;
  
  particle.style.setProperty('--x', destinationX);
  particle.style.setProperty('--y', destinationY);
  particle.style.animation = `sparkle-burst ${Math.random() * 1 + 0.5}s ease-out forwards`;

  particle.addEventListener('animationend', () => particle.remove());
}

// Attach the events only if we are on the page with the logo link
if (logoLink) {
    logoLink.addEventListener('pointerdown', triggerLogoExplosion);
    logoLink.addEventListener('keydown', triggerLogoExplosion);
}

/* --- 3. UNIFIED PAGE INITIALIZERS (Runs once on load) --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Logo Transition (Index Page Only)
    const logoLink = document.querySelector('.logo-link');
    // Ensure this only runs on your homepage to avoid errors on other pages
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    
    if (logoLink && isHomePage) {
        // We use the consolidated trigger function we built earlier
        logoLink.addEventListener('pointerdown', triggerLogoExplosion);
        logoLink.addEventListener('keydown', triggerLogoExplosion);
    }

    // B. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const siteLinks = document.querySelector('.site-links');
    if (menuToggle && siteLinks) {
        menuToggle.addEventListener('click', () => {
            siteLinks.classList.toggle('active');
        });
    }

    // C. Automatic Image Rotator
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

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');
    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }

    // Automatic Image Rotator
    const images = [ './images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg', './images/image5.jpg', './images/image6.jpg', './images/image7.jpg', './images/image8.jpg', './images/image9.jpg', './images/image10.jpg', './images/image11.jpg', './images/image12.jpg', './images/image13.jpg' ];
    let imageIndex = 0;
    const featureImgElement = document.getElementById('rotating-feature-img');

    if (featureImgElement) {
        setInterval(() => {
            imageIndex = (imageIndex + 1) % images.length;
            featureImgElement.src = images[imageIndex];
        }, 4000);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Select the button that will be clicked (the hamburger icon)
    const menuToggle = document.querySelector('.menu-toggle');
    
    // 2. Select the container holding your navigation links
    const siteLinks = document.querySelector('.site-links');
    
    // 3. Add an event listener to the button
    if (menuToggle && siteLinks) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the links container
            // This switches it between 'display: none' and 'display: block'
            siteLinks.classList.toggle('active');
        });
    }
});