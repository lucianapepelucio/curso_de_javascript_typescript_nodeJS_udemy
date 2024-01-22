const bugNum = () => {
    const number = "123";
    
    debugger;
    console.log(number === 123);
    if(number === 123) {
        return "Seu número é 123 - type Number";
    }
    console.log(number);

    return "Deu Ruim";
}

console.log(bugNum());