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
    // Get the HTML element where the image will rotate (from Step 1)
    var featureImgElement = document.getElementById('rotating-feature-img');

    function changeImage() {
        // Increment the index to the next image, wrapping around to 0 when it reaches the end
        imageIndex = (imageIndex + 1) % images.length; 
        
        // Update the source attribute of the HTML image tag
        featureImgElement.src = images[imageIndex];
    }

    // Set the image to change every 4000 milliseconds (4 seconds) if the element exists
    if (featureImgElement) {
        setInterval(changeImage, 4000);
    }
})();

document.addEventListener('click', function(e) {
    // Create the ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Position the ripple where the click occurred
    // We adjust for half the size of the initial ripple to center it on the cursor
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    // Remove the ripple element after the animation finishes
    ripple.onanimationend = () => {
        document.body.removeChild(ripple);
    };
});