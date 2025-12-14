console.log("JavaScript file loaded!");
console.log("Click detected!");
document.body.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Let's assume you want it to work regardless of scroll position:
    const size = 100; // Match the CSS width/height
    const x = e.clientX - (size / 2);
    const y = e.clientY - (size / 2);
// Use CSS transform for positioning too, rather than top/left properties, for slightly better performance.
    ripple.style.transform = `translate(${x}px, ${y}px) scale(0.1)`;
    // Remove the element after the animation finishes to keep the code clean
    ripple.onanimationend = () => {
      ripple.remove();
    };
  });