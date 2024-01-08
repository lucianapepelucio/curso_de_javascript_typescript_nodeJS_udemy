"use strict";

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const { target } = event;
    const body = document.querySelector("body");

    // console.log(target.getAttribute("class"));
    // console.log(target.innerText);

    // switch (target.getAttribute("class")) {
    //     case "home":
    //         console.log("home");
    //         break;

    //     case "sobre":
    //         console.log("sobre");
    //         break;

    //     case "contato":
    //         console.log("contato");
    //         break;
    // }

    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "blue";
            break;

        case "sobre":
            body.style.background = "red";
            break;

        case "contato":
            body.style.background = "green";
            break;
    }
})