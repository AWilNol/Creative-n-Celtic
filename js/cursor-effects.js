console.log("Creative & Celtic Effects Loaded!");
/* 1. STABILIZE THE VIEWPORT */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Stops horizontal shaking */
  width: 100%;
  height: 100%;
}

/* 2. THE SPARKLE CONTAINER (Crucial Fix) */
#sparkle-container {
  position: fixed; /* Fixes it to the screen, not the page content */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Mouse clicks go THROUGH the sparkles */
  z-index: 99999;
}

/* 3. THE SPARKLES */
.sparkle {
  position: fixed;
  background: radial-gradient(circle, #FFD700 20%, transparent 80%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: sparkleFade 0.8s ease-out forwards;
  pointer-events: none;
}

@keyframes sparkleFade {
  0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.1); }
}

    // --- 3. Menu Toggle Script for Mobile (Kept from your original file) ---
    const menuToggle = document.getElementById('menu-toggle');
    const siteLinksMenu = document.getElementById('site-links-menu');

    if (menuToggle && siteLinksMenu) {
        menuToggle.addEventListener('click', () => {
            siteLinksMenu.classList.toggle('active');
        });
    }
});


// --- 4. Automatic Image Rotator Code (Kept from your original file) ---
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
        if (featureImgElement) {
           featureImgElement.src = images[imageIndex];
        }
    }

    if (featureImgElement) {
        setInterval(changeImage, 4000); // Change every 4 seconds
    }
})();