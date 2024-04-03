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
