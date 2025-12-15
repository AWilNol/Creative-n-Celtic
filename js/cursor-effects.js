console.log("JavaScript file loaded!");

document.body.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Set a fixed luxury color instead of a random one
    // Using the same gold accent color as in the CSS
    ripple.style.setProperty('--ripple-color', 'rgba(181, 154, 87, 0.5)'); 

    // Position the ripple where the click occurred
    ripple.style.left = `${e.clientX- 40}px`; 
    ripple.style.top = `${e.clientY - 40}px`; 

    // Remove the element after the animation finishes
    ripple.onanimationend = () => {
      ripple.remove();
    };
});
  
// menu-toggle script for interior pages
document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }
});