console.log("JavaScript file loaded!");
console.log("Click detected!");
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.body.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    ripple.style.setProperty('--ripple-color', getRandomColor());

    // Position the ripple where the click occurred
    ripple.style.left = `${e.clientX- 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;

    // Remove the element after the animation finishes to keep the code clean
    ripple.onanimationend = () => {
      ripple.remove();
    };
  });