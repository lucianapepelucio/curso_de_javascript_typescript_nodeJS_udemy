const bugNum = () => {
    try {
        const number = "123";
    
        if(number === 123) {
            return "Seu número é 123 - type Number";
        }

        throw new Error("Deu Ruim");
    } catch (error) {
        //throw new Error(error); // para travar a execução
        // throw error; // também trava a execução
        return error;
    }
}

console.log(bugNum());
console.log("Continua executando!");