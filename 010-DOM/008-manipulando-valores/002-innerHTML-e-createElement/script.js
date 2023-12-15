"use strict";

/*
* innerHTML => retorna o texto, com formatações e com elementos HTML
* createElement => cria um elemento HTML - a performance é melhor
 */

const div = document.querySelector("div");
//console.log(1, div);

//div.innerHTML = "<strong>Esse é o meu texto alterado!</strong>"

//div.innerHTML += "<strong>Esse é o meu texto alterado!</strong>"
//div.innerHTML = `${div.innerHTML} <strong>Esse é o meu texto alterado!</strong>`
//console.log(2, div);

const elementUl = document.createElement("ul");
console.log(elementUl);

[1, 2, 3].forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);