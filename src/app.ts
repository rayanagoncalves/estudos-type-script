class Client {
    name: string
    private balance: number

    constructor(name: string, balance: number) {
        this.name = name
        this.balance = balance
    }

    addMoney(amount: number) {
        this.balance += amount
    }
}

const firstClient = new Client("Rayana", 500)
firstClient.addMoney(100)
const secondClient = new Client("Maria", 200)

console.log(firstClient)
console.log(secondClient)

interface Item {
    name: string, 
    price: number

    itemPurchased(message: string): void
}

let firstProduct: Item
firstProduct = {
    name: 'Apple',
    price: 2,

    itemPurchased(message: string): void {
        console.log(message + ' ' + this.name)
    }
}

firstProduct.itemPurchased('You just bought a')

// Day 5 - Exercise 1

interface CartItem {
    id: number,
    title: string,
    variantId?: number
} 


function addToCart(item: CartItem): void {
    console.log(`Adding "${item.title}" to cart.`)
}

addToCart({id: 1, title: 'wallet'})

// Day 5 - Exercise 2

interface PersonIf {}

class Person implements PersonIf {
    constructor(public name: string, public age: number) {}
}

const jane = new Person('jane', 20)

console.log(`${jane.name} is ${jane.age} years old.`)

// Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`
    }
}

const mc = new MC()
console.log(mc.greet('show'))
console.log(mc.greet())

// Day 5 - Exercise 4

class Employee1 { constructor(public title: string, public salary: number) {} }

const otherEmployee = new Employee1('Engineer', 10000);

console.log(`The new employee title is ${otherEmployee.title} and they earn $${otherEmployee.salary}`)


// Day 5 - Exercise 4

interface UserSchema {
    id: number,
    name: string
}

class SecondUser implements UserSchema {
    constructor(readonly id: number, public name: string) {}
}

const userDog = new SecondUser(1, 'Dog')

console.log(userDog.id)

userDog.name = 'Harold'

console.log(`User: `, user)

// ReadOnly access modifier

class Movie {
    constructor(
        public readonly id: number, 
        public name: string, 
      //  private _price: number
    ) {}
}

let firstMovie = new Movie(1, 'Dejavu')
console.log(firstMovie)

class HotelRoom {
    [roomNumber: string]: string // Index Signatures
}

let room = new HotelRoom()

room.A201 = 'Andre'
room.A202 = 'Ana'

console.log('Teste')
console.log(room)

class OtherPerson {
    constructor(public firstName: string, public lastName: string, public age: number) {}

    get greet() {
        return this.firstName + ' ' + this.lastName
    }
}

class OtherClient extends OtherPerson {
    override get greet() {
        return 'Dear ' + super.greet
    }
}

class Staff extends OtherPerson {
    override get greet() {
        return 'Hi ' + super.greet
    }
}

let client = new OtherClient('Rayana', 'Cunha', 24)
let staff = new OtherClient('Ana', 'Silva', 30)

console.log(client.greet)
console.log(staff.greet)

// Day 7 - Exercise 1

interface UserExercise {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type PersonExercise = UserExercise | Admin;

const persons: PersonExercise[] = [
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

function logPerson(person: PersonExercise) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// Day 7 - Exercise 2

class Animal {
    constructor(public name: string) {}
    move(meters: number) {
      console.log(`${this.name} moved ${meters}m.`)
    }
  }

  class Snake extends Animal {
    move(meters: number = 5) {
      console.log('Slithering...')
      super.move(meters)
    }
  }

  class Pony extends Animal {
    move(meter: number) {
      console.log('Galloping...')
      super.move(meter)
    }
  }


  const sammy = new Snake("Sammy the Snake")
  sammy.move()

  const pokey = new Pony("Pokey the Pony")
  pokey.move(34)

  // Day 7 - Exercise 3

class Furniture {
    constructor(protected manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(`This is a desk made by ${this.manufacturer}`)
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(`This is a chair made by ${this.manufacturer}`)
    }
  }

  const desk = new Desk()
  desk.kind()
// desk.manufacturer // Deve retornar um erro

  const chair = new Chair()
  chair.kind()
 // chair.manufacturer // Deve retornar um erro

 // Day 7 - Exercise 4

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function(x: number, y: number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));