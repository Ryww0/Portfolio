const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

function navMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
burger.addEventListener("click", navMenu);
