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

pedido("Pizza").then((resPedido) => {
    console.log(resPedido);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Deu bom todo o processo do pedido!");
})