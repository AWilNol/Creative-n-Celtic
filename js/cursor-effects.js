console.log("JavaScript file loaded!");
function handleLogoAnimation() {
    // Select the SAWBLADE image specifically for the spin animation
    const sawblade = document.querySelector('.logo-sawblade'); 
    // Select the entire logo WRAPPER div to make it disappear
    const logoWrapper = document.querySelector('.logo-wrapper');
    const entryLink = document.querySelector('.logo-link'); 
    
    if (!sawblade || !entryLink || !logoWrapper) return; // Exit if elements not found

    // Check if the current page is the index.html (landing page)
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('/Creative-n-Celtic/');

    if (isIndexPage) {
        // Landing page: "open" and disappear on click
        entryLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            const destination = this.href;
            
            // 1. Add the spinning class from the CSS file
            sawblade.classList.add('is-spinning');

            // 2. Add a class to the whole wrapper to make it disappear
            // We need to define a CSS transition for this 'disappear' class in style.css
            logoWrapper.classList.add('disappear'); 

            // Wait for the animation (1s defined by 'is-spinning' animation duration) to finish before navigating
            setTimeout(() => {
                window.location.href = destination;
            }, 1000); // 1000ms = 1 second
        });
    } else {
        // Other pages: continuous rotation using the CSS media query
        // This part should work if your media query in style.css is active
    }
}

// --- 1. Ripple Effect Code (Click Wave) ---
document.addEventListener('click', function(e) {
    // Only apply ripple to body clicks, not specific elements if possible
    if (e.target.closest('a') || e.target.closest('button') || e.target.tagName === 'INPUT') {
        // We can add specific logic here if we want ripples on links/buttons
    }
    
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Calculate the size: use the larger of the window width/height to ensure it covers the whole screen
    const size = Math.max(window.innerWidth, window.innerHeight);
    ripple.style.width = ripple.style.height = `${size}px`;

    // Position the center of the ripple div at the click point
    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;

    // Remove the element after the animation finishes
    ripple.onanimationend = () => {
      ripple.remove();
    };
});


// --- 2. Menu Toggle Script for Mobile ---
document.addEventListener('DOMContentLoaded', (event) => {
    // Call the new logo function here on DOMContentLoaded
    handleLogoAnimation(); 

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