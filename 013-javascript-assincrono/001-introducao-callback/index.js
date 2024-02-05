// setInterval(() => {
//     returnConsole();
// }, 3000);

// const returnConsole = () => {
//     return console.log("Meu console funcionou!");
// }

// Callback function

const meuCallback = (func) => {
    console.log(func());
}

meuCallback(() => {
    return 1 + 1;
})