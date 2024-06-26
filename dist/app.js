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
class OtherPerson {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class OtherClient extends OtherPerson {
    get greet() {
        return 'Dear ' + super.greet;
    }
}
class Staff extends OtherPerson {
    get greet() {
        return 'Hi ' + super.greet;
    }
}
let client = new OtherClient('Rayana', 'Cunha', 24);
let staff = new OtherClient('Ana', 'Silva', 30);
console.log(client.greet);
console.log(staff.greet);
const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut.'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver.'
    }
];
function logPerson(person) {
    let additionalInformation;
    if ('role' in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
// Day 7 - Exercise 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}
class Snake extends Animal {
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
}
class Pony extends Animal {
    move(meter) {
        console.log('Galloping...');
        super.move(meter);
    }
}
const sammy = new Snake("Sammy the Snake");
sammy.move();
const pokey = new Pony("Pokey the Pony");
pokey.move(34);
// Day 7 - Exercise 3
class Furniture {
    constructor(manufacturer = 'IKEA') {
        this.manufacturer = manufacturer;
    }
}
class Desk extends Furniture {
    kind() {
        console.log(`This is a desk made by ${this.manufacturer}`);
    }
}
class Chair extends Furniture {
    kind() {
        console.log(`This is a chair made by ${this.manufacturer}`);
    }
}
const desk = new Desk();
desk.kind();
// desk.manufacturer // Deve retornar um erro
const chair = new Chair();
chair.kind();
// chair.manufacturer // Deve retornar um erro
// Day 7 - Exercise 4
let multiply;
let capitalize;
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log(capitalize(`nifty ${multiply(5, 10)}`));
// Day 7 - Exercise 5
function layEggs(quantity, color) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}
layEggs(10, 'Blue');
//# sourceMappingURL=app.js.map