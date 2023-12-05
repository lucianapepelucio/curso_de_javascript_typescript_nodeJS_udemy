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
 * O método Map além de iterar todo o Array, ele é muito bom para
 * editar o iterado (resumindo os dados do Array)
 */

pedidos.map((element, index) => {
    if ( element.id === 29 && element.alimento === "sanduiche natural") {
        return (element.alimento = "kibe");
    }
});

console.log(pedidos);
