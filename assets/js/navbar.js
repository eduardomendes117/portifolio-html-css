const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
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