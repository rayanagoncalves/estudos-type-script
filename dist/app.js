"use strict";
class Client {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const firstClient = new Client("Rayana", 500);
firstClient.addMoney(100);
const secondClient = new Client("Maria", 200);
console.log(firstClient);
console.log(secondClient);
let firstProduct;
firstProduct = {
    name: 'Apple',
    price: 2,
    itemPurchased(message) {
        console.log(message + ' ' + this.name);
    }
};
firstProduct.itemPurchased('You just bought a');
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: 'wallet' });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('jane', 20);
console.log(`${jane.name} is ${jane.age} years old.`);
// Day 5 - Exercise 3
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));
console.log(mc.greet());
// Day 5 - Exercise 4
class Employee1 {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const otherEmployee = new Employee1('Engineer', 10000);
console.log(`The new employee title is ${otherEmployee.title} and they earn $${otherEmployee.salary}`);
class SecondUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const userDog = new SecondUser(1, 'Dog');
console.log(userDog.id);
userDog.name = 'Harold';
console.log(`User: `, user);
// ReadOnly access modifier
class Movie {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let firstMovie = new Movie(1, 'Dejavu');
console.log(firstMovie);
class HotelRoom {
}
let room = new HotelRoom();
room.A201 = 'Andre';
room.A202 = 'Ana';
console.log('Teste');
console.log(room);
//# sourceMappingURL=app.js.map