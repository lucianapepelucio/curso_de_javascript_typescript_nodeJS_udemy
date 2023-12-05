/* O hoisting é como se o javascript por debaixo dos panos
faz com que o resultado seja dado mesmo quando a chamada é
feita antes da função ou variável ser definida.
*/

console.log(soma());

function soma() {
    return 1 + 1;
}

console.log(x);

var x = 10;

// Vai dar erro, pois, o hoisting não funciona com arrow functions
console.log(soma2());

let soma2 = () => {
    return 1 + 1;
};