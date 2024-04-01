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
// Never Type
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
console.log(generateError('The application crashed', 500));
const secondUser = {
    firstName: 'Ray',
    age: 12
};
