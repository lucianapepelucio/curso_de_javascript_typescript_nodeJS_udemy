"use strict";

/*
* textContent => retorna o texto com formatações, mas sem os elementos HTML
* innerText => retorna somente o texto, sem formatações ou elementos HTML
*/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

//p.textContent = "Luciana Pepe";
p.innerText = "Luciana Pepe";