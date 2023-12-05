/*
Precisamos mostrar a tabuada  no console de 0 até 10 neste seguinte formato:

multiplicador x número = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
...
multiplicador x 10 = resultado

Obs.: não podemos criar vários console.log(multiplicador x 3 = resultado)
*/

const multiplicador = 7;

for (let i = 0; i <= 10; i++) {
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`);
}