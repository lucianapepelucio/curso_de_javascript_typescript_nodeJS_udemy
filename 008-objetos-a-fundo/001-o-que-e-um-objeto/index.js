let Tenis = {
    tipo: "Tenis de Corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObjetos: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "etc",
        },
    ],
    getMarcaArrayValores: function (param) {
        return this.marcaArrayValores[param];
    },
    getMarcaArrayObjetos: function (param) {
        return this.marcaArrayObjetos[param].nome;
    },
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);