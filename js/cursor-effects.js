console.log("JavaScript file loaded!");

// --- 1. Ripple Effect Code (Click Wave) ---
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Position the ripple where the click occurred. 
    // The CSS animation handles the scaling and gold color.
    const startSize = 10; 
    ripple.style.left = `${e.clientX - startSize / 2}px`;
    ripple.style.top = `${e.clientY - startSize / 2}px`;

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
// We wrap this in an IIFE function wrapper to keep it clean
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