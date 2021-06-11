const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
  menu.classList.add("is-active");
  menuClose.classList.add("is-active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuClose.classList.remove("is-active");
});