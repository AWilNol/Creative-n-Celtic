// JavaScript file: cursor-effects.js

console.log("JavaScript file loaded!");

// --- 1. Ripple Effect Code (Click Wave) ---
// ... (Menu Toggle and Image Rotator code remains the same as before) ...
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Position the TOP-LEFT corner of the 80px ripple div at the click point
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // Remove the element after the animation finishes
    ripple.onanimationend = () => {
      ripple.remove();
    };
});


// --- 2. Menu Toggle Script for Mobile ---
document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active'); 
        });
    }
});


// --- 3. Automatic Image Rotator Code ---
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
        featureImgElement.src = images[imageIndex];
    }
    
    if (featureImgElement) {
        setInterval(changeImage, 4000); // Change every 4 seconds
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const entryLink = document.querySelector('.logo-link'); 
    const logoWrapper = document.querySelector('.logo-wrapper'); // Target the wrapper for the animation

    if (entryLink && logoWrapper) {
        entryLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            const destination = this.href;
            
            // Start the unlocking animation immediately on the whole wrapper
            logoWrapper.classList.add('unlocking');

            // Wait for the animation to finish (1 second) before navigating
            setTimeout(() => {
                window.location.href = destination;
            }, 1000);
        });
    }
});