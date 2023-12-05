function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    return "Você passou dados diferentes!";
}

console.log(soma(1, 6));

// Tomar cuidado com o uso de arguments, e ele também não funciona com arrow functions

function subtracao() {
    return arguments;
}

console.log(subtracao(1, 2, 'ABC'));

function subtracao2(num1 = 0, num2 = 0) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }
    return "Você passou dados diferentes!";
}

console.log(subtracao2(1, 2));