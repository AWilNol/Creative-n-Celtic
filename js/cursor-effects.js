console.log("JavaScript file loaded!");
console.log("Click detected!");
document.body.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    // Position the ripple where the click occurred
    ripple.style.left = `${e.clientX- 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;

    // Remove the element after the animation finishes to keep the code clean
    ripple.onanimationend = () => {
      ripple.remove();
    };
  });