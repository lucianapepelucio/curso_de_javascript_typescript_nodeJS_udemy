/*
Precisamos mostrar quantas letras repetidas aparecem em uma palavra
Ex.: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1}
*/

//const palavra = "AbacatE".toLowerCase();
const palavra = "Luciana Pepe".toLowerCase().replace(" ", "");
//const palavra = "Luciana Pepe Lucio".toLowerCase().replaceAll(" ", "");

let letras = {};

for (let i = 0; i < palavra.length; i++) {
    if (letras[palavra[i]]) {
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1;
    }
}

console.log(letras);



