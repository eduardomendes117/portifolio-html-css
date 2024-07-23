document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const close = document.querySelector(".close");
    const link1 = document.querySelector(".link1")
    const link2 = document.querySelector(".link2")
    const link3 = document.querySelector(".link3")
    const link4 = document.querySelector(".link4")

    menu.addEventListener("click", () => nav.classList.toggle("active"));
    // close.addEventListener("click", () => nav.classList.remove("active"));
    link1.addEventListener("click", () => nav.classList.remove("active"));
    link2.addEventListener("click", () => nav.classList.remove("active"));
    link3.addEventListener("click", () => nav.classList.remove("active"));
    link4.addEventListener("click", () => nav.classList.remove("active"));
});