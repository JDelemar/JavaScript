// make module accessible outside of this file
module.exports = {
    sayHello,
    addNumbers
}

function sayHello() {
    return 'Hello';
}

function addNumbers(val1, val2) {
    return val1 + val2;
}

console.log(sayHello());
console.log(addNumbers(25,17));