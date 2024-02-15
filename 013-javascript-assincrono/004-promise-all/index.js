const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        if (pedido === "Pizza") {
            return reject(`Não temos o seu pedido: [${pedido}]`);
        }

        setTimeout(() => {
            resolve(`Chegou o seu pedido [${pedido}]`);
        }, 5000)
    })
}

Promise.all([pedido("Arroz"), pedido("carne"), pedido("Pizza")]).then((resPedidos) => {
    console.log(resPedidos[0]);
    console.log(resPedidos[1]);
})
.catch((error) => {
    console.log(error);
})