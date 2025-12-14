// class myCar {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// ------------------------------------------------------------------------------------------------------------- //

// const myCars = new myCar("Ford", "Mustang", 1969);
// console.log(myCars);

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }


// class Model extends Car {
//     constructor(brand, mod) {
//         // super is used to call the parent constructor
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// class StudentData {
//     constructor(rollno, name, course, batch) {
//         this.rollno = rollno;
//         this.name = name;
//         this.course = course;
//         this.batch = batch
//     }
//     display() {
//         return 'Roll No: ' + this.rollno + ', Name: ' + this.name + ', Course: ' + this.course + ', Batch: ' + this.batch
//     }    
// }

// // adding 2 courses into next class

// class StudentData2 extends StudentData {
//     constructor(rollno, name, course, batch, course2) {
//         super(rollno, name, course, batch);
//         this.course2 = course2;
//     }
//     display() {
//         return 'Roll No: ' + this.rollno + ', Name: ' + this.name + ', Course: ' + this.course + ', Course2: ' + this.course2 + ', Batch: ' + this.batch
//     }
// }

// // let student = new StudentData2(1, "Web & Mobile", "Agentic ai", "Prompting", "front end");
// let student = new StudentData2(1, "Sadiq Khan", "Web & Mobile", 15, "front end");
// console.log(student.display());




// class studentname {
//     constructor(rollno, name, course, batch)
//     {
//         this.rollno = rollno;
//         this.name = name;
//         this.course = course;
//         this.batch = batch;
//     }
//     display() {
//         return 'rollno:' + this.rollno + ', name:' + this.name + ', course:' + this.course + ', batch:' + this.batch
//     }
// }

// class studentname2 extends studentname {
//     constructor(rollno, name, course, batch, course2) {
//         super(rollno, name, course, batch);
//         this.course2 = course2;
//     }
//     display() {
//         return 'rollno:' + this.rollno + ', name:' + this.name + ', course:' + this.course + ', course2:' + this.course2 + ', batch:' + this.batch
//     }
// }
// let student = new studentname2(1, "Sadiq khan", "Web & Mobile", 17, "front end");
// console.log(student.display());


// Encapsulation

// class BankAccount {
//     #balance = 0;
//     deposit(amount) {
//         return this.#balance += amount;
//     }
//     withdraw(amount) {
//        return this.#balance -= amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }

//     fee() {
//         // course free 
//         if (this.#balance >= 1000) {
//             this.#balance -= 100;
//         }
//         else {
//             this.#balance -= 50;
//         }

//     }
// }

// const acc = new BankAccount();
// acc.deposit(5000)
// acc.fee(1000);
// console.log(acc.getBalance());

// polymorphism
 
// class Animal {
//     speak() {
//         console.log("Animal Make Sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog Barks");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat Meows");
//     }
// }

class Birds {
    speak() {
        return "Birds Sings";
    }
}

class Eagle extends Birds {
    speak() {
        return "Eagle Flies";
    } 
}

class Crow extends Birds {
    speak() {
        return "Crow Caws";
    }
}

class Sparrow extends Birds {
    speak() {
        return "Sparrow Chirps";
    }
}

let animal = new Birds();
let eagle = new Eagle();
let crow = new Crow();
let sparrow = new Sparrow();
console.log(animal.speak());
console.log(eagle.speak());
console.log(crow.speak());
console.log(sparrow.speak());


// Complete Zoo Management in oops