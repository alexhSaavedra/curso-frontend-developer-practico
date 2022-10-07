const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuListIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuListIcon.addEventListener("click", toggleMobileMenu);
navShoppingCart.addEventListener("click", togleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function togleCarritoAside() {
  aside.classList.toggle("inactive");
}
