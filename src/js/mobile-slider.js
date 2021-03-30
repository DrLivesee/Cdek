// Values Slider

const valuesMobileIcons = document.getElementById("about-us__mobile-icons")
const valuesMobileValues = document.getElementById("about-us__mobile-values")

let activeBlock = 0

valuesMobileIcons.querySelectorAll("li").forEach((el, index) => {
  el.addEventListener("click", () => {
    activeBlock = index

    valuesMobileIcons.querySelectorAll("li").forEach((e, i) => {
      e.classList.remove("active")

      if (i === activeBlock) {
        e.classList.add("active")
      }
    })

    valuesMobileValues.querySelectorAll("li").forEach((valEl, valIndex) => {
      valEl.classList.remove("active")

      if (valIndex === activeBlock) {
        valEl.classList.add("active")
      }
    })
  })
})
