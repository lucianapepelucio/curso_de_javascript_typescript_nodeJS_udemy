"use strict";

const h1 = document.querySelector("h1"); // tag HTML5
const p = document.querySelector("p"); // Pegou o primeiro elemento que tem a tag p
const classP = document.querySelector(".paragrafo"); 
const idP = document.querySelector("#paragrafo"); 

const classP2 = document.querySelector(".paragrafo strong"); // pegar o strong da classe paragrafo

console.log(h1);
console.log(p);
console.log(classP);
console.log(idP);
console.log(classP2);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
    title.innerText = timer;
    timer++;
}, 1000);