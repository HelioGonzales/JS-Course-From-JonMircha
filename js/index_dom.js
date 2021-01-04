import burgerMenu from "./dom/burger_menu.js";
import {digitalClock, alarm} from "./dom/watch.js";
import {moveBall, shortcuts} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    burgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/graciosos-alarma-es-tu-mujer-.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 04, 2021 15:44:30", "Feliz Cumpleaños Helio 👽");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});
