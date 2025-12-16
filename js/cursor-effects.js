console.log("JavaScript file loaded!");
function handleLogoAnimation() {
    const sawblade = document.querySelector('.logo-sawblade'); 
    const logoWrapper = document.querySelector('.logo-wrapper');
    const entryLink = document.querySelector('.logo-link'); 
    
    if (!sawblade || !entryLink || !logoWrapper) return; 

    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.includes('/Creative-n-Celtic/');

    if (isIndexPage) {
        entryLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            const destination = this.href;
            
            // 1. Start the 'unlocking' animation on the sawblade (1 second duration)
            sawblade.classList.add('is-unlocking'); 

            // 2. Wait 1 second for the slide/rotate to finish
            setTimeout(() => {
                // 3. Start the 'disappear' animation on the entire logo wrapper
                logoWrapper.classList.add('disappear'); 
                
                // 4. Wait another 1 second for the fade-out to finish
                setTimeout(() => {
                    window.location.href = destination; // Navigate to the next page
                }, 1000); // Match this to the 'disappear' CSS transition time
                
            }, 1000); // Match this to the 'is-unlocking' CSS animation time
        });
    } else {
        // Other pages: continuous rotation using the CSS media query
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