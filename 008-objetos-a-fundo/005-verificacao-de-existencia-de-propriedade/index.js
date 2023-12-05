const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: { a: "a é a", b: { c: "C" } },
};

// hasOwnProperty | propertyName in Tenis

// if (Tenis.hasOwnProperty("tamanho")) {
//     console.log("Essa propriedade existe");
// } else {
//     console.log ("Essa propriedade não existe");
// }

console.log(Tenis.hasOwnProperty("tamanho"));
console.log("secret" in Tenis);