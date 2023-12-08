const pedidos = [
    {
        id: 420,
        nome: "Luciana",
        alimento: "Temaki de Camarão",
        bebida: "Coca-Cola",
    },
    {
        id: 152,
        nome: "Ana",
        alimento: "Empadão de Frango",
        bebida: "Suco de Laranja",
    },
    {
        id: 29, nome: "Lucio", alimento: "sanduiche natural", bebida: "limonada",
    },
    {
        id: 33,
        nome: "Adriana",
        alimento: "Temaki de Salmão",
        bebida: "Coca-Cola",
    },
    {
        id: 55, nome: "Carlos", alimento: "Pizza", bebida: "Milk-Shake",
    },
];

/*
* Ele procura e te retorna apenas o primeiro valor encontrado do array.
*/

const findBebida = pedidos.find((element) => {
    return element.bebida === "Coca-Cola";
});

console.log(findBebida);