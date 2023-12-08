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
* O some pergunta se apenas 1 dos valores do array equivale a sua condição.
*/

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "Pizza";
});

console.log(existeAlimento);