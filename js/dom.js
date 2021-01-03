/* console.log(window);
console.log(document);

let texto = "Hola soy Helio Gonzales y estoy estudiando JavaScript";
const hablar = (texto) => 
speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */

/* console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>"); */


/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li")); */





/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "en");
console.log(document.documentElement.lang);

const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.youtube.com/");

console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

// Data Attributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttribute("data-id")); */





/* const $linkDom = document.querySelector(".link-dom");

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = "1.5rem";

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(getComputedStyle($linkDom));


// Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
  
console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */






/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */




/* const $whatIsDOM = document.getElementById("que-es");

let text = `
  <p>
   El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
  </p>
  <p>
   Este provee una representacion estructural del docuento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
  </p>
  <p>
   <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.</mark>
  </p> 
`;

// $whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */




/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */





/* const $figure = document.createElement("figure"),
 $img = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("Animals"),
 $cards = document.querySelector(".cards"),
 $figure2 = document.createElement("figure");


$img.setAttribute("src", "http://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
 $cards.appendChild($figure);


 $figure2.innerHTML = `
 <img src="http://placeimg.com/200/200/people" alt="People">
 <figcaption>People</figcaption>
 `;

 $figure2.classList.add("card");
 $cards.appendChild($figure2);


 const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"], 
  $ul = document.createElement("ul");

  document.write("<h3>Estaciones del año</h3>");
  document.body.appendChild($ul);

  estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
  });

  
  const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
   $ul2 = document.createElement("ul");

   document.write("<h3>Continentes del mundo</h3>");
   document.body.appendChild($ul2);
   //$ul2.innerHTML = "";
   continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


   const meses = [
     "Enero",
     "Febrero",
     "Marzo",
     "Abril",
     "Mayo",
     "Junio",
     "Julio",
     "Agosto",
     "Septiembre",
     "Octubre",
     "Noviembre",
     "Diciembre",
   ],

    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

    meses.forEach(el => {
      const $li = document.createElement("li");
      $li.textContent = el;
      $fragment.appendChild($li);
    });

    document.write("<h3>Meses del año</h3>");
    $ul3.appendChild($fragment);
    document.body.appendChild($ul3); */





    /* const $cards = document.querySelector(".cards"),
     $template = document.getElementById("template-card").content,
     $fragment = document.createDocumentFragment(),
     cardContent = [
       {
         title: "Tecnologia",
         img: "http://placeimg.com/200/200/tech",
       },
       {
        title: "Animales",
        img: "http://placeimg.com/200/200/animals",
       },
       {
        title: "Arquitectura",
        img: "http://placeimg.com/200/200/arch",
       },
       {
        title: "Gente",
        img: "http://placeimg.com/200/200/people",
       },
       {
        title: "Naturaleza",
        img: "http://placeimg.com/200/200/nature",
       }
     ];

     cardContent.forEach(el => {
      $template.querySelector("img").setAttribute("src", el.img);
      $template.querySelector("img").setAttribute("alt", el.title);
      $template.querySelector("figcaption").textContent = el.title;


      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
     });

     $cards.appendChild($fragment); */







     /* const $cards = document.querySelector(".cards"),
      $newCard = document.createElement("figure"),
      $cloneCards = $cards.cloneNode(true);

    $newCard.innerHTML = `
      <img src="http://placeimg.com/200/200/any" alt="Any">
      <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");

    //$cards.replaceChild($newCard, $cards.children[2]);
    //$cards.removeChild($cards.lastElementChild);
     //$cards.insertBefore($newCard, $cards.firstElementChild);
     document.body.appendChild($cloneCards); */






     /* const $cards = document.querySelector(".cards"),
     $newCard = document.createElement("figure");

   let $contentCard = `
     <img src="http://placeimg.com/200/200/any" alt="Any">
     <figcaption></figcaption>
   `;

   $newCard.classList.add("card");

   $newCard.insertAdjacentHTML("beforeend", $contentCard);
   $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
   $cards.insertAdjacentElement("afterbegin", $newCard);

   
  //$cards.prepend($newCard);
  //$cards.append($newCard);
  //$cards.before($newCard);
  //$cards.after($newCard); */





  /* function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
  }

  function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
  }

  const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

  $eventoSemantico.onclick = holaMundo;
  $eventoSemantico.onclick = function (e) {
    alert("Hola Mundo Manejador de Eventos Semanticos");
    console.log(e);
    console.log(event);
  };

  $eventoMultiple.addEventListener("click", holaMundo)
  $eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
  });

  $eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Helio");
  });

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
}

  $eventoRemover.addEventListener("dblclick", removerDobleClick); */





/* const $divsEventos = document.querySelectorAll(".eventos-flujos div"),
 $linkEventos = document.querySelector(".eventos-flujos a");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {
  //Fase burbuja
  div.addEventListener("click", flujoEventos); */
  //div.addEventListener("click", flujoEventos, false);
  //Fase captura
  //div.addEventListener("click", flujoEventos, true);
  /* div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
}); */  

/* $linkEventos.addEventListener("click", (e) => {
  alert("Hola soy Helio Gonzales y estudio programacion");
  e.preventDefault();
  e.stopPropagation();
}); */





function flujoEventos(e) {
  console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if(e.target.matches(".eventos-flujos div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujos a")) {
    alert("Hola soy Helio Gonzales y estudio programacion");
    e.preventDefault();
  }
});
