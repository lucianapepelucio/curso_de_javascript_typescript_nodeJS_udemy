const stringArray = [ "A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort());
console.log(stringArray.reverse());

/*
* sort((a, b) => a - b)
* se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
* se retornar 0, a ordenação de "a" e "b" não mudará.
* se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
*/

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort()); // forma errada
console.log(numberArray.sort((a, b) => a - b)); // ordem crescente
console.log(numberArray.sort((a, b) => b - a)); // ordem decrescente
console.log(numberArray.sort((a, b) => a - b).reverse()); // ordem decrescente

const objArray = [
    {
        nome: "Luciana Pepe",
    },
    {
        nome: "Ana Pepe",
    },
    {
        nome: "Maria Pepe",
    },
    {
        nome: "Lucio Pepe",
    },
    {
        nome: "Adriana Pepe",
    },
    {
        nome: "Snoopy Pepe",
    },
];

console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a, b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());