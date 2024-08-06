// Aos Animation
AOS.init({
  offset: 200,
  delay: 50,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  anchorPlacement: "top-center",
});

// Loader page 

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector('.pre').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
      document.body.style.overflow = 'auto';
  },);
});