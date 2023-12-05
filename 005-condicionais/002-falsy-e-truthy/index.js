// Falsy = false, 0, "", NaN, undefined e null
// Truthy = todos os outros diferentes do [falsy]

if ("Luciana" * 10) {          // É um NaN
    console.log("Bom Dia!");
} else {
    console.log("Boa Noite!");
}

if (!null) {
    console.log("Falsy or False!");
}

if (1 + 1) {
    console.log("True");
}

/*
false || true = true
false || 'Rafael' = 'Rafael'
false || 1 = 1
false || 1 || 3 = 1 (avalia apenas a primeira comparação)
*/