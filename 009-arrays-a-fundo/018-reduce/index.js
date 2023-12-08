const pedidos = [
    {
        id: 420,
        nome: "Luciana",
        alimento: "Temaki de Camarão",
        bebida: "Coca-Cola",
        preco: 50,
    },
    {
        id: 152,
        nome: "Ana",
        alimento: "Empadão de Frango",
        bebida: "Suco de Laranja",
        preco: 30,
    },
    {
        id: 29, nome: "Lucio", alimento: "sanduiche natural", bebida: "limonada", preco: 20,
    },
    {
        id: 33,
        nome: "Adriana",
        alimento: "Temaki de Salmão",
        bebida: "Coca-Cola",
        preco: 55,
    },
    {
        id: 55, nome: "Carlos", alimento: "Pizza", bebida: "Milk-Shake", preco: 35,
    },
];

/*
* A ideia dele é pegar todos os valores de um array e condensá-los em um só. 
*/

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancete);