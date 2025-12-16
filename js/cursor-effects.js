console.log("JavaScript file loaded!");

console.log("JavaScript file loaded!");

// Reusable function for the Gold Dust Effect (called by both index/inner pages)
function triggerGoldDustEffect(logoLink) {
    if (logoLink.dataset.enteredSite === 'true') return;
    logoLink.dataset.enteredSite = 'true';

    event.preventDefault(); // Stop immediate navigation

    // Fade out the static logo parts visually
    const logoStatic = logoLink.querySelector('.logo-static');
    const sawblade = logoLink.querySelector('.logo-sawblade'); 
    if (logoStatic) logoStatic.style.opacity = '0';
    if (sawblade) sawblade.style.opacity = '0';

    // Add temporary container for particles where the logo is
    const particleContainer = document.createElement('div');
    particleContainer.id = 'logo-particles';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    logoLink.appendChild(particleContainer);

    // Initialize Particles.js with a 'smoke-like' gold dust config
    particlesJS('logo-particles', {
      "particles": {
        "number": { "value": 150, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": ["#FFD700", "#DAA520", "#FFFACD", "#E6BE8A"] },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.8, 
            "random": true, 
            "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false } /* Slower fade-out speed */
        },
        "size": { "value": 4, "random": true },
        "line_linked": { "enable": false },
        "move": { 
            "enable": true, 
            "speed": 2, /* Slower movement for smoke effect */
            "direction": "top", 
            "random": true, 
            "straight": false, 
            "out_mode": "out", 
            "bounce": false, 
            "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
        }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
      "retina_detect": true
    });

    // Clean up particles and navigate after animation finishes (approx 3 seconds)
    setTimeout(() => {
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom.pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        particleContainer.remove();
        window.location.href = logoLink.href; // Navigate to the next page
    }, 3000); // Increased timeout to 3 seconds for the smoke effect to play out
}

// Function to set up logo interactions based on page
function setupLogoInteractions() {
    const logoLink = document.querySelector('.logo-link') || document.querySelector('.logo a'); // Target the link in either structure
    if (!logoLink) return;

    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('/Creative-n-Celtic/');

    if (isIndexPage) {
        // Index page behavior: Just wait for the click to trigger dust and navigate
        logoLink.addEventListener('click', () => triggerGoldDustEffect(logoLink));
    } else {
        // Inner page behavior: "Sit pretty" glow and trigger dust on click
        const logoWrapper = logoLink.closest('.logo-wrapper') || logoLink.closest('.logo');
        if (logoWrapper) {
            // 1. Add the "sitting" effect via CSS class (defined in style.css)
            logoWrapper.classList.add('logo-sits-pretty'); 
            
            // 2. Add the click handler to trigger the same dust effect and navigate
            logoLink.addEventListener('click', () => {
                logoWrapper.classList.remove('logo-sits-pretty'); // Stop the glow when clicked
                triggerGoldDustEffect(logoLink);
            });
        }
    }
}


// --- 1. Ripple Effect Code (Click Wave) --- 
document.addEventListener('click', function(e) {
    // Only apply ripple to body clicks that aren't the logo link itself
    if (e.target.closest('.logo-link') || e.target.closest('.logo a')) return;

    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    const size = Math.max(window.innerWidth, window.innerHeight);
    ripple.style.width = ripple.style.height = `${size}px`;

    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;

    ripple.onanimationend = () => {
      ripple.remove();
    };
});


// --- 2. Menu Toggle Script for Mobile --- 
document.addEventListener('DOMContentLoaded', (event) => {
    // Call the new logo function here on DOMContentLoaded
    setupLogoInteractions(); // <-- Function call updated

    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active'); 
        });
    }
});


// --- 3. Automatic Image Rotator Code --- (Kept from your code)
(function() {
    var images = [
        './images/image1.jpg', /* Make sure these images exist! */
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