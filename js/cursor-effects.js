console.log("Creative & Celtic Effects Loaded!");

/* --- 1. Cursor & Cloud Sparkles Function --- */
// This function creates the sparkle element and sets its CSS variables
function createSparkle(x, y) {
  const container = document.getElementById('sparkle-container');
  if (!container) return;

  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  
  // Sets the position and size via CSS variables (which are styled with gold in style.css)
  sparkle.style.setProperty('--x', `${x}px`);
  sparkle.style.setProperty('--y', `${y}px`);
  sparkle.style.setProperty('--size', `${Math.random() * 8 + 4}px`);
  
  container.appendChild(sparkle);
  // Removes the sparkle after its animation finishes
  setTimeout(() => sparkle.remove(), 800);
}

/* --- 2. Live Mousemove Listener (Always Active) --- */
// This calls the createSparkle function every time the mouse moves
document.addEventListener('mousemove', (e) => {
  createSparkle(e.clientX, e.clientY);
});

/* --- 3. Logo Cloud Transition (Index Page Only) --- */
function triggerLogoDisintegrate(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const logo = link.querySelector('.logo-static');

    // 1. Instantly hide the logo with a smooth fade
    logo.style.opacity = '0';
    logo.style.pointerEvents = 'none';

    // 2. Create a temporary container for the gold dust library
    const dustContainer = document.createElement('div');
    dustContainer.id = 'logo-particles';
    dustContainer.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:100; pointer-events:none;";
    document.body.appendChild(dustContainer);

    // 3. Trigger the flowing gold dust (Particles.js) - Uses your #D4AF37 gold
    if (typeof particlesJS !== 'undefined') {
        particlesJS('logo-particles', {
            "particles": { "number": { "value": 150 }, "color": { "value": "#D4AF37" }, "opacity": { "value": 0.8, "random": true }, "move": { "enable": true, "speed": 4, "direction": "top", "out_mode": "out" } },
            "interactivity": { "events": { "onhover": { "enable": false } } }
        });
    }

    // 4. Navigate after 1.5 seconds of sparkles
    setTimeout(() => {
        window.location.href = link.href;
    }, 1500); 
}

/* --- 4. Event Initializers & Image Rotator (Runs once on page load) --- */
document.addEventListener('DOMContentLoaded', () => {
    // Logo Click for Landing Page
    const logoLink = document.querySelector('.logo-link');
    if (logoLink && (window.location.pathname.includes('index.html') || window.location.pathname === '/')) {
        logoLink.addEventListener('click', triggerLogoDisintegrate);
    }

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
