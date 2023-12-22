"use strict";

const container = document.querySelector(".container");

// container.append("Olá, Luciana!");
// container.append("<p>Olá, Luciana!</p>");

//container.appendChild("Olá, Luciana!"); // não retorna nada
//container.appendChild("<p></p>"); // não retorna nada

const newDiv = document.createElement("div");
newDiv.innerText = "Olá, Luciana!";
container.appendChild(newDiv);

