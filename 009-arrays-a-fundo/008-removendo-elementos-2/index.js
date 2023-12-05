/*
slice = pega os dados dentro de um range sem quebrar o array
splice = remove os dados do array dentro de um range
*/

let arr = [
    { nome: "Luciana", tel: "(11) 1111-1111" },
    { nome: "Ana", tel: "(11) 1111-1111" },
    { nome: "Maria", tel: "(11) 1111-1111" },
    { nome: "Lucio", tel: "(11) 1111-1111" },
    { nome: "Adriana", tel: "(11) 1111-1111" },
];

console.table(arr);

// const newArray = arr.slice(0, 3);
// console.table(newArray);
// console.table(arr);

// const newArray2 = arr.slice(2, 4);
// console.table(newArray2);

// arr.splice(0, 3);
// console.table(arr);

console.log(arr.splice(4, 1)); // somente o índice 4