"use strict";

const container = document.querySelector(".container");

// container.after("Olá, Luciana!");
// container.after("<p>Olá, Luciana!</p>");

const newP = document.createElement("p");
newP.innerText = "Olá, Luciana!";
//container.after(newP);

container.before(newP);
container.before("Luciana");
container.before("<p>Luciana</p>");