import saludar, {Saludar,PI, usuario} from "./constantes.js";
import {aritmetica as calculosS} from "./aritmetica.js";

console.log("Archivos modulos.js");

//console.log(PI);
console.log(PI, usuario);
console.log(calculosS.sumar(3, 4));
console.log(calculosS.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;

