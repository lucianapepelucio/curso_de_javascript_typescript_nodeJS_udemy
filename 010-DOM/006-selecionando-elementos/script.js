"use strict";

const p = document.getElementsByTagName("p"); // Não busca por classe e nem por id

console.log(p);

for (let element of p) {
    console.log(element);
}

// O forEach, map, não funcionam nesse caso também.