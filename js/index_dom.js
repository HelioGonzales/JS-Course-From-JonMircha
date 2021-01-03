import burgerMenu from "./dom/burger_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    burgerMenu(".panel-btn", ".panel", ".menu a");
});
