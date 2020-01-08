const menuBtn = document.querySelector(".menu-link");
const mobMenu = document.querySelector(".mobile-menu");

let showMenu = false;

menuBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (!showMenu) {
    mobMenu.classList.add("show");
    menuBtn.classList.add("active");
    showMenu = true;
  } else {
    mobMenu.classList.remove("show");
    menuBtn.classList.remove("active");
    showMenu = false;
  }
}
