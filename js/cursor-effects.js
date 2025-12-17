console.log("Creative & Celtic Effects Loaded!");

// Optimized 2025 Cursor Trail
document.addEventListener('mousemove', (e) => {
  const container = document.getElementById('sparkle-container');
  if (!container) return;

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  
  // Set the CSS variables
  sparkle.style.setProperty('--x', `${e.clientX}px`);
  sparkle.style.setProperty('--y', `${e.clientY}px`);
  sparkle.style.setProperty('--size', `${Math.random() * 8 + 4}px`);
  
  container.appendChild(sparkle);
  
  // Clean up to prevent memory leaks
  setTimeout(() => sparkle.remove(), 800);
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  
  // Set variables instead of direct styles
  sparkle.style.setProperty('--x', `${x}px`);
  sparkle.style.setProperty('--y', `${y}px`);
  sparkle.style.setProperty('--size', `${Math.random() * 8 + 4}px`);
  
  document.getElementById('sparkle-container').appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
}

// This function cleans up the logo and triggers your "About" navigation
function triggerLogoDisintegrate(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logo = link.querySelector('.logo-static');

    // 1. Instantly hide the logo with a smooth fade
    logo.style.opacity = '0';
    logo.style.pointerEvents = 'none';

    // 2. Create a dynamic container for the Particles.js dust
    const dustContainer = document.createElement('div');
    dustContainer.id = 'logo-particles';
    // Position it exactly over where the logo was
    dustContainer.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:100; pointer-events:none;";
    document.body.appendChild(dustContainer);

    // 3. Spawn initial dense cloud using your custom sparkles
    const rect = logo.getBoundingClientRect();
    for (let i = 0; i < 30; i++) {
        createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    // 4. Trigger the flowing gold dust (Particles.js)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('logo-particles', {
            "particles": {
                "number": { "value": 150 },
                "color": { "value": "#D4AF37" }, // Your luxury gold
                "opacity": { "value": 0.8, "random": true },
                "size": { "value": 3, "random": true },
                "move": { "enable": true, "speed": 4, "direction": "top", "out_mode": "out" }
            },
            "interactivity": { "events": { "onhover": { "enable": false } } }
        });
    }

    // 5. Navigate to the next page after the animation plays out
    setTimeout(() => {
        window.location.href = link.href;
    }, 1500); 
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