// File Button Handler
const realFileBtn = document.getElementById("real-file")
const customBtn = document.getElementById("custom-button")
const customTxt = document.getElementById("custom-text")

realFileBtn.addEventListener("change", (event) => {
  if (event.target.files.length > 0) {
    const file = event.target.files[0]

    customTxt.innerHTML = file.name
  } else {
    customTxt.innerHTML = "Реквизиты"
  }
})
