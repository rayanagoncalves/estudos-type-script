"use strict";
let price = 40;
//let item = "apple"
let inStore = true;
let value; // variavel do tipo ANY (ma pratica)
value = 10;
let values = [10, 20, 30];
// Apple, 3, true
let item = ['apple', 3, true]; // TUPLE
// ENUM
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Rayana',
    age: 24,
    role: Role.admin
};
console.log(user);
// function return
function add(num1, num2) {
    return num1 + num2;
}
add(20, 10);
// function void
function result(price) {
    console.log('The result is: ' + price);
}
result(add(6, 3));
// objects
const newUser = {
    firstName: 'Rayana',
    age: 24,
    lastName: 'C'
};
newUser.lastName = 'Cunha';
// Unknown Type
let itemInput;
let itemName;
itemInput = 10;
itemInput = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput;
}
const secondUser = {
    firstName: 'Ray',
    age: 12
};
// Union Type
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineName = userInput('Apple', 'Avocado');
console.log(combineName);
const combinePrices = userInput(10, 2);
console.log(combinePrices);
// Literal Type
let productPrice;
let productSize;
productPrice = 30;
productSize = 'L';
const firstEmployee = {
    firstName: 'Ray',
    age: 24,
    id: 12,
    role: 'Admin'
};
// Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
// Day 3 - Exercise 2
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie`);
// Day 3 - Exercise 3
let isDouglas = true;
console.log(`${isDouglas ? 'Oh, hi Douglas' : 'Who are you?'}`);
// Day 3 - Exercise 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
// Day 3 - Exercise 5
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
console.log('Hello World');
