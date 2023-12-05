// 1 - Nome da Função

function nomeFunc() {
    return "Luciana Pepe";
};

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Luciana";
};

console.log(nomeFuncArrow());

// 2 - Retorno

const nomeFuncArrowReturn = () => "Luciana Pepe Lúcio";

console.log(nomeFuncArrowReturn());

// 3 - Não tem Hoisting

// console.log(nomeFuncArrowHoisting());

// const nomeFuncArrowHoisting = () => {
//     return "a b c";
// };

// 4 - Arguments

// Não funciona em arrow functions
// const nomeFuncArrowArguments = () => {
//     return arguments;
// };

// console.log(nomeFuncArrowArguments());

function nomeFuncArguments() {
    return arguments;
}

console.log(nomeFuncArguments("Luciana"));

// Quando tem apenas um argumento não é necessário o uso dos parênteses
const nomeFuncArrowParams = params => params;

// 5 - Não pode ser invocada com New

function novaFunc() {
    return console.log(1234);
}

// new novaFunc();

// const novaFuncArrow = () => {
//     return console.log(12345);
// }

// new novaFuncArrow();

/* 6 - Contexto
Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

Isso significa que arrow functions herdam o contexto local de onde foi declarado,
enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
no momento da chamada.

Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
como o contexto global, que no caso dos navegadores é window.
*/

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$ 25"},
        { nome: "x-egg", preco: "R$ 30"},
    ],

    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            { nome: "x-salada", preco: "R$ 25"},
            { nome: "x-egg", preco: "R$ 30"},
        ];
        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000);    // O bind não funciona com arrow functions, pois, o arrow function só pega o contexto interno dele
    },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

/*
7 - Constructor
Arrow functions não podem ser constructors, então, não é possível
usar o operador new com a mesma.
*/

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a = new newFunc("Luciana");
console.log(a.nome);
