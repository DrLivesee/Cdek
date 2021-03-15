var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
var link = document.querySelector(".btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-open");
    overlay.classList.add("no-active")
});



close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-open");
    overlay.classList.remove("no-active")
});

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("overlay-open");
            overlay.classList.remove("no-active")
        }
    }
});