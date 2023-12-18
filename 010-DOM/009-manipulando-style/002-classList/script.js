"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active", "Teste1");
h1.classList.add("Teste2");
//h1.classList.remove("Teste2");

h1.classList.toggle("Teste2"); 
// já que a classe Teste2 existe, o toggle remove ela, caso ela não existisse, ela seria acrescentada

if (h1.classList.contains("active")) {
    //alert("Existe a classe active");
}

console.log(h1);