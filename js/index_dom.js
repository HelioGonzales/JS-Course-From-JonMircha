import burgerMenu from "./dom/burger_menu.js";
import {digitalClock, alarm} from "./dom/watch.js";
import {moveBall, shortcuts} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    burgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/graciosos-alarma-es-tu-mujer-.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 04, 2021 15:44:30", "Feliz Cumpleaños Helio 👽");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/K9ySDiKgEG0" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/K9ySDiKgEG0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/jVGoDGyFkRHPU25JA" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.825190230636!2d-75.76529733575369!3d-14.087494437039238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3010800b101%3A0x136be001d08a4223!2sHuacachina%2011000%2C%20Per%C3%BA!5e0!3m2!1ses!2shk!4v1610014361505!5m2!1ses!2shk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
