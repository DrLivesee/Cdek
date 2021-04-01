const clickOpen = document.getElementById("main-nav__mobile-open");
const mainNav = document.getElementById("main-nav__mobile");
const heading = document.getElementById("main-contract-heading");
const modalBtn = document.getElementById("main-contract-btn");

let isMobileMenuOpen = false;

clickOpen.addEventListener("click", function () {
    mainNav.classList.toggle("main-nav__mobile--open");
    isMobileMenuOpen = true;
});