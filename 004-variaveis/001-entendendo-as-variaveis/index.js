// var => Ele é utilizado globalmente (não é mais utilizado)
// let => Ele é gerado dentro de um escopo
// const => Ele é gerado dentro de um escopo, porém, podemos armazenar dados apenas 1 vez

var cachorro = "Snoopy";
console.log(cachorro);

cachorro = "Luna"; // mudando o valor
console.log(cachorro);

let lanche = "Bolo"; // mudando o valor
console.log(lanche);

lanche = "Hamburguer";
console.log(lanche);

const nome = "Luciana";
console.log(nome);

nome = "Ana";
console.log(nome); // Vai dar erro, pois, constante não pode ser mudada
