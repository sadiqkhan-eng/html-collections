// Abstraction: Product
class Product {
    constructor(name, price) {
        this.name = name;
        this.#price = price; 
        // Encapsulation (private)
    }

    #price;

    getPrice() {
        return this.#price;
    }

    calculateDiscount() {
        return 0;
    }
}

// Inheritance: Electronics
class Electronics extends Product {
    calculateDiscount() {  
        // Polymorphism
        return this.getPrice() * 0.10;
    }
}

// Inheritance: Clothes
class Clothes extends Product {
    calculateDiscount() {  
        // Polymorphism
        return this.getPrice() * 0.20;
    }
}

// Using the classes
const laptop = new Electronics("Laptop", 100000);
const shirt = new Clothes("Shirt", 2000);

console.log("Laptop Discount:", laptop.calculateDiscount());
console.log("Shirt Discount:", shirt.calculateDiscount());
