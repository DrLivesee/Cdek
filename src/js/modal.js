// Main Overlay and Modal

const overlay = document.getElementById("overlay")
const overlayBlocker = document.getElementById("overlay-blocker")
const bodyWrapper = document.getElementById("body-wrapper")
const links = document.querySelectorAll(".modal-btn")
const popup = document.getElementById("modal-content")
const close = document.getElementById("modal-content-close")

let isModalOpen = false

const closeModal = () => {
  isModalOpen = false
  bodyWrapper.classList.remove("body-wrapper--blurred")
  popup.classList.remove("modal-content-show")
  overlay.classList.remove("overlay--open")
}

const openModal = () => {
  isModalOpen = true
  bodyWrapper.classList.add("body-wrapper--blurred")
  popup.classList.add("modal-content-show")
  overlay.classList.add("overlay--open")
}

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault()
    openModal()
  })
})

close.addEventListener("click", function (event) {
  event.preventDefault()
  closeModal()
})

overlayBlocker.addEventListener("click", function (event) {
  event.preventDefault()
  closeModal()
})

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (isModalOpen) {
      closeModal()
    }
  }
})
