const clickOpen = document.getElementById("main-nav__mobile-open")
const mainNav = document.getElementById("main-nav__mobile")
const heading = document.getElementById("main-contract-heading")
const modalBtn = document.getElementById("main-contract-btn")
const mobileNavLinks = document.querySelectorAll(".main-nav__mobile a")

const toggleMenu = () => {
  mainNav.classList.toggle("main-nav__mobile--open")
  heading.classList.toggle("heading-opacity")
  modalBtn.classList.toggle("btn-opacity")
}

clickOpen.addEventListener("click", toggleMenu)

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu)
})
