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

myArrayObj.forEach((item, index) => {
    console.log(index, item);
});

myArrayObj.forEach((item, index) => {
    if (item.nome === "Ana") {
        return console.log("Mãe, te amo!");
    }
    console.log(index, item.nome);
});