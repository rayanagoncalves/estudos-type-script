let price = 40
//let item = "apple"
let inStore = true

let value // variavel do tipo ANY (ma pratica)
value = 10

let values: number[] = [10, 20, 30]

// Apple, 3, true
let item: [string, number, boolean] = ['apple', 3, true] // TUPLE

// ENUM
enum Role {admin = 1, read = 2, backup = 3}

const user = {
    firstName: 'Rayana',
    age: 24,
    role: Role.admin
}

console.log(user)

// function return
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(20, 10)

// function void
function result(price: number) {
    console.log('The result is: ' + price)
}

result(add(6, 3))