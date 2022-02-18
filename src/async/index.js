// Async/await hace que nuestro codigo se comporte como asincrona

//Esto es una nueva promesa utilizando Async/await 
const doSomethingAync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}


//Ejecutamos la promesa con la sintaxis adecuada para Async/await esto hace que esperemeos a que la promesa ocurra

const doSomething = async () => {
    const something = await doSomethingAync()
    console.log(something);
}


//Hacemos la funcion asincrona y esperamos a que resulva la promesa
console.log('Before');
doSomething();
console.log('After');

//Asi ejecutamos nuestra promesa con try catch

const anotherFunction = async () => {
    try {
        const something = await doSomethingAync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');