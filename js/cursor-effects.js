console.log("JavaScript file loaded!");

// Function getRandomColor is no longer needed
/* function getRandomColor() { ... } */ 

document.body.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Set a fixed luxury color instead of a random one
    // Using the same gold accent color as in the CSS
    ripple.style.setProperty('--ripple-color', 'rgba(181, 154, 87, 0.5)'); 

    // Position the ripple where the click occurred
    ripple.style.left = `${e.clientX- 40}px`; /* Adjusted for new width/height */
    ripple.style.top = `${e.clientY - 40}px`; /* Adjusted for new width/height */

    // Remove the element after the animation finishes
    ripple.onanimationend = () => {
      ripple.remove();
    };
});

// menu-toggle.js content (keep as is if used on other pages, just ensure variables exist)
document.addEventListener('DOMContentLoaded', (event) => {
    // These elements don't exist on the landing page HTML provided, 
    // so this script won't run its main function here, which is fine.
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }
});