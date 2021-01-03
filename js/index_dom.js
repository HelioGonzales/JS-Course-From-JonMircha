import burgerMenu from "./dom/burger_menu.js";
import {digitalClock, alaram} from "./dom/watch.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    burgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});
