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
