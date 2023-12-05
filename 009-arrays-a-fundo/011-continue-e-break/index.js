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
        nome: "Maria 0",
        sobreNome: "Pepe",
    },
    {
        nome: "Maria 1",
        sobreNome: "Pepe",
    },
    {
        nome: "Maria 2",
        sobreNome: "Pepe",
    },
];

// for (let item of myArrayObj) {
//     if (item.nome === "Ana") {
//         console.log("Mãe, te amo!");
//     }
//     console.log(item);
// }

for (let item of myArrayObj) {
    if (item.nome === "Ana") {
        console.log("Mãe, te amo!");
        continue; // não vai para o outro console
    }

    if (item.nome === "Maria 1") {
        console.log ("Pagar a fatura do cartão de crédito");
        break; // não vai para o outro console e nem para o outro objeto
    }
    console.log(item);
}
