// Values Slider Mobile
import Swiper from "swiper/bundle"

const valuesMobileIcons = document.getElementById("about-us__mobile-icons")
const valuesMobileValues = document.getElementById("about-us__mobile-values")

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
})

const valuesColors = ["#2DA771", "#ECC54A", "#E36373", "#B086B8", "#5F95C8"]

let activeBlock = 1

valuesMobileIcons.querySelectorAll("li").forEach((el, index) => {
  el.addEventListener("click", () => {
    swiper.slideTo(1)

    activeBlock = index

    valuesMobileValues.style.background = valuesColors[0]

    valuesMobileIcons.querySelectorAll(".arrow-up").forEach((e, i) => {
      e.style.borderBottom = `10px solid ${valuesColors[0]}`
    })

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

swiper.on("activeIndexChange", function ({ realIndex }) {
  valuesMobileValues.style.background = valuesColors[realIndex]

  valuesMobileIcons.querySelectorAll(".arrow-up").forEach((e, i) => {
    e.style.borderBottom = `10px solid ${valuesColors[realIndex]}`
  })
})
