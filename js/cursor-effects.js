console.log("Creative & Celtic Effects Loaded!");

// --- 1. Cursor Sparkles (MOUSEMOVE) ---
document.addEventListener('mousemove', (e) => {
  const container = document.getElementById('sparkle-container');
  if (!container) return; 
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  const size = Math.random() * 5 + 2;
  sparkle.style.width = sparkle.style.height = `${size}px`;
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});


// --- 2. Logo Gold Dust Transition (The "Disappearing" Effect for Index Page ONLY) ---
function triggerGoldDustEffect(logoLink) {
    event.preventDefault(); 
    const logoStatic = logoLink.querySelector('.logo-static');
    if (logoStatic) logoStatic.style.opacity = '0';
    const particleContainer = document.createElement('div');
    particleContainer.id = 'logo-particles';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    logoLink.appendChild(particleContainer);

    // Initialize Particles.js
    particlesJS('logo-particles', {
      "particles": { "number": { "value": 150 }, "color": { "value": ["#FFD700", "#DAA520"] }, "opacity": { "value": 0.8, "random": true }, "size": { "value": 4, "random": true }, "move": { "enable": true, "speed": 2, "direction": "top", "random": true, "out_mode": "out" } },
      "interactivity": { "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } }, "retina_detect": true
    });

    // Navigate after animation plays out (3 seconds)
    setTimeout(() => { window.location.href = logoLink.href; }, 3000); 
}

// --- 3. Setup Logo Interactions on Load ---
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.logo-link'); 
    if (logoLink) {
        // Check if this is the index page by checking the URL path
        const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
        
        if (isIndexPage) {
            // ONLY the Index page logo disappears in a cloud of sparkles
            logoLink.addEventListener('click', () => triggerGoldDustEffect(logoLink));
        } else {
            // All other pages use a simple, single-click gold ripple
            logoLink.addEventListener('mousedown', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = this.getBoundingClientRect();
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        }
    }

    // --- 3. Menu Toggle Script for Mobile (Kept from your original file) ---
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }
});


// --- 4. Automatic Image Rotator Code (Kept from your original file) ---
(function() {
    var images = [
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
        './images/image5.jpg',
        './images/image6.jpg',
        './images/image7.jpg',
        './images/image8.jpg',
        './images/image9.jpg',
        './images/image10.jpg',
        './images/image11.jpg',
        './images/image12.jpg',
        './images/image13.jpg'
    ];

    var imageIndex = 0;
    var featureImgElement = document.getElementById('rotating-feature-img');

    function changeImage() {
        imageIndex = (imageIndex + 1) % images.length;
        if (featureImgElement) {
           featureImgElement.src = images[imageIndex];
        }
    }

    if (featureImgElement) {
        setInterval(changeImage, 4000); // Change every 4 seconds
    }
})();