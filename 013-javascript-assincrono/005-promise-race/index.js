const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Promise 1");
    }, 3000) 
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Promise 2");
    }, 4000) 
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject("Promise 3");
    }, 1000) 
})

// promise1.then((res) => {
//     console.log(res);
// })

// promise2.then((res) => {
//     console.log(res);
// })

// promise3.then((res) => {
//     console.log(res);
// })

// Retorna o resultado da primeira promise resolvida
Promise.race([promise1, promise2, promise3]).then((res) => {
    console.log(1, res);
})
.catch((err) => {
    console.log(2, err);
})