window.onscroll = onScroll;

function onScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.classList.remove("scroll-top");
  } else {
    document.body.classList.add("scroll-top");
  }
} 