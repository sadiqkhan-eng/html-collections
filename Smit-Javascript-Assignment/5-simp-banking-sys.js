// Abstraction: 
// Base class
class Account {
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance; // Encapsulation
    }

    #balance;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) return "Insufficient funds.";
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }

    calculateInterest() {
        return 0;
    }
}

// Inheritance: Savings Account
class SavingsAccount extends Account {
    calculateInterest() {  
        // Polymorphism
        return this.getBalance() * 0.07;
    }
}

// Inheritance: Current Account
class CurrentAccount extends Account {
    calculateInterest() {  
        // Polymorphism
        return 0;
    }
}

// Using the classes
const sa = new SavingsAccount("Sadiq", 10000);
console.log("Savings Interest:", sa.calculateInterest());

const ca = new CurrentAccount("Ali", 5000);
console.log("Current Interest:", ca.calculateInterest());
