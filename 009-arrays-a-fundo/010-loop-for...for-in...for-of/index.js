const myArray = [1, 2, 3, 4, 5, 6];

const myArrayObj = [
    {
        nome: "Luciana",
        sobreNome: "Pepe",
    },
    {
        nome: "Ana",
        sobreNome: "Pepe",
    },
    {
        nome: "Maria",
        sobreNome: "Pepe",
    },
];

// for ([inicialização]; [condição]; [expressão final])

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let i = 0; i < myArrayObj.length; i++) {
    console.log(myArrayObj[i]);
}

for (let i = 0; i < myArrayObj.length; i++) {
    console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
}


// for of

for (let item of myArrayObj) {
    console.log(item);
}

for (let item of myArrayObj) {
    console.log(item.nome, item.sobreNome);
}

for (let item of myArray) {
    console.log(item);
}


// for in (ele retorna as propriedades e não o valor)

const obj = { nome: "Luciana", sobreNome: "Pepe" };

for (let item in obj) {
    console.log(item);
}

for (let item in obj) {
    console.log(obj[item]);
} // para retornar o valor dos items

for (let item in myArrayObj) {
    console.log(item);
} // não é legal de se trabalhar com arrays