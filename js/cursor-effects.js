console.log("JavaScript file loaded!");

// --- Ripple Effect Code ---
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Position the ripple where the click occurred relative to the BODY/Viewport
    // We adjust for half the initial size (which is defined in the CSS animation start as 'scale(0)', but let's assume a small starting point or default)
    // The CSS handles the scaling now.
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // Remove the element after the animation finishes
    ripple.onanimationend = () => {
      ripple.remove();
    };
});
// ----------------------------


// --- Menu Toggle Script for Interior Pages ---
document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }
});

// --- Automatic Image Rotator Code ---
(function() {
    // 1. List all your gallery images here in order
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
        setInterval(changeImage, 4000);
    }
})();