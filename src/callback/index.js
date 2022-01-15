function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function multiplicar(num1, num2) {
    return num1 * num2;
}

function calc2(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc2(5, 4, multiplicar));

function date(callback) {
    console.log("Fecha de date: " + new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log("Fecha de printDate: " + dateNow);
}

date(printDate);
