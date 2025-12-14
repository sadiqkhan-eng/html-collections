// Abstraction
class Vehicle {
    constructor(model, price) {
        this.model = model;
        this.#price = price;
    }

    #price; // Encapsulation

    getPrice() {
        return this.#price;
    }

    rent() {
        return "Default rental price applied.";
    }
}

// Inheritance: Car
class Car extends Vehicle {
    rent() {   // Polymorphism
        return `Car rent: ${this.getPrice()} + 5000 security deposit.`;
    }
}

// Inheritance: Bike
class Bike extends Vehicle {
    rent() {   // Polymorphism
        return `Bike rent: ${this.getPrice()}`;
    }
}

// Inheritance: Truck
class Truck extends Vehicle {
    rent() {   // Polymorphism
        return `Truck rent: ${this.getPrice()} per ton load.`;
    }
}

// Using the classes
console.log(new Car("Civic", 5000).rent());
console.log(new Bike("Yamaha", 2000).rent());
console.log(new Truck("Hino", 10000).rent());
