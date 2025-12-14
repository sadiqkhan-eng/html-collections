class Item {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    checkout(){
        return `${this.title} is checked out to ${this.author}`
    }
}

// Inheritance Books Items ----<> Encapsulation
class Book extends Item {
    #available = true;
     // book availability is private

    checkout(){ // polymorphism 
        if (!this.#available)
            return `Book ${this.title} is not available`;
        this.#available = false;
        return `You rented the book ${this.title} by ${this.author} from the library for 14 days`
    }
}

class Magazine extends Item {
    #available = true; 
    // book availability is private

    checkout(){ // polymorphism 
        if (!this.#available)
            return `Magazine ${this.title} is not available`;
        this.#available = false;
        return `You rented the book ${this.title} by ${this.author} from the library for 7 days`
    }
}


// Using the classes
const book1 = new Book('Harry Potter', 'J.K. Rowling');
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien');
const Magazine1 = new Magazine('National Geographic', 'National Geographic Society');

console.log(book1.checkout());
console.log("------------------------------Break Line------------------------------------------------------------");

console.log(book2.checkout());
console.log("------------------------------Break Line------------------------------------------------------------");
console.log(Magazine1.checkout());
