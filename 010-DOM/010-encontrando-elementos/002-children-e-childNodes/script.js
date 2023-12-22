"use strict";

const container = document.querySelector(".container");

console.log(container.children); // HTMLCollection não é iterável
console.log(container.childNodes); // Nodelist - é iterável

// Para conseguir iterar usando o children:

const children = Array.from(container.children);
// console.log(children);

children.forEach((res) => {
    console.log(res);
});