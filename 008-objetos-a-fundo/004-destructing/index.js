// const Tenis = {
//     tamanho: 45,
//     estoque: true,
//     marcas: [{ nome: "Nike" }, { nome: "Adidas"}],
// };

// const {tamanho, estoque, marcas} = Tenis;

// console.log(tamanho, estoque, marcas);

const Tenis = {
    tamanho: 45,
    estoque: true,
    secret: 123456,
    n: 5,
    link: { a: "a é a", b: { c: "C" } },
};

// const {tamanho, estoque, marcas = "Não possui marca alguma"} = Tenis;
// console.log(tamanho, estoque, marcas);

// const {secret: randomNumber, n: avaliacoes} = Tenis;
// console.log(secret);
// console.log(randomNumber);
// console.log(avaliacoes);

// const { link: { a }, } = Tenis;
// console.log(a);

const { link: { a, b: { c }, }, } = Tenis;
console.log(a);
console.log(c);