"use strict";
// let price = 40
// //let item = "apple"
// let inStore = true
// let value // variavel do tipo ANY (ma pratica)
// value = 10
// let values: number[] = [10, 20, 30]
// // Apple, 3, true
// let item: [string, number, boolean] = ['apple', 3, true] // TUPLE
// // ENUM
// enum Role {admin = 1, read = 2, backup = 3}
// const user = {
//     firstName: 'Rayana',
//     age: 24,
//     role: Role.admin
// }
// console.log(user)
// // function return
// function add(num1: number, num2: number): number {
//     return num1 + num2
// }
// add(20, 10)
// // function void
// function result(price: number) {
//     console.log('The result is: ' + price)
// }
// result(add(6, 3))
// // objects
// const newUser = {
//     firstName: 'Rayana',
//     age: 24, 
//     lastName: 'C'
// }
// newUser.lastName = 'Cunha'
// // Unknown Type
// let itemInput: unknown 
// let itemName: string
// itemInput = 10
// itemInput = 'Apple'
// if(itemInput === 'string') {
//     itemName = itemInput
// }
// // Never Type
// // function generateError(message: string, code: number): never {
// //     throw {
// //         message: message,
// //         errorCode: code
// //     }
// // }
// // console.log(generateError('The application crashed', 500))
// // Alias type
// type Users = {
//     firstName: string
//     age: number 
// }
// const secondUser: Users = {
//     firstName: 'Ray',
//     age: 12
// }
// // Union Type
// function userInput(input1: number | string, input2: number | string) {
//     let result 
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }
// const combineName = userInput('Apple', 'Avocado')
// console.log(combineName)
// const combinePrices = userInput(10, 2)
// console.log(combinePrices)
// // Literal Type
// let productPrice: 10 | 20 | 30
// let productSize: 'S' | 'M' | 'L' 
// productPrice = 30
// productSize = 'L'
// //Intersection
// type User = {
//     firstName: string,
//     age: number
// }
// type JobRole = {
//     id: number,
//     role: string
// }
// type Employee = User & JobRole
// const firstEmployee: Employee = {
//     firstName: 'Ray',
//     age: 24,
//     id: 12, 
//     role: 'Admin'
// }
// Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
