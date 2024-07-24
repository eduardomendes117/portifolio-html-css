class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

document.addEventListener("DOMContentLoaded", (event) => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const close = document.querySelector(".close");
  const link1 = document.querySelector(".link1")
  const link2 = document.querySelector(".link2")
  const link3 = document.querySelector(".link3")
  const link4 = document.querySelector(".link4")

  link1.addEventListener("click", () => nav.classList.remove("active"));
  link2.addEventListener("click", () => nav.classList.remove("active"));
  link3.addEventListener("click", () => nav.classList.remove("active"));
  link4.addEventListener("click", () => nav.classList.remove("active"));
});