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