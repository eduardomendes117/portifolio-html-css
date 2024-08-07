const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  if (nav.classList.toggle("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
    header.classList.add("transparent");
  }
});
