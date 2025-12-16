console.log("JavaScript file loaded!");

// --- NEW Logo Animation Code (Gold Dust) ---
// This will run specifically for the logo-link on the index page
function setupGoldDustLogoEffect() {
    const logoLink = document.querySelector('.logo-link');
    const logoStatic = document.querySelector('.logo-static');
    // Ensure this only runs on the index page where these elements exist and intent is to navigate home
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('/Creative-n-Celtic/');

    if (!logoLink || !isIndexPage) return; 

    let enteredSite = false;

    logoLink.addEventListener('click', function(event) {
        if (enteredSite) return;

        event.preventDefault(); // Stop immediate navigation
        enteredSite = true;

        // Fade out the static logo parts visually
        if (logoStatic) logoStatic.style.opacity = '0';
        const sawblade = document.querySelector('.logo-sawblade'); // Ensure we grab sawblade if present
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

        // Initialize Particles.js (Assumes you added the script tag in HTML)
        particlesJS('logo-particles', {
          "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#FFD700", "#DAA520", "#FFFACD", "#E6BE8A"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 5, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
          },
          "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
          "retina_detect": true
        });

        // Clean up particles and navigate after animation finishes (approx 2 seconds)
        setTimeout(() => {
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom.pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
            particleContainer.remove();
            window.location.href = logoLink.href; // Navigate to the next page
        }, 2000);
    });
}


// --- 1. Ripple Effect Code (Click Wave) --- (KEPT FROM YOUR CODE)
document.addEventListener('click', function(e) {
    if (e.target.closest('a') || e.target.closest('button') || e.target.tagName === 'INPUT') {
        // We can add specific logic here if we want ripples on links/buttons
    }
    
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


// --- 2. Menu Toggle Script for Mobile --- (KEPT FROM YOUR CODE)
document.addEventListener('DOMContentLoaded', (event) => {
    // Call the new logo function here on DOMContentLoaded
    setupGoldDustLogoEffect(); // <-- UPDATED function call

    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active'); 
        });
    }
});


// --- 3. Automatic Image Rotator Code --- (KEPT FROM YOUR CODE)
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