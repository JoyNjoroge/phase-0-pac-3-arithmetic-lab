let number = 20;

function add() {
    return number + 5;
}

console.log(add());


function subtract() {
    return number - 5;
}

console.log(subtract());


function multiply() {
    return number * 5;
}

console.log(multiply(number));


function divide() {
    return number / 5;
}

console.log(divide());

function add(a, b) {
    return a + b;
}
console.log(add(2, 3))

function subtract(a, b) {
    return a - b;
}
console.log(subtract(2, 3))

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3))

function divide(a, b) {
    return a / b;
}
console.log(divide(2, 3))

function increment(number) {
    return (++number);
}
function decrement(number) {
    return (--number);
}

function makeInt(n) {
    return parseInt(n, 10);
  }
function preserveDecimal(n) {
    return parseFloat(n);
  }
  