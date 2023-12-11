"use strict";

const p = document.getElementsByClassName("paragrafo");

console.log(p);

for (let element of p) {
    console.log(element);
}

// O forEach não funciona nesse caso