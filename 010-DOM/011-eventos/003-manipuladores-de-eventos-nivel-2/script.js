"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

// btn.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.clientX, event.clientY);
// })

// btn.addEventListener("click", (event) => {
//     console.log(1);
// })

// btn.addEventListener("click", (event) => {
//     console.log(2);
// })

// btn.addEventListener("mouseover", (event) => {
//     console.log(3);
// })

btn.addEventListener("click", (event) => {
    body.style.background = "red";
})

btn.addEventListener("mouseleave", (event) => {
    body.style.background = "FFF";
})