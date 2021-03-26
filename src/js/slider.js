// Values Slider

const valuesBlock = document.getElementById("about-values")
const valuesBlockDescr = document.getElementById("about-values-descr")
const valuesBlockDots = document.getElementById("about-values-dots")

let activeBlock = 0

const valuesContent = [
  {
    color: "#2DA771",
    description:
      "<b>СДЭК – это МЫ.</b> Мы любим свою работу и делаем ее хорошо. Мы помогаем и поддерживаем друг друга. От каждого из нас зависит результат.",
  },
  {
    color: "#ECC54A",
    description:
      "<b>За посылкой – человек.</b> В каждом отправлении судьба, история, значимое событие для компании, человека и его близких. Именно это определяет все наши действия.",
  },
  {
    color: "#E36373",
    description:
      "<b>Держим слово.</b> Чтобы держать своё слово, мы готовы делать больше, находить нестандартные решения для клиентов коллег и партнеров.",
  },
  {
    color: "#B086B8",
    description:
      "<b>Открытость.</b> Мы открыто делимся нашими достижениями и честно говорим об ошибках. Мы искренни с нашими клиентами и коллегами.",
  },
  {
    color: "#5F95C8",
    description:
      "<b>Становимся лучше.</b> Каждый день мы получаем новые знания, находим новые идеи, возможности и решения. Внедряем их в жизнь.",
  },
]

valuesBlockDots.querySelectorAll("li").forEach((el, index) => {
  el.addEventListener("click", () => {
    activeBlock = index

    valuesBlock.style.backgroundColor = valuesContent[index].color

    valuesBlockDots.querySelectorAll("li").forEach((liEl, liIndex) => {
      liEl.classList.remove("active")

      if (liIndex === activeBlock) {
        liEl.classList.add("active")
      }
    })

    valuesBlockDescr.style.opacity = 0
    setTimeout(() => {
      valuesBlockDescr.innerHTML = valuesContent[index].description
      valuesBlockDescr.style.opacity = 1
    }, 200)
  })
})
