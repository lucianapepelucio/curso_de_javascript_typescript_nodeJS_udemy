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
* Se você tiver uma condição, ela vai tratar toda a sua array,
* assim podemos verificar se eles estão ok.
*/

const temRefri = pedidos.every((element) => {
    return element.bebida === "Coca-Cola";
});

console.log(temRefri);